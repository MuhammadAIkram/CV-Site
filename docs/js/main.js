// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");

function setTheme(isDark) {
    if (isDark) {
        document.documentElement.classList.add('dark');
        themeToggle.textContent = "☀️";
    } else {
        document.documentElement.classList.remove('dark');
        themeToggle.textContent = "🌙";
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Initialize theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    setTheme(true);
} else if (savedTheme === 'light') {
    setTheme(false);
} else {
    // Use system preference if no saved preference
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(systemPrefersDark);
}

themeToggle.addEventListener("click", () => {
    const isDark = !document.documentElement.classList.contains("dark");
    setTheme(isDark);
});

// Language Toggle
const langToggle = document.getElementById("language-toggle");
let currentLang = localStorage.getItem('language') || "en";

function applyTranslations(lang) {
    if (translations[lang]) {
        document.getElementById("nav-title").textContent = translations[lang].title;
        document.getElementById("welcome-text").textContent = translations[lang].welcome;
        document.getElementById("intro-text").textContent = translations[lang].intro;
        langToggle.textContent = translations[lang].languageButton;
    }
}

langToggle.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "fr" : "en";
    applyTranslations(currentLang);
    localStorage.setItem('language', currentLang);
});

// Initialize with saved preferences
applyTranslations(currentLang);

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    // Only apply system theme if user hasn't explicitly set a preference
    if (!localStorage.getItem('theme')) {
        setTheme(e.matches);
    }
});

// Burger Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
    if (mobileMenu.classList.contains("max-h-0")) {
        mobileMenu.classList.remove("max-h-0");
        mobileMenu.classList.add("max-h-40");
    } else {
        mobileMenu.classList.remove("max-h-40");
        mobileMenu.classList.add("max-h-0");
    }
});