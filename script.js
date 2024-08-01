
document.addEventListener('DOMContentLoaded', () => {
    
    const result = document.getElementById("result");

    const user_input = document.getElementById("inputField");
    const submit = document.getElementById("button");

    submit.adEventListner("click", () => {
        result.textCont = user_input.ariaValueMax;
    });

});

function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Simple validation
    if (username === 'admin' && password === 'password123') {
        alert('Login successful!');
        return true;
    } else {
        errorMessage.textContent = 'Invalid username or password';
        return false;
    }
}