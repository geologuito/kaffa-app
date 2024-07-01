document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    const visibleCards = getVisibleCards();
    const totalCards = carousel.querySelectorAll(".card").length;
    let currentIndex = 0;

    function getVisibleCards() {
        if (window.innerWidth >= 1024) {
            return 4;
        } else if (window.innerWidth >= 768) {
            return 3;
        } else {
            return 1;
        }
    }

    function updateCarousel() {
        const cardWidth = carousel.offsetWidth / visibleCards;
        const offset = -currentIndex * cardWidth;
        carousel.style.transform = `translateX(${offset}px)`;
    }

    prevBtn.addEventListener("click", function () {
        currentIndex = Math.max(0, currentIndex - 1);
        updateCarousel();
    });

    nextBtn.addEventListener("click", function () {
        currentIndex = Math.min(totalCards - visibleCards, currentIndex + 1);
        updateCarousel();
    });

    window.addEventListener("resize", function () {
        const newVisibleCards = getVisibleCards();
        currentIndex = Math.floor(currentIndex * visibleCards / newVisibleCards);
        visibleCards = newVisibleCards;
        updateCarousel();
    });

    // Variables para el manejo del toque
    let startX = 0;
    let startY = 0;
    let currentX = 0;
    let currentY = 0;
    let isDragging = false;

    carousel.addEventListener("touchstart", function (e) {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        isDragging = true;
    });

    carousel.addEventListener("touchmove", function (e) {
        if (!isDragging) return;

        currentX = e.touches[0].clientX;
        currentY = e.touches[0].clientY;

        // Calcula la diferencia en X y Y
        const deltaX = currentX - startX;
        const deltaY = currentY - startY;

        // Determina si el desplazamiento es horizontal o vertical
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            // Desplazamiento horizontal
            e.preventDefault(); // Evita el desplazamiento predeterminado de la página
            const cardWidth = carousel.offsetWidth / visibleCards;
            carousel.style.transition = 'none';
            carousel.style.transform = `translateX(${-currentIndex * cardWidth + deltaX}px)`;
        } else {
            // Desplazamiento vertical (permite que el navegador maneje el desplazamiento)
            isDragging = false; // Para no interferir con el desplazamiento vertical
        }
    });

    carousel.addEventListener("touchend", function (e) {
        if (!isDragging) return;

        // Calcula la diferencia en X
        const deltaX = currentX - startX;

        // Si el desplazamiento es significativo, ajusta currentIndex
        if (Math.abs(deltaX) > carousel.offsetWidth / 4) {
            if (deltaX > 0) {
                currentIndex = Math.max(0, currentIndex - 1);
            } else {
                currentIndex = Math.min(totalCards - visibleCards, currentIndex + 1);
            }
        }

        // Aplica la transición y actualiza el carrusel
        carousel.style.transition = '';
        updateCarousel();

        isDragging = false;
    });

});
