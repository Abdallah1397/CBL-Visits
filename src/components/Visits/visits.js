import React from "react";
import {NavLink} from 'react-router-dom';
const MainVisits = ({
  id,
  mainImage,
  visitName,
  leader,
  visitCourse,
  start,
  to,
  buttonShow
}) => {
  return (
    <div
      className="row col-md-3 col-sm-5 co1-12 mt-5  visits-div mr-sm-5 ml-3 justify-content-center"
      key={id}
      data-aos="zoom-in-left" data-aos-duration="2000"    >
      <div className="row mb-3">
        <img src={mainImage} className="col-12" alt="Image" width="200px" height="300px" />
      </div>
      <div className="row col-12">
        <label className="col-6 text-left">Visit Name</label>
        <p className="col-6 text-left">{visitName}</p>
      </div>
      <div className="row col-12">
        <label className="col-6 text-left">Leader</label>
        <p className="col-6 text-left">{leader}</p>
      </div>
      <div className="row col-12">
        <label className="col-6 text-left">Visit Course</label>
        <p className="col-6 text-left">{visitCourse}</p>
      </div>
      <div className="row col-12">
        <label className="col-6 text-left">Start</label>
        <p className="col-6 text-left">{start}</p>
      </div>
      <div className="row col-12">
        <label className="col-6 text-left">To</label>
        <p className="col-6 text-left">{to}</p>
      </div>
      <div className="row col-12 mb-5">
        <NavLink exact to={`/${id}`} className="col-12">
          <button className="btn btn-primary col-12 justify-content-center" hidden={buttonShow}>
            Show Detail
          </button>
        </NavLink>
      </div>
    </div>
  );
};
export default MainVisits;
