
function updateCountdown() {
    const weddingDate = new Date('May 14, 2026 12:34:00').getTime();
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

    if (distance < 0) {
        document.getElementById('countdown').innerHTML = '<p style="font-size: 24px; color: var(--primary-gold);">The Big Day is Here! 🎉</p>';
    }
}


setInterval(updateCountdown, 1000);
updateCountdown();


const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});


const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);


document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.event-card, .gallery-item, .about-content, .location-content');
    animateElements.forEach(el => {
        el.classList.add('scroll-animate');
        observer.observe(el);
    });
});


const musicToggle = document.getElementById('musicToggle');
const bgMusic = document.getElementById('bgMusic');
let isPlaying = false;


bgMusic.volume = 0.5;

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


const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
    item.addEventListener('click', () => {

        item.style.transform = 'scale(0.95)';
        setTimeout(() => {
            item.style.transform = 'scale(1)';
        }, 200);
    });
});


window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
    }
});


function preloadImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        const src = img.getAttribute('src');
        if (src) {
            const preloadImg = new Image();
            preloadImg.src = src;
        }
    });
}


window.addEventListener('load', () => {
    preloadImages();
    

    document.querySelector('.hero-content').style.opacity = '1';
    

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('.gallery-item img').forEach(img => {
            imageObserver.observe(img);
        });
    }
});


const floralElements = document.querySelectorAll('.floral-top, .floral-bottom');
floralElements.forEach((element, index) => {
    element.style.animation = `float 3s ease-in-out ${index * 0.5}s infinite`;
});


const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-10px);
        }
    }
`;
document.head.appendChild(style);


let clickCount = 0;
document.querySelector('.couple-names')?.addEventListener('click', () => {
    clickCount++;
    if (clickCount === 3) {
        createConfetti();
        clickCount = 0;
    }
});

function createConfetti() {
    const colors = ['#D4AF37', '#800020', '#FFF8E7'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.opacity = '1';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';
        confetti.style.borderRadius = '50%';
        
        document.body.appendChild(confetti);
        
        const duration = Math.random() * 3 + 2;
        const xMovement = (Math.random() - 0.5) * 200;
        
        confetti.animate([
            { transform: 'translateY(0) translateX(0) rotate(0deg)', opacity: 1 },
            { transform: `translateY(${window.innerHeight}px) translateX(${xMovement}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
        ], {
            duration: duration * 1000,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });
        
        setTimeout(() => {
            confetti.remove();
        }, duration * 1000);
    }
}


function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}


const debouncedScroll = debounce(() => {

}, 10);

window.addEventListener('scroll', debouncedScroll);
window.addEventListener("load", () => {
    const music = document.getElementById("bgMusic");

    // try autoplay
    music.play().catch(() => {
        // if blocked, wait for user interaction
        document.addEventListener("click", () => {
            music.play();
        }, { once: true });
    });
});
