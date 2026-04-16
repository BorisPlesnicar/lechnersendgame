import type { VocabEntry } from "@/lib/types";

/**
 * Class sheet **"How to Buy a Gun in 15 Countries"** (29 entries).
 * Practice sentences use several sheet terms where it fits; exactly one `{{w}}` / `___` is the gap.
 * English is plain B2: short clauses, common words, no fancy style.
 */
export const VOCABULARY: VocabEntry[] = [
  {
    id: "v0",
    en: "to obtain a gun",
    de: "Waffe bekommen",
    sentence: {
      example: "First you pass background checks; then you can try {{w}} with a permit.",
      gap: "First you pass background checks; then you can try ___ with a permit.",
      gapAnswer: "to obtain a gun",
      modelEnglish: "First you pass background checks; then you can try to obtain a gun with a permit.",
      modelGerman:
        "Zuerst besteht man die Überprüfung des kriminellen Hintergrunds; dann kann man versuchen, mit einer Erlaubnis eine Waffe zu bekommen.",
      meaningOptionsDe: [
        "Waffe bekommen",
        "Waffe führen",
        "Waffe verkaufen",
        "Waffe verstecken",
      ],
      ownSentenceHint: "Use after try / want / need + simple reason or permit.",
      difficulty: 2,
    },
  },
  {
    id: "v1",
    en: "to carry a gun",
    de: "Waffe führen / tragen",
    sentence: {
      example: "In many places it is illegal {{w}} in a school or a retail store.",
      gap: "In many places it is illegal ___ in a school or a retail store.",
      gapAnswer: "to carry a gun",
      modelEnglish: "In many places it is illegal to carry a gun in a school or a retail store.",
      modelGerman:
        "An vielen Orten darf man in einer Schule oder in einem Einzelhandelsgeschäft keine Waffe führen bzw. tragen.",
      meaningOptionsDe: [
        "Waffe führen / tragen",
        "Waffe bekommen",
        "Waffe lagern",
        "Waffe zerlegen",
      ],
      ownSentenceHint: "cannot + infinitive phrase; add a place from the sheet.",
      difficulty: 2,
    },
  },
  {
    id: "v2",
    en: "firearm",
    de: "Schusswaffe",
    sentence: {
      example: "A semiautomatic {{w}} is harder to buy if you have a conviction.",
      gap: "A semiautomatic ___ is harder to buy if you have a conviction.",
      gapAnswer: "firearm",
      modelEnglish: "A semiautomatic firearm is harder to buy if you have a conviction.",
      modelGerman:
        "Eine halbautomatische Schusswaffe ist schwerer zu kaufen, wenn man eine Verurteilung hat.",
      meaningOptionsDe: [
        "Schusswaffe",
        "Schutzweste",
        "Schließfach",
        "Schießstand",
      ],
      ownSentenceHint: "Put the noun after semiautomatic; add conviction.",
      difficulty: 2,
    },
  },
  {
    id: "v3",
    en: "handgun / pistol",
    de: "Handfeuerwaffe",
    sentence: {
      example: "Keep your {{w}} in a locker; keep ammunition in another place.",
      gap: "Keep your ___ in a locker; keep ammunition in another place.",
      gapAnswer: "handgun",
      gapAliases: ["pistol", "handgun / pistol"],
      modelEnglish: "Keep your handgun in a locker; keep ammunition in another place.",
      modelGerman:
        "Bewahre deine Handfeuerwaffe in einem Spind bzw. Schließfach auf; die Munition an einem anderen Ort.",
      meaningOptionsDe: [
        "Handfeuerwaffe",
        "Schusswaffe",
        "Munition",
        "Gewehr",
      ],
      ownSentenceHint: "Locker + ammunition + one gun word from the list.",
      difficulty: 2,
    },
  },
  {
    id: "v4",
    en: "semiautomatic",
    de: "Halbautomatisch",
    sentence: {
      example: "The shop may refuse a {{w}} firearm after domestic violence shows on a review.",
      gap: "The shop may refuse a ___ firearm after domestic violence shows on a review.",
      gapAnswer: "semiautomatic",
      modelEnglish:
        "The shop may refuse a semiautomatic firearm after domestic violence shows on a review.",
      modelGerman:
        "Das Geschäft kann eine halbautomatische Schusswaffe ablehnen, wenn bei einer Überprüfung häusliche Gewalt auftaucht.",
      meaningOptionsDe: [
        "Halbautomatisch",
        "Vollautomatisch",
        "Manuell",
        "Elektrisch",
      ],
      ownSentenceHint: "Adjective + firearm; add domestic violence or review.",
      difficulty: 2,
    },
  },
  {
    id: "v5",
    en: "rifle",
    de: "Gewehr",
    sentence: {
      example: "Many hunters use a {{w}} and belong to an accredited hunting / shooting club.",
      gap: "Many hunters use a ___ and belong to an accredited hunting / shooting club.",
      gapAnswer: "rifle",
      modelEnglish:
        "Many hunters use a rifle and belong to an accredited hunting / shooting club.",
      modelGerman:
        "Viele Jäger nutzen ein Gewehr und sind Mitglied in einem anerkannten Schießclub.",
      meaningOptionsDe: ["Gewehr", "Pistole", "Messer", "Bogen"],
      ownSentenceHint: "Rifle + club from the sheet.",
      difficulty: 2,
    },
  },
  {
    id: "v6",
    en: "conviction",
    de: "Verurteilung",
    sentence: {
      example: "A violent {{w}} on your (criminal) record can block a permit.",
      gap: "A violent ___ on your (criminal) record can block a permit.",
      gapAnswer: "conviction",
      modelEnglish: "A violent conviction on your (criminal) record can block a permit.",
      modelGerman:
        "Eine Verurteilung wegen Gewalt in der (Strafregisterauszug) Aufzeichnung kann eine Erlaubnis blockieren.",
      meaningOptionsDe: [
        "Verurteilung",
        "Überprüfung",
        "Erlaubnis",
        "Verwahrung",
      ],
      ownSentenceHint: "conviction + (criminal) record + permit.",
      difficulty: 2,
    },
  },
  {
    id: "v7",
    en: "background checks",
    de: "Überprüfung des kriminellen Hintergrunds",
    sentence: {
      example: "{{w}} at a retail store are normal before you buy ammunition.",
      gap: "___ at a retail store are normal before you buy ammunition.",
      gapAnswer: "background checks",
      modelEnglish: "Background checks at a retail store are normal before you buy ammunition.",
      modelGerman:
        "Eine Überprüfung des kriminellen Hintergrunds in einem Einzelhandelsgeschäft ist normal, bevor man Munition kauft.",
      meaningOptionsDe: [
        "Überprüfung des kriminellen Hintergrunds",
        "Einzelhandelsgeschäft",
        "Schießtraining",
        "Waffenschein",
      ],
      ownSentenceHint: "Plural subject + retail store + ammunition.",
      difficulty: 2,
    },
  },
  {
    id: "v8",
    en: "(criminal) record",
    de: "(Strafregisterauszug) Aufzeichnung",
    sentence: {
      example: "If your {{w}} is not clean, you may not pass a check.",
      gap: "If your ___ is not clean, you may not pass a check.",
      gapAnswer: "criminal record",
      gapAliases: ["record", "(criminal) record"],
      modelEnglish: "If your (criminal) record is not clean, you may not pass a check.",
      modelGerman:
        "Wenn die (Strafregisterauszug) Aufzeichnung nicht sauber ist, besteht man die Überprüfung vielleicht nicht.",
      meaningOptionsDe: [
        "(Strafregisterauszug) Aufzeichnung",
        "Verurteilung",
        "Erlaubnis",
        "Durchsuchung",
      ],
      ownSentenceHint: "record + to pass a check (same topic).",
      difficulty: 3,
    },
  },
  {
    id: "v9",
    en: "review",
    de: "Überprüfung",
    sentence: {
      example: "After background checks, there is a quick {{w}} of your file.",
      gap: "After background checks, there is a quick ___ of your file.",
      gapAnswer: "review",
      modelEnglish: "After background checks, there is a quick review of your file.",
      modelGerman:
        "Nach der Überprüfung des kriminellen Hintergrunds folgt eine kurze Überprüfung der Akte.",
      meaningOptionsDe: [
        "Überprüfung",
        "Verurteilung",
        "Munition",
        "Einzelhandel",
      ],
      ownSentenceHint: "review of your file after background checks.",
      difficulty: 2,
    },
  },
  {
    id: "v10",
    en: "to pass a check",
    de: "Eine Überprüfung bestehen",
    sentence: {
      example: "Before the sale, you have {{w}} at the retail store.",
      gap: "Before the sale, you have ___ at the retail store.",
      gapAnswer: "to pass a check",
      gapAliases: ["pass a check"],
      modelEnglish: "Before the sale, you have to pass a check at the retail store.",
      modelGerman:
        "Vor dem Verkauf muss man im Einzelhandelsgeschäft eine Überprüfung bestehen.",
      meaningOptionsDe: [
        "Eine Überprüfung bestehen",
        "Eine Waffe verkaufen",
        "Eine Lizenz verlängern",
        "Eine Strafe zahlen",
      ],
      ownSentenceHint: "have + target phrase (like have to pass a check).",
      difficulty: 2,
    },
  },
  {
    id: "v11",
    en: "domestic violence",
    de: "Häusliche Gewalt",
    sentence: {
      example: "{{w}} in the past can stop a permit or plans to obtain a gun.",
      gap: "___ in the past can stop a permit or plans to obtain a gun.",
      gapAnswer: "domestic violence",
      modelEnglish:
        "Domestic violence in the past can stop a permit or plans to obtain a gun.",
      modelGerman:
        "Häusliche Gewalt in der Vergangenheit kann eine Erlaubnis blockieren oder Pläne, eine Waffe zu bekommen.",
      meaningOptionsDe: [
        "Häusliche Gewalt",
        "Öffentliche Debatte",
        "Jugendschutz",
        "Verkehrssicherheit",
      ],
      ownSentenceHint: "Start the sentence; add permit + to obtain a gun.",
      difficulty: 2,
    },
  },
  {
    id: "v12",
    en: "accredited hunting / shooting club",
    de: "Anerkannter Schießclub",
    sentence: {
      example: "You learn safe rules in an {{w}} with a certificate and background checks.",
      gap: "You learn safe rules in an ___ with a certificate and background checks.",
      gapAnswer: "accredited hunting / shooting club",
      gapAliases: ["accredited shooting club", "accredited hunting club"],
      modelEnglish:
        "You learn safe rules in an accredited hunting / shooting club with a certificate and background checks.",
      modelGerman:
        "In einem anerkannten Schießclub lernt man sichere Regeln — mit Zertifikat und Überprüfung des kriminellen Hintergrunds.",
      meaningOptionsDe: [
        "Anerkannter Schießclub",
        "Einzelhandelsgeschäft",
        "Strafregister",
        "Schließfach",
      ],
      ownSentenceHint: "an + club name + certificate / background checks.",
      difficulty: 3,
    },
  },
  {
    id: "v13",
    en: "to vouch for sb",
    de: "für jem. bürgen",
    sentence: {
      example: "Your sponsor must be ready {{w}} after background checks and a review of your (criminal) record.",
      gap: "Your sponsor must be ready ___ after background checks and a review of your (criminal) record.",
      gapAnswer: "to vouch for sb",
      gapAliases: ["to vouch for somebody", "to vouch for someone"],
      modelEnglish:
        "Your sponsor must be ready to vouch for sb after background checks and a review of your (criminal) record.",
      modelGerman:
        "Der Bürge muss bereit sein, für jem. zu bürgen — nach Überprüfung des kriminellen Hintergrunds und einer Überprüfung der (Strafregisterauszug) Aufzeichnung.",
      meaningOptionsDe: [
        "für jem. bürgen",
        "jem. durchsuchen",
        "jem. verbieten",
        "jem. ignorieren",
      ],
      ownSentenceHint: "ready + list phrase; sponsor + checks + record.",
      difficulty: 2,
    },
  },
  {
    id: "v14",
    en: "to raise red flags",
    de: "Die Alarmglocken läuten",
    sentence: {
      example: "Wrong data on the form can be enough {{w}} during background checks.",
      gap: "Wrong data on the form can be enough ___ during background checks.",
      gapAnswer: "to raise red flags",
      modelEnglish: "Wrong data on the form can be enough to raise red flags during background checks.",
      modelGerman:
        "Falsche Daten im Formular können bei einer Überprüfung des kriminellen Hintergrunds schon die Alarmglocken läuten lassen.",
      meaningOptionsDe: [
        "Die Alarmglocken läuten",
        "Die Lizenz erteilen",
        "Die Munition kaufen",
        "Die Waffe lagern",
      ],
      ownSentenceHint: "enough + infinitive; background checks.",
      difficulty: 2,
    },
  },
  {
    id: "v15",
    en: "thriving business",
    de: "Blühendes Geschäft",
    sentence: {
      example: "Advice on (safe) gun storage became a {{w}} next to retail store manuals.",
      gap: "Advice on (safe) gun storage became a ___ next to retail store manuals.",
      gapAnswer: "thriving business",
      modelEnglish:
        "Advice on (safe) gun storage became a thriving business next to retail store manuals.",
      modelGerman:
        "Beratung zur (sicheren) Verwahrung von Waffen wurde neben Handbüchern für Einzelhandelsgeschäfte ein blühendes Geschäft.",
      meaningOptionsDe: [
        "Blühendes Geschäft",
        "Strafregister",
        "Schießstand",
        "Verwahrung",
      ],
      ownSentenceHint: "(safe) gun storage + retail store + noun phrase.",
      difficulty: 2,
    },
  },
  {
    id: "v16",
    en: "retail store",
    de: "Einzelhandelsgeschäft",
    sentence: {
      example: "Staff at a {{w}} log each firearm sale after background checks.",
      gap: "Staff at a ___ log each firearm sale after background checks.",
      gapAnswer: "retail store",
      modelEnglish: "Staff at a retail store log each firearm sale after background checks.",
      modelGerman:
        "Im Einzelhandelsgeschäft wird jeder Schusswaffenverkauf nach der Überprüfung des kriminellen Hintergrunds erfasst.",
      meaningOptionsDe: [
        "Einzelhandelsgeschäft",
        "Schießclub",
        "Gerichtssaal",
        "Polizeiwache",
      ],
      ownSentenceHint: "retail store + firearm + background checks.",
      difficulty: 2,
    },
  },
  {
    id: "v17",
    en: "mental health / illness",
    de: "Geistige Gesundheit / Krankheit",
    sentence: {
      example: "The form asks about {{w}} and domestic violence before a permit.",
      gap: "The form asks about ___ and domestic violence before a permit.",
      gapAnswer: "mental health",
      gapAliases: ["mental illness", "mental health / illness"],
      modelEnglish:
        "The form asks about mental health / illness and domestic violence before a permit.",
      modelGerman:
        "Das Formular fragt nach geistiger Gesundheit / Krankheit und häuslicher Gewalt vor einer Erlaubnis.",
      meaningOptionsDe: [
        "Geistige Gesundheit / Krankheit",
        "Häusliche Gewalt",
        "Jagdlizenz",
        "Schießtraining",
      ],
      ownSentenceHint: "form + two screening topics + permit.",
      difficulty: 3,
    },
  },
  {
    id: "v18",
    en: "(safe) gun storage",
    de: "(sichere) Verwahrung von Waffen",
    sentence: {
      example: "The law links {{w}} with a locker and separate ammunition.",
      gap: "The law links ___ with a locker and separate ammunition.",
      gapAnswer: "safe gun storage",
      gapAliases: ["gun storage", "(safe) gun storage"],
      modelEnglish: "The law links (safe) gun storage with a locker and separate ammunition.",
      modelGerman:
        "Das Gesetz verbindet die (sichere) Verwahrung von Waffen mit einem Spind bzw. Schließfach und getrennter Munition.",
      meaningOptionsDe: [
        "(sichere) Verwahrung von Waffen",
        "Einzelhandelsgeschäft",
        "Schießtraining",
        "Hintergrundprüfung",
      ],
      ownSentenceHint: "link + storage + locker + ammunition.",
      difficulty: 2,
    },
  },
  {
    id: "v19",
    en: "to store smth.",
    de: "Etw. Verwahren",
    sentence: {
      example: "You must show how {{w}} — for example, ammunition apart from the firearm in a locker.",
      gap: "You must show how ___ — for example, ammunition apart from the firearm in a locker.",
      gapAnswer: "to store smth.",
      gapAliases: ["to store something", "store something"],
      modelEnglish:
        "You must show how to store smth. — for example, ammunition apart from the firearm in a locker.",
      modelGerman:
        "Man muss zeigen, wie man etw. verwahrt — z. B. Munition getrennt von der Schusswaffe im Spind bzw. Schließfach.",
      meaningOptionsDe: [
        "Etw. Verwahren",
        "Etw. verkaufen",
        "Etw. zerlegen",
        "Etw. versteigern",
      ],
      ownSentenceHint: "how + list phrase + locker + ammunition + firearm.",
      difficulty: 2,
    },
  },
  {
    id: "v20",
    en: "locker",
    de: "Spind, Schließfach",
    sentence: {
      example: "At the range, each firearm stays in a {{w}}; ammunition is given out separately.",
      gap: "At the range, each firearm stays in a ___; ammunition is given out separately.",
      gapAnswer: "locker",
      modelEnglish: "At the range, each firearm stays in a locker; ammunition is given out separately.",
      modelGerman:
        "Auf dem Stand bleibt jede Schusswaffe im Spind bzw. Schließfach; Munition wird separat ausgegeben.",
      meaningOptionsDe: [
        "Spind, Schließfach",
        "Schusswaffe",
        "Munition",
        "Schießclub",
      ],
      ownSentenceHint: "firearm + locker + ammunition.",
      difficulty: 2,
    },
  },
  {
    id: "v21",
    en: "ammunition",
    de: "Munition",
    sentence: {
      example: "{{w}} must stay away from the firearm and the handgun / pistol under (safe) gun storage rules.",
      gap: "___ must stay away from the firearm and the handgun / pistol under (safe) gun storage rules.",
      gapAnswer: "ammunition",
      modelEnglish:
        "Ammunition must stay away from the firearm and the handgun / pistol under (safe) gun storage rules.",
      modelGerman:
        "Munition muss getrennt von der Schusswaffe und der Handfeuerwaffe bleiben — nach den Regeln zur (sicheren) Verwahrung von Waffen.",
      meaningOptionsDe: ["Munition", "Lizenz", "Verwahrung", "Durchsuchung"],
      ownSentenceHint: "Start with Ammunition + firearm + storage rules.",
      difficulty: 2,
    },
  },
  {
    id: "v22",
    en: "(un)announced inspections",
    de: "(un)angemeldete Durchsuchung",
    sentence: {
      example: "Permit holders should expect {{w}} where officers compare a certificate with the file.",
      gap: "Permit holders should expect ___ where officers compare a certificate with the file.",
      gapAnswer: "unannounced inspections",
      gapAliases: [
        "announced inspections",
        "(un)announced inspections",
        "inspections",
      ],
      modelEnglish:
        "Permit holders should expect (un)announced inspections where officers compare a certificate with the file.",
      modelGerman:
        "Lizenzinhaber müssen mit einer (un)angemeldeten Durchsuchung rechnen, bei der Beamte ein Zertifikat mit der Akte vergleichen.",
      meaningOptionsDe: [
        "(un)angemeldete Durchsuchung",
        "Hintergrundprüfung",
        "Verurteilung",
        "Schießtraining",
      ],
      ownSentenceHint: "expect + inspections + certificate + permit file.",
      difficulty: 3,
    },
  },
  {
    id: "v23",
    en: "to inspect smth.",
    de: "Etw. durchsuchen",
    sentence: {
      example: "During (un)announced inspections, staff may be allowed {{w}} on site.",
      gap: "During (un)announced inspections, staff may be allowed ___ on site.",
      gapAnswer: "to inspect smth.",
      gapAliases: ["to inspect something"],
      modelEnglish:
        "During (un)announced inspections, staff may be allowed to inspect smth. on site.",
      modelGerman:
        "Bei einer (un)angemeldeten Durchsuchung dürfen Mitarbeiter vor Ort vielleicht etw. durchsuchen.",
      meaningOptionsDe: [
        "Etw. durchsuchen",
        "Etw. verkaufen",
        "Etw. lagern",
        "Etw. genehmigen",
      ],
      ownSentenceHint: "allowed + list phrase + inspections.",
      difficulty: 2,
    },
  },
  {
    id: "v24",
    en: "diligence / diligent",
    de: "Eifer/Sorgfalt – eifrig/sorgfältig",
    sentence: {
      example: "The manager praised her {{w}} with background checks at the retail store.",
      gap: "The manager praised her ___ with background checks at the retail store.",
      gapAnswer: "diligence",
      gapAliases: ["diligent", "diligence / diligent"],
      modelEnglish:
        "The manager praised her diligence with background checks at the retail store.",
      modelGerman:
        "Die Führungskraft lobte ihre Sorgfalt bei der Überprüfung des kriminellen Hintergrunds im Einzelhandelsgeschäft.",
      meaningOptionsDe: [
        "Eifer/Sorgfalt – eifrig/sorgfältig",
        "Häusliche Gewalt",
        "Schusswaffe",
        "Einzelhandel",
      ],
      ownSentenceHint: "diligence + background checks + retail store.",
      difficulty: 2,
    },
  },
  {
    id: "v25",
    en: "to certify smth. / certificate",
    de: "Etw. belegen / Zertifikat",
    sentence: {
      example: "You need a {{w}} from the club after training and background checks.",
      gap: "You need a ___ from the club after training and background checks.",
      gapAnswer: "certificate",
      gapAliases: ["to certify smth. / certificate", "a certificate"],
      modelEnglish: "You need a certificate from the club after training and background checks.",
      modelGerman:
        "Man braucht ein Zertifikat vom Club nach dem Training und der Überprüfung des kriminellen Hintergrunds.",
      meaningOptionsDe: [
        "Etw. belegen / Zertifikat",
        "Etw. durchsuchen",
        "Etw. verbieten",
        "Etw. zerlegen",
      ],
      ownSentenceHint: "certificate + club + background checks.",
      difficulty: 2,
    },
  },
  {
    id: "v26",
    en: "permit / to permit smth.",
    de: "Erlaubnis / etw. erlauben",
    sentence: {
      example: "A {{w}} means the state may permit smth. — for example, to carry a gun — if you pass background checks.",
      gap: "A ___ means the state may permit smth. — for example, to carry a gun — if you pass background checks.",
      gapAnswer: "permit",
      gapAliases: ["permit / to permit smth."],
      modelEnglish:
        "A permit means the state may permit smth. — for example, to carry a gun — if you pass background checks.",
      modelGerman:
        "Eine Erlaubnis heißt: Der Staat darf etw. erlauben — z. B. eine Waffe zu führen bzw. zu tragen — wenn man die Überprüfung des kriminellen Hintergrunds besteht.",
      meaningOptionsDe: [
        "Erlaubnis / etw. erlauben",
        "Verurteilung",
        "Durchsuchung",
        "Munition",
      ],
      ownSentenceHint: "permit + permit smth. + to carry a gun + checks.",
      difficulty: 2,
    },
  },
  {
    id: "v27",
    en: "to outnumber smth.",
    de: "zahlenmäßig übertreffen",
    sentence: {
      example: "In one study, legal firearms may already {{w}} like illegal stockpiles after weak background checks at retail stores.",
      gap: "In one study, legal firearms may already ___ like illegal stockpiles after weak background checks at retail stores.",
      gapAnswer: "outnumber smth.",
      gapAliases: ["to outnumber smth.", "outnumber"],
      modelEnglish:
        "In one study, legal firearms may already outnumber smth. like illegal stockpiles after weak background checks at retail stores.",
      modelGerman:
        "In einer Studie könnten legale Schusswaffen schon zahlenmäßig übertreffen, wenn die Überprüfung des kriminellen Hintergrunds in Einzelhandelsgeschäften schwach war.",
      meaningOptionsDe: [
        "zahlenmäßig übertreffen",
        "etw. durchsuchen",
        "etw. verwahren",
        "etw. verbieten",
      ],
      ownSentenceHint: "List phrase as verb chunk; add firearms + background checks.",
      difficulty: 3,
    },
  },
  {
    id: "v28",
    en: "to keep a gun safely",
    de: "Waffe sicher verwahren",
    sentence: {
      example: "The rules say you have {{w}} at home and use (safe) gun storage with a locker.",
      gap: "The rules say you have ___ at home and use (safe) gun storage with a locker.",
      gapAnswer: "to keep a gun safely",
      modelEnglish:
        "The rules say you have to keep a gun safely at home and use (safe) gun storage with a locker.",
      modelGerman:
        "Die Regeln sagen: Man muss eine Waffe sicher verwahren und (sichere) Verwahrung von Waffen mit Spind bzw. Schließfach nutzen.",
      meaningOptionsDe: [
        "Waffe sicher verwahren",
        "Waffe öffentlich führen",
        "Waffe verkaufen",
        "Waffe zerlegen",
      ],
      ownSentenceHint: "must + phrase + (safe) gun storage + locker.",
      difficulty: 2,
    },
  },
];

export function getEntryById(id: string): VocabEntry | undefined {
  return VOCABULARY.find((v) => v.id === id);
}
