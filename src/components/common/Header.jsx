import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/high-vista-guild.svg";
import { ShoppingCart } from "@mui/icons-material";
import { useSelector } from "react-redux";
import "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../../assets/css/style.css";
import "../../assets/css/all.css";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  console.log("userInfo=", userInfo);
  useEffect(() => {}, []);
  /***********************************************************************/
  /***********************************************************************/
  /**
   * Manages total quantity
   *
   */
  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };
  /***********************************************************************/
  /***********************************************************************/
  /**
   * Handles logout
   *
   */
  const logout = (e) => {
    localStorage.clear();
    //dispatch(setLoginStatus({isLoggedIn: false}));
    //dispatch(setUserInfo({userInfo: []}));
    window.location.href = "/login";
  };
  /***********************************************************************/
  /***********************************************************************/
  /**
   * Handle signup as ambassador
   *
   */
  const handleSignUpAmbassador = (e) => {
    e.preventDefault();
    if (userInfo) {
      navigate("/ambessador/ambassador-subscription");
    } else {
      navigate("/signup");
    }
  };
  /***********************************************************************/
  /***********************************************************************/
  const handleRoleBasedRedirect = (e) => {
    e.preventDefault();
    if (userInfo && userInfo.role === "ambassador") {
      navigate("/ambessador/dashboard");
    } else {
      navigate("/learner/dashboard");
    }
  };
  const handleRoleBasedRegistrationRedirect = (e) => {
    e.preventDefault();
    if (userInfo && userInfo.role === "ambassador") {
      navigate("/ambessador/ambassador-subscription");
    } else {
      navigate("/learner/subscription");
    }
  };
  const handleRoleBasedUpdateRedirect = (e) => {
    e.preventDefault();
    if (userInfo && userInfo.role === "ambassador") {
      navigate("/ambessador/ambassador-update");
    } else {
      navigate("/learner/updateprofile");
    }
  };

  return (
    <React.Fragment>
      <header className="hvg__header">
        <div className="hvg__innerHeader">
          <div className="container">
            <div className="header_panel">
              <div className="logo-header">
                <Link className="navbar-brand" to="/">
                  <div className="logo">
                    <img className="logo-img" src={logo} alt="" />
                  </div>
                </Link>
                <button
                  type="button"
                  className="navbar-toggler"
                  data-toggle="collapse"
                  data-target="#nav"
                  onClick="myFunction(this)"
                >
                  <div className="bar1"></div>
                  <div className="bar2"></div>
                  <div className="bar3"></div>
                </button>
              </div>
              <nav className="navbar navbar-expand-md main-navbar">
                <div className="main-menu">
                  <div
                    className="collapse navbar-collapse justify-content-between p-2"
                    id="nav"
                  >
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item active">
                        <Link className="nav-link" to="/">
                          Home <span className="sr-only">(current)</span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/about-us">
                          About Us
                        </Link>
                      </li>
                      {userInfo && userInfo.name ? (
                      ''
                      ) : (
                        <>
                          <li className="nav-item">
                            <Link className="nav-link" to="/signup">
                              Subscribe Now
                            </Link>
                          </li>
                        </>
                      )} 

                      <li className="nav-item">
                        <Link className="nav-link" to="/courses-details">
                          Become an Ambassador
                        </Link>
                      </li>
                      {/* <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Become an Ambassador
                                            </Link>
                                            <div className="dropdown-menu dropdown-menu-wrapper dropdown-menu-right" aria-labelledby="navbarDropdown">
                                                <Link className="dropdown-item" to="#">Action</Link>
                                                <Link className="dropdown-item" to="/how-it-works">How it works</Link>
                                                {userInfo && userInfo.name ? (
                                                    <>
                                                {userInfo.role === 'ambassador' ? (
                                                    ""
                                                    ) : 
                                                    <>
                                                    <Link className="dropdown-item" to="#" onClick={handleSignUpAmbassador}>Sign up as ambassador</Link>
                                                    <Link className="nav-link" to="/learner/subscription">Subscribe now</Link>
                                                    </>
                                                    }
                                                    </>
                                                ) :
                                                <>
                                                <Link className="dropdown-item" to="#" onClick={handleSignUpAmbassador}>Sign up as ambassador</Link>
                                                <Link className="nav-link" to="/learner/subscription">Subscribe now</Link>
                                                </>
                                                }
                                                
                                        
                                            </div>
                                        </li> */}

                      {userInfo && userInfo.name ? (
                      ''
                      ) : (
                      <>
                       <li className="nav-item">
                        <Link className="nav-link" to="/contact-us">
                          Contact Us
                        </Link>
                      </li>
                       <li className="nav-item">
                           <p>Have and account already?</p>
                       </li>
                      </>
                      )}

                      <li className="nav-item dropdown login-btn">
                        {userInfo && userInfo.name ? (
                          <>
                            <Link
                              className="nav-link dropdown-toggle"
                              to="#"
                              id="navbarDropdown"
                              role="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                              onClick={(e) => setToggle(!toggle)}
                            >
                              Welcome {userInfo.name}
                            </Link>
                            {toggle && (
                              <div
                                className="dropdown-menu dropdown-menu-wrapper dropdown-menu-right show"
                                aria-labelledby="navbarDropdown"
                              >
                                <Link
                                  className="dropdown-item"
                                  to="#"
                                  onClick={handleRoleBasedRedirect}
                                >
                                  My Dashboard
                                </Link>

                                {userInfo.role === "learner" ? (
                                  <Link
                                    className="dropdown-item"
                                    to="#"
                                    onClick={
                                      handleRoleBasedRegistrationRedirect
                                    }
                                  >
                                    Complete Registration
                                  </Link>
                                ) : null}
                                <Link
                                  className="dropdown-item"
                                  to="#"
                                  onClick={handleRoleBasedUpdateRedirect}
                                >
                                  Update Profile
                                </Link>
                                <Link
                                  className="dropdown-item"
                                  to="#"
                                  onClick={(e) => logout()}
                                >
                                  Logout
                                </Link>
                              </div>
                            )}
                          </>
                        ) : (
                          <>
                            <Link
                              className="nav-link"
                              to="/login"
                              id="navbarDropdown"
                              role="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                              onClick={() => setToggle(!toggle)}
                            >
                              Login
                            </Link>
                            {/*toggle && (
                                                        <div className="dropdown-menu dropdown-menu-wrapper show" aria-labelledby="navbarDropdown">
                                                            <Link className="dropdown-item" to="/login">Learner Sign in</Link>
                                                            <Link className="dropdown-item" to="/login">Ambassador Sign in</Link>
                                                            <Link className="dropdown-item" to="/login">Owner / Merchant Sign in</Link>
                                                        </div>
                                                    )*/}
                          </>
                        )}
                      </li>

                      {userInfo && userInfo.name ? (
                      <li className="nav-item">
                      <Link className="nav-link" to="/contact-us">
                        Contact Us
                      </Link>
                      </li>
                      ) : (
                      ''
                      )}
                      
                      <li className="nav-item">
                        <Link className="nav-link" to="/cart">
                          <ShoppingCart id="cartIcon" />
                          <span>{getTotalQuantity() || 0}</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
