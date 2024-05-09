// Smooth scroll to section
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade in sections on scroll
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const distanceToTop = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (distanceToTop < screenHeight * 0.75) {
            section.classList.add('fade-in');
        }
    });
});
