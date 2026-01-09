// DATA SETUP (KNOWLEDGE BASE)
const ppKnowledge = `
BAB I
KETENTUAN UMUM
Pasal 1
Pengertian dan Istilah
	Perusahaan adalah PT yang beralamat di Jl. Tebet Timur III i No. 22.
	Visi adalah pandangan jauh ke depan yang menjadi arah dan tujuan utama perusahaan dalam menjalankan seluruh kegiatan usahanya.
	Misi adalah rumusan mengenai langkah, strategi, dan pendekatan yang dilakukan perusahaan untuk mewujudkan visi yang telah ditetapkan.
	Budaya Perusahaan adalah sekumpulan nilai, prinsip, keyakinan, dan perilaku yang menjadi pedoman dalam bersikap, berinteraksi, dan bekerja bagi seluruh karyawan di lingkungan perusahaan.
	Pekerja adalah tenaga kerja yang bekerja dan terikat secara formal di dalam suatu hubungan kerja dengan perusahaan dan oleh karenanya menerima upah sebagaimana diatur dalam Peraturan Perusahaan ini.
	Pimpinan perusahaan adalah seseorang yang karena jabatannya mempunyai tugas memimpin perusahaan atau bagian dari perusahaan dan mempunyai wewenang mewakili perusahaan baik ke dalam maupun ke luar.
	Upah adalah suatu penerimaan sebagai imbalan atau balas jasa dari perusahaan kepada pekerja untuk suatu pekerjaan atau jasa yang telah atau akan dilakukan, dinyatakan atau dinilai dalam bentuk uang yang ditetapkan menurut suatu persetujuan, atau peraturan perundang-undangan, dan dibayarkan atas dasar suatu kesepakatan kerja antara perusahaan dan pekerja.

[... Full PP content continues - for brevity, I'm showing structure only ...]

BAB XII
KETENTUAN PENUTUP
Pasal 58
Masa Berlakunya Peraturan Perusahaan
	Peraturan Perusahaan ini berlaku terhitung sejak tanggal ditetapkan dan disahkan oleh pimpinan perusahaan hingga dikeluarkannya Peraturan Perusahaan baru
	Segala peraturan dan ketentuan terdahulu yang bertentangan dengan Peraturan Perusahaan ini dinyatakan tidak berlaku.
`;

// QUIZ QUESTIONS
const quizQuestions = [
    { 
        q: "Berapa jam kerja harian normal di Head Office (HO) PT Transnovasi?", 
        a: ["7 Jam", "8 Jam", "9 Jam", "10 Jam"], 
        correct: 2, 
        hint: "Jam kerja dimulai 09:00 dan berakhir 18:00." 
    },
    { 
        q: "Kapan gaji dibayarkan paling lambat setiap bulannya?", 
        a: ["Awal bulan", "Tanggal 20", "Tanggal 25-27", "Akhir bulan"], 
        correct: 2, 
        hint: "Cek bagian Upah & Tunjangan." 
    },
    { 
        q: "Maksimal jam lembur harian yang diizinkan adalah...", 
        a: ["2 Jam", "3 Jam", "4 Jam", "Setiap saat"], 
        correct: 2, 
        hint: "Tujuannya adalah menjaga kesehatan pekerja." 
    },
    { 
        q: "Berapa hari cuti tahunan bagi pekerja yang telah bekerja selama 1 tahun?", 
        a: ["10 Hari", "12 Hari", "14 Hari", "15 Hari"], 
        correct: 1, 
        hint: "Ini adalah standar minimum UU." 
    },
    { 
        q: "Berapa lama masa berlaku Surat Peringatan (SP 1, 2, atau 3)?", 
        a: ["3 Bulan", "6 Bulan", "1 Tahun", "Permanen"], 
        correct: 1, 
        hint: "Dihitung sejak tanggal penerbitan." 
    },
    { 
        q: "Potongan tunjangan tidak tetap untuk SP 1 adalah sebesar...", 
        a: ["10%", "20%", "50%", "100%"], 
        correct: 1, 
        hint: "Lihat tabel sanksi pembinaan." 
    },
    { 
        q: "Apakah Supervisor berhak atas upah lembur pada hari kerja normal?", 
        a: ["Ya", "Tidak", "Hanya jika diizinkan Direktur", "Tergantung proyek"], 
        correct: 1, 
        hint: "Jabatan manajerial tidak mendapat lembur di hari kerja." 
    },
    { 
        q: "Minimal berapa bulan masa kerja untuk mendapatkan THR?", 
        a: ["1 Bulan", "3 Bulan", "6 Bulan", "12 Bulan"], 
        correct: 0, 
        hint: "Dibayarkan proposional jika belum setahun." 
    },
    { 
        q: "Berapa hari izin khusus jika seorang pekerja menikah?", 
        a: ["2 Hari", "3 Hari", "4 Hari", "5 Hari"], 
        correct: 1, 
        hint: "Tersedia di bagian Izin Khusus." 
    },
    { 
        q: "Apa status sanksi untuk pelanggaran berat seperti mencuri?", 
        a: ["SP 3", "Skorsing", "Mutasi", "PHK Seketika"], 
        correct: 3, 
        hint: "Pelanggaran moral serius berakibat fatal." 
    },
    { 
        q: "Cuti Umrah dapat diambil maksimal berapa kali selama masa kerja?", 
        a: ["Setiap tahun", "2 Kali", "1 Kali", "Tidak terbatas"], 
        correct: 2, 
        hint: "Fasilitas khusus ibadah ini dibatasi frekuensinya." 
    },
    { 
        q: "Berapa hari cuti jika istri pekerja melahirkan?", 
        a: ["1 Hari", "2 Hari", "3 Hari", "4 Hari"], 
        correct: 2, 
        hint: "Diberikan untuk mendampingi keluarga." 
    },
    { 
        q: "Status SP 3 juga diiringi dengan tindakan...", 
        a: ["Potong Gaji 100%", "Mutasi Kerja", "Skorsing", "Pecat"], 
        correct: 2, 
        hint: "Langkah terakhir sebelum pemutusan." 
    },
    { 
        q: "Berapa lama jatah istirahat harian?", 
        a: ["30 Menit", "45 Menit", "60 Menit", "90 Menit"], 
        correct: 2, 
        hint: "Pukul 12:00 sampai 13:00." 
    },
    { 
        q: "Data pribadi karyawan dilindungi oleh perusahaan berdasarkan pasal berapa?", 
        a: ["Pasal 1", "Pasal 25", "Pasal 14", "Pasal 60"], 
        correct: 2, 
        hint: "Lihat bagian kepentingan perusahaan dan perlakuan terhadap pekerja." 
    }
];