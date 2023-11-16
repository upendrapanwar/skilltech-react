import React, { useEffect, useState } from "react";
import banner from '../../assets/images/Banner.png';
import solarArrowUpBroken from '../../assets/images/solar_arrow-up-broken.svg';
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import Loader from "../../components/common/Loader";
import axios from "axios";
import { toast } from 'react-toastify';
import { useNavigate, useLocation } from 'react-router-dom';
import { clearCart } from '../../redux/cartSlice';
import { useSelector, useDispatch } from 'react-redux'

const Dashboard = () => {
    const userInfo = JSON.parse(localStorage.getItem("authInfo")) ? JSON.parse(localStorage.getItem("authInfo")) : null;
    let [loading, setLoading] = useState('false');
    let [myCourses, setMyCourses] = useState('');
    const dispatch = useDispatch();
    //let [userid, setUserid] = useState(userInfo.id);
    const udis = userInfo ? userInfo.id : null;
    let [userid, setUserid] = useState(udis);
    const location = useLocation();
    const userData = JSON.parse(localStorage.getItem("userInfo"));
    
    useEffect(() => {
        //console.log('isSubscriberRegister',userInfo.isSubscriberRegister);
        if(userInfo && userInfo.isSubscriberRegister === null){
            //completeRegistration();
        }
        let authInfo = {
            isSubscriberRegister: null
        };
        localStorage.setItem('authInfo', JSON.stringify(authInfo));
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
        
    }, []);
    toast.configure();
    const navigate = useNavigate();
    /***********************************************************************/
    /***********************************************************************/
    /**
     * Handle payment success from payfast
     * 
     */
    const paymentSuccess = async (response) => {
        let merchantData = localStorage.getItem("merchantData");
        let merchantDataResult = JSON.parse(merchantData);
        let is_recurring = '';
        if(merchantDataResult['item_description'] == "Order for Hign Vista Subscription") {
            is_recurring = 'yes'
        }
        if(merchantDataResult['item_description'] == "Order for one off payment") {
            is_recurring = 'no'
        }
        const dataArray = {
            'merchantData' : merchantDataResult,
            'userid' : userData.id,
            'payment_status': 'success',
            'is_recurring' : is_recurring,
            'is_active' : 'true'
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

    const cancelPayment = (response) => {   
        console.log('cancel payment=',response);
        let merchantData = localStorage.getItem("merchantData");
        let merchantDataResult = JSON.parse(merchantData);
        console.log('merchantDataResult=',merchantDataResult);
        let is_recurring = '';
        if(merchantDataResult['item_description'] == "Order for Hign Vista Subscription") {
            is_recurring = 'yes'
        }
        if(merchantDataResult['item_description'] == "Order for one off payment") {
            is_recurring = 'no'
        }
        const dataArray = {
            'merchantData' : merchantDataResult,
            'userid' : userData.id,
            'payment_status': 'cancel',
            'is_recurring' : is_recurring,
            'is_active' : 'false'
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
    const notifyPayment = (response) => {
        console.log('notify payment=',response);
        let merchantData = localStorage.getItem("merchantData");
        let merchantDataResult = JSON.parse(merchantData);
        let is_recurring = '';
        if(merchantDataResult['item_description'] == "Order for Hign Vista Subscription") {
            is_recurring = 'yes'
        }
        if(merchantDataResult['item_description'] == "Order for one off payment") {
            is_recurring = 'no'
        }
        const dataArray = {
            'merchantData' : merchantDataResult,
            'userid' : userData.id,
            'payment_status': 'success',
            'is_recurring' : is_recurring,
            'is_active' : 'true'
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
    /**
     * Handle complete regsitration
     * 
     */
    const completeRegistration = () => {
        setLoading(true);
        const dataArray = {'userid':userid};
        axios.post('common/complete-registration', dataArray).then(response => {
            toast.dismiss();
            if (response.data.status) {
                if(response.data.message === "Error while saving.") {
                    toast.success('Please complete your registration', { position: "top-center",autoClose: 3000 });
                }
                //navigate('/login');
            }
        }).catch(error => {
            toast.dismiss();
            if (error.response) {
                toast.error('Please complete your registration', { position: "top-center",autoClose: 3000 });
            }
        }).finally(() => {
            setTimeout(() => {
                setLoading(false);
            }, 300);
        });
    }
    /***********************************************************************/
    /***********************************************************************/
    /**
     * Handle after form submission
     * 
     */
    const handleRedirect = () => {
        navigate('/ambessador/ambassador-subscription');
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
                                    <h1>Subcriber Dashboard</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hvg__main_container">
                <div className="container">
                    <div className="row d-flex">
                        <div className="col-md-6 pt-2">
                            <div className="subscriber-content mr-5">
                                <h3 className="mb-4 ">Want to earn while you learn?<br /> Become a High Vista Ambassador now</h3>
                                <p className="mb-4">By referring those in your network to our catalogue of digital learning through the ambassador programme, you can earn R200 for every referral every month for as long as they stay signed up.
                                </p>
                                <p>To become a High Vista Ambassador, you need to have an active High Vista subscription.
                                </p>
                                <div className="amb-btn">
                                    <button type="button" className="btn btn-primary btn-color bt-size" onClick={handleRedirect}>Become an ambassador<span className="arrow-btn"><img src={solarArrowUpBroken} alt="" /></span></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 pt-2">
                            <div className="hvg__card_section">
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
                                                    {console.log('myCourses',myCourses)}
                                                {myCourses.length > 0 ? myCourses.map((item,i) =>
                                                    (<tr>
                                                        <th scope="row">{item.plan_name}</th>
                                                        <td>{item.createdAt}</td>
                                                    </tr>)  
                                                    ): <tr></tr>} 
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="amb-btn">
                                            <button type="button" className="btn btn-primary btn-color bt-size mb-2">Go to courses <span className="arrow-btn"><img src={solarArrowUpBroken} alt="" /></span></button>
                                            <button type="button" className="btn btn-primary btn-color bt-size">View order history <span className="arrow-btn"><img src={solarArrowUpBroken} alt="" /></span></button>
                                        </div>
                                    </div>
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
