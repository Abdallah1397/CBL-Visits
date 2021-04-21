import { Link } from 'react-router-dom';

import './mainbanner.scss';

const MainBanner = () => {
  return (
    <div className="banner">
      <div className="banner__hero">
        <h1 className="banner__title">
        Community based 
                  <br />
                  learning
          <br />
         ( CBL )
        </h1>
        <Link to="/visits" className="btn btn-primary">
          show now
        </Link>
      </div>
    </div>
  );
};

export default MainBanner;
