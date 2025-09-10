fetch("about.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("aboutme").innerHTML = html;

    // Re-apply translations AFTER aboutme is loaded
    if (typeof applyTranslations === "function") {
      const lang = localStorage.getItem("language") || "en";
      applyTranslations(lang);
    }

    // Update birthday with age AFTER content is loaded
    if (typeof updateBirthdayWithAge === "function") {
        updateBirthdayWithAge();
    }
  });

fetch("education.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("education").innerHTML = html;

    // Re-apply translations AFTER education is loaded
    if (typeof applyTranslations === "function") {
      const lang = localStorage.getItem("language") || "en";
      applyTranslations(lang);
    }
  });