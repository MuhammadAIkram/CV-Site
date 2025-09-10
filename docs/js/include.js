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

fetch("experience.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("experience").innerHTML = html;

    // Re-apply translations AFTER experience is loaded
    if (typeof applyTranslations === "function") {
      const lang = localStorage.getItem("language") || "en";
      applyTranslations(lang);
    }

    const openBtn = document.getElementById("open-modal");
    const modal = document.getElementById("modal");
    const closeBtn = document.getElementById("close-modal");

    if (openBtn && modal && closeBtn) {
      const overlay = modal.querySelector("div.fixed.inset-0.bg-black");

      openBtn.addEventListener("click", () => {
        modal.classList.remove("hidden");
        modal.classList.add("flex");
        document.body.classList.add("modal-open");
      });

      closeBtn.addEventListener("click", () => {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
        document.body.classList.remove("modal-open");
      });

      overlay.addEventListener("click", () => {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
        document.body.classList.remove("modal-open");
      });
    }
  });

