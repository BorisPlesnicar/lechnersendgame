"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { readLechnerMuted, setLechnerMuted } from "@/lib/lechner-mascot";

export function FloatingLechner() {
  const [muted, setMuted] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setMuted(readLechnerMuted());
    setReady(true);
  }, []);

  const mute = useCallback(() => {
    setMuted(true);
    setLechnerMuted(true);
  }, []);

  const unmute = useCallback(() => {
    setMuted(false);
    setLechnerMuted(false);
  }, []);

  if (!ready) return null;

  if (muted) {
    return (
      <div className="pointer-events-none fixed bottom-[max(0.75rem,env(safe-area-inset-bottom))] right-3 z-[25] sm:bottom-5 sm:right-5">
        <button
          type="button"
          onClick={unmute}
          className="pointer-events-auto rounded-full border border-zinc-200/80 bg-white/75 px-3 py-2 text-[11px] font-semibold text-zinc-600 shadow-lg backdrop-blur-xl transition hover:border-teal-500/35 hover:text-teal-800 active:scale-[0.98] dark:border-zinc-600/80 dark:bg-zinc-900/75 dark:text-zinc-300 dark:hover:border-teal-400/30 dark:hover:text-teal-200"
        >
          Lechner einschalten
        </button>
      </div>
    );
  }

  return (
    <div className="pointer-events-none fixed bottom-[max(0.5rem,env(safe-area-inset-bottom))] right-2 z-[25] flex flex-col items-end gap-2 sm:bottom-4 sm:right-4">
      <button
        type="button"
        onClick={mute}
        className="pointer-events-auto rounded-full border border-zinc-200/80 bg-white/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-zinc-600 shadow-md backdrop-blur-xl transition hover:border-teal-500/35 hover:text-teal-800 active:scale-[0.98] dark:border-zinc-600/80 dark:bg-zinc-900/70 dark:text-zinc-300 dark:hover:border-teal-400/30 dark:hover:text-teal-200"
      >
        Lechner Stummschalten
      </button>
      <div className="lechner-drift relative max-h-[9.5rem] w-[min(4.25rem,18vw)] opacity-95 drop-shadow-[0_12px_28px_rgba(0,0,0,0.18)] dark:drop-shadow-[0_14px_32px_rgba(0,0,0,0.45)]">
        <div
          className="pointer-events-none absolute inset-0 -z-10 scale-110 rounded-3xl bg-gradient-to-t from-teal-400/15 to-transparent blur-xl dark:from-teal-400/10"
          aria-hidden
        />
        <Image
          src="/lechner.png"
          alt="Lechner"
          width={183}
          height={521}
          draggable={false}
          className="pointer-events-none max-h-[9.5rem] w-full rounded-[1.15rem] border border-white/50 object-contain object-top dark:border-zinc-600/50"
          sizes="72px"
        />
      </div>
    </div>
  );
}
