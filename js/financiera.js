document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (!track || items.length === 0) return;
    
    // Clonamos los items para efecto infinito perfecto
    const cloneItems = Array.from(items).map(item => item.cloneNode(true));
    cloneItems.forEach(clone => track.appendChild(clone));
    
    // Configuración inicial
    const itemStyle = window.getComputedStyle(items[0]);
    const itemWidth = items[0].offsetWidth + 
                     parseInt(itemStyle.marginRight) + 
                     parseInt(itemStyle.marginLeft);
    
    let currentPosition = 0;
    const scrollSpeed = 1; // Pixeles a mover por frame (ajusta para velocidad)
    let animationId;
    let isScrolling = true;
    
    // Función de animación suave
    function smoothScroll() {
        currentPosition -= scrollSpeed;
        
        // Reinicio suave cuando llega al final
        if (currentPosition <= -itemWidth * items.length) {
            currentPosition = 0;
        }
        
        track.style.transform = `translateX(${currentPosition}px)`;
        
        if (isScrolling) {
            animationId = requestAnimationFrame(smoothScroll);
        }
    }
    
    // Iniciar animación
    function startAutoScroll() {
        isScrolling = true;
        animationId = requestAnimationFrame(smoothScroll);
    }
    
    // Detener animación
    function stopAutoScroll() {
        isScrolling = false;
        cancelAnimationFrame(animationId);
    }
    
    // Navegación manual
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            stopAutoScroll();
            currentPosition = Math.min(0, currentPosition + itemWidth * 3);
            track.style.transform = `translateX(${currentPosition}px)`;
            setTimeout(startAutoScroll, 5000); // Reanuda después de 5 segundos
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            stopAutoScroll();
            currentPosition -= itemWidth * 3;
            track.style.transform = `translateX(${currentPosition}px)`;
            setTimeout(startAutoScroll, 5000); // Reanuda después de 5 segundos
        });
    }
    
    // Control de hover
    track.addEventListener('mouseenter', stopAutoScroll);
    track.addEventListener('mouseleave', startAutoScroll);
    
    // Manejo de redimensionamiento
    window.addEventListener('resize', function() {
        stopAutoScroll();
        const newItemWidth = items[0].offsetWidth + 
                           parseInt(itemStyle.marginRight) + 
                           parseInt(itemStyle.marginLeft);
        currentPosition = (currentPosition / itemWidth) * newItemWidth;
        track.style.transform = `translateX(${currentPosition}px)`;
        startAutoScroll();
    });
    
    // Iniciar
    startAutoScroll();
});
function toggleForm() {
  const form = document.getElementById('applyForm');
  if (form.style.display === 'flex') {
    form.style.display = 'none';
  } else {
    form.style.display = 'flex';
  }
}
