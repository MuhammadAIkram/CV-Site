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
        //navigation bar
        const titleEl = document.getElementById("nav-title");
        const welcomeEl = document.getElementById("welcome-text");
        const introEl = document.getElementById("intro-text");
    
        if (titleEl) titleEl.textContent = translations[lang].title;
        if (welcomeEl) welcomeEl.textContent = translations[lang].welcome;
        if (introEl) introEl.textContent = translations[lang].intro;

        //about me section
        const titleAboutME = document.getElementById("about-title");
        const AboutMEName = document.getElementById("about-name");
        const AboutMEEmail = document.getElementById("about-email");
        const AboutMEPhone = document.getElementById("about-phone");
        const AboutMEBirthday = document.getElementById("about-birthday");
        const AboutMEDriving = document.getElementById("about-driving");
        const AboutMEDrivingCat = document.getElementById("about-driving-cat");
        const AboutMEHome = document.getElementById("about-home");
        const AboutMELanguages = document.getElementById("about-languages");
        const AboutMELanguagesEnglish = document.getElementById("about-languages-english");
        const AboutMELanguagesFrench = document.getElementById("about-languages-french");
        const AboutMELanguagesUrdu = document.getElementById("about-languages-urdu");
        const AboutMELanguagesIntroduction = document.getElementById("about-introduction");
        const AboutMELanguagesIntroductionContent = document.getElementById("about-introduction-content");

        if (titleAboutME) titleAboutME.textContent = translations[lang].aboutMeTitle;
        if (AboutMEName) AboutMEName.textContent = translations[lang].aboutMeName;
        if (AboutMEEmail) AboutMEEmail.textContent = translations[lang].aboutMeEmail;
        if (AboutMEPhone) AboutMEPhone.textContent = translations[lang].aboutMePhone;
        if (AboutMEBirthday) AboutMEBirthday.textContent = translations[lang].aboutMeBirthday;
        if (AboutMEDriving) AboutMEDriving.textContent = translations[lang].aboutMeDriving;
        if (AboutMEDrivingCat) AboutMEDrivingCat.textContent = translations[lang].aboutMeDrivingCat;
        if (AboutMEHome) AboutMEHome.textContent = translations[lang].aboutMeHome;
        if (AboutMELanguages) AboutMELanguages.textContent = translations[lang].aboutMeLanguages;
        if (AboutMELanguagesEnglish) AboutMELanguagesEnglish.textContent = translations[lang].aboutMeLanguagesEnglish;
        if (AboutMELanguagesFrench) AboutMELanguagesFrench.textContent = translations[lang].aboutMeLanguagesFrench;
        if (AboutMELanguagesUrdu) AboutMELanguagesUrdu.textContent = translations[lang].aboutMeLanguagesUrdu;
        if (AboutMELanguagesIntroduction) AboutMELanguagesIntroduction.textContent = translations[lang].aboutMeIntroduction;
        if (AboutMELanguagesIntroductionContent) AboutMELanguagesIntroductionContent.textContent = translations[lang].aboutMeIntroductionContent;
    
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