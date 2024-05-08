document.addEventListener('DOMContentLoaded', function () {
    // Reference to the reservation form
    var form = document.getElementById('reservationForm');
  
    // Event listener for form submission
    form.addEventListener('submit', function (event) {
      // Prevent default form submission
      event.preventDefault();
  
      // Get form data
      var formData = new FormData(form);
  
      // Store form data in session storage
      sessionStorage.setItem('formData', JSON.stringify(Object.fromEntries(formData.entries())));
  
      // Redirect to the PNR page
      window.location.href = 'pnr.html';
    });
  });
  document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('formData');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Get form data
        var formData = new FormData(form);
        var origin = formData.get('origin');
        var destination = formData.get('destination');
        var departureDate = formData.get('departureDate');
        var passengers = formData.get('passengers');
        var tclass = formData.get('tclass');
        // Store form data in session storage
        sessionStorage.setItem('formData', JSON.stringify({
            origin: origin,
            destination: destination,
            departureDate: departureDate,
            passengers:passengers,
            tclass:tclass

        }));

        // Redirect to the display page
        window.location.href = 'pnr.html';
    });
});
document.addEventListener('DOMContentLoaded', function () {
    // Reference to the reservation form
    var form = document.getElementById('reservationForm');
  
    // Event listener for form submission
    form.addEventListener('submit', function (event) {
        // Prevent default form submission
        event.preventDefault();
  
        // Generate a random PNR number
        var generatedPNR = generateRandomPNR();
  
        // Redirect to the PNR page with the generated PNR number as a URL parameter
        window.location.href = 'pnr.html?generatedPNR=' + generatedPNR;
    });
});

function generateRandomPNR() {
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var pnr = '';
    for (var i = 0; i < 6; i++) {
        pnr += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pnr;
}
