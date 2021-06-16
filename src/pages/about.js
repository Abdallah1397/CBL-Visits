import React, { useEffect, useState } from "react";
import axios from "axios";
import Banner from "../components/Banner/Banner";
import AboutBanner from "../assets/images/various_photos/aboutBanner.png";
import Title from "../components/Title/Title";
import Content from "../components/Content/Content";
import Hero from "../components/Hero/Hero";
import ObjectDetail from "../components/ObjectDetails/ObjectDetail";
import SliderBanner from "../components/SliderBanner/sliderBanner";
const About = () => {
  // state to safe the data of ourVision that returned from the json file
  const [vision, setVison] = useState([]);
   // state to safe the data of ourGoals that returned from the json file
   const [goals, setGoals] = useState([]);
  // useEffect to get data after render
  useEffect(() => {
    axios.get("./data.json").then((res) => {
      setVison(res.data.ourvision);
      setGoals(res.data.ourgoals);


    });
  }, []);
  // map function to iterate over the our vision data that returned from the json file
  const OurVision = vision.map((item) => {
    return (
      <div className="col-md-3 col-12" data-aos="zoom-in-left" data-aos-duration="2000">
        <ObjectDetail
          id={item.id}
          image={item.image}
          title={item.title}
          about={item.about}
        />
      </div>
    );
  });

  // map function to iterate over the our goals data that returned from the json file
  const OurGoal = goals.map((item) => {
    return (
      <div className="col-md-3 col-12" data-aos="zoom-in-left" data-aos-duration="2000">
        <ObjectDetail
          id={item.id}
          image={item.image}
          title={item.title}
          about={item.about}
        />
      </div>
    );
  });
  return (
    <div>
    <SliderBanner />
    <Content
        title="Our Vision"
        topic="With SEKEM Wahat & Sharkya Greening The Desert we’re reclaiming about 1.000 hectar of desert land and turning it into fertile land again.
        We’re encouraging people to build a sustainable community, that is relying on the pricipals of bio-dynamic agriculture."
      />{" "}
      <div className="container">
        <div className="row">{OurVision}</div>
      </div>
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
      <div className="container">
      <div className="row">{OurGoal}</div>
    </div>
      <Hero title="Community Based Learning" subTitle="Show The Visits Now" />
    </div>
  );
};
export default About;
