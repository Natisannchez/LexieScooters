document.addEventListener('DOMContentLoaded', function() {
    // Animación para los elementos al hacer scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.service-card, .why-item, .company-image, .why-image');
        
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
    const serviceCards = document.querySelectorAll('.service-card');
    const whyItems = document.querySelectorAll('.why-item');
    const images = document.querySelectorAll('.company-image, .why-image');
    
    serviceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease';
    });
    
    whyItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(20px)';
        item.style.transition = 'all 0.6s ease';
    });
    
    images.forEach(img => {
        img.style.opacity = '0';
        img.style.transform = 'scale(0.9)';
        img.style.transition = 'all 0.6s ease';
    });
    
    // Ejecutar al cargar y al hacer scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
    
    // Efecto hover para las tarjetas de servicio
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const icon = card.querySelector('.service-icon i');
            icon.style.transform = 'rotate(10deg) scale(1.1)';
            icon.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', () => {
            const icon = card.querySelector('.service-icon i');
            icon.style.transform = 'rotate(0) scale(1)';
        });
    });
});