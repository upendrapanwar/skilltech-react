import React, { useEffect } from "react";
import banner from '../assets/images/homeBanner.svg';
import about from '../assets/images/about-3-5.svg';
import grid1 from '../assets/images/grid1.svg';
import grid2 from '../assets/images/grid2.svg';
import brokenArrow from '../assets/images/solar_arrow-up-broken.svg';
import brokenBlu from '../assets/images/solar_arrow-up-broken-blu.svg';
import graduationHat from '../assets/images/graduation-hat.svg';

import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { addToCart } from '../redux/cartSlice';


const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let premiumCourseFirstId = 4;
    let premiumCourseFirstImage = grid1;
    let premiumCourseFirstTitle = "Employability Programme";
    let premiumCourseFirstPrice = 1700;
    let premiumCoursePaymentType = 'one_off';

    let premiumCourseSecondId = 8;
    let premiumCourseSecondImage = grid1;
    let premiumCourseSecondTitle = "Process Incoming and Outgoing Telephone Calls";
    let premiumCourseSecondPrice = 450;
    
    
    useEffect(() => {

    }, []);
    /***********************************************************************/
    /***********************************************************************/
    /**
     * Redirects to login page
     * 
     */
    const handleLoginIn = (e) => {
        e.preventDefault();
        navigate("/login");
    }
    /***********************************************************************/
    /***********************************************************************/
    /**
     * Redirects to browse courses page
     * 
     */
    const handleBrowseCourse = () => {
        navigate('/browse-courses');
    }
    /***********************************************************************/
    /***********************************************************************/
    /**
     * Redirects to course details page
     * 
     */
    const handleVistaDetails = () => {
        console.log('clicked');
        navigate('/courses-details');
        
    }
    /***********************************************************************/
    /***********************************************************************/
    return (
        <>
            <Header />
            <div className="hvg__home_banner">
                <div className="hvg__banner_pic">
                    <img src={banner} alt="" />
                </div>
                <div className="home_banner_container">
                    <div className="container">
                        <div className="home_banner_panel">
                            <div className="col-md-5 banner_detail">
                                <h1 className="mb-3">Learn more.<br /> Do more.
                                </h1>
                                <p>Explore our catalogue of short courses for meaningful learning to help you develop your professional skills and personal power.
                                </p>
                                <button className="login-btn btn btn-warning bt-size" onClick={() => handleBrowseCourse()}>Browse Course
                                    <span className="arrow-btn">
                                        <img src={brokenBlu} alt="My Happy SVG" />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="best-plateform-section">
                <div className="container">

                    <div className="bp_content_wrapper">
                        <div className="col-md-4">

                            <div className="bp-heading">
                                <h3>Best Plateform To Learn Everything</h3>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="bp-inner-wrapper">
                                <div className="bp__item_row">
                                    <div className="bp-item">
                                        <div className="bg_icon">
                                            <img src={graduationHat} alt="" />
                                        </div>
                                        <div className="cat_label">Arts & Craft </div>
                                    </div>
                                    <div className="bp-item">
                                        <div className="bg_icon">
                                            <img src={graduationHat} alt="" />
                                        </div>
                                        <div className="cat_label">Coaching</div>
                                    </div>
                                    <div className="bp-item">
                                        <div className="bg_icon">
                                            <img src={graduationHat} alt="" />
                                        </div>
                                        <div className="cat_label">Online Business</div>
                                    </div>
                                </div>
                                <div className="bp__item_row">
                                    <div className="bp-item">
                                        <div className="bg_icon">
                                            <img src={graduationHat} alt="" />
                                        </div>
                                        <div className="cat_label">Passive Income</div>
                                    </div>
                                    <div className="bp-item">
                                        <div className="bg_icon">
                                            <img src={graduationHat} alt="" />
                                        </div>
                                        <div className="cat_label">Photography</div>
                                    </div>
                                    <div className="bp-item">
                                        <div className="bg_icon">
                                            <img src={graduationHat} alt="" />
                                        </div>
                                        <div className="cat_label">Teacher Training</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <section>
                <div className="home-about">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="home-about-content-wrapper">
                                    <div className="content-heading">
                                        <h3 className="mb-3">
                                            <span className="black" style={{ color: "#000000" }}>Learn.</span> <br />
                                            <span className="red" style={{ color: "#EB5757" }}>Refer.</span><br />
                                            <span className="black" style={{ color: "#000000" }}>Earn.</span>
                                        </h3>
                                    </div>
                                    <div className="content-para">
                                        <p>Earn while you learn with our referral program and qualify for discounts accross our catalogue of online learning programmes.</p>
                                        <button type="button" className="btn btn-primary btn-color bt-size mb-4">Explore Now<span className="arrow-btn">
                                            <img src={brokenArrow} alt="" /></span>
                                        </button>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="home-about-img-wrapper">
                                    <img className="home-about-img2" src={about} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className="courseCat-grid-section front__course_section">
                <div className="container">
                    <div className="section-heading text-center mb-4 pb-2">
                        <h2 className="mb-3">Featured Courses</h2>
                        <p>Lorem ipsum text of the printing and typesetting industryoremever since industry standard dum an unknowramble</p>
                    </div>
                    <div className="courseCat-grid-row d-flex justify-content-between align-items-center flex-wrap">
                        <div className="course_item">
                        <Link to="/courses-details" className="course-grid">
                                <figure className="figure">
                                    <img src={grid2} className="figure-img img-fluid rounded" alt=" figure." />
                                </figure>
                                <div className="course-details">
                                    <h4>The High Vista Course Package</h4>
                                    <div className="course_footer d-flex justify-content-between align-items-center">
                                        <span className="amb-btn mt-4">
                                            <button type="button" className="btn btn-primary btn-color bt-size">REGISTER NOW
                                                <span className="arrow-btn"><img src={brokenArrow} alt="" /></span>
                                            </button>
                                        </span>
                                        <span className="mt-4">R500/ per month</span>
                                    </div>

                                </div>
                            </Link>
                        </div>
                        <div className="course_item">
                        <Link to="#" className="course-grid">
                                <figure className="figure">
                                    <img src={grid1} className="figure-img img-fluid rounded" alt="figure." />
                                </figure>
                                <div className="course-details">
                                    <h4>{premiumCourseFirstTitle}</h4>
                                    <div className="course_footer d-flex justify-content-between align-items-center">
                                        <span className="amb-btn mt-4">
                                            <button type="button" className="btn btn-primary btn-color bt-size" onClick={() => dispatch(addToCart({premiumCourseFirstId, premiumCourseFirstTitle, premiumCourseFirstImage, premiumCourseFirstPrice,premiumCoursePaymentType}))}>REGISTER NOW<span className="arrow-btn">
                                                <img src={brokenArrow} alt="" /></span></button>
                                        </span>
                                        <span className="mt-4">R{premiumCourseFirstPrice} (excl vat)</span>
                                    </div>

                                </div>
                            </Link>
                        </div>
                        <div className="course_item">
                            <Link to="#" className="course-grid">
                                <figure className="figure">
                                    <img src={grid1} className="figure-img img-fluid rounded" alt="figure." />
                                </figure>
                                <div className="course-details">
                                    <h4>{premiumCourseSecondTitle}</h4>
                                    <div className="course_footer d-flex justify-content-between align-items-center">
                                        <span className="amb-btn mt-4">
                                            <button type="button" className="btn btn-primary btn-color bt-size" onClick={() => dispatch(addToCart({premiumCourseSecondId, premiumCourseSecondTitle, premiumCourseSecondImage, premiumCourseSecondPrice,premiumCoursePaymentType}))}>REGISTER NOW<span className="arrow-btn">
                                                <img src={brokenArrow} alt="" /></span>
                                            </button>
                                        </span>
                                        <span className="mt-4">R{premiumCourseSecondPrice} (excl vat)</span>
                                    </div>

                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="section_footer text-center">
                        <button className="login-btn btn btn-warning bt-size" onClick={()=> handleBrowseCourse()}>Browse Course
                            <span className="arrow-btn">
                                <img src={brokenBlu} alt="My Happy SVG" />
                            </span>
                        </button>
                    </div>
                </div>
            </section>

            <section className="front_content_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="front-content-wrapper">
                                <div className="content-heading mt-4">
                                    <h2 className="mb-3">Lorem ipsum dolor sit amet mollis felis</h2>
                                </div>
                                <div className="content-para">
                                    <p>Lorem ipsum dolor sit amet mollis felis dapibus arcu donec viverra. Pede phasellus eget.</p>

                                    <p>Lorem ipsum dolor sit amet mollis felis dapibus arcu donec viverra. Pede phasellus eget.</p>
                                    <button type="button" className="btn btn-primary btn-color bt-size mb-4">Explore Now<span className="arrow-btn">
                                        <img src={brokenArrow} alt="" /></span>
                                    </button>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="front-img-wrapper">
                                <img className="home-about-img2" src={about} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="hvg__section hvg__cta_section">
                <div className="container">
                    <div className="row">
                        <div className="call-to-action-wrapper text-center">
                            <h3 className="mb-4">Already part of the referral programme?</h3>
                            <p className="mw-600">Lorem ipsum text of the printing and typesetting industryoremever since industry standard dum an unknowramble</p>
                            <div className="amb-btn  pt-2 mt-4">
                                <button className="login-btn btn btn-warning bt-size" onClick={handleLoginIn}>LOG IN HERE <span className="arrow-btn"><img src={brokenBlu} alt="Log in here" /></span></button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="front_counter">
                            <div className="counter_item">
                                <h3 className="counter_num">50</h3>
                                <span className="counter_label">PROFESSIONAL<br />
                                    INSTRUCTORS</span>
                            </div>
                            <div className="counter_item">
                                <h3 className="counter_num">68</h3>
                                <span className="counter_label">NEW COURSES<br />
                                    EVERY YEAR</span>
                            </div>
                            <div className="counter_item">
                                <h3 className="counter_num">16</h3>
                                <span className="counter_label">LIVE SESSIONS<br />
                                    EVERY MONTH</span>
                            </div>
                            <div className="counter_item">
                                <h3 className="counter_num">250</h3>
                                <span className="counter_label">REGISTERED<br />
                                    STUDENTS</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Home;
