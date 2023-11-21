import React, { useEffect, useState } from "react";
//import banner from '../assets/images/Banner.png';

import { Link, useNavigate, useLocation } from "react-router-dom";
import Header from "../../components/admin/Header";
import Footer from "../../components/admin/Footer";
import AdminLoginSchema from '../../validation-schemas/AdminLoginSchema';
import { Formik } from 'formik';
import axios from "axios";
import { toast } from 'react-toastify';
import ErrorText from "../../components/utility/ErrorText";
import LandingIntro from "./LandingIntro";

const AdminLogin = () => {
    const authInfo = JSON.parse(localStorage.getItem("authInfo"));
    const location = useLocation();
    console.log('authInfo=',authInfo);
    let [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    let [userid, setUserid] = useState(authInfo ? authInfo.id : null);
    const navigate = useNavigate();
    
    console.log('authInfo=',authInfo);
    useEffect(() => {
        
    }, []);
    toast.configure();

    /***********************************************************************/
    /***********************************************************************/
     
    /**
     * Handle after form submission
     * 
     */
    const handleSubmit = (values, { resetForm }) => {
        setLoading(true);
        console.log("handlesubmit");
        //this.dispatch(setLoading({loading: true}));
        axios.post('common/signin', values).then(response => {
            toast.dismiss();
            if (response.data.status) {
                toast.success(response.data.message, { position: "top-center",autoClose: 3000 });
                let authInfo = {
                    expTime: response.data.data.expTime,
                    id: response.data.data['_id'],
                    token: response.data.data.token,
                    name: response.data.data.firstname +' '+response.data.data.surname,
                    email: response.data.data.email,
                    role: response.data.data.role,
                };
               
                
                localStorage.setItem('authInfo', JSON.stringify(authInfo));
                localStorage.setItem('isLoggedIn', 1);
                resetForm();
                
                if (response.data.data.role === 'admin') {
                    navigate('/admin/admin-dashboard');
                }

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
    /***********************************************************************/
    /***********************************************************************/
    
    return (
        <>
            <Header/>
            <div>
                <div className="min-h-screen bg-base-200 flex items-center">
                    <div className="card mx-auto w-full max-w-5xl  shadow-xl">
                        <div className="grid  md:grid-cols-2 grid-cols-1  bg-base-100 rounded-xl">
                            <div className=''>
                                <LandingIntro />
                            </div>
                            <div className='py-24 px-10'>
                                <h2 className='text-2xl font-semibold mb-2 text-center'>Login</h2>
                                <Formik
                                    initialValues={{
                                        email: '',
                                        password: '',
                                        //role: ''
                                    }}
                                    onSubmit={(values, { resetForm }) => {
                                        handleSubmit(values, { resetForm });
                                    }}
                                    validationSchema={AdminLoginSchema}
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
                                        <div className="mb-4">
                                            <div className="form-control w-full mt-4">
                                                <label className="label" htmlFor="exampleInputEmail1">
                                                    <span className="label-text text-base-content">Email address</span>
                                                </label>
                                                <input type="email" className="input input-bordered w-full" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} />
                                                {touched.email && errors.email ? (
                                                    <small className="text-danger">{errors.email}</small>
                                                ) : null}
                                            </div>
                                            <div className="form-control w-full mt-4">
                                                <label className="label" htmlFor="exampleInputPassword1">
                                                    <span className="label-text text-base-content">Password</span>
                                                </label>
                                                <input type="password" name="password" className="input input-bordered w-full" id="exampleInputPassword1" placeholder="" onChange={handleChange} onBlur={handleBlur} value={values.password} />
                                                {touched.password && errors.password ? (
                                                    <small className="text-danger">{errors.password}</small>
                                                ) : null}
                                            </div>    
                                        </div>
                                        <div className='text-right text-primary'>
                                            <Link to="#">
                                                <span className="text-sm inline-block hover:text-primary hover:underline hover:cursor-pointer transition duration-200">Forgot Password?</span>
                                            </Link>
                                        </div>
                                        <ErrorText styleClass="mt-8">{errorMessage}</ErrorText>
                                        <button type="submit" className={"btn mt-2 w-full btn-primary" + (loading ? " loading" : "")}>Login</button>
                                    </form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default AdminLogin;
