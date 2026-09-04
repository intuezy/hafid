import { ShieldCheck, Award, BookOpen, CheckCircle2 } from "lucide-react";
import { PROFILE } from "@/data/profile";

export default function About() {
  return (
    <section id="tentang" className="py-16 md:py-24 border-b border-stone-200 bg-[#FBFBFA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-10 border-b border-stone-200 gap-4">
          <div>
            <div className="font-mono text-xs text-[#9E7432] font-medium tracking-wider uppercase mb-1">
              01 // Ikhtisar Eksekutif
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal tracking-tight">
              Latar Belakang & Filosofi Praktik
            </h2>
          </div>
          <div className="font-mono text-xs text-stone-500 max-w-xs md:text-right">
            Prinsip Ketelitian Akuntansi, Kepatuhan Regulasi, & Perlindungan Aset Bisnis.
          </div>
        </div>

        {/* Two-Column Editorial Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Background & Biography (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-stone-700 text-sm sm:text-base leading-relaxed">
            <p className="font-serif text-xl sm:text-2xl text-stone-900 leading-snug font-normal">
              {PROFILE.about.lead}
            </p>

            {PROFILE.about.paragraphs.map((p, idx) => (
              <p key={idx} className="text-stone-600">
                {p}
              </p>
            ))}

            {/* Micro Highlight Card */}
            <div className="pt-4">
              <div className="border border-stone-200 bg-white p-5 space-y-3">
                <div className="font-mono text-xs uppercase tracking-wider text-stone-500 flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#9E7432]" />
                  <span>Kualifikasi Profesi Terdaftar</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#14382F] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-stone-900">CPA Indonesia</span>
                      <p className="text-stone-500 font-mono text-[11px]">IAPI • Praktik Audit Umum</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#14382F] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-stone-900">Chartered Accountant (CA)</span>
                      <p className="text-stone-500 font-mono text-[11px]">IAI • Standar Global IFAC</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#14382F] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-stone-900">Konsultan Pajak (BKP B)</span>
                      <p className="text-stone-500 font-mono text-[11px]">DJP & IKPI • Badan & Pribadi</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#14382F] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-stone-900">ASEAN CPA</span>
                      <p className="text-stone-500 font-mono text-[11px]">Mobilitas Jasa Regional</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Core Operating Pillars (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="border border-stone-200 bg-white divide-y divide-stone-200">
              <div className="p-4 bg-stone-50 border-b border-stone-200">
                <span className="font-mono text-xs uppercase tracking-wider text-stone-600 font-semibold flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-[#14382F]" />
                  <span>3 Prinsip Fundamental Kerja</span>
                </span>
              </div>

              {PROFILE.about.pillars.map((pillar) => (
                <div key={pillar.number} className="p-5 space-y-1.5 hover:bg-stone-50/50 transition-colors">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#9E7432] bg-[#9E7432]/10 px-1.5 py-0.5">
                      {pillar.number}
                    </span>
                    <h3 className="font-serif text-base font-semibold text-stone-900">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-7">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick quote / assurance notice */}
            <div className="p-4 border-l-2 border-[#14382F] bg-white text-xs text-stone-600 space-y-1">
              <div className="font-semibold text-stone-900 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#14382F]" />
                <span>Kepatuhan Standar Etika Profesi</span>
              </div>
              <p className="italic text-stone-500">
                Seluruh telaah akuntansi dan kertas kerja audit tunduk pada Kode Etik Profesi Akuntan Publik Indonesia untuk menjamin independensi dan integritas mutlak.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
