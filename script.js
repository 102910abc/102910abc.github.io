const userData = {
    username: 'user1',
    password: 'password123'
};

function login() {
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    if (usernameInput === userData.username && passwordInput === userData.password) {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('welcome-message').style.display = 'block';
        document.getElementById('user').innerText = usernameInput;
    } else {
        alert('Invalid username or password');
    }
}

function logout() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('welcome-message').style.display = 'none';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}