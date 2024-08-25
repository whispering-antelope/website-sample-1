// Add any JavaScript functionality here

// Example: Smooth Scroll for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example: Form validation (You can expand this as needed)
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Simple validation example
    let name = document.querySelector('input[name="name"]').value;
    let email = document.querySelector('input[name="email"]').value;
    let message = document.querySelector('textarea[name="message"]').value;

    if (name && email && message) {
        alert('Message sent!');
    } else {
        alert('Please fill in all fields.');
    }
});