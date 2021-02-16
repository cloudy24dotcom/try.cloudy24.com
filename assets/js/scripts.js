jQuery(function ($) {
    'use strict';
    $(window).ready(function () {
        $('#preloader').delay(200).fadeOut('fade');
    });
    $('.js-mega-menu').HSMegaMenu({
        event: 'hover',
        pageContainer: $('.container'),
        breakpoint: 767.98,
        hideTimeOut: 0
    });
    var Header = document.querySelector('#header');
    var headroom = new Headroom(Header, {
        "offset": 205,
        "tolerance": 5,
        "classes": {
            "initial": "animated",
            "pinned": "slideDown",
            "unpinned": "slideDown"
        }
    });
    headroom.init();
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > $(window).height()) {
            $('.scroll-to-target').addClass('open');
        } else {
            $('.scroll-to-target').removeClass('open');
        }
        if ($('.scroll-to-target').length) {
            $(".scroll-to-target").on('click', function () {
                var target = $(this).attr('data-target');
                var new_time = new Date();
                if (!this.old_time || new_time - this.old_time > 1000) {
                    $('html, body').animate({
                        scrollTop: $(target).offset().top
                    }, 500);
                    this.old_time = new_time;
                }
            });
        }
    });
    var cPlan = $('#c-plan');
    if (cPlan.length) {
        cPlan.slider({
            tooltip: 'always'
        });
        cPlan.on("slide", function (e) {
            $('.slider .tooltip-up', '#custom-plan').text(e.value * 20);
            $('.price', '#custom-plan').text($(this).data("currency") + e.value * 20);
            $('.feature1 span', '#custom-plan').text(e.value);
            $('.feature2 span', '#custom-plan').text(e.value * 2);
            $('.feature3 span', '#custom-plan').text(e.value * 10);
            $('.feature4 span', '#custom-plan').text(e.value * 1000);
        });
        initSlider();
    }

    function initSlider() {
        cPlan.value = cPlan.data("slider-value");
        $('.slider .tooltip', '#custom-plan').append('<div class="tooltip-up"></div>');
        $('.slider .tooltip-up', '#custom-plan').text(cPlan.value * 20);
        $('.slider .tooltip-inner', '#custom-plan').attr("data-unit", cPlan.data("unit"));
        $('.slider .tooltip-up', '#custom-plan').attr("data-currency", cPlan.data("currency"));
        $('.price', '#custom-plan').text(cPlan.data("currency") + cPlan.value * 20);
        $('.feature1 span', '#custom-plan').text(cPlan.value);
        $('.feature2 span', '#custom-plan').text(cPlan.value * 2);
        $('.feature3 span', '#custom-plan').text(cPlan.value * 10);
        $('.feature4 span', '#custom-plan').text(cPlan.value * 1000);
    }
    $("#js-contcheckbox").change(function () {
        if (this.checked) {
            $('.monthly-price').css('display', 'none');
            $('.yearly-price').css('display', 'block');
            $('.afterinput').addClass('text-success');
            $('.beforeinput').removeClass('text-success');
        } else {
            $('.monthly-price').css('display', 'block');
            $('.yearly-price').css('display', 'none');
            $('.afterinput').removeClass('text-success');
            $('.beforeinput').addClass('text-success');
        }
    });
    $('.custom-map-location li span').tooltip('show');
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
    $('.hero-slider-one').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        autoplayHoverPause: true,
        items: 1,
        smartSpeed: 1000,
        animateOut: "slideOutUp",
        animateIn: "slideInDown",
    });
    $('.hero-content-slider').owlCarousel({
        loop: false,
        autoplay: true,
        dots: true,
        autoplayHoverPause: true,
        items: 1,
        smartSpeed: 1000,
        animateOut: "slideOutUp",
        animateIn: "slideInDown",
    });
    $('.client-testimonial').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        responsiveClass: true,
        autoplay: true,
        autoplayHoverPause: true,
        lazyLoad: true,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 1
            },
            600: {
                items: 2
            },
            800: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });
    $('.clients-carousel').owlCarousel({
        autoplay: true,
        loop: true,
        margin: 15,
        dots: false,
        slideTransition: 'linear',
        autoplayTimeout: 4500,
        autoplayHoverPause: true,
        autoplaySpeed: 4500,
        responsive: {
            0: {
                items: 2
            },
            500: {
                items: 3
            },
            600: {
                items: 4
            },
            800: {
                items: 5
            },
            1200: {
                items: 6
            }
        }
    });
    $('.trustpilot-carousel').owlCarousel({
        autoplay: true,
        loop: true,
        margin: 15,
        dots: false,
        slideTransition: 'linear',
        autoplayTimeout: 4500,
        autoplayHoverPause: true,
        autoplaySpeed: 7500,
        responsive: {
            0: {
                items: 2
            },
            500: {
                items: 2
            },
            600: {
                items: 2
            },
            800: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    });
    $('.team-member-carousel').owlCarousel({
        loop: true,
        margin: 15,
        nav: false,
        dots: true,
        responsiveClass: true,
        autoplay: true,
        autoplayHoverPause: true,
        lazyLoad: true,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            600: {
                items: 3
            },
            800: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });
    $('.hosting-packages-carousel').owlCarousel({
        loop: true,
        margin: 15,
        nav: false,
        dots: true,
        responsiveClass: true,
        autoplay: true,
        autoplayHoverPause: true,
        lazyLoad: true,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            600: {
                items: 2
            },
            800: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });
    $(document).ready(function () {
        $(".player").YTPlayer();
    });

    function wowAnimation() {
        new WOW({
            offset: 100,
            mobile: true
        }).init()
    }
    wowAnimation()
    $('.clock').countdown('2022/01/30', function (event) {
        $(this).html(event.strftime('' + '<div class="row">' + '<div class="col">' + '<h2 class="mb-1">%-D</h2>' + '<h6>Day%!d</h6>' + '</div>' + '<div class="col">' + '<h2 class="mb-1">%H</h2>' + '<h6>Hours</h6>' + '</div>' + '<div class="col">' + '<h2 class="mb-1">%M</h2>' + '<h6>Minutes</h6>' + '</div>' + '<div class="col">' + '<h2 class="mb-1">%S</h2>' + '<h6>Seconds</h6>' + '</div>' + '</div>'));
    });
    $(function () {
        if ($('#sticky').length) {
            var el = $('#sticky');
            var stickyTop = $('#sticky').offset().top;
            var stickyHeight = $('#sticky').height();
            $(window).scroll(function () {
                var limit = $('#section-footer').offset().top - stickyHeight - 20;
                var windowTop = $(window).scrollTop();
                if (stickyTop < windowTop) {
                    el.css({
                        position: 'fixed',
                        top: 20,
                        width: 350,
                    });
                } else {
                    el.css('position', 'static');
                }
                if (limit < windowTop) {
                    var diff = limit - windowTop;
                    el.css({
                        top: diff
                    });
                }
            });
        }
    });
});
$(function () {
    $(".typed").typed({
        strings: ["Web Hosting Provider", "Best Hosting In India", "Plans from at ₹89/mo"],
        stringsElement: null,
        typeSpeed: 30,
        startDelay: 1200,
        backSpeed: 20,
        backDelay: 500,
        loop: true,
        loopCount: 5,
        showCursor: false,
        cursorChar: "|",
        attr: null,
        contentType: 'html',
        callback: function () {},
        preStringTyped: function () {},
        onStringTyped: function () {},
        resetCallback: function () {}
    });
});
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": ["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"]
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#b6b2b2"
            }
        },
        "opacity": {
            "value": 0.5211089197812949,
            "random": false,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 8.017060304327615,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 12.181158184520175,
                "size_min": 0.1,
                "sync": true
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#c8c8c8",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "bounce",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "repulse"
            },
            "onclick": {
                "enable": false,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});
$(document).ready(function () {
    $('.close').click(function () {
        $('#header-sale-bar').toggle("slide");
    });
});
var options = {
    title: '&#x1F36A; Accept Cookies & Privacy Policy?',
    message: 'There are no cookies used on this site, but if there were this message could be customised to provide more details. Click the <strong>accept</strong> button below to see the optional callback in action...',
    delay: 900,
    expires: 1,
    link: 'privacy-policy',
    onAccept: function () {
        var myPreferences = $.fn.ihavecookies.cookie();
    },
    uncheckBoxes: true,
    acceptBtnLabel: 'Accept Cookies',
    moreInfoLabel: 'More information',
    cookieTypesTitle: 'Select which cookies you want to accept',
    fixedCookieTypeLabel: 'Essential',
    fixedCookieTypeDesc: 'These are essential for the website to work correctly.'
}
$(document).ready(function () {
    $('body').ihavecookies(options);
    if ($.fn.ihavecookies.preference('marketing') === true) {}
    $('#ihavecookiesBtn').on('click', function () {
        $('body').ihavecookies(options, 'reinit');
    });
});

var $root = $('html, body');
$('a').click(function () {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top - -80
    }, 500, function () {
        window.location.hash = href;
    });
    return false;
});
window.setInterval(function() { //setInterval (loop a function)
    $("#f1_card").toggleClass("flipped"); //toggle class "flipped"
}, 5000); // Loop it every 5000 milliseconds


