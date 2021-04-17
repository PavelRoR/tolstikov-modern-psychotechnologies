$(document).ready(function () {
    /* Якорь */
    $("a:not('.variant-footer-button'):not('.prepayment-button')").click(function (h) {
        h.preventDefault();
        var f = $(this).attr("href"),
            g = $(f).offset().top;
        $("body,html").animate({
            scrollTop: g
        }, 1500)
    });
    $(function (){
        var mT = $('.module-title');
        mT.on('click', function () {
            // mT.removeClass('active').next().slideUp(500);
            if (!$(this).hasClass('active')) {
                mT.removeClass('active').next().slideUp(500);
                $(this).addClass('active').next().slideDown(500);
            } else {
                mT.removeClass('active').next().slideUp(500);
                // $(this).removeClass('active').next().slideUp(500);
            }
        });
    });
    $(function () {
        var clock;
        var dates = new Array(
            new Date("April 20, 2021 00:00 UTC+3"),
            new Date("April 21, 2021 00:00 UTC+3"),
            new Date("April 22, 2021 00:00 UTC+3")
        );

        var currentDate = new Date();

        var sale1 = {
            name: $('#sale-1'),
            saleText: new Array('3 000р.', '2 500р.')
        };
        var sale2 = {
            name: $('#sale-2'),
            saleText: new Array('34 950р.', '33 950р.')
        };

        var today1 = {
            name: $('#today-1'),
            todayText: new Array('7 990р.', '8 490р.')
        };
        var today2 = {
            name: $('#today-2'),
            todayText: new Array('30 990р.', '31 990р.')
        };

        var link1 = {
            name: $('#link-1'),
            linkText: new Array('https://shop.mastervision.su/?r=ordering/cart/as1&id=5657&clean=true&lg=ru', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=5658&clean=true&lg=ru')
        };
        var link2 = {
            name: $('#link-2'),
            linkText: new Array('https://shop.mastervision.su/?r=ordering/cart/as1&id=5661&clean=true&lg=ru', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=5662&clean=true&lg=ru')
        };
        var prepLink = {
            name: $('#prepLink'),
            linkText: new Array('https://shop.mastervision.su/?r=ordering/cart/as1&id=5665&clean=true&lg=ru', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=5666&clean=true&lg=ru')
        };

        if (currentDate < dates[0]) {
            var futureDate = dates[0];
            var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
            clock = $('.clock').FlipClock(diff, {
                clockFace: 'HourlyCounter',
                countdown: true,
                language: 'ru',
                callbacks: {
                    stop: function () {
                        sale1.name.text(sale1.saleText[0]);
                        sale2.name.text(sale2.saleText[0]);
                        today1.name.text(today1.todayText[0]);
                        today2.name.text(today2.todayText[0]);
                        link1.name.attr('href', link1.linkText[0]);
                        link2.name.attr('href', link2.linkText[0]);
                        prepLink.name.attr('href', prepLink.linkText[0]);
                    }
                }
            });
        } else if ((currentDate >= dates[0]) && (currentDate < dates[1])) {
            var futureDate = dates[1];
            var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
            clock = $('.clock').FlipClock(diff, {
                clockFace: 'HourlyCounter',
                countdown: true,
                language: 'ru',
                callbacks: {
                    stop: function () {
                        sale1.name.text(sale1.saleText[1]);
                        sale2.name.text(sale2.saleText[1]);
                        today1.name.text(today1.todayText[1]);
                        today2.name.text(today2.todayText[1]);
                        link1.name.attr('href', link1.linkText[1]);
                        link2.name.attr('href', link2.linkText[1]);
                        prepLink.name.attr('href', prepLink.linkText[1]);
                    }
                }
            });
        } else {
            var futureDate = dates[2];
            var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

            if (diff < 0) {
                diff = 0;
                $('.timer').remove();
            }

            clock = $('.clock').FlipClock(diff, {
                clockFace: 'HourlyCounter',
                countdown: true,
                language: 'ru',
                callbacks: {
                    stop: function () {
                        $('.timer').remove();
                    }
                }
            });
        }
    });
    $('.text-rev-link').magnificPopup({
        type: 'image',
        mainClass: 'mfp-fade',
        gallery: {
            enabled: true
        }
    });
    $('.revs-slider').slick({
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        speed: 300,
        arrows: true,
        centerPadding: '40px',
        // adaptiveHeight: true,
        centerMode: true,
        appendArrows: '.video-revs-arrows-1',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }]
    });
    $('.revs-slider-text').slick({
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        speed: 300,
        arrows: true,
        centerPadding: '40px',
        // adaptiveHeight: true,
        centerMode: true,
        appendArrows: '.video-revs-arrows-2',
        responsive: [{
            breakpoint: 561,
            settings: {
                slidesToShow: 1
            }
        }]
    });
    $('.slick-dots').wrap('<div class="container container-revs">')
    /* Видео */
    $(".video-wrapper-revs img").click(function () {
        var a = $(this).parent().attr("data-youtube");
        $(this).parent().html('<iframe src="https://www.youtube.com/embed/' + a + '?showinfo=0&rel=0&autoplay=1&modestbranding=1&mute=1&showinfo=0&rel=0" allowfullscreen></iframe>')
    });

    function imToVideo() {
        $('.video-wrapper-revs iframe').each(function () {
            var l = $(this).parent().attr('data-img');
            $(this).parent().html('<img src="' + l + '" alt="Видео отзыв">');
        });
        $(".video-wrapper-revs img").click(function () {
            var a = $(this).parent().attr("data-youtube");
            $(this).parent().html('<iframe src="https://www.youtube.com/embed/' + a + '?modestbrandig=1&mute=1&showinfo=0&rel=0&autoplay=1" allowfullscreen></iframe>');
        });
    }
    $('.revs-slider').on('swipe', function (event, slick, direction) {
        imToVideo();
    });
    $('.revs-slider').on('afterChange', function (event, slick, direction) {
        imToVideo();
    });
    $('.revs-slider').on('beforeChange', function (event, slick, direction) {
        imToVideo();
    });
    /*Конец документа*/
});