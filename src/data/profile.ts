export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  summary: string;
  achievements: string[];
  tags: string[];
}

export interface ExpertiseItem {
  code: string;
  title: string;
  description: string;
  deliverables: string[];
  standards: string[];
}

export interface CredentialItem {
  type: 'certification' | 'education';
  title: string;
  issuer: string;
  registrationNumber?: string;
  year: string;
  description: string;
  statusBadge: string;
}

export const PROFILE = {
  name: "Hafid Pratama, S.E., M.Ak., CA, CPA, BKP",
  shortName: "Hafid Pratama",
  title: "Praktisi Akuntansi Publik & Penasihat Kepatuhan Fiskal",
  tagline: "Presisi dalam Pelaporan. Disiplin dalam Kepatuhan. Ketelitian untuk Keputusan Finansial Bernilai Tinggi.",
  valueProposition: "Membantu korporasi, entitas berkembang, dan konglomerasi bisnis menegakkan kepatuhan standar SAK/IFRS, memitigasi sengketa pajak secara preventif, serta menyusun pelaporan finansial transparan yang siap diaudit.",
  location: "Jakarta Selatan, DKI Jakarta, Indonesia",
  email: "hafid.pratama.cpa@gmail.com",
  phone: "+62 812-8901-4520",
  whatsappUrl: "https://wa.me/6281289014520?text=Halo%20Pak%20Hafid,%20saya%20ingin%20berdiskusi%20mengenai%20kebutuhan%20akuntansi%20dan%20perpajakan.",
  linkedinUrl: "https://linkedin.com/in/hafid-pratama-cpa",
  cvPath: "/cv.pdf",
  cvFileName: "CV_Hafid_Pratama_CPA.pdf",
  
  availability: {
    status: "Tersedia untuk Perikatan Baru",
    detail: "Menerima perikatan audit interim/final, asistensi rekonsiliasi fiskal, & penasihat pelaporan keuangan Q3–Q4 2026."
  },

  stats: [
    { value: "11+", label: "Tahun Pengalaman", desc: "Audit publik, pelaporan konsolidasi, & pajak" },
    { value: "Rp2,4T+", label: "Aset Diaudit", desc: "Total valuasi portofolio perikatan korporasi" },
    { value: "40+", label: "Klien Korporasi", desc: "Manufaktur, logistik, ritel, & jasa profesional" },
    { value: "100%", label: "Kepatuhan SAK", desc: "Konsisten memenuhi standar IFRS & regulasi DJP" },
  ],

  about: {
    lead: "Akuntan berlisensi dengan komitmen penuh terhadap objektivitas analitis dan integritas pelaporan keuangan korporasi.",
    paragraphs: [
      "Mengawali karir di lingkungan Kantor Akuntan Publik (KAP) Big Four dan unit konsolidasi keuangan konglomerasi terkemuka di Indonesia, saya memiliki spesialisasi dalam menavigasi kompleksitas Standar Akuntansi Keuangan (SAK berbasis IFRS), tata kelola pengendalian internal, serta rekonsiliasi fiskal preventif.",
      "Sebagai praktisi yang terdaftar di Institut Akuntan Publik Indonesia (IAPI) dan Ikatan Akuntan Indonesia (IAI), saya percaya bahwa laporan keuangan yang kredibel bukan sekadar formalitas akhir tahun, melainkan instrumen defensif utama bagi direksi dan pemegang saham dalam memitigasi risiko hukum dan sengketa pajak."
    ],
    pillars: [
      {
        number: "01",
        title: "Presisi Metodologis",
        description: "Setiap angka dan akun divalidasi dengan kertas kerja terstruktur, mengacu pada ketentuan PSAK/IFRS dan regulasi perundang-undangan."
      },
      {
        number: "02",
        title: "Kepatuhan Preventif",
        description: "Menghindari eksposur sanksi perpajakan melalui telaah teliti (tax health check) dan rekonsiliasi fiskal sebelum audit otoritas."
      },
      {
        number: "03",
        title: "Efisiensi Operasional",
        description: "Mengintegrasikan sistem ERP modern (SAP/Accurate/Xero) untuk memangkas siklus penutupan buku (financial closing) bulanan."
      }
    ]
  },

  expertise: [
    {
      code: "EXP-01",
      title: "Audit Statutori & Jasa Asurans",
      description: "Pemeriksaan laporan keuangan independen dengan kepatuhan penuh terhadap Standar Profesional Akuntan Publik (SPAP).",
      deliverables: [
        "Laporan Auditor Independen (LAI) & Opini Audit",
        "Management Letter identifikasi kelemahan kontrol internal",
        "Pemeriksaan Prosedur yang Disepakati (AUP)"
      ],
      standards: ["SPAP", "ISA", "COSO Framework"]
    },
    {
      code: "EXP-02",
      title: "Pelaporan Keuangan & Konsolidasi (IFRS/SAK)",
      description: "Penyusunan laporan keuangan komprehensif untuk entitas tunggal maupun grup korporasi dengan kepemilikan bertingkat.",
      deliverables: [
        "Kertas kerja konsolidasi dan eliminasi transaksi antar-perusahaan",
        "Implementasi standar spesifik: PSAK 71 (Instrumen Keuangan), PSAK 72 (Pendapatan Kontrak), PSAK 73 (Sewa)",
        "Konversi laporan keuangan lokal ke standar pelaporan internasional (IFRS)"
      ],
      standards: ["PSAK", "IFRS", "SAK Entitas Privat (EP)"]
    },
    {
      code: "EXP-03",
      title: "Perpajakan Korporasi & Rekonsiliasi Fiskal",
      description: "Perencanaan pajak kepatuhan (tax compliance), telaah risiko perpajakan, dan asistensi saat pemeriksaan DJP.",
      deliverables: [
        "Rekonsiliasi fiskal komprehensif SPT Tahunan PPh Badan 1771",
        "Penyusunan Local File & Master File Dokumen Penentuan Harga Transfer (TP Doc)",
        "Asistensi tanggapan SP2, SPMB, dan pemeriksaan pajak terpadu"
      ],
      standards: ["UU KUP / HPP", "PPh 21/23/25/26/4(2)", "e-Faktur PPN"]
    },
    {
      code: "EXP-04",
      title: "Financial Due Diligence & Valuasi Transaksi",
      description: "Penelaahan historis keuangan secara objektif untuk mendukung akuisisi, merger, atau fasilitas kredit perbankan.",
      deliverables: [
        "Laporan Quality of Earnings (QoE) dan normalisasi EBITDA",
        "Identifikasi liabilitas kontinjensi yang belum tercatat (unrecorded liabilities)",
        "Analisis net working capital dan perputaran modal kerja"
      ],
      standards: ["M&A Due Diligence", "Financial Modeling", "EBITDA Bridge"]
    },
    {
      code: "EXP-05",
      title: "Implementasi Sistem Akuntansi & ERP",
      description: "Perancangan bagan akun (Chart of Accounts), alur otorisasi internal, dan digitalisasi pembukuan korporasi.",
      deliverables: [
        "Restrukturisasi Chart of Accounts sesuai struktur cost center",
        "Migrasi data keuangan historis dan setup pembukuan cloud",
        "SOP siklus penutupan buku (month-end close playbook)"
      ],
      standards: ["SAP S/4HANA (FI)", "Accurate Online", "Xero", "Zahir"]
    },
    {
      code: "EXP-06",
      title: "Proyeksi Keuangan & Analisis Arus Kas",
      description: "Pemodelan finansial 3-statement terintegrasi untuk kebutuhan perbankan, pengajuan investor, dan budgeting tahunan.",
      deliverables: [
        "Model proyeksi dinamis Laba Rugi, Neraca, dan Arus Kas",
        "Stress testing likuiditas dan rasio solvabilitas keuangan",
        "Analisis varians anggaran vs realisasi (budget variance analysis)"
      ],
      standards: ["Dynamic Financial Model", "Sensitivity Analysis", "DCF Basics"]
    }
  ] as ExpertiseItem[],

  experiences: [
    {
      period: "2021 — SEKARANG",
      role: "Managing Partner & Pemimpin Rekan",
      company: "KAP Hafid & Rekan (Kantor Akuntan Publik)",
      location: "Jakarta Selatan",
      summary: "Memimpin perikatan audit umum, kompilasi laporan keuangan, serta penelaahan kepatuhan pajak untuk puluhan klien korporasi menengah-besar.",
      achievements: [
        "Menyelesaikan 35+ perikatan audit laporan keuangan tahunan tanpa komplain keterlambatan, menghasilkan opini wajar sesuai fakta audit.",
        "Mendampingi restrukturisasi pelaporan grup holding 6 anak perusahaan dengan total omzet Rp850 Miliar, menyatukan 4 format COA yang sebelumnya terfragmentasi.",
        "Mewakili klien dalam 14 sesi klarifikasi pemeriksaan pajak (SP2) dengan mitigasi koreksi fiskal yang berhasil menyelamatkan miliaran rupiah hak restitusi."
      ],
      tags: ["Audit Eksternal", "SAK Berbasis IFRS", "TP Documentation", "Manajemen KAP"]
    },
    {
      period: "2017 — 2021",
      role: "Senior Manager — Assurance & Advisory",
      company: "KAP Tanudiredja, Wibisana, Rintis & Rekan (PwC Indonesia Network)",
      location: "Jakarta",
      summary: "Mengoordinasikan tim beranggotakan 16 auditor profesional dalam melaksanakan statutory audit atas emiten manufaktur dan institusi logistik.",
      achievements: [
        "Memimpin audit statutori 12 emiten terbuka dan perusahaan multinasional dengan portofolio aset gabungan melampaui Rp1,8 Triliun.",
        "Merancang model telaah dampak PSAK 71 (Cadangan Kerugian Penurunan Nilai) dan PSAK 73 (Kapitalisasi Hak Guna Sewa) yang diadopsi sebagai template audit kantor.",
        "Mengurangi rata-rata waktu penyusunan kertas kerja audit perikatan sebesar 22% melalui standardisasi sampling data digital."
      ],
      tags: ["Statutory Audit", "Emiten BEI", "PSAK 71 / 73", "ICOFR Review"]
    },
    {
      period: "2014 — 2017",
      role: "Senior Financial Accounting Analyst",
      company: "PT Astra International Tbk",
      location: "Jakarta",
      summary: "Bertanggung jawab atas proses eliminasi konsolidasi entitas anak, pelaporan manajemen bulanan, dan kepatuhan perpajakan berkala.",
      achievements: [
        "Memangkas siklus closing laporan keuangan konsolidasi bulanan dari H+12 menjadi H+5 hari kerja melalui otomasi data pipeline SAP FI.",
        "Menyelaraskan rekonsiliasi akun antar-perusahaan (intercompany balances) senilai ratusan miliar rupiah tanpa selisih menggantung di akhir periode.",
        "Menyusun analisis sensitivitas beban bunga dan fluktuasi nilai tukar untuk presentasi rutin rapat direksi eksekutif."
      ],
      tags: ["Financial Consolidation", "SAP FI/CO", "Intercompany Reconciliation", "Management Reporting"]
    },
    {
      period: "2012 — 2014",
      role: "Audit Associate — Assurance Practice",
      company: "KAP Purwantono, Sungkoro & Surja (EY Indonesia Network)",
      location: "Jakarta",
      summary: "Melakukan pengujian substantif dan prosedur analitis atas saldo akun neraca dan laba rugi klien sektor perbankan dan konsumsi.",
      achievements: [
        "Menjalankan observasi persediaan fisik (stock opname) di 9 pabrik dan gudang sentral dengan deviasi persediaan di bawah batas toleransi materialitas.",
        "Menyusun konfirmasi saldo piutang dan utang bank dengan tingkat respon 98%, mempercepat penyelesaian audit interim."
      ],
      tags: ["Substantive Testing", "Stock Count", "Audit Working Papers", "Vouching & Tracing"]
    }
  ] as ExperienceItem[],

  credentials: [
    {
      type: "certification",
      title: "Certified Public Accountant (CPA Indonesia)",
      issuer: "Institut Akuntan Publik Indonesia (IAPI)",
      registrationNumber: "No. Reg: CPA-2018-04892",
      year: "2018",
      description: "Lisensi tertinggi kompetensi audit independen dan penerbitan laporan auditor publik di Indonesia.",
      statusBadge: "Aktif & Terdaftar"
    },
    {
      type: "certification",
      title: "Chartered Accountant (CA Indonesia)",
      issuer: "Ikatan Akuntan Indonesia (IAI)",
      registrationNumber: "No. Reg: 11.CA-08341",
      year: "2014",
      description: "Sertifikasi profesi akuntan yang diakui secara global sesuai standar International Federation of Accountants (IFAC).",
      statusBadge: "Anggota Utama"
    },
    {
      type: "certification",
      title: "Konsultan Pajak Berizin (BKP Tingkat B)",
      issuer: "Kementerian Keuangan RI & IKPI",
      registrationNumber: "Izin Praktik: KEP-4129/IP.B/2020",
      year: "2020",
      description: "Izin berpraktik resmi menangani wajib pajak badan dalam negeri dan orang pribadi di seluruh wilayah Indonesia.",
      statusBadge: "Izin Resmi DJP"
    },
    {
      type: "certification",
      title: "ASEAN Chartered Professional Accountant (ASEAN CPA)",
      issuer: "ASEAN CPA Coordinating Committee (ACPACC)",
      registrationNumber: "Reg: ASEAN-CPA/ID-001928",
      year: "2021",
      description: "Pengakuan kualifikasi akuntan profesional untuk mobilitas jasa akuntansi di kawasan negara-negara anggota ASEAN.",
      statusBadge: "Regional ASEAN"
    },
    {
      type: "education",
      title: "Magister Akuntansi (M.Ak.)",
      issuer: "Fakultas Ekonomi dan Bisnis — Universitas Indonesia",
      year: "2015 — 2017",
      description: "Konsentrasi Akuntansi Keuangan & Pasar Modal. Lulus dengan predikat Sangat Memuaskan (IPK: 3.84 / 4.00).",
      statusBadge: "S2 Pascasarjana"
    },
    {
      type: "education",
      title: "Sarjana Ekonomi (S.E.) Akuntansi",
      issuer: "Fakultas Ekonomika dan Bisnis — Universitas Gadjah Mada",
      year: "2008 — 2012",
      description: "Lulus dengan predikat Cum Laude (IPK: 3.78 / 4.00). Fokus pada Sistem Pelaporan Korporasi dan Auditing.",
      statusBadge: "S1 Sarjana"
    }
  ] as CredentialItem[],

  toolsAndSoftware: [
    { name: "SAP S/4HANA", category: "ERP & Financial Systems", level: "Mahir (FI/CO Module)" },
    { name: "Accurate Online", category: "Sistem Akuntansi Lokal", level: "Certified Trainer & User" },
    { name: "Xero", category: "Cloud Accounting", level: "Certified Advisor" },
    { name: "Zahir Accounting", category: "Sistem Akuntansi UKM", level: "Implementasi & Integrasi" },
    { name: "MS Excel (Advanced)", category: "Financial Modeling", level: "Power Query, Array Formulas, VBA" },
    { name: "DJP Online & e-Faktur", category: "Tax Compliance Tools", level: "e-Bupot, SPT 1771, Web Faktur" }
  ]
};
