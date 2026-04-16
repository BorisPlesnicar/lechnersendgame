"use client";

import Image from "next/image";
import { Volume2, VolumeX } from "lucide-react";
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
          aria-label="Lechner einschalten"
          className="pointer-events-auto inline-flex items-center gap-1.5 rounded-full border border-zinc-200/80 bg-white/80 p-2 text-[11px] font-semibold text-zinc-600 shadow-lg backdrop-blur-xl transition hover:border-teal-500/35 hover:text-teal-800 active:scale-[0.98] dark:border-zinc-600/80 dark:bg-zinc-900/75 dark:text-zinc-300 dark:hover:border-teal-400/30 dark:hover:text-teal-200 sm:px-3"
        >
          <Volume2 className="size-4" strokeWidth={2} />
          <span className="hidden sm:inline">Lechner einschalten</span>
        </button>
      </div>
    );
  }

  return (
    <div className="pointer-events-none fixed bottom-[max(0.5rem,env(safe-area-inset-bottom))] right-2 z-[25] flex flex-col items-end gap-1.5 sm:bottom-4 sm:right-4 sm:gap-2">
      <button
        type="button"
        onClick={mute}
        aria-label="Lechner Stummschalten"
        className="pointer-events-auto inline-flex items-center gap-1.5 rounded-full border border-zinc-200/80 bg-white/85 p-2 text-[10px] font-semibold uppercase tracking-wide text-zinc-600 shadow-md backdrop-blur-xl transition hover:border-teal-500/35 hover:text-teal-800 active:scale-[0.98] dark:border-zinc-600/80 dark:bg-zinc-900/75 dark:text-zinc-300 dark:hover:border-teal-400/30 dark:hover:text-teal-200 sm:px-3 sm:py-1.5"
      >
        <VolumeX className="size-4" strokeWidth={2} />
        <span className="hidden sm:inline">Lechner Stummschalten</span>
      </button>
      <div className="lechner-drift relative w-14 opacity-95 drop-shadow-[0_10px_22px_rgba(0,0,0,0.2)] dark:drop-shadow-[0_12px_26px_rgba(0,0,0,0.5)] sm:w-[min(5rem,20vw)]">
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
          loading="eager"
          className="pointer-events-none h-[5.25rem] w-full rounded-[1rem] border border-white/50 object-contain object-top dark:border-zinc-600/50 sm:h-[7.5rem] sm:rounded-[1.15rem]"
          sizes="(max-width: 640px) 56px, 80px"
        />
      </div>
    </div>
  );
}
