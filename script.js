// Greeting popup
window.onload = function () {
    setTimeout(() => {
        alert("🏀 Welcome to Ulster Sports Club! Get ready to play hard and dream big!");
    }, 700);
};

// Fade-in on scroll using Intersection Observer
const faders = document.querySelectorAll('.fade-in');
const options = {
    threshold: 0.2,
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, options);

faders.forEach(section => {
    observer.observe(section);
});
