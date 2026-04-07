import type { VocabEntry } from "@/lib/types";

/**
 * Sole word list for this app — matches the class sheet
 * **VOCAB "How to Buy a Gun in 15 Countries"** (29 entries).
 * English/German columns follow that handout; sentences are B2/C1 level for practice.
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
        "In many jurisdictions, you are required to obtain a gun through regulated channels rather than via informal networks.",
      modelGerman:
        "In zahlreichen Rechtsordnungen muss man eine Waffe über regulierte Wege bekommen und nicht über informelle Netzwerke.",
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
        "Public opinion remains split over who ought to be allowed to carry a gun in densely populated areas.",
      modelGerman:
        "Die öffentliche Meinung ist gespalten, wem erlaubt sein soll, eine Waffe in dicht besiedelten Gebieten zu führen bzw. zu tragen.",
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
        "Even when ownership is broadly permitted, acquiring a firearm still tends to involve waiting periods and paperwork.",
      modelGerman:
        "Selbst wenn der Waffenbesitz weitgehend erlaubt ist, ist der Erwerb einer Schusswaffe meist mit Wartezeiten und Bürokratie verbunden.",
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
        "Compared with long guns, a handgun / pistol is inherently easier to conceal, which explains the stricter scrutiny.",
      modelGerman:
        "Im Vergleich zu Langwaffen lässt sich eine Handfeuerwaffe von Natur aus leichter verbergen, was die schärfere Kontrolle erklärt.",
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
        "Parliamentarians often treat semiautomatic firearms as a separate category deserving tighter restrictions.",
      modelGerman:
        "Parlamentarier behandeln halbautomatische Schusswaffen häufig als eigene Kategorie, die strengere Beschränkungen verdient.",
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
        "For regulated hunting, a rifle may be issued only after competence and storage rules have been verified.",
      modelGerman:
        "Für die Jagd unter Aufsicht darf ein Gewehr erst ausgegeben werden, nachdem Sachkunde und Aufbewahrungsregeln geprüft wurden.",
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
        "A violent conviction on your record is generally enough for licensing boards to reject the application.",
      modelGerman:
        "Eine Verurteilung wegen Gewalttaten reicht in der Regel aus, damit Gremien den Antrag ablehnen.",
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
        "Across party lines, background checks are still viewed as the bare minimum before any weapon changes hands.",
      modelGerman:
        "Parteiübergreifend gelten Überprüfungen des kriminellen Hintergrunds als Mindeststandard, bevor eine Waffe den Besitzer wechselt.",
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
        "Anything that surfaces on your (criminal) record can tip the balance against you, even when the incident was years ago.",
      modelGerman:
        "Alles, was im Strafregister bzw. in der Aufzeichnung auftaucht, kann zum Ausschlag gegen Sie werden, selbst wenn die Sache Jahre zurückliegt.",
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
        "Before a licence is granted, your file undergoes a meticulous review of supporting evidence.",
      modelGerman:
        "Bevor eine Lizenz erteilt wird, unterzieht man die Akte einer sorgfältigen Überprüfung der Belege.",
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
        "First-time buyers are normally expected to pass a check before the transaction can be finalised.",
      modelGerman:
        "Erstkäufer müssen in der Regel eine Überprüfung bestehen, bevor der Kauf abgeschlossen werden kann.",
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
        "Domestic violence in an applicant's history is routinely treated as a decisive bar to obtaining weapons.",
      modelGerman:
        "Häusliche Gewalt in der Vorgeschichte eines Antragstellers gilt routinemäßig als schwerwiegendes Hindernis für den Waffenerwerb.",
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
        "Membership of an accredited hunting / shooting club is sometimes cited as evidence that the applicant has received structured training.",
      modelGerman:
        "Die Mitgliedschaft in einem anerkannten Schießclub wird mitunter als Nachweis für eine strukturierte Ausbildung angeführt.",
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
        "A referee may be asked whether they are prepared to vouch for sb before the panel delivers its ruling.",
      modelGerman:
        "Eine Referenzperson wird möglicherweise gefragt, ob sie bereit ist, für jemanden zu bürgen, bevor das Gremium entscheidet.",
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
        "Inconsistent paperwork alone can be enough to raise red flags for investigators long before charges are filed.",
      modelGerman:
        "Schon widersprüchliche Unterlagen können bei Ermittlern die Alarmglocken läuten lassen, lange bevor Anklagen erhoben werden.",
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
        "Whenever regulation tightens, compliance consulting often turns into a thriving business almost overnight.",
      modelGerman:
        "Verschärft sich die Regulierung, wird aus Compliance-Beratung nicht selten fast über Nacht ein blühendes Geschäft.",
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
        "Even in a licensed retail store, clerks must follow strict age-verification and logging procedures.",
      modelGerman:
        "Selbst in einem lizenzierten Einzelhandelsgeschäft müssen Verkäufer strikte Alterskontrollen und Protokollierungsvorschriften einhalten.",
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
        "Lawmakers still struggle with how mental health / illness disclosures should influence risk assessments without fuelling stigma.",
      modelGerman:
        "Gesetzgeber ringen weiter damit, wie Angaben zu geistiger Gesundheit bzw. Krankheit die Risikobewertung beeinflussen sollen, ohne Stigma zu verstärken.",
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
        "Statutes increasingly insist on (safe) gun storage at home, especially where minors are present.",
      modelGerman:
        "Gesetze verlangen zunehmend eine (sichere) Verwahrung von Waffen zu Hause, vor allem wenn Minderjährige im Haushalt leben.",
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
        "Trainees must demonstrate that they know how to store smth. in line with statutory guidance.",
      modelGerman:
        "Auszubildende müssen zeigen, dass sie wissen, wie man etwas gemäß den behördlichen Vorgaben verwahrt.",
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
        "On many ranges, firearms must be left in a secure locker until the instructor calls you forward.",
      modelGerman:
        "Auf vielen Schießständen müssen Waffen in einem sicheren Spind bzw. Schließfach bleiben, bis der Trainer sie abruft.",
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
        "Best practice dictates that ammunition be kept apart from the weapons themselves whenever they are not in use.",
      modelGerman:
        "Gute Praxis verlangt, Munition getrennt von den Schusswaffen aufzubewahren, solange sie nicht benutzt werden.",
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
        "Holders of licences should anticipate (un)announced inspections whose purpose is to verify ongoing compliance.",
      modelGerman:
        "Lizenzinhaber sollten mit (un)angemeldeten Durchsuchungen rechnen, deren Zweck die Überprüfung der fortlaufenden Einhaltung ist.",
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
        "Provided statutory thresholds are met, inspectors retain the authority to inspect smth. on site.",
      modelGerman:
        "Sind die gesetzlichen Voraussetzungen erfüllt, behalten sich Prüfer das Recht vor, etwas vor Ort zu durchsuchen.",
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
        "The oversight body singled out the clerk's diligence / diligent work in reconciling contradictory entries across databases.",
      modelGerman:
        "Die Aufsichtsbehörde hob die Sorgfalt bzw. das eifrige, sorgfältige Vorgehen der Sachbearbeiterin hervor, widersprüchliche Einträge abzugleichen.",
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
        "Graduates leave with a certificate—the standard way to certify smth. such as completed training hours for the authorities.",
      modelGerman:
        "Absolventen erhalten ein Zertifikat – üblicherweise die Art, etwas wie absolvierte Kursstunden gegenüber Behörden zu belegen.",
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
        "A valid permit signals that the state will permit smth. it would otherwise prohibit under the same statute.",
      modelGerman:
        "Eine gültige Erlaubnis signalisiert, dass der Staat etwas erlaubt, was er ohne diese Erlaubnis nach demselben Gesetz verbieten würde.",
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
        "Survey data suggest that registered firearms may already outnumber smth. like illicit stockpiles in certain regions.",
      modelGerman:
        "Umfragedaten legen nahe, dass registrierte Schusswaffen etwa illegale Bestände in manchen Regionen bereits zahlenmäßig übertreffen.",
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
        "Guidance documents reiterate the obligation to keep a gun safely whenever children or vulnerable adults share the household.",
      modelGerman:
        "Leitfaden betonen die Pflicht, eine Waffe sicher zu verwahren, sobald Kinder oder schutzbedürftige Erwachsene im Haushalt leben.",
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
