document.addEventListener('DOMContentLoaded', function() {
    // Filtrado de productos
    const filterButtons = document.querySelectorAll('.filter-btn');
    const modelCards = document.querySelectorAll('.model-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Actualizar botones activos
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filter = button.dataset.filter;
            
            // Filtrar productos
            modelCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Sliders de imágenes en las tarjetas
    document.querySelectorAll('.model-image-slider').forEach(slider => {
        const images = slider.querySelectorAll('img');
        const prevBtn = slider.querySelector('.slider-prev');
        const nextBtn = slider.querySelector('.slider-next');
        let currentIndex = 0;
        
        function showImage(index) {
            images.forEach(img => img.classList.remove('active'));
            images[index].classList.add('active');
            currentIndex = index;
        }
        
        prevBtn.addEventListener('click', () => {
            let newIndex = currentIndex - 1;
            if (newIndex < 0) newIndex = images.length - 1;
            showImage(newIndex);
        });
        
        nextBtn.addEventListener('click', () => {
            let newIndex = currentIndex + 1;
            if (newIndex >= images.length) newIndex = 0;
            showImage(newIndex);
        });
        
        // Auto-rotación opcional
        let slideInterval = setInterval(() => {
            let newIndex = currentIndex + 1;
            if (newIndex >= images.length) newIndex = 0;
            showImage(newIndex);
        }, 5000);
        
        // Pausar auto-rotación al interactuar
        slider.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });
        
        slider.addEventListener('mouseleave', () => {
            slideInterval = setInterval(() => {
                let newIndex = currentIndex + 1;
                if (newIndex >= images.length) newIndex = 0;
                showImage(newIndex);
            }, 5000);
        });
    });
    
    // Modal para vista ampliada
    const modalOverlay = document.querySelector('.modal-overlay');
    const modalClose = document.querySelector('.modal-close');
    const modalMainImage = document.querySelector('.modal-main-image');
    const modalThumbnails = document.querySelector('.modal-thumbnails');
    const modalInfo = document.querySelector('.modal-info');
    
    document.querySelectorAll('.btn-view').forEach((btn, index) => {
        btn.addEventListener('click', () => {
            const card = btn.closest('.model-card');
            const images = card.querySelectorAll('.model-image-slider img');
            const title = card.querySelector('h3').textContent;
            const specs = card.querySelector('.model-specs').textContent;
            const price = card.querySelector('.model-price').textContent;
            
            // Limpiar thumbnails anteriores
            modalThumbnails.innerHTML = '';
            
            // Configurar imágenes del modal
            images.forEach((img, i) => {
                const thumbnail = document.createElement('img');
                thumbnail.src = img.src;
                thumbnail.alt = img.alt;
                if (i === 0) {
                    thumbnail.classList.add('active');
                    modalMainImage.src = img.src;
                    modalMainImage.alt = img.alt;
                }
                
                thumbnail.addEventListener('click', () => {
                    modalThumbnails.querySelectorAll('img').forEach(t => t.classList.remove('active'));
                    thumbnail.classList.add('active');
                    modalMainImage.src = thumbnail.src;
                    modalMainImage.alt = thumbnail.alt;
                });
                
                modalThumbnails.appendChild(thumbnail);
            });
            
            // Configurar información del producto
            modalInfo.innerHTML = `
                <h2>${title}</h2>
                <p class="model-specs">${specs}</p>
                <p class="model-price">${price}</p>
                <button class="btn-whatsapp full-width">
                    <i class="fab fa-whatsapp"></i> Contactar por WhatsApp
                </button>
            `;
            
            // Mostrar modal
            modalOverlay.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Cerrar modal
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
    
    function closeModal() {
        modalOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    // Evento para el botón de WhatsApp en el modal
    document.addEventListener('click', (e) => {
        if (e.target.closest('.btn-whatsapp')) {
            const productTitle = e.target.closest('.modal-info')?.querySelector('h2')?.textContent || 'Producto';
            const whatsappNumber = '17861234567'; // Reemplaza con tu número
            const message = `Hola, estoy interesado en el ${productTitle}. ¿Podrían darme más información?`;
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        }
    });
});