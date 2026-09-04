import { Award, GraduationCap, ShieldCheck, CheckCircle2 } from "lucide-react";
import { PROFILE } from "@/data/profile";

export default function Certifications() {
  const certifications = PROFILE.credentials.filter((c) => c.type === "certification");
  const educations = PROFILE.credentials.filter((c) => c.type === "education");

  return (
    <section id="kredensial" className="py-16 md:py-24 border-b border-stone-200 bg-[#FBFBFA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-10 border-b border-stone-200 gap-4">
          <div>
            <div className="font-mono text-xs text-[#9E7432] font-medium tracking-wider uppercase mb-1">
              04 // Kredensial Resmi & Pendidikan
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal tracking-tight">
              Lisensi Profesi & Kualifikasi Akademis
            </h2>
          </div>
          <div className="font-mono text-xs text-stone-500 max-w-xs md:text-right">
            Terdaftar pada lembaga otoritas akuntan publik dan kementerian keuangan RI.
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Professional Certifications & Licenses (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-stone-200">
              <div className="flex items-center gap-2 font-mono text-xs uppercase font-semibold text-stone-800">
                <Award className="w-4 h-4 text-[#14382F]" />
                <span>Lisensi Praktik & Keanggotaan Otoritas</span>
              </div>
              <span className="font-mono text-[11px] text-stone-400">Status Terverifikasi</span>
            </div>

            <div className="space-y-3">
              {certifications.map((item, idx) => (
                <div
                  key={idx}
                  className="border border-stone-300 bg-white p-5 hover:border-stone-400 transition-colors shadow-2xs"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 pb-2">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <h3 className="font-serif text-base sm:text-lg font-bold text-stone-900">
                          {item.title}
                        </h3>
                        <ShieldCheck className="w-4 h-4 text-[#14382F] shrink-0" />
                      </div>
                      <div className="text-xs font-medium text-[#14382F]">
                        {item.issuer}
                      </div>
                    </div>

                    <div className="flex flex-col items-end">
                      <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 bg-[#14382F]/10 text-[#14382F] font-semibold">
                        {item.statusBadge}
                      </span>
                      <span className="font-mono text-xs text-stone-400 mt-1">
                        Tahun: {item.year}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed pt-2 border-t border-stone-100">
                    {item.description}
                  </p>

                  {item.registrationNumber && (
                    <div className="mt-3 pt-2 border-t border-stone-100 flex items-center justify-between text-xs font-mono">
                      <span className="text-stone-400">Nomor Registrasi Resmi:</span>
                      <span className="font-semibold text-stone-800 bg-stone-100 px-2 py-0.5 border border-stone-200">
                        {item.registrationNumber}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Formal Education & Academic Distinction (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-stone-200">
              <div className="flex items-center gap-2 font-mono text-xs uppercase font-semibold text-stone-800">
                <GraduationCap className="w-4 h-4 text-[#9E7432]" />
                <span>Latar Belakang Akademis Formal</span>
              </div>
              <span className="font-mono text-[11px] text-stone-400">Almamater Utama</span>
            </div>

            <div className="space-y-3">
              {educations.map((edu, idx) => (
                <div
                  key={idx}
                  className="border border-stone-300 bg-white p-5 hover:border-stone-400 transition-colors shadow-2xs space-y-2"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-mono text-xs text-stone-500 font-semibold">
                      {edu.year}
                    </span>
                    <span className="font-mono text-[10px] px-2 py-0.5 bg-stone-100 text-stone-700 font-semibold border border-stone-200">
                      {edu.statusBadge}
                    </span>
                  </div>

                  <h3 className="font-serif text-base sm:text-lg font-bold text-stone-900 leading-snug">
                    {edu.title}
                  </h3>

                  <div className="text-xs font-medium text-[#14382F]">
                    {edu.issuer}
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed pt-2 border-t border-stone-100">
                    {edu.description}
                  </p>
                </div>
              ))}

              {/* Regulatory Assurance Box */}
              <div className="border border-stone-300 bg-stone-50 p-4 space-y-2">
                <div className="font-mono text-xs uppercase tracking-wider text-stone-700 font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#14382F]" />
                  <span>Kepatuhan Pendidikan Profesi Berkelanjutan (PPL)</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Secara konsisten memenuhi kewajiban Satuan Kredit PPL tahunan yang diselenggarakan oleh IAPI dan IAI untuk mempertahankan pemutakhiran regulasi PSAK dan perpajakan nasional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
