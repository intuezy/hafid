# Hafid Pratama, S.E., M.Ak., CA, CPA, BKP
> Website Personal Profesional Akuntansi — Presisi Finansial & Kepatuhan Fiskal

Repositori website personal (*single-page*) untuk seorang praktisi akuntansi publik dan konsultan pajak berlisensi, dibangun menggunakan **Next.js 16 (App Router)**, **TypeScript**, dan **Tailwind CSS**.

Situs ini dirancang dengan pendekatan editorial presisi tinggi yang secara ketat **menghindari "AI Slop"** (tanpa gradien ungu-biru generik, tanpa stock photo tersenyum palsu, tanpa kartu shadow tebal mengambang), melainkan menghadirkan estetika *financial ledger* institusional yang menonjolkan kredibilitas dan kepercayaan.

---

## 🏛️ Fitur & Struktur Halaman

1. **Top Navigation (`Navbar`)**: Monogram identitas, navigasi seksi berpemberi kode (`01`–`06`), dan tombol akses cepat unduh CV PDF.
2. **Hero Section**:
   - Status praktik aktif berlisensi IAPI & IAI.
   - Headline editorial dengan tipografi *serif* berwibawa.
   - Proposisi nilai kontekstual dan rincian lisensi resmi.
   - CTA Utama **"Unduh CV Lengkap"** (`/cv.pdf`) + CTA Sekunder **"Hubungi Saya"** (`#kontak`).
   - Bar metrik keuangan ledger (11+ tahun, Rp2,4T+ aset diaudit, 40+ klien korporasi, 100% kepatuhan SAK).
3. **01 // Ikhtisar Eksekutif (`About`)**:
   - Latar belakang profesional di KAP Big Four dan konglomerasi korporasi.
   - 3 Pilar Fundamental Kerja: *Presisi Metodologis*, *Kepatuhan Preventif*, dan *Efisiensi Operasional*.
4. **02 // Bidang Kompetensi (`Expertise`)**:
   - Grid 6 pilar layanan akuntansi: Audit Statutori, Pelaporan PSAK/IFRS, Perpajakan Badan & TP Doc, Due Diligence, ERP & COA, serta Proyeksi Arus Kas.
   - Matriks sistem informasi akuntansi: SAP S/4HANA, Accurate Online, Xero, Zahir, Microsoft Excel Advanced, dan DJP Online.
5. **03 // Rekam Jejak Profesional (`Experience`)**:
   - Riwayat karir terstruktur dengan metrik pencapaian kuantitatif di KAP Hafid & Rekan, PwC Indonesia Network, PT Astra International Tbk, dan EY Indonesia Network.
6. **04 // Lisensi & Pendidikan (`Certifications`)**:
   - Lisensi resmi terverifikasi: CPA Indonesia (IAPI), Chartered Accountant (IAI), Konsultan Pajak BKP B (Kemenkeu RI/IKPI), dan ASEAN CPA.
   - Almamater formal: S2 Magister Akuntansi Universitas Indonesia (UI) & S1 Akuntansi Universitas Gadjah Mada (UGM).
7. **05 // Berkas Resmi (`CvCallout`)**:
   - Dossier unduh Curriculum Vitae fisik (`/cv.pdf`) dengan rincian spesifikasi dokumen (2 halaman, ~7 KB, bebas proteksi sandi) dan tombol pratinjau langsung di tab baru.
8. **06 // Jalur Komunikasi Langsung (`Contact`)**:
   - Indikator ketersediaan perikatan baru.
   - Surel resmi dengan fitur 1-klik salin.
   - Tautan langsung ke WhatsApp Business dan profil LinkedIn.
   - Alamat kantor fisik di SCBD Jakarta Selatan dan tata cara perikatan profesional.
9. **Footer**:
   - Penafian etika profesi IFAC/IAPI/IAI, navigasi lengkap, dan tombol kembali ke atas.

---

## 🎨 Keputusan Desain (Design Decisions)

- **Tipografi**:
  - **Heading**: `Newsreader` (Editorial Serif via `next/font/google`) — memberikan kesan otoritatif, elegan, dan mirip publikasi keuangan Wall Street / FT.
  - **Body**: `Plus Jakarta Sans` — sans-serif modern, bersih, dan sangat nyaman dibaca.
  - **Numbers / Codes**: `JetBrains Mono` — monospace tajam untuk angka tahun, nilai aset, kode seksi (`01 //`), dan nomor lisensi.
- **Palet Warna**:
  - Base: Warm Parchment (`#FBFBFA` & `#F4F4F0`) dan Deep Slate Ink (`#141A21`).
  - Accent: Forest Emerald (`#14382F`) & Warm Antique Brass (`#9E7432`).
- **Gaya Visual**: Garis pembatas tipis (*hairline borders* `border-stone-200`), nomor section terstruktur, dan tata letak tabel akuntansi (*ledger aesthetic*).

---

## 📁 Struktur Direktori

```
├── public/
│   └── cv.pdf                # File PDF Curriculum Vitae resmi siap unduh
├── src/
│   ├── app/
│   │   ├── globals.css       # Konfigurasi Tailwind CSS v4 & theme variables
│   │   ├── layout.tsx        # Inisialisasi Google Fonts & Metadata SEO
│   │   └── page.tsx          # Master page layout
│   ├── components/           # Komponen modular per seksi
│   │   ├── About.tsx
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx
│   │   ├── CvCallout.tsx
│   │   ├── Experience.tsx
│   │   ├── Expertise.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   └── Navbar.tsx
│   └── data/
│       └── profile.ts        # Single source of truth untuk seluruh data profil
```

---

## 🚀 Menjalankan Proyek Secara Lokal

Pastikan Node.js (v18+) telah terinstal.

1. **Clone repositori**:
   ```bash
   git clone https://github.com/intuezy/hafid.git
   cd hafid
   ```

2. **Instal dependensi**:
   ```bash
   npm install
   ```

3. **Jalankan server pengembangan**:
   ```bash
   npm run dev
   ```
   Buka [http://localhost:3000](http://localhost:3000) pada peramban Anda.

4. **Build untuk produksi**:
   ```bash
   npm run build
   npm run start
   ```

---

## 📄 Lisensi & Hak Cipta
Hak cipta © 2026 Hafid Pratama, S.E., M.Ak., CA, CPA, BKP. Dilindungi Undang-Undang.

