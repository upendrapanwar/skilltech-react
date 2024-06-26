import React, { useEffect, useState, useRef } from "react";
import banner from '../../assets/images/Banner.png';
import highVista from '../../assets/images/HVG-2024-Inages-2.jpg';
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
import EMPLOYABILITY from '../../assets/images/course_images/EMPLOYABILITY.jpg';
import TECHNOPRENEOUR from '../../assets/images/course_images/TECHNOPRENEOUR.jpg';
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
    const [postsPerPage] = useState(12);
    // const [postsPerPage] = useState(10);
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
        if(userInfo){
            getMyCourses();
        }
    }, []);
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

                                            case 70: 
                                            {   
                                                return (
                                                    <img src={EMPLOYABILITY} className="figure-img img-fluid rounded" alt={item.fullname}/>
                                                )
                                            }
                                            case 71: 
                                            {   
                                                return (
                                                    <img src={TECHNOPRENEOUR} className="figure-img img-fluid rounded" alt={item.fullname}/>
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
                                    {/* <h4>{item.fullname}</h4> */}
                                    <h4>{getFullName(item.fullname)}</h4>
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

    const getFullName = (fullname) => {
        if (fullname === "Assistant Life Coach ") {
          return "Employability";
        } else if (fullname === "Community Counsellor") {
          return "Technopreneur";
        } else {
          return fullname;
        }
      };


    /**
     * Get all the courses from moodle web services
     * 
     */
    const getAllCourses = () => {
        try {
            // var apiUrl = process.env.REACT_APP_MOODLE_COURSES_URL+'?wstoken='+process.env.REACT_APP_MOODLE_TOKEN+'&moodlewsrestformat=json&wsfunction=core_course_get_courses';
            var apiUrl = process.env.REACT_APP_MOODLE_COURSES_URL+'?wstoken='+process.env.REACT_APP_MOODLE_TOKEN+'&moodlewsrestformat=json&wsfunction=core_course_get_courses&options[ids][0]=60&options[ids][1]=61&options[ids][2]=62&options[ids][3]=63&options[ids][4]=64&options[ids][5]=64&options[ids][6]=65&options[ids][7]=66&options[ids][8]=67&options[ids][9]=68&options[ids][10]=69&options[ids][11]=70&options[ids][12]=71';
            axios.get(apiUrl).then(response => {
                if(response.status === 200) {
                    //console.log('data=',JSON.stringify(response.data));
                    setCoursedData(response.data);
                    console.log('CoursedData',response.data)
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
    console.log("indexOfLastPost", indexOfLastPost);
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    console.log("indexOfFirstPost", indexOfFirstPost);
    const currentPosts = myApi?.slice(indexOfFirstPost, indexOfLastPost);
    console.log("currentPosts", currentPosts);

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
        navigate('/become-ambassador');
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
                                    <h1>Become a High Vista Guild Subscriber</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="hvg__main_container courseCat-section">
                <div className="container">
                    <div className="hvg__card_section mb-0">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="catimg-wrapper">
                                            <div className="table-pie-image mt-2">
                                                <img src={highVista} alt=""/> : 
                                            </div>

                                        </div>
                                    </div>

                                    <div className="col-md-6 ">
                                        <div className="courseCat-content">
                                            <div className="table-heading">
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
                                                <br /><br />
                                                We encourage our subscribers to stay engaged and revisit our platform regularly to discover the latest additions tailored for an evolving learning experience.
                                            
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-md-12">
                                    <p className="pb-2 content-para">
                                    
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                

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

