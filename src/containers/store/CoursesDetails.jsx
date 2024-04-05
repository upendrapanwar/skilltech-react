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
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import { toast } from 'react-toastify';
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import "react-data-table-component-extensions/dist/index.css";
import { addToCart } from '../../redux/cartSlice';
import { useNavigate, useLocation } from 'react-router-dom';
import CartItem from "../../components/cart/CartItem";

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
    const navigate = useNavigate();
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart)
       
    console.log('locations=',locations);   
    useEffect(() => {
        getAllCourses();
        
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
            if(cart.length === 0){
                dispatch(addToCart({id, title, image, price, paymentType}));
            } else {
                toast.error("Already added one package", {
                    position: "top-center",
                    autoClose: 3000,
                  });
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
    
    const paginate = pageNumber => setCurrentPage(pageNumber);
    let price = 500;
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
                                    {locations && (locations.state != null) && (locations.state.title === "The High Vista Course Package") ?
                                    <h1>The High Vista Course Package</h1> : <h1>Become a High Vista Guild Ambassador</h1>
                                    }
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
                                            {locations && (locations.state != null) && (locations.state.title === "The High Vista Course Package") ?
                                                <img src={highVista} alt=""/> : <img src={authenticBookClub} alt=""/>
                                            }
                                                
                                            </div>

                                        </div>
                                    </div>

                                    <div className="col-md-6 ">
                                        <div className="courseCat-content">
                                            <div className="table-heading">
                                            {locations && (locations.state != null) && (locations.state.title === "The High Vista Course Package") ?
                                                <><h3>Become a High Vista Guild Subscriber</h3>
                                                <p className="pb-2">
                                                At the High Vista Guild, we believe in the power of lifelong learning. That's why
                                                we've developed 10 unique online short courses, tailor-made with your interests in
                                                mind. Whether you're looking at starting your own business, unleashing the power
                                                of social media income, epic event planning or mastering the art of blogging, our
                                                courses have something for everyone.
                                                </p></> : <><h3>Become a High Vista Guild Ambassador</h3>
                                                <p className="pb-2">Sign up for the High Vista Course Programme and choose to become an Ambassador! As an ambassador, you earn commission on every student who subscribes for the High Vista Guild course programme for as long as they stay are a subscriber.Subscribe now for the High Vista course programme to nlock access to the Ambassador programme</p></>
                                            }
                                            </div>
                                        </div>
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
                                <span className="amb-btn mt-4">
                                    <button type="button" className="btn btn-primary btn-color bt-size" onClick={handleBackToBrowse}>Back to browse
                                        <span className="arrow-btn">
                                            <img src ={solarArrowUpBroken} alt=""/>
                                        </span>
                                    </button>
                                </span>
                                <span className="amb-btn mt-4">
                                    <button type="button" 
                                    className="btn btn-primary btn-color bt-size" 
                                    // onClick={() => dispatch(addToCart({id, title, image, price, paymentType}))}
                                    onClick={() => handleSubscribeNow()}
                                    >Subscribe Now
                                        <span className="arrow-btn">
                                            <img src ={solarArrowUpBroken} alt=""/>
                                        </span>
                                    </button>
                                </span>
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

