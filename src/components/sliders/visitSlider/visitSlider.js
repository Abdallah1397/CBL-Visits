import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';






const VisitSlider =({image1,image2,image3})=>{
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        speed: 1000,
        autoplaySpeed: 2000,
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
                initialSlide: 2,
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
        <section className="py-5  col-sm-12 col-sm-4">
        <div className="container">
          <Slider {...settings}>
            <div className="col-12">
              <img className="col-12 slid_img" src={image1}  />
            </div>
            <div className="col-12">
              <img className="col-12 slid_img" src={image2}  />
            </div>
            <div className="col-12">
              <img className="col-12 slid_img" src={image3}  />
            </div>
           
           
          </Slider>
        </div>
      </section>
      );
    };
export default VisitSlider;