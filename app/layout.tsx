import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://martinilabsystem.pl"),
  title: { default: "Martini LabSystem", template: "%s | Martini LabSystem" },
  description: "Laboratory instruments, equipment and support backed by over 20 years of experience.",
  openGraph: { title: "Martini LabSystem", description: "Precision for every laboratory.", type: "website", images: [{ url: "/og.png", width: 1536, height: 1024, alt: "Martini LabSystem — Precision for every laboratory." }] },
  twitter: { card: "summary_large_image", title: "Martini LabSystem", description: "Precision for every laboratory.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pl" suppressHydrationWarning><body>{children}</body></html>;
}
