import { Download, FileText, CheckCircle2, ShieldCheck, ExternalLink, Calendar, HardDrive } from "lucide-react";
import { PROFILE } from "@/data/profile";

export default function CvCallout() {
  const documentContents = [
    "Ringkasan profil profesional dan izin praktik resmi",
    "Riwayat perikatan audit emiten & korporasi swasta 11+ tahun",
    "Detail sertifikasi CA, CPA, BKP, ASEAN CPA, & nomor registrasi",
    "Daftar proyek implementasi PSAK 71/72/73 & migrasi ERP",
    "Kontak referensi mitra perikatan dan riwayat akademis UI & UGM"
  ];

  return (
    <section id="unduh-cv" className="py-16 md:py-24 border-b border-stone-200 bg-[#F4F4F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-10 border-b border-stone-300 gap-4">
          <div>
            <div className="font-mono text-xs text-[#9E7432] font-medium tracking-wider uppercase mb-1">
              05 // Berkas Resmi Terverifikasi
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal tracking-tight">
              Unduh Curriculum Vitae Lengkap
            </h2>
          </div>
          <div className="font-mono text-xs text-stone-500 max-w-xs md:text-right">
            Dokumen terformat rapi untuk keperluan evaluasi perikatan korporasi atau penugasan eksekutif.
          </div>
        </div>

        {/* Master Document Dossier Card */}
        <div className="border-2 border-[#14382F] bg-white shadow-xs">
          {/* Top Header Strip */}
          <div className="bg-[#14382F] text-[#F9F6F0] px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#9E7432]" />
              <span className="font-semibold tracking-wider uppercase">
                DOKUMEN VERIFIKASI RESMI • CURRICULUM VITAE
              </span>
            </div>
            <div className="flex items-center gap-4 text-stone-300">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                Pemutakhiran: Q3 2026
              </span>
              <span className="flex items-center gap-1.5">
                <HardDrive className="w-3.5 h-3.5" />
                Ukuran: ~7 KB (PDF)
              </span>
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Document Overview & Specs (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 leading-tight">
                    {PROFILE.name}
                  </h3>
                  <p className="font-mono text-xs text-[#9E7432] mt-1 font-semibold">
                    Akuntan Publik Terdaftar IAPI • Konsultan Pajak Berizin DJP
                  </p>
                </div>

                <p className="text-sm text-stone-600 leading-relaxed">
                  Berkas Curriculum Vitae ini mencakup rekam jejak audit independen, portofolio restrukturisasi akuntansi grup usaha, mitigasi sengketa pajak, serta rincian lisensi praktik yang dapat divalidasi langsung ke database otoritas.
                </p>

                {/* Content Checklist */}
                <div className="space-y-2.5 pt-2 border-t border-stone-200">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-stone-500 font-semibold block">
                    Cakupan Isi Dokumen (2 Halaman):
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                    {documentContents.map((content, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#14382F] shrink-0 mt-0.5" />
                        <span className="leading-snug">{content}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Security and Integrity badge */}
                <div className="flex items-center gap-2 text-xs text-stone-500 font-mono pt-2">
                  <ShieldCheck className="w-4 h-4 text-[#14382F]" />
                  <span>Format standar PDF A4 • Siap cetak & bebas proteksi sandi</span>
                </div>
              </div>

              {/* Action Box (5 cols) */}
              <div className="lg:col-span-5">
                <div className="border border-stone-300 bg-[#FBFBFA] p-6 text-center space-y-5">
                  <div className="w-14 h-14 mx-auto rounded-full bg-[#14382F]/10 border border-[#14382F]/20 flex items-center justify-center text-[#14382F]">
                    <Download className="w-6 h-6" />
                  </div>

                  <div className="space-y-1">
                    <div className="font-serif text-lg font-bold text-stone-900">
                      Unduh Berkas Sekarang
                    </div>
                    <p className="text-xs text-stone-500 font-mono">
                      File: {PROFILE.cvFileName}
                    </p>
                  </div>

                  <div className="space-y-2.5">
                    {/* Primary Download Anchor */}
                    <a
                      href={PROFILE.cvPath}
                      download={PROFILE.cvFileName}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-[#F9F6F0] bg-[#14382F] hover:bg-[#0D2620] border border-[#14382F] transition-all shadow-xs group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#14382F]"
                      aria-label="Unduh Dokumen CV PDF"
                    >
                      <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                      <span>Unduh CV (Format PDF)</span>
                    </a>

                    {/* Secondary Preview In New Tab */}
                    <a
                      href={PROFILE.cvPath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-medium text-stone-700 bg-white hover:bg-stone-50 border border-stone-300 transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-stone-400"
                    >
                      <span>Buka & Pratinjau di Tab Baru</span>
                      <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
                    </a>
                  </div>

                  <p className="text-[11px] text-stone-400 font-mono pt-2 border-t border-stone-200">
                    File dapat langsung diganti di path <code className="text-stone-600 bg-stone-200/60 px-1 py-0.5 rounded-xs">/public/cv.pdf</code>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
