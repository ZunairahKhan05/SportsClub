document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".Signin-container form"); 
    
    
    const toggleThemeBtn = document.getElementById("toggleTheme");
    toggleThemeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    
    const alertBox = document.createElement("div");
    alertBox.classList.add("mt-3");
    form.parentElement.appendChild(alertBox); 

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const emailInput = form.querySelector('input[type="email"]');
        const passwordInput = form.querySelector('input[type="password"]');
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        alertBox.innerHTML = "";

        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (!storedUser) {
            showAlert("No user data found. Please sign up first.", "danger");
            return;
        }

        if (email === storedUser.email && password === storedUser.password) {
            showAlert(`✅ Login successful! Welcome back, ${storedUser.firstName}.`, "success");
        } else {
            showAlert("❌ Invalid email or password. Please try again.", "danger");
        }
    });

    function showAlert(message, type) {
        const alert = document.createElement("div");
        alert.className = `alert alert-${type}`; 
        alert.innerHTML = `
            <div class="d-flex align-items-center">
                <span>${message}</span>
            </div>
        `;
        alertBox.appendChild(alert);
        setTimeout(() => alert.remove(), 4000);
    }
});