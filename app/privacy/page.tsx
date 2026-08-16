import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Polityka prywatności" };

export default function Privacy() {
  return <main className="privacy-page"><div className="privacy-shell">
    <Link className="privacy-back" href="/">← Martini LabSystem</Link>
    <p className="eyebrow"><span />PRYWATNOŚĆ I RODO</p><h1>Polityka prywatności</h1>
    <p className="privacy-lead">Jasna informacja o tym, jakie dane mogą być przetwarzane w serwisie Martini LabSystem i jakie prawa przysługują jego użytkownikom.</p>
    <article>
      <section><h2>1. Administrator danych</h2><p>Administratorem danych osobowych jest Martini LabSystem. Przed publikacją serwisu należy uzupełnić w tym miejscu pełną nazwę prawną, adres siedziby, NIP oraz właściwy adres kontaktowy administratora.</p></section>
      <section><h2>2. Zakres i cel przetwarzania</h2><p>Dane przesłane przez formularz kontaktowy — takie jak imię i nazwisko, adres e-mail, nazwa organizacji i treść zapytania — będą przetwarzane w celu udzielenia odpowiedzi, przygotowania oferty lub podjęcia działań zmierzających do zawarcia umowy. Podstawą może być art. 6 ust. 1 lit. b lub f RODO, zależnie od charakteru kontaktu.</p></section>
      <section><h2>3. Odbiorcy i okres przechowywania</h2><p>Dane mogą być udostępniane wyłącznie podmiotom wspierającym obsługę serwisu i korespondencji, na podstawie odpowiednich umów. Dane będą przechowywane przez czas potrzebny do obsługi zapytania, a następnie przez okres wynikający z obowiązków prawnych lub uzasadnionej ochrony roszczeń.</p></section>
      <section><h2>4. Twoje prawa</h2><p>Masz prawo żądać dostępu do danych, ich sprostowania, usunięcia, ograniczenia przetwarzania lub wniesienia sprzeciwu. Przysługuje Ci również prawo złożenia skargi do Prezesa Urzędu Ochrony Danych Osobowych.</p></section>
      <section id="cookies"><h2>5. Cookies i pamięć lokalna</h2><p>Serwis wykorzystuje niezbędną pamięć lokalną do zapamiętania wybranego języka, wariantu kolorystycznego, motywu i decyzji dotyczącej prywatności. Opcjonalne narzędzia analityczne lub marketingowe nie powinny być uruchamiane przed uzyskaniem zgody użytkownika. Zgodę można w każdej chwili ponownie otworzyć z poziomu stopki strony.</p></section>
      <section><h2>6. Kontakt</h2><p>W sprawach związanych z prywatnością napisz na <a href="mailto:kontakt@martinilabsystem.pl">kontakt@martinilabsystem.pl</a>. Przed publikacją należy potwierdzić poprawność tego adresu oraz uzupełnić dane administratora powyżej.</p></section>
      <section><h2>7. Wersja dokumentu</h2><p>Wersja robocza: 13 sierpnia 2026 r. Dokument wymaga weryfikacji i uzupełnienia danymi prawnymi firmy przed uruchomieniem produkcyjnym.</p></section>
    </article>
  </div></main>;
}
