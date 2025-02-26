document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (username === '' || password === '') {
            alert('Please fill in both fields.');
            return;
        }
        
        // Simualacion para el login
        if (username === 'admin' && password === 'password') {
            alert('Login successful!');
            } else {
            alert('Invalid username or password.');
        }
    });
});