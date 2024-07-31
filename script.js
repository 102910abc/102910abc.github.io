function login() {
    document.getElementById('login-btn').style.display = 'none';
    document.getElementById('logout-btn').style.display = 'inline-block';
    alert('Logged in!');
}

function logout() {
    document.getElementById('logout-btn').style.display = 'none';
    document.getElementById('login-btn').style.display = 'inline-block';
    alert('Logged out!');
}