document.addEventListener("DOMContentLoaded", () => {
    //
    const toggleThemeBtn = document.getElementById("toggleTheme");
    toggleThemeBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });

    
    //
    const contactForm = document.querySelector(".contact-form");
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you! Your message has been submitted.");
      contactForm.reset();
    });
    
  
})