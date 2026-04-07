export interface SentencePractice {
  example: string;
  gap: string;
  gapAnswer: string;
  gapAliases?: string[];
  /** B2/C1 reference English (sentence mode). Falls back to `example` + {{w}} if omitted. */
  modelEnglish?: string;
  modelGerman: string;
  meaningOptionsDe: [string, string, string, string];
  ownSentenceHint: string;
  difficulty: 1 | 2 | 3;
}

export interface VocabEntry {
  id: string;
  en: string;
  de: string;
  sentence: SentencePractice;
}
