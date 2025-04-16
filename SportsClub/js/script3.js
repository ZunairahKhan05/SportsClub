document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".Signup-container form");
    
    const toggleThemeBtn = document.getElementById("toggleTheme");
    toggleThemeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    const alertBox = document.getElementById("alertBox");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const firstName = form.querySelector('input[placeholder="First name"]').value.trim();
        const lastName = form.querySelector('input[placeholder="Last name"]').value.trim();
        const email = form.querySelector('input[type="email"]').value.trim();
        const password = form.querySelectorAll('input[type="password"]')[0].value;
        const confirmPassword = form.querySelectorAll('input[type="password"]')[1].value;

        alertBox.innerHTML = "";

        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            showAlert("Please fill in all fields.", "danger");
            return;
        }

        if (password !== confirmPassword) {
            showAlert("Passwords do not match!", "danger");
            return;
        }

        const user = {
            firstName,
            lastName,
            email,
            password
        };

        localStorage.setItem("user", JSON.stringify(user));

        showAlert(`Welcome, ${firstName}! Your account has been created.`, "success");

    
    });

    function showAlert(message, type) {
        const alert = document.createElement("div");
        alert.className = `alert alert-${type} alert-dismissible fade show`;
        alert.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        `;
        alertBox.appendChild(alert);
        
        setTimeout(() => {
            const bsAlert = new bootstrap.Alert(alert);
            bsAlert.close();
        }, 4000);
    }
});