import React, { useEffect, useState } from "react";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import Loader from "../../components/common/Loader";
import banner from '../../assets/images/Banner.png';
import solarArrowUpBroken from '../../assets/images/solar_arrow-up-broken.svg';
import { toast } from 'react-toastify';

import axios from "axios";
import Modal from "@material-ui/core/Modal";

import { useNavigate, useLocation } from 'react-router-dom';

const OrderHistory = () => {
    
    let authInfo = JSON.parse(localStorage.getItem("authInfo"));
    let tmp_userInfo = JSON.parse(localStorage.getItem("userInfo"));
    let isLoggedIn = localStorage.getItem('isLoggedIn');
    const [open, setOpen] = useState(false);
    let userInfo = '';
    console.log('authInfo=',authInfo);
    console.log('tmp_userInfo=',tmp_userInfo);
    console.log('isLoggedIn=',isLoggedIn);
    if(authInfo != null) {
      if(typeof authInfo.id != 'undefined') {
        userInfo = authInfo; 
      }
      
    }
    if(tmp_userInfo != null) {
      if(typeof tmp_userInfo.id != 'undefined') {
        userInfo = tmp_userInfo; 
      }
    }
    const location = useLocation()

    console.log('userInfo=',userInfo);

    let [loading, setLoading] = useState('false');
    let [myCourses, setMyCourses] = useState('');
    let [userid, setUserid] = useState(userInfo.id);
    
    const navigate = useNavigate();
    //const cart = useSelector((state) => state.cart)

    //console.log('carts=',cart)
    useEffect(() => {
        getMyCourses();
    }, []);
    toast.configure();
    /***********************************************************************/
    /***********************************************************************/
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
    const handleOpen = (orderid) => {
        
        setOpen(true);
        /*try {
            
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
        }*/
        
        
    }
    /***********************************************************************/
    /***********************************************************************/
     /**
     * Handle courses redirects
     * 
     */
     const handleCourses = () => {
        navigate('/learner/my-courses');
    }
    /***********************************************************************/
    /***********************************************************************/
     /**
     * Handle courses redirects
     * 
     */
     const handleBackToDashboard = () => {
        if ((userInfo.role === 'subscriber') || (userInfo.role === 'learner')) {
            navigate('/learner/dashboard');
        }
        if (userInfo.role === 'ambassador') {
            navigate('/ambessador/dashboard');
        }
    }
    /***********************************************************************/
    /***********************************************************************/
    /**
     * Get Users courses list
     * 
     */
    const getMyCourses = () => {
        axios.get('common/get-user-courses/'+ userid).then(response => {
                toast.dismiss(); 
    
                if (response.data) {
                    
                    if(response.data.status) { 
                        setMyCourses(response.data.data);
                        console.log(response.data.data)
                    }
                    
                }
            }).catch(error => {
                toast.dismiss();
                if (error.response) {
                    toast.error('Code is not available', { position: "top-center",autoClose: 3000 });
                }
            });
        
      }
      /***********************************************************************/
      /***********************************************************************/    
    return (
        
        <> 
            {loading === true ? <Loader /> : ''}
           
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
                                    <h1>Order History</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="regitration-section">
                <div className="container">
                    <div className="col-md-12 pt-2">
                            <div className="hvg__card_section">
                                <div className="card">
                                    
                                    <div className="card-body">
                                        <div className="table_view_panel table-responsive-sm">
                                            <table className="table table-striped">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col"><strong>OrderId</strong></th>
                                                        <th scope="col"><strong>Course Name</strong></th>
                                                        <th scope="col"><strong>Payment Mode</strong></th>
                                                        <th scope="col"><strong>Payment Status</strong></th>
                                                        <th scope="col"><strong>Amount</strong></th>
                                                        <th scope="col"><strong>Isrecurring</strong></th>
                                                        <th scope="col"><strong>Start date</strong></th>
                                                        {/*<th scope="col"><strong>Action</strong></th>*/}

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    
                                                {myCourses.length > 0 ? myCourses.map((item,i) =>
                                                    
                                                    (<tr>
                                                        <td><img style={{'height':'60px','width':"100%"}} src={item.image} alt={item.course_title}/></td>
                                                        <td>{item._id}</td>
                                                        <th scope="row">{item.plan_name}</th>
                                                        <td>{item.payment_mode}</td>
                                                        <td>{item.payment_status}</td>
                                                        <td>R{item.amount}</td>
                                                        <td>{item.is_recurring}</td>
                                                        <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                                                        {/*<td><button type="button" className="btn-primary btn-color bt-size mb-2" onClick={() => handleOpen(item.id)}>View Details</button>
                                                        <Modal
                onClose={handleClose}
                open={open}
                style={{
                    position: "absolute",
                    border: "2px solid #000",
                    backgroundColor: "lightgray",
                    boxShadow: "2px solid black",
                    height: 150,
                    width: 240,
                    margin: "auto",
                    padding: "2%",
                    color: "white",
                }}
            >
                <>
                    <h2>GFG</h2>
                    <p>A computer science portal!</p>
                </>
            </Modal>
            </td>*/}
                                                    </tr>)  
                                                    ): <tr></tr>} 
                                                </tbody>
                                            </table>
                                            
                                        </div>
                                        <div className="amb-btn">
                                            <button type="button" className="btn btn-primary btn-color bt-size mb-2" onClick={() => handleCourses()}>Go to my courses <span className="arrow-btn"><img src={solarArrowUpBroken} alt="" /></span></button>
                                            <button type="button" className="btn btn-primary btn-color bt-size" onClick={() => handleBackToDashboard()}>Back to dashboard <span className="arrow-btn"><img src={solarArrowUpBroken} alt="" /></span></button>
                                        </div>  
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

export default OrderHistory;
