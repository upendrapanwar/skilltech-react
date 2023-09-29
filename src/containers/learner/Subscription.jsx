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
                                                        <label htmlFor="id_number">South African ID Number<span>*</span></label>
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
                                                        <label htmlFor="street">House or Unit Number
                                                        <span>*</span></label>
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
                                                        <label htmlFor="complex_n_unit">Complex Name (if appl.)<span>*</span></label>
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
                                                        {/*<input type="text" className="form-control" name="province" id="province" placeholder="" onChange={handleChange} onBlur={handleBlur} value={values.province} />*/}
                                                        <select className="form-control" name="province" id="province" onChange={handleChange} onBlur={handleBlur} value={values.province} >
                                                        <option value="">Select Province</option>
                                                        <option value="eastern_cape">Eastern Cape
</option>
                                                        <option value="free_state">Free State
</option>
                                                        <option value="gauteng">Gauteng
</option>
                                                        <option value="kwaZulu_natal">KwaZulu-Natal</option>
                                                        <option value="limpopo">Limpopo</option>
                                                        <option value="mpumalanga">Mpumalanga</option>
                                                        <option value="north_west">North West</option>
                                                        <option value="northern_cape">Northern Cape</option>
                                                        <option value="western_cape">Western Cape</option>
                                                    </select>
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
                                                <p className="mb-2"> <strong>3. Demographic Information</strong></p>

                                                <div className="row form-row">
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="race">Race<span>*</span></label>
                                                        {/*<input type="text" className="form-control" name="race" id="race" placeholder="" onChange={handleChange} onBlur={handleBlur} value={values.race} />*/}
                                                        <select className="form-control" name="race" id="race" onChange={handleChange} onBlur={handleBlur}>
                                                            <option value="">Select Race</option>
                                                            <option value="african">African</option>
                                                            <option value="coloured">Coloured</option>
                                                            <option value="indian">Indian</option>
                                                            <option value="white">White</option>
                                                        </select>
                                                        {touched.race && errors.race ? (
                                                            <small className="text-danger">{errors.race}</small>
                                                        ) : null}
                                                    </div>

                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="gender">Gender<span>*</span></label>
                                                        {/*<input type="text" className="form-control" name="gender" id="gender" placeholder="" onChange={handleChange} onBlur={handleBlur} value={values.gender} />*/}
                                                        <select className="form-control" name="gender" id="gender" onChange={handleChange} onBlur={handleBlur}>
                                                            <option value="">Select Gender</option>
                                                            <option value="male">Male</option>
                                                            <option value="female">Female</option>
                                                            <option value="prefer_not_to_say">I'd prefer not to say</option>
                                                        </select>
                                                        {touched.gender && errors.gender ? (
                                                            <small className="text-danger">{errors.gender}</small>
                                                        ) : null}
                                                    </div>
                                                </div>
                                                <div className="row form-row">
                                                    <div className="form-group ">
                                                        <label htmlFor="qualification">Highest Qualification Race<span>*</span></label>
                                                        {/*<input type="text" className="form-control" name="qualification" id="qualification" placeholder="" onChange={handleChange} onBlur={handleBlur} value={values.qualification} />*/}
                                                        <select className="form-control" name="qualification" id="qualification" onChange={handleChange} onBlur={handleBlur}>
                                                            <option value="">Select Qualification</option>
                                                            <option value="senior_certitifate_grade12">Senior Certitifate (Grade12)</option>
                                                            <option value="higher_certificate">Higher certificate</option>
                                                            <option value="advanced_certificate">Advanced certificate</option>
                                                            <option value="diploma">Diploma</option>
                                                            <option value="postgraduate_certificate">Postgraduate certificate</option>
                                                            <option value="bachelor_degree_or_diploma">Bachelor degree or Advanced diploma</option>
                                                            <option value="post_graduate_degree_honours">Post graduate degree (Honours)</option>
                                                            <option value="post_graduate_degree_masters">Post graduate degree (Masters)</option>
                                                            <option value="post_graduate_degree_doctorate">Post graduate degree (Doctorate)</option>
                                                        </select>
                                                        {touched.qualification && errors.qualification ? (
                                                            <small className="text-danger">{errors.qualification}</small>
                                                        ) : null}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="avg__form_panel">
                                                <p className="mb-2"> <strong>4. How can we contact you?
</strong><span>*</span></p>

                                                <div className="row form-row">
                                                    <div className="form-group col-md-12">
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <label className="radio-inline">
                                                                    <input type="checkbox" id="com_email" name="method_of_communication" onChange={handleChange} onBlur={handleBlur} value="email" />Email
                                                                </label>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <label className="radio-inline">
                                                                    <input type="checkbox" id="com_whatsapp" name="method_of_communication" onChange={handleChange} onBlur={handleBlur} value="whatsapp" />WhatsApp
                                                                </label>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <label className="radio-inline">
                                                                    <input type="checkbox" id="com_sms" name="method_of_communication" onChange={handleChange} onBlur={handleBlur} value="sms" />SMS
                                                                </label>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <label className="radio-inline">
                                                                    <input type="checkbox" id="com_phone" name="method_of_communication" onChange={handleChange} onBlur={handleBlur} value="phone_call" />Telephone
                                                                </label>
                                                            </div>
                                                            {touched.method_of_communication && errors.method_of_communication ? (
                                                                <small className="text-danger">{errors.method_of_communication}</small>
                                                            ) : null}
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>

                                            
                                            <div className="row form-row">
                                                <p>We're serious about your privacy. Please read our Terms and Conditions before you continue. View our Terms and Conditions here.<span>*</span></p>
                                                <div className="form-group col-md-6">
                                                    <div className="row">
                                                        <div className="col-md-3">
                                                            <label className="radio-inline">
                                                                <input type="radio" id="yesprivacy" name="privacy" onChange={handleChange} onClick={handleRefferedBy} onBlur={handleBlur} value="yes" />Yes
                                                            </label>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <label className="radio-inline">
                                                                <input type="radio" id="noprivacy" name="privacy" onChange={handleChange} onClick={handleRefferedBy} onBlur={handleBlur} value="no" />No
                                                            </label>
                                                        </div>
                                                        {touched.privacy && errors.referredby ? (
                                                            <small className="text-danger">{errors.privacy}</small>
                                                        ) : null}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row form-row">
                                                <p style={txtunderline}>Opt-in for promotional emails,newsletter:<span>*</span></p>
                                                {touched.opt_in_promotional && errors.opt_in_promotional ? (
                                                    <small className="text-danger">{errors.opt_in_promotional}</small>
                                                ) : null}
                                                <p>I'd like to receive the monthly High Vista newsletter</p>
                                                <div className="form-group col-md-6">
                                                    
                                                    <div className="row">
                                                        <div className="col-md-3">
                                                            <label className="radio-inline">
                                                                <input type="radio" id="opt_in_promotional" name="opt_in_promotional" onChange={handleChange} onClick={handleRefferedBy} onBlur={handleBlur} value="yes" />Yes
                                                            </label>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <label className="radio-inline">
                                                                <input type="radio" id="opt_in_promotional" name="opt_in_promotional" onChange={handleChange} onClick={handleRefferedBy} onBlur={handleBlur} value="no" />No
                                                            </label>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                                <p>I'd like to receive information about deals and promotions</p>
                                                <div className="form-group col-md-6">
                                                    
                                                    <div className="row">
                                                        <div className="col-md-3">
                                                            <label className="radio-inline">
                                                                <input type="radio" id="yes_deals_promotion" name="deals_promotion" onChange={handleChange} onClick={handleRefferedBy} onBlur={handleBlur} value="yes" />Yes
                                                            </label>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <label className="radio-inline">
                                                                <input type="radio" id="no_deals_promotion" name="deals_promotion" onChange={handleChange} onClick={handleRefferedBy} onBlur={handleBlur} value="no" />No
                                                            </label>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                                <p>I'd like to receive information about upcomong courses, webinars and events.</p>
                                                <div className="form-group col-md-6">
                                                    
                                                    <div className="row">
                                                        <div className="col-md-3">
                                                            <label className="radio-inline">
                                                                <input type="radio" id="yes_in_loop" name="in_loop" onChange={handleChange} onClick={handleRefferedBy} onBlur={handleBlur} value="yes" />Yes
                                                            </label>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <label className="radio-inline">
                                                                <input type="radio" id="no_in_loop" name="in_loop" onChange={handleChange} onClick={handleRefferedBy} onBlur={handleBlur} value="no" />No
                                                            </label>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            <div/>
                                                
                                            </div>
                                            <div className="avg__form_panel">
                                                <p>How did you hear abourt High Vista Guild?<span>*</span></p>

                                                <div className="row form-row">
                                                    <div className="form-group col-md-12">
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <label className="radio-inline">
                                                                    <input type="checkbox" id="social_media_page" name="hear_about_us" onChange={handleChange} onBlur={handleBlur} value="social_media_page" />Our social media pages

                                                                </label>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <label className="radio-inline">
                                                                    <input type="checkbox" id="our_website" name="hear_about_us" onChange={handleChange} onBlur={handleBlur} value="our_website" />Our website

                                                                </label>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <label className="radio-inline">
                                                                    <input type="checkbox" id="referred_by_ambassador" name="hear_about_us" onChange={handleChange} onBlur={handleBlur} value="referred_by_ambassador" />I was referred by an ambassador

                                                                </label>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <label className="radio-inline">
                                                                    <input type="checkbox" id="referred_by_friend" name="hear_about_us" onChange={handleChange} onBlur={handleBlur} value="referred_by_friend" />I was referred by a friend

                                                                </label>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <label className="radio-inline">
                                                                    <input type="checkbox" id="stumbled_on_browsing" name="hear_about_us" onChange={handleChange} onBlur={handleBlur} value="stumbled_on_browsing" />I stumbled on it while browsing


                                                                </label>
                                                            </div>
                                                            {touched.hear_about_us && errors.hear_about_us ? (
                                                                <small className="text-danger">{errors.hear_about_us}</small>
                                                            ) : null}
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>
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
