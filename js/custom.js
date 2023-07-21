$(function () {

    $('.mobile_menu').on('click', function () {
        $(this).toggleClass('active');
        $('.header').toggleClass('mobile_open');
        $('body').toggleClass('body_fixed');
    });

    $('.header .gnb>ul>li>a').on('click', function (e) {
        if ($('.header').hasClass('mobile_open')) {
            e.preventDefault();
            $(this).next().stop().slideToggle();
        }
    });

    $(window).on('resize', function () {
        $('.mobile_menu').removeClass('active');
        $('.header').removeClass('mobile_open');
        $('body').removeClass('body_fixed');
        $('.sub_menu').removeAttr('style');
    });

    const mainSlide = new Swiper('.main_slide', {
        loop: true,
        effect: 'fade',
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    const placeSlide = new Swiper('.place_slide', {
        loop: true,
        speed: 800,
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            prevEl: '.arrow .left',
            nextEl: '.arrow .right',
        },
        breakpoints: {
            768: {
                slidesPerView: 'auto',
                spaceBetween: 100,
                centeredSlides: true,
            },
        },
    });

    $('.notice_list>li').on('click', function () {
        let idx = $(this).index();
        $('.notice_list>li').eq(idx).addClass('active').siblings().removeClass('active');
        $('.notice_cont>li').eq(idx).addClass('active').siblings().removeClass('active');
    });

});