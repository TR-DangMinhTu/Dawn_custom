$(document).ready(function () {
  var autoplay1 = $('script#blogSliderJs').attr('autoplay1');
  var autoplaySpeed = $('script#blogSliderJs').attr('autoplaySpeed');
  var slidesToScroll = $('script#blogSliderJs').attr('slidesToScroll');
  var dots = $('script#blogSliderJs').attr('dots'); 
  // console.log(autoplay1);
  // console.log(autoplaySpeed);
  // console.log(dots);
  
  $(".slider").slick({
    infinite: true,
    slidesToShow: Number(slidesToScroll),
    slidesToScroll: 1,
    autoplay: (autoplay1 === 'true'),
    autoplaySpeed: Number(autoplaySpeed),
    dots: (dots === 'true'),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: Number(slidesToScroll),
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });
});
