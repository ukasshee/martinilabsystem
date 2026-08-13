"use client";

import { useEffect, useState } from "react";

type Lang = "pl" | "en" | "de";
type Theme = "light" | "dark";
type Accent = "cyan" | "blue" | "lime";

const copy = {
  pl: {
    nav: ["Oferta", "Podejście", "O nas", "Kontakt"], cta: "Zapytaj o rozwiązanie",
    eyebrow: "APARATURA · WYPOSAŻENIE · WSPARCIE",
    titleA: "Precyzja dla", titleB: "każdego laboratorium.",
    lead: "Od ponad 20 lat pomagamy laboratoriom naukowym, medycznym i przemysłowym dobierać urządzenia, wyposażenie i materiały, na których można polegać.",
    heroCta: "Porozmawiajmy o potrzebach", heroMore: "Poznaj ofertę", trust: "20+ lat doświadczenia", scope: "Laboratoria w całej Polsce", support: "Dobór · dostawa · wsparcie",
    offerEyebrow: "OBSZARY DZIAŁANIA", offerTitle: "Jedno źródło. Całe laboratorium.", offerLead: "Łączymy wiedzę produktową z praktycznym spojrzeniem na procesy laboratoryjne — od pojedynczego urządzenia po kompleksowe wyposażenie.",
    cards: [
      ["Aparatura laboratoryjna", "Urządzenia pomiarowe, badawcze i procesowe dobrane do metody, skali pracy i wymagań jakościowych."],
      ["Meble i infrastruktura", "Ergonomiczne stanowiska, dygestoria, stoły i zabudowy wspierające bezpieczną organizację pracy."],
      ["Drobny sprzęt", "Niezawodne wyposażenie codzienne: szkło, akcesoria, narzędzia i elementy stanowisk laboratoryjnych."],
      ["Odczynniki i materiały", "Materiały eksploatacyjne i odczynniki dopasowane do zastosowań badawczych, medycznych i przemysłowych."],
    ],
    processEyebrow: "DOBRZE DOBRANE ROZWIĄZANIE", processTitle: "Technologia jest ważna. Kontekst — jeszcze bardziej.", processLead: "Nie zaczynamy od katalogu. Najpierw poznajemy metodę, środowisko pracy i cel inwestycji. Dopiero wtedy rekomendujemy rozwiązanie.",
    steps: [["01", "Rozpoznanie", "Pytamy o proces, próbki, zakres pracy i ograniczenia."], ["02", "Rekomendacja", "Porównujemy warianty i wyjaśniamy różnice bez zbędnego żargonu."], ["03", "Wdrożenie", "Koordynujemy dostawę i pomagamy sprawnie rozpocząć pracę."]],
    aboutEyebrow: "MARTINI LABSYSTEM", aboutTitle: "Doświadczenie, które pracuje dla Twojego laboratorium.", aboutText: "Kontynuujemy ponad dwie dekady obecności na rynku laboratoryjnym. Znamy realia jednostek badawczych, diagnostycznych i zakładów przemysłowych. Dlatego stawiamy na odpowiedzialny dobór, jasną komunikację i długofalowe relacje.",
    statA: "lat tradycji", statB: "segmenty rynku", statC: "punkt kontaktu",
    contactEyebrow: "KONTAKT", contactTitle: "Zacznijmy od dobrego pytania.", contactLead: "Opisz zastosowanie, planowany proces lub urządzenie, którego szukasz. Wrócimy z konkretną odpowiedzią i następnym krokiem.", mail: "Napisz do nas", formTitle: "Zapytanie ofertowe", name: "Imię i nazwisko", email: "E-mail służbowy", company: "Firma / instytucja", message: "Czego potrzebuje laboratorium?", consent: "Akceptuję zasady przetwarzania danych opisane w polityce prywatności.", send: "Wyślij zapytanie", sent: "Dziękujemy. Formularz demonstracyjny jest gotowy do podłączenia do skrzynki firmy.",
    footer: "Rozwiązania laboratoryjne oparte na wiedzy, precyzji i ponad 20 latach doświadczenia.", rights: "Wszelkie prawa zastrzeżone.", privacy: "Polityka prywatności", cookies: "Ustawienia cookies",
    cookieEye: "TWOJA PRYWATNOŚĆ", cookieTitle: "Czy możemy używać cookies?", cookieText: "Niezbędne pliki pomagają zapamiętać język, motyw i wybór prywatności. Opcjonalne cookies uruchomimy wyłącznie za Twoją zgodą.", necessary: "Tylko niezbędne", accept: "Akceptuję wszystkie",
    menu: "Menu", palette: "Kolor strony", theme: "Zmień motyw", langLabel: "Język strony",
  },
  en: {
    nav: ["Solutions", "Approach", "About", "Contact"], cta: "Ask about a solution",
    eyebrow: "INSTRUMENTS · EQUIPMENT · SUPPORT", titleA: "Precision for", titleB: "every laboratory.",
    lead: "For over 20 years, we have helped scientific, medical and industrial laboratories select instruments, equipment and materials they can rely on.",
    heroCta: "Discuss your requirements", heroMore: "Explore our offer", trust: "20+ years of experience", scope: "Laboratories across Poland", support: "Selection · delivery · support",
    offerEyebrow: "WHAT WE DO", offerTitle: "One source. The whole laboratory.", offerLead: "We combine product expertise with a practical understanding of laboratory workflows — from a single instrument to comprehensive fit-outs.",
    cards: [["Laboratory instruments", "Measurement, research and process instruments selected for your method, workload and quality requirements."], ["Furniture & infrastructure", "Ergonomic workstations, fume cupboards, benches and cabinetry for safer laboratory workflows."], ["Small equipment", "Dependable everyday essentials: glassware, accessories, tools and workstation components."], ["Reagents & consumables", "Consumables and reagents selected for research, medical and industrial applications."]],
    processEyebrow: "THE RIGHT FIT", processTitle: "Technology matters. Context matters more.", processLead: "We do not start with a catalogue. We first understand the method, working environment and investment goal — then recommend a solution.",
    steps: [["01", "Discovery", "We ask about the process, samples, workload and constraints."], ["02", "Recommendation", "We compare options and explain the differences in plain language."], ["03", "Implementation", "We coordinate delivery and help your team get to work efficiently."]],
    aboutEyebrow: "MARTINI LABSYSTEM", aboutTitle: "Experience that works for your laboratory.", aboutText: "We carry forward more than two decades in the laboratory market. We understand research units, diagnostic facilities and industrial plants. That is why we focus on responsible selection, clear communication and long-term relationships.",
    statA: "years of heritage", statB: "market segments", statC: "point of contact",
    contactEyebrow: "CONTACT", contactTitle: "Let’s start with the right question.", contactLead: "Describe the application, planned process or instrument you are looking for. We will return with a clear answer and the next step.", mail: "Email us", formTitle: "Request a quote", name: "Full name", email: "Business email", company: "Company / institution", message: "What does your laboratory need?", consent: "I accept the data processing rules described in the privacy policy.", send: "Send enquiry", sent: "Thank you. This demo form is ready to be connected to the company inbox.",
    footer: "Laboratory solutions built on knowledge, precision and over 20 years of experience.", rights: "All rights reserved.", privacy: "Privacy policy", cookies: "Cookie settings",
    cookieEye: "YOUR PRIVACY", cookieTitle: "May we use cookies?", cookieText: "Essential storage remembers your language, theme and privacy choice. Optional cookies will only be enabled with your consent.", necessary: "Essential only", accept: "Accept all",
    menu: "Menu", palette: "Site colour", theme: "Change theme", langLabel: "Site language",
  },
  de: {
    nav: ["Angebot", "Vorgehen", "Über uns", "Kontakt"], cta: "Lösung anfragen",
    eyebrow: "GERÄTE · AUSSTATTUNG · BERATUNG", titleA: "Präzision für", titleB: "jedes Labor.",
    lead: "Seit über 20 Jahren unterstützen wir Forschungs-, Medizin- und Industrielabore bei der Auswahl zuverlässiger Geräte, Ausstattung und Materialien.",
    heroCta: "Anforderungen besprechen", heroMore: "Angebot entdecken", trust: "20+ Jahre Erfahrung", scope: "Labore in ganz Polen", support: "Auswahl · Lieferung · Support",
    offerEyebrow: "UNSERE BEREICHE", offerTitle: "Eine Quelle. Das ganze Labor.", offerLead: "Wir verbinden Produktwissen mit einem praktischen Verständnis für Laborprozesse — vom Einzelgerät bis zur kompletten Ausstattung.",
    cards: [["Laborgeräte", "Mess-, Forschungs- und Prozessgeräte passend zu Methode, Arbeitsumfang und Qualitätsanforderungen."], ["Möbel & Infrastruktur", "Ergonomische Arbeitsplätze, Abzüge, Tische und Einbauten für sichere Laborabläufe."], ["Kleingeräte", "Zuverlässige Ausstattung für jeden Tag: Glaswaren, Zubehör, Werkzeuge und Arbeitsplatzkomponenten."], ["Reagenzien & Verbrauchsmaterial", "Materialien und Reagenzien für Forschung, Medizin und industrielle Anwendungen."]],
    processEyebrow: "DIE PASSENDE LÖSUNG", processTitle: "Technologie ist wichtig. Der Kontext noch mehr.", processLead: "Wir beginnen nicht mit dem Katalog. Zuerst verstehen wir Methode, Arbeitsumgebung und Investitionsziel — dann empfehlen wir.",
    steps: [["01", "Bedarfsanalyse", "Wir fragen nach Prozess, Proben, Arbeitsumfang und Grenzen."], ["02", "Empfehlung", "Wir vergleichen Varianten und erklären Unterschiede verständlich."], ["03", "Umsetzung", "Wir koordinieren die Lieferung und unterstützen einen reibungslosen Start."]],
    aboutEyebrow: "MARTINI LABSYSTEM", aboutTitle: "Erfahrung, die für Ihr Labor arbeitet.", aboutText: "Wir setzen mehr als zwei Jahrzehnte Erfahrung im Labormarkt fort. Wir kennen Forschung, Diagnostik und Industrie. Deshalb stehen verantwortungsvolle Auswahl, klare Kommunikation und langfristige Beziehungen im Mittelpunkt.",
    statA: "Jahre Tradition", statB: "Marktsegmente", statC: "Ansprechpartner",
    contactEyebrow: "KONTAKT", contactTitle: "Beginnen wir mit der richtigen Frage.", contactLead: "Beschreiben Sie Anwendung, Prozess oder das gesuchte Gerät. Wir melden uns mit einer konkreten Antwort und dem nächsten Schritt.", mail: "E-Mail senden", formTitle: "Angebot anfragen", name: "Vor- und Nachname", email: "Geschäftliche E-Mail", company: "Firma / Institution", message: "Was benötigt Ihr Labor?", consent: "Ich akzeptiere die in der Datenschutzerklärung beschriebenen Regeln.", send: "Anfrage senden", sent: "Vielen Dank. Dieses Demoformular kann an das Firmenpostfach angebunden werden.",
    footer: "Laborlösungen auf Basis von Wissen, Präzision und über 20 Jahren Erfahrung.", rights: "Alle Rechte vorbehalten.", privacy: "Datenschutzerklärung", cookies: "Cookie-Einstellungen",
    cookieEye: "IHRE PRIVATSPHÄRE", cookieTitle: "Dürfen wir Cookies verwenden?", cookieText: "Notwendiger Speicher merkt sich Sprache, Design und Datenschutzwahl. Optionale Cookies nutzen wir nur mit Ihrer Zustimmung.", necessary: "Nur notwendige", accept: "Alle akzeptieren",
    menu: "Menü", palette: "Seitenfarbe", theme: "Design wechseln", langLabel: "Seitensprache",
  },
} as const;

const accents: Accent[] = ["cyan", "blue", "lime"];

export function Site() {
  const [lang, setLang] = useState<Lang>("pl");
  const [theme, setTheme] = useState<Theme>("light");
  const [accent, setAccent] = useState<Accent>("cyan");
  const [menu, setMenu] = useState(false);
  const [cookies, setCookies] = useState(false);
  const [sent, setSent] = useState(false);
  const t = copy[lang];

  useEffect(() => {
    const savedLang = localStorage.getItem("mls-lang") as Lang | null;
    const savedTheme = localStorage.getItem("mls-theme") as Theme | null;
    const savedAccent = localStorage.getItem("mls-accent") as Accent | null;
    if (savedLang && copy[savedLang]) setLang(savedLang);
    if (savedTheme === "light" || savedTheme === "dark") setTheme(savedTheme);
    if (savedAccent && accents.includes(savedAccent)) setAccent(savedAccent);
    setCookies(!localStorage.getItem("mls-cookie-consent"));
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dataset.theme = theme;
    document.documentElement.dataset.accent = accent;
    localStorage.setItem("mls-lang", lang);
    localStorage.setItem("mls-theme", theme);
    localStorage.setItem("mls-accent", accent);
  }, [lang, theme, accent]);

  const chooseCookies = (value: "essential" | "all") => {
    localStorage.setItem("mls-cookie-consent", value);
    setCookies(false);
  };

  return (
    <>
      <a className="skip" href="#content">Skip to content</a>
      <header className="header">
        <nav className="nav-island" aria-label="Main navigation">
          <a className="logo" href="#start" onClick={() => setMenu(false)} aria-label="Martini LabSystem home">
            <span className="logo-mark" aria-hidden="true"><i /><i /><i /></span>
            <span><strong>MARTINI</strong><small>LABSYSTEM</small></span>
          </a>
          <div className={`nav-links ${menu ? "open" : ""}`}>
            {t.nav.map((label, i) => <a key={label} href={["#offer", "#approach", "#about", "#contact"][i]} onClick={() => setMenu(false)}>{label}</a>)}
          </div>
          <div className="nav-tools">
            <div className="accent-picker" aria-label={t.palette}>{accents.map((a) => <button key={a} className={accent === a ? "active" : ""} data-color={a} onClick={() => setAccent(a)} aria-label={`${t.palette}: ${a}`} />)}</div>
            <button className="theme-button" onClick={() => setTheme(theme === "light" ? "dark" : "light")} aria-label={t.theme}>{theme === "light" ? "◒" : "☼"}</button>
            <div className="lang-switch" aria-label={t.langLabel}>{(["pl", "en", "de"] as Lang[]).map((l) => <button key={l} className={lang === l ? "active" : ""} onClick={() => setLang(l)}>{l.toUpperCase()}</button>)}</div>
            <a className="nav-cta" href="#contact">{t.cta}</a>
          </div>
          <button className="menu-button" aria-expanded={menu} aria-label={t.menu} onClick={() => setMenu(!menu)}><span /><span /></button>
        </nav>
      </header>

      <main id="content">
        <section className="hero" id="start">
          <div className="hero-grid-bg" aria-hidden="true" />
          <div className="orb orb-one" aria-hidden="true" /><div className="orb orb-two" aria-hidden="true" />
          <div className="container hero-layout">
            <div className="hero-copy">
              <p className="eyebrow"><span />{t.eyebrow}</p>
              <h1>{t.titleA}<br /><em>{t.titleB}</em></h1>
              <p className="hero-lead">{t.lead}</p>
              <div className="hero-actions"><a className="button" href="#contact">{t.heroCta}<b>↗</b></a><a className="text-link" href="#offer">{t.heroMore}<span>↓</span></a></div>
            </div>
            <div className="lab-visual" aria-label="Abstract laboratory glassware illustration">
              <div className="visual-label"><span>MLS · 20</span><small>LAB SOLUTIONS</small></div>
              <div className="flask flask-one"><i /><b /></div><div className="flask flask-two"><i /><b /></div><div className="tube-rack"><i /><i /><i /><i /></div>
              <div className="measure-line m1">20</div><div className="measure-line m2">40</div><div className="measure-line m3">60</div>
            </div>
          </div>
          <div className="container trust-bar"><span><b>20+</b>{t.trust}</span><span><b>PL</b>{t.scope}</span><span><b>360°</b>{t.support}</span></div>
        </section>

        <section className="section offer" id="offer"><div className="container">
          <div className="section-heading"><div><p className="eyebrow"><span />{t.offerEyebrow}</p><h2>{t.offerTitle}</h2></div><p>{t.offerLead}</p></div>
          <div className="offer-grid">{t.cards.map((card, i) => <article className="offer-card" key={card[0]}><div className="card-top"><span>0{i + 1}</span><b>↗</b></div><div className={`card-icon icon-${i}`} aria-hidden="true"><i /><i /><i /></div><h3>{card[0]}</h3><p>{card[1]}</p></article>)}</div>
        </div></section>

        <section className="section approach" id="approach"><div className="container approach-grid">
          <div className="sticky-copy"><p className="eyebrow light"><span />{t.processEyebrow}</p><h2>{t.processTitle}</h2><p>{t.processLead}</p><a className="button button-white" href="#contact">{t.cta}<b>↗</b></a></div>
          <ol className="steps">{t.steps.map((step) => <li key={step[0]}><span>{step[0]}</span><div><h3>{step[1]}</h3><p>{step[2]}</p></div></li>)}</ol>
        </div></section>

        <section className="section about" id="about"><div className="container about-grid">
          <div><p className="eyebrow"><span />{t.aboutEyebrow}</p><h2>{t.aboutTitle}</h2></div>
          <div className="about-copy"><p>{t.aboutText}</p><div className="stats"><span><b>20+</b>{t.statA}</span><span><b>3</b>{t.statB}</span><span><b>1</b>{t.statC}</span></div></div>
        </div></section>

        <section className="section contact" id="contact"><div className="container contact-shell">
          <div className="contact-copy"><p className="eyebrow light"><span />{t.contactEyebrow}</p><h2>{t.contactTitle}</h2><p>{t.contactLead}</p><a className="mail-link" href="mailto:kontakt@martinilabsystem.pl"><small>{t.mail}</small>kontakt@martinilabsystem.pl <b>↗</b></a></div>
          <form className="contact-form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <h3>{t.formTitle}</h3><label>{t.name}<input name="name" autoComplete="name" required /></label><label>{t.email}<input type="email" name="email" autoComplete="email" required /></label><label>{t.company}<input name="company" autoComplete="organization" /></label><label>{t.message}<textarea name="message" rows={4} required /></label>
            <label className="check"><input type="checkbox" required /><span>{t.consent} <a href="/privacy">{t.privacy}</a></span></label><button className="button button-white" type="submit">{t.send}<b>↗</b></button>{sent && <p className="form-status" role="status">{t.sent}</p>}
          </form>
        </div></section>
      </main>

      <footer><div className="container footer-main"><a className="logo footer-logo" href="#start"><span className="logo-mark"><i /><i /><i /></span><span><strong>MARTINI</strong><small>LABSYSTEM</small></span></a><p>{t.footer}</p><div className="footer-nav">{t.nav.map((label, i) => <a key={label} href={["#offer", "#approach", "#about", "#contact"][i]}>{label}</a>)}</div></div><div className="container footer-bottom"><p>© {new Date().getFullYear()} Martini LabSystem. {t.rights}</p><div><a href="/privacy">{t.privacy}</a><button onClick={() => setCookies(true)}>{t.cookies}</button></div></div></footer>

      {cookies && <section className="cookie-panel" role="dialog" aria-modal="true" aria-labelledby="cookie-title"><div><p className="eyebrow"><span />{t.cookieEye}</p><h2 id="cookie-title">{t.cookieTitle}</h2><p>{t.cookieText} <a href="/privacy#cookies">{t.privacy}</a></p></div><div className="cookie-actions"><button onClick={() => chooseCookies("essential")}>{t.necessary}</button><button className="button" onClick={() => chooseCookies("all")}>{t.accept}</button></div></section>}
    </>
  );
}
