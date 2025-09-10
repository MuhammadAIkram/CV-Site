document.addEventListener("DOMContentLoaded", () => {
    const openModal = document.getElementById("open-modal");
    const closeModal = document.getElementById("close-modal");
    const modal = document.getElementById("modal");
  
    if (openModal && closeModal && modal) {
      // Open modal
      openModal.addEventListener("click", () => {
        modal.classList.remove("hidden");
        modal.classList.add("flex");
      });
  
      // Close modal (button)
      closeModal.addEventListener("click", () => {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
      });
  
      // Close modal when clicking outside content
      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          modal.classList.add("hidden");
          modal.classList.remove("flex");
        }
      });
    }
  });
  