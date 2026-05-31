let currentIndex = 0;

const slider = document.querySelector('.product-slider');
const cards = document.querySelectorAll('.product-card');

function getItemsPerView() {
    if (window.innerWidth <= 768) {
        return 1; 
    }
    return 3; 
}

function updateSlider() {
    const itemsPerView = getItemsPerView();
    const width = cards[0].offsetWidth;

    slider.style.transform = `translateX(-${currentIndex * width}px)`;

    // reset active
    cards.forEach(card => card.classList.remove('active'));

    if (cards[currentIndex]) {
        cards[currentIndex].classList.add('active');
    }
}

// NEXT
document.querySelector('.next-arrow').addEventListener('click', () => {
    const itemsPerView = getItemsPerView();

    if (currentIndex < cards.length - itemsPerView) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }

    updateSlider();
});

// PREV
document.querySelector('.prev-arrow').addEventListener('click', () => {
    const itemsPerView = getItemsPerView();

    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = cards.length - itemsPerView;
    }

    updateSlider();
});

// resize fix
window.addEventListener('resize', () => {
    currentIndex = 0;
    updateSlider();
});

// init
updateSlider();