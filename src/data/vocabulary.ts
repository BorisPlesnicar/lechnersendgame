import type { VocabEntry } from "@/lib/types";

/**
 * Sole word list for this app — matches the class sheet
 * **VOCAB "How to Buy a Gun in 15 Countries"** (29 entries).
 * Sentence models use plain B2 English/German: the target word is used clearly, not fancy phrasing.
 */
export const VOCABULARY: VocabEntry[] = [
  {
    id: "v0",
    en: "to obtain a gun",
    de: "Waffe bekommen",
    sentence: {
      example:
        "In many jurisdictions, you are required {{w}} through regulated channels rather than via informal networks.",
      gap: "In many jurisdictions, you are required ___ through regulated channels rather than via informal networks.",
      gapAnswer: "to obtain a gun",
      modelEnglish:
        "In many countries you have to obtain a gun through official steps, not through private or informal deals.",
      modelGerman:
        "In vielen Ländern muss man eine Waffe auf offiziellem Weg bekommen, nicht privat oder informell.",
      meaningOptionsDe: [
        "Waffe bekommen",
        "Waffe führen",
        "Waffe verkaufen",
        "Waffe verstecken",
      ],
      ownSentenceHint: "Use obligation + contrast (regulated vs informal).",
      difficulty: 2,
    },
  },
  {
    id: "v1",
    en: "to carry a gun",
    de: "Waffe führen / tragen",
    sentence: {
      example:
        "Public opinion remains split over who ought to be allowed {{w}} in densely populated areas.",
      gap: "Public opinion remains split over who ought to be allowed ___ in densely populated areas.",
      gapAnswer: "to carry a gun",
      modelEnglish:
        "People disagree about who should be allowed to carry a gun in busy cities and crowded places.",
      modelGerman:
        "Die Leute sind uneinig, wer eine Waffe in vollen Städten und an vollen Orten führen bzw. tragen darf.",
      meaningOptionsDe: [
        "Waffe führen / tragen",
        "Waffe bekommen",
        "Waffe lagern",
        "Waffe zerlegen",
      ],
      ownSentenceHint: "Contrast urban density with individual rights.",
      difficulty: 2,
    },
  },
  {
    id: "v2",
    en: "firearm",
    de: "Schusswaffe",
    sentence: {
      example:
        "Even when ownership is broadly permitted, acquiring a {{w}} still tends to involve waiting periods and paperwork.",
      gap: "Even when ownership is broadly permitted, acquiring a ___ still tends to involve waiting periods and paperwork.",
      gapAnswer: "firearm",
      modelEnglish:
        "Even where guns are legal, getting a firearm usually means waiting and filling in forms.",
      modelGerman:
        "Selbst wo Waffen erlaubt sind, braucht man für eine Schusswaffe meist Wartezeit und Formulare.",
      meaningOptionsDe: [
        "Schusswaffe",
        "Schutzweste",
        "Schließfach",
        "Schießstand",
      ],
      ownSentenceHint: "Formal register; link acquisition and procedure.",
      difficulty: 2,
    },
  },
  {
    id: "v3",
    en: "handgun / pistol",
    de: "Handfeuerwaffe",
    sentence: {
      example:
        "Compared with long guns, a {{w}} is inherently easier to conceal, which explains the stricter scrutiny.",
      gap: "Compared with long guns, a ___ is inherently easier to conceal, which explains the stricter scrutiny.",
      gapAnswer: "handgun",
      gapAliases: ["pistol", "handgun / pistol"],
      modelEnglish:
        "A handgun / pistol is easier to hide than a long gun, so the rules are often stricter.",
      modelGerman:
        "Eine Handfeuerwaffe lässt sich leichter verstecken als eine Langwaffe, deshalb sind die Regeln oft strenger.",
      meaningOptionsDe: [
        "Handfeuerwaffe",
        "Schusswaffe",
        "Munition",
        "Gewehr",
      ],
      ownSentenceHint: "Compare concealability and policy response.",
      difficulty: 2,
    },
  },
  {
    id: "v4",
    en: "semiautomatic",
    de: "Halbautomatisch",
    sentence: {
      example:
        "Parliamentarians often treat {{w}} firearms as a separate category deserving tighter restrictions.",
      gap: "Parliamentarians often treat ___ firearms as a separate category deserving tighter restrictions.",
      gapAnswer: "semiautomatic",
      modelEnglish:
        "Lawmakers often treat semiautomatic guns as a special group with harder rules.",
      modelGerman:
        "Gesetzgeber behandeln halbautomatische Waffen oft als eigene Gruppe mit strengeren Regeln.",
      meaningOptionsDe: [
        "Halbautomatisch",
        "Vollautomatisch",
        "Manuell",
        "Elektrisch",
      ],
      ownSentenceHint: "Use category + restriction language.",
      difficulty: 2,
    },
  },
  {
    id: "v5",
    en: "rifle",
    de: "Gewehr",
    sentence: {
      example:
        "For regulated hunting, a {{w}} may be issued only after competence and storage rules have been verified.",
      gap: "For regulated hunting, a ___ may be issued only after competence and storage rules have been verified.",
      gapAnswer: "rifle",
      modelEnglish:
        "For hunting you may get a rifle only after they check your skills and how you store the weapon.",
      modelGerman:
        "Für die Jagd bekommt man ein Gewehr erst, wenn Sachkunde und Aufbewahrung geprüft sind.",
      meaningOptionsDe: ["Gewehr", "Pistole", "Messer", "Bogen"],
      ownSentenceHint: "Link hunting, licensing, and prerequisites.",
      difficulty: 2,
    },
  },
  {
    id: "v6",
    en: "conviction",
    de: "Verurteilung",
    sentence: {
      example:
        "A violent {{w}} on your record is generally enough for licensing boards to reject the application.",
      gap: "A violent ___ on your record is generally enough for licensing boards to reject the application.",
      gapAnswer: "conviction",
      modelEnglish:
        "A violent conviction on your record is usually enough for them to refuse a gun licence.",
      modelGerman:
        "Eine Verurteilung wegen Gewalt reicht meist, damit man keine Waffenlizenz bekommt.",
      meaningOptionsDe: [
        "Verurteilung",
        "Überprüfung",
        "Erlaubnis",
        "Verwahrung",
      ],
      ownSentenceHint: "Legal/court sense, not ‘strong belief’.",
      difficulty: 2,
    },
  },
  {
    id: "v7",
    en: "background checks",
    de: "Überprüfung des kriminellen Hintergrunds",
    sentence: {
      example:
        "Across party lines, {{w}} are still viewed as the bare minimum before any weapon changes hands.",
      gap: "Across party lines, ___ are still viewed as the bare minimum before any weapon changes hands.",
      gapAnswer: "background checks",
      modelEnglish:
        "Most people agree that background checks are the least you should do before a gun is sold.",
      modelGerman:
        "Die meisten sagen, eine Überprüfung des kriminellen Hintergrunds gehört dazu, bevor eine Waffe verkauft wird.",
      meaningOptionsDe: [
        "Überprüfung des kriminellen Hintergrunds",
        "Einzelhandelsgeschäft",
        "Schießtraining",
        "Waffenschein",
      ],
      ownSentenceHint: "Minimum safeguard + transfer of ownership.",
      difficulty: 2,
    },
  },
  {
    id: "v8",
    en: "(criminal) record",
    de: "(Strafregisterauszug) Aufzeichnung",
    sentence: {
      example:
        "Anything that surfaces on your {{w}} can tip the balance against you, even when the incident was years ago.",
      gap: "Anything that surfaces on your ___ can tip the balance against you, even when the incident was years ago.",
      gapAnswer: "criminal record",
      gapAliases: ["record", "(criminal) record"],
      modelEnglish:
        "Something bad on your (criminal) record can still count against you years later.",
      modelGerman:
        "Etwas Schlechtes in der (Strafregister-)Aufzeichnung kann Jahre später noch schaden.",
      meaningOptionsDe: [
        "(Strafregisterauszug) Aufzeichnung",
        "Verurteilung",
        "Erlaubnis",
        "Durchsuchung",
      ],
      ownSentenceHint: "Formal, factual tone.",
      difficulty: 3,
    },
  },
  {
    id: "v9",
    en: "review",
    de: "Überprüfung",
    sentence: {
      example:
        "Before a licence is granted, your file undergoes a meticulous {{w}} of supporting evidence.",
      gap: "Before a licence is granted, your file undergoes a meticulous ___ of supporting evidence.",
      gapAnswer: "review",
      modelEnglish:
        "Before you get a licence, they do a careful review of your documents.",
      modelGerman:
        "Bevor du die Lizenz bekommst, gibt es eine sorgfältige Überprüfung deiner Unterlagen.",
      meaningOptionsDe: [
        "Überprüfung",
        "Verurteilung",
        "Munition",
        "Einzelhandel",
      ],
      ownSentenceHint: "Noun = examination, not a film review.",
      difficulty: 2,
    },
  },
  {
    id: "v10",
    en: "to pass a check",
    de: "Eine Überprüfung bestehen",
    sentence: {
      example:
        "First-time buyers are normally expected {{w}} before the transaction can be finalised.",
      gap: "First-time buyers are normally expected ___ before the transaction can be finalised.",
      gapAnswer: "to pass a check",
      gapAliases: ["pass a check"],
      modelEnglish:
        "You normally have to pass a check before you can finish buying the gun.",
      modelGerman:
        "Meist musst du eine Überprüfung bestehen, bevor du den Kauf abschließen kannst.",
      meaningOptionsDe: [
        "Eine Überprüfung bestehen",
        "Eine Waffe verkaufen",
        "Eine Lizenz verlängern",
        "Eine Strafe zahlen",
      ],
      ownSentenceHint: "Expected + infinitive pattern.",
      difficulty: 2,
    },
  },
  {
    id: "v11",
    en: "domestic violence",
    de: "Häusliche Gewalt",
    sentence: {
      example:
        "{{w}} in an applicant's history is routinely treated as a decisive bar to obtaining weapons.",
      gap: "___ in an applicant's history is routinely treated as a decisive bar to obtaining weapons.",
      gapAnswer: "domestic violence",
      modelEnglish:
        "Domestic violence in your past often stops you from getting a gun.",
      modelGerman:
        "Häusliche Gewalt in der Vergangenheit verhindert oft, dass man eine Waffe bekommt.",
      meaningOptionsDe: [
        "Häusliche Gewalt",
        "Öffentliche Debatte",
        "Jugendschutz",
        "Verkehrssicherheit",
      ],
      ownSentenceHint: "Serious register; link to licensing decisions.",
      difficulty: 2,
    },
  },
  {
    id: "v12",
    en: "accredited hunting / shooting club",
    de: "Anerkannter Schießclub",
    sentence: {
      example:
        "Membership of an {{w}} is sometimes cited as evidence that the applicant has received structured training.",
      gap: "Membership of an ___ is sometimes cited as evidence that the applicant has received structured training.",
      gapAnswer: "accredited hunting / shooting club",
      gapAliases: ["accredited shooting club", "accredited hunting club"],
      modelEnglish:
        "Being in an accredited hunting / shooting club can show you had proper training.",
      modelGerman:
        "Mitgliedschaft in einem anerkannten Schießclub kann zeigen, dass man richtig trainiert wurde.",
      meaningOptionsDe: [
        "Anerkannter Schießclub",
        "Einzelhandelsgeschäft",
        "Strafregister",
        "Schließfach",
      ],
      ownSentenceHint: "Training / supervision context.",
      difficulty: 3,
    },
  },
  {
    id: "v13",
    en: "to vouch for sb",
    de: "für jem. bürgen",
    sentence: {
      example:
        "A referee may be asked whether they are prepared {{w}} before the panel delivers its ruling.",
      gap: "A referee may be asked whether they are prepared ___ before the panel delivers its ruling.",
      gapAnswer: "to vouch for sb",
      gapAliases: ["to vouch for somebody", "to vouch for someone"],
      modelEnglish:
        "Someone on the form may have to vouch for sb before you get the licence.",
      modelGerman:
        "Jemand muss auf dem Formular vielleicht für jemanden bürgen, bevor du die Lizenz bekommst.",
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
        "Inconsistent paperwork alone can be enough {{w}} for investigators long before charges are filed.",
      gap: "Inconsistent paperwork alone can be enough ___ for investigators long before charges are filed.",
      gapAnswer: "to raise red flags",
      modelEnglish:
        "Small mistakes in the papers can raise red flags for the police early on.",
      modelGerman:
        "Kleine Fehler in den Unterlagen können bei der Polizei früh die Alarmglocken läuten lassen.",
      meaningOptionsDe: [
        "Die Alarmglocken läuten",
        "Die Lizenz erteilen",
        "Die Munition kaufen",
        "Die Waffe lagern",
      ],
      ownSentenceHint: "Warning / suspicion without proof.",
      difficulty: 2,
    },
  },
  {
    id: "v15",
    en: "thriving business",
    de: "Blühendes Geschäft",
    sentence: {
      example:
        "Whenever regulation tightens, compliance consulting often turns into a {{w}} almost overnight.",
      gap: "Whenever regulation tightens, compliance consulting often turns into a ___ almost overnight.",
      gapAnswer: "thriving business",
      modelEnglish:
        "When the rules get stricter, safety training can turn into a thriving business.",
      modelGerman:
        "Wenn die Regeln strenger werden, kann Sicherheitstraining zu einem blühenden Geschäft werden.",
      meaningOptionsDe: [
        "Blühendes Geschäft",
        "Strafregister",
        "Schießstand",
        "Verwahrung",
      ],
      ownSentenceHint: "Link law and legal services market.",
      difficulty: 2,
    },
  },
  {
    id: "v16",
    en: "retail store",
    de: "Einzelhandelsgeschäft",
    sentence: {
      example:
        "Even in a licensed {{w}}, clerks must follow strict age-verification and logging procedures.",
      gap: "Even in a licensed ___, clerks must follow strict age-verification and logging procedures.",
      gapAnswer: "retail store",
      modelEnglish:
        "Even in a licensed retail store, staff must check age and write it down.",
      modelGerman:
        "Selbst in einem lizenzierten Einzelhandelsgeschäft müssen die Leute das Alter prüfen und eintragen.",
      meaningOptionsDe: [
        "Einzelhandelsgeschäft",
        "Schießclub",
        "Gerichtssaal",
        "Polizeiwache",
      ],
      ownSentenceHint: "Point-of-sale rules.",
      difficulty: 2,
    },
  },
  {
    id: "v17",
    en: "mental health / illness",
    de: "Geistige Gesundheit / Krankheit",
    sentence: {
      example:
        "Lawmakers still struggle with how {{w}} disclosures should influence risk assessments without fuelling stigma.",
      gap: "Lawmakers still struggle with how ___ disclosures should influence risk assessments without fuelling stigma.",
      gapAnswer: "mental health",
      gapAliases: ["mental illness", "mental health / illness"],
      modelEnglish:
        "Politicians still discuss how mental health / illness should affect the checks without unfair labels.",
      modelGerman:
        "Politiker diskutieren noch, wie geistige Gesundheit / Krankheit die Prüfung beeinflussen soll, ohne unfair zu bewerten.",
      meaningOptionsDe: [
        "Geistige Gesundheit / Krankheit",
        "Häusliche Gewalt",
        "Jagdlizenz",
        "Schießtraining",
      ],
      ownSentenceHint: "Respectful, policy-focused wording.",
      difficulty: 3,
    },
  },
  {
    id: "v18",
    en: "(safe) gun storage",
    de: "(sichere) Verwahrung von Waffen",
    sentence: {
      example:
        "Statutes increasingly insist on {{w}} at home, especially where minors are present.",
      gap: "Statutes increasingly insist on ___ at home, especially where minors are present.",
      gapAnswer: "safe gun storage",
      gapAliases: ["gun storage", "(safe) gun storage"],
      modelEnglish:
        "Laws ask more and more for (safe) gun storage at home, especially if children live there.",
      modelGerman:
        "Gesetze verlangen öfter eine (sichere) Verwahrung von Waffen zu Hause, besonders wenn Kinder da wohnen.",
      meaningOptionsDe: [
        "(sichere) Verwahrung von Waffen",
        "Einzelhandelsgeschäft",
        "Schießtraining",
        "Hintergrundprüfung",
      ],
      ownSentenceHint: "Household safety + children.",
      difficulty: 2,
    },
  },
  {
    id: "v19",
    en: "to store smth.",
    de: "Etw. Verwahren",
    sentence: {
      example:
        "Trainees must demonstrate that they know how {{w}} in line with statutory guidance.",
      gap: "Trainees must demonstrate that they know how ___ in line with statutory guidance.",
      gapAnswer: "to store smth.",
      gapAliases: ["to store something", "store something"],
      modelEnglish:
        "You must show you know how to store smth. the right way under the rules.",
      modelGerman:
        "Du musst zeigen, dass du weißt, wie man etwas nach den Regeln verwahrt.",
      meaningOptionsDe: [
        "Etw. Verwahren",
        "Etw. verkaufen",
        "Etw. zerlegen",
        "Etw. versteigern",
      ],
      ownSentenceHint: "Formal procedure + objects.",
      difficulty: 2,
    },
  },
  {
    id: "v20",
    en: "locker",
    de: "Spind, Schließfach",
    sentence: {
      example:
        "On many ranges, firearms must be left in a secure {{w}} until the instructor calls you forward.",
      gap: "On many ranges, firearms must be left in a secure ___ until the instructor calls you forward.",
      gapAnswer: "locker",
      modelEnglish:
        "On many ranges you leave guns in a locker until it is your turn.",
      modelGerman:
        "Auf vielen Schießständen legt man die Waffen in einen Spind oder ein Schließfach, bis man dran ist.",
      meaningOptionsDe: [
        "Spind, Schließfach",
        "Schusswaffe",
        "Munition",
        "Schießclub",
      ],
      ownSentenceHint: "Concrete place at a range or club.",
      difficulty: 2,
    },
  },
  {
    id: "v21",
    en: "ammunition",
    de: "Munition",
    sentence: {
      example:
        "Best practice dictates that {{w}} be kept apart from the weapons themselves whenever they are not in use.",
      gap: "Best practice dictates that ___ be kept apart from the weapons themselves whenever they are not in use.",
      gapAnswer: "ammunition",
      modelEnglish:
        "You should keep ammunition away from the guns when you are not using them.",
      modelGerman:
        "Man soll Munition getrennt von den Waffen aufbewahren, wenn man sie nicht benutzt.",
      meaningOptionsDe: ["Munition", "Lizenz", "Verwahrung", "Durchsuchung"],
      ownSentenceHint: "Safety separation rule.",
      difficulty: 2,
    },
  },
  {
    id: "v22",
    en: "(un)announced inspections",
    de: "(un)angemeldete Durchsuchung",
    sentence: {
      example:
        "Holders of licences should anticipate {{w}} whose purpose is to verify ongoing compliance.",
      gap: "Holders of licences should anticipate ___ whose purpose is to verify ongoing compliance.",
      gapAnswer: "unannounced inspections",
      gapAliases: [
        "announced inspections",
        "(un)announced inspections",
        "inspections",
      ],
      modelEnglish:
        "If you have a licence, expect (un)announced inspections to see if you follow the rules.",
      modelGerman:
        "Mit einer Lizenz muss man mit (un)angemeldeten Durchsuchungen rechnen, ob man die Regeln einhält.",
      meaningOptionsDe: [
        "(un)angemeldete Durchsuchung",
        "Hintergrundprüfung",
        "Verurteilung",
        "Schießtraining",
      ],
      ownSentenceHint: "Official oversight + compliance.",
      difficulty: 3,
    },
  },
  {
    id: "v23",
    en: "to inspect smth.",
    de: "Etw. durchsuchen",
    sentence: {
      example:
        "Provided statutory thresholds are met, inspectors retain the authority {{w}} on site.",
      gap: "Provided statutory thresholds are met, inspectors retain the authority ___ on site.",
      gapAnswer: "to inspect smth.",
      gapAliases: ["to inspect something"],
      modelEnglish:
        "If the law allows it, inspectors may inspect smth. at your place.",
      modelGerman:
        "Wenn das Gesetz es erlaubt, dürfen Prüfer etwas bei dir durchsuchen.",
      meaningOptionsDe: [
        "Etw. durchsuchen",
        "Etw. verkaufen",
        "Etw. lagern",
        "Etw. genehmigen",
      ],
      ownSentenceHint: "Legal basis + on-site action.",
      difficulty: 2,
    },
  },
  {
    id: "v24",
    en: "diligence / diligent",
    de: "Eifer/Sorgfalt – eifrig/sorgfältig",
    sentence: {
      example:
        "The oversight body singled out the clerk's {{w}} in reconciling contradictory entries across databases.",
      gap: "The oversight body singled out the clerk's ___ in reconciling contradictory entries across databases.",
      gapAnswer: "diligence",
      gapAliases: ["diligent", "diligence / diligent"],
      modelEnglish:
        "The report praised the clerk's diligence / diligent work on the files.",
      modelGerman:
        "Der Bericht lobte die Sorgfalt / das sorgfältige Arbeiten der Sachbearbeiterin mit den Akten.",
      meaningOptionsDe: [
        "Eifer/Sorgfalt – eifrig/sorgfältig",
        "Häusliche Gewalt",
        "Schusswaffe",
        "Einzelhandel",
      ],
      ownSentenceHint: "Formal praise in an audit context.",
      difficulty: 2,
    },
  },
  {
    id: "v25",
    en: "to certify smth. / certificate",
    de: "Etw. belegen / Zertifikat",
    sentence: {
      example:
        "Graduates leave with a {{w}} that third parties can verify online.",
      gap: "Graduates leave with a ___ that third parties can verify online.",
      gapAnswer: "certificate",
      gapAliases: ["to certify smth. / certificate", "a certificate"],
      modelEnglish:
        "After the course you get a certificate; that is how you certify smth. like your hours for the office.",
      modelGerman:
        "Nach dem Kurs bekommst du ein Zertifikat; so belegst du z. B. deine Stunden bei der Behörde.",
      meaningOptionsDe: [
        "Etw. belegen / Zertifikat",
        "Etw. durchsuchen",
        "Etw. verbieten",
        "Etw. zerlegen",
      ],
      ownSentenceHint: "Document + official proof.",
      difficulty: 2,
    },
  },
  {
    id: "v26",
    en: "permit / to permit smth.",
    de: "Erlaubnis / etw. erlauben",
    sentence: {
      example:
        "A valid {{w}} signals that the state will permit smth. it would otherwise prohibit under the same statute.",
      gap: "A valid ___ signals that the state will permit smth. it would otherwise prohibit under the same statute.",
      gapAnswer: "permit",
      gapAliases: ["permit / to permit smth."],
      modelEnglish:
        "A valid permit means the state will permit smth. that the same law would ban without it.",
      modelGerman:
        "Eine gültige Erlaubnis heißt: Der Staat erlaubt etwas, was er ohne sie nach demselben Gesetz verbieten würde.",
      meaningOptionsDe: [
        "Erlaubnis / etw. erlauben",
        "Verurteilung",
        "Durchsuchung",
        "Munition",
      ],
      ownSentenceHint: "Noun permit + verb permit contrast.",
      difficulty: 2,
    },
  },
  {
    id: "v27",
    en: "to outnumber smth.",
    de: "zahlenmäßig übertreffen",
    sentence: {
      example:
        "Survey data suggest that registered firearms may already {{w}} illicit stockpiles in certain regions.",
      gap: "Survey data suggest that registered firearms may already ___ illicit stockpiles in certain regions.",
      gapAnswer: "outnumber smth.",
      gapAliases: ["to outnumber smth.", "outnumber"],
      modelEnglish:
        "Some studies say legal guns may already outnumber smth. like illegal stocks in that area.",
      modelGerman:
        "Manche Studien sagen, legale Waffen übertreffen illegale Bestände in dieser Gegend schon zahlenmäßig.",
      meaningOptionsDe: [
        "zahlenmäßig übertreffen",
        "etw. durchsuchen",
        "etw. verwahren",
        "etw. verbieten",
      ],
      ownSentenceHint: "Quantitative comparison in analysis.",
      difficulty: 3,
    },
  },
  {
    id: "v28",
    en: "to keep a gun safely",
    de: "Waffe sicher verwahren",
    sentence: {
      example:
        "Guidance documents reiterate the obligation {{w}} whenever children or vulnerable adults share the household.",
      gap: "Guidance documents reiterate the obligation ___ whenever children or vulnerable adults share the household.",
      gapAnswer: "to keep a gun safely",
      modelEnglish:
        "The leaflet says again that you must keep a gun safely if children live with you.",
      modelGerman:
        "Der Merkzettel sagt nochmal, dass man eine Waffe sicher verwahren muss, wenn Kinder im Haushalt leben.",
      meaningOptionsDe: [
        "Waffe sicher verwahren",
        "Waffe öffentlich führen",
        "Waffe verkaufen",
        "Waffe zerlegen",
      ],
      ownSentenceHint: "Duty + vulnerable household members.",
      difficulty: 2,
    },
  },
];

export function getEntryById(id: string): VocabEntry | undefined {
  return VOCABULARY.find((v) => v.id === id);
}
