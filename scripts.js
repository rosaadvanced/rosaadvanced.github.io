const carousel = document.getElementById('carousel');
let currentIndex = 0;

function showNextSlide() {
    currentIndex = (currentIndex + 1) % 3;
    updateCarousel();
}

function showPrevSlide() {
    currentIndex = (currentIndex - 1 + 3) % 3;
    updateCarousel();
}

function updateCarousel() {
    const translateValue = -currentIndex * 100;
    carousel.style.transform = `translateX(${translateValue}%)`;
}

// Automatic slide change (you can customize the interval)
setInterval(showNextSlide, 5000);
