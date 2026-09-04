"use client";

import { useState, useEffect } from "react";
import { Download, Menu, X, ShieldCheck, ArrowUpRight } from "lucide-react";
import { PROFILE } from "@/data/profile";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Ikhtisar", href: "#tentang", code: "01" },
    { label: "Keahlian", href: "#keahlian", code: "02" },
    { label: "Pengalaman", href: "#pengalaman", code: "03" },
    { label: "Kredensial", href: "#kredensial", code: "04" },
    { label: "Dokumen CV", href: "#unduh-cv", code: "05" },
    { label: "Kontak", href: "#kontak", code: "06" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-[#FBFBFA]/95 backdrop-blur-md border-b border-stone-300/80 shadow-xs"
          : "bg-[#FBFBFA] border-b border-stone-200"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Brand Identity / Monogram */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#14382F]"
            aria-label="Kembali ke atas"
          >
            <div className="w-10 h-10 border border-[#14382F] bg-[#14382F] text-[#F9F6F0] flex items-center justify-center font-serif text-lg font-semibold tracking-wider transition-colors group-hover:bg-[#0D2620]">
              HP
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-base font-semibold text-stone-900 tracking-tight leading-tight group-hover:text-[#14382F] transition-colors">
                {PROFILE.shortName}
              </span>
              <span className="font-mono text-[11px] text-stone-500 uppercase tracking-wider flex items-center gap-1">
                <span>CA • CPA • BKP</span>
                <span className="inline-block w-1 h-1 rounded-full bg-[#14382F]" />
                <span className="text-stone-400">Akuntan Publik</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Navigasi Utama">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[13px] font-medium text-stone-600 hover:text-stone-950 transition-colors py-1 relative group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#14382F]"
              >
                <span className="font-mono text-[10px] text-stone-400 mr-1 group-hover:text-[#9E7432] transition-colors">
                  {item.code}
                </span>
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action Button: Download CV */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={PROFILE.cvPath}
              download={PROFILE.cvFileName}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#F9F6F0] bg-[#14382F] hover:bg-[#0D2620] border border-[#14382F] transition-all duration-150 shadow-2xs focus:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#14382F]"
              title="Unduh Curriculum Vitae (PDF)"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Unduh CV</span>
              <span className="font-mono text-[10px] bg-white/15 px-1 py-0.2 rounded-xs text-white/90">
                PDF
              </span>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={PROFILE.cvPath}
              download={PROFILE.cvFileName}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-[#F9F6F0] bg-[#14382F] border border-[#14382F]"
              aria-label="Unduh CV PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>CV</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:text-stone-950 hover:bg-stone-100 transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#14382F]"
              aria-expanded={mobileMenuOpen}
              aria-label="Buka menu navigasi"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-[#FBFBFA] px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-150">
          <div className="py-2 border-b border-stone-200/80 mb-2">
            <div className="flex items-center gap-2 text-xs text-stone-600 font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-[#14382F]" />
              <span>IAPI Reg: CPA-2018-04892</span>
            </div>
          </div>
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2 text-sm font-medium text-stone-800 hover:text-[#14382F] border-b border-stone-100"
            >
              <span className="flex items-center gap-2">
                <span className="font-mono text-xs text-stone-400">{item.code}</span>
                <span>{item.label}</span>
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
            </a>
          ))}
          <div className="pt-3">
            <a
              href={PROFILE.cvPath}
              download={PROFILE.cvFileName}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-[#F9F6F0] bg-[#14382F] hover:bg-[#0D2620] border border-[#14382F]"
            >
              <Download className="w-4 h-4" />
              <span>Unduh Berkas CV Resmi (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
