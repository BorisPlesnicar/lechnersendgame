/** Normalize typed answers for comparison */
export function normalizeAnswer(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/[/.,;:!?'"()[\]{}]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function translationMatches(
  input: string,
  expected: string,
  aliases: string[] = []
): boolean {
  const u = normalizeAnswer(input);
  if (!u) return false;
  const pool = [expected, ...aliases].map(normalizeAnswer).filter(Boolean);
  for (const t of pool) {
    if (u === t) return true;
    if (t.length >= 6 && (u.includes(t) || t.includes(u))) return true;
  }
  const wordsU = new Set(u.split(" ").filter((w) => w.length > 2));
  for (const t of pool) {
    const wordsT = t.split(" ").filter((w) => w.length > 2);
    if (wordsT.length === 0) continue;
    const hit = wordsT.filter((w) => wordsU.has(w)).length;
    if (hit / wordsT.length >= 0.65) return true;
  }
  return false;
}
