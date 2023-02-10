const prevButton = document.querySelector('.button_prev');
const nextButton = document.querySelector('.next');
const carousel = document.querySelector('.carousel');
const height = document.querySelector('#carousel_container').clientHeight;

let index = 0;

prevButton.addEventListener('click', () => {
    if (index === 0) return;
    index -=1;
    carousel.style.transform = `translate3d(0, -${height * index}px, 0)`;
});

nextButton.addEventListener('click', () => {
    if (index === 2) return;
    index +=1;
    carousel.style.transform = `translate3d(0, -${height * index}px, 0)`;
});