import React from "react";
import Title from "../Title/Title";
import "./ObjectDetail.scss";
const ObjectDetail = ({ id, image, title, about }) => {
  return (
    <div className="container objectDetail">
      <div className="row mb-5">
        <div className="col-12 " key={id}>
          <div className="objectDetail__image-container">
            <img className="objectDetail__image" src={image} />
          </div>
          <div className="objectDetail__container">
            <h3 className="objectDetail__container-title">{title}</h3>
            <p className="objectDetail__container-about  mb-5">{about}</p>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};
export default ObjectDetail;
