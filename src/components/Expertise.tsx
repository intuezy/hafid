import { Check, Cpu, FileSpreadsheet } from "lucide-react";
import { PROFILE } from "@/data/profile";

export default function Expertise() {
  return (
    <section id="keahlian" className="py-16 md:py-24 border-b border-stone-200 bg-[#FBFBFA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-10 border-b border-stone-200 gap-4">
          <div>
            <div className="font-mono text-xs text-[#9E7432] font-medium tracking-wider uppercase mb-1">
              02 // Bidang Kompetensi Inti
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal tracking-tight">
              Layanan Akuntansi & Penasihat Keuangan
            </h2>
          </div>
          <div className="font-mono text-xs text-stone-500 max-w-xs md:text-right">
            Struktur metodologi terstandarisasi untuk korporasi, entitas grup, dan entitas privat.
          </div>
        </div>

        {/* 6 Competencies Grid (Ledger-style boxes with clean hairlines) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROFILE.expertise.map((item) => (
            <div
              key={item.code}
              className="border border-stone-300 bg-white p-6 flex flex-col justify-between hover:border-stone-400 transition-colors shadow-2xs"
            >
              <div className="space-y-4">
                {/* Code & Title */}
                <div className="flex items-center justify-between pb-3 border-b border-stone-150">
                  <span className="font-mono text-xs font-semibold text-[#14382F] bg-[#14382F]/8 px-2 py-0.5">
                    {item.code}
                  </span>
                  <span className="font-mono text-[11px] text-stone-400">
                    Kepatuhan Baku
                  </span>
                </div>

                <h3 className="font-serif text-lg font-semibold text-stone-900 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-stone-600 leading-relaxed">
                  {item.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="pt-2 space-y-2">
                  <div className="font-mono text-[10px] uppercase tracking-wider text-stone-400 font-semibold">
                    Ruang Lingkup & Luaran:
                  </div>
                  <ul className="space-y-1.5 text-xs text-stone-700">
                    {item.deliverables.map((deliv, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#14382F] shrink-0 mt-0.5" />
                        <span className="leading-snug">{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Standard Tags */}
              <div className="pt-5 mt-4 border-t border-stone-100 flex flex-wrap gap-1.5">
                {item.standards.map((std, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-[10px] px-2 py-0.5 bg-stone-100 text-stone-600 border border-stone-200"
                  >
                    {std}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Accounting Software & Financial Systems Ledger */}
        <div className="mt-12 border border-stone-300 bg-white">
          <div className="p-5 border-b border-stone-200 bg-stone-50 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#14382F]" />
              <span className="font-mono text-xs uppercase tracking-wider font-semibold text-stone-800">
                Ekosistem Sistem Informasi Finansial & Perangkat Lunak
              </span>
            </div>
            <span className="font-mono text-[11px] text-stone-500">
              Integrasi Database, Otomasi Closing, & Pelaporan Pajak Digital
            </span>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {PROFILE.toolsAndSoftware.map((tool, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 border border-stone-150 bg-[#FBFBFA]"
                >
                  <FileSpreadsheet className="w-4 h-4 text-[#9E7432] shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <div className="text-xs font-semibold text-stone-900">
                      {tool.name}
                    </div>
                    <div className="text-[11px] text-stone-500 font-mono">
                      {tool.category}
                    </div>
                    <div className="text-[11px] text-[#14382F] font-medium">
                      {tool.level}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
