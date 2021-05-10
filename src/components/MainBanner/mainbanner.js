import { Link } from "react-router-dom";

import "./mainbanner.scss";

const MainBanner = () => {
  return (
    <div className="banner" >
      <div className="banner__hero">
        <h1 className="banner__title" data-aos="flip-left"  data-aos-duration="2000">
          Community based
          <br />
          learning
          <br />( CBL )
        </h1>
        <Link to="/visits" className="btn btn-primary" data-aos="flip-left"  data-aos-duration="2000">
          show now
        </Link>
      </div>
    </div>
  );
};

export default MainBanner;
