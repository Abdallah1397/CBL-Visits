import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from "../../assets/images/various_photos/IMG-20201123-WA0021.jpg";
import img2 from "../../assets/images/various_photos/cbl1.jpeg";
import img3 from "../../assets/images/various_photos/IMG-20201123-WA0019.jpg";





const CblSlider =()=>{
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
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
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: false,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
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
        <section className="py-5 section-bg col-md-12 col-sm-4">
        <div className="container">
          <Slider {...settings}>
            <div className="col-12">
              <img className="col-12 slid_img" src={img1}  />
            </div>
            <div className="col-12">
              <img className="col-12 slid_img" src={img2}  />
            </div>
            <div className="col-12">
              <img className="col-12 slid_img" src={img3}  />
            </div>
           
           
          </Slider>
        </div>
      </section>
      );
    };
export default CblSlider;