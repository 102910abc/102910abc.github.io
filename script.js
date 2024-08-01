document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (validateUsername(username) && validatePassword(password)) {
        errorMessage.textContent = '';
        window.location.href = 'index.html';
        
    } else {
        errorMessage.textContent = 'Invalid username or password.';
    }
});

function validateUsername(username) {

    return username === "Michael"
}

function validatePassword(password) {
    return password === "notobviouspassword"
}
