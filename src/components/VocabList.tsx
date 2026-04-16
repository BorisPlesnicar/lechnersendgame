"use client";

import { useEffect, useMemo, useState } from "react";
import { Check, Filter, Search, Sparkles, X } from "lucide-react";
import { VOCABULARY } from "@/data/vocabulary";
import { clearMastery, loadMastery, toggleMastery, type MasteryMap } from "@/lib/mastery";

type FilterMode = "all" | "learning" | "mastered";

const diffLabel: Record<1 | 2 | 3, string> = { 1: "Easy", 2: "Solid", 3: "Tricky" };
const diffPill: Record<1 | 2 | 3, string> = {
  1: "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
  2: "border-teal-500/30 bg-teal-500/10 text-teal-700 dark:text-teal-300",
  3: "border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300",
};

const diffDot: Record<1 | 2 | 3, string> = {
  1: "bg-emerald-500 dark:bg-emerald-400",
  2: "bg-teal-500 dark:bg-teal-400",
  3: "bg-amber-500 dark:bg-amber-400",
};

function normalize(s: string): string {
  return s.toLowerCase().normalize("NFD").replace(/\p{M}/gu, "");
}

export function VocabList() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<FilterMode>("all");
  const [mastery, setMastery] = useState<MasteryMap>({});

  useEffect(() => {
    setMastery(loadMastery());
  }, []);

  const masteredCount = Object.keys(mastery).length;
  const total = VOCABULARY.length;
  const progress = total ? Math.round((100 * masteredCount) / total) : 0;

  const q = normalize(query.trim());
  const rows = useMemo(() => {
    return VOCABULARY.filter((v) => {
      const learned = !!mastery[v.id];
      if (filter === "mastered" && !learned) return false;
      if (filter === "learning" && learned) return false;
      if (!q) return true;
      return normalize(v.en).includes(q) || normalize(v.de).includes(q);
    });
  }, [filter, mastery, q]);

  const onToggle = (id: string) => {
    setMastery(toggleMastery(id));
  };

  const onReset = () => {
    setMastery(clearMastery());
  };

  const filters: { id: FilterMode; label: string }[] = [
    { id: "all", label: `All · ${total}` },
    { id: "learning", label: `Learning · ${total - masteredCount}` },
    { id: "mastered", label: `Mastered · ${masteredCount}` },
  ];

  return (
    <div className="flex flex-col gap-5">
      {/* Header strip with progress */}
      <section className="overflow-hidden rounded-[1.35rem] border border-zinc-200/80 bg-white/70 p-4 shadow-[0_10px_40px_-20px_rgba(15,23,42,0.18)] backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-900/45 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            <Sparkles className="size-3.5 text-teal-600 dark:text-teal-400" strokeWidth={2} />
            Overview · English → German
          </div>
          <span className="rounded-xl border border-zinc-200/80 bg-white/90 px-3 py-1 text-[11px] font-semibold tabular-nums text-zinc-700 shadow-sm dark:border-zinc-700/80 dark:bg-zinc-950/50 dark:text-zinc-200">
            {masteredCount}/{total} mastered
          </span>
        </div>
        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-zinc-200/80 dark:bg-zinc-800/80">
          <div
            className="h-full rounded-full bg-gradient-to-r from-teal-500 to-emerald-400 transition-all duration-500 dark:from-teal-400 dark:to-emerald-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-2 text-[11px] text-zinc-500 dark:text-zinc-500">
          Tap a row to mark a word as mastered. Progress stays on this device.
        </p>
      </section>

      {/* Search + filters */}
      <section className="flex flex-col gap-3 rounded-[1.35rem] border border-zinc-200/80 bg-white/70 p-4 shadow-sm backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-900/45 sm:flex-row sm:items-center sm:justify-between sm:p-4">
        <label className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-zinc-400 dark:text-zinc-500" strokeWidth={2} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search English or German…"
            className="w-full min-h-11 rounded-2xl border border-zinc-200/90 bg-white/90 pl-9 pr-9 text-sm text-zinc-900 shadow-inner outline-none transition placeholder:text-zinc-400 focus:border-teal-500/60 focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700/90 dark:bg-zinc-950/55 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-teal-400/55 dark:focus:ring-teal-400/10"
            autoComplete="off"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute right-2 top-1/2 inline-flex size-7 -translate-y-1/2 items-center justify-center rounded-lg text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
            >
              <X className="size-3.5" strokeWidth={2.5} />
            </button>
          )}
        </label>

        <div className="flex items-center gap-1 self-stretch rounded-2xl border border-zinc-200/80 bg-white/80 p-1 text-[11px] font-semibold text-zinc-600 dark:border-zinc-700/80 dark:bg-zinc-950/45 dark:text-zinc-300">
          <Filter className="ml-1.5 hidden size-3.5 text-zinc-400 dark:text-zinc-500 sm:block" strokeWidth={2} />
          {filters.map((f) => {
            const on = f.id === filter;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                className={[
                  "flex-1 whitespace-nowrap rounded-xl px-3 py-1.5 transition sm:flex-none",
                  on
                    ? "bg-zinc-900 text-white shadow-sm dark:bg-teal-500 dark:text-zinc-950"
                    : "hover:text-zinc-900 dark:hover:text-zinc-100",
                ].join(" ")}
              >
                {f.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Table */}
      <section className="overflow-hidden rounded-[1.35rem] border border-zinc-200/80 bg-white/70 shadow-[0_12px_40px_-22px_rgba(15,23,42,0.2)] backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-900/45 dark:shadow-[0_16px_48px_-24px_rgba(0,0,0,0.5)]">
        <div className="hidden grid-cols-[2rem_1.2fr_1fr_4.8rem_2.5rem] items-center gap-3 border-b border-zinc-200/80 bg-white/60 px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-500 dark:border-zinc-800/70 dark:bg-zinc-950/30 dark:text-zinc-400 sm:grid">
          <span>#</span>
          <span>English</span>
          <span>German</span>
          <span className="text-center">Level</span>
          <span className="text-center">✓</span>
        </div>

        <ul className="divide-y divide-zinc-200/70 dark:divide-zinc-800/70">
          {rows.length === 0 && (
            <li className="px-5 py-10 text-center text-sm text-zinc-500 dark:text-zinc-400">
              No words match your filter.
            </li>
          )}
          {rows.map((v, idx) => {
            const learned = !!mastery[v.id];
            const d = v.sentence.difficulty;
            return (
              <li
                key={v.id}
                className={[
                  "group relative transition",
                  learned ? "bg-emerald-500/[0.05] dark:bg-emerald-500/[0.05]" : "hover:bg-zinc-50/60 dark:hover:bg-zinc-900/50",
                ].join(" ")}
              >
                <button
                  type="button"
                  onClick={() => onToggle(v.id)}
                  className="grid w-full grid-cols-[1.75rem_1fr_2.25rem] items-start gap-2.5 px-3 py-3 text-left sm:grid-cols-[2rem_1.2fr_1fr_4.8rem_2.5rem] sm:items-center sm:gap-3 sm:px-4"
                  aria-pressed={learned}
                  aria-label={`${v.en} — ${v.de}. ${learned ? "Mastered" : "Not mastered"}`}
                >
                  <span className="text-[11px] font-semibold tabular-nums text-zinc-400 dark:text-zinc-500">
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={`size-1.5 shrink-0 rounded-full sm:hidden ${diffDot[d]}`} aria-hidden />
                      <p
                        className={[
                          "text-pretty break-words text-[15px] font-semibold leading-snug text-zinc-900 dark:text-zinc-50 sm:text-sm",
                          learned ? "opacity-70" : "",
                        ].join(" ")}
                      >
                        {v.en}
                      </p>
                    </div>
                    <p className="mt-0.5 text-pretty break-words text-[13px] leading-snug text-zinc-600 dark:text-zinc-400 sm:hidden">
                      {v.de}
                    </p>
                  </div>

                  <p
                    className={[
                      "hidden text-pretty break-words text-sm leading-snug text-zinc-700 dark:text-zinc-300 sm:block",
                      learned ? "opacity-70" : "",
                    ].join(" ")}
                  >
                    {v.de}
                  </p>

                  <span className="hidden justify-center sm:flex">
                    <span
                      className={[
                        "rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider",
                        diffPill[d],
                      ].join(" ")}
                    >
                      {diffLabel[d]}
                    </span>
                  </span>

                  <span className="col-start-3 row-span-2 row-start-1 flex items-start justify-end sm:col-start-auto sm:row-span-1 sm:row-start-auto sm:items-center sm:justify-center">
                    <span
                      className={[
                        "flex size-8 items-center justify-center rounded-full border transition",
                        learned
                          ? "border-emerald-500/40 bg-emerald-500/20 text-emerald-700 dark:border-emerald-400/40 dark:bg-emerald-400/25 dark:text-emerald-200"
                          : "border-zinc-300/80 bg-white/70 text-zinc-400 group-hover:border-teal-500/40 group-hover:text-teal-600 dark:border-zinc-600/80 dark:bg-zinc-950/40 dark:text-zinc-500 dark:group-hover:border-teal-400/40 dark:group-hover:text-teal-300",
                      ].join(" ")}
                      aria-hidden
                    >
                      <Check className={`size-3.5 ${learned ? "opacity-100" : "opacity-0"}`} strokeWidth={3} />
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Footer actions */}
      <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-zinc-500 dark:text-zinc-500">
        <span>{rows.length} shown · {total} total</span>
        <button
          type="button"
          onClick={onReset}
          disabled={masteredCount === 0}
          className="inline-flex items-center gap-1.5 rounded-xl border border-zinc-200/80 bg-white/60 px-3 py-1.5 text-[11px] font-semibold text-zinc-600 shadow-sm backdrop-blur-sm transition hover:border-red-500/30 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-zinc-200/80 disabled:hover:text-zinc-600 dark:border-zinc-700/80 dark:bg-zinc-900/40 dark:text-zinc-300 dark:hover:border-red-400/30 dark:hover:text-red-300 dark:disabled:hover:border-zinc-700/80 dark:disabled:hover:text-zinc-300"
        >
          Reset mastery
        </button>
      </div>
    </div>
  );
}
