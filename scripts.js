// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation for skills bars
window.addEventListener('scroll', function() {
    const skillsSection = document.getElementById('skills');
    const skillBars = document.querySelectorAll('.skill-level');

    if (window.scrollY >= skillsSection.offsetTop - window.innerHeight / 2) {
        skillBars.forEach(bar => {
            bar.style.width = bar.getAttribute('style').split(':')[1].trim();
        });
    }
});
