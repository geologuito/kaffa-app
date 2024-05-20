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

});
