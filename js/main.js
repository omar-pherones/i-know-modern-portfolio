var mixer = mixitup('.Protfolio-container');
new VenoBox({
    selector: '.my-portofolio',
});
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    // autoplay: true,
    responsiveClass: true,
    responsive: {
        0: {
            stagePadding: 0,
            responsiveClass: true,
            nav: false,
            autoHeight: true,
            items: 1,
            margin: 10,
        },
        600: {
            items: 1,
        },
        768: {
            items: 2,
            margin: 30,
        },
        1000: {
            items: 2,
        },
    },
});

$('#bar1').barfiller();
$('#bar2').barfiller();
$('#bar3').barfiller();

$('.circlechart').circlechart();

// cursor style
var cursor = document.querySelector('.cursor');
var cursor2 = document.querySelector('.cursor2');
document.addEventListener('mousemove', function (e) {
    cursor.style.cssText = cursor2.style.cssText =
        'left: ' + e.clientX + 'px; top: ' + e.clientY + 'px;';
});
