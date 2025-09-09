fetch("about.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("content").innerHTML = html;

    // Re-apply translations AFTER content is loaded
    if (typeof applyTranslations === "function") {
      const lang = localStorage.getItem("language") || "en";
      applyTranslations(lang);
    }
  });