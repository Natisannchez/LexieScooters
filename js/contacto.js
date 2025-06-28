document.addEventListener('DOMContentLoaded', function() {
    // Manejo del formulario
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validación básica
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !subject || !message) {
                alert('Por favor complete todos los campos requeridos');
                return;
            }
            
            // Simulación de envío (en producción sería una petición AJAX)
            console.log('Formulario enviado:', {
                name,
                email,
                phone: document.getElementById('phone').value,
                subject,
                message
            });
            
            // Mensaje de éxito
            alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
            
            // Resetear formulario
            contactForm.reset();
        });
    }
    
    // Animación para los elementos
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.info-card, .contact-form, .map-section, .contact-cta');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if(elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Configurar elementos iniciales
    const infoCards = document.querySelectorAll('.info-card');
    const contactFormElement = document.querySelector('.contact-form');
    const mapSection = document.querySelector('.map-section');
    const contactCta = document.querySelector('.contact-cta');
    
    if (infoCards.length) {
        infoCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateX(20px)';
            card.style.transition = 'all 0.6s ease';
        });
    }
    
    if (contactFormElement) {
        contactFormElement.style.opacity = '0';
        contactFormElement.style.transform = 'translateY(20px)';
        contactFormElement.style.transition = 'all 0.6s ease';
    }
    
    if (mapSection) {
        mapSection.style.opacity = '0';
        mapSection.style.transition = 'all 0.6s ease';
    }
    
    if (contactCta) {
        contactCta.style.opacity = '0';
        contactCta.style.transition = 'all 0.6s ease';
    }
    
    // Ejecutar al cargar y al hacer scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
});