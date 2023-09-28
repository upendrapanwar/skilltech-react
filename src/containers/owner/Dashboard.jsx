import React, { useEffect } from "react";
import banner from '../../assets/images/Banner.png';
import solarArrowUpBroken from '../../assets/images/solar_arrow-up-broken.svg';
import barChart from '../../assets/images/The-bar-chart-showing-the-monthly-refractivity-for-Abia-state1.svg';
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import { toast } from 'react-toastify';

const Dashboard = () => {

    useEffect(() => {

    }, []);
    toast.configure();

    /***********************************************************************/
    /***********************************************************************/

    /**
     * Handle after form submission
     * 
     */

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
                                    <h1>Owner Dashboard</h1>
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
                                Welcome to, <strong>Smith Moory</strong> <span class="user_icon"><i class="far fa-smile"></i></span>
                            </p>
                        </div>
                    </div>
                    <div class="hvg__card_section mb-4">
                        <div class="card">
                            <div class="card-header">
                                <h4>Payouts due this month</h4>
                            </div>
                            <div class="card-body">
                                <div class="table_view_panel table-responsive-sm">
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">First Name</th>
                                                <th scope="col">Last Name</th>
                                                <th scope="col">Agent Code</th>
                                                <th scope="col">Balance Due</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">John</th>
                                                <td>Mark</td>
                                                <td>17 Aug 2023</td>
                                                <td>R 500</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div class="amb-btn">
                                        <button type="button" class="btn btn-primary btn-color bt-size">View All Payout Due <span class="arrow-btn"><img src={solarArrowUpBroken} alt="My Happy SVG" /></span></button>
                                    </div>
                                </div>
                            </div>
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
                                            <button type="button" class="btn btn-primary btn-color bt-size">View All  Payouts <span class="arrow-btn"><img src={solarArrowUpBroken} alt="My Happy SVG" /></span></button>
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
                                        <table class="table table-striped mt-2">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Course Package</th>
                                                    <th scope="col">Quantity Sold this month</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">Employability Bootcamp</th>
                                                    <td>9</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Magnificent Management Skills</th>
                                                    <td>6</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Supercharge your sales technique</th>
                                                    <td>3</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <div class="amb-btn mt-4">
                                            <h4 class="mb-3">Detailed reports</h4>
                                            <button type="button" class="btn btn-primary btn-color bt-size">Choose report<span class="arrow-btn"><img src={solarArrowUpBroken} alt="My Happy SVG" /></span></button>
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
