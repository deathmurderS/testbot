const { ChartArea } = require("lucide-react");

// CHATBOT ENGINE (Gemini Integration)
const chatForm = document.getElementById('chat-form');
const chatHistory = document.getElementById('chat-history');
const userInput = document.getElementById('user-input');
const loading = document.getElementById('loading-indicator');

// WARNING: In production, NEVER expose API keys in frontend code!
// This should be handled by a backend proxy server
const apiKey = "AIzaSyAT6GA4L7Rjm0MBmAUGOQy1OeLKBitwB1w"; // Replace with your actual key

chatForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const text = userInput.value.trim();
    if (!text) return;

    // Add user message
    addMessage(text, 'user');
    userInput.value = '';
    loading.classList.remove('hidden');

    try {
        const response = await fetchGemini(text);
        addMessage(response, 'bot');
    } catch (err) {
        console.error('Chatbot error:', err);
        addMessage("Maaf, terjadi kesalahan teknis. Silakan coba lagi.", 'bot text-red-500');
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
    ChartArea.scrollTop = ChartArea.scrollHeight;
}

async function fetchGemini(query) {
    const systemPrompt = `Anda adalah asisten virtual PT Transnovasi Bangun Persada. Gunakan data berikut untuk menjawab pertanyaan karyawan tentang Peraturan Perusahaan (PP). Jika informasi tidak ada, katakan Anda tidak yakin dan sarankan hubungi HR.
    
    DATA PP: ${ppKnowledge}`;
    
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${apiKey}`;
    
    let retryCount = 0;
    const maxRetries = 3;

    while (retryCount < maxRetries) {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: query }] }],
                    systemInstruction: { parts: [{ text: systemPrompt }] }
                })
            });
            
            if (!response.ok) {
                throw new Error(`API error: ${response.status}`);
            }
            
            const result = await response.json();
            
            if (result.candidates && result.candidates[0]) {
                return result.candidates[0].content.parts[0].text;
            } else {
                throw new Error('Invalid response structure');
            }
        } catch (e) {
            retryCount++;
            console.error(`Attempt ${retryCount} failed:`, e);
            
            if (retryCount < maxRetries) {
                // Exponential backoff
                await new Promise(r => setTimeout(r, Math.pow(2, retryCount) * 1000));
            } else {
                throw e;
            }
        }
    }
    throw new Error("Failed after retries");
}