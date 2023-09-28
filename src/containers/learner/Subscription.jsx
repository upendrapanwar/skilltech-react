import React, { useEffect, useState, useRef } from "react";
import solarArrowUpBroken from '../../assets/images/solar_arrow-up-broken.svg';
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import Loader from "../../components/common/Loader";
import { toast } from 'react-toastify';
import SubscriptionSchema from "../../validation-schemas/SubscriptionSchema";
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

const Subscription = () => {
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
        setLoading(true);
        const token = captchaRef.current.getValue();
        console.log("token=", token);

        console.log("values=", values);

        if (token === null) {
            console.log('inside');
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

        axios.post('common/subscription', values).then(response => {
            toast.dismiss();
            if (response.data.status) {
                toast.success(response.data.message, { autoClose: 3000 });
                navigate('/ambessador/ambassador-subscription');
            }
        }).catch(error => {
            toast.dismiss();
            if (error.response) {
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

    return (

        <>
            {loading === true ? <Loader /> : ''}

            <Header />
            <section className="regitration-section">
                <div className="container">
                    <div className="ambeReg-heading text-center mb-4">
                        <h1>Subscription Registration Form</h1>
                    </div>
                    
                    <div className="row">
                        <div className="ambeReg-wrapper col-md-8 mx-auto">
                            <div className="text-left">
                                <p>Required fields are marked with a " <span style={{ color: "#000" }}>*</span> "</p>
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
                                        street: '',
                                        street_name: '',
                                        complex_n_unit: '',
                                        suburb_district: '',
                                        town_city: '',
                                        province: '',
                                        postal_code: '',
                                        payment_option: '',
                                        account_holder_title: '',
                                        account_holder_name: '',
                                        account_holder_surname: '',
                                        bank: '',
                                        branch: '',
                                        branch_code: '',
                                        type_of_account: '',
                                        account_number: '',
                                        method_of_communication: [],
                                        //promotion_newsletter:'',
                                        //promotion_deals:'',
                                        //keep_in_loop:'',
                                        race: '',
                                        gender: '',
                                        qualification: '',
                                        employed: '',
                                        occupation: '',
                                        how_did_you_hear_about_us: '',
                                        reasons_for_subscribing: '',
                                        opt_in_promotional: [],
                                        topic_interest: '',
                                        referredby: '',
                                        referredby_firstname: '',
                                        referredby_surname: '',
                                        referral_code: '',
                                        referredby_email: '',
                                        referredby_mobile_number: '',
                                        refer_friend: '',
                                        center_to_assist: '',
                                        certificate: uploadCertificate,
                                        highest_qualication_certificate: uploadQualification,
                                        bank_proof: uploadBankProof,
                                        pop: '',
                                        signature: signatures,
                                        signed_place: '',
                                        signed_on: new Date(),
                                        //password: '',
                                        //confirmPassword: '',
                                        //role: ''
                                    }}
                                    onSubmit={(values, { setSubmitting }) => {
                                        setSubmitting(true);
                                        handleSubmit(values, setSubmitting);
                                        //resetForm(true);
                                    }}
                                    validationSchema={SubscriptionSchema}
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
                                            <div className="avg__form_panel">
                                                <p className="mb-2"> <strong>1.Personal Information</strong></p>
                                                <div className="row form-row">
                                                    <p>Please provide your full first names and surname exactly as reflected on your South African ID (or foreign national Identity Document, if applicable).</p>
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
                                                <div className="row  form-row">
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="id_number">ID Number<span>*</span></label>
                                                        <input type="text" className="form-control" name="id_number" id="id_number" placeholder="" aria-describedby="idnumberHelp" onChange={handleChange} onBlur={handleBlur} value={values.id_number} />
                                                        {touched.id_number && errors.id_number ? (
                                                            <small className="text-danger">{errors.id_number}</small>
                                                        ) : null}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="avg__form_panel">
                                                <p className="mb-2"> <strong>2. Contact Information</strong></p>

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
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="alternate_mobile_number">Alternative Mobile Contact Number <span>*</span></label>
                                                        <input type="text" className="form-control" name="alternate_mobile_number" id="alternate_mobile_number" aria-describedby="alternateMobileNumberHelp" placeholder="" onChange={handleChange} onBlur={handleBlur} value={values.alternate_mobile_number} />
                                                        {touched.alternate_mobile_number && errors.alternate_mobile_number ? (
                                                            <small className="text-danger">{errors.alternate_mobile_number}</small>
                                                        ) : null}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="avg__form_panel">
                                                <p style={txtunderline}>Mailing Address</p>
                                                <div className="row form-row">
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="street">Street # <span>*</span></label>
                                                        <input type="text" className="form-control" name="street" id="street" aria-describedby="streetHelp" placeholder="" onChange={handleChange} onBlur={handleBlur} value={values.street} />
                                                        {touched.street && errors.street ? (
                                                            <small className="text-danger">{errors.street}</small>
                                                        ) : null}
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="street_name">Street Name <span>*</span></label>
                                                        <input type="text" className="form-control" name="street_name" id="street_name" aria-describedby="streetNameHelp" placeholder="" onChange={handleChange} onBlur={handleBlur} value={values.street_name} />
                                                        {touched.street_name && errors.street_name ? (
                                                            <small className="text-danger">{errors.street_name}</small>
                                                        ) : null}
                                                    </div>
                                                </div>
                                                <div className="row form-row">
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="complex_n_unit">Complex and Unit # (if appl.)<span>*</span></label>
                                                        <input type="text" className="form-control" name="complex_n_unit" id="complex_n_unit" placeholder="" onChange={handleChange} onBlur={handleBlur} value={values.complex_n_unit} />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="avg__form_panel">
                                                <div className="row form-row col-md-12 pl-0">
                                                    <div className="form-group col-md-3">
                                                        <label htmlFor="suburb_district">Suburb/District <span>*</span></label>
                                                        <input type="text" className="form-control" name="suburb_district" id="suburb_district" placeholder="" onChange={handleChange} onBlur={handleBlur} value={values.suburb_district} />
                                                        {touched.suburb_district && errors.suburb_district ? (
                                                            <small className="text-danger">{errors.suburb_district}</small>
                                                        ) : null}
                                                    </div>
                                                    <div className="form-group col-md-3">
                                                        <label htmlFor="town_city">Town/City <span>*</span></label>
                                                        <input type="text" className="form-control" name="town_city" id="town_city" placeholder="" onChange={handleChange} onBlur={handleBlur} value={values.town_city} />
                                                        {touched.town_city && errors.town_city ? (
                                                            <small className="text-danger">{errors.town_city}</small>
                                                        ) : null}
                                                    </div>
                                                    <div className="form-group col-md-3">
                                                        <label htmlFor="province">Province<span>*</span></label>
                                                        <input type="text" className="form-control" name="province" id="province" placeholder="" onChange={handleChange} onBlur={handleBlur} value={values.province} />
                                                        {touched.province && errors.province ? (
                                                            <small className="text-danger">{errors.province}</small>
                                                        ) : null}
                                                    </div>
                                                    <div className="form-group col-md-3">
                                                        <label htmlFor="postal_code">Postal Code <span>*</span></label>
                                                        <input type="text" className="form-control" name="postal_code" id="postal_code" placeholder="" onChange={handleChange} onBlur={handleBlur} value={values.postal_code} />
                                                        {touched.postal_code && errors.postal_code ? (
                                                            <small className="text-danger">{errors.postal_code}</small>
                                                        ) : null}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="avg__form_panel">
                                                <p className="mb-2"> <strong>3. Subscription Preferences</strong></p>

                                                <div className="row form-row">
                                                    <div className="form-group col-md-12">
                                                        <p>Preferred Payment Option<span>*</span></p>
                                                        <div className="row mt-4">
                                                            <div className="col-sm-4">
                                                                <label className="radio-inline">
                                                                    <input type="radio" id="yesRadio" name="payment_option" onChange={handleChange} onBlur={handleBlur} value="credit_card" />Credit Card
                                                                </label>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <label className="radio-inline">
                                                                    <input type="radio" id="noRadio" name="payment_option" onChange={handleChange} onBlur={handleBlur} value="debit_card" />Debit Card
                                                                </label>
                                                            </div>
                                                            {touched.payment_option && errors.payment_option ? (
                                                                <small className="text-danger">{errors.payment_option}</small>
                                                            ) : null}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="avg__form_panel">
                                                <div className="mb-4">
                                                    <p className="mb-2"> <strong>4. Bank Account Information</strong></p>
                                                    <p className="">Once registered, and payment has been confirmed, you will receive an email with your Username, Password and a link to the subscription short courses.
                                                        Your Username will always be the email address you provide with this registration.
                                                        Once logged in you will be able to change your Password to a preferred password.
                                                        In the event that you forget your password, you will be able to request a password reset.
                                                    </p>
                                                    <p style={txtunderline}>Account details</p>
                                                </div>


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
                                                </div>
                                                <div className="row form-row">
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
                                                <p className="mb-2"> <strong>5. Communication Preferences</strong></p>

                                                <div className="row form-row">
                                                    <p style={txtunderline}>Preferred method of communication:<span>*</span></p>
                                                    <div className="form-group col-md-12">
                                                        <div className="row">
                                                            <div className="col-md-2">
                                                                <label className="radio-inline">
                                                                    <input type="checkbox" id="com_email" name="method_of_communication" onChange={handleChange} onBlur={handleBlur} value="email" />Email
                                                                </label>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <label className="radio-inline">
                                                                    <input type="checkbox" id="com_whatsapp" name="method_of_communication" onChange={handleChange} onBlur={handleBlur} value="whatsapp" />WhatsApp
                                                                </label>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <label className="radio-inline">
                                                                    <input type="checkbox" id="com_sms" name="method_of_communication" onChange={handleChange} onBlur={handleBlur} value="sms" />SMS
                                                                </label>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <label className="radio-inline">
                                                                    <input type="checkbox" id="com_phone" name="method_of_communication" onChange={handleChange} onBlur={handleBlur} value="phone_call" />Phone Call
                                                                </label>
                                                            </div>
                                                            {touched.method_of_communication && errors.method_of_communication ? (
                                                                <small className="text-danger">{errors.method_of_communication}</small>
                                                            ) : null}
                                                        </div>
                                                    </div>
                                                </div>
                                                <p style={txtunderline}>Opt-in for promotional emails,newsletter:<span>*</span></p>
                                                {touched.opt_in_promotional && errors.opt_in_promotional ? (
                                                    <small className="text-danger">{errors.opt_in_promotional}</small>
                                                ) : null}
                                                <div className="row form-row mb-2">
                                                    <div className="form-group col-md-10">
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <label className="radio-inline">
                                                                    <input type="checkbox" id="newsletter" name="opt_in_promotional" onChange={handleChange} onBlur={handleBlur} value="receive_monthly_newsletters" />Yes, I would like to receive monthly newsletters with updates, tips, and exclusive offers.
                                                                    I understand I can opt-out at any time.

                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row form-row mb-2">
                                                    <div className="form-group col-md-10">
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <label className="radio-inline">
                                                                    <input type="checkbox" id="deals_promotions" name="opt_in_promotional" onChange={handleChange} onBlur={handleBlur} value="exclusive_deals_promotions" />Sign me up for exclusive deals, promotions, and news from the High Vista Guild.
                                                                    I understand I can opt-out at any time.
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row form-row mb-2">
                                                    <div className="form-group col-md-10">
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <label className="radio-inline">
                                                                    <input type="checkbox" id="in_loop" name="opt_in_promotional" onChange={handleChange} onBlur={handleBlur} value="keep_in_loop" />SKeep me in the loop! I want to be notified about upcoming events, webinars, and workshops.
                                                                    I understand I can opt-out at any time.
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="avg__form_panel">
                                                <p className="mb-2"> <strong>6. Demographic Information</strong></p>

                                                <div className="row form-row">
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="race">Race<span>*</span></label>
                                                        <input type="text" className="form-control" name="race" id="race" placeholder="" onChange={handleChange} onBlur={handleBlur} value={values.race} />
                                                        {touched.race && errors.race ? (
                                                            <small className="text-danger">{errors.race}</small>
                                                        ) : null}
                                                    </div>

                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="gender">Gender<span>*</span></label>
                                                        <input type="text" className="form-control" name="gender" id="gender" placeholder="" onChange={handleChange} onBlur={handleBlur} value={values.gender} />
                                                        {touched.gender && errors.gender ? (
                                                            <small className="text-danger">{errors.gender}</small>
                                                        ) : null}
                                                    </div>
                                                </div>
                                                <div className="row form-row">
                                                    <div className="form-group ">
                                                        <label htmlFor="qualification">Highest Qualification Race<span>*</span></label>
                                                        <input type="text" className="form-control" name="qualification" id="qualification" placeholder="" onChange={handleChange} onBlur={handleBlur} value={values.qualification} />
                                                        {touched.qualification && errors.qualification ? (
                                                            <small className="text-danger">{errors.qualification}</small>
                                                        ) : null}
                                                    </div>
                                                </div>
                                                <div className="row form-row">
                                                    <div className="form-group ">
                                                        <label htmlFor="employed">Employed <span>*</span></label>
                                                        <input type="text" className="form-control" name="employed" id="employed" placeholder="" onChange={handleChange} onBlur={handleBlur} value={values.employed} />
                                                        {touched.employed && errors.employed ? (
                                                            <small className="text-danger">{errors.employed}</small>
                                                        ) : null}
                                                    </div>
                                                </div>
                                                <div className="row form-row">
                                                    <div className="form-group ">
                                                        <label htmlFor="occupation">Occupation<span>*</span></label>
                                                        <input type="text" className="form-control" name="occupation" id="occupation" placeholder="" onChange={handleChange} onBlur={handleBlur} value={values.occupation} />
                                                        {touched.occupation && errors.occupation ? (
                                                            <small className="text-danger">{errors.occupation}</small>
                                                        ) : null}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="avg__form_panel">
                                                <p className="mb-2"> <strong>7. Feedback and Interest</strong></p>

                                                <div className="row form-row">
                                                    <div className="form-group">
                                                        <div className="row">
                                                            <div className="col-sm-3">
                                                                <label className="radio-inline">
                                                                    <input type="radio" id="social_media" name="how_did_you_hear_about_us" onChange={handleChange} onBlur={handleBlur} onClick={handleOtherOption} value="social_media" />Social Media
                                                                </label>
                                                            </div>
                                                            <div className="col-sm-3">
                                                                <label className="radio-inline">
                                                                    <input type="radio" id="noRadio" name="how_did_you_hear_about_us" onChange={handleChange} onBlur={handleBlur} onClick={handleOtherOption} value="company_website" />Company Website
                                                                </label>
                                                            </div>
                                                            <div className="col-sm-3">
                                                                <label className="radio-inline">
                                                                    <input type="radio" id="noRadio" name="how_did_you_hear_about_us" onChange={handleChange} onBlur={handleBlur} onClick={handleOtherOption} value="facebook" />Facebook
                                                                </label>
                                                            </div>
                                                            <div className="col-sm-3">
                                                                <label className="radio-inline">
                                                                    <input type="radio" id="noRadio" name="how_did_you_hear_about_us" onChange={handleChange} onBlur={handleBlur} onClick={handleOtherOption} value="referral" />Referral
                                                                </label>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <label className="radio-inline">
                                                                    <input type="radio" id="noRadio" name="how_did_you_hear_about_us" onChange={handleChange} onBlur={handleBlur} onClick={handleOtherOption} value="other" />Other(please specify below)
                                                                </label>
                                                            </div>
                                                            {touched.how_did_you_hear_about_us && errors.how_did_you_hear_about_us ? (
                                                                <small className="text-danger">{errors.how_did_you_hear_about_us}</small>
                                                            ) : null}
                                                        </div>
                                                        {showOption ?
                                                            <div className="col-md-12 pl-0">
                                                                <input type="text" className="form-control" name="how_did_you_hear_about_us_other" id="how_did_you_hear_about_us_other" placeholder="" onChange={handleChange} onBlur={handleBlur} value={values.how_did_you_hear_about_us_other} />

                                                            </div>
                                                            : ''}
                                                    </div>
                                                </div>
                                                <div className="row form-row">
                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="reasons_for_subscribing">What are your primary reasons for subscribing?<span>*</span></label>
                                                        <input type="text" className="form-control" name="reasons_for_subscribing" id="reasons_for_subscribing" placeholder="" onChange={handleChange} onBlur={handleBlur} value={values.reasons_for_subscribing} />
                                                        {touched.reasons_for_subscribing && errors.reasons_for_subscribing ? (
                                                            <small className="text-danger">{errors.reasons_for_subscribing}</small>
                                                        ) : null}
                                                    </div>
                                                </div>
                                                <div className="row form-row">
                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="topic_interest">Any specific topic or categories you’re interest in and would like to learn more about?<span>*</span></label>
                                                        <input type="text" className="form-control" name="topic_interest" id="topic_interest" placeholder="" onChange={handleChange} onBlur={handleBlur} value={values.topic_interest} />
                                                        {touched.topic_interest && errors.topic_interest ? (
                                                            <small className="text-danger">{errors.topic_interest}</small>
                                                        ) : null}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="avg__form_panel">
                                                <p className="mb-2"> <strong>8. Referral Information</strong></p>

                                                <div className="row form-row">
                                                    <p>Were you referred by a friend, family member, colleague, or acquaintances?<span>*</span></p>
                                                    <div className="form-group col-md-6">
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <label className="radio-inline">
                                                                    <input type="radio" id="yesRadio" name="referredby" onChange={handleChange} onClick={handleRefferedBy} onBlur={handleBlur} value="yes" />Yes
                                                                </label>
                                                            </div>
                                                            <div className="col-md-3">
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
                                                    <div className="row form-row col-md-12">
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

                                                <div className="row form-row">
                                                    <p>Would you like to refer a friend, family member, colleague, or acquaintances to subscribe to this programme?<span>*</span></p>
                                                    <div className="form-group col-md-6">
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
                                                <div className="row form-row">
                                                    <p>Would you like our contact centre to assist you with your referrals? <span>*</span></p>
                                                    <div className="form-group col-md-6">
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
                                                    <div className="form-group col-md-12">
                                                        <p>If yes, one of our friendly contact centre agents will reach out to assist you with your referrals. They'll help you upgrade from a basic subscriber to an Ambassador, at no additional cost, enabling you to benefit from our refer-a-friend program. As an Ambassador, you'll earn 50% of the subscription fee for each referral that subscribes, for as long as they remain active subscribers. After registering as an Ambassador, you'll receive a unique referral code to share. This code will be linked to each new subscriber you refer.</p>
                                                        <p>For more information on how to become an Ambassador, please select the following menu item on the Home Page.</p>
                                                    </div>
                                                </div>
                                                <div className="row form-row">
                                                    <div className="form-group">
                                                        <div className="mt-3 col-md-6">
                                                            <select id="earn_cash_as_ambassador" name="earn_cash_as_ambassador" className="form-control" onChange={handleChange} onBlur={handleBlur}>
                                                                <option value="ambassador">Earn cash as an ambassador</option>

                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="avg__form_panel">
                                                <legend>ALL CERTIFIED DOCUMENS MUST NOT BE OLDER THAN THREE MONTHS</legend>
                                                <p className="">How to attach a Document on the Recruitment Tab</p>
                                                <ul>
                                                    <li>Click on “Select File”</li>
                                                    <li>Select the document from your computer you need to upload</li>
                                                    <li>Click on the document you need to attach</li>
                                                    <li>The document that you have selected will automatically be uploaded as part of your Application.</li>
                                                    <li>Ensure that all documents you upload are in a PDF. format</li>
                                                </ul>

                                                <h4 className="">Upload a copy of your ID<span>*</span></h4>
                                                <p>(certification not older than 3 months)</p>
                                                <div className="row form-row">
                                                    <div className="form-group col-md-12">
                                                        <input type="file" id="certificate" name="certificate" onChange={(e) => { handleChange(e); handleCertificateUpload(e) }} onBlur={handleBlur} />
                                                    </div>
                                                </div>
                                                <h4>Upload a certified copy of Highest Qualification, including Matric Certificate<span>*</span></h4>
                                                <p>(certification not older than 3 months)</p>
                                                <div className="row form-row">
                                                    <div className="form-group col-md-12">
                                                        <input type="file" id="photo" name="highest_qualication_certificate" onChange={(e) => { handleChange(e); handleQualificationUpload(e) }} onBlur={handleBlur} />
                                                    </div>
                                                </div>
                                                <h4>Upload proof of Banking Details (letter from the bank/eBank statement)<span>*</span></h4>
                                                <p>(not older than 3 months)</p>
                                                <div className="row form-row">
                                                    <div className="form-group col-md-12">
                                                        <input type="file" id="bank_proof" name="bank_proof" onChange={(e) => { handleChange(e); handleBankProofUpload(e) }} onBlur={handleBlur} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="avg__form_panel">
                                                <div className="row form-row">
                                                    <div className="form-group col-md-12">
                                                        <legend>Protection of Personal Information (POPI)</legend>
                                                        <p>By agreeing to the terms of this consent form, I hereby voluntarily authorize the company to process my personal information (including my name, credit card & banking details, physical address, telephone numbers & any other information I have provided to the company). Processing shall include the collection, receipt, recording, organisation, collation, storage, updating or modification, retrieval, alteration, consultation, use; dissemination by means of transmission, distribution or making available in any other form; or merging, linking, as well as blocking, degradation, erasure or destruction of information. This consent is effective immediately & will endure until the relationship between myself and the company has been terminated.</p>
                                                    </div>
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
                                            <div className="avg__form_panel">
                                                <div className="row form-row">
                                                    <legend>PLEASE REVIEW AND CONFIRM YOUR ANSWERS AND SELECTIONS</legend>

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
                                                        <p>Your mailing address</p><label className="radio-inline">{values.street} {values.street_name} {values.suburb_district}{values.town_city} {values.province} {values.postal_code}</label>
                                                    </div>
                                                    <div className="review_form_panel">
                                                        <p>Your preferred payment option:</p><label className="radio-inline">{values.payment_option}</label>
                                                    </div>
                                                    <div className="review_form_panel">
                                                        <p>Your bank account information:</p><label className="radio-inline">{values.account_holder_title} {values.account_holder_name} {values.account_holder_surname} {values.bank} {values.branch} {values.branch_code} {values.account_number} {values.type_of_account}</label>
                                                    </div>
                                                    <div className="review_form_panel">
                                                        <p>Your communication preference:</p><label className="radio-inline">{values.method_of_communication}</label>
                                                    </div>
                                                    <div className="review_form_panel">
                                                        <p>Your opt-in preference(s):</p><label className="radio-inline">{values.opt_in_promotional}</label>
                                                    </div>
                                                    <div className="review_form_panel">
                                                        <p>Your demographic information:</p><label className="radio-inline">{values.race} {values.gender} {values.qualification} {values.employed} {values.occupation}</label>
                                                    </div>
                                                    <div className="review_form_panel">
                                                        <p>Your feedback and interest information:</p><label className="radio-inline">{values.how_did_you_hear_about_us} {values.how_did_you_hear_about_us_other} {values.reasons_for_subscribing} {values.topic_interest}</label>
                                                    </div>
                                                    <div className="review_form_panel">
                                                        <p>Your referral confirmation:</p><label className="radio-inline">{values.referredby} {values.referredby_firstname} {values.referredby_surname} {values.referredby_email} {values.referredby_mobile_number}</label>
                                                    </div>
                                                    <div className="review_form_panel">
                                                        <p>Your refer-a-friend confirmation</p><label className="radio-inline">{values.refer_friend} {values.center_to_assist}</label>
                                                    </div>

                                                    <div className="form-row">
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


                                            <div className="avg__form_panel">
                                                <button type="submit" className="btn btn-primary btn-color bt-size mt-4 mb-4" data-id={isSubmitting}>Subscribe now and Pay!<span className="arrow-btn"><img src={solarArrowUpBroken} alt="My Happy SVG" /></span>
                                                </button>
                                            </div>
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

export default Subscription;
