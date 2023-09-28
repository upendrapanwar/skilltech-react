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
                            <div className="text-left">
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
                            </div>

                            <div className="form-wrapper mt-4 ">
                                <Formik
                                    initialValues={{
                                        uid: userid,
                                        firstname: '',
                                        surname: '',
                                        id_number: '',
                                        email: '',
                                        mobile_number: '',
                                        alternate_mobile_number: '',
                                        account_holder_title: '',
                                        account_holder_name: '',
                                        account_holder_surname: '',
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
                                                    <legend>1. Confirm Personal Information</legend>
                                                    <div className="row form-row">
                                                        <div className="form-group col-md-6">
                                                            <label htmlFor="first_name">First Name(s)<span>*</span></label>
                                                            <input type="text" className="form-control" name="firstname" id="firstname" placeholder="" aria-describedby="firstnameHelp" onChange={handleChange} onBlur={handleBlur} value={values.firstname} />
                                                            {touched.firstname && errors.firstname ? (
                                                                <small className="text-danger">{errors.firstname}</small>
                                                            ) : null}
                                                        </div>

                                                        <div className="form-group col-md-6">
                                                            <label htmlFor="surname">Surname <span>*</span></label>
                                                            <input type="text" className="form-control" name="surname" id="surname" placeholder="" aria-describedby="surnameHelp" onChange={handleChange} onBlur={handleBlur} value={values.surname} />
                                                            {touched.surname && errors.surname ? (
                                                                <small className="text-danger">{errors.surname}</small>
                                                            ) : null}
                                                        </div>
                                                    </div>

                                                    <div className="row form-row">
                                                        <div className="form-group col-md-12">
                                                            <label htmlFor="id_number">ID Number<span>*</span></label>
                                                            <input type="text" className="form-control" name="id_number" id="id_number" placeholder="" aria-describedby="idnumberHelp" onChange={handleChange} onBlur={handleBlur} value={values.id_number} />
                                                            {touched.id_number && errors.id_number ? (
                                                                <small className="text-danger">{errors.id_number}</small>
                                                            ) : null}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="avg__form_panel">
                                                    <legend>2. Confirm Contact Information</legend>
                                                    <div className="row form-row">
                                                        <div className="form-group col-md-6">
                                                            <label htmlFor="email">Email Address<span>*</span></label>
                                                            <input type="text" className="form-control" name="email" id="email" placeholder="" aria-describedby="emailHelp" onChange={handleChange} onBlur={handleBlur} value={values.email} />
                                                            {touched.email && errors.email ? (
                                                                <small className="text-danger">{errors.email}</small>
                                                            ) : null}
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <label htmlFor="mobile_number">Mobile Contact Number  <span>*</span></label>
                                                            <input type="text" className="form-control" name="mobile_number" id="mobile_number" aria-describedby="mobilenumberHelp" placeholder="" onChange={handleChange} onBlur={handleBlur} value={values.mobile_number} />
                                                            {touched.mobile_number && errors.mobile_number ? (
                                                                <small className="text-danger">{errors.mobile_number}</small>
                                                            ) : null}
                                                        </div>
                                                    </div>
                                                    <div className="row form-row">
                                                        <div className="form-group col-md-12">
                                                            <label htmlFor="alternate_mobile_number">Alternative Mobile Contact Number <span>*</span></label>
                                                            <input type="text" className="form-control" name="alternate_mobile_number" id="alternate_mobile_number" aria-describedby="alternateMobileNumberHelp" placeholder="" onChange={handleChange} onBlur={handleBlur} value={values.alternate_mobile_number} />
                                                            {touched.alternate_mobile_number && errors.alternate_mobile_number ? (
                                                                <small className="text-danger">{errors.alternate_mobile_number}</small>
                                                            ) : null}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="avg__form_panel">
                                                    <legend>3. Bank Account Information</legend>
                                                    <p>Please confirm your banking details.<br /><strong>Account details</strong></p>
                                                    <div className="row form-row">
                                                        <div className="form-group col-md-6">
                                                            <label htmlFor="">Account Holder Title <span>*</span></label>
                                                            <input type="text" className="form-control" name="account_holder_title" id="account_holder_title" placeholder="" onChange={handleChange} onBlur={handleBlur} value={values.account_holder_title} />
                                                            {touched.account_holder_title && errors.account_holder_title ? (
                                                                <small className="text-danger">{errors.account_holder_title}</small>
                                                            ) : null}
                                                        </div>
                                                    </div>
                                                    <div className="row form-row">
                                                        <div className="form-group col-md-6">
                                                            <label htmlFor="account_holder_name">Account Holder Name<span>*</span></label>
                                                            <input type="text" className="form-control" name="account_holder_name" id="account_holder_name" placeholder="" onChange={handleChange} onBlur={handleBlur} value={values.account_holder_name} />
                                                            {touched.account_holder_name && errors.account_holder_name ? (
                                                                <small className="text-danger">{errors.account_holder_name}</small>
                                                            ) : null}
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <label htmlFor="account_holder_surname">Account Holder Surname <span>*</span></label>
                                                            <input type="text" className="form-control" name="account_holder_surname" id="account_holder_surname" placeholder="" onChange={handleChange} onBlur={handleBlur} value={values.account_holder_surname} />
                                                            {touched.account_holder_surname && errors.account_holder_surname ? (
                                                                <small className="text-danger">{errors.account_holder_surname}</small>
                                                            ) : null}
                                                        </div>

                                                        <div className="form-group col-md-6">
                                                            <label htmlFor="">Bank <span>*</span></label>
                                                            <input type="text" className="form-control" name="bank" id="bank" placeholder="" onChange={handleChange} onBlur={handleBlur} value={values.bank} />
                                                            {touched.bank && errors.bank ? (
                                                                <small className="text-danger">{errors.bank}</small>
                                                            ) : null}
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <label htmlFor="branch">Branch <span>*</span></label>
                                                            <input type="text" className="form-control" name="branch" id="branch" placeholder="" onChange={handleChange} onBlur={handleBlur} value={values.branch} />
                                                            {touched.branch && errors.branch ? (
                                                                <small className="text-danger">{errors.branch}</small>
                                                            ) : null}
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <label htmlFor="branch_code">Branch Code<span>(if available)</span></label>
                                                            <input type="text" className="form-control" name="branch_code" id="branch_code" placeholder="" onChange={handleChange} onBlur={handleBlur} value={values.branch_code} />
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <label htmlFor="type_of_account">Type of Account<span>*</span></label>
                                                            <input type="text" className="form-control" name="type_of_account" id="type_of_account" placeholder="" onChange={handleChange} onBlur={handleBlur} value={values.type_of_account} />
                                                            {touched.type_of_account && errors.type_of_account ? (
                                                                <small className="text-danger">{errors.type_of_account}</small>
                                                            ) : null}
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <label htmlFor="account_number">Account Number<span>*</span></label>
                                                            <input type="text" className="form-control" name="account_number" id="account_number" placeholder="" onChange={handleChange} onBlur={handleBlur} value={values.account_number} />
                                                            {touched.account_number && errors.account_number ? (
                                                                <small className="text-danger">{errors.account_number}</small>
                                                            ) : null}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="avg__form_panel">
                                                    <legend>4. Referral Information</legend>

                                                    <div className="row form-row">
                                                        <p>Would you like to refer a friend, family member, colleague, or acquaintances to subscribe to this programme?<span>*</span></p>
                                                        <div className="form-group col-md-6">
                                                            <div className="row">
                                                                <div className="col-sm-4">
                                                                    <label className="radio-inline">
                                                                        <input type="radio" id="yesRadio" name="referredby" onChange={handleChange} onClick={handleRefferedBy} onBlur={handleBlur} value="yes" />Yes
                                                                    </label>
                                                                </div>
                                                                <div className="col-sm-4">
                                                                    <label className="radio-inline">
                                                                        <input type="radio" id="noRadio" name="referredby" onChange={handleChange} onClick={handleRefferedBy} onBlur={handleBlur} value="no" />No
                                                                    </label>
                                                                </div>
                                                                {touched.referredby && errors.referredby ? (
                                                                    <small className="text-danger">{errors.referredby}</small>
                                                                ) : null}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {showReferred ?
                                                        <div className="row form-row">
                                                            <p>If yes, please provide their full names.</p>
                                                            <div className="row">
                                                                <div className="form-group col-md-6">
                                                                    <label htmlFor="referredby_firstname">First Name(s)<span>*</span></label>
                                                                    <input type="text" className="form-control" name="referredby_firstname" id="referredby_firstname" placeholder="" onChange={handleChange} onBlur={handleBlur} value={values.referredby_firstname} />
                                                                    {touched.referredby_firstname && errors.referredby_firstname ? (
                                                                        <small className="text-danger">{errors.referredby_firstname}</small>
                                                                    ) : null}
                                                                </div>

                                                                <div className="form-group col-md-6">
                                                                    <label htmlFor="referredby_surname">Surname <span>*</span></label>
                                                                    <input type="text" className="form-control" name="referredby_surname" id="referredby_surname" placeholder="" onChange={handleChange} onBlur={handleBlur} value={values.referredby_surname} />
                                                                    {touched.referredby_surname && errors.referredby_surname ? (
                                                                        <small className="text-danger">{errors.referredby_surname}</small>
                                                                    ) : null}
                                                                </div>
                                                            </div>

                                                            <p>Please provide their referral code (if available)</p>


                                                            <div className="form-group col-md-12">
                                                                <label htmlFor="last_name">Referral Code <span>* (the referral code must be obtained from the person that referred you)</span></label>
                                                                <input type="text" className="form-control" name="referral_code" id="referral_code" placeholder="" onChange={handleChange} onBlur={handleBlur} value={values.referral_code} />
                                                                {touched.referral_code && errors.referral_code ? (
                                                                    <small className="text-danger">{errors.referral_code}</small>
                                                                ) : null}
                                                            </div>
                                                            <p>Please provide their contact details:</p>

                                                            <div className="form-group col-md-6">
                                                                <label htmlFor="referredby_email">Email Address <span>*</span></label>
                                                                <input type="text" className="form-control" name="referredby_email" id="referredby_email" placeholder="" onChange={handleChange} onBlur={handleBlur} value={values.referredby_email} />
                                                                {touched.referredby_email && errors.referredby_email ? (
                                                                    <small className="text-danger">{errors.referredby_email}</small>
                                                                ) : null}
                                                            </div>

                                                            <div className="form-group col-md-6">
                                                                <label htmlFor="referredby_mobile_number">Mobile Contact Number<span>*</span></label>
                                                                <input type="text" className="form-control" name="referredby_mobile_number" id="referredby_mobile_number" placeholder="" onChange={handleChange} onBlur={handleBlur} value={values.referredby_mobile_number} />
                                                                {touched.referredby_mobile_number && errors.referredby_mobile_number ? (
                                                                    <small className="text-danger">{errors.referredby_mobile_number}</small>
                                                                ) : null}
                                                            </div>
                                                        </div>
                                                        : ''}
                                                </div>
                                                <div className="avg__form_panel">
                                                    <p className="mb-2"> <strong>9. Refer-a-Friend</strong></p>

                                                    <div className="form-row">
                                                        <p>Would you like to refer a friend, family member, colleague, or acquaintances to subscribe to this programme?<span>*</span></p>
                                                        <div className="form-group col-md-12">
                                                            <div className="row">
                                                                <div className="col-md-3">
                                                                    <label className="radio-inline">
                                                                        <input type="radio" id="yes_refer_friend" name="refer_friend" onChange={handleChange} onBlur={handleBlur} value="yes" />Yes
                                                                    </label>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <label className="radio-inline">
                                                                        <input type="radio" id="no_refer_friend" name="refer_friend" onChange={handleChange} onBlur={handleBlur} value="no" />No
                                                                    </label>
                                                                </div>
                                                                {touched.refer_friend && errors.refer_friend ? (
                                                                    <small className="text-danger">{errors.refer_friend}</small>
                                                                ) : null}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-row">
                                                        <p>Would you like our contact centre to assist you with your referrals? <span>*</span></p>
                                                        <div className="form-group col-md-12">
                                                            <div className="row">
                                                                <div className="col-md-3">
                                                                    <label className="radio-inline">
                                                                        <input type="radio" id="yes_center_to_assist" name="center_to_assist" onChange={handleChange} onBlur={handleBlur} value="yes" />Yes
                                                                    </label>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <label className="radio-inline">
                                                                        <input type="radio" id="no_center_to_assist" name="center_to_assist" onChange={handleChange} onBlur={handleBlur} value="no" />No
                                                                    </label>
                                                                </div>
                                                                {touched.refer_friend && errors.refer_friend ? (
                                                                    <small className="text-danger">{errors.refer_friend}</small>
                                                                ) : null}
                                                            </div>
                                                        </div>
                                                        <div class="row  form-row">
                                                            <div className="form-group col-md-12">
                                                                <p>If yes, one of our friendly contact centre agents will reach out to assist you with your referrals. They'll help you upgrade from a basic subscriber to an Ambassador, at no additional cost, enabling you to benefit from our refer-a-friend program. As an Ambassador, you'll earn R250/month for each referral that subscribes, for as long as they remain active subscribers. After registering as an Ambassador, you'll receive a unique referral code to share. This code will be linked to each new subscriber you refer.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="avg__form_panel">
                                                    <div className="form-row">
                                                        <legend>Protection of Personal Information (POPI)</legend>
                                                        <p>By agreeing to the terms of this consent form, I hereby voluntarily authorize the company to process my personal information (including my name, credit card & banking details, physical address, telephone numbers & any other information I have provided to the company). Processing shall include the collection, receipt, recording, organisation, collation, storage, updating or modification, retrieval, alteration, consultation, use; dissemination by means of transmission, distribution or making available in any other form; or merging, linking, as well as blocking, degradation, erasure or destruction of information. This consent is effective immediately & will endure until the relationship between myself and the company has been terminated.</p>
                                                        <div className="form-group col-md-6">
                                                            <div className="row">
                                                                <div className="col-sm-4">
                                                                    <label className="radio-inline">
                                                                        <input type="radio" id="yespop" name="pop" onChange={handleChange} onBlur={handleBlur} value="yes" />Yes
                                                                    </label>
                                                                </div>
                                                                <div className="col-sm-4">
                                                                    <label className="radio-inline">
                                                                        <input type="radio" id="nopop" name="pop" onChange={handleChange} onBlur={handleBlur} value="no" />No
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="container">
                                                    <div className="avg__form_panel">
                                                        <div className="form-row">
                                                            <div class="amb-reg-vef">
                                                                <h4>PLEASE REVIEW AND CONFIRM YOUR ANSWERS AND SELECTIONS</h4>

                                                                <div className="review_form_panel">
                                                                    <p>Your name and surname as per your SA ID:</p><label className="radio-inline">{values.firstname} {values.surname}</label>
                                                                </div>
                                                                <div className="review_form_panel">
                                                                    <p>Your ID numbers:</p><label className="radio-inline">{values.id_number}</label>
                                                                </div>
                                                                <div className="review_form_panel">
                                                                    <p>Your email address:</p><label className="radio-inline">{values.email}</label>
                                                                </div>
                                                                <div className="review_form_panel">
                                                                    <p>Your mobile number</p><label className="radio-inline">{values.mobile_number}</label>
                                                                </div>
                                                                <div className="review_form_panel">
                                                                    <p>Your alternative mobile number</p><label className="radio-inline">{values.alternate_mobile_number}</label>
                                                                </div>
                                                                <div className="review_form_panel">
                                                                    <p>Your bank account information:</p><label className="radio-inline">{values.account_holder_title} {values.account_holder_name} {values.account_holder_surname} {values.bank} {values.branch} {values.branch_code} {values.account_number} {values.type_of_account}</label>
                                                                </div>
                                                                <div className="review_form_panel">
                                                                    <p>Your referral confirmation:</p><label className="radio-inline">{values.referredby} {values.referredby_firstname} {values.referredby_surname} {values.referredby_email} {values.referredby_mobile_number}</label>
                                                                </div>
                                                                <div className="review_form_panel">
                                                                    <p>Your refer-a-friend confirmation</p><label className="radio-inline">{values.refer_friend} {values.center_to_assist}</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row form-row mt-4">
                                                            <div className="col-sm-12">
                                                                <p>I,<input type="text" id="authname" name="authname" onChange={handleChange} onBlur={handleBlur} value={values.firstname} />, the undersigned, hereby certify that the details furnished in this document, and any attached documents, are true and correct to the best of my knowledge and belief and I undertake to inform the company of any changes therein, immediately. In case any of the above information, and any attached documents, is found to be false, untrue, misleading, or misrepresenting, I am aware that this will automatically disqualify me from subscribing to this programme.</p>
                                                            </div>
                                                            <div className="col-sm-12">
                                                                <div className="form-group col-md-4">
                                                                    <label htmlFor="signature">Signature<span>*</span></label>
                                                                    <span style={{ display: "none" }}>{values.signature = signatures}</span>
                                                                    {signatures ?
                                                                        <img src={signatures} />

                                                                        : ''}
                                                                    {/*<input type="text" className="form-control" name="signature" id="signature" placeholder="" onChange={handleChange} onBlur={handleBlur} value={values.signature}/>*/}
                                                                    <SignaturePopup />
                                                                    {touched.signature && errors.signature ? (
                                                                        <small className="text-danger">{errors.signature}</small>
                                                                    ) : null}
                                                                </div>
                                                                <div className="form-group col-md-4">
                                                                    <label htmlFor="signed_place">Signed At(Place)<span>*</span></label>
                                                                    <input type="text" className="form-control" name="signed_place" id="signed_place" placeholder="" onChange={handleChange} onBlur={handleBlur} value={values.signed_place} />
                                                                    {touched.signed_place && errors.signed_place ? (
                                                                        <small className="text-danger">{errors.signed_place}</small>
                                                                    ) : null}
                                                                </div>
                                                                <div className="form-group col-md-4">
                                                                    <label htmlFor="signed_on">Signed On<span>*</span></label>
                                                                    <MyDatePicker name="signed_on" />
                                                                    {/*<input type="text" className="form-control" name="signed_on" id="signed_on" placeholder="" onChange={handleChange} onBlur={handleBlur} value={values.signed_on}/>*/}
                                                                    {touched.signed_on && errors.signed_on ? (
                                                                        <small className="text-danger">{errors.signed_on}</small>
                                                                    ) : null}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <ReCAPTCHA
                                                    sitekey={process.env.REACT_APP_SITE_KEY}
                                                    ref={captchaRef}
                                                    onChange={verify}
                                                />

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
