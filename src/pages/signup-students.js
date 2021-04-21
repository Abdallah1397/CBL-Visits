import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { createSignupStudentRequest } from "../store/actions/auth";
import Logo from "../assets/images/logo/HU LOGO-01.png";
const SignUp = (props) => {
  const { createSignupStudentRequest } = props;
  // SignUpValidationsSchema using Yup for validations
  const SignUpValidationsSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short")
      .max(50, "Too Long")
      .required("Required"),
    lastName: Yup.string()
      .min(2, "Too Short")
      .max(50, "Too Long")
      .required("Required"),
    email: Yup.string().email("Invalid Email").required("Required"),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum"),
    phone: Yup.string().required("Required"),
    country: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
  });
  return (
    <div className="container-fluid sign-up-background">
      {/* SignUp Main Form */}
      <div className="container  align-items-center ">
        <section className="row">
          <div className="container text-center col-10">
            <div className="row">
              <div className="col-lg-12 p-5 m-auto text-dark login-form">
                {/* Logo  */}
                <img
                  src={Logo}
                  className="col-md-3 col-sm-8 col-10 justify-content-center"
                />
                <Formik
                  initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                    gender: "",
                    phone: "",
                    country: "",
                    city: "",
                    address: "",
                    zipcode: "",
                    state: "",
                  }}
                  validationSchema={SignUpValidationsSchema}
                  onSubmit={(values, { resetForm }) => {
                    console.log(values);
                    createSignupStudentRequest(values);
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
                    <Form
                      className="row justify-content-center mt-5 signup"
                      action="#"
                      handleSubmit={handleSubmit}
                    >
                      {/* FisrtName */}
                      <label className="row col-12 mt-3">First Name</label>
                      <Field
                        type="text"
                        name="firstName"
                        id="firstName"
                        className="row col-12"
                        handleChange={handleChange}
                        value={values["firstName"]}
                        handleBlur={handleBlur}
                      />
                      {errors.firstName && touched.firstName ? (
                        <div className="row col-12 mt-1 justify-content-start errorSchema">
                          {errors.firstName}
                        </div>
                      ) : null}

                      {/* LastName */}
                      <label className="row col-12 mt-3">Last Name</label>
                      <Field
                        type="text"
                        name="lastName"
                        id="lastName"
                        className="row col-12"
                        handleChange={handleChange}
                        value={values["lastName"]}
                        handleBlur={handleBlur}
                      />
                      {errors.lastName && touched.lastName ? (
                        <div className="row col-12 mt-1 justify-content-start errorSchema">
                          {errors.lastName}
                        </div>
                      ) : null}
                      {/* Email */}
                      <label className="row col-12 mt-3"> Email</label>
                      <Field
                        type="email"
                        name="email"
                        id="email"
                        className="row col-12"
                        handleChange={handleChange}
                        value={values["email"]}
                        handleBlur={handleBlur}
                      />
                      {errors.email && touched.email ? (
                        <div className="row col-12 mt-1 justify-content-start errorSchema">
                          {errors.email}
                        </div>
                      ) : null}

                      {/* Password */}
                      <label className="row col-12 mt-3">Password</label>
                      <Field
                        type="password"
                        name="password"
                        id="password"
                        className="row col-12"
                        handleChange={handleChange}
                        value={values["password"]}
                        handleBlur={handleBlur}
                      />
                      {errors.password && touched.password ? (
                        <div className="row col-12 mt-1 justify-content-start errorSchema">
                          {errors.password}
                        </div>
                      ) : null}

                      {/* Gender */}
                      {/* <label className="row col-12 mt-3">Gender</label>
                      <radio
                        name="gender"
                        value="male"
                        handleChange={handleChange}
                      ></radio>
                      <radio
                        name="gender"
                        value="Female"
                        handleChange={handleChange}
                      ></radio> */}

                      {/* Phone */}
                      <label className="row col-12 mt-3">Phone</label>
                      <Field
                        type="text"
                        name="phone"
                        id="phone"
                        className="row col-12"
                        handleChange={handleChange}
                        value={values["phone"]}
                        handleBlur={handleBlur}
                      />
                      {errors.phone && touched.phone ? (
                        <div className="row col-12 mt-1 justify-content-start errorSchema">
                          {errors.phone}
                        </div>
                      ) : null}
                      {/* Country */}
                      <label className="row col-12 mt-3">Country</label>
                      <Field
                        type="text"
                        name="country"
                        id="country"
                        className="row col-12"
                        handleChange={handleChange}
                        value={values["country"]}
                        handleBlur={handleBlur}
                      />
                      {errors.country && touched.country ? (
                        <div className="row col-12 mt-1 justify-content-start errorSchema">
                          {errors.country}
                        </div>
                      ) : null}

                      {/* City */}
                      <label className="row col-12 mt-3">City</label>
                      <Field
                        type="text"
                        name="city"
                        id="city"
                        className="row col-12"
                      />
                      {/* Address */}
                      <label className="row col-12 mt-3">Address</label>
                      <Field
                        type="text"
                        name="address"
                        id="address"
                        className="row col-12"
                        handleChange={handleChange}
                        value={values["address"]}
                        handleBlur={handleBlur}
                      />
                      {errors.address && touched.address ? (
                        <div className="row col-12 mt-1 justify-content-start errorSchema">
                          {errors.address}
                        </div>
                      ) : null}

                      {/* Zip Code */}
                      <label className="row col-12 mt-3">Zip Code</label>
                      <Field
                        type="text"
                        id="zipcode"
                        name="zipcode"
                        className="row col-12"
                      />
                      {/* State */}
                      <label className="row col-12 mt-3">State</label>
                      <Field
                        type="text"
                        name="state"
                        id="state"
                        className="row col-12"
                      />
                      <button
                        className="btn square btn-primary col-sm-3 col-12 mt-4 mr-sm-2 "
                        type="submit"
                      >
                        Sign Up
                      </button>
                      <button
                        className="btn square btn-danger col-sm-3 col-12 mr-1 mt-sm-4 mt-1"
                        type="reset"
                      >
                        Reset
                      </button>
                    </Form>
                  )}
                </Formik>

                <Link
                  exact
                  to="/"
                  className="row col-12 justify-content-center mt-2"
                >
                  Have an account already? Sign in
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default connect(
  ({ auth }) => ({
    auth,
  }),
  {
    createSignupStudentRequest,
  }
)(SignUp);
