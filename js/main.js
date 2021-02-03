// Slick slider
$(function() {
    $('.slick-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
    });
});

 //  Menu nav toggle
 $('#nav_toggle').on('click', function(event) {
    event.preventDefault();
    $(this).toggleClass('active');
    $('#nav__menu').toggleClass('active');
});

$(function() {
    var nav = $('#nav'),
        introH = $('#fixed').innerHeight(),
        scrollOffset = $(window).scrollTop();

        // ! Fixed header
        checkScroll(scrollOffset);
    $(window).on('scroll', function() {
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if(scrollOffset >= introH) {
            nav.addClass('fixed');
        }   else(
            nav.removeClass('fixed')
        );
    }
});

// Init AOS
(function ($) {
    "use strict";
    function aos_init() {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true
        });
    }
    $(window).on('load', function () {
        aos_init();
    });

})(jQuery);
