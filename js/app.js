$(document).ready(function(){
    $('.food-slider').slick({
        autoplay: true, //autoplay slide
        slidesToShow:3, //how many slides u wanna show
        slidesToScroll:1,
        prevArrow:".prev-btn",
        nextArrow:".next-btn"
    });
});