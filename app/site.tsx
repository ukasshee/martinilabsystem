"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Lang = "pl" | "en" | "de";
type Theme = "light" | "dark";

const languageNames: Record<Lang, string> = { pl: "Polski", en: "English", de: "Deutsch" };

const copy = {
  pl: { line: "20 lat doświadczenia.", sub: "Technologia dla laboratoriów", eyebrow: "Precyzja · doświadczenie · zaufanie", product: "Technologia laboratoryjna", services: ["Aparatura laboratoryjna", "Meble laboratoryjne", "Sprzęt i akcesoria", "Odczynniki"], contact: "Kontakt", privacy: "Polityka prywatności", cookies: "Cookies", rights: "Wszelkie prawa zastrzeżone.", cookieTitle: "Czy możemy używać cookies?", cookieText: "Niezbędna pamięć zapisuje język, motyw i wybór prywatności.", essential: "Tylko niezbędne", accept: "Akceptuję", theme: "Zmień motyw", language: "Język strony" },
  en: { line: "20 years of experience.", sub: "Technology for laboratories", eyebrow: "Precision · experience · trust", product: "Laboratory technology", services: ["Laboratory instruments", "Laboratory furniture", "Equipment & accessories", "Reagents"], contact: "Contact", privacy: "Privacy policy", cookies: "Cookies", rights: "All rights reserved.", cookieTitle: "May we use cookies?", cookieText: "Essential storage remembers your language, theme and privacy choice.", essential: "Essential only", accept: "Accept", theme: "Change theme", language: "Site language" },
  de: { line: "20 Jahre Erfahrung.", sub: "Technologie für Labore", eyebrow: "Präzision · Erfahrung · Vertrauen", product: "Labortechnologie", services: ["Laborgeräte", "Labormöbel", "Geräte & Zubehör", "Reagenzien"], contact: "Kontakt", privacy: "Datenschutz", cookies: "Cookies", rights: "Alle Rechte vorbehalten.", cookieTitle: "Dürfen wir Cookies verwenden?", cookieText: "Notwendiger Speicher merkt sich Sprache, Design und Datenschutzwahl.", essential: "Nur notwendige", accept: "Akzeptieren", theme: "Design wechseln", language: "Seitensprache" },
} as const;

function Brand() {
  return <span className="brand"><Image src="/favicon.svg" alt="" width="40" height="40" priority /><span><strong>MARTINI</strong><small>LABSYSTEM</small></span></span>;
}

function Flag({ lang }: { lang: Lang }) {
  if (lang === "pl") return <svg className="flag-icon" viewBox="0 0 24 16" aria-hidden="true"><rect width="24" height="8" fill="#fff" /><rect y="8" width="24" height="8" fill="#dc143c" /></svg>;
  if (lang === "de") return <svg className="flag-icon" viewBox="0 0 24 16" aria-hidden="true"><rect width="24" height="5.34" fill="#171717" /><rect y="5.33" width="24" height="5.34" fill="#d71920" /><rect y="10.66" width="24" height="5.34" fill="#ffce00" /></svg>;
  return <svg className="flag-icon" viewBox="0 0 24 16" aria-hidden="true"><rect width="24" height="16" fill="#163b72" /><path d="M0 0 24 16M24 0 0 16" stroke="#fff" strokeWidth="4" /><path d="M0 0 24 16M24 0 0 16" stroke="#c8102e" strokeWidth="1.6" /><path d="M12 0v16M0 8h24" stroke="#fff" strokeWidth="5" /><path d="M12 0v16M0 8h24" stroke="#c8102e" strokeWidth="2.6" /></svg>;
}

export function Site() {
  const [lang, setLang] = useState<Lang>("pl");
  const [theme, setTheme] = useState<Theme>("light");
  const [cookies, setCookies] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const t = copy[lang];

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const savedLang = localStorage.getItem("mls-lang") as Lang | null;
      const savedTheme = localStorage.getItem("mls-theme") as Theme | null;
      if (savedLang && copy[savedLang]) setLang(savedLang);
      if (savedTheme === "light" || savedTheme === "dark") setTheme(savedTheme);
      setCookies(!localStorage.getItem("mls-cookie-consent"));
    });
    return () => cancelAnimationFrame(frame);
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
      <Link href="/" aria-label="Martini LabSystem"><Brand /></Link>
      <div className="nav-tools">
        <button className="nav-control theme-switch icon-control" type="button" onClick={() => setTheme(theme === "light" ? "dark" : "light")} aria-label={t.theme} title={t.theme}><svg className="theme-icon" aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5" /><path d="M12 3.5a8.5 8.5 0 0 1 0 17Z" /></svg></button>
        <div className="language-menu" onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setLanguageOpen(false); }}>
          <button className="nav-control language-control icon-control" type="button" onClick={() => setLanguageOpen(open => !open)} aria-label={`${t.language}: ${languageNames[lang]}`} aria-expanded={languageOpen} title={languageNames[lang]}><Flag lang={lang} /></button>
          {languageOpen && <div className="language-options">{(["pl", "en", "de"] as Lang[]).filter(code => code !== lang).map(code => <button key={code} type="button" onClick={() => { setLang(code); setLanguageOpen(false); }} aria-label={languageNames[code]} title={languageNames[code]}><Flag lang={code} /></button>)}</div>}
        </div>
        <a className="nav-control nav-cta icon-control" href="mailto:biuro@martinilabsystem.pl" aria-label={t.contact} title={t.contact}><svg className="mail-icon" aria-hidden="true" viewBox="0 0 24 24"><rect x="3.25" y="5.5" width="17.5" height="13" rx="2.75" /><path d="m4.5 7.25 7.5 5.5 7.5-5.5" /></svg></a>
      </div>
    </nav></header>

    <main className="stage">
      <section className="canvas" aria-labelledby="hero-title">
        <div className="canvas-grid" aria-hidden="true" />
        <div className="hero-media">
          <Image className="centrifuge-image" src="/centrifuge-detail.png" alt="Detal wirówki laboratoryjnej" width="1536" height="1024" priority />
          <span className="hero-orbit" aria-hidden="true" />
          <div className="hero-media-label"><span>01</span><strong>{t.product}</strong><i>LABSYSTEM</i></div>
        </div>
        <div className="canvas-copy open-hero-copy">
          <Brand />
          <span className="hero-eyebrow">{t.eyebrow}</span>
          <span className="blue-rule" />
          <h1 id="hero-title">{t.line}</h1>
          <p>{t.sub}</p>
          <ul className="activity-lines">{t.services.map(service => <li key={service}>{service}</li>)}</ul>
          <a className="hero-mail" href="mailto:biuro@martinilabsystem.pl">biuro@martinilabsystem.pl <span>↗</span></a>
          <address className="company-details">
            <strong>Mariusz Martini · LabSystem</strong>
            <span>ul. Dobrego Pasterza 52/28 · 31-416 Kraków</span>
            <span>NIP 677 137 29 26 · REGON 121 164 883</span>
          </address>
        </div>
      </section>
    </main>

    <footer><div className="footer-inner"><span>© {new Date().getFullYear()} Martini LabSystem · {t.rights}</span><div><a href="/privacy">{t.privacy}</a><button onClick={() => setCookies(true)}>{t.cookies}</button></div></div></footer>

    {cookies && <section className="cookie-panel" role="dialog" aria-modal="true" aria-labelledby="cookie-title"><div><h2 id="cookie-title">{t.cookieTitle}</h2><p>{t.cookieText} <a href="/privacy#cookies">{t.privacy}</a></p></div><div className="cookie-actions"><button onClick={() => consent("essential")}>{t.essential}</button><button className="button" onClick={() => consent("all")}>{t.accept}</button></div></section>}
  </div>;
}
