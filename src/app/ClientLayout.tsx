"use client";

import { useEffect } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { applyTheme, readTheme } from "@/lib/theme";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    applyTheme(readTheme());
  }, []);

  return <AppShell>{children}</AppShell>;
}
