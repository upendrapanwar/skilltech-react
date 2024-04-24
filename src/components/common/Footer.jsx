import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ecommerceConditionPDF from "../../assets/pdf/Skill_Tech_Solutions-Sale_of_Digital_E-Commerce_Products _2024.pdf";
import privecyConditionPDF from "../../assets/pdf/Skill_Tech_Solutions-Website_Privacy_Policy_2023.pdf";
import copyOfGuidePDF from "../../assets/pdf/Request_for_a_copy_of_the_Guide.pdf";
import accessToRecordPDF from "../../assets/pdf/Request_for_Access_to_Record.pdf";
import correctionDeletionOfPiPDF from "../../assets/pdf/Request_for_Correction,_Deletion,_Destroying_of_PI.pdf";
import feesPayablePDF from "../../assets/pdf/Outcome_of_Request_and_Fees_Payable.pdf";
import ObjectioOfPiPDF from "../../assets/pdf/Objection_to_Processing_of_PI.pdf";
import dataConsentWithdrawlFormPDF from "../../assets/pdf/Data_Subject_Consent_Withdrawal_Form_V1.pdf";
import dataConsentFormPDF from "../../assets/pdf/Data_Subject_Consent_Form_V1.pdf";

const Footer = () => {
  const navigate = useNavigate();
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    if (refresh) {
      setRefresh(false);
    }
  }, [refresh]);

  const handleVistaDetails = (e, title) => {
    e.preventDefault();
    navigate("/courses-details", { state: { title: title } }); 
    setRefresh(true);
  };
 
  return (
    <React.Fragment>
      <footer className="footer_section">
        <div className="container">
          <div className="row footer-row">
            <div className="col-md-4">
              <div className="footer-content">
                <h4>Legal Information</h4>
                <p className="fContent">
                  <a
                  href={ecommerceConditionPDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  >+ Sale of Digital E-Commerce Product</a><br />
                  <a
                  href={privecyConditionPDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  >+ Website Privecy Policy</a><br />
                  <a
                  href={accessToRecordPDF }
                  target="_blank"
                  rel="noopener noreferrer"
                  >+ PAIA Manuel</a><br />
                  <a
                  href={copyOfGuidePDF  }
                  target="_blank"
                  rel="noopener noreferrer"
                  >+ Request for a Copy of the Guide</a><br />
                  <a
                  href={ObjectioOfPiPDF }
                  target="_blank"
                  rel="noopener noreferrer"
                  >+ Objection to Processing of PI</a><br />
                  <a
                  href={correctionDeletionOfPiPDF }
                  target="_blank"
                  rel="noopener noreferrer"
                  >+ Request for Correction, Deletion, Destruction of PI</a><br />
                  <a
                  href={feesPayablePDF }
                  target="_blank"
                  rel="noopener noreferrer"
                  >+ Request Fees Payable</a><br />
                  <a
                  href={dataConsentFormPDF }
                  target="_blank"
                  rel="noopener noreferrer"
                  >+ Data Subject Consent Form</a><br />
                  <a
                  href={dataConsentWithdrawlFormPDF }
                  target="_blank"
                  rel="noopener noreferrer"
                  >+ Data Subject Consent Withdrawal Form</a><br />
                   
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
                    <Link to="" 
                      onClick={(e) =>
                      handleVistaDetails(e, "The High Vista Course Package")}
                      >Subscribe Now
                    </Link>
                  </li>
                  <li>
                    <Link to="" onClick={(e) =>
                      handleVistaDetails(e, "Become a High Vista Guild Ambassador")
                    }>
                      Become an ambassador
                    </Link>
                  </li>
                  {/* <li>
                    <Link to="/premium-courses">Premium Courses</Link>
                  </li> */}
                  <li>
                    <Link to="/faqs">FAQs</Link>
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
