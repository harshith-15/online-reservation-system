document.addEventListener('DOMContentLoaded', function () {
    // Retrieve the generated PNR from the URL parameter
    var urlParams = new URLSearchParams(window.location.search);
    var generatedPNR = urlParams.get('generatedPNR');

    // Display the PNR message if a PNR is generated
    if (generatedPNR) {
        // Display the PNR message
        var pnrMessage = document.getElementById('pnr-message');
        var pnrNumber = document.getElementById('pnr-number');
        pnrNumber.textContent = generatedPNR;
        pnrMessage.classList.remove('hidden');
    }

    var infoCardsDiv = document.getElementById('ticket-details');

    // Retrieve form data from session storage
    var formData = JSON.parse(sessionStorage.getItem('formData'));

    if (formData) {
        // Create card HTML with form data
        var cardHTML = '<div class="card">';
        cardHTML += '<p>From: ' + formData.origin + '</p>';
        cardHTML += '<p>To: ' + formData.destination + '</p>';
        cardHTML += '<p>JourneyDate: ' + formData.departureDate + '</p>';
        cardHTML += '<p>Number of seats: ' + formData.passengers + '</p>';
        cardHTML += '<p>Class: ' + formData.tclass + '</p>'; // Fixed property name
        cardHTML += '</div>';

        // Display the card
        infoCardsDiv.innerHTML = cardHTML;
    } else {
        // No form data found
        infoCardsDiv.innerHTML = '<p>No information available.</p>';
    }

    document.getElementById('cancel').addEventListener('click', function () {
        window.location.href = 'cancel.html';
        // Implement cancel functionality here
    });

    document.getElementById('backButton').addEventListener('click', function () {
        // Redirect to the reservation page
        window.location.href = 'reservation.html';
    });
});
