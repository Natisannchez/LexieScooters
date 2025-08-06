document.addEventListener('DOMContentLoaded', function () {
    // Manejo del formulario
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            if (!name || !email || !subject || !message) {
                alert('Please complete all required fields');
                return;
            }

            console.log('Form submitted:', {
                name,
                email,
                phone: document.getElementById('phone').value,
                subject,
                message
            });

            alert('Thank you for your message! We will contact you soon.');
            contactForm.reset();
        });
    }

    // Animaciones on scroll
    const elements = document.querySelectorAll('.info-card, .contact-form, .map-section, .contact-cta, .contact-hero');

    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease';
    });

    const animateOnScroll = function () {
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
});
