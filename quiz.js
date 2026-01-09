// QUIZ ENGINE
let quizState = { current: 0, score: 0 };

function startQuiz() {
    document.getElementById('quiz-intro').classList.add('hidden');
    document.getElementById('quiz-container').classList.remove('hidden');
    quizState = { current: 0, score: 0 }; // Reset state
    renderQuestion();
}

function renderQuestion() {
    const q = quizQuestions[quizState.current];
    document.getElementById('quiz-progress').innerText = `Soal ${quizState.current + 1} dari ${quizQuestions.length}`;
    document.getElementById('quiz-bar').style.width = `${((quizState.current + 1) / quizQuestions.length) * 100}%`;
    document.getElementById('quiz-question').innerText = q.q;
    document.getElementById('quiz-score-display').innerText = `Skor: ${quizState.score}`;
    
    const optionsEl = document.getElementById('quiz-options');
    optionsEl.innerHTML = '';
    
    q.a.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = "w-full text-left p-4 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition font-medium";
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(idx);
        optionsEl.appendChild(btn);
    });
    
    document.getElementById('quiz-feedback').classList.add('hidden');
}

function checkAnswer(idx) {
    const q = quizQuestions[quizState.current];
    const feedback = document.getElementById('quiz-feedback');
    const options = document.getElementById('quiz-options').children;

    // Disable buttons
    for (let b of options) {
        b.disabled = true;
        b.classList.add('cursor-not-allowed', 'opacity-60');
    }

    feedback.classList.remove('hidden');
    
    if (idx === q.correct) {
        quizState.score++;
        feedback.className = "mt-8 p-4 rounded-lg bg-green-100 text-green-800 font-bold border border-green-200";
        feedback.innerHTML = "✅ Benar! Bagus sekali.";
        options[idx].classList.add('border-green-500', 'bg-green-50', '!opacity-100');
    } else {
        feedback.className = "mt-8 p-4 rounded-lg bg-red-100 text-red-800 border border-red-200";
        feedback.innerHTML = `❌ Salah. Jawaban yang benar adalah: <strong>${q.a[q.correct]}</strong>.<br><small class="mt-2 block italic">Hint: ${q.hint}</small>`;
        options[idx].classList.add('border-red-500', 'bg-red-50', '!opacity-100');
        options[q.correct].classList.add('border-green-500', 'bg-green-50', '!opacity-100');
    }

    setTimeout(() => {
        if (quizState.current < quizQuestions.length - 1) {
            quizState.current++;
            renderQuestion();
        } else {
            finishQuiz();
        }
    }, 2000);
}

function finishQuiz() {
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('quiz-result').classList.remove('hidden');
    
    const score = quizState.score;
    const total = quizQuestions.length;
    const percentage = (score / total) * 100;
    
    document.getElementById('final-score-text').innerText = `Skor Akhir Anda: ${score} dari ${total} (${percentage.toFixed(0)}%)`;
    
    // Optional: Change icon based on score
    const resultIcon = document.querySelector('#quiz-result svg');
    if (percentage < 60) {
        resultIcon.parentElement.classList.remove('bg-green-100', 'text-green-600');
        resultIcon.parentElement.classList.add('bg-orange-100', 'text-orange-600');
    }
}