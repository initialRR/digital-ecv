// ==========================================
// 1. DATA PROJEK TERSTRUKTUR
// ==========================================
const projectsData = [
  {
    id: "01",
    num: "#01 / 03",
    title: "Sistem Manajemen Absensi Sekolah",
    category: "webapps",
    categoryLabel: "Web App",
    desc: "Aplikasi manajemen absensi terpadu dengan autentikasi multi-peran (Admin, Petugas Absen Keliling, Guru/Wali Rayon) untuk pencatatan kehadiran presisi.",
    tags: ["HTML5", "Tailwind CSS", "JavaScript", "JSON Data"],
    features: [
      "Role-based Access Control (Admin, Petugas Absen, Guru/Rayon)",
      "Pencatatan kehadiran presisi & rekap data otomatis",
      "Penyimpanan & manipulasi struktur data berbasis JSON",
      "Antarmuka responsif ramah operasional smartphone di lapangan"
    ],
    techStack: "HTML5, Tailwind CSS, JavaScript Vanilla, Local / JSON Data",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "02",
    num: "#02 / 03",
    title: "Interactive Story & Anniversary Showcase",
    category: "tools",
    categoryLabel: "Interactive UI",
    desc: "Platform personal web interaktif dengan timeline memori dinamis, countdown counter presisi, galeri foto, dan transisi smooth reveal.",
    tags: ["JavaScript", "Tailwind CSS", "CSS Transitions"],
    features: [
      "Smooth scroll-triggered visual animations",
      "Anniversary live-time counter berakurasi tinggi",
      "Interactive memory modal & dynamic photo feed",
      "Ringan tanpa ketergantungan library animasi berat"
    ],
    techStack: "HTML5, Tailwind CSS, JavaScript DOM Manipulation",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "03",
    num: "#03 / 03",
    title: "Generator Surat Tugas & Dokumen TU",
    category: "tools",
    categoryLabel: "Productivity Tool",
    desc: "Aplikasi template generator dokumen dinamis untuk mempercepat pembuatan surat tugas, undangan, dan surat dinas resmi kantor TU secara otomatis.",
    tags: ["JavaScript", "Document Automation", "Tailwind CSS"],
    features: [
      "Template generator dokumen dinamis siap cetak",
      "Format dokumen baku sesuai standar administrasi instansi",
      "Live preview sebelum proses download atau print dokumen",
      "Form input terstruktur memangkas waktu kerja manual"
    ],
    techStack: "JavaScript DOM, Tailwind CSS, Print CSS Utility",
    demoUrl: "#",
    githubUrl: "#"
  }
];

// ==========================================
// 2. DATA KHS OTENTIK BSI KAMPUS BANYUMAS
// ==========================================
const khsData = {
  1: {
    ips: "3.78",
    sks: 18,
    pdfUrl: "docs/khs/KHS_SMT1.pdf",
    courses: [
      { code: "101", name: "Pendidikan Pancasila", sks: 2, grade: "A" },
      { code: "104", name: "Bahasa Inggris I", sks: 2, grade: "A" },
      { code: "153", name: "Pengantar Teknologi Informasi dan Komunikasi", sks: 3, grade: "A" },
      { code: "207", name: "Logika dan Algoritma", sks: 4, grade: "B" },
      { code: "712", name: "Entrepreneurship", sks: 3, grade: "A" },
      { code: "894", name: "Dasar Pemrograman", sks: 4, grade: "A" }
    ]
  },
  2: {
    ips: "3.68",
    sks: 19,
    pdfUrl: "docs/khs/KHS_SMT2.pdf",
    courses: [
      { code: "0511", name: "Algoritma Data Science", sks: 3, grade: "A" },
      { code: "0515", name: "Konsep Basis Data", sks: 3, grade: "C" },
      { code: "0521", name: "UI/UX Design", sks: 3, grade: "A" },
      { code: "0610", name: "Web Programming I", sks: 3, grade: "A" },
      { code: "105", name: "Bahasa Inggris II", sks: 2, grade: "A" },
      { code: "106", name: "Pendidikan Kewarganegaraan", sks: 2, grade: "A" },
      { code: "694", name: "Aplikasi Basis Data", sks: 3, grade: "A" }
    ]
  },
  3: {
    ips: "4.00",
    sks: 23,
    pdfUrl: "docs/khs/KHS_SMT3.pdf",
    courses: [
      { code: "0367", name: "Metodologi Penelitian", sks: 3, grade: "A" },
      { code: "0405", name: "Keamanan Basis Data", sks: 3, grade: "A" },
      { code: "0406", name: "Fundamental Data Analyst", sks: 3, grade: "A" },
      { code: "0407", name: "Web Programming II", sks: 3, grade: "A" },
      { code: "154", name: "Character Building", sks: 3, grade: "A" },
      { code: "240", name: "Sistem Informasi Manajemen", sks: 3, grade: "A" },
      { code: "253", name: "Bahasa Indonesia", sks: 2, grade: "A" },
      { code: "700", name: "Statistika", sks: 3, grade: "A" }
    ]
  },
  4: {
    ips: "3.74",
    sks: 23,
    pdfUrl: "docs/khs/KHS_SMT4.pdf",
    courses: [
      { code: "0009", name: "Manajemen Proyek Sistem Informasi", sks: 3, grade: "C" },
      { code: "0684", name: "Pemodelan Sistem Informasi", sks: 3, grade: "A" },
      { code: "0685", name: "Business Intelligence", sks: 3, grade: "A" },
      { code: "0686", name: "Perancangan Sistem Informasi", sks: 3, grade: "A" },
      { code: "0687", name: "Software Quality Assurance", sks: 3, grade: "A" },
      { code: "0688", name: "Web Programming III", sks: 3, grade: "A" },
      { code: "102", name: "Pendidikan Agama", sks: 2, grade: "A" },
      { code: "912", name: "Mobile Programming", sks: 3, grade: "A" }
    ]
  }
};