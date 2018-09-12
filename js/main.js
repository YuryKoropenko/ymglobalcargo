$(document).ready(function () {
    $('ul.menu').children('li').on('mouseover', function () {
        var childs = this.children;
        //console.log(childs[1]);
        childs[1].style = 'display:block'
    });
    $('ul.menu').children('li').on('mouseout', function () {
        $('ul.submenu').css({'display':'none', 'transition':'0.5s ease-out'});
    });
    $('div.slider').slick({
        dots: true,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 3000,
    });

    $('.spincrement').spincrement({
        from: 0,                // Стартовое число
        //to: false,              // Итоговое число. Если false, то число будет браться из элемента с классом spincrement, также сюда можно напрямую прописать число. При этом оно может быть, как целым, так и с плавающей запятой
        decimalPlaces: 0,       // Сколько знаков оставлять после запятой
        //decimalPoint: ".",      // Разделитель десятичной части числа
        thousandSeparator: " ", // Разделитель тыcячных
        duration: 2800
    });






    $('.carousel').slick({
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 564,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('.reviews').slick({
        dots: false,
        infinite: false,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.mobmenu').on('click', function() {
        $('.menu').slideToggle();
        $(document).click(function(event) {
            if ($(event.target).closest('.menu').length) return;
                $('.menu').slideUp();
                event.stopPropagation();
            });
        return false;
    });
})