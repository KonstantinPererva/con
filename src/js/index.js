function initCarousel() {
    var options = {
        speed: 400,
        slidesPerView: 'auto',
        centeredSlides: true,
        on: {
            init: function () {
                if (document.querySelectorAll('.detail-goods-slide.swiper-slide-next').length) {
                    var nextSlideCard = document.querySelector('.detail-goods-slide.swiper-slide-next');
                    nextSlideCard.classList.add('move-left');
                }

                if (document.querySelectorAll('.detail-goods-slide.swiper-slide-prev').length) {
                    var prevSlideCard = document.querySelector('.detail-goods-slide.swiper-slide-prev');
                    prevSlideCard.classList.add('move-right');
                }

                if (document.querySelectorAll('.detail-goods-slide.swiper-slide-active').length) {
                    var prevSlideCard = document.querySelector('.detail-goods-slide.swiper-slide-active');
                    prevSlideCard.classList.add('move-right');
                }
            },
            slideChange: function () {
                change(this.previousIndex, this.activeIndex);
            }
        },
        breakpoints: {
            320: {
                spaceBetween: 12,
            },
            768: {
                spaceBetween: 30
            },
            1024: {
                spaceBetween: 60
            },
            1200: {
                spaceBetween: 90
            },
        }
    };

    function change(prev, active) {
        var s = {};
        s.prev = null;
        s.active = active;

        if (prev) {
            s.prev = prev;
        }

        if (s.prev && s.prev < s.active) {
            moveNext(s.prev,s.active)
        }

        if (s.prev && s.prev > s.active) {
            movePrev(s.prev,s.active)
        }
    }

    var slides = null;

    if (document.querySelectorAll('.detail-goods-slide').length) {
        slides = document.querySelectorAll('.detail-goods-slide');
    }

    function moveNext(prev,active) {
        for (let i = 0; i < slides.length; i++) {
            slides[active].classList.add('move-left');
            slides[active].classList.remove('move-right');

            if (prev) {
                slides[prev].classList.add('move-right');
                slides[prev].classList.remove('move-left');
            }
        }
    }

    function movePrev(prev,active) {
        for (let i = 0; i < slides.length; i++) {
            slides[active].classList.add('move-right');
            slides[active].classList.remove('move-left');

            if (prev) {
                slides[prev].classList.add('move-left');
                slides[prev].classList.remove('move-right');
            }
        }
    }

    if (slides && slides.length >= 3) {
        options.initialSlide = 1;
    }

    if (slides && slides.length > 0) {
        var carouselGoods = new Swiper('.detail-goods-slider', options);

        for (let i = 0; i < slides.length; i++) {
            slides[i].addEventListener('click', function () {
                carouselGoods.slideTo(i);
            })
        }
    }
}

initCarousel();