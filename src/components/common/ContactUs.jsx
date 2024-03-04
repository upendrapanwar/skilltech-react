import React, { useEffect, useState } from "react";
import banner from '../../assets/images/Banner.png';
import solarArrowUpBroken from '../../assets/images/solar_arrow-up-broken.svg';
import { Link, useNavigate, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Loader from "./Loader";
import ContactUsSchema from "../../validation-schemas/ContactUsSchema";
import { Formik } from 'formik';
import axios from "axios";
import { toast } from 'react-toastify';

const ContactUs = () => {
    let [loading, setLoading] = useState('false');
    const [message, setMessage] =  useState(false);

    /**
     * Handle after form submission
     * 
     */
    const handleSubmit = (values, { resetForm }) => { 
        setLoading(true); 
        console.log("handleSumit is working");
        
        axios.post('/common/save-query', values).then(response => {
            toast.dismiss();
            if (response.data.status) {
                toast.success(response.data.message, { position: "top-center",autoClose: 3000 });
                resetForm();
                setMessage(true);

                setTimeout(() => {
                    setMessage(false);
                }, 3000);

            } else {
                resetForm();
                toast.error(response.data.message, { autoClose: 3000 });
            }

        }).catch(error => {
            toast.dismiss();
            if (error.response) {
                resetForm();
                toast.error(error.response.data.message, { autoClose: 3000 });
            }
        }).finally(() => {
            setTimeout(() => {
                setLoading(false);
            }, 300);
        });
    }


    return (
        <>
            {loading === true ? <Loader /> : ''}
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
                                    <h1>Contact Us</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           

            <section className="Login-section">
                <div className="login-container container">
                    <div className="login-row row">
                        <div className="col-md-8">
                            <div className="login-form">
                                <div className="login-heading">
                                    <h3>Got questions or wish to contact us?</h3>
                                    <p>Feel free to send us a message at any hour, and we'll respond during our bussiness hours.</p>
                                </div>
                                <div className="login-form-wrapper">
                                    <Formik
                                        initialValues={{
                                            first_name: '',
                                            surname: '',
                                            email: '',
                                            mobile_number: '',
                                            query: '',
                                        }}
                                        onSubmit={(values, { resetForm }) => {
                                            handleSubmit(values, { resetForm });
                                        }}
                                        validationSchema={ContactUsSchema}
                                    >
                                        {({ values,
                                            errors,
                                            touched,
                                            handleChange,
                                            handleBlur,
                                            handleSubmit,
                                            isValid,
                                            isSubmitting

                                        }) => (
                                            <form onSubmit={handleSubmit}>
                                                <div className="row form-row">
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="first_name">
                                                        First Name<span>*</span>
                                                        </label>
                                                        <input
                                                        type="text"
                                                        className="form-control"
                                                        name="first_name"
                                                        id="first_name"
                                                        placeholder=""
                                                        aria-describedby="first_nameHelp"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.first_name}
                                                        />
                                                        {touched.first_name && errors.first_name ? (
                                                        <small className="text-danger">
                                                            {errors.first_name}
                                                        </small>
                                                        ) : null}
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="surname">
                                                        Surname <span>*</span>
                                                        </label>
                                                        <input
                                                        type="text"
                                                        className="form-control"
                                                        name="surname"
                                                        id="surname"
                                                        placeholder=""
                                                        aria-describedby="surnameHelp"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.surname}
                                                        />
                                                        {touched.surname && errors.surname ? (
                                                        <small className="text-danger">
                                                            {errors.surname}
                                                        </small>
                                                        ) : null}
                                                    </div>
                                                </div>
                                                <div className="row form-row">
                                                <div className="form-group col-md-6">
                                                        <label htmlFor="email">
                                                        Email<span>*</span>
                                                        </label>
                                                        <input
                                                        type="text"
                                                        className="form-control"
                                                        name="email"
                                                        id="email"
                                                        placeholder=""
                                                        aria-describedby="emailHelp"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.email}
                                                        />
                                                        {touched.email && errors.email ? (
                                                        <small className="text-danger">
                                                            {errors.email}
                                                        </small>
                                                        ) : null}
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="mobile_number">
                                                        Mobile Number <span>*</span>
                                                        </label>
                                                        <input
                                                        type="text"
                                                        className="form-control"
                                                        name="mobile_number"
                                                        id="mobile_number"
                                                        aria-describedby="mobilenumberHelp"
                                                        placeholder=""
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.mobile_number}
                                                        />
                                                        {touched.mobile_number && errors.mobile_number ? (
                                                        <small className="text-danger">
                                                            {errors.mobile_number}
                                                        </small>
                                                        ) : null}
                                                    </div>
                                                </div>
                                                <div className="row form-row">
                                                <div className="form-group col-md-12">
                                                        <label htmlFor="query">
                                                        Query <span>*</span>
                                                        </label>
                                                        <textarea
                                                        type="text"
                                                        className="form-control"
                                                        name="query"
                                                        id="query"
                                                        rows="5"
                                                        placeholder=""
                                                        aria-describedby="queryHelp"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.query}
                                                        />
                                                        {touched.query && errors.query ? (
                                                        <small className="text-danger">
                                                            {errors.query}
                                                        </small>
                                                        ) : null}
                                                    </div>
                                                </div>
                                                
                                                <button type="submit" className="btn btn-primary login-btn bt-size">Submit Query <span className="arrow-btn"><img src={solarArrowUpBroken} alt="My Happy SVG" /></span></button>
                                                {message && <p className="text-success">Query is submited successfully</p>}
                                            </form>
                                        )}
                                    </Formik>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 login-col">
                            <div className="login-bg"></div>
                            <div className="create-content">
                                <div className="content">
                                    <h4>Office</h4>
                                    <p>Block E, Building 7, Centurion Gate Bussiness Park, 124 Akkerboom Street, Centurion, 0157</p>
                                    <br />
                                    <h4>Contact Details</h4><br />
                                    <div className="d-flex ">
                                    &nbsp;&nbsp;<i className="fa fa-phone mr-1"></i>
                                        <Link to="#"><p>&nbsp;&nbsp;(012) 110-4205</p></Link>
                                    </div>
                                    <div className="d-flex">
                                        &nbsp;&nbsp;<i className="fa fa-envelope mr-1"></i>
                                        <p><Link to="#"><p>&nbsp;&nbsp;guild@skilltechsa.com</p></Link></p>
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

export default ContactUs;
