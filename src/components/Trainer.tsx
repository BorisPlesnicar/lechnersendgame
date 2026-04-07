"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { VOCABULARY } from "@/data/vocabulary";
import type { VocabEntry } from "@/lib/types";
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

const modes: { id: Mode; label: string; hint: string }[] = [
  { id: "cards", label: "Cards", hint: "Flip & learn" },
  { id: "type", label: "Type", hint: "Translations" },
  { id: "sentence", label: "Sentence", hint: "German → English" },
];

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

  useLayoutEffect(() => {
    setOrder(shuffle([...VOCABULARY]));
  }, []);

  useEffect(() => {
    setTheme(readTheme());
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

  const next = () => {
    setI((x) => (x + 1 >= order.length ? 0 : x + 1));
  };

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
    setTypeFeedback(ok ? "ok" : "bad");
  };

  const answerEn =
    entry.sentence.modelEnglish ??
    entry.sentence.example.replace(/\{\{w\}\}/g, entry.en);

  const checkSentence = (e: React.FormEvent) => {
    e.preventDefault();
    const ok = translationMatches(sentenceEn, answerEn);
    setSentenceFeedback(ok ? "ok" : "bad");
  };

  const panel =
    "rounded-[1.25rem] border border-zinc-200/90 bg-white/90 p-5 shadow-sm backdrop-blur-sm dark:border-zinc-800/90 dark:bg-zinc-900/55 dark:shadow-[0_0_0_1px_rgb(39_39_42_/_0.5)] sm:p-6";

  const field =
    "w-full min-h-12 rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-base text-zinc-900 shadow-sm outline-none transition placeholder:text-zinc-400 focus:border-teal-500/70 focus:ring-4 focus:ring-teal-500/15 dark:border-zinc-700 dark:bg-zinc-950/70 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-teal-400/60 dark:focus:ring-teal-400/12 sm:text-sm";

  const textareaClass = `${field} min-h-[11rem] resize-y leading-relaxed sm:min-h-[10rem]`;

  const btnPrimary =
    "inline-flex min-h-12 flex-1 items-center justify-center rounded-2xl bg-zinc-900 px-5 text-base font-semibold text-white shadow-md transition active:scale-[0.98] sm:flex-none sm:text-sm dark:bg-teal-500 dark:text-zinc-950 dark:shadow-teal-900/20 dark:hover:bg-teal-400";

  const btnSecondary =
    "inline-flex min-h-12 flex-1 items-center justify-center rounded-2xl border border-zinc-200 bg-white/90 px-5 text-base font-semibold text-zinc-800 shadow-sm transition active:scale-[0.98] sm:flex-none sm:text-sm dark:border-zinc-700 dark:bg-zinc-900/50 dark:text-zinc-100 dark:hover:bg-zinc-800/70";

  const modeBtn = (m: (typeof modes)[number]) => {
    const on = mode === m.id;
    return (
      <button
        key={m.id}
        type="button"
        onClick={() => setMode(m.id)}
        className={[
          "flex min-h-[3.25rem] flex-col items-center justify-center rounded-2xl border px-2 py-2.5 text-center transition sm:min-h-0 sm:py-3",
          on
            ? "border-teal-500/50 bg-teal-500 text-white shadow-md shadow-teal-900/15 dark:border-teal-400/40 dark:bg-teal-500 dark:text-zinc-950 dark:shadow-teal-950/40"
            : "border-zinc-200/90 bg-white/70 text-zinc-700 active:bg-zinc-100 dark:border-zinc-700/90 dark:bg-zinc-900/40 dark:text-zinc-300 dark:active:bg-zinc-800/60",
        ].join(" ")}
      >
        <span className="text-sm font-semibold sm:text-[0.8125rem]">{m.label}</span>
        <span
          className={[
            "mt-0.5 hidden text-[10px] font-medium uppercase tracking-wide sm:block",
            on ? "text-white/90 dark:text-zinc-900/80" : "text-zinc-500 dark:text-zinc-500",
          ].join(" ")}
        >
          {m.hint}
        </span>
      </button>
    );
  };

  return (
    <div className="flex flex-col gap-6 sm:gap-8">
      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
          Practice
        </p>
        <div className="grid grid-cols-3 gap-2 sm:gap-3">{modes.map(modeBtn)}</div>
      </div>

      {mode === "cards" && (
        <section className={`flex flex-col gap-4 ${panel}`}>
          <label className="flex min-h-11 cursor-pointer items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
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
            onClick={() => setFlipped((f) => !f)}
            className="group flex min-h-[min(50dvh,20rem)] w-full flex-col justify-center rounded-2xl border border-zinc-200/90 bg-gradient-to-b from-zinc-50 to-white p-6 text-left transition hover:border-teal-400/40 dark:border-zinc-700/90 dark:from-zinc-950/80 dark:to-zinc-900/40 dark:hover:border-teal-500/30 sm:min-h-[14rem]"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
              {flipped ? (reverse ? "English" : "German") : reverse ? "German" : "English"}
            </p>
            <p className="mt-3 text-pretty text-[clamp(1.15rem,4.2vw,1.5rem)] font-semibold leading-snug tracking-tight text-zinc-900 dark:text-zinc-50">
              {flipped ? back : front}
            </p>
            <p className="mt-auto pt-6 text-sm font-medium text-teal-600 dark:text-teal-400">
              Tap to flip
            </p>
          </button>

          <div className="grid grid-cols-1 gap-2 sm:flex sm:flex-wrap">
            <button type="button" onClick={next} className={btnPrimary}>
              Next word
            </button>
            <button type="button" onClick={reshuffle} className={btnSecondary}>
              Shuffle
            </button>
          </div>
        </section>
      )}

      {mode === "type" && (
        <section className={`flex flex-col gap-5 ${panel}`}>
          <div>
            <label
              htmlFor="typedir"
              className="mb-2 block text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400"
            >
              Direction
            </label>
            <select id="typedir" value={typeDir} onChange={(e) => setTypeDir(e.target.value as "en-de" | "de-en")} className={field}>
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
                Check
              </button>
              <button type="button" onClick={next} className={btnSecondary}>
                Skip
              </button>
            </div>
          </form>

          {typeFeedback === "ok" && (
            <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">Nice — that works.</p>
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
        <section className={`flex flex-col gap-5 ${panel}`}>
          <div className="rounded-2xl border border-teal-500/20 bg-teal-500/[0.06] p-4 dark:border-teal-400/15 dark:bg-teal-400/[0.07]">
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
            <span className="rounded-lg bg-zinc-100 px-2 py-0.5 font-medium text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100">
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
                Check
              </button>
              <button
                type="button"
                onClick={() => setShowSentenceAnswer((s) => !s)}
                className={btnSecondary}
              >
                {showSentenceAnswer ? "Hide answer" : "Show answer"}
              </button>
              <button type="button" onClick={next} className={btnSecondary}>
                Next
              </button>
            </div>
          </form>

          {showSentenceAnswer && (
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50/90 p-4 text-sm leading-relaxed text-zinc-800 dark:border-zinc-700 dark:bg-zinc-950/60 dark:text-zinc-200">
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">Model English: </span>
              {answerEn}
            </div>
          )}

          {sentenceFeedback === "ok" && (
            <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
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

      <p className="text-center text-xs tabular-nums text-zinc-500 dark:text-zinc-500">
        {i + 1} / {order.length}
      </p>

      <footer className="border-t border-zinc-200/80 pt-6 dark:border-zinc-800/80">
        <button
          type="button"
          onClick={onTheme}
          className="min-h-11 text-sm font-semibold text-zinc-500 transition hover:text-teal-600 dark:text-zinc-400 dark:hover:text-teal-400"
        >
          {theme === "dark" ? "Light mode" : "Dark mode"}
        </button>
      </footer>
    </div>
  );
}
