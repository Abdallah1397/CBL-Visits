import "./Banner.scss";

// Cover Image For any Static Page
const Banner = ({ image }) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="about-banner"
    ></div>
  );
};
export default Banner;
