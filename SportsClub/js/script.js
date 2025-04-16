document.addEventListener("DOMContentLoaded", () => {
    
    const toggleThemeBtn = document.getElementById("toggleTheme");
    toggleThemeBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });

    const contactForm = document.querySelector(".contact-form");
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you! Your message has been submitted.");
      contactForm.reset();
    });
    
})

$(document).ready(function(){
  
  $("#home-logo").hide().fadeIn(2000);
  
  $(".fade-element").each(function(index) {
      $(this).hide().delay(300 * index).fadeIn(800);
  });
});