const musicToggle = document.getElementById('musicToggle');
const bgMusic = document.getElementById('bgMusic');
let isPlaying = false;

// safe volume
if (bgMusic) {
    bgMusic.volume = 0.5;
}

// FIX: check if element exists
if (musicToggle) {
    musicToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        if (isPlaying) {
            bgMusic.pause();
            musicToggle.innerHTML = '<span class="music-icon">🎵</span>';
            musicToggle.style.background = 'var(--primary-gold)';
            isPlaying = false;
        } else {
            bgMusic.play()
                .then(function() {
                    musicToggle.innerHTML = '<span class="music-icon">⏸️</span>';
                    musicToggle.style.background = 'var(--maroon)';
                    isPlaying = true;
                })
                .catch(function(error) {
                    console.error('Error playing music:', error);
                });
        }
    });
}

// FIX: better autoplay handling
window.addEventListener("load", () => {
    if (!bgMusic) return;

    bgMusic.play().catch(() => {
        document.addEventListener("click", () => {
            bgMusic.play();
        }, { once: true });
    });
});
