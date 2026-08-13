"use client";

import { useEffect, useState } from "react";

type Lang = "pl" | "en" | "de";
type Theme = "light" | "dark";

const copy = {
  pl: {
    nav: ["O firmie", "Zakres", "Kontakt"], cta: "Napisz do nas",
    eyebrow: "TECHNOLOGIA DLA LABORATORIÓW",
    title: "20 lat doświadczenia. Jedno dobre rozwiązanie.",
    lead: "Martini LabSystem dostarcza aparaturę i wyposażenie dla laboratoriów naukowych, medycznych i przemysłowych. Łączymy znajomość rynku z uważnym podejściem do potrzeb każdego zespołu.",
    primary: "Skontaktuj się", secondary: "Poznaj nas",
    years: "lat na rynku", field: "branża laboratoryjna", reach: "obsługa w całej Polsce",
    aboutEye: "MARTINI LABSYSTEM", aboutTitle: "Laboratorium zaczyna się od właściwego wyboru.",
    aboutText: "Pomagamy dobrać urządzenia i wyposażenie do rzeczywistych warunków pracy — od codziennych zadań po specjalistyczne procesy badawcze. Stawiamy na rzetelną informację, sprawną dostawę i partnerski kontakt.",
    scope: ["Aparatura laboratoryjna", "Meble i wyposażenie", "Drobny sprzęt", "Odczynniki i materiały"],
    contactEye: "KONTAKT", contactTitle: "Porozmawiajmy o Twoim laboratorium.", contactText: "Opisz krótko, czego szukasz. Odpowiemy konkretnie i zaproponujemy następny krok.", mailLabel: "E-mail", locationLabel: "Siedziba", location: "Kraków · Polska",
    footer: "Aparatura i wyposażenie laboratoryjne", privacy: "Polityka prywatności", cookies: "Cookies", rights: "Wszelkie prawa zastrzeżone.",
    cookieEye: "PRYWATNOŚĆ", cookieTitle: "Czy możemy używać cookies?", cookieText: "Niezbędna pamięć zapisuje język, motyw i wybór prywatności. Pozostałe cookies uruchomimy tylko za zgodą.", essential: "Tylko niezbędne", accept: "Akceptuję wszystkie", theme: "Zmień motyw", language: "Język strony", menu: "Menu",
  },
  en: {
    nav: ["About", "Scope", "Contact"], cta: "Email us",
    eyebrow: "TECHNOLOGY FOR LABORATORIES",
    title: "20 years of experience. One right solution.",
    lead: "Martini LabSystem supplies instruments and equipment to scientific, medical and industrial laboratories. We combine market knowledge with careful attention to every team’s needs.",
    primary: "Contact us", secondary: "Meet the company",
    years: "years in the market", field: "laboratory sector", reach: "service across Poland",
    aboutEye: "MARTINI LABSYSTEM", aboutTitle: "A good laboratory starts with the right choice.",
    aboutText: "We help select instruments and equipment for real working conditions — from everyday tasks to specialist research processes. We value reliable information, efficient delivery and direct partnership.",
    scope: ["Laboratory instruments", "Furniture and equipment", "Small equipment", "Reagents and consumables"],
    contactEye: "CONTACT", contactTitle: "Let’s talk about your laboratory.", contactText: "Tell us briefly what you are looking for. We will respond clearly and suggest the next step.", mailLabel: "Email", locationLabel: "Based in", location: "Kraków · Poland",
    footer: "Laboratory instruments and equipment", privacy: "Privacy policy", cookies: "Cookies", rights: "All rights reserved.",
    cookieEye: "PRIVACY", cookieTitle: "May we use cookies?", cookieText: "Essential storage remembers your language, theme and privacy choice. Other cookies will only be enabled with consent.", essential: "Essential only", accept: "Accept all", theme: "Change theme", language: "Site language", menu: "Menu",
  },
  de: {
    nav: ["Über uns", "Leistungen", "Kontakt"], cta: "E-Mail senden",
    eyebrow: "TECHNOLOGIE FÜR LABORE",
    title: "20 Jahre Erfahrung. Eine passende Lösung.",
    lead: "Martini LabSystem liefert Geräte und Ausstattung für Forschungs-, Medizin- und Industrielabore. Wir verbinden Marktkenntnis mit einem genauen Blick auf die Anforderungen jedes Teams.",
    primary: "Kontakt aufnehmen", secondary: "Unternehmen kennenlernen",
    years: "Jahre am Markt", field: "Laborbranche", reach: "Betreuung in ganz Polen",
    aboutEye: "MARTINI LABSYSTEM", aboutTitle: "Ein gutes Labor beginnt mit der richtigen Wahl.",
    aboutText: "Wir helfen bei der Auswahl von Geräten und Ausstattung für reale Arbeitsbedingungen — von täglichen Aufgaben bis zu spezialisierten Forschungsprozessen. Verlässliche Information, effiziente Lieferung und partnerschaftlicher Kontakt stehen im Mittelpunkt.",
    scope: ["Laborgeräte", "Möbel und Ausstattung", "Kleingeräte", "Reagenzien und Verbrauchsmaterial"],
    contactEye: "KONTAKT", contactTitle: "Sprechen wir über Ihr Labor.", contactText: "Beschreiben Sie kurz, wonach Sie suchen. Wir antworten konkret und schlagen den nächsten Schritt vor.", mailLabel: "E-Mail", locationLabel: "Standort", location: "Krakau · Polen",
    footer: "Laborgeräte und Laborausstattung", privacy: "Datenschutzerklärung", cookies: "Cookies", rights: "Alle Rechte vorbehalten.",
    cookieEye: "DATENSCHUTZ", cookieTitle: "Dürfen wir Cookies verwenden?", cookieText: "Notwendiger Speicher merkt sich Sprache, Design und Datenschutzwahl. Weitere Cookies nutzen wir nur mit Zustimmung.", essential: "Nur notwendige", accept: "Alle akzeptieren", theme: "Design wechseln", language: "Seitensprache", menu: "Menü",
  },
} as const;

function Brand() {
  return <span className="brand"><img src="/favicon.svg" alt="" width="40" height="40" /><span><strong>MARTINI</strong><small>LABSYSTEM</small></span></span>;
}

export function Site() {
  const [lang, setLang] = useState<Lang>("pl");
  const [theme, setTheme] = useState<Theme>("light");
  const [menu, setMenu] = useState(false);
  const [cookies, setCookies] = useState(false);
  const t = copy[lang];

  useEffect(() => {
    const savedLang = localStorage.getItem("mls-lang") as Lang | null;
    const savedTheme = localStorage.getItem("mls-theme") as Theme | null;
    if (savedLang && copy[savedLang]) setLang(savedLang);
    if (savedTheme === "light" || savedTheme === "dark") setTheme(savedTheme);
    setCookies(!localStorage.getItem("mls-cookie-consent"));
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("mls-lang", lang);
    localStorage.setItem("mls-theme", theme);
  }, [lang, theme]);

  const consent = (choice: "essential" | "all") => {
    localStorage.setItem("mls-cookie-consent", choice);
    setCookies(false);
  };

  return <>
    <a className="skip" href="#main">Skip to content</a>
    <header className="header"><nav className="nav-island" aria-label="Main navigation">
      <a href="#start" aria-label="Martini LabSystem"><Brand /></a>
      <div className={`nav-links ${menu ? "open" : ""}`}>{t.nav.map((label, i) => <a key={label} href={["#about", "#scope", "#contact"][i]} onClick={() => setMenu(false)}>{label}</a>)}</div>
      <div className="nav-tools">
        <button className="theme-switch" type="button" onClick={() => setTheme(theme === "light" ? "dark" : "light")} aria-label={t.theme}><span /><i>{theme === "light" ? "○" : "●"}</i></button>
        <div className="lang-switch" aria-label={t.language}>{(["pl", "en", "de"] as Lang[]).map(code => <button key={code} className={lang === code ? "active" : ""} onClick={() => setLang(code)}>{code.toUpperCase()}</button>)}</div>
        <a className="nav-cta" href="#contact">{t.cta}</a>
      </div>
      <button className="menu-button" aria-expanded={menu} aria-label={t.menu} onClick={() => setMenu(!menu)}><span /><span /></button>
    </nav></header>

    <main id="main">
      <section className="hero" id="start"><div className="lab-grid" aria-hidden="true" /><div className="container hero-inner">
        <div className="hero-copy"><p className="eyebrow">{t.eyebrow}</p><h1>{t.title}</h1><p className="lead">{t.lead}</p><div className="hero-actions"><a className="button" href="#contact">{t.primary}<span>↗</span></a><a className="quiet-link" href="#about">{t.secondary}<span>↓</span></a></div></div>
        <div className="hero-emblem" aria-hidden="true"><img src="/favicon.svg" alt="" /><span>20</span><small>YEARS<br />OF EXPERIENCE</small></div>
      </div><div className="container facts"><div><strong>20+</strong><span>{t.years}</span></div><div><strong>LAB</strong><span>{t.field}</span></div><div><strong>PL</strong><span>{t.reach}</span></div></div></section>

      <section className="about" id="about"><div className="container about-grid">
        <div><p className="eyebrow">{t.aboutEye}</p><h2>{t.aboutTitle}</h2></div>
        <div><p className="about-text">{t.aboutText}</p><div className="scope-list" id="scope">{t.scope.map((item, i) => <div key={item}><span>0{i + 1}</span><strong>{item}</strong></div>)}</div></div>
      </div></section>

      <section className="contact" id="contact"><div className="container contact-card">
        <div><p className="eyebrow">{t.contactEye}</p><h2>{t.contactTitle}</h2><p>{t.contactText}</p></div>
        <div className="contact-data"><a href="mailto:kontakt@martinilabsystem.pl"><small>{t.mailLabel}</small><strong>kontakt@martinilabsystem.pl</strong><span>↗</span></a><div><small>{t.locationLabel}</small><strong>{t.location}</strong></div></div>
      </div></section>
    </main>

    <footer><div className="container footer-top"><a href="#start"><Brand /></a><p>{t.footer}</p><div><a href="/privacy">{t.privacy}</a><button onClick={() => setCookies(true)}>{t.cookies}</button></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Martini LabSystem</span><span>{t.rights}</span></div></footer>

    {cookies && <section className="cookie-panel" role="dialog" aria-modal="true" aria-labelledby="cookie-title"><div><p className="eyebrow">{t.cookieEye}</p><h2 id="cookie-title">{t.cookieTitle}</h2><p>{t.cookieText} <a href="/privacy#cookies">{t.privacy}</a></p></div><div className="cookie-actions"><button onClick={() => consent("essential")}>{t.essential}</button><button className="button" onClick={() => consent("all")}>{t.accept}</button></div></section>}
  </>;
}
