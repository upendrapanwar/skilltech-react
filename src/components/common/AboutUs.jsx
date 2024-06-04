import React, { useEffect, useState } from "react";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import Loader from "../../components/common/Loader";
import { toast } from 'react-toastify';
import banner from '../../assets/images/Banner.png';
import solarArrowUpBroken from '../../assets/images/solar_arrow-up-broken.svg';
import axios from "axios";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from "../../assets/images/high-vista-guild.svg";
import demo_video_image from "../../assets/images/high_vista_demo_video.png";

const AboutUs = () => {
    let authInfo = JSON.parse(localStorage.getItem("authInfo"));
    let tmp_userInfo = JSON.parse(localStorage.getItem("userInfo"));
    let isLoggedIn = localStorage.getItem('isLoggedIn');
    let userInfo = '';
    console.log('authInfo=', authInfo);
    console.log('tmp_userInfo=', tmp_userInfo);
    console.log('isLoggedIn=', isLoggedIn);
    if (authInfo != null) {
        if (typeof authInfo.id != 'undefined') {
            userInfo = authInfo;
        }

    }
    if (tmp_userInfo != null) {
        if (typeof tmp_userInfo.id != 'undefined') {
            userInfo = tmp_userInfo;
        }
    }
    //const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    //userInfo = (userInfo === null) ? JSON.parse(localStorage.getItem("authInfo")) : '';  
    console.log('userInfo=', userInfo);

    let [loading, setLoading] = useState('false');
    let [userid, setUserid] = useState(userInfo.id);
    let [myCourses, setMyCourses] = useState('');
    const navigate = useNavigate();
    toast.configure();

    useEffect(() => {
        getMyCourses();
    }, []);
    /***********************************************************************/
    /***********************************************************************/
    /**
     * Get Users courses list
     * 
     */
    const getMyCourses = () => {
        axios.get('common/get-user-courses/' + userid).then(response => {
            toast.dismiss();

            if (response.data) {

                if (response.data.status) {
                    setMyCourses(response.data.data);
                    console.log(response.data);
                }

            }
        }).catch(error => {
            toast.dismiss();
            if (error.response) {
                toast.error('Code is not available', { position: "top-center", autoClose: 3000 });
            }
        });

    }
    /***********************************************************************/
    /***********************************************************************/
    /**
  * Handle courses redirects
  * 
  */
    const handleBackToDashboard = () => {
        navigate('/learner/dashboard');
    }
    /***********************************************************************/
    /***********************************************************************/

 
    return (

        <>
            {loading === true ? <Loader /> : ''}

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
                                    <h1>About Us</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-section">
                <div className="container">
                    <div className="hvg__card_section mb-0">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-8">
                                        <p className="pb-2 content-para">
                                            <strong>The High Vista Guild is committed to its core vision of providing every South African with an authentic and accessible chance to generate a sustainable income for themselves.</strong>
                                            <br /><br />
                                            The name <strong>'High Vista Guild'</strong> combines the concepts of <strong>‘High Vista’</strong>, an expansive, elevated view reminiscent of an eagle soaring over vast landscapes, with <strong>'Guild,'</strong> representing a group of people sharing a common goal or interest that sets standards for quality, protects the interests of its members, hold each other accountable, as well as provide a platform for collaboration and support to achieve common objectives. It's not about doing it alone but doing it together.
                                            <br /><br />
                                            <strong>Do you want to earn while you learn?</strong> Becoming a subscriber is the first step towards unlocking a treasure trove of learning opportunities. You have the chance to elevate your experience by becoming an Ambassador <strong>at no extra cost</strong>.
                                            <br /><br />
                                            The <strong>‘High Vista Guild’</strong> is an initiative meticulously designed to address two pivotal points and presents an idea that's a blend of a smart refer-a-friend approach, with a genuine chance at transformation.
                                            <br />
                                            <li>Firstly, we're opening new pathways to transformative online training, designed to reshape your future.</li>
                                            <li>Secondly, and here's the exciting part, you can expand your circle and unlock a new income stream for yourself without leaving your current job. </li>
                                        </p>
                                    </div>
                                    <div className="col-md-4">
                                        <img className="aboutus-img" src={logo} alt="" />
                                    </div>
                                    <div className="col-md-12">
                                        <p className="pb-2 content-para">
                                            Many live paycheque to paycheque, covering the basics, with little room to dream bigger. The struggle is real, and the solutions aren't always readily available. We need a game-changer. We need a roadmap to guide us.
                                            <br /><br />
                                            At the <strong>‘High Vista Guild’</strong>, we've harnessed our extensive knowledge, skills, and industry experience—including learnership and diploma training, Broad Based Black Economic Empowerment, Skills Development Facilitation, Employment Equity, and Human Resources Management—to create a groundbreaking solution. Designed for both the employed and unemployed, our innovative approach not only facilitates personal upskilling but also opens the door to earning a passive income. Join us in transforming your career trajectory and financial future, today."
                                            <br /><br />
                                            For more information on this innovative and exciting opportunity, please contact one of our friendly call centre agents on 012 110 4205.
                                        </p>
                                    </div>
                                </div>
                                <div className="row">
                                <div className="col-md-2"></div>
                                        <div className="col-md-8">
                                                <h3 className="text-center txt-blue">Watch our introduction video !</h3>
                                                <div className="amb_learn_video mb-4">
                                                    <iframe width="100%" height="480" src="https://www.youtube.com/embed/yAoLSRbwxL8"
                                                        title="Dummy Video" frameborder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                                </div>
                                        </div>
                                        <div className="col-md-2"></div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );


}

export default AboutUs;
