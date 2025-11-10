// Animated background stars
function createStars() {
    const starsContainer = document.querySelector('.stars');
    const starCount = 80;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        const size = Math.random() * 2 + 1;
        const duration = Math.random() * 3 + 2;
        const delay = Math.random() * 3;
        
        star.style.cssText = `
            position: fixed;
            width: ${size}px;
            height: ${size}px;
            background: white;
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            opacity: ${Math.random() * 0.5 + 0.3};
            box-shadow: 0 0 ${size * 2}px white;
            animation: twinkle ${duration}s infinite ${delay}s;
            pointer-events: none;
        `;
        starsContainer.appendChild(star);
    }
}

// Show/Hide content sections
function showContent(position) {
    const contentSections = document.querySelectorAll('.content-section');
    contentSections.forEach(section => {
        section.classList.add('hidden');
        section.style.animation = 'none';
    });

    const selectedSection = document.getElementById(position + '-content');
    if (selectedSection) {
        selectedSection.classList.remove('hidden');
        selectedSection.style.animation = 'slideInUp 0.8s ease-out';
        
        // Scroll to content smoothly
        setTimeout(() => {
            selectedSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }
}

// Close content section
function closeContent() {
    const contentSections = document.querySelectorAll('.content-section');
    contentSections.forEach(section => {
        section.classList.add('hidden');
    });
    
    // Scroll back to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Enhanced button hover effects
function initializeButtons() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-6px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
        
        // Ripple effect on click
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: rgba(255, 255, 255, 0.5);
                border-radius: 50%;
                left: ${x}px;
                top: ${y}px;
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// Smooth scroll for navigation links
function initializeNavigation() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// Intersection Observer for animations on scroll
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideInUp 0.8s ease-out forwards';
                entry.target.style.opacity = '1';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe cards and other elements
    document.querySelectorAll('.card, .about-card, .criterion').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
}

// Add parallax effect on mouse move
function initializeParallax() {
    const orbs = document.querySelectorAll('.gradient-orb');
    
    document.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth - e.clientX * 2) / 100;
        const y = (window.innerHeight - e.clientY * 2) / 100;
        
        orbs.forEach((orb, index) => {
            orb.style.transform = `translate(${x * (index + 1)}px, ${y * (index + 1)}px)`;
        });
    });
}

// Add active state to nav links based on scroll position
function initializeNavActiveState() {
    window.addEventListener('scroll', () => {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
    });
}

// Enhanced card animations with stagger
function initializeCardAnimations() {
    const contentGrid = document.querySelector('.content-grid');
    
    if (contentGrid) {
        const cards = contentGrid.querySelectorAll('.card');
        cards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
        });
    }
}

// Text reveal animation
function initializeTextReveal() {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    
    if (heroTitle) {
        const text = heroTitle.innerText;
        heroTitle.innerHTML = '';
        
        text.split('').forEach((char, i) => {
            const span = document.createElement('span');
            span.innerHTML = char === ' ' ? '&nbsp;' : char;
            span.style.cssText = `
                display: inline-block;
                animation: slideInUp 0.8s ease-out ${i * 0.05}s backwards;
            `;
            heroTitle.appendChild(span);
        });
    }
}

// Add scroll-triggered animations for counters or stats
function initializeScrollTriggers() {
    const sections = document.querySelectorAll('.content-section');
    
    sections.forEach(section => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(section);
    });
}

// Keyboard navigation
function initializeKeyboardNav() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeContent();
        }
    });
}

// Page load animations
function initializePageLoad() {
    // Add fade-in animation to body
    document.body.style.animation = 'fadeIn 0.5s ease-out';
    
    // Stagger animations for nav elements
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link, index) => {
        link.style.animationDelay = `${index * 0.1}s`;
    });
}

// Add CSS animations
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes twinkle {
        0%, 100% {
            opacity: 0.3;
        }
        50% {
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Initialize all animations and interactions on page load
window.addEventListener('load', () => {
    createStars();
    initializeButtons();
    initializeNavigation();
    initializeScrollAnimations();
    initializeParallax();
    initializeNavActiveState();
    initializeCardAnimations();
    initializeTextReveal();
    initializeScrollTriggers();
    initializeKeyboardNav();
    initializePageLoad();
});

// Smooth scroll behavior enhancement
if ('scrollBehavior' in document.documentElement.style === false) {
    const scrollBehavior = {
        smooth: (element) => {
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - 100;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };
}

// Add hover depth effect to cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });
});