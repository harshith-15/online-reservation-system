document.addEventListener('DOMContentLoaded', function () {
    // Login form
    const loginForm = document.getElementById('loginForm');
    const loginError = document.getElementById('loginError');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Perform basic validation
        if (!username.trim() || !password.trim()) {
            loginError.textContent = 'Please enter both username and password.';
            return;
        }

        // Dummy authentication logic
        if (username === 'admin' && password === 'password') {
            // Redirect to reservation page
            window.location.href = 'reservation.html';
        } else {
            loginError.textContent = 'Invalid username or password.';
        }
    });

    // Reservation form
    

    
});
