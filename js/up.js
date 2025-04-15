document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    // Create alert container
    const alertBox = document.createElement("div");
    alertBox.classList.add("mt-3");
    form.parentElement.appendChild(alertBox);

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const firstName = form.querySelector('input[placeholder="First name"]').value.trim();
        const lastName = form.querySelector('input[placeholder="Last name"]').value.trim();
        const email = form.querySelector('input[type="email"]').value.trim();
        const password = form.querySelectorAll('input[type="password"]')[0].value;
        const confirmPassword = form.querySelectorAll('input[type="password"]')[1].value;

        // Clear previous alerts
        alertBox.innerHTML = "";

        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            showAlert("Please fill in all fields.", "danger");
            return;
        }

        if (password !== confirmPassword) {
            showAlert("Passwords do not match!", "danger");
            return;
        }

        // Save data in localStorage
        const user = {
            firstName,
            lastName,
            email,
            password
        };

        localStorage.setItem("user", JSON.stringify(user));

        showAlert(`Welcome, ${firstName}! Your account has been created.`, "success");

        // Optional: redirect after a short delay
        // setTimeout(() => window.location.href = "signin.html", 2000);
    });

    function showAlert(message, type) {
        const alert = document.createElement("div");
        alert.className = `alert alert-${type}`;
        alert.textContent = message;
        alertBox.appendChild(alert);
        setTimeout(() => alert.remove(), 4000);

    }
});
