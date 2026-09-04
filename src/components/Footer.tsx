import { Download, ShieldCheck, ArrowUp } from "lucide-react";
import { PROFILE } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="bg-[#141A21] text-stone-300 border-t border-stone-800">
      {/* Top Banner: Quick Access CV & Direct Action */}
      <div className="border-b border-stone-800/80 py-8 bg-[#0E1318]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <span className="font-mono text-xs text-[#9E7432] uppercase tracking-wider block">
              Akses Dokumen Eksekutif
            </span>
            <div className="font-serif text-lg font-medium text-stone-100">
              Butuh dokumen profil resmi untuk telaah internal direksi atau komite audit?
            </div>
          </div>

          <a
            href={PROFILE.cvPath}
            download={PROFILE.cvFileName}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#141A21] bg-[#F9F6F0] hover:bg-white transition-colors border border-stone-300 shrink-0"
            aria-label="Unduh Curriculum Vitae Lengkap PDF"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Unduh CV Lengkap (PDF)</span>
          </a>
        </div>
      </div>

      {/* Main Colophon */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-stone-800">
          {/* Col 1: Identity & Credentials (6 cols) */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 border border-stone-700 bg-stone-900 text-stone-100 flex items-center justify-center font-serif text-base font-bold">
                HP
              </div>
              <div>
                <div className="font-serif text-base font-bold text-stone-100 leading-tight">
                  {PROFILE.name}
                </div>
                <div className="font-mono text-[11px] text-stone-400">
                  Akuntan Publik Terdaftar IAPI & Konsultan Pajak Berizin DJP
                </div>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed max-w-md">
              Menyelenggarakan jasa audit independen, konsultasi pelaporan keuangan SAK/IFRS, dan pendampingan kepatuhan perpajakan korporasi dengan komitmen integritas mutlak dan kerahasiaan data profesional.
            </p>

            <div className="flex items-center gap-2 text-xs text-stone-400 font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-[#9E7432]" />
              <span>IAPI: CPA-2018-04892 • IAI: 11.CA-08341 • BKP: KEP-4129/IP.B/2020</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-mono text-xs uppercase tracking-wider text-stone-200 font-semibold">
              Navigasi Halaman
            </div>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <a href="#tentang" className="hover:text-white transition-colors">
                  01. Ikhtisar Eksekutif
                </a>
              </li>
              <li>
                <a href="#keahlian" className="hover:text-white transition-colors">
                  02. Bidang Kompetensi Inti
                </a>
              </li>
              <li>
                <a href="#pengalaman" className="hover:text-white transition-colors">
                  03. Rekam Jejak Lapangan
                </a>
              </li>
              <li>
                <a href="#kredensial" className="hover:text-white transition-colors">
                  04. Lisensi & Pendidikan
                </a>
              </li>
              <li>
                <a href="#unduh-cv" className="hover:text-white transition-colors">
                  05. Dokumen Resmi CV
                </a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-white transition-colors">
                  06. Kontak & Lokasi Praktik
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contacts & Practice (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-mono text-xs uppercase tracking-wider text-stone-200 font-semibold">
              Kontak Langsung
            </div>
            <div className="space-y-2 text-xs text-stone-400 font-mono">
              <div>
                <span className="text-stone-500 block text-[10px] uppercase">Email:</span>
                <a href={`mailto:${PROFILE.email}`} className="text-stone-300 hover:text-white transition-colors">
                  {PROFILE.email}
                </a>
              </div>
              <div>
                <span className="text-stone-500 block text-[10px] uppercase">WhatsApp:</span>
                <a href={PROFILE.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-stone-300 hover:text-white transition-colors">
                  {PROFILE.phone}
                </a>
              </div>
              <div>
                <span className="text-stone-500 block text-[10px] uppercase">Domisili:</span>
                <span className="text-stone-300">SCBD, Jakarta Selatan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500 font-mono">
          <div>
            © {new Date().getFullYear()} {PROFILE.shortName}, S.E., M.Ak., CA, CPA, BKP. Hak Cipta Dilindungi Undang-Undang.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="inline-flex items-center gap-1 hover:text-stone-300 transition-colors"
            >
              <span>Kembali ke Atas</span>
              <ArrowUp className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
