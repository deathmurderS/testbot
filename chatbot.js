// CHATBOT ENGINE (Gemini Integration) - FIXED VERSION
const chatForm = document.getElementById('chat-form');
const chatHistory = document.getElementById('chat-history');
const userInput = document.getElementById('user-input');
const loading = document.getElementById('loading-indicator');

// ⚠️ GANTI DENGAN API KEY ANDA SENDIRI
const apiKey = "AIzaSyAT6GA4L7Rjm0MBmAUGOQy1OeLKBitwB1w";

// Data PP Knowledge (contoh - sesuaikan dengan data Anda)
const ppKnowledge = `
- Cuti tahunan: 12 hari per tahun
- Jam kerja: Senin-Jumat 08:00-17:00
- Gaji dibayar setiap tanggal 25
- Tunjangan kesehatan tersedia untuk karyawan tetap
`;

chatForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const text = userInput.value.trim();
    if (!text) return;

    // Validasi API Key
    if (apiKey === "PASTE_YOUR_GEMINI_API_KEY_HERE" || !apiKey.startsWith("AIzaSy")) {
        addMessage("❌ ERROR: API Key belum diisi atau tidak valid!", 'bot text-red-500');
        console.error("API Key tidak valid. Dapatkan dari: https://makersuite.google.com/app/apikey");
        return;
    }

    // Add user message
    addMessage(text, 'user');
    userInput.value = '';
    loading.classList.remove('hidden');

    try {
        const response = await fetchGemini(text);
        addMessage(response, 'bot');
    } catch (err) {
        console.error('❌ Chatbot error:', err);
        addMessage(`Maaf, terjadi kesalahan: ${err.message}. Cek console untuk detail.`, 'bot text-red-500');
    } finally {
        loading.classList.add('hidden');
    }
});

function addMessage(text, role) {
    const div = document.createElement('div');
    div.className = `p-4 max-w-[85%] shadow-sm ${role === 'user' ? 'chat-bubble-user self-end' : 'chat-bubble-bot self-start'}`;
    div.innerText = text;
    chatHistory.appendChild(div);
    chatHistory.scrollTop = chatHistory.scrollHeight;
}

async function fetchGemini(query) {
    const systemPrompt = `Anda adalah asisten virtual PT Transnovasi Bangun Persada. Gunakan data berikut untuk menjawab pertanyaan karyawan tentang Peraturan Perusahaan (PP). Jika informasi tidak ada, katakan Anda tidak yakin dan sarankan hubungi HR.
    
DATA PP: ${ppKnowledge}`;
    
    // Gunakan model yang stabil
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
    
    console.log("🔄 Mengirim request ke Gemini API...");
    
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            contents: [{ parts: [{ text: query }] }],
            systemInstruction: { parts: [{ text: systemPrompt }] }
        })
    });
    
    console.log("📡 Response status:", response.status);
    
    if (!response.ok) {
        const errorText = await response.text();
        console.error("❌ API Error Response:", errorText);
        throw new Error(`API error ${response.status}: ${errorText}`);
    }
    
    const result = await response.json();
    console.log("✅ API Response:", result);
    
    if (result.candidates && result.candidates[0]?.content?.parts[0]?.text) {
        return result.candidates[0].content.parts[0].text;
    } else {
        throw new Error('Format response tidak valid dari API');
    }
}