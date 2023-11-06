import React, { useEffect, useState, useRef } from "react";
import banner from '../../assets/images/Banner.png';
import highVista from '../../assets/images/4-410x260_1.svg';
import solarArrowUpBroken from '../../assets/images/solar_arrow-up-broken.svg';
import grid1 from '../../assets/images/grid1.svg';
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import { toast } from 'react-toastify';
import axios from "axios";
import "react-data-table-component-extensions/dist/index.css";
import Pagination from '../../containers/store/Pagination';
import Modal from '../../components/common/Modal';

const Courses = () => {
    const [myApi, setMyApi] = useState([]);
    let [coursedData, setCoursedData] = useState(null);
    let [course, setCourse] = useState(null);
    const prevSearch = usePrevious({course, setCourse});
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const [searchUser, setSearchUser] = useState("");
    const [totalPost, setTotalPost] = useState(0);
    const [open, setOpen] = useState(false);

    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
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
     * Handle pop up modal close
     */
    const handleClose = () => {
        setOpen(false);
    }
    /***********************************************************************/
    /***********************************************************************/
    /**
     * Handle pop up modal open
     */
    const handleOpen = (id) => {
        return;
        setOpen(true);
        try {
            var apiUrl = process.env.REACT_APP_MOODLE_COURSES_URL+'?wstoken='+process.env.REACT_APP_MOODLE_TOKEN+'&moodlewsrestformat=json&wsfunction=core_course_get_courses&options[ids][0]='+id;
            axios.get(apiUrl).then(response => {
                if(response.status === 200) {
                    console.log('course=',course);
                    if(prevSearch.course === course && course != null) {
                        return false;
                    }
                    //setCoursedData(response.data);
                    setCourse(response.data)
                    
                    
                } else {
                    setCourse(null);
                }
                console.log('response=',response.data);
                return true;
            })
        } catch(err) {
            return false;
        }
        
        
    }
    /***********************************************************************/
    /***********************************************************************/
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
    
    const Search = ({ onChange }) => {
        return (
            <div className="row">  
                <div className="col-md-8">
                    <input
                    className="form-control"
                    type="text"
                    autoFocus={true}
                    placeholder="Search Course"
                    onChange={onChange}
                    />
                </div>
            </div>
        );
    };
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
                                        <span className="amb-btn mt-4">
                                            <button type="button" className="btn btn-primary btn-color bt-size">REGISTER NOW
                                                <span className="arrow-btn">
                                                    <img src ={solarArrowUpBroken} alt=""/>
                                                </span>
                                            </button>
                                        </span>
                                        <span className="mt-4">R1500,00</span>
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
            var apiUrl = process.env.REACT_APP_MOODLE_COURSES_URL+'?wstoken='+process.env.REACT_APP_MOODLE_TOKEN+'&moodlewsrestformat=json&wsfunction=core_course_get_courses&options[ids][0]=4&options[ids][1]=8&options[ids][2]=9&options[ids][3]=16&options[ids][4]=19&options[ids][5]=60&options[ids][6]=61&options[ids][7]=62&options[ids][8]=63&options[ids][9]=64&options[ids][10]=64&options[ids][11]=65&options[ids][12]=66&options[ids][13]=67&options[ids][14]=68&options[ids][15]=69';
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
                
                <div className="container">

                    <div className="hvg__card_section mb-0">
                        <div className="card">
                            <div className="card-body">
                            {coursedData && coursedData.map((item,i) =>
                                
                                i == 0 && 
                                (<div className="row">
                                    <div className="col-md-6">
                                        <div className="catimg-wrapper">
                                            <div className="table-pie-image mt-2">
                                                <img src={highVista} alt=""/>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="col-md-6 ">
                                        <div className="courseCat-content">
                                            <div className="table-heading">
                                                <h3>{item.fullname}</h3>
                                                <p className="pb-2">{createExcerpt(item.summary)}</p>
                                                <p className="priceperMonth"><span>R1500,00 /</span> per month </p>
                                            </div>
                                            <div className="amb-btn mt-4">
                                                <button type="button" className="btn btn-primary btn-color bt-size" onClick={() => handleOpen(item.id)}>Learn More<span className="arrow-btn"><img src ={solarArrowUpBroken}  alt="My Happy SVG"/></span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                                
                            )}
                            </div>
                        </div>

                    </div>

                </div>
               
                <div className="courseCat-grid-section mt-5">
                    <div className="container">
                        <div className="table-heading text-center mb-4 pb-2">
                            <h3>Our Premium Courses</h3>
                        </div>
                        {/*<Search onChange={handleSearchInput} />*/}
                        <div className="row">  
                            <div className="col-md-8">
                                <input
                                className="form-control"
                                type="text"
                                autoFocus={true}
                                placeholder="Search Course"
                                onChange={handleSearchInput}
                                />
                            </div>
                        </div>
                        <br/>
                        <div className="courseCat-grid-row d-flex justify-content-between align-items-center flex-wrap">
                            {currentPosts}
                        </div>

                        <div className="courseCat-pagination pt-2 d-flex justify-content-center align-items-center">
                            <Pagination
                                postsPerPage={postsPerPage}
                                totalPosts={totalPost}
                                paginate={paginate}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div>
            <Modal isOpen={open} onClose={handleClose} style={{
                    position: "absolute",
                    border: "2px solid #000",
                    backgroundColor: "lightgray",
                    boxShadow: "2px solid black",
                    height: 150,
                    width: 240,
                    margin: "auto",
                    padding: "2%",
                    color: "white",
                }}>
                <>
                {course && course.map((item,i) =>
                    (<div className="row">
                        <div className="col-md-6">
                            <div className="catimg-wrapper">
                                <div className="table-pie-image mt-2">
                                    <img src={highVista} alt=""/>
                                </div>

                            </div>
                        </div>

                        <div className="col-md-6 ">
                            <div className="courseCat-content">
                                <div className="table-heading">
                                    <h3>{item.fullname}</h3>
                                    <p className="pb-2">{createExcerpt(item.summary)}</p>
                                    <p className="priceperMonth"><span>R1500,00 /</span> per month </p>
                                </div>
                                <div className="amb-btn mt-4">
                                    <button type="button" className="btn btn-primary btn-color bt-size" onClick={handleOpen(item.id)}>Learn More<span className="arrow-btn"><img src ={solarArrowUpBroken}  alt="My Happy SVG"/></span></button>
                                </div>
                            </div>
                        </div>
                    </div>)
                )}            
                </>
            </Modal>
            </div>
            <Footer />
        </>
    )
    
    
}

export default Courses;
