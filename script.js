// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        // Here you would typically send the form data to a server
        // For now, we'll just show a success message
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}

// Add scroll-based animations
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.product-card, .feature');
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        if(position.top < window.innerHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});

// Initialize elements with initial styles
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.product-card, .feature');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
});

// Language and theme state management
let currentLang = 'en';
let currentTheme = 'light';

// DOM Elements
const htmlElement = document.documentElement;
const themeBtn = document.querySelector('.theme-btn');
const langBtn = document.querySelector('.lang-btn');

// Language translations
const translations = {
    en: {
        'nav-home': 'Home',
        'nav-products': 'Products',
        'nav-about': 'About',
        'nav-contact': 'Contact',
        'hero-title': 'Welcome to Our Store',
        'hero-subtitle': 'Discover amazing products at great prices',
        'products-title': 'Our Products',
        'about-title': 'About Us',
        'about-text': 'We are dedicated to providing the best products and service to our customers.',
        'contact-title': 'Contact Us',
        'contact-name': 'Name',
        'contact-email': 'Email',
        'contact-message': 'Message',
        'contact-send': 'Send Message',
        'footer-text': '© 2024 Your Store. All rights reserved.'
    },
    tr: {
        'nav-home': 'Ana Sayfa',
        'nav-products': 'Ürünler',
        'nav-about': 'Hakkımızda',
        'nav-contact': 'İletişim',
        'hero-title': 'Mağazamıza Hoş Geldiniz',
        'hero-subtitle': 'Harika ürünleri uygun fiyatlarla keşfedin',
        'products-title': 'Ürünlerimiz',
        'about-title': 'Hakkımızda',
        'about-text': 'Müşterilerimize en iyi ürün ve hizmeti sunmaya kendimizi adadık.',
        'contact-title': 'İletişim',
        'contact-name': 'İsim',
        'contact-email': 'E-posta',
        'contact-message': 'Mesaj',
        'contact-send': 'Mesaj Gönder',
        'footer-text': '© 2024 Mağazanız. Tüm hakları saklıdır.'
    }
};

// Theme toggle functionality
function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    htmlElement.setAttribute('data-theme', currentTheme);
    themeBtn.textContent = currentTheme === 'light' ? '🌙' : '☀️';
    localStorage.setItem('theme', currentTheme);
}

// Language switch functionality
function switchLanguage() {
    currentLang = currentLang === 'en' ? 'tr' : 'en';
    langBtn.textContent = currentLang.toUpperCase();
    updateContent();
    localStorage.setItem('lang', currentLang);
}

// Update content based on selected language
function updateContent() {
    document.querySelectorAll('[data-en]').forEach(element => {
        const key = element.getAttribute('data-en');
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });
}

// Initialize theme and language from localStorage
function initializeState() {
    const savedTheme = localStorage.getItem('theme');
    const savedLang = localStorage.getItem('lang');
    
    if (savedTheme) {
        currentTheme = savedTheme;
        htmlElement.setAttribute('data-theme', currentTheme);
        themeBtn.textContent = currentTheme === 'light' ? '🌙' : '☀️';
    }
    
    if (savedLang) {
        currentLang = savedLang;
        langBtn.textContent = currentLang.toUpperCase();
        updateContent();
    }
}

// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Event Listeners
themeBtn.addEventListener('click', toggleTheme);
langBtn.addEventListener('click', switchLanguage);

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    initializeState();
}); 