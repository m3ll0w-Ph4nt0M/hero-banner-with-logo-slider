$(document).ready(function () {
    // sliders
    let swiper_logo = new Swiper("#swiper-logos", {
        slidesPerView: 2,
        // spaceBetween: 100,
        speed: 4000,
        touchRatio: 0,
        allowTouchMove: false,
        loop: true,
        navigation: {
            nextEl: '#swiper-logos .swiper-button-next',
            prevEl: '#swiper-logos .swiper-button-prev',
        },
        autoplay: {
            delay: 0,
            disableOnInteraction: false
        },
        breakpoints: {
            960: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 3,
            }
        },
        on: {
            init: function () {
                let swiper_logo_config = this;
                if (window.innerWidth > 960) {
                    swiper_logo_config.el.addEventListener('mouseenter', function () {
                        swiper_logo_config.autoplay.stop();
                    });
                    swiper_logo_config.el.addEventListener('mouseleave', function () {
                        swiper_logo_config.autoplay.start();
                    });
                }
            },
            resize: function () {
                let swiper_logo_config = this;
                if (window.innerWidth > 960) {
                    swiper_logo_config.autoplay.stop();
                } else {
                    swiper_logo_config.autoplay.start();
                }
            }
        }
    });
    // modal logic
    $('.modal-cta').click(function (e) {
        let m_id = $(this).attr('id');
        let modal_content = $("div[attr-cta-id='" + m_id + "']").html();
        $('#modal_pop-up .content').empty().html(modal_content);
        $('html').addClass('lock-scroll');
        $('#modal_pop-up').addClass('show');
        setTimeout(function () {
            $('#modal_pop-up').addClass('visible');
        }, 300)
    });
    $('#modal_pop-up .close-btn , .modal_overlay').click(function (e) {
        $('#modal_pop-up').removeClass('visible');
        $('html').removeClass('lock-scroll');
        $('#modal_pop-up .content').empty();
        setTimeout(function () {
            $('#modal_pop-up').removeClass('show');
        }, 300)
    });
});