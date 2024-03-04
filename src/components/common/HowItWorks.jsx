import React, { useEffect, useState } from "react";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import Loader from "../../components/common/Loader";
import { toast } from 'react-toastify';
import banner from '../../assets/images/Banner.png';
import solarArrowUpBroken from '../../assets/images/solar_arrow-up-broken.svg';
import axios from "axios";
import { Link, useNavigate, useLocation } from 'react-router-dom';

const HowItWorks = () => {
    let authInfo = JSON.parse(localStorage.getItem("authInfo"));
    let tmp_userInfo = JSON.parse(localStorage.getItem("userInfo"));
    let isLoggedIn = localStorage.getItem('isLoggedIn');
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
    //const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    //userInfo = (userInfo === null) ? JSON.parse(localStorage.getItem("authInfo")) : '';  
    console.log('userInfo=',userInfo);

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
        axios.get('common/get-user-courses/'+ userid).then(response => {
                toast.dismiss();
    
                if (response.data) {
                    
                    if(response.data.status) {
                        setMyCourses(response.data.data);
                        console.log(response.data)
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
                    <img src={banner} alt=""/>
                </div>
                <div className="banner-container">
                    <div className="container">
                        <div className="banner-content">
                            <div className="banner-heading col-md-6">
                                <div className="row">
                                    <h1>How It Works</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="regitration-section">
                <div className="container">
                    <div className="col-md-12 pt-2">
                            {/* <div className="hvg__card_section">
                                <div className="card">
                                    
                                    <div className="card-body">
                                        <div className="table_view_panel table-responsive-sm">
                                            <table className="table table-striped">
                                                <thead>
                                                    <tr>
                                                    <th scope="col">#</th>
                                                        <th scope="col"><strong>OrderId</strong></th>
                                                        <th scope="col"><strong>Course Name</strong></th>
                                                        <th scope="col"><strong>Amount</strong></th>
                                                        <th scope="col"><strong>Payment Type</strong></th>
                                                        <th scope="col"><strong>Start date</strong></th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    
                                                {myCourses.length > 0 ? myCourses.map((item,i) =>
                                                    
                                                    (<tr>
                                                        <td><img style={{'height':'60px','width':"100%"}} src={item.image} alt={item.course_title}/></td>
                                                        <td>{item.orderid}</td>
                                                        <th scope="row">{item.course_title}</th>
                                                        <td>R{item.course_price}</td>
                                                        <td>{(item.paymentType ==='one_off') ? 'One Time' : 'Subscription'}</td>
                                                        <td>{item.createdAt}</td>
                                                    </tr>)  
                                                    ): <tr></tr>} 
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="amb-btn">
                                            <button type="button" className="btn btn-primary btn-color bt-size" onClick={() => handleBackToDashboard()}>Back to dashboard <span className="arrow-btn"><img src={solarArrowUpBroken} alt="" /></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                </div>

            </section>
    
                <Footer />
            </>
    );
        
    
}

export default HowItWorks;
