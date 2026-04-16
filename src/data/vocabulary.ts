import type { VocabEntry } from "@/lib/types";

/**
 * Sole word list — class sheet **"How to Buy a Gun in 15 Countries"** (29 entries).
 * Each practice sentence weaves several sheet terms together; exactly one `{{w}}` / `___` marks the gap.
 */
export const VOCABULARY: VocabEntry[] = [
  {
    id: "v0",
    en: "to obtain a gun",
    de: "Waffe bekommen",
    sentence: {
      example:
        "Even after background checks and a full review, you may still be refused a permit unless you can show lawful reasons {{w}}.",
      gap: "Even after background checks and a full review, you may still be refused a permit unless you can show lawful reasons ___.",
      gapAnswer: "to obtain a gun",
      modelEnglish:
        "Even after background checks and a full review, you may still be refused a permit unless you can show lawful reasons to obtain a gun.",
      modelGerman:
        "Selbst nach einer Überprüfung des kriminellen Hintergrunds und einer genauen Überprüfung der Unterlagen kann eine Erlaubnis verweigert werden, wenn keine triftigen Gründe genannt werden, eine Waffe zu bekommen.",
      meaningOptionsDe: [
        "Waffe bekommen",
        "Waffe führen",
        "Waffe verkaufen",
        "Waffe verstecken",
      ],
      ownSentenceHint: "Chain checks → review → permit decision; target is the infinitive phrase.",
      difficulty: 2,
    },
  },
  {
    id: "v1",
    en: "to carry a gun",
    de: "Waffe führen / tragen",
    sentence: {
      example:
        "Owning a firearm is one thing; the law is stricter about who is allowed {{w}} near schools or inside a retail store.",
      gap: "Owning a firearm is one thing; the law is stricter about who is allowed ___ near schools or inside a retail store.",
      gapAnswer: "to carry a gun",
      modelEnglish:
        "Owning a firearm is one thing; the law is stricter about who is allowed to carry a gun near schools or inside a retail store.",
      modelGerman:
        "Eine Schusswaffe zu besitzen ist eine Sache; strenger fragt das Gesetz, wer eine Waffe führen bzw. tragen darf, nahe Schulen oder in einem Einzelhandelsgeschäft.",
      meaningOptionsDe: [
        "Waffe führen / tragen",
        "Waffe bekommen",
        "Waffe lagern",
        "Waffe zerlegen",
      ],
      ownSentenceHint: "Contrast ownership (firearm) with public carrying and place (retail store).",
      difficulty: 2,
    },
  },
  {
    id: "v2",
    en: "firearm",
    de: "Schusswaffe",
    sentence: {
      example:
        "Background checks look for domestic violence and a conviction before any semiautomatic {{w}} leaves the shop.",
      gap: "Background checks look for domestic violence and a conviction before any semiautomatic ___ leaves the shop.",
      gapAnswer: "firearm",
      modelEnglish:
        "Background checks look for domestic violence and a conviction before any semiautomatic firearm leaves the shop.",
      modelGerman:
        "Eine Überprüfung des kriminellen Hintergrunds prüft auf häusliche Gewalt und eine Verurteilung, bevor eine halbautomatische Schusswaffe den Laden verlässt.",
      meaningOptionsDe: [
        "Schusswaffe",
        "Schutzweste",
        "Schließfach",
        "Schießstand",
      ],
      ownSentenceHint: "Stack checks + domestic violence + conviction + semiautomatic + target noun.",
      difficulty: 2,
    },
  },
  {
    id: "v3",
    en: "handgun / pistol",
    de: "Handfeuerwaffe",
    sentence: {
      example:
        "Compared with a rifle, a semiautomatic {{w}} is easier to conceal, which is why mental health / illness questions appear on the form.",
      gap: "Compared with a rifle, a semiautomatic ___ is easier to conceal, which is why mental health / illness questions appear on the form.",
      gapAnswer: "handgun",
      gapAliases: ["pistol", "handgun / pistol"],
      modelEnglish:
        "Compared with a rifle, a semiautomatic handgun is easier to conceal, which is why mental health / illness questions appear on the form.",
      modelGerman:
        "Im Vergleich zu einem Gewehr lässt sich eine halbautomatische Handfeuerwaffe leichter verbergen, deshalb stehen auf dem Formular Fragen zu geistiger Gesundheit / Krankheit.",
      meaningOptionsDe: [
        "Handfeuerwaffe",
        "Schusswaffe",
        "Munition",
        "Gewehr",
      ],
      ownSentenceHint: "Contrast rifle vs semiautomatic handgun; add mental health / illness screening.",
      difficulty: 2,
    },
  },
  {
    id: "v4",
    en: "semiautomatic",
    de: "Halbautomatisch",
    sentence: {
      example:
        "During background checks, officials may refuse a firearm that is {{w}} if domestic violence appears in the file, even when a rifle would still be allowed.",
      gap: "During background checks, officials may refuse a firearm that is ___ if domestic violence appears in the file, even when a rifle would still be allowed.",
      gapAnswer: "semiautomatic",
      modelEnglish:
        "During background checks, officials may refuse a firearm that is semiautomatic if domestic violence appears in the file, even when a rifle would still be allowed.",
      modelGerman:
        "Bei einer Überprüfung des kriminellen Hintergrunds kann eine Schusswaffe abgelehnt werden, wenn sie halbautomatisch ist und häusliche Gewalt auftaucht, obwohl für die Jagd noch ein Gewehr möglich wäre.",
      meaningOptionsDe: [
        "Halbautomatisch",
        "Vollautomatisch",
        "Manuell",
        "Elektrisch",
      ],
      ownSentenceHint: "Adjective after **firearm**; contrast with **rifle** and domestic-violence hits.",
      difficulty: 2,
    },
  },
  {
    id: "v5",
    en: "rifle",
    de: "Gewehr",
    sentence: {
      example:
        "An accredited hunting / shooting club may require proof of (safe) gun storage before it endorses your request for a {{w}}.",
      gap: "An accredited hunting / shooting club may require proof of (safe) gun storage before it endorses your request for a ___.",
      gapAnswer: "rifle",
      modelEnglish:
        "An accredited hunting / shooting club may require proof of (safe) gun storage before it endorses your request for a rifle.",
      modelGerman:
        "Ein anerkannter Schießclub kann einen Nachweis für die (sichere) Verwahrung von Waffen verlangen, bevor er dir die Bitte um ein Gewehr bestätigt.",
      meaningOptionsDe: ["Gewehr", "Pistole", "Messer", "Bogen"],
      ownSentenceHint: "Club endorsement + (safe) gun storage + hunting **rifle**.",
      difficulty: 2,
    },
  },
  {
    id: "v6",
    en: "conviction",
    de: "Verurteilung",
    sentence: {
      example:
        "A violent {{w}} on your (criminal) record will usually make background checks fail, and domestic violence reports weigh even heavier.",
      gap: "A violent ___ on your (criminal) record will usually make background checks fail, and domestic violence reports weigh even heavier.",
      gapAnswer: "conviction",
      modelEnglish:
        "A violent conviction on your (criminal) record will usually make background checks fail, and domestic violence reports weigh even heavier.",
      modelGerman:
        "Eine Verurteilung wegen Gewalt in der (Strafregisterauszug) Aufzeichnung lässt meist eine Überprüfung des kriminellen Hintergrunds scheitern, und Meldungen zu häuslicher Gewalt zählen noch schwerer.",
      meaningOptionsDe: [
        "Verurteilung",
        "Überprüfung",
        "Erlaubnis",
        "Verwahrung",
      ],
      ownSentenceHint: "Link **(criminal) record**, **background checks**, **domestic violence**.",
      difficulty: 2,
    },
  },
  {
    id: "v7",
    en: "background checks",
    de: "Überprüfung des kriminellen Hintergrunds",
    sentence: {
      example:
        "Retail stores treat {{w}} as routine, and answers that raise red flags can block the next step: to obtain a gun.",
      gap: "Retail stores treat ___ as routine, and answers that raise red flags can block the next step: to obtain a gun.",
      gapAnswer: "background checks",
      modelEnglish:
        "Retail stores treat background checks as routine, and answers that raise red flags can block the next step: to obtain a gun.",
      modelGerman:
        "Einzelhandelsgeschäfte behandeln eine Überprüfung des kriminellen Hintergrunds als Routine, und Antworten können früh die Alarmglocken läuten und den nächsten Schritt blockieren: eine Waffe bekommen.",
      meaningOptionsDe: [
        "Überprüfung des kriminellen Hintergrunds",
        "Einzelhandelsgeschäft",
        "Schießtraining",
        "Waffenschein",
      ],
      ownSentenceHint: "**Retail store** + **raise red flags** + **to obtain a gun**.",
      difficulty: 2,
    },
  },
  {
    id: "v8",
    en: "(criminal) record",
    de: "(Strafregisterauszug) Aufzeichnung",
    sentence: {
      example:
        "What appears on your {{w}} feeds the review after background checks and can mean you fail to pass a check even years later.",
      gap: "What appears on your ___ feeds the review after background checks and can mean you fail to pass a check even years later.",
      gapAnswer: "criminal record",
      gapAliases: ["record", "(criminal) record"],
      modelEnglish:
        "What appears on your (criminal) record feeds the review after background checks and can mean you fail to pass a check even years later.",
      modelGerman:
        "Was auf der (Strafregisterauszug) Aufzeichnung steht, wird nach der Überprüfung des kriminellen Hintergrunds mit einbezogen und kann verhindern, dass man eine Überprüfung besteht — auch Jahre später.",
      meaningOptionsDe: [
        "(Strafregisterauszug) Aufzeichnung",
        "Verurteilung",
        "Erlaubnis",
        "Durchsuchung",
      ],
      ownSentenceHint: "Chain **review** + **background checks** + **to pass a check**.",
      difficulty: 3,
    },
  },
  {
    id: "v9",
    en: "review",
    de: "Überprüfung",
    sentence: {
      example:
        "The file's {{w}} follows background checks and may raise red flags if your (criminal) record conflicts with the permit you seek.",
      gap: "The file's ___ follows background checks and may raise red flags if your (criminal) record conflicts with the permit you seek.",
      gapAnswer: "review",
      modelEnglish:
        "The file's review follows background checks and may raise red flags if your (criminal) record conflicts with the permit you seek.",
      modelGerman:
        "Die Überprüfung der Akte folgt auf die Überprüfung des kriminellen Hintergrunds und kann die Alarmglocken läuten lassen, wenn die (Strafregisterauszug) Aufzeichnung mit der Erlaubnis kollidiert, die du suchst.",
      meaningOptionsDe: [
        "Überprüfung",
        "Verurteilung",
        "Munition",
        "Einzelhandel",
      ],
      ownSentenceHint: "**Review** as examination after **background checks**; add **raise red flags**, **(criminal) record**, **permit**.",
      difficulty: 2,
    },
  },
  {
    id: "v10",
    en: "to pass a check",
    de: "Eine Überprüfung bestehen",
    sentence: {
      example:
        "Buyers normally have {{w}} before a retail store will hand over ammunition or finish the sale after a review and background checks.",
      gap: "Buyers normally have ___ before a retail store will hand over ammunition or finish the sale after a review and background checks.",
      gapAnswer: "to pass a check",
      gapAliases: ["pass a check"],
      modelEnglish:
        "Buyers normally have to pass a check before a retail store will hand over ammunition or finish the sale after a review and background checks.",
      modelGerman:
        "Du musst eine Überprüfung bestehen — im Rahmen der Überprüfung des kriminellen Hintergrunds —, bevor ein Einzelhandelsgeschäft Munition herausgibt oder nach einer Überprüfung den Verkauf abschließt.",
      meaningOptionsDe: [
        "Eine Überprüfung bestehen",
        "Eine Waffe verkaufen",
        "Eine Lizenz verlängern",
        "Eine Strafe zahlen",
      ],
      ownSentenceHint: "Use **have to pass a check**; weave in **retail store**, **ammunition**, **review**, **background checks**.",
      difficulty: 2,
    },
  },
  {
    id: "v11",
    en: "domestic violence",
    de: "Häusliche Gewalt",
    sentence: {
      example:
        "{{w}} in the past, plus items on your (criminal) record, usually blocks a permit and can bar plans to obtain a gun or to carry a gun.",
      gap: "___ in the past, plus items on your (criminal) record, usually blocks a permit and can bar plans to obtain a gun or to carry a gun.",
      gapAnswer: "domestic violence",
      modelEnglish:
        "Domestic violence in the past, plus items on your (criminal) record, usually blocks a permit and can bar plans to obtain a gun or to carry a gun.",
      modelGerman:
        "Häusliche Gewalt in der Vergangenheit plus Einträge in der (Strafregisterauszug) Aufzeichnung blockieren meist eine Erlaubnis und Pläne, eine Waffe zu bekommen oder zu führen bzw. zu tragen.",
      meaningOptionsDe: [
        "Häusliche Gewalt",
        "Öffentliche Debatte",
        "Jugendschutz",
        "Verkehrssicherheit",
      ],
      ownSentenceHint: "**(criminal) record**, **permit**, **to obtain a gun**, **to carry a gun**.",
      difficulty: 2,
    },
  },
  {
    id: "v12",
    en: "accredited hunting / shooting club",
    de: "Anerkannter Schießclub",
    sentence: {
      example:
        "Membership in an {{w}}, together with a certificate and clean background checks, signals structured training before you obtain a gun.",
      gap: "Membership in an ___, together with a certificate and clean background checks, signals structured training before you obtain a gun.",
      gapAnswer: "accredited hunting / shooting club",
      gapAliases: ["accredited shooting club", "accredited hunting club"],
      modelEnglish:
        "Membership in an accredited hunting / shooting club, together with a certificate and clean background checks, signals structured training before you obtain a gun.",
      modelGerman:
        "Mitgliedschaft in einem anerkannten Schießclub zusammen mit einem Zertifikat und einer sauberen Überprüfung des kriminellen Hintergrunds zeigt strukturiertes Training, bevor man eine Waffe bekommt.",
      meaningOptionsDe: [
        "Anerkannter Schießclub",
        "Einzelhandelsgeschäft",
        "Strafregister",
        "Schließfach",
      ],
      ownSentenceHint: "**Certificate**, **background checks**, **to obtain a gun**.",
      difficulty: 3,
    },
  },
  {
    id: "v13",
    en: "to vouch for sb",
    de: "für jem. bürgen",
    sentence: {
      example:
        "The panel asks whether your sponsor is prepared {{w}} after a review of background checks and your (criminal) record.",
      gap: "The panel asks whether your sponsor is prepared ___ after a review of background checks and your (criminal) record.",
      gapAnswer: "to vouch for sb",
      gapAliases: ["to vouch for somebody", "to vouch for someone"],
      modelEnglish:
        "The panel asks whether your sponsor is prepared to vouch for sb after a review of background checks and your (criminal) record.",
      modelGerman:
        "Die Kommission fragt, ob dein Bürge bereit ist, für jem. zu bürgen — nach einer Überprüfung der Akten, einer Überprüfung des kriminellen Hintergrunds und deiner (Strafregisterauszug) Aufzeichnung.",
      meaningOptionsDe: [
        "für jem. bürgen",
        "jem. durchsuchen",
        "jem. verbieten",
        "jem. ignorieren",
      ],
      ownSentenceHint: "Formal panel / guarantor context.",
      difficulty: 2,
    },
  },
  {
    id: "v14",
    en: "to raise red flags",
    de: "Die Alarmglocken läuten",
    sentence: {
      example:
        "Gaps between addresses and IDs alone can be enough {{w}} during background checks once your (criminal) record is pulled into the review.",
      gap: "Gaps between addresses and IDs alone can be enough ___ during background checks once your (criminal) record is pulled into the review.",
      gapAnswer: "to raise red flags",
      modelEnglish:
        "Gaps between addresses and IDs alone can be enough to raise red flags during background checks once your (criminal) record is pulled into the review.",
      modelGerman:
        "Widersprüche zwischen Adresse und Ausweis können schon bei einer Überprüfung des kriminellen Hintergrunds die Alarmglocken läuten lassen, sobald die (Strafregisterauszug) Aufzeichnung in die Überprüfung einfließt.",
      meaningOptionsDe: [
        "Die Alarmglocken läuten",
        "Die Lizenz erteilen",
        "Die Munition kaufen",
        "Die Waffe lagern",
      ],
      ownSentenceHint: "**Background checks** + **(criminal) record** + **review**; use **enough to** + infinitive.",
      difficulty: 2,
    },
  },
  {
    id: "v15",
    en: "thriving business",
    de: "Blühendes Geschäft",
    sentence: {
      example:
        "After new storage rules, advising on (safe) gun storage became a {{w}} beside retail store compliance manuals and diligence audits.",
      gap: "After new storage rules, advising on (safe) gun storage became a ___ beside retail store compliance manuals and diligence audits.",
      gapAnswer: "thriving business",
      modelEnglish:
        "After new storage rules, advising on (safe) gun storage became a thriving business beside retail store compliance manuals and diligence audits.",
      modelGerman:
        "Nach neuen Aufbewahrungsregeln wurde Beratung zur (sicheren) Verwahrung von Waffen zu einem blühenden Geschäft neben Handbüchern für Einzelhandelsgeschäfte und Prüfungen mit Sorgfalt.",
      meaningOptionsDe: [
        "Blühendes Geschäft",
        "Strafregister",
        "Schießstand",
        "Verwahrung",
      ],
      ownSentenceHint: "**(safe) gun storage**, **retail store**, **diligence** / audit tone.",
      difficulty: 2,
    },
  },
  {
    id: "v16",
    en: "retail store",
    de: "Einzelhandelsgeschäft",
    sentence: {
      example:
        "Inside a licensed {{w}}, staff log each firearm sale after background checks and before releasing ammunition.",
      gap: "Inside a licensed ___, staff log each firearm sale after background checks and before releasing ammunition.",
      gapAnswer: "retail store",
      modelEnglish:
        "Inside a licensed retail store, staff log each firearm sale after background checks and before releasing ammunition.",
      modelGerman:
        "In einem lizenzierten Einzelhandelsgeschäft wird jeder Schusswaffenverkauf nach einer Überprüfung des kriminellen Hintergrunds protokolliert, bevor Munition herausgegeben wird.",
      meaningOptionsDe: [
        "Einzelhandelsgeschäft",
        "Schießclub",
        "Gerichtssaal",
        "Polizeiwache",
      ],
      ownSentenceHint: "**Firearm**, **background checks**, **ammunition** at the counter.",
      difficulty: 2,
    },
  },
  {
    id: "v17",
    en: "mental health / illness",
    de: "Geistige Gesundheit / Krankheit",
    sentence: {
      example:
        "{{w}} questions sit beside domestic violence screening and background checks so risk is judged on facts, not rumours.",
      gap: "___ questions sit beside domestic violence screening and background checks so risk is judged on facts, not rumours.",
      gapAnswer: "mental health",
      gapAliases: ["mental illness", "mental health / illness"],
      modelEnglish:
        "Mental health / illness questions sit beside domestic violence screening and background checks so risk is judged on facts, not rumours.",
      modelGerman:
        "Fragen zu geistiger Gesundheit / Krankheit stehen neben dem Screening zu häuslicher Gewalt und einer Überprüfung des kriminellen Hintergrunds, damit Risiken sachlich bewertet werden.",
      meaningOptionsDe: [
        "Geistige Gesundheit / Krankheit",
        "Häusliche Gewalt",
        "Jagdlizenz",
        "Schießtraining",
      ],
      ownSentenceHint: "Open with **mental health** + slash + **illness**; add **domestic violence** + **background checks**.",
      difficulty: 3,
    },
  },
  {
    id: "v18",
    en: "(safe) gun storage",
    de: "(sichere) Verwahrung von Waffen",
    sentence: {
      example:
        "Statutes link {{w}} with the duty to keep a gun safely, separate ammunition, and a locker whenever minors share the home.",
      gap: "Statutes link ___ with the duty to keep a gun safely, separate ammunition, and a locker whenever minors share the home.",
      gapAnswer: "safe gun storage",
      gapAliases: ["gun storage", "(safe) gun storage"],
      modelEnglish:
        "Statutes link (safe) gun storage with the duty to keep a gun safely, separate ammunition, and a locker whenever minors share the home.",
      modelGerman:
        "Gesetze verknüpfen die (sichere) Verwahrung von Waffen mit der Pflicht, eine Waffe sicher zu verwahren, Munition getrennt aufzubewahren und einen Spind bzw. ein Schließfach zu nutzen, wenn Minderjährige im Haushalt leben.",
      meaningOptionsDe: [
        "(sichere) Verwahrung von Waffen",
        "Einzelhandelsgeschäft",
        "Schießtraining",
        "Hintergrundprüfung",
      ],
      ownSentenceHint: "**To keep a gun safely**, **ammunition**, **locker** in one rule sentence.",
      difficulty: 2,
    },
  },
  {
    id: "v19",
    en: "to store smth.",
    de: "Etw. Verwahren",
    sentence: {
      example:
        "Trainees must show how {{w}}—ammunition apart, firearms in a locker—matches (safe) gun storage rules.",
      gap: "Trainees must show how ___—ammunition apart, firearms in a locker—matches (safe) gun storage rules.",
      gapAnswer: "to store smth.",
      gapAliases: ["to store something", "store something"],
      modelEnglish:
        "Trainees must show how to store smth.—ammunition apart, firearms in a locker—matches (safe) gun storage rules.",
      modelGerman:
        "Auszubildende müssen zeigen, wie man etw. verwahrt — Munition getrennt, Schusswaffen im Spind bzw. Schließfach — gemäß den Regeln zur (sicheren) Verwahrung von Waffen.",
      meaningOptionsDe: [
        "Etw. Verwahren",
        "Etw. verkaufen",
        "Etw. zerlegen",
        "Etw. versteigern",
      ],
      ownSentenceHint: "**Ammunition**, **firearm**, **locker**, **(safe) gun storage**.",
      difficulty: 2,
    },
  },
  {
    id: "v20",
    en: "locker",
    de: "Spind, Schließfach",
    sentence: {
      example:
        "On ranges, firearms stay in a secure {{w}} while ammunition is issued separately under rules tied to (un)announced inspections.",
      gap: "On ranges, firearms stay in a secure ___ while ammunition is issued separately under rules tied to (un)announced inspections.",
      gapAnswer: "locker",
      modelEnglish:
        "On ranges, firearms stay in a secure locker while ammunition is issued separately under rules tied to (un)announced inspections.",
      modelGerman:
        "Auf Schießständen bleiben Schusswaffen in einem Spind bzw. Schließfach, während Munition separat ausgegeben wird — nach Regeln, die mit (un)angemeldeter Durchsuchung zusammenhängen.",
      meaningOptionsDe: [
        "Spind, Schließfach",
        "Schusswaffe",
        "Munition",
        "Schießclub",
      ],
      ownSentenceHint: "**Firearm**, **ammunition**, **(un)announced inspections**.",
      difficulty: 2,
    },
  },
  {
    id: "v21",
    en: "ammunition",
    de: "Munition",
    sentence: {
      example:
        "{{w}} must stay apart from every firearm and handgun / pistol under (safe) gun storage guidance, especially if (un)announced inspections are likely.",
      gap: "___ must stay apart from every firearm and handgun / pistol under (safe) gun storage guidance, especially if (un)announced inspections are likely.",
      gapAnswer: "ammunition",
      modelEnglish:
        "Ammunition must stay apart from every firearm and handgun / pistol under (safe) gun storage guidance, especially if (un)announced inspections are likely.",
      modelGerman:
        "Munition muss getrennt von jeder Schusswaffe und Handfeuerwaffe bleiben — nach den Vorgaben zur (sicheren) Verwahrung von Waffen, besonders wenn (un)angemeldete Durchsuchung droht.",
      meaningOptionsDe: ["Munition", "Lizenz", "Verwahrung", "Durchsuchung"],
      ownSentenceHint: "**Firearm**, **handgun / pistol**, **(safe) gun storage**, **(un)announced inspections**.",
      difficulty: 2,
    },
  },
  {
    id: "v22",
    en: "(un)announced inspections",
    de: "(un)angemeldete Durchsuchung",
    sentence: {
      example:
        "Licence holders should expect {{w}} where officers are allowed to inspect smth. on site and compare a certificate with the permit file.",
      gap: "Licence holders should expect ___ where officers are allowed to inspect smth. on site and compare a certificate with the permit file.",
      gapAnswer: "unannounced inspections",
      gapAliases: [
        "announced inspections",
        "(un)announced inspections",
        "inspections",
      ],
      modelEnglish:
        "Licence holders should expect (un)announced inspections where officers are allowed to inspect smth. on site and compare a certificate with the permit file.",
      modelGerman:
        "Lizenzinhaber müssen mit einer (un)angemeldeten Durchsuchung rechnen, wenn Beamte vor Ort etw. durchsuchen und ein Zertifikat mit der Erlaubnisakte abgleichen.",
      meaningOptionsDe: [
        "(un)angemeldete Durchsuchung",
        "Hintergrundprüfung",
        "Verurteilung",
        "Schießtraining",
      ],
      ownSentenceHint: "**To inspect smth.** on site + **certificate** + **permit**.",
      difficulty: 3,
    },
  },
  {
    id: "v23",
    en: "to inspect smth.",
    de: "Etw. durchsuchen",
    sentence: {
      example:
        "During (un)announced inspections, inspectors are empowered {{w}}—cabinet, locker, records—if diligence duties were breached and a certificate is missing.",
      gap: "During (un)announced inspections, inspectors are empowered ___—cabinet, locker, records—if diligence duties were breached and a certificate is missing.",
      gapAnswer: "to inspect smth.",
      gapAliases: ["to inspect something"],
      modelEnglish:
        "During (un)announced inspections, inspectors are empowered to inspect smth.—cabinet, locker, records—if diligence duties were breached and a certificate is missing.",
      modelGerman:
        "Bei einer (un)angemeldeten Durchsuchung dürfen Prüfer etw. durchsuchen — Schrank, Spind bzw. Schließfach, Akten — wenn Sorgfaltspflichten verletzt wurden und ein Zertifikat fehlt.",
      meaningOptionsDe: [
        "Etw. durchsuchen",
        "Etw. verkaufen",
        "Etw. lagern",
        "Etw. genehmigen",
      ],
      ownSentenceHint: "**(un)announced inspections**, **locker**, **diligence**, **certificate**.",
      difficulty: 2,
    },
  },
  {
    id: "v24",
    en: "diligence / diligent",
    de: "Eifer/Sorgfalt – eifrig/sorgfältig",
    sentence: {
      example:
        "The audit praised her {{w}} in matching background checks data with retail store logs before anyone could obtain a gun or finish sales.",
      gap: "The audit praised her ___ in matching background checks data with retail store logs before anyone could obtain a gun or finish sales.",
      gapAnswer: "diligence",
      gapAliases: ["diligent", "diligence / diligent"],
      modelEnglish:
        "The audit praised her diligence in matching background checks data with retail store logs before anyone could obtain a gun or finish sales.",
      modelGerman:
        "Die Prüfung lobte ihre Sorgfalt beim Abgleich der Überprüfung des kriminellen Hintergrunds mit Kassenlogs im Einzelhandelsgeschäft, bevor jemand eine Waffe bekommt oder Verkäufe abschließt.",
      meaningOptionsDe: [
        "Eifer/Sorgfalt – eifrig/sorgfältig",
        "Häusliche Gewalt",
        "Schusswaffe",
        "Einzelhandel",
      ],
      ownSentenceHint: "**Background checks**, **retail store**, **to obtain a gun**.",
      difficulty: 2,
    },
  },
  {
    id: "v25",
    en: "to certify smth. / certificate",
    de: "Etw. belegen / Zertifikat",
    sentence: {
      example:
        "Graduates leave with a {{w}} that proves hours for a permit after background checks and a review of the shooting-course file.",
      gap: "Graduates leave with a ___ that proves hours for a permit after background checks and a review of the shooting-course file.",
      gapAnswer: "certificate",
      gapAliases: ["to certify smth. / certificate", "a certificate"],
      modelEnglish:
        "Graduates leave with a certificate that proves hours for a permit after background checks and a review of the shooting-course file.",
      modelGerman:
        "Absolventen erhalten ein Zertifikat, das die Stunden für eine Erlaubnis belegt — nach Überprüfung des kriminellen Hintergrunds und einer Überprüfung der Schießkursakte.",
      meaningOptionsDe: [
        "Etw. belegen / Zertifikat",
        "Etw. durchsuchen",
        "Etw. verbieten",
        "Etw. zerlegen",
      ],
      ownSentenceHint: "**Permit**, **background checks**, **review**.",
      difficulty: 2,
    },
  },
  {
    id: "v26",
    en: "permit / to permit smth.",
    de: "Erlaubnis / etw. erlauben",
    sentence: {
      example:
        "A valid {{w}} signals that the state will permit smth.—here to carry a gun—that the same statute would bar without paperwork and background checks.",
      gap: "A valid ___ signals that the state will permit smth.—here to carry a gun—that the same statute would bar without paperwork and background checks.",
      gapAnswer: "permit",
      gapAliases: ["permit / to permit smth."],
      modelEnglish:
        "A valid permit signals that the state will permit smth.—here to carry a gun—that the same statute would bar without paperwork and background checks.",
      modelGerman:
        "Eine gültige Erlaubnis signalisiert, dass der Staat etw. erlaubt — hier eine Waffe zu führen bzw. zu tragen — was er ohne Formulare und Überprüfung des kriminellen Hintergrunds nach demselben Gesetz verbieten würde.",
      meaningOptionsDe: [
        "Erlaubnis / etw. erlauben",
        "Verurteilung",
        "Durchsuchung",
        "Munition",
      ],
      ownSentenceHint: "**Permit smth.** + **to carry a gun** + **background checks**.",
      difficulty: 2,
    },
  },
  {
    id: "v27",
    en: "to outnumber smth.",
    de: "zahlenmäßig übertreffen",
    sentence: {
      example:
        "In some datasets, legal firearms may already {{w}} dark-market stockpiles after weak background checks at busy retail stores.",
      gap: "In some datasets, legal firearms may already ___ dark-market stockpiles after weak background checks at busy retail stores.",
      gapAnswer: "outnumber smth.",
      gapAliases: ["to outnumber smth.", "outnumber"],
      modelEnglish:
        "In some datasets, legal firearms may already outnumber smth. like dark-market stockpiles after weak background checks at busy retail stores.",
      modelGerman:
        "In manchen Datensätzen könnten legale Schusswaffen illegale Bestände schon zahlenmäßig übertreffen, wenn die Überprüfung des kriminellen Hintergrunds in vollen Einzelhandelsgeschäften schwach war.",
      meaningOptionsDe: [
        "zahlenmäßig übertreffen",
        "etw. durchsuchen",
        "etw. verwahren",
        "etw. verbieten",
      ],
      ownSentenceHint: "**Firearms**, **background checks**, **retail store** + comparative stockpiles.",
      difficulty: 3,
    },
  },
  {
    id: "v28",
    en: "to keep a gun safely",
    de: "Waffe sicher verwahren",
    sentence: {
      example:
        "Guidance links the obligation {{w}} with (safe) gun storage, separate ammunition, and a locker, especially after domestic violence concerns surface in background checks.",
      gap: "Guidance links the obligation ___ with (safe) gun storage, separate ammunition, and a locker, especially after domestic violence concerns surface in background checks.",
      gapAnswer: "to keep a gun safely",
      modelEnglish:
        "Guidance links the obligation to keep a gun safely with (safe) gun storage, separate ammunition, and a locker, especially after domestic violence concerns surface in background checks.",
      modelGerman:
        "Leitfäden verbinden die Pflicht, eine Waffe sicher zu verwahren, mit der (sicheren) Verwahrung von Waffen, getrennter Munition und einem Spind bzw. Schließfach — besonders wenn nach einer Überprüfung des kriminellen Hintergrunds Sorgen wegen häuslicher Gewalt auftauchen.",
      meaningOptionsDe: [
        "Waffe sicher verwahren",
        "Waffe öffentlich führen",
        "Waffe verkaufen",
        "Waffe zerlegen",
      ],
      ownSentenceHint: "**(safe) gun storage**, **ammunition**, **locker**, **domestic violence**, **background checks**.",
      difficulty: 2,
    },
  },
];

export function getEntryById(id: string): VocabEntry | undefined {
  return VOCABULARY.find((v) => v.id === id);
}
