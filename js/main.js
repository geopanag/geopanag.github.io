/*
 * Template Name: Sunshine - Responsive vCard Template
 * Author: LMPixels (Linar Miftakhov)
 * Author URL: http://themeforest.net/user/lmpixels
 * Version: 1.0
 */

(function ($) {
    "use strict";

    // Portfolio subpage filters
    function portfolio_init() {
        var portfolio_grid = $('#portfolio_grid'),
            portfolio_filter = $('#portfolio_filters');

        if (portfolio_grid) {

            portfolio_grid.shuffle({
                speed: 450,
                itemSelector: 'figure'
            });

            $('.site-main-menu').on("click", "a", function (e) {
                portfolio_grid.shuffle('update');
            });

            portfolio_filter.on("click", ".filter", function (e) {
                portfolio_grid.shuffle('update');
                e.preventDefault();
                $('#portfolio_filters .filter').parent().removeClass('active');
                $(this).parent().addClass('active');
                portfolio_grid.shuffle('shuffle', $(this).attr('data-group'));
                setTimeout(function () {
                    portfolio_grid.shuffle('update');
                }, 150);
            });
        }
    }
    // /Portfolio subpage filters

    // Hide Mobile menu
    function mobileMenuHide() {
        var windowWidth = $(window).width();
        if (windowWidth < 1024) {
            $('#site_header').addClass('mobile-menu-hide');
        }
    }

    // /Hide Mobile menu

    // Animate page loader
    $(window).on('load', function () {
        $(".preloader").fadeOut("slow");
    });

    function _calculateAge(birthday) { // birthday is a date
        var ageDifMs = Date.now() - birthday.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    $(document).ready(function () {
        // Initialize Age

        $('#myAge').html(_calculateAge(new Date('1992/02/03')));

        // Initialize Portfolio grid
        var $portfolio_container = $("#portfolio-grid");

        $portfolio_container.imagesLoaded(function () {
            setTimeout(function () {
                portfolio_init(this);
            }, 500);
        });

        // Portfolio hover effect init
        $(' #portfolio_grid > figure > a ').each(function () {
            $(this).hoverdir();
        });

        // Mobile menu
        $('.menu-toggle').click(function () {
            $('#site_header').toggleClass('mobile-menu-hide');
        });

        // Testimonials Slider
        var $testimonials = $(".testimonials.owl-carousel").owlCarousel({
            nav: true, // Show next/prev buttons.
            items: 1, // The number of items you want to see on the screen.
            loop: true, // Infinity loop. Duplicate last and first items to get loop illusion.
            navText: false,
            margin: 10,
        });

        // Reinit testimonials carousel on subpage change
        $('.site-main-menu').on("click", "a", function (e) {
            $testimonials.trigger('refresh.owl.carousel');
        });

        // Text rotator init
        $('#rotate').rotaterator({fadeSpeed: 800, pauseSpeed: 1900});


        // Blog grid init
        setTimeout(function () {
            var $container = $(".blog-masonry");
            $container.masonry();
        }, 500);

        $('.site-main-menu').on("click", "a", function (e) {
            var $container = $(".blog-masonry");
            $container.masonry();
        });

    });

    // Mobile menu hide
    $(window).on('resize', function () {
        mobileMenuHide();
    });

    // Mobile menu hide on main menu item click
    $('.site-main-menu').on("click", "a", function (e) {
        mobileMenuHide();
    });

})(jQuery);
