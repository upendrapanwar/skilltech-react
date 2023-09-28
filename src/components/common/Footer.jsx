import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    useEffect(() => {

    },[]);
    /**
     * Handle signup as ambassador
     * 
     */
    const handleSignUpAmbassador = (e) => {
        e.preventDefault();
        if(userInfo) {
            navigate('/learner/subscription');
        } else {
            navigate('/signup');
        }
        
    }
    /***********************************************************************/
    /***********************************************************************/

    return (
        <React.Fragment>
            <footer className="footer_section">
                <div className="container">
                    <div className="row footer-row">
                        <div className="col-md-5">
                            <div className="footer-content">
                                <h4>About Skill Tech Solutions</h4>
                                <p className="fContent">Lorem ipsum text of the printing and typesetting industryoremever since industry standard dum an unknowramble Lorem ipsum text of the printing and typesetting.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer-content">
                                <h4>Feature Links</h4>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="#">How it works</Link></li>
                                    <li><Link to="" onClick={handleSignUpAmbassador}>Become an ambassador</Link></li>
                                    <li><Link to="">Browse Courses</Link></li>
                                    <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                                    <li><Link to="/terms-of-service">Terms of Service</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="footer-content">
                                <h4>Contact Us</h4>
                                <p>8642 Yule Street, Arvada CO 80007</p>
                                <div className="d-flex ">
                                    <p><i className="fa fa-phone mr-1"></i>+1 23-4567-8920</p>
                                </div>
                                <div className="d-flex">
                                    <p><i className="fa fa-envelope mr-1"></i>info@yourmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="copyright-footer">
                    <div className="container">
                        <div className="d-flex footer-social justify-content-center align-items-center ">
                            <Link to=""><i className="fab fa-facebook"></i></Link>
                            <Link to=""><i className="fab fa-twitter-square"></i></Link>
                            <Link to=""><i className="fab fa-instagram"></i></Link>
                        </div>
                        <div className="copyright-content text-center mt-2">
                            <p>© Copyright 2023 - Skill Tech Solutions - All Right Reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default Footer;