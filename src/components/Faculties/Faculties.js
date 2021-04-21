import React, { useState, useEffect } from "react";
import Title from '../Title/Title';
import axios from 'axios';
import './Faculties.scss';
const Faculties = () => {
  const [faculties, setFaculties] = useState([]);
  useEffect(() => {
    axios.get("./data.json").then((res) => {
      setFaculties(res.data.faculties);
    });
  }, []);
  const allFaculties = faculties.map((item) => {
    return (
      <div className="faculties mt-5" key={item.id}>
        <div className="faculties__image-container">
          <img className="faculties__image" src={item.image} />
        </div>
        <div className="faculties__container">
          <div className="faculties__container-heading">
            <h3 className="faculties__container-title">{item.title}</h3>
          </div>
          <p className="mt-4">{item.about}</p>
        </div>
      </div>
    );
  });
  return <div className="row col-12 mt-5">
    <Title title="OUR FACULTIES"/>
    {allFaculties}
  </div>;
};
export default Faculties;