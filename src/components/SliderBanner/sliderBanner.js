import "./sliderBanner.scss";
import About2 from "../../assets/images/various_photos/Maximilian-Abouleish-Solar-Pumping-Project-Egypt-Desert.png";
import About1 from "../../assets/images/various_photos/SEKEM-Sophia-Future-1-1.jpg";
import About from "../../assets/images/various_photos/SEKEMsophia-featured.jpg";


const SliderBanner = () => {
  return (
    <div className="carouselBanner">
      <div id="myCarousel" className="carousel slide " data-ride="carousel">
        <ol className="carousel-indicators">
          <li
            data-target="#myCarousel"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner ">
        <div className="item active ">
        <div
          className="carouselBanner__image-div"
          style={{ backgroundImage: `url(${About})` }}
        ></div>
      </div>

      <div className="item">
        <div
          className="carouselBanner__image-div"
          style={{ backgroundImage: `url(${About1})` }}
        ></div>{" "}
      </div>

      <div className="item">
        <div
          className="carouselBanner__image-div"
          style={{ backgroundImage: `url(${About2})` }}
        ></div>{" "}
      </div>
    </div>

        <a
          className="left carousel-control"
          href="#myCarousel"
          data-slide="prev"
        >
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="right carousel-control"
          href="#myCarousel"
          data-slide="next"
        >
          <span className="glyphicon glyphicon-chevron-right"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};
export default SliderBanner;
