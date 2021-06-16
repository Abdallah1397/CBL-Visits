import React, { useState, useEffect } from "react";
import { NavLink, withRouter } from "react-router-dom";
import axios from "axios";
import MainBanner from "../components/MainBanner/mainbanner";
import Faculties from "../components/Faculties/Faculties";
import Content from "../components/Content/Content";
import Hero from "../components/Hero/Hero";
import AnimatedCounter from "../components/AnimatedCounter/animatedCounter";
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
    <div>
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
      <Hero title="Community Based Learning" subTitle="Show The Visits Now" />
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
      <AnimatedCounter
        counter1={200}
        fact1="Visits"
        counter2={200}
        fact2="Projects"
        counter3={200}
        fact3="Students"
      />
    </div>
  );
};

export default withRouter(LandingPage);
