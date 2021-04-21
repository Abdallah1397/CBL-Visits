import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { getUserRequest } from "../../store/actions/user";
import Logo from "../../assets/images/logo/HU LOGO-02.png";
import d_user from "../../assets/images/various_photos/default-user.png";
import Cookies from "js-cookie";

const NavBar = ({ user, getUser }) => {
  useEffect(() => {
    getUser();
  }, []);
  console.log(user.id);
  const token = Cookies.get("token");
  const setDefaultImage = (e) => {
    e.preventDefault();
    e.target.src = { d_user };
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <nav className="navbar-expand-md navbar-top">
          <div className="container-fluid">
            <div className="navbar-header col-md-2 col-sm-12">
              <button
                type="button"
                className="navbar-toggle collapsed "
                data-toggle="collapse"
                data-target="#navbar"
                aria-expanded="false"
                aria-controls="navbar"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar tog-btn"></span>
                <span className="icon-bar tog-btn"></span>
                <span className="icon-bar tog-btn"></span>
              </button>
              <div className="col-lg-8 col-md-12 col-sm-5 col-8 mt-md-4">
                <img src={Logo} className="col-md-12 col-4"/>
              </div>
            </div>
            <div
              id="navbar"
              className="navbar-collapse collapse col-md-10 col-12"
            >
              <ul className="nav navbar-nav col-10">
              <li className="col-md-3">
                  <NavLink exact to="/" className="item">
                    HOME
                  </NavLink>
                </li>
                <li className="col-md-3">
                  <NavLink exact to="/visits" className="item">
                    VISITS
                  </NavLink>
                </li>
                <li className="col-md-3">
                  <NavLink exact to="/dsa" className="item">
                    Page3
                  </NavLink>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li className="userName row">
                  {token? (
                    <>
                      <li className="nav-item dropdown navbarDropdown">
                        <h1
                          className="nav-link dropdown-toggle"
                          href="#"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {user.user_name}
                        </h1>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <NavLink
                            exact
                            to="/userProfile"
                            className="dropdown-item"
                          >
                            My Profile
                          </NavLink>
                          <NavLink className="dropdown-item" exact to="#">
                            Log Out
                          </NavLink>
                          <div className="dropdown-divider"></div>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </div>
                      </li>
                    </>
                  ) : (
                    <>
                      <NavLink exact to="/signin" className="col-12">
                        <span className="glyphicon glyphicon-log-in"></span>{" "}
                        Login
                      </NavLink>
                    </>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  user: state.user.user,
});
const mapDispatchToProps = {
  getUser: getUserRequest,
};
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
