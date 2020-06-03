/* testimonials */

let slider = $("#testimonialsSlider");
let slider__intro = $("#slider__intro")
slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
    dots: true,
    rows: window
  });

  

  slider__intro.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000
    
  });