
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    // Add a container for alerts
    const alertBox = document.createElement("div");
    alertBox.classList.add("mt-3");
    form.parentElement.appendChild(alertBox);

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent default form submission

        const emailInput = form.querySelector('input[type="email"]');
        const passwordInput = form.querySelector('input[type="password"]');

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Clear any existing alerts
        alertBox.innerHTML = "";

        // Fetch user data from localStorage
        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (!storedUser) {
            showAlert("No user data found. Please sign up first.", "danger");
            return;
        }

        // Check credentials
        if (email === storedUser.email && password === storedUser.password) {
            showAlert(`✅ Login successful! Welcome back, ${storedUser.firstName}.`, "success");
            // window.location.href = "dashboard.html";
        } else {
            showAlert("❌ Invalid email or password. Please try again.", "danger");
        }
    });

    function showAlert(message, type) {
        const alert = document.createElement("div");
        alert.className = `alert alert-${type}`;
        alert.textContent = message;
        alertBox.appendChild(alert);
        setTimeout(() => alert.remove(), 4000);
    }
});

