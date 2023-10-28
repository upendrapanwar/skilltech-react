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

                                <div className="amb-btn">
                                    <button type="button" className="btn btn-primary btn-color bt-size">Go to courses <span
                                        className="arrow-btn"><img src={solarArrowUpBroken} alt="" /></span></button>
                                    <button type="button" className="btn btn-primary btn-color bt-size">View order history <span
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
