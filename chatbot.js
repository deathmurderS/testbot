// CHATBOT ENGINE - FIXED (Tidak auto-reload)
const chatForm = document.getElementById('chat-form');
const chatHistory = document.getElementById('chat-history');
const userInput = document.getElementById('user-input');
const loading = document.getElementById('loading-indicator');

const apiKey = "AIzaSyAT6GA4L7Rjm0MBmAUGOQy1OeLKBitwB1w";

const ppKnowledge = `
- Cuti tahunan: 12 hari per tahun
- Jam kerja: Senin-Jumat 08:00-17:00
- Gaji dibayar setiap tanggal 25
`;

// Pastikan form tidak punya action atau method
if (chatForm) {
    chatForm.removeAttribute('action');
    chatForm.removeAttribute('method');
}

chatForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    e.stopPropagation(); // Tambahan: stop event bubbling
    
    const text = userInput.value.trim();
    if (!text) return false; // Return false untuk extra safety
    
    // Validasi API Key
    if (!apiKey || apiKey === "PASTE_YOUR_GEMINI_API_KEY_HERE" || !apiKey.startsWith("AIzaSy")) {
        addMessage("❌ ERROR: API Key belum diisi atau tidak valid!", 'bot text-red-500');
        return false;
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
        addMessage(`Maaf, terjadi kesalahan: ${err.message}`, 'bot text-red-500');
    } finally {
        loading.classList.add('hidden');
    }
    
    return false; // Mencegah form submission default
});

function addMessage(text, role) {
    const div = document.createElement('div');
    div.className = `p-4 max-w-[85%] shadow-sm rounded-lg ${
        role === 'user' 
            ? 'bg-blue-600 text-white ml-auto' 
            : 'bg-gray-200 text-gray-800'
    }`;
    div.innerText = text;
    chatHistory.appendChild(div);
    chatHistory.scrollTop = chatHistory.scrollHeight;
}

async function fetchGemini(query) {
    const systemPrompt = `Anda adalah asisten virtual PT Transnovasi Bangun Persada. Gunakan data berikut untuk menjawab pertanyaan karyawan tentang Peraturan Perusahaan (PP). Jika informasi tidak ada, katakan Anda tidak yakin dan sarankan hubungi HR.
    
DATA PP: ${ppKnowledge}`;
    
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
    
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            contents: [{ parts: [{ text: query }] }],
            systemInstruction: { parts: [{ text: systemPrompt }] }
        })
    });
    
    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`API error ${response.status}`);
    }
    
    const result = await response.json();
    
    if (result.candidates?.[0]?.content?.parts?.[0]?.text) {
        return result.candidates[0].content.parts[0].text;
    } else {
        throw new Error('Format response tidak valid');
    }
}