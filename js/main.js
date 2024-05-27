$(function () {

    "use strict";

    //=======MENU FIX======
    if ($(window).scrollTop() > 1) {
        if ($('.wsus__main_menu').offset() != undefined) {
            $('.wsus__main_menu').addClass('menu_fix');
        }
    } else {
        if ($('.wsus__main_menu').offset() != undefined) {
            $('.wsus__main_menu').removeClass('menu_fix');
        }
    }

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {

            if ($('.wsus__main_menu').offset() != undefined) {
                // check if menu_if class is already added
                if (!$('.wsus__main_menu').hasClass("menu_fix")) {
                    $('.wsus__main_menu').addClass("menu_fix");
                }
            }
        }
        else {
            if ($('.wsus__main_menu').offset() != undefined) {
                $('.wsus__main_menu').removeClass("menu_fix");
            }
        }
    });


    //=======SELECT2====== 
    $(document).ready(function () {
        $('.select_2').select2();
    });


    //=========COUNTER.JS=========   
    $('.counter').countUp();


    //*==========TESTIMONIAL SLIDER========= 
    $('.testi_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        arrows: false,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                }
            }
        ]
    });


    //*==========SCROLL BUTTON==========  
    $('.wsus__scroll_btn').on('click', function () {
        $('html, body').animate({
            scrollTop: 0,
        }, 2000);
    });

    $(window).on('scroll', function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > 300) {
            $('.wsus__scroll_btn').fadeIn();
        } else {
            $('.wsus__scroll_btn').fadeOut();
        }
    });


    //*======PROPERTY DETAILS======= 
    $('.pro_details_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false,
    });


    //*======PRODUCT VIDEO========  
    $('.venobox').venobox();


    //=======NICE NUMBER======
    $('input[type="number"]').niceNumber();


    //=======imageuploadify js======
    $(document).ready(function () {
        $('input[type="file"]').imageuploadify();
    })


    //*==========DASHBOARD MENU==========  

    $('.wsus__menu_icon').on('click', function () {
        $('.wsus__dashboard_side_bar').addClass('.menu_show');
    });


    $('.wsus__close_icon').on('click', function () {
        $('.wsus__dashboard_side_bar').removeClass('.menu_show');
    });



    $('.wsus__menu_icon').on('click', function () {
        $('.wsus__close_icon').addClass('.show_close_icon');
    });

    $('.wsus__close_icon').on('click', function () {
        $('.wsus__close_icon').removeClass('.show_close_icon');
    });


    //*==========SMALL DEVICE PROPERTY FILTER==========  
    $('.wsus__filter_icon').on('click', function () {
        $('.minus_2').toggleClass('.icon_roatet');
    });

    $('.wsus__filter_icon').on('click', function () {
        $('.wsus__filter_body').toggleClass('.show_filter');
    });










    // Category 2 slider
    $('.category_2_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        arrows: false,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                }
            }
        ]
    });


    // testimonial 2 slider
    $('.testimonial_slider_2').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        arrows: true,
        nextArrow: '<i class="far fa-arrow-right nextArrow"></i>',
        prevArrow: '<i class="far fa-arrow-left prevArrow"></i>',

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                }
            }
        ]
    });


    // nice select
    $('.select_js').niceSelect();



    // testimonial 2 slider
    // $('.testimonial_3_slider').slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 4000,
    //     dots: false,
    //     arrows: true,
    //     nextArrow: '<i class="far fa-long-arrow-right nextArrow"></i>',
    //     prevArrow: '<i class="far fa-long-arrow-left prevArrow"></i>',

    //     responsive: [
    //         {
    //             breakpoint: 1200,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 1,
    //                 dots: true,
    //                 arrows: false,
    //             }
    //         },
    //         {
    //             breakpoint: 992,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //                 dots: true,
    //                 arrows: false,
    //             }
    //         },
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //                 dots: true,
    //                 arrows: false,
    //             }
    //         },
    //         {
    //             breakpoint: 576,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //                 dots: true,
    //                 arrows: false,
    //             }
    //         }
    //     ]
    // });


    // testimonial slider
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        asNavFor: '.slider-nav',
        // nextArrow: '<i class="fal fa-angle-right nextArrow"></i>',
        // prevArrow: '<i class="fal fa-angle-left prevArrow"></i>',

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                }
            }
        ]
    });


    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        arrows: false,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
    });


});