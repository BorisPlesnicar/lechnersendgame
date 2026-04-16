import type { ReactNode } from "react";
import { VOCABULARY } from "@/data/vocabulary";

export function AppShell({ children }: { children: ReactNode }) {
  const n = VOCABULARY.length;
  return (
    <div className="flex min-h-dvh flex-col">
      <header className="sticky top-0 z-20 shrink-0 border-b border-zinc-200/60 bg-white/75 px-4 py-4 pt-[max(1rem,env(safe-area-inset-top))] shadow-[0_1px_0_0_rgb(255_255_255_/_0.6)_inset] backdrop-blur-2xl dark:border-zinc-800/70 dark:bg-zinc-950/70 dark:shadow-[0_1px_0_0_rgb(39_39_42_/_0.4)_inset]">
        <div className="mx-auto flex w-full max-w-md flex-col gap-3 sm:max-w-lg">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-teal-600 dark:text-teal-400">
                Vocabulary
              </p>
              <h1 className="mt-0.5 text-balance text-[clamp(1.1rem,4vw,1.35rem)] font-semibold leading-tight tracking-tight text-zinc-900 dark:text-zinc-50">
                Lechner&apos;s Endgame Trainer
              </h1>
              <p className="mt-1 max-w-[20rem] text-pretty text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                Class sheet: <span className="font-medium text-zinc-700 dark:text-zinc-300">How to Buy a Gun in 15 Countries</span>
              </p>
            </div>
            <span className="shrink-0 rounded-2xl border border-zinc-200/90 bg-white/80 px-3 py-1.5 text-center text-[11px] font-semibold tabular-nums text-zinc-600 shadow-sm backdrop-blur-sm dark:border-zinc-700/90 dark:bg-zinc-900/60 dark:text-zinc-300">
              {n}
              <span className="block text-[9px] font-medium uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                terms
              </span>
            </span>
          </div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-teal-500/25 to-transparent dark:via-teal-400/20" />
        </div>
      </header>
      <main className="mx-auto w-full max-w-md flex-1 pl-4 pr-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-6 max-sm:pr-[max(1rem,5.75rem)] sm:max-w-lg sm:px-5 sm:pt-8">
        {children}
      </main>
    </div>
  );
}
