document.addEventListener('DOMContentLoaded', function () {
    // Registration form
    const regForm = document.getElementById('regForm');
    const regError = document.getElementById('regError'); // Corrected ID
    
    regForm.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const newUsername = document.getElementById('newUsername').value;
        const Password1 = document.getElementById('Password1').value;
        const Password2 = document.getElementById('Password2').value;
        
        // Perform basic validation
        if (!newUsername.trim() || !Password1.trim() || !Password2.trim()) {
            regError.textContent = 'Please enter both username and password.';
            return;
        }
        else if (Password1 !== Password2) {
            regError.textContent = 'Passwords do not match. Please re-enter.';
            return;
        }
        else{
            window.location.href = 'login.html';
        }
        // If both fields are filled, allow the registration action
        // Here you might add additional validation or processing logic if needed
        // For now, let's allow the registration
        regForm.regist(); // Submit the form
    });
});
