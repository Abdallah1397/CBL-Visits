import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import axios from "axios";
import { BiUser } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import Cookies from "js-cookie";
import Logo from "../../assets/images/logo/HU LOGO-01.png";
import { connect } from "react-redux";
import { getUserRequest } from "../../store/actions/user";
import "./Navbar.scss";

// Navbar => with user name that we got from redux
const NavBar = ({ user, getUser }) => {
  const [logout, setLogout] = useState(false);
  const history = useHistory();
  const token = Cookies.get("token");
  useEffect(() => {
    getUser();
    // Logout => remove cookies
    axios.get("http://10.0.30.166:8080/private/users/logout/").then((res) => {
      console.log(res.data.logout);
      setLogout(res.data.logout);
    });
  }, []);
  const onClickLogout = (e) => {
    e.preventDefault();
    if (logout === true) {
      Cookies.remove("token");
      history.go(0);
    }
  };
  // onClick Function Handeler for responsive navbar
  const handleClickIcon = () => {
    document.querySelector("#menu").classList.toggle("active");
    // document.querySelector("#dropDown").classList.("active");
  };
  const handleClickNavbarItem = () => {
    if (token !== "") {
     document.querySelector("#menu").classList.remove("active");
      // document.querySelector("#dropDown").classList.remove("active");
    }
  };
  const handleClickDropdown = () => {
    if (token !== "") {
      document.querySelector("#dropDown").classList.toggle("active");
      document.querySelector("#menu").classList.remove("active");
    }
  };
  const handleClickDropdownItem = () => {
    document.querySelector("#dropDown").classList.remove("active");
  };
  console.log(logout);
  return (
    // navbar using navlink from react router dom
    <header className="site-header">
      <div className="container">
        <nav className="site-header__navbar">
          <div className="site-header__navbar-nav">
            <div className="site-header__logo-container">
              <img src={Logo} className="site-header__logo" />
            </div>
            <ul className="site-header__links" id="menu">
              <li>
                <NavLink
                  exact
                  to="/"
                  className="site-header__link"
                  id="item"
                  onClick={handleClickNavbarItem}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/visits"
                  className="site-header__link"
                  id="item"
                  onClick={handleClickNavbarItem}
                >
                  Visits
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/about"
                  className="site-header__link"
                  id="item"
                  onClick={handleClickNavbarItem}
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>
          {/* navbar login icon*/}
          <div className="site-header__icons">
            <ul className="site-header__icons-list">
              <li className="site-header__icons-item">
                {token ? (
                  <div className="site-header__dropdown">
                    <span onClick={handleClickDropdown}>
                      {user.user_name}
                      <i className="fas fa-caret-down "></i>
                    </span>
                    <ul className="site-header__submenu dropDown" id="dropDown">
                      <NavLink
                        exact
                        to="/userProfile"
                        className="site-header__dropdown-content"
                        onClick={handleClickDropdownItem}
                      >
                        Profile <i className="fa fa-user-circle"></i>
                      </NavLink>
                      <a
                        className="site-header__dropdown-content"
                        onClick={onClickLogout}
                      >
                        Logout <i className="fas fa-sign-out-alt"></i>
                      </a>
                    </ul>
                  </div>
                ) : (
                  <NavLink to="/signin">
                    <i className="fa fa-user-circle fa-2x mt-3" style={{color:"#656565"}}></i>
                  </NavLink>
                )}
              </li>
              {/* Mobile Bar */}
              <li className="site-header__icons-item">
                <i className="fa fa-bars fa-lg" onClick={handleClickIcon}></i>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};
const mapStateToProps = (state) => ({
  user: state.user.user,
});
const mapDispatchToProps = {
  getUser: getUserRequest,
};
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
