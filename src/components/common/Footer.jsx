import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  useEffect(() => {}, []);
  /**
   * Handle signup as ambassador
   *
   */
  const handleSignUpAmbassador = (e) => {
    e.preventDefault();
    if (userInfo) {
      navigate("/learner/subscription");
    } else {
      navigate("/signup");
    }
  };
  /***********************************************************************/
  /***********************************************************************/
  const handleRoleBasedRegistrationRedirect = (e) => {
    e.preventDefault();
    if(userInfo && userInfo.role === 'ambassador') {
        navigate('/ambessador/ambassador-subscription'); 
    }
    if(userInfo && userInfo.role === 'ambassador') {
        navigate('/learner/subscription'); 
    } else {
        navigate('/signup');
    }
}

  return (
    <React.Fragment>
      <footer className="footer_section">
        <div className="container">
          <div className="row footer-row">
            <div className="col-md-4">
              <div className="footer-content">
                <h4>Legal Information</h4>
                <p className="fContent">
                  + Sale of Digital E-Commerce Product <br />
                  + Website Privecy Policy <br />
                  + PAIA Manuel <br />
                  + Request for a Copy of the Guide <br />
                  + Request for Access to Record <br />
                  + Objection to Processing of PI <br />
                  + Request for Correction, Deletion, Destruction of PI <br />
                  + Request Fees Payable <br />
                  + Data Subject Consent Form <br />+ Data Subject Consent
                  Withdrawal Form
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-content">
                <h4>Feature Links</h4>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link to="#" onClick={handleRoleBasedRegistrationRedirect}>Subscribe Now</Link>
                  </li>
                  <li>
                    <Link to="" onClick={handleSignUpAmbassador}>
                      Become an ambassador
                    </Link>
                  </li>
                  {/* <li>
                    <Link to="/premium-courses">Premium Courses</Link>
                  </li> */}
                  <li>
                    <Link to="#">FAQs</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-content">
                <h4>Contact Us</h4>
                <p>
                  Block E, Building 7, <br />
                  Centurion Gate Bussiness Park, <br />
                  124 Akkerboom Street, Centurion, 0157
                </p>
                <div className="d-flex ">
                <i className="fa fa-phone mr-1"></i>
                <Link to="#"><p>(012) 110-4205</p></Link>
                </div>
                <div className="d-flex">
                <i className="fa fa-envelope mr-1"></i>
                  <p><Link to="#"><p>guild@skilltechsa.com</p></Link></p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-content">
                <h4>Fraudulent Requests</h4>
                <p className="content-para">
                  If you receive a request via WhatsApp or any other platform
                  from someone claiming to be from The High Vista Guild or its
                  staff, asking for money to be deposited into a bank account,
                  DO NOT COMPLY. The High Vista Guild does not solicit payments
                  in this manner and simply levies the defined charge against
                  the payer's debit or credit card for any financial
                  transaction. Should you encounter such a request, please
                  report it to The High Vista Guild without delay.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-footer">
          <div className="container">
            {/* <div className="d-flex footer-social justify-content-center align-items-center ">
                            <Link to=""><i className="fab fa-facebook"></i></Link>
                            <Link to=""><i className="fab fa-twitter-square"></i></Link>
                            <Link to=""><i className="fab fa-instagram"></i></Link>
                        </div> */}
            <div className="copyright-content text-center mt-2">
              <p>
                © Copyright 2023 - Skill Tech Solutions - All Right Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
