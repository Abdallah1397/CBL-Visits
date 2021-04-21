import React from "react";
import Title from "../Title/Title";
import Sharkya from "../../assets/images/various_photos/Sharqeya.jpg";
import Wahat from "../../assets/images/various_photos/Wahat.jpg";
import './Projects.scss';
const Projects = () => {
  return (
    <div className="row col-12 mt-5 mb-5 justify-content-center">
      <Title title="Our Projects " className="col-12" />
      <div className="col-3 projects mt-5">
        <div className="projects__image-container">
          <img className="projects__image" src={Wahat} />
        </div>
        {/* <div className="projects__container">
          <div className="projects__container-heading">
            <h3 className="projects__container-title">Wahat</h3>
          </div>
          <p className="mt-4">
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de
            Finibus Bonorum et Malorum" by Cicero are also reproduced in their
            exact original form, accompanied by English versions from the 1914
            translation by H. Rackham.
          </p>
        </div> */}
      </div>
      <div className="col-3 projects mt-5">
        <div className="projects__image-container">
          <img className="projects__image" src={Sharkya} />
        </div>
        {/* <div className="projects__container">
          <div className="projects__container-heading">
            <h3 className="projects__container-title">Sharqeya</h3>
          </div>
          <p className="mt-4">
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de
            Finibus Bonorum et Malorum" by Cicero are also reproduced in their
            exact original form, accompanied by English versions from the 1914
            translation by H. Rackham.
          </p>
        </div> */}
      </div>
    </div>
  );
};
export default Projects;
