const KEY = "lechner-daily-stats-v1";
const STREAK_KEY = "lechner-streak-v1";

export type DailyStats = {
  date: string;
  itemsStudied: number;
  correct: number;
  wrong: number;
};

function todayISO(): string {
  return new Date().toISOString().slice(0, 10);
}

function freshDaily(): DailyStats {
  return { date: todayISO(), itemsStudied: 0, correct: 0, wrong: 0 };
}

export function loadDaily(): DailyStats {
  if (typeof window === "undefined") return freshDaily();
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return freshDaily();
    const s = JSON.parse(raw) as DailyStats;
    if (s.date !== todayISO()) return freshDaily();
    return { ...freshDaily(), ...s, date: todayISO() };
  } catch {
    return freshDaily();
  }
}

export function saveDaily(s: DailyStats): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(s));
}

export function loadStreak(): { count: number; lastActive: string } {
  if (typeof window === "undefined") return { count: 0, lastActive: "" };
  try {
    const raw = localStorage.getItem(STREAK_KEY);
    if (!raw) return { count: 0, lastActive: "" };
    return JSON.parse(raw) as { count: number; lastActive: string };
  } catch {
    return { count: 0, lastActive: "" };
  }
}

/** First study action of the day updates consecutive-day streak */
export function touchStreak(): { count: number; lastActive: string } {
  if (typeof window === "undefined") return { count: 0, lastActive: "" };
  const today = todayISO();
  const prev = loadStreak();
  if (prev.lastActive === today) return prev;

  const y = new Date();
  y.setDate(y.getDate() - 1);
  const yesterday = y.toISOString().slice(0, 10);

  let count: number;
  if (!prev.lastActive) count = 1;
  else if (prev.lastActive === yesterday) count = prev.count + 1;
  else count = 1;

  const next = { count, lastActive: today };
  localStorage.setItem(STREAK_KEY, JSON.stringify(next));
  return next;
}
