"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Table2 } from "lucide-react";

const tabs = [
  { href: "/", label: "Trainer", Icon: BookOpen },
  { href: "/vocab", label: "Liste", Icon: Table2 },
] as const;

export function HeaderNav() {
  const pathname = usePathname();
  return (
    <nav className="inline-flex w-full max-w-full items-center gap-1 self-start rounded-2xl border border-zinc-200/80 bg-white/70 p-1 shadow-sm backdrop-blur-xl dark:border-zinc-700/80 dark:bg-zinc-900/50 sm:w-auto">
      {tabs.map(({ href, label, Icon }) => {
        const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            className={[
              "flex flex-1 items-center justify-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-semibold transition sm:flex-none sm:text-[13px]",
              active
                ? "bg-teal-500 text-white shadow-md shadow-teal-900/20 dark:bg-teal-500 dark:text-zinc-950 dark:shadow-teal-950/30"
                : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100",
            ].join(" ")}
            aria-current={active ? "page" : undefined}
          >
            <Icon className="size-3.5" strokeWidth={2.2} />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
