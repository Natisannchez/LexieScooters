document.addEventListener('DOMContentLoaded', () => {
    // Menú hamburguesa
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navbar.classList.toggle('active');
    });

    // Carrusel automático
    const carruselItems = document.querySelectorAll('.carrusel-item');
    if (carruselItems.length > 0) { // Solo ejecuta si existe el carrusel
        let currentIndex = 0;
        const totalItems = carruselItems.length;

        function showItem(index) {
            carruselItems.forEach(item => item.classList.remove('active'));
            carruselItems[index].classList.add('active');
            
            // Actualizar dots si existen
            const dots = document.querySelectorAll('.carrusel-dot');
            if (dots.length > 0) {
                dots.forEach(dot => dot.classList.remove('active'));
                dots[index].classList.add('active');
            }
            
            currentIndex = index;
        }

        // Crear dots de navegación
        const navContainer = document.createElement('div');
        navContainer.className = 'carrusel-nav';
        
        carruselItems.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = 'carrusel-dot';
            if(index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => showItem(index));
            navContainer.appendChild(dot);
        });
        
        document.querySelector('.seccion2').appendChild(navContainer);

        // Cambio automático cada 5 segundos
        setInterval(() => {
            currentIndex = (currentIndex + 1) % totalItems;
            showItem(currentIndex);
        }, 5000);

        // Mostrar primer item al cargar
        showItem(0);
    }
});