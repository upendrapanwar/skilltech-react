import React, { useEffect, useState } from "react";
import banner from '../assets/images/Banner.png';
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const TermsOfService = () => {
    useEffect(() => {

    }, []);

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
                                    <h1>Terms Of Service</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="Login-section">
                <div className="login-container container">
                    <div className="login-row row">
                        <div className="col-md-6">
                            <div className="login-form">
                                <div className="login-heading">
                                    <p>Terms Of Service</p>
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

export default TermsOfService;
