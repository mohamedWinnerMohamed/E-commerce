const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-right',
        prevEl: '.swiper-left',
    },

    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

window.addEventListener('scroll', () => {
    if(window.scrollY > 650) {
        document.querySelector('.go-up-btn').classList.add('active-go-up-btn');
    } else {
        document.querySelector('.go-up-btn').classList.remove('active-go-up-btn');
    }
});