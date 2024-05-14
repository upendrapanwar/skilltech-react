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

const FAQs = () => {
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
    }, []);
    


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
                                    <h1>FAQs</h1>
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
                                <p style={{ textAlign: 'center' }}><u><strong>Frequently Asked Questions</strong></u></p>
                                <br /><br />
                                        <p className="pb-2 content-para">
                                            <strong>What does a Subscription cost?</strong>
                                            <br /><br />
                                            A Subscription to the High Vista Guild online courses is <strong>R500</strong> (five hundred rand) per month.
                                            <br /><br />
                                            Become a <strong>Guild Ambassador</strong> and you will not only cover the cost of your monthly subscription fee, but also generate an additional limitless and sustainable monthly passive income for yourself. For more information on becoming and Ambassador simply navigate to the <strong>'Become an Ambassador'</strong> link at the top of the page.
                                            <br /><br />
                                            A recurrent charge will be run on the Subscribers elected credit or debit card that simply levies the charge against the Subscribers card. The Subscribers card details are provided at the point of registration as a Subscriber, and then charged on a monthly basis going forward.
                                        </p>
                                        <br /><br />
                                        <p className="pb-2 content-para">
                                            <strong>What is included in your monthly Subscription?</strong>
                                            <br /><br />
                                            Your subscription unlocks a continuously growing library of online courses, offering endless learning opportunities. We encourage our subscribers to stay engaged and revisit our platform regularly to discover the latest additions tailored for an evolving learning experience.
                                        </p>
                                        <br /><br />
                                        <p className="pb-2 content-para">
                                            <strong>Who can become a Subscriber?</strong>
                                            <br /><br />
                                            <strong>Anyone!</strong> Our subscription is inclusive and welcomes individuals from all walks of life, including students, gap year participants, current learners, employed individuals, and those currently seeking employment. Regardless of your current status or circumstances, everyone is encouraged to become a subscriber and benefit from our online training.
                                        </p>
                                        <br /><br />
                                        <p className="pb-2 content-para">
                                            <strong>Who can become an Ambassador?</strong>
                                            <br /><br />
                                            <strong>Any Subscriber!</strong> We offer all subscribers the opportunity to become an Ambassador. This means that any subscriber can seamlessly transition to an Ambassador, at no additional cost, leveraging their existing benefits as a Subscriber, while also gaining the added benefits of being an Ambassador.
                                            <br /><br />
                                            For further details on the benefits of becoming an Ambassador, refer to the <i>'Why Become an Ambassador'</i> FAQ below or simply click on the <strong>'Become an Ambassador'</strong> link located at the top of the page.
                                        </p>
                                        <br /><br />
                                        <p className="pb-2 content-para">
                                            <strong>Why become an Ambassador?</strong>
                                            <br /><br />
                                            Joining our Ambassador program not only unlocks exclusive premium content at no extra cost but also empowers you with a personalized referral code. Share this code with your network—family, friends, colleagues, or acquaintances—and for every new subscriber you bring on board using your referral code, enjoy a 50% commission from their subscription fee directly into your pocket, for as long as they remain subscribed. It's a win-win opportunity to enrich your learning experience and boost your earnings effortlessly.
                                        </p>
                                        <br /><br />
                                        <p className="pb-2 content-para">
                                            <strong>How do I switch from being a Subscriber to becoming an Ambassador?</strong>
                                            <br /><br />
                                            After successfully completing your subscription and payment, you'll be directed to your Subscriber Dashboard. From there, simply navigate to the bottom of the page and click on the <strong>'Become an Ambassador'</strong> link to fill out the Ambassador Registration form. Additionally, if you'd like more information on the perks of becoming an Ambassador, you can find the <strong>'Become an Ambassador'</strong> link at the top of the page for quick access. Simply navigate to the bottom of the page and click on the <strong>'Become an Ambassador'</strong> link to fill out the Ambassador Registration form.
                                        </p>
                                        <br /><br />
                                        <p className="pb-2 content-para">
                                            <strong>What does it cost to become an Ambassador?</strong>
                                            <br /><br />
                                            Becoming an Ambassador comes at no extra cost to you, with an array of additional benefits. Simply <u>continue paying your monthly subscription fee</u> and enjoy the added perks of being an Ambassador. Elevate your experience with exclusive Ambassador privileges while seamlessly integrating your Ambassador status into your existing subscription plan. It's an opportunity to maximize your benefits without any additional financial commitment.
                                            <br /><br />
                                            When registering as an Ambassador, please ensure to provide accurate banking details to ensure prompt and hassle-free processing of referral fees. This will help us avoid any delays or issues with payments.
                                        </p>
                                        <br /><br />
                                        <p className="pb-2 content-para">
                                            <strong>Can I cancel my Subscription?</strong>
                                            <br /><br />
                                            Although cancellation of your subscription is an option, it's important to note that if you made the switch to becoming an Ambassador <u>you will forfeit</u> the exclusive benefits associated with being an Ambassador. This includes the financial benefit of earning 50% commission on referral subscription fees generated by both new and existing subscribers who used your referral code. We encourage thoughtful consideration before making any changes to your membership status to ensure you continue to enjoy the full spectrum of benefits.
                                        </p>
                                        <br /><br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );


}

export default FAQs;
