"use client";

import { useEffect, useState } from "react";

type Lang = "pl" | "en" | "de";
type Theme = "light" | "dark";

const copy = {
  pl: { line: "20 lat doświadczenia.", sub: "Technologia dla laboratoriów", contact: "Kontakt", privacy: "Polityka prywatności", cookies: "Cookies", rights: "Wszelkie prawa zastrzeżone.", cookieTitle: "Czy możemy używać cookies?", cookieText: "Niezbędna pamięć zapisuje język, motyw i wybór prywatności.", essential: "Tylko niezbędne", accept: "Akceptuję", theme: "Zmień motyw", language: "Język strony" },
  en: { line: "20 years of experience.", sub: "Technology for laboratories", contact: "Contact", privacy: "Privacy policy", cookies: "Cookies", rights: "All rights reserved.", cookieTitle: "May we use cookies?", cookieText: "Essential storage remembers your language, theme and privacy choice.", essential: "Essential only", accept: "Accept", theme: "Change theme", language: "Site language" },
  de: { line: "20 Jahre Erfahrung.", sub: "Technologie für Labore", contact: "Kontakt", privacy: "Datenschutz", cookies: "Cookies", rights: "Alle Rechte vorbehalten.", cookieTitle: "Dürfen wir Cookies verwenden?", cookieText: "Notwendiger Speicher merkt sich Sprache, Design und Datenschutzwahl.", essential: "Nur notwendige", accept: "Akzeptieren", theme: "Design wechseln", language: "Seitensprache" },
} as const;

function Brand() {
  return <span className="brand"><img src="/favicon.svg" alt="" width="40" height="40" /><span><strong>MARTINI</strong><small>LABSYSTEM</small></span></span>;
}

export function Site() {
  const [lang, setLang] = useState<Lang>("pl");
  const [theme, setTheme] = useState<Theme>("light");
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

  return <div className="site-shell">
    <header className="header"><nav className="nav-island" aria-label="Main navigation">
      <a href="/" aria-label="Martini LabSystem"><Brand /></a>
      <div className="nav-tools">
        <button className="theme-switch" type="button" onClick={() => setTheme(theme === "light" ? "dark" : "light")} aria-label={t.theme}><span /><i>{theme === "light" ? "○" : "●"}</i></button>
        <div className="lang-switch" aria-label={t.language}>{(["pl", "en", "de"] as Lang[]).map(code => <button key={code} className={lang === code ? "active" : ""} onClick={() => setLang(code)}>{code.toUpperCase()}</button>)}</div>
        <a className="nav-cta" href="mailto:kontakt@martinilabsystem.pl">{t.contact}</a>
      </div>
    </nav></header>

    <main className="stage">
      <section className="canvas" aria-labelledby="hero-title">
        <div className="canvas-grid" aria-hidden="true" />
        <div className="canvas-copy"><Brand /><span className="blue-rule" /><h1 id="hero-title">{t.line}</h1><p>{t.sub}</p><a href="mailto:kontakt@martinilabsystem.pl">kontakt@martinilabsystem.pl <span>↗</span></a></div>
        <div className="glass-object" aria-hidden="true"><span /><span /><span /></div>
      </section>
    </main>

    <footer><div className="footer-inner"><span>© {new Date().getFullYear()} Martini LabSystem · {t.rights}</span><div><a href="/privacy">{t.privacy}</a><button onClick={() => setCookies(true)}>{t.cookies}</button></div></div></footer>

    {cookies && <section className="cookie-panel" role="dialog" aria-modal="true" aria-labelledby="cookie-title"><div><h2 id="cookie-title">{t.cookieTitle}</h2><p>{t.cookieText} <a href="/privacy#cookies">{t.privacy}</a></p></div><div className="cookie-actions"><button onClick={() => consent("essential")}>{t.essential}</button><button className="button" onClick={() => consent("all")}>{t.accept}</button></div></section>}
  </div>;
}
