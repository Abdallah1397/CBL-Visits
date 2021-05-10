import React, { useState, useEffect } from "react";
import Title from "../Title/Title";
import axios from "axios";
import "./Faculties.scss";
const Faculties = () => {
  // state to save the data that returned from the json file
  const [faculties, setFaculties] = useState([]);
  useEffect(() => {
    // get the data from the json file
    axios.get("./data.json").then((res) => {
      setFaculties(res.data.faculties);
    });
  }, []);
  //  map fuction to iterate over the data
  const allFaculties = faculties.map((item) => {
    return (
      <div className="faculties mt-5" key={item.id} data-aos="zoom-in-left" data-aos-duration="2000">
        <div className="faculties__image-container">
          <img className="faculties__image" src={item.image} />
        </div>
        <div className="faculties__container">
          <div className="faculties__container-heading">
            <h3 className="faculties__container-title">{item.title}</h3>
          </div>
          <p className="faculties__about mt-4">{item.about}</p>
        </div>
      </div>
    );
  });
  return (
    <div className="row col-12 mt-5">
      <Title title="OUR FACULTIES" />
    
      {allFaculties}
    </div>
  );
};
export default Faculties;
