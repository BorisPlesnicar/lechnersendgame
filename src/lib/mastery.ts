const KEY = "lechner-mastery-v1";

export type MasteryMap = Record<string, boolean>;

export function loadMastery(): MasteryMap {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as MasteryMap;
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

export function saveMastery(m: MasteryMap): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(KEY, JSON.stringify(m));
  } catch {
    /* ignore */
  }
}

export function toggleMastery(id: string, next?: boolean): MasteryMap {
  const current = loadMastery();
  const nextVal = typeof next === "boolean" ? next : !current[id];
  const updated: MasteryMap = { ...current };
  if (nextVal) updated[id] = true;
  else delete updated[id];
  saveMastery(updated);
  return updated;
}

export function clearMastery(): MasteryMap {
  saveMastery({});
  return {};
}
