document.addEventListener('DOMContentLoaded', function() {
    var cancelBtn = document.getElementById('cance');
    var inputField = document.getElementById('pnr-number');
    var popup = document.getElementById("popup");
    var closeBtn = document.getElementsByClassName("close")[0];

    // Function to display the popup
    function displayPopup() {
        popup.style.display = "block";
    }

    // Function to hide the popup
    function hidePopup() {
        popup.style.display = "none";
        inputField.value = "";
    }
    function res(){
        window.location.href="reservation.html";
    }
    let rs=document.querySelector('#popup');
    rs.addEventListener('click',res);
    
    cancelBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        // Check if PNR number field is filled
        if (inputField.value.trim() !== '') {
            displayPopup();
        }
    });
    // Event listener for the cancel button
    
    // Event listener for the close button
    closeBtn.addEventListener('click', function() {
        hidePopup();
    });

    // Event listener to hide the popup when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target == popup) {
            hidePopup();
        }
    });
});



