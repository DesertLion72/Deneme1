// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme preference, default to dark
const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    themeIcon.className = theme === 'light' ? 'fas fa-sun' : 'fas fa-moon';
}

// Language toggle functionality
const langToggle = document.getElementById('lang-toggle');
const langText = langToggle.querySelector('span');

// Check for saved language preference, default to Turkish
const savedLang = localStorage.getItem('language') || 'tr';
document.documentElement.setAttribute('lang', savedLang);
updateLanguage(savedLang);

langToggle.addEventListener('click', () => {
    const currentLang = document.documentElement.getAttribute('lang');
    const newLang = currentLang === 'en' ? 'tr' : 'en';
    
    document.documentElement.setAttribute('lang', newLang);
    localStorage.setItem('language', newLang);
    updateLanguage(newLang);
});

function updateLanguage(lang) {
    langText.textContent = lang.toUpperCase();
    
    // Update all translatable elements
    document.querySelectorAll('[data-en]').forEach(element => {
        if (element.hasAttribute('data-' + lang + '-placeholder')) {
            element.placeholder = element.getAttribute('data-' + lang + '-placeholder');
        } else {
            element.textContent = element.getAttribute('data-' + lang);
        }
    });
}

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
        console.log('Form submitted:', formObject);
        
        // Show success message in current language
        const lang = document.documentElement.getAttribute('lang');
        const successMessage = lang === 'en' ? 
            'Thank you for your message! We will get back to you soon.' : 
            'Mesajınız için teşekkürler! En kısa sürede size dönüş yapacağız.';
        
        alert(successMessage);
        this.reset();
    });
}

// Add scroll-based animations
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'var(--background-color)';
    } else {
        header.style.backgroundColor = 'var(--background-color)';
    }
}); 