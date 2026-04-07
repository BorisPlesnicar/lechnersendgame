import type { ReactNode } from "react";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col">
      <header className="sticky top-0 z-20 shrink-0 border-b border-zinc-200/70 bg-white/85 px-4 py-4 pt-[max(1rem,env(safe-area-inset-top))] backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-950/85">
        <div className="mx-auto w-full max-w-md sm:max-w-lg">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-teal-600 dark:text-teal-400">
            Vocabulary
          </p>
          <h1 className="mt-0.5 text-balance text-[clamp(1.05rem,4vw,1.25rem)] font-semibold leading-tight tracking-tight text-zinc-900 dark:text-zinc-50">
            Lechner&apos;s Endgame Trainer
          </h1>
        </div>
      </header>
      <main className="mx-auto w-full max-w-md flex-1 px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-6 sm:max-w-lg sm:px-5 sm:pt-8">
        {children}
      </main>
    </div>
  );
}
