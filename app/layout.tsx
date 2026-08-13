import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://martinilabsystem.pl"),
  title: { default: "Martini LabSystem", template: "%s | Martini LabSystem" },
  description: "Martini LabSystem — aparatura i wyposażenie laboratoryjne. 20 lat doświadczenia na rynku.",
  openGraph: { title: "Martini LabSystem", description: "20 lat doświadczenia w branży laboratoryjnej.", type: "website", images: [{ url: "/og.png", width: 1536, height: 1024, alt: "Martini LabSystem — 20 years of experience." }] },
  twitter: { card: "summary_large_image", title: "Martini LabSystem", description: "20 lat doświadczenia w branży laboratoryjnej.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pl" suppressHydrationWarning><body>{children}</body></html>;
}
