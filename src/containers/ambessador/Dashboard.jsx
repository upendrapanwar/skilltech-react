import React, { useEffect } from "react";
import banner from '../../assets/images/Banner.png';
import solarArrowUpBroken from '../../assets/images/solar_arrow-up-broken.svg';
import barChart from '../../assets/images/The-bar-chart-showing-the-monthly-refractivity-for-Abia-state1.svg';
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import { toast } from 'react-toastify';

const Dashboard = () => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    useEffect(() => {

    }, []);
    toast.configure();

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
                                    <h1>Agent / Ambassador Dashboard</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="hvg__main_container">
                <div class="container">

                    <div class="card welcome_user_card mb-4">
                        <div class="card-body">
                            <p class="mb-0">
                                Welcome to, <strong>{userInfo.name}</strong> <span class="user_icon"><i
                                    class="far fa-smile"></i></span>
                            </p>
                        </div>
                    </div>


                    <div class="hvg__card_section mb-4 ">
                        <div class="row d-flex ">
                            <div class="col-md-6">

                                <div class="card">
                                    <div class="card-header">
                                        <h4>Total Monthly Payouts (Last 4 months)</h4>
                                    </div>
                                    <div class="card-body">
                                        <div class="table-pie-image mt-2">
                                            <img src={barChart} alt="" />
                                        </div>
                                        <div class="amb-btn mt-4">
                                            <button type="button" class="btn btn-primary btn-color bt-size">View All Payouts
                                                <span class="arrow-btn"><img src={solarArrowUpBroken} alt="" /></span></button>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div class="col-md-6">
                                <div class="card">
                                    <div class="card-header">
                                        <h4>Top selling course packages</h4>
                                    </div>
                                    <div class="card-body">
                                        <div class="top_seller_package">
                                            <div class="top_seller_item">
                                                <div class="ts_col ts_label">Earnings to date</div>
                                                <div class="ts_col ts_value">R200,00</div>
                                            </div>
                                            <div class="top_seller_item">
                                                <div class="ts_col ts_label">Earnings to date</div>
                                                <div class="ts_col ts_value">R200,00</div>
                                            </div>
                                            <div class="amb-btn mt-4 mb-4">
                                                <button type="button" class="btn btn-primary btn-color bt-size">Update my
                                                    profile<span class="arrow-btn"><img src={solarArrowUpBroken} alt="" /></span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div class="hvg__card_section mb-4">
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
                                                <th scope="row">1</th>
                                                <td>Mark</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Jacob</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Larry</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div class="amb-btn">
                                    <button type="button" class="btn btn-primary btn-color bt-size">Go to courses <span
                                        class="arrow-btn"><img src={solarArrowUpBroken} alt="" /></span></button>
                                    <button type="button" class="btn btn-primary btn-color bt-size">View order history <span
                                        class="arrow-btn"><img src={solarArrowUpBroken} alt="" /></span></button>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="hvg__card_section mb-4">
                        <div class="card">
                            <div class="card-header">
                                <h4>Referrals this month</h4>
                            </div>
                            <div class="card-body">
                                <div class="table_view_panel table-responsive-sm">
                                    <table class="table table-striped">
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
                                                <td><span class="badge badge-success">Active</span></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td><span class="badge badge-success">Banned</span></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td><span class="badge badge-danger">Subscription failed</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="amb-btn mt-4">
                                    <h4 class="mb-3">Detailed reports</h4>
                                    <button type="button" class="btn btn-primary btn-color bt-size">Choose report<span
                                        class="arrow-btn"><img src={solarArrowUpBroken} alt="" /></span></button>
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
