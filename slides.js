// SLIDE ENGINE
const slides = [
    {
        title: "Panduan Peraturan Perusahaan",
        subtitle: "Hak, Kewajiban, dan Tata Tertib\nPT Transnovasi Bangun Persada",
        content: `<div class="bg-blue-800 p-8 rounded-lg text-white w-full max-w-md"><h2 class="text-4xl font-bold mb-4">TRANSNOVASI</h2><p class="text-xl opacity-80">Building Excellence Together</p></div>`,
        notes: "Selamat datang di sosialisasi Peraturan Perusahaan (PP). Dokumen ini adalah landasan kita bekerja sama dengan profesional dan harmonis."
    },
    {
        title: "Landasan Hukum PP",
        content: `<ul class="text-left space-y-4 text-lg">
            <li class="flex items-center"><span class="w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center mr-3 font-bold">1</span> UU No. 13 Tahun 2003 tentang Ketenagakerjaan</li>
            <li class="flex items-center"><span class="w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center mr-3 font-bold">2</span> UU No. 6 Tahun 2023 (Cipta Kerja)</li>
            <li class="flex items-center"><span class="w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center mr-3 font-bold">3</span> PP No. 35 Tahun 2021 tentang PKWT & Hubungan Kerja</li>
        </ul>`,
        notes: "PP kita disusun selaras dengan regulasi nasional terbaru untuk memastikan keadilan bagi semua pihak."
    },
    {
        title: "Waktu Kerja & Istirahat",
        content: `<div class="grid grid-cols-2 gap-8 w-full">
            <div class="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h4 class="font-bold text-blue-800 mb-2">Head Office (HO)</h4>
                <p class="text-3xl font-bold">09:00 - 18:00</p>
                <p class="text-gray-500 italic">Senin - Jumat</p>
            </div>
            <div class="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h4 class="font-bold text-blue-800 mb-2">Unit Luar (Polda/Korlantas)</h4>
                <p class="text-3xl font-bold">08:00 - 17:00</p>
                <p class="text-gray-500 italic">Senin - Jumat</p>
            </div>
        </div>
        <p class="mt-6 text-gray-600 italic">Istirahat: 1 Jam per hari (12:00 - 13:00)</p>`,
        notes: "Penting untuk mematuhi jam kerja ini agar koordinasi tim berjalan lancar."
    },
    {
        title: "Upah & Tunjangan",
        content: `<ul class="text-left space-y-4">
            <li class="p-3 bg-blue-50 rounded-lg">📅 <strong>Gajian:</strong> Tanggal 25-27 setiap bulan.</li>
            <li class="p-3 bg-blue-50 rounded-lg">💰 <strong>THR:</strong> Dibayarkan min. 7 hari sebelum Hari Raya.</li>
            <li class="p-3 bg-blue-50 rounded-lg">🏥 <strong>Jaminan:</strong> BPJS Kesehatan & Ketenagakerjaan.</li>
        </ul>`,
        notes: "Perusahaan berkomitmen pada kesejahteraan finansial karyawan tepat waktu."
    },
    {
        title: "Cuti & Izin",
        content: `<div class="flex flex-col items-center">
            <div class="bg-blue-800 text-white p-4 rounded-t-xl w-full">Hak Cuti Tahunan: 12 Hari</div>
            <div class="bg-white border border-t-0 p-6 rounded-b-xl w-full grid grid-cols-2 gap-4 text-sm">
                <div class="border-l-4 border-blue-400 pl-3">Nikah: 3 Hari</div>
                <div class="border-l-4 border-blue-400 pl-3">Duka Cita: 2 Hari</div>
                <div class="border-l-4 border-blue-400 pl-3">Kelahiran/Gugur: 2 Hari</div>
                <div class="border-l-4 border-blue-400 pl-3">Umrah: 9-14 Hari</div>
            </div>
        </div>`,
        notes: "Cuti adalah hak untuk pemulihan dan urusan penting. Pastikan mengajukan izin lewat sistem perusahaan."
    },
    {
        title: "Sistem Pembinaan (Sanksi)",
        content: `<div class="w-full space-y-3">
            <div class="flex items-center bg-yellow-50 p-3 rounded border-l-4 border-yellow-400 text-left">
                <div class="font-bold mr-4 text-xl">SP 1</div> <div>Berlaku 6 bln, Potong Tunjangan 20%</div>
            </div>
            <div class="flex items-center bg-orange-50 p-3 rounded border-l-4 border-orange-400 text-left">
                <div class="font-bold mr-4 text-xl">SP 2</div> <div>Berlaku 6 bln, Potong Tunjangan 50%</div>
            </div>
            <div class="flex items-center bg-red-50 p-3 rounded border-l-4 border-red-400 text-left">
                <div class="font-bold mr-4 text-xl">SP 3</div> <div>Skorsing, Potong Tunjangan 100%</div>
            </div>
        </div>`,
        notes: "Sanksi diberikan bukan untuk menghukum, tapi untuk membina disiplin."
    },
    {
        title: "Kerja Lembur",
        content: `<div class="bg-gray-100 p-8 rounded-full border-4 border-blue-800 w-64 h-64 flex flex-col justify-center items-center">
            <span class="text-4xl font-bold">Max 4 Jam</span>
            <span class="text-sm">per hari</span>
            <div class="h-1 w-20 bg-blue-800 my-2"></div>
            <span class="text-sm">Atas perintah atasan</span>
        </div>`,
        notes: "Lembur harus direncanakan dan disetujui untuk efisiensi biaya dan kesehatan pekerja."
    },
    {
        title: "Pelanggaran Berat",
        content: `<div class="grid grid-cols-2 gap-4 text-sm">
            <div class="bg-red-50 p-3 rounded flex items-center"><svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg> Pencurian / Penipuan</div>
            <div class="bg-red-50 p-3 rounded flex items-center"><svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg> Mabuk di Kantor</div>
            <div class="bg-red-50 p-3 rounded flex items-center"><svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg> Membocorkan Rahasia</div>
            <div class="bg-red-50 p-3 rounded flex items-center"><svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg> Asusila / Perjudian</div>
        </div>
        <p class="mt-6 text-red-600 font-bold uppercase">Sanksi: PHK Seketika</p>`,
        notes: "Zero tolerance untuk pelanggaran berat demi keamanan kerja kita bersama."
    },
    {
        title: "Pemutusan Hubungan Kerja",
        content: `<div class="text-left space-y-4">
            <p>PHK dapat terjadi karena:</p>
            <div class="grid grid-cols-2 gap-4">
                <div class="border p-4 rounded bg-gray-50 font-bold">Masa Pensiun</div>
                <div class="border p-4 rounded bg-gray-50 font-bold">Pengunduran Diri</div>
                <div class="border p-4 rounded bg-gray-50 font-bold">Pelanggaran SP 3</div>
                <div class="border p-4 rounded bg-gray-50 font-bold">Efisiensi / Tutup</div>
            </div>
            <p class="text-sm italic">Hak pesangon diatur sesuai UU Cipta Kerja & PP 35/2021.</p>
        </div>`,
        notes: "Kami berharap hubungan kerja ini langgeng, namun mekanisme PHK tetap harus diatur dengan jelas."
    },
    {
        title: "Keselamatan & Kesehatan Kerja",
        content: `<div class="flex items-center justify-center space-x-12">
            <div class="text-center">
                <div class="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-2 mx-auto"><svg class="w-10 h-10 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg></div>
                <p class="font-bold">Keamanan</p>
            </div>
            <div class="text-center">
                <div class="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-2 mx-auto"><svg class="w-10 h-10 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg></div>
                <p class="font-bold">Kesehatan</p>
            </div>
            <div class="text-center">
                <div class="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-2 mx-auto"><svg class="w-10 h-10 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></div>
                <p class="font-bold">Fasilitas</p>
            </div>
        </div>`,
        notes: "Karyawan wajib menjaga fasilitas kerja dan mengikuti protokol K3 yang ditetapkan."
    },
    {
        title: "Kesimpulan & Penutup",
        content: `<div class="bg-blue-800 p-12 rounded-xl text-white shadow-xl">
            <h2 class="text-3xl font-bold mb-4 italic">"Bekerja Bersama, Sukses Bersama"</h2>
            <p class="mb-8">Mari patuhi peraturan ini demi produktivitas dan harmoni perusahaan.</p>
            <button onclick="switchTab('quiz')" class="bg-white text-blue-800 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg">AMBIL QUIZ PEMAHAMAN</button>
        </div>`,
        notes: "Mari kita tutup sesi ini dan lanjutkan ke pengujian pemahaman."
    }
];

let currentSlide = 0;

function renderSlide() {
    const slide = slides[currentSlide];
    const contentEl = document.getElementById('slide-content');
    
    contentEl.style.opacity = '0';
    
    setTimeout(() => {
        contentEl.innerHTML = `
            <h1 class="text-4xl font-bold text-blue-900 mb-6">${slide.title}</h1>
            ${slide.subtitle ? `<p class="text-xl text-gray-600 mb-8 whitespace-pre-line">${slide.subtitle}</p>` : ''}
            <div class="w-full flex justify-center items-center flex-grow">${slide.content}</div>
        `;
        document.getElementById('slide-number').innerText = `Slide ${currentSlide + 1} dari ${slides.length}`;
        document.getElementById('speaker-notes').innerText = slide.notes;
        contentEl.style.opacity = '1';
    }, 200);
}

function nextSlide() {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        renderSlide();
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        renderSlide();
    }
}