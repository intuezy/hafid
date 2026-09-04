import { Briefcase, MapPin, TrendingUp } from "lucide-react";
import { PROFILE } from "@/data/profile";

export default function Experience() {
  return (
    <section id="pengalaman" className="py-16 md:py-24 border-b border-stone-200 bg-[#FBFBFA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-10 border-b border-stone-200 gap-4">
          <div>
            <div className="font-mono text-xs text-[#9E7432] font-medium tracking-wider uppercase mb-1">
              03 // Rekam Jejak Profesional
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal tracking-tight">
              Pengalaman Kerja & Portofolio Audit
            </h2>
          </div>
          <div className="font-mono text-xs text-stone-500 max-w-xs md:text-right">
            11+ tahun pengabdian pada praktik Kantor Akuntan Publik dan manajemen keuangan grup korporasi.
          </div>
        </div>

        {/* Ledger-style Experience Flow */}
        <div className="space-y-8">
          {PROFILE.experiences.map((exp, idx) => (
            <div
              key={idx}
              className="border border-stone-300 bg-white p-6 sm:p-8 hover:border-stone-400 transition-colors shadow-2xs relative"
            >
              {/* Header: Period, Role, Organization */}
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-4 border-b border-stone-200">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#14382F] bg-[#14382F]/10 px-2 py-0.5">
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1 font-mono text-xs text-stone-500">
                      <MapPin className="w-3 h-3 text-stone-400" />
                      {exp.location}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-semibold text-[#14382F] flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div className="lg:text-right">
                  <span className="font-mono text-[11px] text-stone-400 uppercase tracking-wider block">
                    Peran & Tingkat Tanggung Jawab
                  </span>
                  <span className="font-mono text-xs text-stone-700 font-medium">
                    Audit Eksternal & Konsolidasi Grup
                  </span>
                </div>
              </div>

              {/* Context Summary */}
              <p className="pt-4 text-xs sm:text-sm text-stone-600 leading-relaxed">
                {exp.summary}
              </p>

              {/* Measurable Achievements */}
              <div className="pt-4 space-y-2">
                <div className="font-mono text-[11px] uppercase tracking-wider text-stone-500 font-semibold flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-[#9E7432]" />
                  <span>Pencapaian Terukur & Dampak Finansial:</span>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {exp.achievements.map((ach, aIdx) => (
                    <div
                      key={aIdx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-800 bg-[#FBFBFA] p-3 border-l-2 border-[#14382F]"
                    >
                      <span className="font-mono text-xs text-[#9E7432] font-bold">
                        {String(aIdx + 1).padStart(2, "0")}.
                      </span>
                      <span className="leading-snug">{ach}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Competency tags */}
              <div className="pt-4 mt-2 flex flex-wrap items-center gap-2 border-t border-stone-100">
                <span className="font-mono text-[10px] text-stone-400 uppercase">
                  Fokus Ruang Lingkup:
                </span>
                {exp.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="font-mono text-[10px] px-2 py-0.5 bg-stone-100 text-stone-600 border border-stone-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
