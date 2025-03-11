function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");

    // Simple hardcoded credentials (Replace with real authentication later)
    const validEmail = "user@example.com";
    const validPassword = "password123";

    if (email === validEmail && password === validPassword) {
        // Store authentication flag in localStorage
        localStorage.setItem("isAuthenticated", "true");

        // Redirect to main page
        window.location.href = "index.html";
    } else {
        errorMessage.textContent = "Invalid email or password!";
    }
}
