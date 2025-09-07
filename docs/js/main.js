// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  themeToggle.textContent =
    document.documentElement.classList.contains("dark") ? "☀️" : "🌙";
});

// Language Toggle
const langToggle = document.getElementById("language-toggle");
let currentLang = "en";

function applyTranslations(lang) {
  document.getElementById("nav-title").textContent = translations[lang].title;
  document.getElementById("welcome-text").textContent = translations[lang].welcome;
  document.getElementById("intro-text").textContent = translations[lang].intro;
  langToggle.textContent = translations[lang].languageButton;
}

langToggle.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "fr" : "en";
  applyTranslations(currentLang);
});

// Initialize with English
applyTranslations("en");
