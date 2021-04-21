import Banner from "../components/Banner/Banner";
import AboutBanner from "../assets/images/various_photos/aboutBanner.png";
import Title from "../components/Title/Title";
import Content from "../components/Content/Content";
import Hero from "../components/Hero/Hero";
const About = () => {
  return (
    <>
      <Banner image={AboutBanner} />
      {/* <Title title="About us" /> */}
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
      />{" "}
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
      <Hero title="Community Based Learning" subTitle="Show The Visits Now" />
    </>
  );
};
export default About;
