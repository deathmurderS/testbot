// NAVIGATION ENGINE
function switchTab(tab) {
    // Hide all sections
    document.querySelectorAll('section').forEach(s => s.classList.add('hidden'));
    
    // Reset all tab styles
    document.querySelectorAll('nav button').forEach(b => {
        b.classList.remove('active-tab', 'text-blue-800');
        b.classList.add('text-gray-500');
    });
    
    // Show selected section
    document.getElementById(`section-${tab}`).classList.remove('hidden');
    
    // Activate selected tab
    const activeTab = document.getElementById(`tab-${tab}`);
    activeTab.classList.add('active-tab', 'text-blue-800');
    activeTab.classList.remove('text-gray-500');
    
    // Special handling for presentation tab
    if (tab === 'presentation') {
        renderSlide();
    }
}

// Keyboard navigation for slides
document.addEventListener('keydown', (e) => {
    const activeSection = document.getElementById('section-presentation');
    if (!activeSection.classList.contains('hidden')) {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            e.preventDefault();
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            prevSlide();
        }
    }
});

// Initialize application
window.onload = function() {
    renderSlide();
    console.log('PT Transnovasi PP Training Application Loaded');
    console.log('Total Slides:', slides.length);
    console.log('Total Quiz Questions:', quizQuestions.length);
};

// Error handling for the entire application
window.addEventListener('error', function(e) {
    console.error('Application error:', e.error);
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection:', e.reason);
});