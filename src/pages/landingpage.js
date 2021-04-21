import React, { useState, useEffect } from "react";
import { NavLink, withRouter } from "react-router-dom";
import axios from "axios";
import MainBanner from "../components/MainBanner/mainbanner";
import Faculties from "../components/Faculties/Faculties";
import Content from "../components/Content/Content";
import Hero from "../components/Hero/Hero";
const LandingPage = () => {
  const [faculties, setFaculties] = useState([]);
  useEffect(() => {
    axios.get("./data.json").then((res) => {
      setFaculties(res.data.faculties);
    });
  }, []);
  const allFaculties = faculties.map((item) => {
    return (
      <div className="col-md-4 mt-5  ">
        <div className="row justify-content-center">
          <img className="col-12" src={item.image} />
          <h3 className="mt-4">{item.title}</h3>
          <p className="col-12 mt-4">{item.about}</p>
        </div>
      </div>
    );
  });
  return (
    <>
      <MainBanner className="mb-5" />
      <Content
        title="Heliopolis University"
        topic="We empower our students to be the champions of sustainable
            development in different spheres of life. We provide a place where
            new ideas meet fertile ground for research and innovation.
            Education at Heliopolis University combines academic teaching,
            scientific research, and practice with a unique humanistic core
            program to develop curious and creative minds that can reflect and
            act to shape a better future for all of us.
            "
      />
      <Faculties className="mt-5" />
      <Content
        title="What's CBL"
        topic="We empower our students to be the champions of sustainable
            development in different spheres of life. We provide a place where
            new ideas meet fertile ground for research and innovation.
            Education at Heliopolis University combines academic teaching,
            scientific research, and practice with a unique humanistic core
            program to develop curious and creative minds that can reflect and
            act to shape a better future for all of us.
            "
      />
         <Hero
        title="Community Based Learning"
        subTitle="Show The Visits Now"
      />
      {/* <Projects/> */}
      {/* <div className="justify-content-center mb-5"> */}
        {/* <div className="container-fluid landingPageCover">
        <div className="container-md row justify-content-md-center mt-5">
          <div className="col-md-6 col-12 mt-5">
            <h1 className="mt-5 backgroundTitle col-12">
              Sharkia - 13 Valiage
            </h1>
          </div>
        </div>
      </div> */}
        {/* <div className="container">
        <div className="content container mb-5">
          <h1 className="row mt-5 justify-content-center topicTitleFont">
            Heliopolis University
          </h1>
          <p className="row justify-content-center mt-5 mb-5">
            We empower our students to be the champions of sustainable
            development in different spheres of life. We provide a place where
            new ideas meet fertile ground for research and innovation.
            <br />
            Education at Heliopolis University combines academic teaching,
            scientific research, and practice with a unique humanistic core
            program to develop curious and creative minds that can reflect and
            act to shape a better future for all of us.
          </p>
        </div>
      </div> */}
        {/* <div className="container-fluid justify-content-center mt-5 coloringBackground">
        <div className="container mt-5">
          <div className="row justify-content-center mb-5">
            <h1 className="topicTitleFont mb-5"> Our Faculties </h1>
          </div>
          <div className="row mb-5">{allFaculties}</div>
        </div>
      </div> */}
        {/* <div className="container-fluid coloringBackgroundCBL">
          <div className="container mt-5">
            <div className="row justify-content-center">
              <div className="cblContent col-6">
                <div className="row">
                  <h1 className="col-12 mt-5 justify-content-center topicTitleFontBackgroundImage">
                    What's CBL
                  </h1>
                </div>

                <p className="col-12 justify-content-center paragraphImageFont mt-5 mb-5">
                  We empower our students to be the champions of sustainable
                  development in different spheres of life. We provide a place
                  where new ideas meet fertile ground for research and
                  innovation.
                  <br />
                  Education at Heliopolis University combines academic teaching,
                  scientific research, and practice with a unique humanistic
                  core program to develop curious and creative minds that can
                  reflect and act to shape a better future for all of us.
                </p>
              </div>
              <div className="cblContentImage col-6"></div>
            </div>
            <div className="row mb-5 mt-1 cblDiv">
              <CblSlider className="mt-5" />
            </div>
          </div>
        </div> */}

        {/* <div className="container-fluid mt-5 mb-5 coloringBackground">
          <div className="content container mt-5 mb-5">
            <h3 className="row mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </h3>
            <div className="row mt-4">
              <div className="col-4">
                <h2 className="mt-5">What's CBL</h2>
                <p className="mt-3 mb-5">
                  We empower our students to be the champions of sustainable
                  development in different spheres of life. We provide a place
                  where new ideas meet fertile ground for research and
                  innovation.
                </p>
              </div>
              <div className="col-4">
                <h2 className="mt-5">What's CBL</h2>
                <p className="mt-3 mb-5">
                  We empower our students to be the champions of sustainable
                  development in different spheres of life. We provide a place
                  where new ideas meet fertile ground for research and
                  innovation.
                </p>
              </div>
              <div className="col-4">
                <h2 className="mt-5">What's CBL</h2>
                <p className="mt-3 mb-5">
                  We empower our students to be the champions of sustainable
                  development in different spheres of life. We provide a place
                  where new ideas meet fertile ground for research and
                  innovation.
                </p>
              </div>
            </div>
            <div className="row justify-content-center mt-5 mb-5">
              <button className="col-2 mb-4 ">Click Here</button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default withRouter(LandingPage);
