import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Polityka prywatności" };

export default function Privacy() {
  return <main className="privacy-page"><div className="privacy-shell">
    <Link className="privacy-back" href="/">← Martini LabSystem</Link>
    <p className="eyebrow"><span />PRYWATNOŚĆ I RODO</p><h1>Polityka prywatności</h1>
    <p className="privacy-lead">Jasna informacja o tym, jakie dane mogą być przetwarzane w serwisie Martini LabSystem i jakie prawa przysługują jego użytkownikom.</p>
    <article>
      <section><h2>1. Administrator danych</h2><p>Administratorem danych osobowych jest <strong>Mariusz Martini, prowadzący działalność gospodarczą pod firmą MARIUSZ MARTINI LABSYSTEM</strong>, ul. Dobrego Pasterza 52/28, 31-416 Kraków, NIP: 677 137 29 26, REGON: 121 164 883. Kontakt z administratorem: <a href="mailto:biuro@martinilabsystem.pl">biuro@martinilabsystem.pl</a>.</p></section>
      <section><h2>2. Zakres, cel i podstawa przetwarzania</h2><p>Dane przekazane w wiadomości e-mail — w szczególności imię i nazwisko, adres e-mail, nazwa organizacji oraz treść zapytania — są przetwarzane w celu obsługi korespondencji, udzielenia odpowiedzi, przygotowania oferty lub podjęcia działań przed zawarciem umowy. Podstawą przetwarzania jest art. 6 ust. 1 lit. b RODO, gdy kontakt dotyczy umowy, albo art. 6 ust. 1 lit. f RODO, czyli prawnie uzasadniony interes administratora polegający na prowadzeniu korespondencji i ochronie ewentualnych roszczeń.</p></section>
      <section><h2>3. Odbiorcy i okres przechowywania</h2><p>Dane mogą być powierzane dostawcom hostingu, poczty elektronicznej i obsługi technicznej wyłącznie w zakresie niezbędnym do działania serwisu i korespondencji. Dane są przechowywane przez czas potrzebny do obsługi zapytania, a następnie do upływu terminów wynikających z obowiązków prawnych lub przedawnienia ewentualnych roszczeń.</p></section>
      <section><h2>4. Twoje prawa</h2><p>Masz prawo żądać dostępu do danych, ich sprostowania, usunięcia, ograniczenia przetwarzania lub wniesienia sprzeciwu. Przysługuje Ci również prawo złożenia skargi do Prezesa Urzędu Ochrony Danych Osobowych.</p></section>
      <section id="cookies"><h2>5. Cookies i pamięć lokalna</h2><p>Serwis wykorzystuje niezbędną pamięć lokalną przeglądarki do zapamiętania wybranego języka, motywu kolorystycznego i decyzji dotyczącej prywatności. Obecnie serwis nie uruchamia narzędzi analitycznych ani marketingowych. Ustawienia prywatności można ponownie otworzyć z poziomu stopki strony.</p></section>
      <section><h2>6. Kontakt</h2><p>W sprawach dotyczących danych osobowych i realizacji praw wynikających z RODO skontaktuj się z administratorem pod adresem <a href="mailto:biuro@martinilabsystem.pl">biuro@martinilabsystem.pl</a> lub listownie: MARIUSZ MARTINI LABSYSTEM, ul. Dobrego Pasterza 52/28, 31-416 Kraków.</p></section>
      <section><h2>7. Wersja dokumentu</h2><p>Polityka obowiązuje od 17 sierpnia 2026 r. i może być aktualizowana w razie zmian sposobu działania serwisu lub obowiązujących przepisów.</p></section>
    </article>
  </div></main>;
}
