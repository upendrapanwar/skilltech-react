import React, { useEffect, useState, useRef } from "react";
import banner from '../../assets/images/Banner.png';
import highVista from '../../assets/images/4-410x260_1.svg';
import solarArrowUpBroken from '../../assets/images/solar_arrow-up-broken.svg';
import grid1 from '../../assets/images/grid1.svg';
import authenticBookClub from '../../assets/images/authentic-book-club-scene-3-min1.jpg';
import CHATGPT_WIZARDRY_NAVIGATING_THE_REALM_OF_AI_CONVERSATIONS from '../../assets/images/course_images/CHATGPT_WIZARDRY_NAVIGATING_THE_REALM_OF_AI_CONVERSATIONS.png';
import CLICK_SWIPE_ZOOM_BECOMING_A_COMPUTER_NAVIGATION_WIZ from '../../assets/images/course_images/CLICK_SWIPE_ZOOM BECOMING A COMPUTER NAVIGATION WIZ.png';
import CRAFTING_A_JOB_WINNING_CV from '../../assets/images/course_images/CRAFTING_A_JOB_WINNING_CV.png';
import ENTREPRENEURSHIP_UNLEASHED_FROM_VISION_TO_VENTURE from '../../assets/images/course_images/ENTREPRENEURSHIP_UNLEASHED_FROM_VISION_TO_VENTURE.png';
import FROM_FOLLOWERS_TO_FUNDS_UNLEASH_THE_POWER_OF_SOCIAL_MEDIA from '../../assets/images/course_images/FROM_FOLLOWERS_TO_FUNDS_UNLEASH_THE_POWER_OF_SOCIAL_MEDIA.png';
import LEARN_TO_THRIVE_THE_ULTIMATE_COURSE_ON_EFFECTIVE_LEARNING_STRATEGIES from '../../assets/images/course_images/LEARN_TO_THRIVE_THE_ULTIMATE_COURSE_ON_EFFECTIVE_LEARNING_STRATEGIES.png';
import MASTERING_THE_ART_OF_BLOGGING_FROM_NOVICE_TO_NOTEWORTHY from '../../assets/images/course_images/MASTERING_THE_ART_OF_BLOGGING_FROM_NOVICE_TO_NOTEWORTHY.png';
import PATHWAY_TO_PURPOSE_CRAFTING_YOUR_IDEAL_CAREER_JOURNEY from '../../assets/images/course_images/PATHWAY_TO_PURPOSE_CRAFTING_YOUR_IDEAL_CAREER_JOURNEY.png';
import PODCASTING_101_FROM_IDEA_TO_EARBUDS_START_YOUR_SHOW from '../../assets/images/course_images/PODCASTING_101_FROM_IDEA_TO_EARBUDS_START_YOUR_SHOW.png';
import STEP_01 from '../../assets/images/become/step_01.png';
import STEP_01_BTTM from '../../assets/images/become/step_01-bttm.png';
import STEP_02 from '../../assets/images/become/step_02.png';
import STEP_02_BTTM from '../../assets/images/become/step_02-bttm.png';
import STEP_03 from '../../assets/images/become/step_03.png';
import STEP_03_BTTM from '../../assets/images/become/step_03-bttm.png';
import STEP_04 from '../../assets/images/become/step_04.png';
import STEP_04_BTTM from '../../assets/images/become/step_04-bttm.png';
import BECOME_HOME_PIC from '../../assets/images/become/become_home_pic.png';
import LEARN_STEP01 from '../../assets/images/become/learn_step01.jpg';
import LEARN_STEP_ICON from '../../assets/images/become/learn_step_icon.jpg';
import LEARN_STEP02 from '../../assets/images/become/learn_step02.jpg';
import LEARN_STEP03 from '../../assets/images/become/learn_step03.jpg';
import LEARN_STEP04 from '../../assets/images/become/learn_step04.jpg';
import SOLAR_ARROW_UP_BROKEN from '../../assets/images/solar_arrow-up-broken.svg';

import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import "react-data-table-component-extensions/dist/index.css";
import { addToCart } from '../../redux/cartSlice';
import { useNavigate, useLocation } from 'react-router-dom';
import CartItem from "../../components/cart/CartItem";
import ambassador_layout from '../../assets/images/Ambassador-layout.png';

const CoursesDetails = () => {
    const locations = useLocation();
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    let [myCourses, setMyCourses] = useState('');
    const [isNotSubscribed, setIsNotSubscribed] = useState(false);

    let price = 10;
    let id = '9999';
    let title = (locations && locations.state != null) ? locations.state.title : 'Subscription Package'; 
    let image = grid1;
    let paymentType = 'subscription';

    useEffect(() => {
        if(userInfo){
            getMyCourses();
        }
    }, []);

    const getMyCourses = () => {
        axios
          .get("common/get-my-courses/" + userInfo.id)
          .then((response) => {
            toast.dismiss();
    
            if (response.data) {
              if (response.data.data.length < 1) {
                setIsNotSubscribed(true);
              }
            }
          })
          .catch((error) => {
            toast.dismiss();
            if (error.response) {
              toast.error("Code is not available", {
                position: "top-center",
                autoClose: 3000,
              });
            }
          });
      };

    const handleSubscribeNow = () => {
        toast.dismiss();
        if(isNotSubscribed){
            Swal.fire("First become High Vista Guild Subscriber!");
        } else{
                if(cart.length === 0){
                    dispatch(addToCart({id, title, image, price, paymentType}));
                } else {
                    toast.error("Already added one package", {
                        position: "top-center",
                        autoClose: 3000,
                      });
                }
        }
    };
    

    return (
        
        <>
            <Header />
            
            <div className="hvg__page_banner">
                <div className="banner-thumnail">
                    <img src={banner} alt=""/>
                </div>
                <div className="banner-container">
                    <div className="container">
                        <div className="banner-content">
                            <div className="banner-heading col-md-6">
                                <div className="row">
                                    <h1>Become a High Vista Guild Ambassador</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="hvg__section  ambessador-section become-ambessador-section">
                <div className="container">
                    <div className="row">
                        <div className="ambessador-content text-center">
                            <h2 className="section-heading pb-4 mb-4">Become an ambassador!</h2>
                            <div className="amb-btn mb-4 pb-4">
                                <div className="become_amb_grid_wrap">
                                    <div className="amb_list_item">
                                        <div className="amb_list_item_panel">
                                            <figure><img src={STEP_01} alt=""/></figure>
                                            <h4 className="mb-2">Register as a Subscriber</h4>
                                            <div className="amb_panel_info">
                                                <p><a href="">Register</a> as a monthly SUBSCRIBER and gain access to 10
                                                    engaging short courses. </p>
                                                <p className="note_small stp_green">8500 Monthly Subscription </p>
                                                <div className="ft_down_arrow">
                                                    <img src={STEP_01_BTTM} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="step_btn_ftr">
                                            <span>Step 1</span>
                                        </div>
                                    </div>

                                    <div className="amb_list_item">
                                        <div className="amb_list_item_panel">
                                            <figure><img src={STEP_02} alt=""/></figure>
                                            <h4 className="mb-2">Register as an Ambassador</h4>
                                            <div className="amb_panel_info">
                                                <p><a href="">Switch</a> from <span
                                                        className="stp_green"><strong>SUBSCRIBER</strong></span> to
                                                    <span className="stp_blue"><strong>AMBASSADOR</strong></span> and start earning
                                                    a passive
                                                    income.
                                                </p>
                                                <p className="note_small stp_blue">R500 Monthly Subscription Ambassador must
                                                    remain • subscriber to qualify for thetash back </p>
                                                <div className="ft_down_arrow">
                                                    <img src={STEP_02_BTTM} alt=""/>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="step_btn_ftr">
                                            <span>Step 2</span>
                                        </div>
                                    </div>

                                    <div className="amb_list_item">
                                        <div className="amb_list_item_panel">
                                            <figure><img src={STEP_03} alt=""/></figure>
                                            <h4 className="mb-2">Refer-a-Friend </h4>
                                            <div className="amb_panel_info">
                                                <p>Refer family, friends, colleagues or acquaintances to the High Vista
                                                    Guild.
                                                </p>
                                                <div className="ft_down_arrow">
                                                    <img src={STEP_03_BTTM} alt=""/>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="step_btn_ftr">
                                            <span>Step 3</span>
                                        </div>
                                    </div>

                                    <div className="amb_list_item">
                                        <div className="amb_list_item_panel">
                                            <figure><img src={STEP_04} alt=""/></figure>
                                            <h4 className="mb-2">Earn Passive Income </h4>
                                            <div className="amb_panel_info">
                                                <p>For each referral that subscribes you get 50% cash back of their <a href="">
                                                        monthly</a> subscription as a referral fee, for as long as
                                                    they remain a subscriber.
                                                </p>
                                                <div className="ft_down_arrow">
                                                    <img src={STEP_04_BTTM} alt=""/>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="step_btn_ftr">
                                            <span>Step 4</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="hvg__section become__homecnt_section ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="amb-content">
                                <p className="pr-5 mt-3"><strong> SUBSCRIBER CAN SWITCH AND BECOME AND AMBASSADOR AND START EARNING
                                        A
                                        PASSIVE INCOME!</strong></p>

                                <p className="pr-5 mt-3">Becoming a subscriber is the first step towards unlocking a treasure trove
                                    of learning opportunities. You have
                                    the chance to elevate your experience by becoming an Ambassador at no extra cost.</p>
                                <p>As an Ambassador, not only do you retain access to our foundational courses, but you also
                                    unlock additional
                                    premium content for free. The real thrill begins when you receive your personal referral
                                    code. Sharing this code
                                    means sharing the gift of growth, and it rewards you with a passive income stream. Each new
                                    subscriber you
                                    bring on board that uses your referral code, translates to a 50% commission from their
                                    subscription fee, directly
                                    into your pocket, for as long as they remain subscribed.</p>
                                <p>Imagine the possibilities: Five referrals can net you with a passive income of R750. With ten
                                    referrals, that net
                                    profit soars to R2000 monthly. As your referral network grows, so does your net income
                                    potential.</p>
                                <p>We support our Ambassadors with a personalized dashboard to track earnings and manage
                                    referrals efficiently.
                                    It&#39;s crucial to note that our program is built on integrity and transparency and is not
                                    a pyramid scheme. Here,
                                    success is based on your direct referrals, without financial gain from the subsequent tiers
                                    of Subscribers they
                                    might recruit.</p>
                                <p>In essence, the High Vista Guild is more than just a learning platform; it&#39;s a community
                                    where education meets
                                    opportunity, enabling you to learn, grow, and earn. Whether you start as a subscriber or
                                    step up as an
                                    Ambassador, we&#39;re here to unlock doors to knowledge and financial freedom.</p>
                                <p>Embark on your success journey with us today!&quot;</p>
                                <p>For more information on this innovative and exciting opportunity, please contact one of our
                                    friendly call centre
                                    agents on 012 110 4205.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="become-amb-img">
                                <img className="amb-up" src={BECOME_HOME_PIC} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="hvg__section become__learnandearn_section">
                <div className="container">
                    <div className="ambessador-content text-center">
                        <h2 className="section-heading pb-4 mb-4">Learn and Earn</h2>
                        <div className="amb-btn mb-4 pb-4">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">

                            <div className="amb_learn_steps_listing">
                                <div className="amb_learn_steps_item">
                                    <div className="amb_learn_step_panel">
                                        <div className="learn_step_col">
                                            <img src={LEARN_STEP01} alt=""/>
                                        </div>
                                        <div className="learn_step_col learn_step_right">
                                            <div className="learn_right_step_info">
                                                <div className="l_r_info_icon">
                                                    <img src={LEARN_STEP_ICON} alt=""/>
                                                </div>
                                                <div className="l_r_info_cnt">
                                                    <p>1<sup>St</sup> Month </p>
                                                    <p>If <strong>5</strong> of your referrals subscribe to the High Vista
                                                        Guild, you will receive a passive income of 5 x R250 — R500 (your
                                                        monthly
                                                        subscription) = <span className="lr_total">R750! month</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="amb_learn_steps_item">
                                    <div className="amb_learn_step_panel">
                                        <div className="learn_step_col">
                                            <img src={LEARN_STEP02} alt=""/>
                                        </div>
                                        <div className="learn_step_col learn_step_right">
                                            <div className="learn_right_step_info">
                                                <div className="l_r_info_icon">
                                                    <img src={LEARN_STEP_ICON} alt=""/>
                                                </div>
                                                <div className="l_r_info_cnt">
                                                    <p>2<sup>nd</sup> Month </p>
                                                    <p>If <strong>10</strong> of your referrals subscribe to the High Vista
                                                        Guild, you will receive a passive income of 10 x R250 — R500 (your
                                                        monthly subscription) = <span className="lr_total">R2,000! month </span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="amb_learn_steps_item">
                                    <div className="amb_learn_step_panel">
                                        <div className="learn_step_col">
                                            <img src={LEARN_STEP03} alt=""/>
                                        </div>
                                        <div className="learn_step_col learn_step_right">
                                            <div className="learn_right_step_info">
                                                <div className="l_r_info_icon">
                                                    <img src={LEARN_STEP_ICON} alt=""/>
                                                </div>
                                                <div className="l_r_info_cnt">
                                                    <p>3<sup>rd</sup> Month </p>
                                                    <p>If <strong>15</strong> of your referrals subscribe to the I-hgh Vista
                                                        Guild, you will receive a passive income of 15 x R250 — R500 (your
                                                        monthly subscription) = <span className="lr_total">R3,250! month</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="amb_learn_steps_item">
                                    <div className="amb_learn_step_panel">
                                        <div className="learn_step_col">
                                            <img src={LEARN_STEP04} alt=""/>
                                        </div>
                                        <div className="learn_step_col learn_step_right">
                                            <div className="learn_right_step_info">
                                                <div className="l_r_info_icon">
                                                    <img src={LEARN_STEP_ICON} alt=""/>
                                                </div>
                                                <div className="l_r_info_cnt">
                                                    <p>4<sup>th</sup> Month </p>
                                                    <p>If <strong>20</strong> of your referrals subscribe to the High Vista
                                                        Guild, you will receive a passive income of 20 x R250 — R500 (your
                                                        monthly subscription) = <span className="lr_total"> R4,500! month</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className="hvg__section pt-2 pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="call-to-action-wrapper text-center">
                                <h3 className="mb-4">Watch our explainer video where complex ideas become simple, engaging and
                                    captivating.</h3>
                                {/* <p className="mw-600 mb-4">To become a High Vista Ambassador, select the option
                                    below</p> */}

                                <div className="amb_learn_video mb-4">
                                    <iframe width="100%" height="480" src="https://www.youtube.com/embed/yAoLSRbwxL8"
                                        title="Dummy Video" frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                </div>
                                <div className="amb-btn mb-4 pb-4">

                                {userInfo && userInfo.id && userInfo.role !=='learner' ? 
                                    <button type="button" className="btn btn-primary btn-color bt-size"
                                    onClick={() => handleSubscribeNow()}
                                    >
                                        Become an ambassador
                                        <span className="arrow-btn">
                                            <img src={SOLAR_ARROW_UP_BROKEN} alt="My Happy SVG" />
                                        </span>
                                    </button>
                                    :
                                    ""
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
            <Footer />
        </>
    )
}

export default CoursesDetails;
