// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar Background on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Skill Bars Animation
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                bar.style.width = width;
            });
        }
    });
}, observerOptions);

const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    skillObserver.observe(skillsSection);
}

// Typewriter Effect Enhancement
const typewriterText = "MUHAMMAD IZZA RIFKY";
const typewriterElement = document.querySelector('.typewriter');

// Add multiple typing speeds for realism
function typeWriter(text, element, speed = 150) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed + Math.random() * 100);
        }
    }
    
    type();
}

// Start typewriter effect when page loads
window.addEventListener('load', () => {
    setTimeout(() => {
        typeWriter(typewriterText, typewriterElement, 120);
    }, 500);
});

// Add parallax effect to floating leaves
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const leaves = document.querySelectorAll('.leaf');
    
    leaves.forEach((leaf, index) => {
        const speed = 0.5 + (index * 0.1);
        leaf.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.5}deg)`;
    });
});

// Gallery Hover Effect Enhancement
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05) rotate(2deg)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Contact Form Enhancement
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Add loading state
        const submitBtn = contactForm.querySelector('button');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Mengirim...';
        submitBtn.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
            submitBtn.textContent = 'Terkirim!';
            submitBtn.style.background = '#27ae60';
            
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = '';
                contactForm.reset();
            }, 2000);
        }, 1500);
    });
}

// Add scroll reveal animation
const revealElements = document.querySelectorAll('.hobby-card, .gallery-item, .about-content');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    revealObserver.observe(element);
});

// Add dynamic background color change based on scroll
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / maxScroll;
    
    // Change background gradient based on scroll
    const hue = 200 + (scrollPercent * 160);
    document.body.style.setProperty('--bg-hue', hue + 'deg');
});

// Add autumn particles to about and contact sections - UPDATE TERBARU
function createAutumnParticles() {
    const autumnSections = document.querySelectorAll('.autumn-section');
    const particles = ['🍂', '🍁', '🍃', '🌰'];
    
    autumnSections.forEach(section => {
        // Create particle container if not exists
        if (!section.querySelector('.leaves-container')) {
            const particleContainer = document.createElement('div');
            particleContainer.className = 'leaves-container';
            
            // Create random particles
            for (let i = 0; i < 15; i++) {
                const particle = document.createElement('div');
                particle.className = 'autumn-particle';
                particle.textContent = particles[Math.floor(Math.random() * particles.length)];
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 20 + 's';
                particle.style.animationDuration = (15 + Math.random() * 10) + 's';
                particleContainer.appendChild(particle);
            }
            
            section.appendChild(particleContainer);
        }
    });
}

// Initialize autumn particles when DOM is loaded
document.addEventListener('DOMContentLoaded', createAutumnParticles);

// Enhanced scroll effect for autumn sections - UPDATE TERBARU
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const autumnSections = document.querySelectorAll('.autumn-section');
    
    autumnSections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
            const particles = section.querySelectorAll('.autumn-particle');
            particles.forEach((particle, i) => {
                const speed = 0.3 + (i * 0.05);
                particle.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.2}deg)`;
            });
        }
    });
});