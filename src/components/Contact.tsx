"use client";

import { useState } from "react";
import { Mail, MessageCircle, MapPin, Copy, Check, Clock, ShieldCheck, ArrowUpRight } from "lucide-react";
import { PROFILE } from "@/data/profile";

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="kontak" className="py-16 md:py-24 border-b border-stone-200 bg-[#FBFBFA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-10 border-b border-stone-200 gap-4">
          <div>
            <div className="font-mono text-xs text-[#9E7432] font-medium tracking-wider uppercase mb-1">
              06 // Jalur Komunikasi Langsung
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal tracking-tight">
              Inisiasi Konsultasi & Penugasan
            </h2>
          </div>
          <div className="font-mono text-xs text-stone-500 max-w-xs md:text-right">
            Saluran langsung tanpa perantara untuk evaluasi awal kebutuhan perikatan.
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Communication Cards (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Availability Status Banner */}
            <div className="border border-stone-300 bg-white p-5 border-l-4 border-l-[#14382F] shadow-2xs space-y-2">
              <div className="flex items-center gap-2 font-mono text-xs text-[#14382F] font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
                <span>{PROFILE.availability.status}</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                {PROFILE.availability.detail}
              </p>
            </div>

            {/* Email Channel */}
            <div className="border border-stone-300 bg-white p-5 sm:p-6 hover:border-stone-400 transition-colors shadow-2xs">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 border border-stone-200 bg-stone-50 flex items-center justify-center text-[#14382F] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="font-mono text-[11px] text-stone-400 uppercase tracking-wider">
                      Surat Elektronik Resmi
                    </div>
                    <div className="font-serif text-lg font-bold text-stone-900">
                      {PROFILE.email}
                    </div>
                    <p className="text-xs text-stone-500">
                      Saluran utama untuk pengiriman RFP, TOR penugasan audit, dan dokumen perikatan.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-end sm:items-center gap-2 shrink-0">
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-stone-700 bg-stone-100 hover:bg-stone-200 border border-stone-200 transition-colors cursor-pointer"
                    title="Salin alamat email"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-700" />
                        <span className="text-emerald-800 font-semibold">Tersalin</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-stone-500" />
                        <span>Salin</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-[#F9F6F0] bg-[#14382F] hover:bg-[#0D2620] transition-colors"
                  >
                    <span>Kirim Email</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp Business Channel */}
            <div className="border border-stone-300 bg-white p-5 sm:p-6 hover:border-stone-400 transition-colors shadow-2xs">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 border border-stone-200 bg-stone-50 flex items-center justify-center text-[#14382F] shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="font-mono text-[11px] text-stone-400 uppercase tracking-wider">
                      Komunikasi Cepat WhatsApp
                    </div>
                    <div className="font-serif text-lg font-bold text-stone-900">
                      {PROFILE.phone}
                    </div>
                    <p className="text-xs text-stone-500">
                      Respon cepat pada hari & jam kerja (Senin — Jumat, 08:30 — 17:30 WIB).
                    </p>
                  </div>
                </div>

                <a
                  href={PROFILE.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#F9F6F0] bg-[#14382F] hover:bg-[#0D2620] border border-[#14382F] transition-colors shrink-0"
                >
                  <span>Mulai Chat</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* LinkedIn Channel */}
            <div className="border border-stone-300 bg-white p-5 sm:p-6 hover:border-stone-400 transition-colors shadow-2xs">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 border border-stone-200 bg-stone-50 flex items-center justify-center text-[#14382F] shrink-0">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="font-mono text-[11px] text-stone-400 uppercase tracking-wider">
                      Jejaring Profesional
                    </div>
                    <div className="font-serif text-lg font-bold text-stone-900">
                      linkedin.com/in/hafid-pratama-cpa
                    </div>
                    <p className="text-xs text-stone-500">
                      Koneksi profesional, publikasi artikel PSAK, dan update regulasi perpajakan.
                    </p>
                  </div>
                </div>

                <a
                  href={PROFILE.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 transition-colors shrink-0"
                >
                  <span>Kunjungi</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-stone-500" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Practice Location & Consultation Protocol (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Office Location Card */}
            <div className="border border-stone-300 bg-white p-6 shadow-2xs space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs uppercase font-semibold text-stone-800 pb-3 border-b border-stone-200">
                <MapPin className="w-4 h-4 text-[#9E7432]" />
                <span>Domisili & Kantor Praktik</span>
              </div>

              <div className="space-y-2">
                <div className="font-serif text-base font-bold text-stone-900">
                  Equity Tower, Lantai 22, SCBD
                </div>
                <p className="text-xs text-stone-600 leading-relaxed font-mono">
                  Jl. Jend. Sudirman Kav. 52-53, Senayan, Kebayoran Baru, Jakarta Selatan, DKI Jakarta 12190
                </p>
                <div className="pt-2 flex items-center gap-1.5 text-xs text-stone-500">
                  <Clock className="w-3.5 h-3.5 text-stone-400" />
                  <span>Pertemuan tatap muka melalui penjadwalan awal (by appointment).</span>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-150 space-y-2">
                <span className="font-mono text-[11px] uppercase tracking-wider text-stone-500 font-semibold block">
                  Prosedur Evaluasi Perikatan:
                </span>
                <ol className="space-y-1.5 text-xs text-stone-600 list-decimal list-inside leading-snug">
                  <li>Inisiasi diskusi awal via surel atau WhatsApp resmi.</li>
                  <li>Penandatanganan Non-Disclosure Agreement (NDA) bila diperlukan.</li>
                  <li>Telaah awal dokumen akuntansi / SP2 pajak oleh praktisi.</li>
                  <li>Penerbitan proposal penugasan & surat perikatan kerja (Engagement Letter).</li>
                </ol>
              </div>

              <div className="pt-2 bg-stone-50 -mx-6 -mb-6 p-4 border-t border-stone-200 flex items-center gap-2 text-xs text-stone-600 font-mono">
                <ShieldCheck className="w-4 h-4 text-[#14382F] shrink-0" />
                <span>Kerahasiaan data klien dijamin standar etika IFAC & UU PDP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
