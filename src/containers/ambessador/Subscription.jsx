import React, { useEffect, useState, useRef } from "react";
import solarArrowUpBroken from '../../assets/images/solar_arrow-up-broken.svg';
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import Loader from "../../components/common/Loader";
import { toast } from 'react-toastify';
import AmbessadorSchema from "../../validation-schemas/AmbessadorSchema";
import ReCAPTCHA from 'react-google-recaptcha';
import { Formik, Form, useField } from 'formik';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import SignatureCanvas from 'react-signature-canvas';
import styles from '../../assets/css/styles.module.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const AmbassadorSubscription = () => {
    const userInfo = JSON.parse(localStorage.getItem("authInfo"));

    let [loading, setLoading] = useState('false');
    let [trimmedDataURL, setTrimmedDataURL] = useState(null);
    let [showOption, setShowOption] = useState(false);
    let [showReferred, setShowReferred] = useState(false);
    let [signatures, setSignatures] = useState(null);
    let [userid, setUserid] = useState(userInfo.id);
    let [uploadCertificate, setUploadCertificate] = useState(null);
    let [uploadQualification, setUploadQualification] = useState(null);
    let [uploadBankProof, setUploadBankProof] = useState(null);
    const [captchaToken, setCaptchaToken] = useState(null);
    const captchaRef = useRef(null);
    console.log('userid',userid);
    let sigPad = {};
    const clear = () => {
        sigPad.clear()
    }
    const navigate = useNavigate();
    useEffect(() => {

    }, []);
    toast.configure();

    const trim = () => {
        setTrimmedDataURL(sigPad.getTrimmedCanvas().toDataURL('image/png'))
    }
    const txtunderline = {
        "textDecoration": "underline"
    }

    /**
     * Manages visibility of referred by fields
     * 
     * @param {*} e 
     * 
     */
    const handleRefferedBy = (e) => {
        const referred = e.target.value;
        if (referred === 'yes') {
            setShowReferred(true);
        } else {
            setShowReferred(false);
        }
    }
    /***********************************************************************/
    /***********************************************************************/
    /**
     * Manages certificate upload
     * 
     */
    const handleCertificateUpload = (e) => {
        console.log(e.target.files[0].name);
        setUploadCertificate(e.target.files[0].name)
    }
    /***********************************************************************/
    /***********************************************************************/
    /**
     * Manages Qualification upload
     * 
     */
    const handleQualificationUpload = (e) => {
        console.log(e.target.files);
        setUploadQualification(e.target.files[0].name)
    }
    /***********************************************************************/
    /***********************************************************************/
    /**
     * Manages Bank proof uploads
     */
    const handleBankProofUpload = (e) => {
        setUploadBankProof(e.target.files[0].name)
    }
    /***********************************************************************/
    /***********************************************************************/
    /**
     * Manages signature pop up data
     * 
     */
    const SignaturePopup = () => (
        <Popup trigger={<button type="button">Click for Signature</button>} position="top left">
            {close => (
                <div>
                    <div>
                        <div className={styles.sigContainer}>
                            <SignatureCanvas canvasProps={{ className: styles.sigPad }}
                                ref={(ref) => { sigPad = ref }} />
                        </div>
                        <div>
                            <button className="" onClick={clear}>
                                Clear
                            </button>
                            <button className="" onClick={trim}>
                                Trim
                            </button>
                        </div>

                        {trimmedDataURL
                            ? <img className={styles.sigImage}
                                src={trimmedDataURL} />
                            : null}
                        {setSignatures(trimmedDataURL)}

                    </div>
                    <a className="close" onClick={close}>
                        &times;
                    </a>
                </div>
            )}
        </Popup>);
    /***********************************************************************/
    /***********************************************************************/
    /**
     * Set recaptcha token
     */
    const verify = () => {
        const token = captchaRef.current.getValue();
        setCaptchaToken(token);
        //captchaRef.current.reset();
    }
    /***********************************************************************/
    /***********************************************************************/
    const MyDatePicker = ({ name = "" }) => {
        const [field, meta, helpers] = useField(name);

        const { value } = meta;
        const { setValue } = helpers;

        return (
            <DatePicker
                {...field}
                selected={value}
                onChange={(signed_on) => setValue(signed_on)}
            />
        );
    }
    /**
     * Handle after form submission
     * 
     */
    const handleSubmit = (values, { setSubmitting }) => {
        console.log('inside');
        setLoading(true);
        const token = captchaRef.current.getValue();
        console.log("token=", token);

        console.log("values=", values);

        if (token === null) {
            console.log('inside1');
            toast.error('Please enter captcha value', { autoClose: 3000 });
            return false;
        }

        //captchaRef.current.reset();
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data;application/json;charset=UTF-8',
            },
        };

        axios.post('common/ambassador-subscription', values).then(response => {
            toast.dismiss();
            console.log('inside2');
            if (response.data.status) {
                toast.success(response.data.message, { autoClose: 3000 });
                navigate('/ambessador/dashboard');
            }
        }).catch(error => {
            toast.dismiss();
            if (error.response) {
                toast.error(error.response.data.message, { autoClose: 3000 });
            }
        }).finally(() => {
            console.log('inside3');
            setTimeout(() => {
                setLoading(false);
            }, 300);
        });
    }
    /***********************************************************************/
    /***********************************************************************/
    /**
     * Manages the show other option textfield
     * 
     * @param {*} e 
     * 
     */
    const handleOtherOption = (e) => {
        const option = e.target.value;
        if (option === "other") {
            setShowOption(true);
        } else {
            setShowOption(false);
        }
    }
    /***********************************************************************/
    /***********************************************************************/
    /**
     * Handle after form submission
     * 
     */
    const handleRedirect = () => {
        navigate('/learner/subscription');
    }
    /***********************************************************************/
    /***********************************************************************/
    return (

        <>
            {loading === true ? <Loader /> : ''}

            <Header />
            <section className="ambessador-regi-section">
                <div className="container">
                    <div className="ambeReg-heading text-center mb-4">
                        <h1>Ambassador Registration Form</h1>
                    </div>

                    <div className="row">
                        <div className="hvg__subscribeForm_wrapper col-md-8 mx-auto">
                            {/*<div className="text-left">
                                <div className="allField_required">
                                    <p>Required fields are marked with a " <span style={{ color: "#000" }}>*</span> "</p>
                                </div>
                                <p><b>You have to be a subscriber to the High Vista Guild before you can become an Ambassador.
                                    Not already a subscriber? Please click on the button below.</b>
                                </p>
                                <button type="button" className="btn btn-primary btn-color bt-size mt-4 mb-4" onClick={handleRedirect}>Subscribe Now<span className="arrow-btn">
                                    <img src={solarArrowUpBroken} alt="My Happy SVG" /></span>
                                </button>
                                <p><b>Already a subscriber? Please continue bycompleting and submitting the form below.</b></p>
                            </div>*/}

                            <div className="form-wrapper mt-4 ">
                                <Formik
                                    initialValues={{
                                        uid: userid,
                                        //firstname: '',
                                        //surname: '',
                                        //id_number: '',
                                        //email: '',
                                        //mobile_number: '',
                                        //alternate_mobile_number: '',
                                        //account_holder_title: '',
                                        account_holder_name: '',
                                        //account_holder_surname: '',
                                        bank: '',
                                        branch: '',
                                        branch_code: '',
                                        type_of_account: '',
                                        account_number: '',
                                        referredby: '',
                                        referredby_firstname: '',
                                        referredby_surname: '',
                                        referral_code: '',
                                        referredby_email: '',
                                        referredby_mobile_number: '',
                                        refer_friend: '',
                                        center_to_assist: '',
                                        pop: '',
                                        signature: signatures,
                                        signed_place: '',
                                        signed_on: new Date(),
                                    }}
                                    onSubmit={(values, { setSubmitting }) => {
                                        setSubmitting(true);
                                        handleSubmit(values, setSubmitting);
                                        //resetForm(true);
                                    }}
                                    validationSchema={AmbessadorSchema}
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
                                            <fieldset>
                                                <div className="avg__form_panel">
                                                    <div className="form-row">
                                                        <legend>1. How will you most likely refer people to the High Vista Guild?<span>*</span></legend>
                                                        <div className="form-group col-md-12">
                                                            <div className="row">
                                                                <div className="col-md-3">
                                                                    <label className="radio-inline">
                                                                        <input type="checkbox" id="whatsApp" name="refer_friend" onChange={handleChange} onBlur={handleBlur} value="whatsApp" />WhatsApp
                                                                    </label>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <label className="radio-inline">
                                                                        <input type="checkbox" id="email" name="refer_friend" onChange={handleChange} onBlur={handleBlur} value="email" />Email
                                                                    </label>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <label className="radio-inline">
                                                                        <input type="checkbox" id="word_of_mouth" name="refer_friend" onChange={handleChange} onBlur={handleBlur} value="word_of_mouth" />Word of mouth
                                                                    </label>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <label className="radio-inline">
                                                                        <input type="checkbox" id="my_instagram_pages" name="refer_friend" onChange={handleChange} onBlur={handleBlur} value="my_instagram_pages" />My Instagram pages
                                                                    </label>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <label className="radio-inline">
                                                                        <input type="checkbox" id="my_twitter_feed" name="refer_friend" onChange={handleChange} onBlur={handleBlur} value="my_twitter_feed" />My Twitter feed
                                                                    </label>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <label className="radio-inline">
                                                                        <input type="checkbox" id="my_youtube_channel" name="refer_friend" onChange={handleChange} onBlur={handleBlur} value="my_youtube_channel" />My Youtube channel
                                                                    </label>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <label className="radio-inline">
                                                                        <input type="checkbox" id="my_facebook_page" name="refer_friend" onChange={handleChange} onBlur={handleBlur} value="my_facebook_page" />My Facebook page
                                                                    </label>
                                                                </div>
                                                                
                                                                {touched.refer_friend && errors.refer_friend ? (
                                                                    <small className="text-danger">{errors.refer_friend}</small>
                                                                ) : null}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                                <div className="avg__form_panel">
                                                    <legend>2. Please upload a certified copy of your South African ID<span>*</span></legend>
                                                    <div className="row form-row">
                                                        <div className="form-group col-md-12">
                                                            <input type="file" id="certificate" name="certificate" onChange={(e) => { handleChange(e); handleCertificateUpload(e) }} onBlur={handleBlur} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="avg__form_panel">
                                                    <legend>3. Bank Account Information</legend>
                                                    <p>Please confirm your banking details.<br /><strong>Account details</strong></p>
                                                    <p>Who do you bank with?<span>*</span></p>
                                                    <div className="row form-row">
                                                        <div className="form-group col-md-6">
                                                            <select className="form-control" name="bank" id="bank" onChange={handleChange} onBlur={handleBlur}>
                                                                <option value="">Select Bank list</option>
                                                                <option value="ABSA">ABSA</option>
                                                                <option value="african_bank_ltd">African Bank Ltd</option>
                                                                <option value="bidvest_bank">Bidvest Bank</option>
                                                                <option value="capitec_bank">Capitec Bank</option>
                                                                <option value="discovery_bank">Discovery Bank</option>
                                                                <option value="first_national_bank">First National Bank</option>
                                                                <option value="investec">Investec</option>
                                                                <option value="nedbank">Nedbank</option>
                                                                <option value="mercantile_bank">Mercantile Bank</option>
                                                                <option value="standard_bank">Standard Bank</option>
                                                                <option value="tyme_bank">TymeBank</option>
                                                            </select>
                                                        </div>
                                                        
                                                    </div>
                                                    <div className="row form-row">
                                                        <div className="form-group col-md-6">
                                                                <label htmlFor="branch">Branch <span>*</span></label>
                                                                <input type="text" className="form-control" name="branch" id="branch" placeholder="" onChange={handleChange} onBlur={handleBlur} value={values.branch} />
                                                                {touched.branch && errors.branch ? (
                                                                    <small className="text-danger">{errors.branch}</small>
                                                                ) : null}
                                                        </div>
                                                    </div>
                                                    <div className="row form-row">
                                                        <div className="form-group col-md-6">
                                                            <label htmlFor="branch_code">Branch Code<span>(if available)</span></label>
                                                            <input type="text" className="form-control" name="branch_code" id="branch_code" placeholder="" onChange={handleChange} onBlur={handleBlur} value={values.branch_code} />
                                                        </div>
                                                    </div>
                                                    <div className="row form-row">
                                                        <div className="form-group col-md-6">
                                                            <label htmlFor="account_number">Account Number<span>*</span></label>
                                                            <input type="text" className="form-control" name="account_number" id="account_number" placeholder="" onChange={handleChange} onBlur={handleBlur} value={values.account_number} />
                                                            {touched.account_number && errors.account_number ? (
                                                                <small className="text-danger">{errors.account_number}</small>
                                                            ) : null}
                                                        </div>
                                                    </div>
                                                    <div className="row form-row">
                                                        <div className="form-group col-md-6">
                                                            <label htmlFor="account_holder_name">Bank account holder's full name<span>*</span></label>
                                                            <input type="text" className="form-control" name="account_holder_name" id="account_holder_name" placeholder="" onChange={handleChange} onBlur={handleBlur} value={values.account_holder_name} />
                                                            {touched.account_holder_name && errors.account_holder_name ? (
                                                                <small className="text-danger">{errors.account_holder_name}</small>
                                                            ) : null}
                                                        </div>
                                                    </div>
                                                    <div className="row form-row">
                                                        <div className="form-group col-md-6">
                                                            <label htmlFor="type_of_account">Account Type<span>*</span></label>
                                                            <select className="form-control" name="type_of_account" id="type_of_account" onChange={handleChange} onBlur={handleBlur}>
                                                                <option value="">Select Account Type</option>
                                                                <option value="current_account">Current account</option>
                                                                <option value="savings_account">Savings account</option>
                                                            </select>
                                                            {touched.type_of_account && errors.type_of_account ? (
                                                                <small className="text-danger">{errors.type_of_account}</small>
                                                            ) : null}
                                                        </div>
                                                    </div>    
                                                    
                                                </div>
                                                
                                                <div className="avg__form_panel">
                                                    <legend>4. Please upload proof of banking (stamped bank letter / stamped e-statement)</legend>
                                                    <div className="row form-row">
                                                        <div className="form-group col-md-12">
                                                            <input type="file" id="bank_proof" name="bank_proof" onChange={(e) => { handleChange(e); handleBankProofUpload(e) }} onBlur={handleBlur} />
                                                            {touched.bank_proof && errors.bank_proof ? (
                                                                <small className="text-danger">{errors.bank_proof}</small>
                                                            ) : null}    
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div className="avg__form_panel">
                                                    <input type="checkbox" id="confirm_details" name="confirm_details" onChange={handleChange} onBlur={handleBlur} value="confirm_details" />Please confirm the detail you have provided is correct
                                                    {touched.confirm_details && errors.confirm_details ? (
                                                        <small className="text-danger">{errors.confirm_details}</small>
                                                    ) : null}
                                                </div>
                                                <div className="avg__form_panel">
                                                    <input type="checkbox" id="terms_n_condition" name="terms_n_condition" onChange={handleChange} onBlur={handleBlur} value="terms_n_condition" />Please accept our terms and conditions
                                                    {touched.terms_n_condition && errors.terms_n_condition ? (
                                                        <small className="text-danger">{errors.terms_n_condition}</small>
                                                    ) : null}
                                                </div>
                                                <div className="avg__form_panel">
                                                    <input type="checkbox" id="update_information" name="update_information" onChange={handleChange} onBlur={handleBlur} value="update_information" />Please confirm that you will update any infomration provided should it change
                                                    {touched.update_information && errors.update_information ? (
                                                        <small className="text-danger">{errors.update_information}</small>
                                                    ) : null}
                                                </div>
                                                <div className="">
                                                    <button type="submit" className="btn btn-primary btn-color bt-size mt-4 mb-4" data-id={isSubmitting}>Become an ambassador<span className="arrow-btn"><img src={solarArrowUpBroken} alt="My Happy SVG" /></span>
                                                    </button>
                                                </div>
                                            </fieldset>
                                        </form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>


                </div>



            </section>

            <Footer />
        </>
    )
}

export default AmbassadorSubscription;
