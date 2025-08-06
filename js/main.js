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

});

document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.carousel-slider');
  const items = document.querySelectorAll('.carousel-item');

  if (slider && items.length > 0) {
    // Duplicar contenido para simular loop infinito
    slider.innerHTML += slider.innerHTML;

    let scrollAmount = 0;
    const scrollSpeed = 1; // velocidad

    function autoScroll() {
      scrollAmount += scrollSpeed;
      if (scrollAmount >= slider.scrollWidth / 2) {
        scrollAmount = 0; // Reinicia sin que se note
      }
      slider.scrollLeft = scrollAmount;
      requestAnimationFrame(autoScroll);
    }

    autoScroll();
  }
});
