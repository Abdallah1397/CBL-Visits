import React, { useState } from "react";
import { Particles } from "react-particles-js";
import { Link, NavLink, Redirect, useHistory } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { createLoginRequest } from "../store/actions/auth";
import Logo from "../assets/images/logo/HU LOGO-02.png";
import login_svg from "../assets/images/various_photos/login_svg.webp";
import Cookies from "js-cookie";

const SignIn = (props) => {
  const { createLoginRequest } = props;
  const token = Cookies.get("token");
  const history = useHistory();

  // Login Validations Schema
  const LoginValidationsSchema = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("Required"),
    password: Yup.string().required("Required"),
  });
  const [login, setLogin] = useState(false);
  return (
    <div className="container-fluid loginContainer">
      {/* back ground  */}
      {/* <Particles className="row back-ground"/> */}

      <div className="row mt-5">
        <div className="container mt-5 login-form ">
          <div className="row mt-5 mb-5">
            <div className="col-6 mt-5">
              <img src={login_svg} className="img-fluid" />
            </div>
            <div className="col-6 mt-5">
              <h1 className="signin-text mb-5">Sign In</h1>
              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={LoginValidationsSchema}
                onSubmit={(values, { resetForm }) => {
                  console.log(values);
                  createLoginRequest(values);
                  resetForm({ values: "" });
                }}
              >
                {({
                  errors,
                  handleBlur,
                  handleChange,
                  values,
                  touched,
                  handleSubmit,
                }) => (
                  <Form className="" action="#" handleSubmit={handleSubmit}>
                    {/* Email */}
                    <div className="form-group">
                      <label for="email" className="">
                        Email
                      </label>
                      <Field
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        handleChange={handleChange}
                        value={values["email"]}
                        handleBlur={handleBlur}
                      />
                      {errors.email && touched.email ? (
                        <div className="row col-12 mt-1 justify-content-start errorSchema">
                          {errors.email}
                        </div>
                      ) : null}
                    </div>

                    {/* Password */}
                    <div className="form-group">
                      <label for="password" className="">
                        Password
                      </label>
                      <Field
                        type="password"
                        id="password"
                        name="password"
                        className="form-control"
                        handleChange={handleChange}
                        value={values["password"]}
                        handleBlur={handleBlur}
                      />
                      {errors.password && touched.password ? (
                        <div className="row col-12 mt-1 justify-content-start errorSchema">
                          {errors.password}
                        </div>
                      ) : null}
                    </div>
                    <div className="form-group">
                      <input
                        type="checkbox"
                        name="checkbox"
                        className="form-form-check-input"
                        id="checkbox"
                      />
                      <label className="form-check-label" for="checkbox">
                        {" "}
                        Remember Me{" "}
                      </label>
                    </div>
                    <a
                      className="block text-right mt-2"
                      href="#"
                      className="row col-12 mt-1 justify-content-end"
                    >
                      Forgot password?
                    </a>
                    <button
                      className="btn btn-primary square large px-4 py-2 mt-sm-4 mt-1 col-sm-4 col-12 mr-1"
                      type="submit"
                    >
                      Sign In
                    </button>
                    {token ? (history.push("/"), history.go(0)) : ""}
                    <button
                      className="btn btn-danger square large px-4 py-2 mt-sm-4 mt-1 col-sm-4 col-12"
                      type="reset"
                    >
                      Reset
                    </button>
                    {login && token != "" ? <>{setLogin("")}</> : null}
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(
  ({ auth }) => ({
    auth,
  }),
  {
    createLoginRequest,
  }
)(SignIn);
