import React, { useEffect, useState } from "react";
import banner from '../../assets/images/Banner.png';
import solarArrowUpBroken from '../../assets/images/solar_arrow-up-broken.svg';
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import Loader from "../../components/common/Loader";
import axios from "axios";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const userInfo = JSON.parse(localStorage.getItem("authInfo")) ? JSON.parse(localStorage.getItem("authInfo")) : null ;
    let [loading, setLoading] = useState('false');
    //let [userid, setUserid] = useState(userInfo.id);
    const udis = userInfo ? userInfo.id : null;
    let [userid, setUserid] = useState(udis);

    useEffect(() => {
        //console.log('isSubscriberRegister',userInfo.isSubscriberRegister);
        if(userInfo && userInfo.isSubscriberRegister === null){
            completeRegistration();
        }
        let authInfo = {
            isSubscriberRegister: null
        };
        localStorage.setItem('authInfo', JSON.stringify(authInfo));
    }, []);
    toast.configure();
    const navigate = useNavigate();
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
            <div class="hvg__page_banner">
                <div class="banner-thumnail">
                    <img src={banner} alt="" />
                </div>
                <div class="banner-container">
                    <div class="container">
                        <div class="banner-content">
                            <div class="banner-heading col-md-6">
                                <div class="row">
                                    <h1>Subcriber Dashboard</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="hvg__main_container">
                <div class="container">
                    <div class="row d-flex">
                        <div class="col-md-6 pt-2">
                            <div class="subscriber-content mr-5">
                                <h3 class="mb-4 ">Want to earn while you learn?<br /> Become a High Vista Ambassador now</h3>
                                <p class="mb-4">By referring those in your network to our catalogue of digital learning through the ambassador programme, you can earn R200 for every referral every month for as long as they stay signed up.
                                </p>
                                <p>To become a High Vista Ambassador, you need to have an active High Vista subscription.
                                </p>
                                <div class="amb-btn">
                                    <button type="button" class="btn btn-primary btn-color bt-size" onClick={handleRedirect}>Become an ambassador<span class="arrow-btn"><img src={solarArrowUpBroken} alt="" /></span></button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 pt-2">
                            <div class="hvg__card_section">
                                <div class="card">
                                    <div class="card-header">
                                        <h4>My Courses</h4>
                                        <p class="mb-0">You are currently enrolled in..</p>
                                    </div>
                                    <div class="card-body">
                                        <div class="table_view_panel table-responsive-sm">
                                            <table class="table table-striped">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Course Name</th>
                                                        <th scope="col">Start date</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">Skilful selling</th>
                                                        <td>Mark</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Assertiveness</th>
                                                        <td>Jacob</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Skilful selling</th>
                                                        <td>Larry</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Skilful selling</th>
                                                        <td>Mark</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Assertiveness</th>
                                                        <td>Jacob</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="amb-btn">
                                            <button type="button" class="btn btn-primary btn-color bt-size mb-2">Go to courses <span class="arrow-btn"><img src={solarArrowUpBroken} alt="" /></span></button>
                                            <button type="button" class="btn btn-primary btn-color bt-size">View order history <span class="arrow-btn"><img src={solarArrowUpBroken} alt="" /></span></button>
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
