import { Download, ArrowRight, ShieldCheck, FileCheck2, Scale, ExternalLink } from "lucide-react";
import { PROFILE } from "@/data/profile";

export default function Hero() {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-stone-200 bg-[#FBFBFA]">
      {/* Subtle ledger accent lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full pointer-events-none border-x border-stone-200/60" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Status / Dispatch Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 border-b border-stone-200 text-xs text-stone-600">
          <div className="flex items-center gap-2 font-mono text-[11px] text-stone-600">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-700 animate-pulse" />
            <span className="font-semibold text-stone-800">STATUS PRAKTIK AKTIF</span>
            <span className="text-stone-300">|</span>
            <span className="hidden sm:inline text-stone-600">IAPI Reg. CPA-2018-04892</span>
            <span className="hidden sm:inline text-stone-300">•</span>
            <span className="hidden sm:inline text-stone-600">IAI Reg. 11.CA-08341</span>
          </div>
          <div className="font-mono text-[11px] text-stone-500 tracking-wider">
            LOKASI: JAKARTA SELATAN, INDONESIA
          </div>
        </div>

        {/* Main Hero Grid: Editorial Typography + Ledger Dossier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left / Primary Column (7 cols): Editorial Typography & CTAs */}
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 text-xs font-mono tracking-wider uppercase bg-[#14382F]/8 text-[#14382F] border border-[#14382F]/20">
                <Scale className="w-3.5 h-3.5" />
                <span>Akuntan Publik & Konsultan Pajak Berlisensi</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-normal tracking-tight text-stone-900 leading-[1.12]">
                Presisi laporan keuangan. Disiplin kepatuhan perpajakan.
              </h1>
            </div>

            <p className="font-serif italic text-lg sm:text-xl text-stone-700 font-light border-l-2 border-[#9E7432] pl-4 py-0.5">
              &ldquo;{PROFILE.valueProposition}&rdquo;
            </p>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-2xl font-normal">
              Memimpin perikatan audit umum, asistensi sengketa pemeriksaan pajak (SP2/SPMB), serta restrukturisasi pelaporan grup korporasi berstandar SAK berbasis IFRS. Berpengalaman menangani entitas emiten, holding manufaktur, hingga korporasi logistik nasional.
            </p>

            {/* CTAs: Primary (Download CV) + Secondary (Hubungi) */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              {/* PRIMARY CTA: Unduh CV */}
              <a
                href={PROFILE.cvPath}
                download={PROFILE.cvFileName}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-medium tracking-wide text-[#F9F6F0] bg-[#14382F] hover:bg-[#0D2620] border border-[#14382F] transition-all shadow-xs group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#14382F]"
                aria-label="Unduh Berkas Curriculum Vitae Resmi PDF"
              >
                <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                <span className="font-semibold">Unduh CV Lengkap</span>
                <span className="font-mono text-[11px] bg-white/20 px-1.5 py-0.5 rounded-xs text-white/95">
                  PDF • 2 Hal
                </span>
              </a>

              {/* SECONDARY CTA: Hubungi Saya */}
              <a
                href="#kontak"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 hover:border-stone-400 transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-stone-400"
              >
                <span>Hubungi Saya</span>
                <ArrowRight className="w-4 h-4 text-stone-500" />
              </a>

              {/* Quick Preview CV */}
              <a
                href={PROFILE.cvPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-mono text-stone-500 hover:text-stone-900 transition-colors"
                title="Buka PDF di tab baru tanpa langsung mengunduh"
              >
                <span>Lihat Dokumen</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right Column (4 cols): Professional Credential Slate / Factsheet */}
          <div className="lg:col-span-4">
            <div className="border border-stone-300 bg-white p-5 sm:p-6 shadow-2xs space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                <span className="font-mono text-[11px] uppercase tracking-wider text-stone-500">
                  Dossier Akuntan
                </span>
                <span className="font-mono text-[11px] text-[#14382F] font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Terverifikasi
                </span>
              </div>

              <div>
                <div className="font-serif text-xl font-bold text-stone-900 leading-tight">
                  {PROFILE.name}
                </div>
                <div className="text-xs text-stone-500 mt-1 font-mono">
                  Izin Konsultan Pajak: KEP-4129/IP.B/2020
                </div>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-stone-150 text-xs">
                <div className="flex items-start justify-between gap-2 py-1 border-b border-stone-100">
                  <span className="text-stone-500">Gelar Profesi</span>
                  <span className="font-mono font-medium text-stone-900 text-right">
                    CA, CPA, BKP, ASEAN CPA
                  </span>
                </div>
                <div className="flex items-start justify-between gap-2 py-1 border-b border-stone-100">
                  <span className="text-stone-500">Institusi Profesi</span>
                  <span className="text-stone-900 text-right font-medium">
                    IAPI • IAI • IKPI
                  </span>
                </div>
                <div className="flex items-start justify-between gap-2 py-1 border-b border-stone-100">
                  <span className="text-stone-500">Almamater</span>
                  <span className="text-stone-900 text-right font-medium">
                    S2 UI (M.Ak.) • S1 UGM (S.E.)
                  </span>
                </div>
                <div className="flex items-start justify-between gap-2 py-1">
                  <span className="text-stone-500">Fokus Layanan</span>
                  <span className="text-stone-900 text-right font-medium">
                    Audit Statutori, PSAK, Pajak Badan
                  </span>
                </div>
              </div>

              <div className="pt-2 bg-stone-50 -mx-5 -mb-5 p-4 border-t border-stone-200 text-[11px] text-stone-600 flex items-center gap-2 font-mono">
                <FileCheck2 className="w-4 h-4 text-[#14382F] shrink-0" />
                <span>Dokumen CV termutakhir: Q3 2026 (Ukuran ~7 KB)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Ledger Statistics Bar (Not generic cards, but clean tabular metrics) */}
        <div className="mt-12 pt-8 border-t border-stone-300">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-stone-200 border border-stone-200 bg-white">
            {PROFILE.stats.map((item, idx) => (
              <div key={idx} className="p-5 sm:p-6 space-y-1">
                <div className="font-mono text-2xl sm:text-3xl font-bold text-[#14382F] tracking-tight">
                  {item.value}
                </div>
                <div className="text-xs font-semibold text-stone-900 uppercase tracking-wider">
                  {item.label}
                </div>
                <div className="text-xs text-stone-500 leading-snug">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
