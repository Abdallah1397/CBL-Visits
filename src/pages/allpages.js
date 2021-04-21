import React, { useState,useEffect } from "react";
import NavBar from "../components/Nav/Navbar";
import Footer from "../components/footer/footer";
import { FaArrowCircleUp } from "react-icons/fa";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import visitsDetailPage from "./visitsDetailPage";
import userProfile from "./userProfile";
import LandingPage from "./landingpage";
import SignIn from "./signin";
import SignUp from "./signup-students";
import ProtectedRouting from "../components/protectedRouting/protectedRoute";
import Cookies from 'js-cookie';
import Visits from "./visits";
import About from "./about";
import ScrollToTop from '../utils/scollToTop';

const All_PAGES = () => {
 
  const token=Cookies.get('token');
  const [tok,setToken]=useState(false)
  const [showScroll, setShowScroll] = useState(false);
  // Protected Routing State
  const [isAuth,setAuth]=useState(false);
  const Login =()=>{
    setAuth(true);
  }
  const Logout=()=>{
    setAuth(false);
  }
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };
  useEffect(()=>{
    token&&setToken(true);
  },[tok]);
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  window.addEventListener("scroll", checkScrollTop);

  return (
    <Router>
      <div>
      <ScrollToTop />
        <NavBar />
        {/* <LandingPage /> */}
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/about" component={About} />

        <ProtectedRouting
          exact
          path="/"
          component={LandingPage}
          isAuth={token?true:true}
        />
         <ProtectedRouting
          exact
          path="/visits"
          component={Visits}
          isAuth={token?true:false}
        />
        <ProtectedRouting
          exact
          path="/:id"
          component={visitsDetailPage}
          isAuth={token?true:true}
        />
        <ProtectedRouting
          exact
          path="/userProfile"
          component={userProfile}
          isAuth={tok}
        />
        <FaArrowCircleUp
          className="scrollTop"
          onClick={scrollTop}
          style={{ height: 40, display: showScroll ? "flex" : "none" }}
        />

        <Footer />
      </div>
    </Router>
  );
};
export default All_PAGES;
