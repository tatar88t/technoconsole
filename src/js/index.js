import "./import/modules";
import "./import/components";
import $ from 'jquery';
import slick from 'slick-slider';

$('.slider__projects').slick({
    infinite: true,
    dots: true,
});

$('.slider__order-models').slick({
    infinite: true,
    dots: true,
});

$('#option-1').attr("checked", "checked");

$('.main-news__slider').slick({
    infinite: true,
    dots: true,
    arrows: false
});

// $('.main-mews__slider-thumb').slick({
//     slidesToShow: 2,
//     slidesToScroll: 2,
//     infinite: true,
//     dots: false,
//     asNavFor: '.main-news__slider',
//     focusOnSelect: true,
//     vertical: true,
//     arrows: false
// });
 
console.log($('.slider__projects'))