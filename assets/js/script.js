/* (function($) {
    'use strict' */


/*
========================================
    Preloader
========================================
*/
$(window).on('load', function() {
    $('#preloader').delay(200).fadeOut('slow');
    $('body').delay(200).css({
        'overflow': 'visible'
    });
});

/* ===============================================
        AddClass menu js
   ===============================================
*/

$(window).on('scroll', function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $(".menu-area").addClass("shrinkheader");
    } else {
        $(".menu-area").removeClass("shrinkheader");
    }
});



/* 
=====================================================
    Start active menu
======================================================
*/

var sections = jQuery('section'),
    nav = jQuery('nav'),
    nav_height = nav.outerHeight();

jQuery(window).on('scroll', function() {
    var cur_pos = jQuery(this).scrollTop();

    sections.each(function() {
        var top = jQuery(this).offset().top - nav_height,
            bottom = top + jQuery(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('a').removeClass('active');
            sections.removeClass('active');

            jQuery(this).addClass('active');
            nav.find('a[href="#' + jQuery(this).attr('id') + '"]').addClass('active');
        }
    });
});


/* 
========================================
    slick slide
========================================
*/


/* Payment */

$('.payment-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    draggable: true,
    infinite: true,
    initialSlide: true,
    swipe: true,
    swipeToSlide: true,
    dots: true,
    pauseOnHover: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 800,
    pauseOnHover: true,
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                arrows: false,
                dots: true,
            }
        },
        {
            breakpoint: 580,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
            }
        },
    ]
});

/* Testimonial */

$('.testimonial-text-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    asNavFor: '.testimonial-slider',
});
$('.testimonial-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    draggable: true,
    infinite: true,
    asNavFor: '.testimonial-text-slider',
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    dots: false,
    centerMode: true,
    nextArrow: '<i class="las la-angle-double-right"></i>',
    prevArrow: '<i class="las la-angle-double-left"></i>',
    focusOnSelect: false,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                arrows: false,
                dots: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
            }
        },
    ]
});

/* Blogs */

$('.blog-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    infinite: true,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    dots: true,
    arrows: false,
    nextArrow: '<i class="las la-angle-double-right"></i>',
    prevArrow: '<i class="las la-angle-double-left"></i>',
    focusOnSelect: false,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                arrows: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ]
});


/*
========================================
    Select
========================================
*/

$(document).ready(function() {
    $('select').niceSelect();
});


/*
========================================
accordion
========================================
*/

if ($('.accordion').length) {
    // (Optional) Active an item if it has the class "is-active"	
    $(".accordion > .accordion-item.is-active").children(".accordion-panel").slideDown();

    $(".accordion > .accordion-item").on('click', function() {
        // Cancel the siblings
        $(this).siblings(".accordion-item").removeClass("is-active").children(".accordion-panel").slideUp();
        // Toggle the item
        $(this).toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
    });
}

/* 
========================================
    tab
========================================
*/

$('.tabs li').click(function() {
    var tab_id = $(this).attr('data-tab');

    $('.tabs li').removeClass('active');
    $('.tab-content').removeClass('active');

    $(this).addClass('active');
    $("#" + tab_id).addClass('active');
});

/*
========================================
    Parallax
========================================
*/

jarallax(document.querySelectorAll('.parallax'), {
    speed: 0.5,
});


/* 
========================================
    Magnific popup
========================================
*/

$('.open-videos').magnificPopup({
    type: 'iframe'
});

/* gallery */
$('.images-gallery').magnificPopup({
    type: 'image',
    gallery: {
        enabled: true
    }
});


/* 
========================================
    portfolio filter
========================================
*/

if ($('.images-loads').length) {
    $('.images-loads').imagesLoaded(function() {
        var $grid = $('.work-grid').isotope({
            itemSelector: '.grid-item',
        });
        // filter items on button click
        $('.work-button button').on('click', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });
        //for filter button active class
        $('.work-button button').on('click', function(event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });
    });
};



/*
========================================
Scroll to top
========================================
*/

$(document).ready(function() {

    //Check to see if the window is top if not then display button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });

});

/*
========================================
    Hover Effects
========================================
*/

$(function() {
    $('.hover-div').each(function() { $(this).hoverdir(); });
});


/* 
========================================
    Wow Animation
========================================
*/

new WOW().init();



/* 
========================================
    console error Avoid
========================================
*/
// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function() {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());


/* })(jQuery); */