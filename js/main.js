document.addEventListener('DOMContentLoaded', () => {
    // Menú hamburguesa
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');

    if (hamburger && navbar) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navbar.classList.toggle('active');
        });
    }

    // Carrusel lateral automático
    const carruselItems = document.querySelectorAll('.carrusel-item');
    const seccion2 = document.querySelector('.seccion2');

    if (carruselItems.length > 0 && seccion2) {
        let currentIndex = 0;
        const totalItems = carruselItems.length;

        function showItem(index) {
            carruselItems.forEach(item => item.classList.remove('active'));
            carruselItems[index].classList.add('active');

            // Actualizar dots si existen
            const dots = document.querySelectorAll('.carrusel-dot');
            if (dots.length > 0) {
                dots.forEach(dot => dot.classList.remove('active'));
                if (dots[index]) dots[index].classList.add('active');
            }

            currentIndex = index;
        }

        // Crear contenedor de dots si no existe
        let navContainer = document.querySelector('.carrusel-nav');
        if (!navContainer) {
            navContainer = document.createElement('div');
            navContainer.className = 'carrusel-nav';
            seccion2.querySelector('.seccion2-carrusel').appendChild(navContainer);
        }

        // Agregar dots
        carruselItems.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = 'carrusel-dot';
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => {
                showItem(index);
                resetInterval();
            });
            navContainer.appendChild(dot);
        });

        // Cambio automático
        let interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % totalItems;
            showItem(currentIndex);
        }, 5000);

        function resetInterval() {
            clearInterval(interval);
            interval = setInterval(() => {
                currentIndex = (currentIndex + 1) % totalItems;
                showItem(currentIndex);
            }, 5000);
        }

        // Mostrar primer slide
        showItem(0);
    }
});
