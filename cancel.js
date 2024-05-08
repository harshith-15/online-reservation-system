document.addEventListener('DOMContentLoaded', function() {
    var cancelButton = document.getElementById('cance');
    cancelButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        // Redirect to the exit page
        window.location.href = 'exit.html';
    });
});

