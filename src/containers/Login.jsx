import React, { useEffect, useState } from "react";
import banner from "../assets/images/Banner.png";
import solarArrowUpBroken from "../assets/images/solar_arrow-up-broken.svg";
import solarArrowUpBrokenBlu from "../assets/images/solar_arrow-up-broken-blu.svg";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import LoginSchema from "../validation-schemas/LoginSchema";
import Loader from "../components/common/Loader";
import { Formik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const userInfo = JSON.parse(localStorage.getItem("authInfo"));
  const location = useLocation();
  console.log("userInfo=", userInfo);
  let [loading, setLoading] = useState("false");
  let [userid, setUserid] = useState(userInfo ? userInfo.id : null);
  const navigate = useNavigate();

  console.log("userInfo=", userInfo);
  useEffect(() => {}, []);
  toast.configure();

  /***********************************************************************/
  /***********************************************************************/
  /**
   * Handle after form submission
   *
   */
  const handleSubmit = (values, { resetForm }) => {
    setLoading(true);
    console.log("handlesubmit");
    //this.dispatch(setLoading({loading: true}));
    axios
      .post("common/signin", values)
      .then((response) => {
        toast.dismiss();
        if (response.data.status) {
          toast.success(response.data.message, {
            position: "top-center",
            autoClose: 3000,
          });
          let authInfo = {
            expTime: response.data.data.expTime,
            id: response.data.data["_id"],
            token: response.data.data.token,
          };
          let userInfo = {
            id: response.data.data["_id"],
            name:
              response.data.data.firstname + " " + response.data.data.surname,
            email: response.data.data.email,
            role: response.data.data.role,
          };
          localStorage.setItem("userInfo", JSON.stringify(userInfo));
          localStorage.setItem("authInfo", JSON.stringify(authInfo));
          localStorage.setItem("isLoggedIn", 1);
          resetForm();

          // if (
          //   response.data.data.role === "subscriber" ||
          //   response.data.data.role === "learner"
          // ) {
          //   navigate("/learner/dashboard");
          // }
          if (
            response.data.data.role === "learner"
          ) {
            navigate("/learner/subscription");
          }
          if (
            response.data.data.role === "subscriber"
          ) {
            navigate("/learner/dashboard");
          }
          if (response.data.data.role === "ambassador") {
            navigate("/ambessador/dashboard");
          }
          if (response.data.data.role === "owner") {
            navigate("/owner/dashboard");
          }
        } else {
          resetForm();
          toast.error(response.data.message, { autoClose: 3000 });
        }
      })
      .catch((error) => {
        toast.dismiss();
        if (error.response) {
          resetForm();
          toast.error(error.response.data.message, { autoClose: 3000 });
        }
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 300);
      });
  };
  /***********************************************************************/
  /***********************************************************************/

  /**
   * Handle redirect to signup page
   *
   */
  const redirectSignup = () => {
    navigate("/signup");
  };
  /***********************************************************************/
  /***********************************************************************/
  return (
    <>
      {loading === true ? <Loader /> : ""}
      <Header />

      <div className="hvg__page_banner">
        <div className="banner-thumnail">
          <img src={banner} alt="" />
        </div>
        <div className="banner-container">
          <div className="container">
            <div className="banner-content">
              <div className="banner-heading col-md-6">
                <div className="row">
                  <h1>Log In</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="Login-section">
        <div className="login-container container">
          <div className="login-row row">
            <div className="col-md-6">
              <div className="login-form">
                <div className="login-heading">
                  <h3>Welcome Back!</h3>
                  <p>Log in to your account</p>
                </div>
                <div className="login-form-wrapper">
                  <Formik
                    initialValues={{
                      email: "",
                      password: "",
                      //role: ''
                    }}
                    onSubmit={(values, { resetForm }) => {
                      handleSubmit(values, { resetForm });
                    }}
                    validationSchema={LoginSchema}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isValid,
                      isSubmitting,
                    }) => (
                      <form onSubmit={handleSubmit}>
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">
                            Email address
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder=""
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                          />
                          {touched.email && errors.email ? (
                            <small className="text-danger">
                              {errors.email}
                            </small>
                          ) : null}
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">
                            Password
                          </label>
                          <input
                            type="password"
                            name="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder=""
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                          />
                          {touched.password && errors.password ? (
                            <small className="text-danger">
                              {errors.password}
                            </small>
                          ) : null}
                        </div>

                        {/*<div className="form-group">
                                                    <label htmlFor="exampleFormControlSelect1">Login As</label>
                                                    <select className="form-control" name="role" id="exampleFormControlSelect1" onChange={handleChange} onBlur={handleBlur} value={values.role} >
                                                        <option value="">Select User Type</option>
                                                        <option value="subscriber">Subscriber</option>
                                                        <option value="ambassador">Ambassador</option>
                                                        <option value="owner">Owner</option>
                                                    </select>

                                                    {touched.role && errors.role ? (
                                                        <small className="text-danger">{errors.role}</small>
                                                    ) : null}
                                                    </div>*/}

                        <div className="checkfileds d-flex justify-content-between align-items-center mb-4">
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="exampleCheck1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="exampleCheck1"
                            >
                              Password
                            </label>
                          </div>
                          <div className="form-check">
                            <Link to="" className="form-check-label">
                              Forgot Password
                            </Link>
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-primary login-btn bt-size"
                        >
                          Login{" "}
                          <span className="arrow-btn">
                            <img src={solarArrowUpBroken} alt="My Happy SVG" />
                          </span>
                        </button>

                        {/*<div className="or text-center mt-3">
                                                    <h6>OR</h6>
                                                </div>

                                                <div className="mt-2 social-plus">
                                                    <p>You can also log in using your social media accounts</p>
                                                    <div className="d-flex ">
                                                        <button type="button" className="btn btn-danger go-plus mr-2"><span><img src={image3} alt="My Happy SVG" /></span>Sign in with Google</button>
                                                        <button type="button" className="btn btn-primary faceb"><span><img src={image2} alt="My Happy SVG" /></span>Login with Facebook</button>
                                                    </div>
                                                </div>*/}
                      </form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
            <div className="col-md-6 login-col">
              <div className="login-bg"></div>
              <div className="create-content">
                <div className="content">
                  <h4>Create an Account</h4>
                  <p>Join us today!</p>
                  <button
                    className="create-btn btn btn-warning bt-size"
                    onClick={redirectSignup}
                  >
                    Create Account{" "}
                    <span className="arrow-btn">
                      <img src={solarArrowUpBrokenBlu} alt="My Happy SVG" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
