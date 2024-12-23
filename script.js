document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you can add your form submission logic (e.g., send data to a server)
    alert(`Thank you, ${name}! Your message has been sent.`);
    
    // Clear the form
    document.getElementById('contact-form').reset();
});
