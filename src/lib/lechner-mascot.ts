const KEY = "lechner-mascot-muted";

export function readLechnerMuted(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return localStorage.getItem(KEY) === "1";
  } catch {
    return false;
  }
}

export function setLechnerMuted(muted: boolean) {
  if (typeof window === "undefined") return;
  try {
    if (muted) localStorage.setItem(KEY, "1");
    else localStorage.removeItem(KEY);
  } catch {
    /* ignore */
  }
}
