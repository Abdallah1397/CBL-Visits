import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cover1 from '../../assets/images/various_photos/33.jpg';
import cover2 from '../../assets/images/various_photos/2.jpg';
import cover3 from '../../assets/images/various_photos/1.jpg';

const CoverSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        speed: 1000,
        autoplaySpeed: 4000,
        cssEase: 'linear',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
              },
            },
            {
              breakpoint: 400,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
              },
            },
          ],
      };
  return (
    <section className="container-fluid">
    <div>
      <Slider {...settings} className="row">
          <img className="" src={cover1} />
          <img className="" src={cover2} />
          <img className="" src={cover3} />
      </Slider>
    </div>
    </section>
  );
};
export default CoverSlider;
