import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from "../../assets/images/partners/1.jpg";
import img2 from "../../assets/images/partners/2.jpg";
import img3 from "../../assets/images/partners/3.jpg";
import img4 from "../../assets/images/partners/4.jpg";
import img5 from "../../assets/images/partners/5.jpg";
import img6 from "../../assets/images/partners/6.png";
import img7 from "../../assets/images/partners/7.jpg";
import img8 from "../../assets/images/partners/8.jpg";





const PartnerSlider =()=>{
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
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
                slidesToShow: 3,
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
        <div className="container mt-5 ">
          <Slider {...settings}>
            <div className="col-12">
              <img className="col-12 slid_img rounded-circle" src={img1}  />
            </div>
            <div className="col-12">
              <img className="col-12 slid_img rounded-circle" src={img2}  />
            </div>
            <div className="col-12">
              <img className="col-12 slid_img rounded-circle" src={img3}  />
            </div>
            <div className="col-12">
              <img className="col-12 slid_img rounded-circle" src={img4}  />
            </div>
            <div className="col-12">
              <img className="col-12 slid_img rounded-circle" src={img5}  />
            </div>
            <div className="col-12">
              <img className="col-12 slid_img " src={img6}  />
            </div>
            <div className="col-12">
              <img className="col-12 slid_img rounded-circle" src={img7}  />
            </div>
            <div className="col-12">
              <img className="col-12 slid_img rounded-circle" src={img8}  />
            </div>
           
          </Slider>
        </div>
      </section>
      );
    };
export default PartnerSlider;