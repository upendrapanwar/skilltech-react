import React, { useEffect, useState } from "react";
import banner from '../assets/images/Banner.png';
import solarArrowUpBroken from '../assets/images/solar_arrow-up-broken.svg';
import solarArrowUpBrokenBlu from '../assets/images/solar_arrow-up-broken-blu.svg';
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Loader from "../components/common/Loader";
import { toast } from 'react-toastify';
import SignupSchema from "../validation-schemas/SignupSchema";
//import FacebookLogin from "react-facebook-login";
//import {GoogleLogin} from "react-google-login";
import { Formik } from 'formik';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    //const clientId = "598585225797-ghhnu1br04uep4s544mdn67kmq46v2tt.apps.googleusercontent.com";
    let [loading, setLoading] = useState('false');
    const navigate = useNavigate();
    useEffect(() => {

    }, []);
    /*
    const onSuccess = (res) => {
        console.log('Login Success: currentUser:', res.profileObj);
        alert(`Logged in successfully welcome ${res.profileObj.name}`);
    }

    const onFailure = (res) => {
        console.log('Login failed: res:', res);
        //alert(`Failed to login.`);
    };*/
    toast.configure();


    /***********************************************************************/
    /***********************************************************************/
    /**
     * Handle redirect to login page
     * 
     */
    const redirectLogin = () => {
        navigate('/login');
    }
    /***********************************************************************/
    /***********************************************************************/
    /**
     * Handle after form submission
     * 
     */
    const handleSubmit = (values, { resetForm }) => {
        setLoading(true);
        
        
        //this.dispatch(setLoading({loading: true}));
        axios.post('common/signup', values).then(response => {
            toast.dismiss();
            //console.log(response.data);
            if (response.data.status) {
                //toast.success(response.data.message, { autoClose: 3000 });
                resetForm();
                let authInfo = {
                    id: response.data.data['_id'],
                    isSubscriberRegister: ''
                };
                localStorage.setItem('authInfo', JSON.stringify(authInfo));
                navigate('/learner/subscription');          
            }
        }).catch(error => {
            toast.dismiss();
            if (error.response) {
                toast.error(error.response.data.message, { position: "top-center",autoClose: 3000 });
            }
        }).finally(() => {
            setTimeout(() => {
                setLoading(false);
            }, 300);
        });
    }
    /***********************************************************************/
    /***********************************************************************/
    /*const responseFacebook = (response) => {
        console.log(response);
    }*/
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
                                    <h1>Sign Up</h1>
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
                                    <h3>Register Now</h3>
                                    <p>Create your account</p>
                                </div>
                                <div className="login-form-wrapper">
                                    <Formik
                                        initialValues={{
                                            firstname: '',
                                            surname:'',
                                            email: '',
                                            password: '',
                                            confirmPassword: '',
                                            //role: ''

                                        }}
                                        onSubmit={(values, { resetForm }) => {
                                            handleSubmit(values, { resetForm });
                                        }}
                                        validationSchema={SignupSchema}
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
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputName">First Name</label>
                                                    <input type="text" name="firstname" className="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="" onChange={handleChange} onBlur={handleBlur} value={values.firstname} />
                                                    {touched.firstname && errors.firstname ? (
                                                        <small className="text-danger">{errors.firstname}</small>
                                                    ) : null}
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputName">Last Name</label>
                                                    <input type="text" name="surname" className="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="" onChange={handleChange} onBlur={handleBlur} value={values.surname} />
                                                    {touched.surname && errors.surname ? (
                                                        <small className="text-danger">{errors.surname}</small>
                                                    ) : null}
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" placeholder="" onChange={handleChange} onBlur={handleBlur} value={values.email} />

                                                    {touched.email && errors.email ? (
                                                        <small className="text-danger">{errors.email}</small>
                                                    ) : null}
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1">Password</label>
                                                    <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="" onChange={handleChange} onBlur={handleBlur} value={values.password} />

                                                    {touched.password && errors.password ? (
                                                        <small className="text-danger">{errors.password}</small>
                                                    ) : null}
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                                                    <input type="password" name="confirmPassword" className="form-control" id="exampleInputPassword1" placeholder="" onChange={handleChange} onBlur={handleBlur} value={values.confirmPassword} />

                                                    {touched.confirmPassword && errors.confirmPassword ? (
                                                        <small className="text-danger">{errors.confirmPassword}</small>
                                                    ) : null}
                                                </div>

                                                {/*<div className="form-group">
                                                    <label htmlFor="exampleFormControlSelect1">Login With</label>
                                                    <select className="form-control" name="role" id="exampleFormControlSelect1" onChange={handleChange} onBlur={handleBlur} value={values.role} >
                                                        <option value="">Select User Type</option>
                                                        <option value="subscriber">Subscriber</option>
                                                        <option value="ambassador">Ambassador</option>
                                                        <option value="owner">Owner</option>
                                                    </select>

                                                    {touched.role && errors.role ? (
                                                        <small className="text-danger">{errors.role}</small>
                                                    ) : null}
                                                </div>*/}
                                                <button type="submit" className="btn btn-primary login-btn bt-size">Next <span className="arrow-btn"><img src={solarArrowUpBroken} alt="My Happy SVG" /></span></button>

                                                {/*<div className="or text-center mt-3">
                                                    <h6>OR</h6>
                                                </div>

                                                <div className="mt-2 social-plus">
                                                    <p>You can also log in using your social media accounts</p>
                                                    <div className="d-flex ">
                                                        <button type="button" className="btn btn-danger go-plus mr-2"><span><img src={image3} alt="My Happy SVG" /></span>Sign in with Google</button>
                                                        <button type="button" className="btn btn-primary faceb"><span><img src={image2} alt="My Happy SVG" /></span>Login with Facebook</button>
                                                    </div>
                                                </div>*/}
                                                {/*<FacebookLogin
                                                    appId="854178489549971"
                                                    autoLoad={true}
                                                    fields="name,email,picture"
                                                    //onClick={componentClicked}
                                                    //callback={responseFacebook}
                                                    cssClass="btn btn-primary faceb"
                                                    />
                                                    <GoogleLogin
                                                        clientId={clientId}
                                                        buttonText="Sign in with Google"
                                                        onSuccess={onSuccess}
                                                        onFailure={onFailure}
                                                        cookiePolicy={'single_host_origin'}
                                                        style={{ marginTop: '100px' }}
                                                        isSignedIn={true}
                                                    />*/}    
                                            </form>
                                        )}
                                    </Formik>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 login-col">
                            <div className="login-bg"></div>
                            <div className="create-content">
                                <div className="content">
                                    <h4>Login</h4>
                                    <p>Join us today!</p>
                                    <button className="login-btn btn btn-warning bt-size" onClick={redirectLogin}>Login <span className="arrow-btn"><img src={solarArrowUpBrokenBlu} alt="My Happy SVG" /></span></button>
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

export default Signup;
