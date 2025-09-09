// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");

function setTheme(isDark) {
  const themeButtons = document.querySelectorAll("#theme-toggle, #theme-toggle-mobile");

  if (isDark) {
      document.documentElement.classList.add("dark");
      themeButtons.forEach(btn => btn.textContent = "☀️");
  } else {
      document.documentElement.classList.remove("dark");
      themeButtons.forEach(btn => btn.textContent = "🌙");
  }

  localStorage.setItem("theme", isDark ? "dark" : "light");
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

// Language Toggle
const langToggle = document.getElementById("language-toggle");
let currentLang = localStorage.getItem('language') || "en";

function applyTranslations(lang) {
  if (translations[lang]) {
      document.getElementById("nav-title").textContent = translations[lang].title;
      document.getElementById("welcome-text").textContent = translations[lang].welcome;
      document.getElementById("intro-text").textContent = translations[lang].intro;

      // update both buttons
      document.querySelectorAll("#language-toggle, #language-toggle-mobile")
          .forEach(btn => btn.textContent = translations[lang].languageButton);
  }
}

// Initialize with saved preferences
applyTranslations(currentLang);

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    // Only apply system theme if user hasn't explicitly set a preference
    if (!localStorage.getItem('theme')) {
        setTheme(e.matches);
    }
});

// Drawer Elements
const menuToggle = document.getElementById("menu-toggle");
const mobileDrawer = document.getElementById("mobile-drawer");
const drawerOverlay = document.getElementById("drawer-overlay");
const closeDrawer = document.getElementById("close-drawer");

function openDrawer() {
    mobileDrawer.classList.remove("-translate-x-full");
    drawerOverlay.classList.remove("hidden");
    setTimeout(() => drawerOverlay.classList.add("opacity-50"), 10);
}

function closeDrawerMenu() {
    mobileDrawer.classList.add("-translate-x-full");
    drawerOverlay.classList.remove("opacity-50");
    setTimeout(() => drawerOverlay.classList.add("hidden"), 300);
}

menuToggle.addEventListener("click", openDrawer);
closeDrawer.addEventListener("click", closeDrawerMenu);
drawerOverlay.addEventListener("click", closeDrawerMenu);

document.querySelectorAll("#language-toggle, #language-toggle-mobile")
    .forEach(btn => btn.addEventListener("click", () => {
        currentLang = currentLang === "en" ? "fr" : "en";
        applyTranslations(currentLang);
        localStorage.setItem('language', currentLang);
    }));

document.querySelectorAll("#theme-toggle, #theme-toggle-mobile")
    .forEach(btn => btn.addEventListener("click", () => {
        const isDark = !document.documentElement.classList.contains("dark");
        setTheme(isDark);
    }));