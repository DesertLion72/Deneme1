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

// Language switching functionality
let currentLanguage = 'en';

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'tr' : 'en';
    updateLanguage();
    updateLanguageButton();
}

function updateLanguage() {
    // Update all elements with data-en and data-tr attributes
    document.querySelectorAll('[data-en]').forEach(element => {
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = element.getAttribute(`data-${currentLanguage}-placeholder`);
        } else {
            element.textContent = element.getAttribute(`data-${currentLanguage}`);
        }
    });
}

function updateLanguageButton() {
    const langText = document.querySelector('.lang-text');
    langText.textContent = currentLanguage === 'en' ? 'TR' : 'EN';
} 