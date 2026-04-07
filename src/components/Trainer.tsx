"use client";

import {
  Check,
  ChevronRight,
  Copy,
  Flame,
  Keyboard,
  Layers,
  MessageSquare,
  Moon,
  RotateCcw,
  Sparkles,
  Sun,
} from "lucide-react";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { VOCABULARY } from "@/data/vocabulary";
import type { VocabEntry } from "@/lib/types";
import { loadDaily, loadStreak, saveDaily, touchStreak } from "@/lib/sessionStats";
import type { DailyStats } from "@/lib/sessionStats";
import { translationMatches } from "@/lib/text-match";
import { readTheme, toggleTheme, type Theme } from "@/lib/theme";

type Mode = "cards" | "type" | "sentence";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const modes: {
  id: Mode;
  label: string;
  hint: string;
  Icon: typeof Layers;
}[] = [
  { id: "cards", label: "Cards", hint: "Flip sides · Space to flip", Icon: Layers },
  { id: "type", label: "Type", hint: "EN ↔ DE · Enter to check", Icon: Keyboard },
  { id: "sentence", label: "Sentence", hint: "German prompt → English", Icon: MessageSquare },
];

function ProgressRing({ progress, label }: { progress: number; label: string }) {
  const r = 38;
  const c = 2 * Math.PI * r;
  const p = Math.min(1, Math.max(0, progress));
  const dash = c * (1 - p);
  return (
    <div className="relative flex size-[5.25rem] shrink-0 items-center justify-center" aria-hidden>
      <svg className="size-full -rotate-90" viewBox="0 0 88 88">
        <circle
          cx="44"
          cy="44"
          r={r}
          fill="none"
          className="stroke-zinc-200/90 dark:stroke-zinc-700/90"
          strokeWidth="6"
        />
        <circle
          cx="44"
          cy="44"
          r={r}
          fill="none"
          className="stroke-teal-500 transition-[stroke-dashoffset] duration-500 dark:stroke-teal-400"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={dash}
        />
      </svg>
      <span className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
          Deck
        </span>
        <span className="text-sm font-bold tabular-nums text-zinc-900 dark:text-zinc-50">{label}</span>
      </span>
    </div>
  );
}

export function Trainer() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mode, setMode] = useState<Mode>("cards");
  const [order, setOrder] = useState<VocabEntry[]>(() => [...VOCABULARY]);
  const [i, setI] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [reverse, setReverse] = useState(false);
  const [typeDir, setTypeDir] = useState<"en-de" | "de-en">("en-de");
  const [typed, setTyped] = useState("");
  const [typeFeedback, setTypeFeedback] = useState<"idle" | "ok" | "bad">("idle");
  const [sentenceEn, setSentenceEn] = useState("");
  const [sentenceFeedback, setSentenceFeedback] = useState<"idle" | "ok" | "bad">("idle");
  const [showSentenceAnswer, setShowSentenceAnswer] = useState(false);
  const [daily, setDaily] = useState<DailyStats>(() => ({
    date: "",
    itemsStudied: 0,
    correct: 0,
    wrong: 0,
  }));
  const [streak, setStreak] = useState(0);
  const [copied, setCopied] = useState(false);

  useLayoutEffect(() => {
    setOrder(shuffle([...VOCABULARY]));
  }, []);

  useEffect(() => {
    setTheme(readTheme());
    setDaily(loadDaily());
    setStreak(loadStreak().count);
  }, []);

  const entry = order[i] ?? VOCABULARY[0];

  useEffect(() => {
    setFlipped(false);
    setTyped("");
    setTypeFeedback("idle");
    setSentenceEn("");
    setSentenceFeedback("idle");
    setShowSentenceAnswer(false);
  }, [mode, i]);

  useEffect(() => {
    setFlipped(false);
  }, [reverse]);

  const recordExposure = useCallback(() => {
    const s = touchStreak();
    setStreak(s.count);
    setDaily((d) => {
      const n = { ...d, itemsStudied: d.itemsStudied + 1 };
      saveDaily(n);
      return n;
    });
  }, []);

  const recordGrade = useCallback((ok: boolean) => {
    const s = touchStreak();
    setStreak(s.count);
    setDaily((d) => {
      const n = {
        ...d,
        itemsStudied: d.itemsStudied + 1,
        correct: d.correct + (ok ? 1 : 0),
        wrong: d.wrong + (ok ? 0 : 1),
      };
      saveDaily(n);
      return n;
    });
  }, []);

  const next = useCallback(() => {
    recordExposure();
    setI((x) => (x + 1 >= order.length ? 0 : x + 1));
  }, [recordExposure, order.length]);

  const reshuffle = () => {
    setOrder(shuffle([...VOCABULARY]));
    setI(0);
  };

  const onTheme = () => {
    setTheme(toggleTheme());
  };

  const front = reverse ? entry.de : entry.en;
  const back = reverse ? entry.en : entry.de;

  const checkType = (e: React.FormEvent) => {
    e.preventDefault();
    const expected = typeDir === "en-de" ? entry.de : entry.en;
    const ok = translationMatches(typed, expected);
    recordGrade(ok);
    setTypeFeedback(ok ? "ok" : "bad");
  };

  const answerEn =
    entry.sentence.modelEnglish ??
    entry.sentence.example.replace(/\{\{w\}\}/g, entry.en);

  const checkSentence = (e: React.FormEvent) => {
    e.preventDefault();
    const ok = translationMatches(sentenceEn, answerEn);
    recordGrade(ok);
    setSentenceFeedback(ok ? "ok" : "bad");
  };

  const copyAnswer = async () => {
    try {
      await navigator.clipboard.writeText(answerEn);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  const deckProgress = order.length ? (i + 1) / order.length : 0;
  const deckLabel = `${i + 1}/${order.length}`;

  const accuracy =
    daily.correct + daily.wrong > 0
      ? Math.round((100 * daily.correct) / (daily.correct + daily.wrong))
      : null;

  useEffect(() => {
    if (mode !== "cards") return;
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      const tag = t?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || t?.isContentEditable) return;
      if (e.code === "Space") {
        e.preventDefault();
        setFlipped((f) => !f);
      }
      if (e.key === "ArrowRight" || e.key === "n" || e.key === "N") {
        if (e.metaKey || e.ctrlKey || e.altKey) return;
        e.preventDefault();
        next();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mode, next]);

  const panelBase =
    "rounded-[1.35rem] border border-zinc-200/80 bg-white/75 p-5 shadow-[0_8px_32px_-12px_rgb(0_0_0_/_0.12)] backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-900/45 dark:shadow-[0_12px_40px_-16px_rgb(0_0_0_/_0.45)] sm:p-6";

  const panelSuccess =
    typeFeedback === "ok" || sentenceFeedback === "ok" ? "success-flash ring-1 ring-emerald-500/20 dark:ring-emerald-400/15" : "";

  const field =
    "w-full min-h-12 rounded-2xl border border-zinc-200/90 bg-white/90 px-4 py-3 text-base text-zinc-900 shadow-sm outline-none transition placeholder:text-zinc-400 focus:border-teal-500/60 focus:ring-4 focus:ring-teal-500/12 dark:border-zinc-700/90 dark:bg-zinc-950/60 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-teal-400/50 dark:focus:ring-teal-400/10 sm:text-sm";

  const textareaClass = `${field} min-h-[11rem] resize-y leading-relaxed sm:min-h-[10rem]`;

  const btnPrimary =
    "inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-2xl bg-zinc-900 px-5 text-base font-semibold text-white shadow-md transition active:scale-[0.98] sm:flex-none sm:text-sm dark:bg-teal-500 dark:text-zinc-950 dark:shadow-teal-900/25 dark:hover:bg-teal-400";

  const btnSecondary =
    "inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-2xl border border-zinc-200/90 bg-white/70 px-5 text-base font-semibold text-zinc-800 shadow-sm transition active:scale-[0.98] sm:flex-none sm:text-sm dark:border-zinc-700/80 dark:bg-zinc-900/40 dark:text-zinc-100 dark:hover:bg-zinc-800/65";

  const skipItem = useCallback(() => {
    recordExposure();
    setI((x) => (x + 1 >= order.length ? 0 : x + 1));
  }, [recordExposure, order.length]);

  return (
    <div className="flex flex-col gap-6 sm:gap-8">
      {/* Session strip */}
      <section className="rounded-[1.35rem] border border-zinc-200/70 bg-white/60 p-4 shadow-sm backdrop-blur-xl dark:border-zinc-800/70 dark:bg-zinc-900/40 sm:p-5">
        <div className="flex flex-wrap items-center gap-4">
          <ProgressRing progress={deckProgress} label={deckLabel} />
          <div className="min-w-0 flex-1 space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              <Sparkles className="size-3.5 text-teal-600 dark:text-teal-400" strokeWidth={2} />
              Today
            </div>
            <div className="grid grid-cols-3 gap-2 text-center sm:gap-3">
              <div className="rounded-xl border border-zinc-200/80 bg-white/80 px-2 py-2 dark:border-zinc-700/70 dark:bg-zinc-950/40">
                <p className="text-lg font-bold tabular-nums text-zinc-900 dark:text-zinc-50">{daily.itemsStudied}</p>
                <p className="text-[10px] font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-500">Reviews</p>
              </div>
              <div className="rounded-xl border border-zinc-200/80 bg-white/80 px-2 py-2 dark:border-zinc-700/70 dark:bg-zinc-950/40">
                <p className="text-lg font-bold tabular-nums text-zinc-900 dark:text-zinc-50">
                  {accuracy === null ? "—" : `${accuracy}%`}
                </p>
                <p className="text-[10px] font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-500">Accuracy</p>
              </div>
              <div className="rounded-xl border border-zinc-200/80 bg-white/80 px-2 py-2 dark:border-zinc-700/70 dark:bg-zinc-950/40">
                <p className="flex items-center justify-center gap-1 text-lg font-bold tabular-nums text-zinc-900 dark:text-zinc-50">
                  <Flame className="size-4 text-orange-500 dark:text-orange-400" strokeWidth={2} />
                  {streak}
                </p>
                <p className="text-[10px] font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-500">Streak</p>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-3 text-center text-[11px] leading-relaxed text-zinc-500 dark:text-zinc-500">
          Cards: <kbd className="rounded-md border border-zinc-300/80 bg-zinc-100/80 px-1.5 py-0.5 font-mono text-[10px] dark:border-zinc-600 dark:bg-zinc-800">Space</kbd> flip ·{" "}
          <kbd className="rounded-md border border-zinc-300/80 bg-zinc-100/80 px-1.5 py-0.5 font-mono text-[10px] dark:border-zinc-600 dark:bg-zinc-800">→</kbd> or{" "}
          <kbd className="rounded-md border border-zinc-300/80 bg-zinc-100/80 px-1.5 py-0.5 font-mono text-[10px] dark:border-zinc-600 dark:bg-zinc-800">N</kbd> next
        </p>
      </section>

      <div>
        <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
          <span className="inline-block size-1.5 rounded-full bg-teal-500 dark:bg-teal-400" />
          Mode
        </p>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-3">
          {modes.map((m) => {
            const on = mode === m.id;
            const Icon = m.Icon;
            return (
              <button
                key={m.id}
                type="button"
                onClick={() => setMode(m.id)}
                className={[
                  "flex min-h-[4rem] w-full flex-row items-center gap-3 rounded-2xl border px-3 py-3 text-left transition sm:min-h-0 sm:flex-col sm:items-center sm:justify-center sm:px-2 sm:py-3.5",
                  on
                    ? "border-teal-500/45 bg-teal-500 text-white shadow-lg shadow-teal-900/20 ring-2 ring-teal-400/25 dark:border-teal-400/35 dark:bg-teal-500 dark:text-zinc-950 dark:shadow-teal-950/35 dark:ring-teal-300/20"
                    : "border-zinc-200/80 bg-white/60 text-zinc-700 active:bg-zinc-100/90 dark:border-zinc-700/80 dark:bg-zinc-900/35 dark:text-zinc-300 dark:active:bg-zinc-800/55",
                ].join(" ")}
              >
                <span
                  className={[
                    "flex size-10 shrink-0 items-center justify-center rounded-xl border sm:size-9",
                    on
                      ? "border-white/25 bg-white/15 dark:border-zinc-900/20 dark:bg-zinc-950/10"
                      : "border-zinc-200/80 bg-zinc-50 dark:border-zinc-600/60 dark:bg-zinc-800/50",
                  ].join(" ")}
                >
                  <Icon className="size-5 sm:size-[1.125rem]" strokeWidth={2} />
                </span>
                <span className="min-w-0 flex-1 sm:flex-none sm:text-center">
                  <span className="block text-sm font-semibold sm:text-[0.8125rem]">{m.label}</span>
                  <span
                    className={[
                      "mt-0.5 block text-[11px] font-medium leading-snug sm:text-[10px]",
                      on ? "text-white/90 dark:text-zinc-900/75" : "text-zinc-500 dark:text-zinc-500",
                    ].join(" ")}
                  >
                    {m.hint}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {mode === "cards" && (
        <section className={`flex flex-col gap-4 ${panelBase}`}>
          <label className="flex min-h-11 cursor-pointer items-center gap-3 rounded-xl border border-zinc-200/60 bg-zinc-50/80 px-3 py-2 text-sm text-zinc-600 dark:border-zinc-700/60 dark:bg-zinc-950/40 dark:text-zinc-400">
            <input
              type="checkbox"
              checked={reverse}
              onChange={(e) => setReverse(e.target.checked)}
              className="size-5 shrink-0 rounded-md border-zinc-300 text-teal-600 focus:ring-teal-500/40 dark:border-zinc-600 dark:bg-zinc-900"
            />
            German on the front
          </label>

          <button
            type="button"
            data-flip-card
            onClick={() => setFlipped((f) => !f)}
            className="perspective-card group w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-950"
          >
            <div className={`flip-track relative min-h-[min(52dvh,22rem)] w-full sm:min-h-[15rem] ${flipped ? "is-flipped" : ""}`}>
              <div className="flip-face absolute inset-0 flex flex-col justify-center overflow-hidden rounded-2xl border border-zinc-200/80 bg-gradient-to-br from-white via-zinc-50/90 to-teal-50/30 p-6 shadow-inner dark:border-zinc-700/80 dark:from-zinc-950 dark:via-zinc-900/90 dark:to-teal-950/20">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                  {reverse ? "German" : "English"}
                </p>
                <p className="mt-3 text-pretty text-[clamp(1.15rem,4.2vw,1.55rem)] font-semibold leading-snug tracking-tight text-zinc-900 dark:text-zinc-50">
                  {front}
                </p>
                <p className="mt-auto flex items-center gap-1.5 pt-6 text-sm font-medium text-teal-600 dark:text-teal-400">
                  <ChevronRight className="size-4 opacity-70 transition group-hover:translate-x-0.5" />
                  Tap or Space to flip
                </p>
              </div>
              <div className="flip-face flip-face-back absolute inset-0 flex flex-col justify-center overflow-hidden rounded-2xl border border-teal-500/25 bg-gradient-to-br from-teal-50/90 via-white to-zinc-50/80 p-6 shadow-inner dark:border-teal-500/20 dark:from-teal-950/40 dark:via-zinc-900 dark:to-zinc-950/80">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
                  {reverse ? "English" : "German"}
                </p>
                <p className="mt-3 text-pretty text-[clamp(1.15rem,4.2vw,1.55rem)] font-semibold leading-snug tracking-tight text-zinc-900 dark:text-zinc-50">
                  {back}
                </p>
                <p className="mt-auto pt-6 text-sm font-medium text-zinc-500 dark:text-zinc-400">Tap or Space to flip back</p>
              </div>
            </div>
          </button>

          <div className="grid grid-cols-1 gap-2 sm:flex sm:flex-wrap">
            <button type="button" onClick={next} className={btnPrimary}>
              Next word
              <ChevronRight className="size-4 opacity-90" strokeWidth={2.5} />
            </button>
            <button type="button" onClick={reshuffle} className={btnSecondary}>
              <RotateCcw className="size-4 opacity-80" strokeWidth={2} />
              Shuffle deck
            </button>
          </div>
        </section>
      )}

      {mode === "type" && (
        <section className={`flex flex-col gap-5 ${panelBase} ${panelSuccess}`}>
          <div>
            <label
              htmlFor="typedir"
              className="mb-2 block text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400"
            >
              Direction
            </label>
            <select
              id="typedir"
              value={typeDir}
              onChange={(e) => setTypeDir(e.target.value as "en-de" | "de-en")}
              className={field}
            >
              <option value="en-de">English → type German</option>
              <option value="de-en">German → type English</option>
            </select>
          </div>

          <p className="text-pretty text-[clamp(1.1rem,3.8vw,1.35rem)] font-semibold leading-snug text-zinc-900 dark:text-zinc-50">
            {typeDir === "en-de" ? entry.en : entry.de}
          </p>

          <form onSubmit={checkType} className="flex flex-col gap-3">
            <input
              value={typed}
              onChange={(e) => {
                setTyped(e.target.value);
                setTypeFeedback("idle");
              }}
              className={field}
              placeholder={typeDir === "en-de" ? "Type German…" : "Type English…"}
              autoComplete="off"
              enterKeyHint="done"
            />
            <div className="grid grid-cols-1 gap-2 sm:flex sm:flex-wrap">
              <button type="submit" className={btnPrimary}>
                <Check className="size-4" strokeWidth={2.5} />
                Check
              </button>
              <button type="button" onClick={skipItem} className={btnSecondary}>
                Skip
              </button>
            </div>
          </form>

          {typeFeedback === "ok" && (
            <p className="flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
              <span className="flex size-6 items-center justify-center rounded-full bg-emerald-500/15">
                <Check className="size-3.5" strokeWidth={3} />
              </span>
              Nice — that works.
            </p>
          )}
          {typeFeedback === "bad" && (
            <p className="text-sm leading-relaxed text-red-600 dark:text-red-400">
              Try something like:{" "}
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                {typeDir === "en-de" ? entry.de : entry.en}
              </span>
            </p>
          )}
        </section>
      )}

      {mode === "sentence" && (
        <section className={`flex flex-col gap-5 ${panelBase} ${panelSuccess}`}>
          <div className="rounded-2xl border border-teal-500/25 bg-gradient-to-br from-teal-500/[0.08] to-transparent p-4 dark:border-teal-400/20 dark:from-teal-400/[0.1]">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
              Read in German
            </p>
            <p className="mt-2 text-pretty text-[clamp(1rem,3.5vw,1.2rem)] font-medium leading-relaxed text-zinc-900 dark:text-zinc-100">
              {entry.sentence.modelGerman}
            </p>
          </div>

          <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Write the sentence in <span className="font-semibold text-zinc-900 dark:text-zinc-100">English</span>.
            Include this phrase naturally if you can:{" "}
            <span className="rounded-lg border border-zinc-200/80 bg-zinc-100/90 px-2 py-0.5 font-medium text-zinc-900 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100">
              {entry.en}
            </span>
          </p>

          <form onSubmit={checkSentence} className="flex flex-col gap-3">
            <textarea
              value={sentenceEn}
              onChange={(e) => {
                setSentenceEn(e.target.value);
                setSentenceFeedback("idle");
              }}
              className={textareaClass}
              placeholder="Write your English sentence…"
              autoComplete="off"
            />
            <div className="grid grid-cols-1 gap-2 sm:flex sm:flex-wrap">
              <button type="submit" className={btnPrimary}>
                <Check className="size-4" strokeWidth={2.5} />
                Check
              </button>
              <button type="button" onClick={() => setShowSentenceAnswer((s) => !s)} className={btnSecondary}>
                {showSentenceAnswer ? "Hide answer" : "Show answer"}
              </button>
              <button type="button" onClick={skipItem} className={btnSecondary}>
                Next
              </button>
            </div>
          </form>

          {showSentenceAnswer && (
            <div className="relative rounded-2xl border border-zinc-200/80 bg-zinc-50/90 p-4 text-sm leading-relaxed text-zinc-800 dark:border-zinc-700/80 dark:bg-zinc-950/55 dark:text-zinc-200">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <span className="font-semibold text-zinc-900 dark:text-zinc-100">Model English</span>
                <button
                  type="button"
                  onClick={copyAnswer}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-zinc-200/90 bg-white/90 px-3 py-1.5 text-xs font-semibold text-zinc-700 shadow-sm transition hover:bg-zinc-50 dark:border-zinc-600 dark:bg-zinc-900/80 dark:text-zinc-200 dark:hover:bg-zinc-800"
                >
                  <Copy className="size-3.5" strokeWidth={2} />
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>
              <p className="mt-2 text-pretty">{answerEn}</p>
              {copied && (
                <p className="copy-toast mt-2 text-xs font-medium text-teal-600 dark:text-teal-400">Pasted-ready for your notes.</p>
              )}
            </div>
          )}

          {sentenceFeedback === "ok" && (
            <p className="flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
              <span className="flex size-6 items-center justify-center rounded-full bg-emerald-500/15">
                <Check className="size-3.5" strokeWidth={3} />
              </span>
              Close enough — compare with the model if you want.
            </p>
          )}
          {sentenceFeedback === "bad" && (
            <p className="text-sm leading-relaxed text-amber-700 dark:text-amber-400/90">
              Not quite — open <span className="font-semibold">Show answer</span> and adjust your wording.
            </p>
          )}
        </section>
      )}

      <footer className="flex flex-col items-center gap-4 border-t border-zinc-200/70 pt-6 dark:border-zinc-800/70">
        <button
          type="button"
          onClick={onTheme}
          className="inline-flex min-h-11 items-center gap-2 rounded-2xl border border-zinc-200/80 bg-white/60 px-4 text-sm font-semibold text-zinc-600 backdrop-blur-sm transition hover:border-teal-500/30 hover:text-teal-700 dark:border-zinc-700/80 dark:bg-zinc-900/40 dark:text-zinc-300 dark:hover:border-teal-400/25 dark:hover:text-teal-300"
        >
          {theme === "dark" ? <Sun className="size-4" strokeWidth={2} /> : <Moon className="size-4" strokeWidth={2} />}
          {theme === "dark" ? "Light mode" : "Dark mode"}
        </button>
      </footer>
    </div>
  );
}
