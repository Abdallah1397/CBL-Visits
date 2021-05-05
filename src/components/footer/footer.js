import React from "react";
import Logo from "../../assets/images/logo/HU LOGO-02.png";

const Footer = () => {
  return (
    <div className="container-fluid footer">
      <section className="row p-5 footer-sec">
        <footer className="container">
          <div className="row justify-content-center">
            <h5 className="h5_footer">Connect with Heliopolis University</h5>
          </div>
          <div className="row justify-content-center mt-3">
            <a
              target="_blank"
              href="http://www.facebook.com/heliopolis.university"
              title="Facebook"
            >
              <i className="fa fa-facebook col-2 fa-2x face"></i>
            </a>
            <a
              target="_blank"
              href="https://twitter.com/HeliopolisUni"
              title="Twitter"
            >
              <i className="fa  fa-twitter col-2 fa-2x twit"></i>
            </a>
            <a
              target="_blank"
              href="http://www.youtube.com/HeliopolisUniversity"
              title="Youtube"
            >
              <i className="fa  fa-youtube col-2 fa-2x ytube"></i>
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/heliopolisuniversity/"
              title="Instagram"
            >
              <i className="fa  fa-instagram col-2 fa-2x insta"></i>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/school/heliopolis-university/"
              title="LinkedIn"
            >
              <i className="fa  fa-linkedin col-2 fa-2x linked"></i>
            </a>
          </div>
          <div className="row mt-5 justify-content-center">
            <img src={Logo} className="col-md-2 col-4 mt-5" />
          </div>
          <div className="row justify-content-center">
            <p className="mt-4 fa fa-map-marker location">
              {" "}
               3 Cairo Belbeis Desert Road, Cairo
            </p>
          </div>
          <div className="row justify-content-center">
            <a
              className="fa fa-envelope email_address"
              href="mailto:hu@hu.edu.eg"
            >
              {" "}
               hu@hu.edu.eg
            </a>
          </div>
          <div className="row justify-content-center">
            <a className="mt-2 fa fa-phone email_address" href="tel:16418">
              {" "}
               Call Us at 16418
            </a>
          </div>
          <div className="row justify-content-center">
            <footer className="mt-3 copy_write">
              &copy; {new Date().getFullYear()} Heliopolis University
            </footer>
          </div>
        </footer>
      </section>
    </div>
  );
};
export default Footer;
