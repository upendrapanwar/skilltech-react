import React, { useEffect, useState, useRef } from "react";
import banner from '../../assets/images/Banner.png';
import highVista from '../../assets/images/4-410x260_1.svg';
import solarArrowUpBroken from '../../assets/images/solar_arrow-up-broken.svg';
import grid1 from '../../assets/images/grid1.svg';
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import { toast } from 'react-toastify';
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import "react-data-table-component-extensions/dist/index.css";
import { addToCart } from '../../redux/cartSlice';
import { useNavigate } from 'react-router-dom';

const CoursesDetails = () => {
    const [myApi, setMyApi] = useState([]);
    let [coursedData, setCoursedData] = useState(null);
    let [course, setCourse] = useState(null);
    const prevSearch = usePrevious({course, setCourse});
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const [searchUser, setSearchUser] = useState("");
    const [totalPost, setTotalPost] = useState(0);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart)
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
                                    <img src={grid1} className="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure."/>
                                </figure>
                                <div className="course-details">
                                    <h4>{item.fullname}</h4>
                                    <div className="course_footer d-flex justify-content-between align-items-center">
                                        {/*<span className="amb-btn mt-4">
                                            <button type="button" className="btn btn-primary btn-color bt-size">REGISTER NOW
                                                <span className="arrow-btn">
                                                    <img src ={solarArrowUpBroken} alt=""/>
                                                </span>
                                            </button>
                                        </span>*/}
                                        <span className="mt-4">R500</span>
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
    const handleSubscribeNow = () => {
        navigate('/learner/subscription');
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
    
    const paginate = pageNumber => setCurrentPage(pageNumber);
    let price = 500;
    let id = '9999';
    let title = 'High Vista Package';
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
                                    <h1>Course Catalogue</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hvg__main_container courseCat-section">
               
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
                                    <button type="button" className="btn btn-primary btn-color bt-size" onClick={() => dispatch(addToCart({id, title, image, price, paymentType}))}>Add to cart
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
            
            <Footer />
        </>
    )
    
    
}

export default CoursesDetails;
