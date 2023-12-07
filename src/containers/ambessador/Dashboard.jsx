import React, { useEffect, useState } from "react";
import banner from '../../assets/images/Banner.png';
import solarArrowUpBroken from '../../assets/images/solar_arrow-up-broken.svg';
import barChart from '../../assets/images/The-bar-chart-showing-the-monthly-refractivity-for-Abia-state1.svg';
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import { toast } from 'react-toastify';
import { useNavigate, useLocation } from 'react-router-dom';
import { clearCart } from '../../redux/cartSlice';
import { useSelector, useDispatch } from 'react-redux'
import axios from "axios";

const Dashboard = () => {
    const userInfo = JSON.parse(localStorage.getItem("authInfo")) ? JSON.parse(localStorage.getItem("authInfo")) : null;
    const location = useLocation();
    let [myCourses, setMyCourses] = useState('');
    const userData = JSON.parse(localStorage.getItem("userInfo"));
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    var cartData = {};
    const navigate = useNavigate();
    let [referralCode, setReferralCode] = useState(false);
    useEffect(() => {
        let tmp = location.pathname.slice(location.pathname.lastIndexOf("/") , location.pathname.length);
        console.log('pathname=',tmp)
        if(tmp === "/success"){
            paymentSuccess()
        }
        if(tmp === "/cancel"){
            cancelPayment()
        }
        if(tmp === "/notify"){
            notifyPayment()
        }
        getMyCourses();
        getReferralCode();
    }, []);
    toast.configure();

    /***********************************************************************/
    /***********************************************************************/
    const getReferralCode = () => {
        //ex: HG00123
        const dataArray = {
            'userid':userInfo.id
        };
        axios.post('common/fetch-ambassador-code',dataArray).then(response => {
            toast.dismiss();

            if (response.data.status) {
                console.log('referral_code=',response.data.data.referral_code);
                //referralCode
                setReferralCode(response.data.data.referral_code);
            } 
        }).catch(error => {
            console.log('Error',error)    
            
        })
        
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
     * Handle order history
     * 
     */
    const handleOrderHistory = () => {
        navigate('/learner/order-history');
    }
    /***********************************************************************/
    /***********************************************************************/
    /**
     * Handle payment success from payfast
     * 
     */
    const paymentSuccess = async (response) => {
        
        cart.forEach((item,i) => {
            cartData[i] = item;
        })
        console.log('cartData=',cartData);
        let merchantData = localStorage.getItem("merchantData");
        let merchantDataResult = (merchantData) ? JSON.parse(merchantData) : '';
        if(merchantDataResult === '') {
            return;
        }
        let is_recurring = '';
        if(merchantDataResult['item_description'] === "Order for Hign Vista Subscription") {
            is_recurring = 'yes'
        }
        if(merchantDataResult['item_description'] === "Order for one off payment") {
            is_recurring = 'no'
        }
        const dataArray = {
            'merchantData' : merchantDataResult,
            'userid' : userData.id,
            'payment_status': 'success',
            'is_recurring' : is_recurring,
            'is_active' : 'true',
           'coursesData': cartData
        }
        
        axios.post('common/save-subscription', dataArray).then(response => {

            if (response) {
                //if(response.data.message === "Error while saving.") {
                    toast.success('Registration Successful!', { position: "top-center",autoClose: 3000 });
                    dispatch(clearCart());
                //}
                
                //navigate('/login');
            }
            localStorage.setItem('merchantData', '');
        }).catch(error => {
            toast.dismiss();
            localStorage.setItem('merchantData', '');
            if (error.response) {
                toast.error('Registration Failed!', { position: "top-center",autoClose: 3000 });
            }
        })
        getMyCourses();
    }
    /***********************************************************************/
    /***********************************************************************/
     /**
     * Get cancel payment data from payfast
     * 
     */
    const cancelPayment = (response) => { 
        cart.forEach((item,i) => {
            cartData[i] = item;
        })  
        console.log('cancel payment=',response);
        let merchantData = localStorage.getItem("merchantData");
        let merchantDataResult = (merchantData) ? JSON.parse(merchantData) : '';
        console.log('merchantDataResult=',merchantDataResult);
        let is_recurring = '';
        if(merchantDataResult === '') {
            return;
        }
        if(merchantDataResult['item_description'] === "Order for Hign Vista Subscription") {
            is_recurring = 'yes'
        }
        if(merchantDataResult['item_description'] === "Order for one off payment") {
            is_recurring = 'no'
        }
        const dataArray = {
            'merchantData' : merchantDataResult,
            'userid' : userData.id,
            'payment_status': 'cancel',
            'is_recurring' : is_recurring,
            'is_active' : 'false',
            'coursesData': cartData
        }
        
        //allMerchantData
        axios.post('common/save-subscription', dataArray).then(response => {

            if (response) {
                //if(response.data.message === "Error while saving.") {
                    toast.success('Registration Cancelled!', { position: "top-center",autoClose: 3000 });
                    dispatch(clearCart());
                //}
                
                //navigate('/login');
            }
        }).catch(error => {
            toast.dismiss();
            if (error.response) {
                toast.error('Registration Failed!', { position: "top-center",autoClose: 3000 });
            }
        })
        getMyCourses();
    }
    /***********************************************************************/
    /***********************************************************************/
     /**
     * Get notify payment from payfast
     * 
     */
    const notifyPayment = (response) => {
        cart.forEach((item,i) => {
            cartData[i] = item;
        })
        console.log('notify payment=',response);
        let merchantData = localStorage.getItem("merchantData");
        let merchantDataResult = (merchantData) ? JSON.parse(merchantData) : '';
        if(merchantDataResult === '') {
            return;
        }
        let is_recurring = '';
        if(merchantDataResult['item_description'] === "Order for Hign Vista Subscription") {
            is_recurring = 'yes'
        }
        if(merchantDataResult['item_description'] === "Order for one off payment") {
            is_recurring = 'no'
        }
        const dataArray = {
            'merchantData' : merchantDataResult,
            'userid' : userData.id,
            'payment_status': 'success',
            'is_recurring' : is_recurring,
            'is_active' : 'true',
            'coursesData': cartData
        }
        
        axios.post('common/save-subscription', dataArray).then(response => {

            if (response) {
                //if(response.data.message === "Error while saving.") {
                    toast.success('Registration Successful!', { position: "top-center",autoClose: 3000 });
                    dispatch(clearCart());
                //}
                
                //navigate('/login');
            }
            localStorage.setItem('merchantData', '');
        }).catch(error => {
            toast.dismiss();
            localStorage.setItem('merchantData', '');
            if (error.response) {
                toast.error('Registration Failed!', { position: "top-center",autoClose: 3000 });
            }
        })
        getMyCourses();
    }
    /***********************************************************************/
    /***********************************************************************/
    /**
     * Get Users courses list
     * 
     */
    const getMyCourses = () => {
        axios.get('common/get-my-courses/'+ userData.id).then(response => {
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
    return (
        <>
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
                                    <h1>Agent / Ambassador Dashboard</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="hvg__main_container">
                <div className="container">

                    <div className="card welcome_user_card mb-4">
                        <div className="card-body">
                            <p className="mb-0">
                                Welcome to, <strong>{userInfo.name}</strong> <span className="user_icon"><i
                                    className="far fa-smile"></i></span>
                            </p>
                        </div>
                    </div>

                    <div className="card welcome_user_card mb-4">
                        <div className="card-body">
                            <p className="mb-0">
                                Referral Code: <strong>{referralCode}</strong>
                            </p>
                        </div>
                    </div>


                    <div className="hvg__card_section mb-4 ">
                        <div className="row d-flex ">
                            <div className="col-md-6">

                                <div className="card">
                                    <div className="card-header">
                                        <h4>Total Monthly Payouts (Last 4 months)</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-pie-image mt-2">
                                            <img src={barChart} alt="" />
                                        </div>
                                        <div className="amb-btn mt-4">
                                            <button type="button" className="btn btn-primary btn-color bt-size">View All Payouts
                                                <span className="arrow-btn"><img src={solarArrowUpBroken} alt="" /></span></button>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4>Top selling course packages</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="top_seller_package">
                                            <div className="top_seller_item">
                                                <div className="ts_col ts_label">Earnings to date</div>
                                                <div className="ts_col ts_value">R200,00</div>
                                            </div>
                                            <div className="top_seller_item">
                                                <div className="ts_col ts_label">Earnings to date</div>
                                                <div className="ts_col ts_value">R200,00</div>
                                            </div>
                                            <div className="amb-btn mt-4 mb-4">
                                                <button type="button" className="btn btn-primary btn-color bt-size">Update my
                                                    profile<span className="arrow-btn"><img src={solarArrowUpBroken} alt="" /></span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className="hvg__card_section mb-4">
                        <div className="card">
                            <div className="card-header">
                                <h4>My Courses</h4>
                                <p className="mb-0">You are currently enrolled in..</p>
                            </div>
                            <div className="card-body">
                                <div className="table_view_panel table-responsive-sm">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">Course Name</th>
                                                <th scope="col">Start date</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                        {myCourses.length > 0 ? myCourses.map((item,i) =>
                                                    
                                                    (<tr>
                                                        <th scope="row">{console.log('item=',item)}{item.plan_name}</th>
                                                        <td>{item.createdAt}</td>
                                                    </tr>)  
                                                    ): <tr></tr>} 
                                        </tbody>
                                    </table>
                                </div>

                                <div className="amb-btn">
                                    <button type="button" className="btn btn-primary btn-color bt-size" onClick={() => handleCourses()}>Go to courses <span
                                        className="arrow-btn"><img src={solarArrowUpBroken} alt="" /></span></button>
                                    <button type="button" className="btn btn-primary btn-color bt-size" onClick={() => handleOrderHistory()}>View order history <span
                                        className="arrow-btn"><img src={solarArrowUpBroken} alt="" /></span></button>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="hvg__card_section mb-4">
                        <div className="card">
                            <div className="card-header">
                                <h4>Referrals this month</h4>
                            </div>
                            <div className="card-body">
                                <div className="table_view_panel table-responsive-sm">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">First Name</th>
                                                <th scope="col">Date of sign up</th>
                                                <th scope="col">Date of sign up</th>
                                                <th scope="col">Current Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td><span className="badge badge-success">Active</span></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td><span className="badge badge-success">Banned</span></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td><span className="badge badge-danger">Subscription failed</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="amb-btn mt-4">
                                    <h4 className="mb-3">Detailed reports</h4>
                                    <button type="button" className="btn btn-primary btn-color bt-size">Choose report<span
                                        className="arrow-btn"><img src={solarArrowUpBroken} alt="" /></span></button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Dashboard;
