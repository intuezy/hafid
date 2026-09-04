import type { Metadata } from "next";
import { Newsreader, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hafid Pratama, S.E., M.Ak., CA, CPA, BKP — Akuntan Publik & Konsultan Pajak",
  description:
    "Website resmi Hafid Pratama, CA, CPA, BKP. Praktisi akuntansi publik terdaftar IAPI & konsultan pajak berizin DJP. Audit statutori SAK/IFRS, konsolidasi laporan keuangan, dan kepatuhan perpajakan korporasi di Jakarta.",
  keywords: [
    "Akuntan Publik",
    "CPA Indonesia",
    "Chartered Accountant",
    "Konsultan Pajak Jakarta",
    "Audit Laporan Keuangan",
    "IFRS SAK",
    "Rekonsiliasi Fiskal",
    "Hafid Pratama",
  ],
  authors: [{ name: "Hafid Pratama, S.E., M.Ak., CA, CPA, BKP" }],
  openGraph: {
    title: "Hafid Pratama, S.E., M.Ak., CA, CPA, BKP — Akuntan Publik & Konsultan Pajak",
    description:
      "Praktisi akuntansi publik berlisensi IAPI dan konsultan pajak berizin resmi di Jakarta Selatan. Unduh CV resmi dan inisiasi konsultasi.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${newsreader.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#FBFBFA] text-[#191F28] antialiased selection:bg-[#1E3A34] selection:text-[#F3EFE6]">
        {children}
      </body>
    </html>
  );
}
