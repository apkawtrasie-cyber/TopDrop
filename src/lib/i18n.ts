export type Lang = 'de' | 'fr' | 'it' | 'en';

export interface Dict {
  badge: string; hero_sub: string; hero_desc: string;
  cta_offer: string; cta_learn: string;
  trust_history: string; trust_seo: string; trust_escrow: string;
  benefits_eyebrow: string; benefits_title: string; benefits_desc: string;
  b1_h: string; b1_d: string; b2_h: string; b2_d: string;
  b3_h: string; b3_d: string; b4_h: string; b4_d: string;
  form_eyebrow: string; form_title: string; form_desc: string;
  f_name: string; f_email: string; f_amount: string; f_message: string;
  f_submit: string; f_note: string; f_ok: string; f_err: string;
  safety_title: string; safety_desc: string;
  dev_kicker: string; dev_h: string; dev_d: string; dev_cta: string;
  footer_rights: string; footer_contact: string;
}

export const I18N: Record<Lang, Dict> = {
  de: {
    badge: 'Verfügbar zum Verkauf',
    hero_sub: 'Premium Schweizer Domain zu verkaufen',
    hero_desc: 'Die ultimative Adresse für E-Commerce, Dropshipping, Logistik und moderne SaaS-Projekte.',
    cta_offer: 'Angebot abgeben', cta_learn: 'Mehr erfahren',
    trust_history: '8+ Jahre Historie', trust_seo: 'SEO-bereit', trust_escrow: 'Sichere Escrow-Übertragung',
    benefits_eyebrow: 'Strategischer Vermögenswert', benefits_title: 'Warum TopDrop.ch?',
    benefits_desc: 'Eine kurze, einprägsame und SEO-starke Domain mit Schweizer Vertrauen.',
    b1_h: '8+ Jahre Online-Historie', b1_d: 'Etablierte Domain-Autorität, saubere Registrierungs-Historie und kontinuierliche Indexierung.',
    b2_h: 'SEO-Historie für E-Commerce', b2_d: 'Hochrelevantes Keyword-Profil für Retail, Logistik und Dropshipping.',
    b3_h: 'Schweizer .ch-Vertrauen', b3_d: 'Premium-TLD – signalisiert Qualität, Zuverlässigkeit und lokale Präsenz.',
    b4_h: 'Einprägsames Branding', b4_d: 'Kurz, phonetisch stark und intuitiv – funktioniert nahtlos in DE, FR, IT und EN.',
    form_eyebrow: 'Kontakt', form_title: 'Angebot abgeben',
    form_desc: 'Reichen Sie Ihr Angebot ein. Wir antworten in der Regel innerhalb von 24 Stunden.',
    f_name: 'Name / Firma', f_email: 'E-Mail', f_amount: 'Angebot (CHF)', f_message: 'Nachricht',
    f_submit: 'Angebot senden', f_note: 'Mit dem Absenden stimmen Sie der Kontaktaufnahme zu. Keine Drittweitergabe.',
    f_ok: 'Danke! Ihre Nachricht wurde gesendet.', f_err: 'Etwas ist schiefgelaufen. Bitte später erneut versuchen.',
    safety_title: 'Sichere Transaktion via Escrow',
    safety_desc: 'Nach Erreichen einer Einigung wird die Transaktion über eine lizenzierte Escrow-Plattform (Sedo oder Dan) abgewickelt: Käufer zahlt, Verkäufer überträgt den AuthCode – 100% sicher für beide Seiten.',
    dev_kicker: 'Cross-Sell', dev_h: 'Brauchen Sie Hilfe beim Aufbau eines Shops oder einer App?',
    dev_d: 'Als erfahrener Entwickler biete ich umfassende Unterstützung beim Launch eines modernen Business auf dieser Domain – von MVP bis Skalierung.',
    dev_cta: 'Beratung bei andrzejmich.ch', footer_rights: 'Alle Rechte vorbehalten.', footer_contact: 'Kontakt',
  },
  en: {
    badge: 'Available for acquisition', hero_sub: 'Premium Swiss domain for sale',
    hero_desc: 'The definitive address for next-gen E-commerce, Dropshipping, Logistics and modern SaaS projects.',
    cta_offer: 'Make an offer', cta_learn: 'Learn more',
    trust_history: '8+ years history', trust_seo: 'SEO-ready', trust_escrow: 'Secure escrow transfer',
    benefits_eyebrow: 'Strategic Asset', benefits_title: 'Why TopDrop.ch?',
    benefits_desc: 'A short, memorable, SEO-strong domain with Swiss trust built-in.',
    b1_h: '8+ years online history', b1_d: 'Established domain authority, clean registration history and continuous indexing.',
    b2_h: 'E-commerce SEO history', b2_d: 'Highly relevant keyword profile for retail, logistics and dropshipping.',
    b3_h: 'Swiss .ch trust', b3_d: 'Premium TLD — signals quality, reliability and local presence.',
    b4_h: 'Memorable branding', b4_d: 'Short, phonetically strong and intuitive across DE, FR, IT and EN.',
    form_eyebrow: 'Contact', form_title: 'Make an offer',
    form_desc: 'Submit your offer. We usually respond within 24 hours.',
    f_name: 'Name / Company', f_email: 'Email', f_amount: 'Offer (CHF)', f_message: 'Message',
    f_submit: 'Send offer', f_note: 'By submitting you agree to be contacted. No third-party sharing.',
    f_ok: 'Thanks! Your message has been sent.', f_err: 'Something went wrong. Please try again later.',
    safety_title: 'Secure Transaction via Escrow',
    safety_desc: 'Once a price is agreed, the transaction is handled through a licensed escrow platform (Sedo or Dan): buyer pays, seller transfers the AuthCode — fully secure for both parties.',
    dev_kicker: 'Cross-Sell', dev_h: 'Need help building a store or an app?',
    dev_d: 'As an experienced developer, I provide end-to-end support to launch a modern business on this domain — from MVP to scale.',
    dev_cta: 'Consult at andrzejmich.ch', footer_rights: 'All rights reserved.', footer_contact: 'Contact',
  },
  fr: {
    badge: "Disponible à l'acquisition", hero_sub: 'Domaine suisse premium à vendre',
    hero_desc: "L'adresse idéale pour l'e-commerce, le dropshipping, la logistique et les projets SaaS de nouvelle génération.",
    cta_offer: 'Faire une offre', cta_learn: 'En savoir plus',
    trust_history: "Plus de 8 ans d'historique", trust_seo: 'Prêt pour le SEO', trust_escrow: 'Transfert escrow sécurisé',
    benefits_eyebrow: 'Actif stratégique', benefits_title: 'Pourquoi TopDrop.ch ?',
    benefits_desc: 'Un domaine court, mémorable et fort en SEO avec la confiance suisse.',
    b1_h: 'Plus de 8 ans en ligne', b1_d: "Autorité de domaine établie, historique d'enregistrement propre et indexation continue.",
    b2_h: 'Historique SEO e-commerce', b2_d: 'Profil de mots-clés très pertinent pour le retail, la logistique et le dropshipping.',
    b3_h: 'Confiance suisse .ch', b3_d: 'TLD premium — signal de qualité, fiabilité et présence locale.',
    b4_h: 'Branding mémorable', b4_d: 'Court, phonétiquement fort et intuitif en DE, FR, IT et EN.',
    form_eyebrow: 'Contact', form_title: 'Faire une offre',
    form_desc: 'Soumettez votre offre. Nous répondons généralement sous 24 heures.',
    f_name: 'Nom / Société', f_email: 'E-mail', f_amount: 'Offre (CHF)', f_message: 'Message',
    f_submit: "Envoyer l'offre", f_note: "En soumettant, vous acceptez d'être contacté. Aucun partage tiers.",
    f_ok: 'Merci ! Votre message a été envoyé.', f_err: 'Une erreur est survenue. Veuillez réessayer plus tard.',
    safety_title: 'Transaction sécurisée via Escrow',
    safety_desc: "Une fois le prix convenu, la transaction passe par une plateforme escrow licenciée (Sedo ou Dan) : l'acheteur paie, le vendeur transfère le code AuthCode — 100% sécurisé.",
    dev_kicker: 'Service complémentaire', dev_h: "Besoin d'aide pour créer une boutique ou une application ?",
    dev_d: "En tant que développeur expérimenté, j'offre un accompagnement complet pour lancer un business moderne sur ce domaine.",
    dev_cta: 'Consultation sur andrzejmich.ch', footer_rights: 'Tous droits réservés.', footer_contact: 'Contact',
  },
  it: {
    badge: "Disponibile all'acquisto", hero_sub: 'Dominio svizzero premium in vendita',
    hero_desc: "L'indirizzo definitivo per e-commerce, dropshipping, logistica e progetti SaaS di nuova generazione.",
    cta_offer: "Fai un'offerta", cta_learn: 'Scopri di più',
    trust_history: 'Oltre 8 anni di storia', trust_seo: 'Pronto per la SEO', trust_escrow: 'Trasferimento escrow sicuro',
    benefits_eyebrow: 'Asset strategico', benefits_title: 'Perché TopDrop.ch?',
    benefits_desc: 'Un dominio breve, memorabile e forte SEO con la fiducia svizzera.',
    b1_h: 'Oltre 8 anni online', b1_d: 'Autorità di dominio consolidata, storico di registrazione pulito e indicizzazione continua.',
    b2_h: 'Storia SEO per e-commerce', b2_d: 'Profilo di keyword altamente rilevante per retail, logistica e dropshipping.',
    b3_h: 'Fiducia svizzera .ch', b3_d: 'TLD premium — segnale di qualità, affidabilità e presenza locale.',
    b4_h: 'Branding memorabile', b4_d: 'Breve, foneticamente forte e intuitivo in DE, FR, IT e EN.',
    form_eyebrow: 'Contatto', form_title: "Fai un'offerta",
    form_desc: 'Invia la tua offerta. Di solito rispondiamo entro 24 ore.',
    f_name: 'Nome / Azienda', f_email: 'E-mail', f_amount: 'Offerta (CHF)', f_message: 'Messaggio',
    f_submit: 'Invia offerta', f_note: 'Inviando accetti di essere contattato. Nessuna condivisione con terzi.',
    f_ok: 'Grazie! Il tuo messaggio è stato inviato.', f_err: 'Qualcosa è andato storto. Riprova più tardi.',
    safety_title: 'Transazione sicura tramite Escrow',
    safety_desc: "Raggiunto l'accordo, la transazione viene gestita tramite una piattaforma escrow autorizzata (Sedo o Dan): l'acquirente paga, il venditore trasferisce l'AuthCode — totale sicurezza.",
    dev_kicker: 'Servizio extra', dev_h: "Hai bisogno di aiuto per creare un negozio o un'app?",
    dev_d: 'Come sviluppatore esperto, offro supporto completo per lanciare un business moderno su questo dominio.',
    dev_cta: 'Consulenza su andrzejmich.ch', footer_rights: 'Tutti i diritti riservati.', footer_contact: 'Contatto',
  },
};

export const SUPPORTED: Lang[] = ['de', 'fr', 'it', 'en'];

export function detectLang(): Lang {
  try {
    const saved = localStorage.getItem('td_lang') as Lang;
    if (saved && SUPPORTED.includes(saved)) return saved;
    const nav = (navigator.language || 'de').toLowerCase();
    const region = nav.split('-')[1];
    const base = nav.split('-')[0] as Lang;
    if (region === 'ch') return 'de';
    if (SUPPORTED.includes(base)) return base;
  } catch { /* SSR */ }
  return 'de';
}
