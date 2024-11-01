function showLogin() {
    document.getElementById('login-form').classList.add('active');
    document.getElementById('register-form').classList.remove('active');
    setActiveButton('login');
}

function showRegister() {
    document.getElementById('register-form').classList.add('active');
    document.getElementById('login-form').classList.remove('active');
    setActiveButton('register');
}

function setActiveButton(type) {
    const loginButton = document.querySelector('.toggle-buttons button:nth-child(1)');
    const registerButton = document.querySelector('.toggle-buttons button:nth-child(2)');

    if (type === 'login') {
        loginButton.classList.add('active');
        registerButton.classList.remove('active');
    } else {
        registerButton.classList.add('active');
        loginButton.classList.remove('active');
    }
}

function handleLogin() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Add validation or authentication logic here

    // Redirect to 2web.html after successful login
    console.log("Login successful:", email, password);
    window.location.href = 'index.html'; // Redirect to 2web.html
}

function handleRegister() {
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    // Add validation or registration logic here

    // Redirect to 2web.html after successful registration
    console.log("Registration successful:", email, password);
    window.location.href = 'index.html'; // Redirect to 2web.html
}
