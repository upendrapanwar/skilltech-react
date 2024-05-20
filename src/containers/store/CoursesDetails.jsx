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
    const [myApi, setMyApi] = useState([]);
    let [coursedData, setCoursedData] = useState(null);
    let [course, setCourse] = useState(null);
    const prevSearch = usePrevious({course, setCourse});
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const [searchUser, setSearchUser] = useState("");
    const [totalPost, setTotalPost] = useState(0);
    const [open, setOpen] = useState(false);
    // const [sidebarOpen, setSidebarOpen] = useState(false);
    const [showAmbassadorOption, setShowAmbassadorOption] = useState(false);
    const [isSubscribed, setIsSubscribed] = useState(false);
    const navigate = useNavigate();
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart)
       
    console.log('locations=',locations);   
    useEffect(() => {
        getAllCourses();
        getMyCourses();
        setShowAmbassadorOption(locations.state.title === "Become a High Vista Guild Ambassador" ? true : false)
    }, [course]);
    toast.configure();

    /***********************************************************************/
    /***********************************************************************/
    function usePrevious(value) {
        const ref = useRef(null);
        useEffect(() => {
           ref.current = value;
        });
        return ref.current;
    }
   
    /**
     * create short description from summary
     * 
     * @param {*} str 
     * @returns 
     */
    const createExcerpt = (str) => {
        let d = document.createElement('div');
        d.innerHTML = str;
        str = d.textContent || d.innerText || "" ;
        //str = str.trim();
        //console.log('string=',typeof(str))
        if (str.length > 10) {
            str = str.slice(0, 210)+'...';
        }
        return str;
    }
    /***********************************************************************/
    /***********************************************************************/
    
    const renderData = data => {
        
        return data.map((item, idx) => 
            (
                <div key={idx} className="course_item">
                            <a href="#" className="course-grid">
                                <figure className="figure">
                                   {
                                    (() => {
                                        switch(item.id) {
                                            case 60: 
                                            {   
                                                return (
                                                    <img src={CRAFTING_A_JOB_WINNING_CV} className="figure-img img-fluid rounded" alt={item.fullname}/>
                                                )
                                            }
                                            
                                            case 61: 
                                            {   
                                                return (
                                                    <img src={PATHWAY_TO_PURPOSE_CRAFTING_YOUR_IDEAL_CAREER_JOURNEY} className="figure-img img-fluid rounded" alt={item.fullname}/>
                                                )
                                            }
                                            
                                            case 62: 
                                            {   
                                                return (
                                                    <img src={ENTREPRENEURSHIP_UNLEASHED_FROM_VISION_TO_VENTURE} className="figure-img img-fluid rounded" alt={item.fullname}/>
                                                )
                                            }
                                            
                                            case 63: 
                                            {   
                                                return (
                                                    <img src={CLICK_SWIPE_ZOOM_BECOMING_A_COMPUTER_NAVIGATION_WIZ} className="figure-img img-fluid rounded" alt={item.fullname}/>
                                                )
                                            }
                                            
                                            case 64: 
                                            {   
                                                return (
                                                    <img src={FROM_FOLLOWERS_TO_FUNDS_UNLEASH_THE_POWER_OF_SOCIAL_MEDIA} className="figure-img img-fluid rounded" alt={item.fullname}/>
                                                )
                                            }
                                            
                                            case 65: 
                                            {   
                                                return (
                                                    <img src={grid1} className="figure-img img-fluid rounded" alt={item.fullname}/>
                                                )
                                            }
                                            
                                            case 66: 
                                            {   
                                                return (
                                                    <img src={LEARN_TO_THRIVE_THE_ULTIMATE_COURSE_ON_EFFECTIVE_LEARNING_STRATEGIES} className="figure-img img-fluid rounded" alt={item.fullname}/>
                                                )
                                            }
                                            
                                            case 67: 
                                            {   
                                                return (
                                                    <img src={MASTERING_THE_ART_OF_BLOGGING_FROM_NOVICE_TO_NOTEWORTHY} className="figure-img img-fluid rounded" alt={item.fullname}/>
                                                )
                                            }
                                            
                                            case 68: 
                                            {   
                                                return (
                                                    <img src={CHATGPT_WIZARDRY_NAVIGATING_THE_REALM_OF_AI_CONVERSATIONS} className="figure-img img-fluid rounded" alt={item.fullname}/>
                                                )
                                            }
                                            
                                            case 69: 
                                            {   
                                                return (
                                                    <img src={PODCASTING_101_FROM_IDEA_TO_EARBUDS_START_YOUR_SHOW} className="figure-img img-fluid rounded" alt={item.fullname}/>
                                                )
                                            }
                                            
                                            default: {
                                                return (
                                                    <img src={grid1} className="figure-img img-fluid rounded" alt={item.fullname}/>
                                                )
                                            }
                                            
                                        }
                                        
                                    })()
                                   }
                                    
                                </figure>
                                <div className="course-details">
                                    <h4>{item.fullname}</h4>
                                    <div className="course_footer d-flex justify-content-center align-items-center">
                                        {/*<span className="amb-btn mt-4">
                                            <button type="button" className="btn btn-primary btn-color bt-size">REGISTER NOW
                                                <span className="arrow-btn">
                                                    <img src ={solarArrowUpBroken} alt=""/>
                                                </span>
                                            </button>
                                        </span>*/}
                                        {/*<span className="mt-4">R500</span>*/}
                                    </div>
                                </div>
                            </a>
                        </div>
              
            ));
    };
    /**
     * Get all the courses from moodle web services
     * 
     */
    const getAllCourses = () => {
        try {
            var apiUrl = process.env.REACT_APP_MOODLE_COURSES_URL+'?wstoken='+process.env.REACT_APP_MOODLE_TOKEN+'&moodlewsrestformat=json&wsfunction=core_course_get_courses&options[ids][0]=60&options[ids][1]=61&options[ids][2]=62&options[ids][3]=63&options[ids][4]=64&options[ids][5]=64&options[ids][6]=65&options[ids][7]=66&options[ids][8]=67&options[ids][9]=68&options[ids][10]=69';
            axios.get(apiUrl).then(response => {
                if(response.status === 200) {
                    //console.log('data=',JSON.stringify(response.data));
                    setCoursedData(response.data);
                    let myApi = renderData(response.data);
                    
                    console.log('myApi=',myApi)
                    setMyApi(myApi);
                    setTotalPost(response.data.length)
                } else {
                    setCoursedData(null);
                }
                console.log('response=',response.data);
            })
        } catch(err) {
            return false;
        }
        
    }
    /***********************************************************************/
    /***********************************************************************/

    /**
     * Get my courses
     * 
     */
    const getMyCourses = () => {
        axios
          .get("common/get-my-courses/" + userInfo.id)
          .then((response) => {
            toast.dismiss();
    
            if (response.data) {
              if (response.data.data.length === 1) {
                setIsSubscribed(true);
                console.log("setMyCourses#######***** ", response.data.data);
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
    /***********************************************************************/
    /***********************************************************************/ 
    
    const indexOfLastPost = currentPage * postsPerPage; 
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = myApi?.slice(indexOfFirstPost, indexOfLastPost);
    const handleBackToBrowse = () => {
        navigate('/browse-courses');
    }

    // search users by user input
    const handleSearchInput = event => {
        setSearchUser(event.target.value);
        const newData = renderData(
            coursedData.filter(item =>
                //item.fullname.toLowerCase().includes(event.target.value)
                item.fullname.includes(event.target.value)
                
            )
        ); // render filtered data
        
        setMyApi(newData); // and set it to state
        console.log('api length', coursedData.length)
    };


    // const openNav = () => {
    //     setSidebarOpen(true);
    //   };
    
    //   const closeNav = () => {
    //     setSidebarOpen(false);
    //   };

    //   const handleSidebar = () => {
    //    navigate('/cart');
    //   };

      

    const handleSubscribeNow = () => {
        toast.dismiss();
            if(isSubscribed){
                Swal.fire("Package is already subscribed!");
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

    // const handleSubscribeNow = () => {
    //     toast.dismiss();
    //     if(userInfo && userInfo.name){
    //         if(cart.length === 0){
    //             dispatch(addToCart({id, title, image, price, paymentType}));
    //         } else {
    //             toast.error("Already added one package", {
    //                 position: "top-center",
    //                 autoClose: 3000,
    //               });
    //         }
    //     } else {
    //         dispatch(addToCart({id, title, image, price, paymentType}));
    //         // openNav();
    //         // navigate('/signup');
    //     }
    // };

    const handleButtonClick = () => {
        setShowAmbassadorOption(true); // Show the Ambassador option when the button is clicked
    };
    
    const paginate = pageNumber => setCurrentPage(pageNumber);
    let price = 10;
    let id = '9999';
    //let title = 'High Vista Package';
    let title = (locations && locations.state != null) ? locations.state.title : 'Subscription Package'; 
    let image = grid1;
    let paymentType = 'subscription';
    
    

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
                                    {locations && (locations.state != null) && (locations.state.title === "The High Vista Course Package") && !showAmbassadorOption ?
                                    <h1>Become a High Vista Guild Subscriber</h1> : 
                                    <>
                                    {showAmbassadorOption && (
                                    <h1>Become a High Vista Guild Ambassador</h1>
                                    )}
                                    </>
                                    }
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
                                            <figure><img src="assets/images/become/step_01.png" alt=""/></figure>
                                            <h4 className="mb-2">Register as a Subscriber</h4>
                                            <div className="amb_panel_info">
                                                <p><a href="">Register</a> as a monthly SUBSCRIBER and gain access to 10
                                                    engaging short courses. </p>
                                                <p className="note_small stp_green">8500 Monthly Subscription </p>
                                                <div className="ft_down_arrow">
                                                    <img src="assets/images/become/step_01-bttm.png" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="step_btn_ftr">
                                            <span>Step 1</span>
                                        </div>
                                    </div>

                                    <div className="amb_list_item">
                                        <div className="amb_list_item_panel">
                                            <figure><img src="assets/images/become/step_02.png" alt=""/></figure>
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
                                                    <img src="assets/images/become/step_02-bttm.png" alt=""/>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="step_btn_ftr">
                                            <span>Step 2</span>
                                        </div>
                                    </div>

                                    <div className="amb_list_item">
                                        <div className="amb_list_item_panel">
                                            <figure><img src="assets/images/become/step_03.png" alt=""/></figure>
                                            <h4 className="mb-2">Refer-a-Friend </h4>
                                            <div className="amb_panel_info">
                                                <p>Refer family, friends, colleagues or acquaintances to the High Vista
                                                    Guild.
                                                </p>
                                                <div className="ft_down_arrow">
                                                    <img src="assets/images/become/step_03-bttm.png" alt=""/>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="step_btn_ftr">
                                            <span>Step 3</span>
                                        </div>
                                    </div>

                                    <div className="amb_list_item">
                                        <div className="amb_list_item_panel">
                                            <figure><img src="assets/images/become/step_04.png" alt=""/></figure>
                                            <h4 className="mb-2">Earn Passive Income </h4>
                                            <div className="amb_panel_info">
                                                <p>For each referral that subscribes you get 50% cash back of their <a href="">
                                                        monthly</a> subscription as a referral fee, for as long as
                                                    they remain a subscriber.
                                                </p>
                                                <div className="ft_down_arrow">
                                                    <img src="assets/images/become/step_04-bttm.png" alt=""/>
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
                        <img className="amb-up" src="./assets/images/become/become_home_pic.png" alt=""/>
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
                                    <img src="assets/images/become/learn_step01.jpg" alt=""/>
                                </div>
                                <div className="learn_step_col learn_step_right">
                                    <div className="learn_right_step_info">
                                        <div className="l_r_info_icon">
                                            <img src="assets/images/become/learn_step_icon.jpg" alt=""/>
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
                                    <img src="assets/images/become/learn_step02.jpg" alt=""/>
                                </div>
                                <div className="learn_step_col learn_step_right">
                                    <div className="learn_right_step_info">
                                        <div className="l_r_info_icon">
                                            <img src="assets/images/become/learn_step_icon.jpg" alt=""/>
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
                                    <img src="assets/images/become/learn_step03.jpg" alt=""/>
                                </div>
                                <div className="learn_step_col learn_step_right">
                                    <div className="learn_right_step_info">
                                        <div className="l_r_info_icon">
                                            <img src="assets/images/become/learn_step_icon.jpg" alt=""/>
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
                                    <img src="assets/images/become/learn_step04.jpg" alt=""/>
                                </div>
                                <div className="learn_step_col learn_step_right">
                                    <div className="learn_right_step_info">
                                        <div className="l_r_info_icon">
                                            <img src="assets/images/become/learn_step_icon.jpg" alt=""/>
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
                        <p className="mw-600 mb-4">To become a High Vista Ambassador, select the option
                            below</p>

                        <div className="amb_learn_video mb-4">
                            <iframe width="100%" height="480" src="https://www.youtube.com/embed/yAoLSRbwxL8"
                                title="Dummy Video" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <div className="amb-btn mb-4 pb-4">
                            <button type="button" className="btn btn-primary btn-color bt-size">Become an
                                ambassador<span className="arrow-btn"><img src="./assets/images/solar_arrow-up-broken.svg"
                                        alt="My Happy SVG" /></span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>                        
            <div className="hvg__main_container courseCat-section">
                <div className="container">
                    <div className="hvg__card_section mb-0">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="catimg-wrapper">
                                            <div className="table-pie-image mt-2">
                                            {locations && (locations.state != null) && (locations.state.title === "The High Vista Course Package") && !showAmbassadorOption ?
                                                <img src={highVista} alt=""/> : 
                                                <>
                                                {showAmbassadorOption && (
                                                <img src={authenticBookClub} alt=""/>
                                                )}
                                                </>
                                            }
                                                
                                            </div>

                                        </div>
                                    </div>

                                    <div className="col-md-6 ">
                                        <div className="courseCat-content">
                                            <div className="table-heading">
                                            {locations && (locations.state != null) && (locations.state.title === "The High Vista Course Package") && !showAmbassadorOption ?
                                                <>
                                                <h3>Become a High Vista Guild Subscriber</h3>
                                                {/* <p className="pb-2">
                                                At the High Vista Guild, we believe in the power of lifelong learning. That's why
                                                we've developed 10 unique online short courses, tailor-made with your interests in
                                                mind. Whether you're looking at starting your own business, unleashing the power
                                                of social media income, epic event planning or mastering the art of blogging, our
                                                courses have something for everyone.
                                                </p> */}
                                                <p className="pb-2 content-para">
                                                A Subscription to the High Vista Guild online courses is R500 (five hundred rand) per month.
                                                <br /><br />
                                                A recurrent charge will be run on the Subscribers elected credit or debit card that simply levies the charge against the Subscribers card. The Subscribers card details are provided at the point of registration as a Subscriber, and then charged on a monthly basis going forward.
                                                <br /><br />
                                                Your subscription unlocks a continuously growing library of online courses, offering endless learning opportunities. 
                                                </p>
                                                </> 
                                                : <>
                                                <h3>Become a High Vista Guild Ambassador</h3>
                                                {showAmbassadorOption && (
                                                <p className="pb-2">Sign up for the High Vista Course Programme and choose to become an Ambassador! As an ambassador, you earn commission on every student who subscribes for the High Vista Guild course programme for as long as they stay are a subscriber.Subscribe now for the High Vista course programme to nlock access to the Ambassador programme</p>
                                                )}
                                                </>
                                            }
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {locations && (locations.state != null) && (locations.state.title === "The High Vista Course Package") && !showAmbassadorOption ?
                                    <>
                                    <div className="col-md-12">
                                    <p className="pb-2 content-para">
                                    We encourage our subscribers to stay engaged and revisit our platform regularly to discover the latest additions tailored for an evolving learning experience.
                                            <br /><br />
                                    Anyone can become a subscriber, including students, gap year participants, current learners, employed individuals, and those currently seeking employment. Regardless of your current status or circumstances, everyone is encouraged to become a subscriber and benefit from our online training.
                                                <br /><br />
                                                <strong>Do you want to earn while you learn?</strong> Becoming a subscriber is the first step towards unlocking a treasure trove of learning opportunities. You have the chance to elevate your experience by becoming an Ambassador <strong>at no extra cost</strong>.
                                                <br /><br />
                                                For further details on the benefits of becoming an Ambassador, simply click on the link located at the bottom of the page or select Become and Ambassador on the top menu of the page.
                                                <br /><br />
                                                Below is a list of some of the programmes you will have access to.
                                                </p>    
                                    </div>
                                    <div className="amb-btn">
                                    &nbsp;&nbsp;&nbsp;
                                    <button 
                                    type="button" 
                                    className="btn btn-primary btn-color bt-size"
                                    onClick={handleButtonClick}
                                    >
                                      Become an ambassador<span className="arrow-btn"><img src={solarArrowUpBroken} alt="" /></span>
                                    </button>
                                    </div>
                                    </>
                                    : 
                                    <>
                                    {showAmbassadorOption && (
                                        ""
                                    )}
                                    </>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {locations && (locations.state != null) && (locations.state.title === "The High Vista Course Package") && !showAmbassadorOption ?
                "" :
                <>
                {showAmbassadorOption && (
                <div className="courseCat-grid-section mt-5">
                    <div className="container">
                        <div className="hvg__card_section mb-0">
                            <div className="card">
                                <div className="card-body" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                    <img src={ambassador_layout} alt="" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )}
                </>
                }


                <div className="courseCat-grid-section mt-5">
                    <div className="container">
                    
                        <div className="courseCat-grid-row d-flex justify-content-between align-items-center flex-wrap">
                            {currentPosts}
                        </div>
                        <div className="course-details">
                            <div className="course_footer d-flex align-items-center">
                                {/* <span className="amb-btn mt-4">
                                    <button type="button" className="btn btn-primary btn-color bt-size" onClick={handleBackToBrowse}>Back to browse
                                        <span className="arrow-btn">
                                            <img src ={solarArrowUpBroken} alt=""/>
                                        </span>
                                    </button>
                                </span> */}
                                {userInfo && userInfo.id && userInfo.role !=='learner' ? 
                                    <span className="amb-btn mt-2">
                                        <button type="button" 
                                        className="btn btn-primary btn-color bt-size" 
                                        // disabled={isSubscribed}
                                        onClick={() => handleSubscribeNow()}
                                        >Add to cart
                                            <span className="arrow-btn">
                                                <img src ={solarArrowUpBroken} alt=""/>
                                            </span>
                                        </button>
                                    </span>
                                    :
                                    ""
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* <div>
            <Sidebar handleSidebar={handleSidebar} cartData={cart} isOpen={sidebarOpen} onClose={closeNav} />
            {sidebarOpen && (
                <div className="overlay" onClick={closeNav}></div>
            )}
            </div> */}

            <Footer />
        </>
    )
}

export default CoursesDetails;


// function Sidebar({ handleSidebar, cartData, isOpen, onClose }) {
//     return (
//         <>
//       <div id="mySidebar" className="sidebar" style={{ width: isOpen ? '550px' : '0' }}>
//         <a href="javascript:void(0)" className="closebtn" onClick={onClose}>×</a>
//         <div className="sidebar-cartItem">
//         {cartData?.map((item) => (
//                 <CartItem
//                   key={item.id}
//                   id={item.id}
//                   image={item.image}
//                   title={item.title}
//                   price={item.price}
//                   quantity={item.quantity}
//                   paymentType={item.paymentType}
//                 />
//                 ))}
//         </div>
//         <div className="text-center btn-cartItem">
//         <button type="button" 
//         className="btn btn-primary btn-color bt-size" 
//         onClick={handleSidebar}
//         >Proceed to Cart
//             <span className="arrow-btn">
//                 <img src ={solarArrowUpBroken} alt=""/>
//             </span>
//         </button>
//         </div>
//       </div>
//       </>
//     );
//   }

