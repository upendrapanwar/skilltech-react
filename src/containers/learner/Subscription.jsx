import React, { useEffect, useState } from "react";
import solarArrowUpBroken from "../../assets/images/solar_arrow-up-broken.svg";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import Loader from "../../components/common/Loader";
import { toast } from "react-toastify";
import SubscriptionSchema from "../../validation-schemas/SubscriptionSchema";
import privecyConditionPDF from "../../assets/pdf/Skill_Tech_Solutions-Website_Privacy_Policy_2023.pdf";
import ecommerceConditionPDF from "../../assets/pdf/Skill_Tech_Solutions-Sale_of_Digital_E-Commerce_Products _2024.pdf";
import { Formik } from "formik";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { addToCart } from '../../redux/cartSlice';
import { useDispatch } from "react-redux";
import grid1 from '../../assets/images/grid1.svg';
// import config from "../../config.json";
//import { Helmet } from 'react-helmet';
//import { useSelector } from 'react-redux'

const Subscription = () => {
  let userInfo = JSON.parse(localStorage.getItem("authInfo"));
  console.log("typrof=", typeof userInfo.id);
  let tmp = userInfo.id;
  if (typeof tmp === "undefined") {
    userInfo = JSON.parse(localStorage.getItem("userInfo")); 
  }
  console.log("kjk=", JSON.parse(localStorage.getItem("userInfo")));
  //const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  //userInfo = (userInfo === null) ? JSON.parse(localStorage.getItem("authInfo")) : '';
  const pfParamString = "";
  const location = useLocation();
  //console.log(process.env);
  //const passPhrase = process.env.REACT_APP_PASSPHRASE;

  console.log("userInfo=", userInfo);
  const locations = useLocation();
  let [loading, setLoading] = useState("false");
  let [showReferred, setShowReferred] = useState(false);
  let [signature, setSignature] = useState(null);
  let [userid, setUserid] = useState(userInfo.id);
  let [profileData, setProfileData] = useState({}); 

  //let [identifier, setIdentifier] = useState(null);
  let [allmerchantData, setAllMerchantData] = useState(null);

  //Variables for High Vista Package
    let price = 500;
    let id = '9999';
    //let title = 'High Vista Package';
    let title = (locations && locations.state != null) ? locations.state.title : 'Subscription Package'; 
    let image = grid1;
    let paymentType = 'subscription';  

  const navigate = useNavigate();
  //const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch();

  console.log("userid=", userInfo.id);
  useEffect(() => {
    //const script = document.createElement('script');
    //script.src = 'https://sandbox.payfast.co.za/onsite/engine.js';
    //script.src = 'https://www.payfast.co.za/onsite/onsite/engine.js'

    //script.async = true;
    //document.body.appendChild(script);

    console.log("isSubscriberRegister", userInfo.isSubscriberRegister);
    getProfileDetails();
    
    // if (userInfo.isSubscriberRegister === null) {
    //   completeRegistration();
    // }
    let authInfo = {
      id: userInfo.id,
      isSubscriberRegister: null,
    };
    localStorage.setItem("authInfo", JSON.stringify(authInfo));
  }, []);
  toast.configure();
  const txtunderline = {
    textDecoration: "underline",
    width: "100%",
  };
  console.log(" profileData: ", profileData)

  /**
   * Ping the payfast api to get data
   */
  {
    /*
    const pingFast = async(signatureData) => {
        let timestamp = new Date(new Date().toString().split('GMT')[0]+' UTC').toISOString().split('.')[0];
        await axios.post('https://api.payfast.co.za/ping?testing=true', {
            headers: {
                'merchant-id': process.env.REACT_APP_MERCHANT_ID,
                'version': 'v1',
                'timestamp': timestamp,
                'signature': signatureData
            }
        }).then(response => {
            if (response) {
                console.log('response=',response);                
            }
        }).catch(error => {
            
            if (error) {
                console.log('Error=',error);
                
            }
        })
    }*/
  }
  /***********************************************************************/
  /***********************************************************************/
  /**
   * Handle fetching profile data
   *
   */
  const getProfileDetails = () => {
    axios.get('user/get-profile-details/'+ userid).then(response => {
            toast.dismiss();

            if (response.data) {
                
                if(response.data.status) {
                  setProfileData(response.data.data[0]);
                    console.log("Response Data for email: ",response.data.data[0].email)
                }
                
            }
        }).catch(error => {
            toast.dismiss();
            if (error.response) {
                toast.error('Code is not available', { position: "top-center",autoClose: 3000 });
            }
        })
  } 
  
  /***********************************************************************/
  /***********************************************************************/
  /**
   * Manages visibility of referred by fields
   *
   * @param {*} event
   *
   */
  const handleRefferedBy = (e) => {
    const referred = e.target.value;
    if (referred === "yes") {
      setShowReferred(true);
    } else {
      setShowReferred(false);
    }
  };
  /***********************************************************************/
  /***********************************************************************/
  /**
   * Handle complete regsitration
   *
   */
  // const completeRegistration = () => {
  //   setLoading(true);
  //   const dataArray = { userid: userid };
  //   axios
  //     .post("common/complete-registration", dataArray)
  //     .then((response) => {
  //       toast.dismiss();

  //       if (response.data.status) {
  //         if (response.data.message === "Error while saving.") {
  //           toast.success("Please complete your registration", {
  //             position: "top-center",
  //             autoClose: 3000,
  //           });
  //         }

  //         //navigate('/login');
  //       }
  //     })
  //     .catch((error) => {
  //       toast.dismiss();
  //       if (error.response) {
  //         toast.error("Please complete your registration", {
  //           position: "top-center",
  //           autoClose: 3000,
  //         });
  //       }
  //     })
  //     .finally(() => {
  //       setTimeout(() => {
  //         setLoading(false);
  //       }, 300);
  //     });
  // };
  /***********************************************************************/
  /***********************************************************************/
  /**
   * Handle complete regsitration
   *
   */
  {
    /*
    const generateSignature = async (merchantData, passPhrase) => {
        setLoading(true);
        const dataArray = {
            'merchantData':merchantData,
            //'payment_method': 'cc',
            'passPhrase':passPhrase,
            'testMode' : true
        };
        await axios.post('common/generate-signature', dataArray).then(response => {
            toast.dismiss();
            //console.log('response=',response.data);
            //console.log('signature=',response.data.data);
            //merchantData.push({'signature':response.data.data})
            
            setSignature(response.data.data);
            
            //console.log('signature=',response.data.data);
            //console.log('merchantData=',merchantData);
           
            // Generate payment identifier
            
            if (response.data.status) {
                //var identifierVar = generatePaymentIdentifier(response.data.data, merchantData);
                return generatePaymentIdentifier(response.data.data, merchantData);    
                //setIdentifier(identifierVar);
                //navigate('/login');
            }
        }).catch(error => {
            toast.dismiss();
            if (error.response) {
                toast.error('Please complete your registation', { position: "top-center",autoClose: 3000 });
            }
        }).finally(() => {
            setTimeout(() => {
                setLoading(false);
            }, 300);
        });
    }*/
  }
  /***********************************************************************/
  /***********************************************************************/
  /**
   * Handle after form submission
   *
   */
  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Just checking handleSubmit***************************");
    console.log("values=", values);
    setLoading(true);
    

    // let communication = [];
    // const com = values.method_of_communication;
    // if (com.includes("email")) {
    //   communication.push({ email: values.email });
    // }
    // if (com.includes("whatsapp")) {
    //   communication.push({ whatsapp: values.mobile_number });
    // }
    // if (com.includes("sms")) {
    //   communication.push({ sms: values.mobile_number });
    // }
    // if (com.includes("phone_call")) {
    //   communication.push({ phone_call: values.mobile_number });
    // }
    // values.method_of_communication = communication;
    // console.log("COMMUNICATION", communication);


    axios
      .post("common/subscription", values)
      .then((response) => {
        toast.dismiss();
        if (response.data.status) {
          let authInfo = {
            id: response.data.data["_id"], 
            isSubscriberRegister: "yes",
          };
          localStorage.setItem("authInfo", JSON.stringify(authInfo));
          //let merchantData = '';
          //let paymentType = '';
          //let orderItemName = 'Order#';
          //const passPhrase = process.env.REACT_APP_PASSPHRASE;
          toast.success(response.data.message, {
            position: "top-center",
            autoClose: 3000,
          });
          navigate("/cart");
         
        }
      })
      .catch((error) => {
        toast.dismiss();
        if (error.response) {
          toast.error(error.response.data.message, {
            position: "top-center",
            autoClose: 3000,
          });
        }
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 300);
      });
  };
  

  return (
    <>
      {loading === true ? <Loader /> : ""}
      {/*{identifier &&
            
            <Helmet>
                <script>{`{
                    window.payfast_do_onsite_payment({
                        uuid: '${identifier}',
                        "return_url": '${process.env.REACT_APP_NGROK_URL}'+"/login/success",
                        "cancel_url": '${process.env.REACT_APP_NGROK_URL}'+"/login/cancel",
                        'notify_url' : '${process.env.REACT_APP_NGROK_URL}'+"/login/notify",
                    })
                    }`}
                </script>
            </Helmet>
            }*/}
      <Header />
<div className="hvg__main_container">
      <section className="regitration-section">
        <div className="container">
           <div className="mt-4 text-center mb-4">
                <div className="ambeReg-heading">
                  <h1>Subscription Registration Form</h1>
                </div>
          </div>
          <div className="row">
            <div className="ambeReg-wrapper col-md-8 mx-auto">
              <div className="text-left">
                <p>
                  Required fields are marked with a "{" "}
                  <span style={{ color: "red" }}>*</span> "
                </p>
              </div>

              <div className="form-wrapper mt-4 ">
              {Object.keys(profileData).length > 0 && (
                <Formik
                  initialValues={{
                    uid: userid,
                    firstname: profileData.firstname || "",
                    surname: profileData.surname || "",
                    id_number: profileData.id_number || "",
                    email: profileData.email || "",
                    mobile_number: profileData.mobile_number || "",
                    alternate_mobile_number: profileData.alternate_mobile_number || "",
                    street: profileData.street || "",
                    street_name: profileData.street_name || "",
                    complex_n_unit: profileData.complex_n_unit || "",
                    suburb_district: profileData.suburb_district || "",
                    town_city: profileData.town_city || "",
                    province: profileData.province || "",
                    postal_code: profileData.postal_code || "",
                    race: profileData.race || "",
                    gender: profileData.gender || "",
                    qualification: profileData.qualification || "",
                    ecommercePolicy: profileData.ecommercePolicy || "",
                    privacy: profileData.privacy || "",
                    opt_in_promotional: profileData.opt_in_promotional || "",
                    deals_promotion: profileData.deals_promotion || "",
                    in_loop: profileData.in_loop || "",
                    method_of_communication: Array.isArray(profileData.method_of_communication)
                    ? profileData.method_of_communication
                    : [],
                    how_did_you_hear_about_us: Array.isArray(profileData.how_did_you_hear_about_us)
                    ? profileData.how_did_you_hear_about_us
                    : [],
                    // how_did_you_hear_about_us: Array.isArray(profileData.how_did_you_hear_about_us)
                    // ? profileData.how_did_you_hear_about_us
                    // : [profileData.how_did_you_hear_about_us] || [],
                  }} 
                  onSubmit={(values, { setSubmitting }) => {
                    console.log("Form values:", values);
                    console.log("This is in onSumit line");
                    setSubmitting(true);
                    handleSubmit(values, setSubmitting);
                    //resetForm(true);
                  }}
                  validationSchema={SubscriptionSchema}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isValid,
                    isSubmitting,
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <div className="avg__form_panel">
                        <p className="mb-2">
                          {" "}
                          <strong>1.Personal Information</strong>
                        </p>
                        <div className="row form-row">
                          <p>
                            Please provide your full first names and surname
                            exactly as reflected on your South African ID (or
                            foreign national Identity Document, if applicable).
                          </p>
                          <div className="form-group col-md-6">
                            <label htmlFor="first_name">
                              First Name(s)<span>*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="firstname"
                              id="firstname"
                              placeholder=""
                              aria-describedby="firstnameHelp"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.firstname}
                            />
                            {touched.firstname && errors.firstname ? (
                              <small className="text-danger">
                                {errors.firstname}
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
                        <div className="row  form-row">
                          <div className="form-group col-md-6">
                            <label htmlFor="id_number">
                              South African ID Number<span>*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="id_number"
                              id="id_number"
                              placeholder=""
                              aria-describedby="idnumberHelp"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.id_number}
                            />
                            {touched.id_number && errors.id_number ? (
                              <small className="text-danger">
                                {errors.id_number}
                              </small>
                            ) : null}
                          </div>
                        </div>
                      </div>

                      <div className="avg__form_panel">
                        <p className="mb-2">
                          {" "}
                          <strong>2. Contact Information</strong>
                        </p>

                        <div className="row form-row">
                          <div className="form-group col-md-6">
                            <label htmlFor="email">
                              Email Address<span>*</span>
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
                              Mobile Contact Number <span>*</span>
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
                          <div className="form-group col-md-6">
                            <label htmlFor="alternate_mobile_number">
                              Alternative Mobile Contact Number
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="alternate_mobile_number"
                              id="alternate_mobile_number"
                              aria-describedby="alternateMobileNumberHelp"
                              placeholder=""
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.alternate_mobile_number}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="avg__form_panel">
                        <p style={txtunderline}>Mailing Address</p>
                        <div className="row form-row">
                          <div className="form-group col-md-6">
                            <label htmlFor="street">
                              House or Unit Number
                              <span>*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="street"
                              id="street"
                              aria-describedby="streetHelp"
                              placeholder=""
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.street}
                            />
                            {touched.street && errors.street ? (
                              <small className="text-danger">
                                {errors.street}
                              </small>
                            ) : null}
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="street_name">
                              Street Name <span>*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="street_name"
                              id="street_name"
                              aria-describedby="streetNameHelp"
                              placeholder=""
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.street_name}
                            />
                            {touched.street_name && errors.street_name ? (
                              <small className="text-danger">
                                {errors.street_name}
                              </small>
                            ) : null}
                          </div>
                        </div>
                        <div className="row form-row">
                          <div className="form-group col-md-6">
                            <label htmlFor="complex_n_unit">
                              Complex Name (if appl.)
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="complex_n_unit"
                              id="complex_n_unit"
                              placeholder=""
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.complex_n_unit}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="avg__form_panel">
                        <div className="row form-row col-md-12 pl-0">
                          <div className="form-group col-md-3">
                            <label htmlFor="suburb_district">
                              Suburb/District <span>*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="suburb_district"
                              id="suburb_district"
                              placeholder=""
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.suburb_district}
                            />
                            {touched.suburb_district &&
                            errors.suburb_district ? (
                              <small className="text-danger">
                                {errors.suburb_district}
                              </small>
                            ) : null}
                          </div>
                          <div className="form-group col-md-3">
                            <label htmlFor="town_city">
                              Town/City <span>*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="town_city"
                              id="town_city"
                              placeholder=""
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.town_city}
                            />
                            {touched.town_city && errors.town_city ? (
                              <small className="text-danger">
                                {errors.town_city}
                              </small>
                            ) : null}
                          </div>
                          <div className="form-group col-md-3">
                            <label htmlFor="province">
                              Province<span>*</span>
                            </label>
                            {/*<input type="text" className="form-control" name="province" id="province" placeholder="" onChange={handleChange} onBlur={handleBlur} value={values.province} />*/}
                            <select
                              className="form-control"
                              name="province"
                              id="province"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.province}
                            >
                              <option value="">Select Province</option>
                              <option value="eastern_cape">Eastern Cape</option>
                              <option value="free_state">Free State</option>
                              <option value="gauteng">Gauteng</option>
                              <option value="kwaZulu_natal">
                                KwaZulu-Natal
                              </option>
                              <option value="limpopo">Limpopo</option>
                              <option value="mpumalanga">Mpumalanga</option>
                              <option value="north_west">North West</option>
                              <option value="northern_cape">
                                Northern Cape
                              </option>
                              <option value="western_cape">Western Cape</option>
                            </select>
                            {touched.province && errors.province ? (
                              <small className="text-danger">
                                {errors.province}
                              </small>
                            ) : null}
                          </div>
                          <div className="form-group col-md-3">
                            <label htmlFor="postal_code">
                              Postal Code <span>*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="postal_code"
                              id="postal_code"
                              placeholder=""
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.postal_code}
                            />
                            {touched.postal_code && errors.postal_code ? (
                              <small className="text-danger">
                                {errors.postal_code}
                              </small>
                            ) : null}
                          </div>
                        </div>
                      </div>

                      <div className="avg__form_panel">
                        <p className="mb-2">
                          {" "}
                          <strong>3. Demographic Information</strong>
                        </p>

                        <div className="row form-row">
                          <div className="form-group col-md-6">
                            <label htmlFor="race">
                              Race<span>*</span>
                            </label>
                            {/*<input type="text" className="form-control" name="race" id="race" placeholder="" onChange={handleChange} onBlur={handleBlur} value={values.race} />*/}
                            <select
                              className="form-control"
                              name="race"
                              id="race"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.race}
                            >
                              <option value="">Select Race</option>
                              <option value="african">African</option>
                              <option value="coloured">Coloured</option>
                              <option value="indian">Indian</option>
                              <option value="white">White</option>
                            </select>
                            {touched.race && errors.race ? (
                              <small className="text-danger">
                                {errors.race}
                              </small>
                            ) : null}
                          </div>

                          <div className="form-group col-md-6">
                            <label htmlFor="gender">
                              Gender<span>*</span>
                            </label>
                            {/*<input type="text" className="form-control" name="gender" id="gender" placeholder="" onChange={handleChange} onBlur={handleBlur} value={values.gender} />*/}
                            <select
                              className="form-control"
                              name="gender"
                              id="gender"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.gender}
                            >
                              <option value="">Select Gender</option>
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                              <option value="prefer_not_to_say">
                                I'd prefer not to say
                              </option>
                            </select>
                            {touched.gender && errors.gender ? (
                              <small className="text-danger">
                                {errors.gender}
                              </small>
                            ) : null}
                          </div>
                        </div>
                        <div className="row form-row">
                          <div className="form-group ">
                            <label htmlFor="qualification">
                              Highest Qualification Race<span>*</span>
                            </label>
                            {/*<input type="text" className="form-control" name="qualification" id="qualification" placeholder="" onChange={handleChange} onBlur={handleBlur} value={values.qualification} />*/}
                            <select
                              className="form-control"
                              name="qualification"
                              id="qualification"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.qualification}
                            >
                              <option value="">Select Qualification</option>
                              <option value="senior_certitifate_grade12">
                                Senior Certitifate (Grade12)
                              </option>
                              <option value="higher_certificate">
                                Higher certificate
                              </option>
                              <option value="advanced_certificate">
                                Advanced certificate
                              </option>
                              <option value="diploma">Diploma</option>
                              <option value="postgraduate_certificate">
                                Postgraduate certificate
                              </option>
                              <option value="bachelor_degree_or_diploma">
                                Bachelor degree or Advanced diploma
                              </option>
                              <option value="post_graduate_degree_honours">
                                Post graduate degree (Honours)
                              </option>
                              <option value="post_graduate_degree_masters">
                                Post graduate degree (Masters)
                              </option>
                              <option value="post_graduate_degree_doctorate">
                                Post graduate degree (Doctorate)
                              </option>
                            </select>
                            {touched.qualification && errors.qualification ? (
                              <small className="text-danger">
                                {errors.qualification}
                              </small>
                            ) : null}
                          </div>
                        </div>
                      </div>
                      <div className="avg__form_panel">
                        <p className="mb-2">
                          {" "}
                          <strong>4. How can we contact you?</strong>
                          <span>*</span>
                        </p>

                        <div className="row form-row">
                          <div className="form-group col-md-12">
                            <div className="row">
                              <div className="col-md-3">
                                <label className="radio-inline">
                                  <input
                                    type="checkbox"
                                    id="com_email"
                                    name="method_of_communication"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value="email"
                                    checked={values.method_of_communication.email || values.method_of_communication.includes("email")}
                                  />
                                  Email
                                </label>
                              </div>
                              <div className="col-md-3">
                                <label className="radio-inline">
                                  <input
                                    type="checkbox"
                                    id="com_whatsapp"
                                    name="method_of_communication"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value="whatsapp"
                                    checked={values.method_of_communication.whatsapp || values.method_of_communication.includes("whatsapp")}
                                  />
                                  WhatsApp
                                </label>
                              </div>
                              <div className="col-md-3">
                                <label className="radio-inline">
                                  <input
                                    type="checkbox"
                                    id="com_sms"
                                    name="method_of_communication"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value="sms"
                                    checked={values.method_of_communication.sms || values.method_of_communication.includes("sms")}
                                  />
                                  SMS
                                </label>
                              </div>
                              <div className="col-md-3">
                                <label className="radio-inline">
                                  <input
                                    type="checkbox"
                                    id="com_phone"
                                    name="method_of_communication"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value="phone_call"
                                    checked={values.method_of_communication.phone_call || values.method_of_communication.includes("phone_call")}
                                  />
                                  Telephone
                                </label>
                              </div>
                              <div className="col-md-3">
                                {touched.method_of_communication &&
                                errors.method_of_communication ? (
                                  <small className="text-danger">
                                    {errors.method_of_communication}
                                  </small>
                                ) : null}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="avg__form_panel">
                        <div className="row form-row">
                          <div className="form-group col-md-12">
                            <div className="row">
                              <div className="form-group col-md-12">
                                <p>
                                  We're serious about your privacy. Please read
                                  our Terms and Conditions before you continue.
                                  <br />
                                  <a
                                    href={ecommerceConditionPDF}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    View our e-commerce policy here
                                    <span>*</span>
                                    </a>
                                    <br />
                                    <a
                                    href={privecyConditionPDF}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    View our POPI website privacy policy here
                                  </a>
                                  .<span>*</span>
                                </p>

                                <label className="radio-inline">
                                  <input
                                    type="checkbox"
                                    id="ecommercePolicy"
                                    name="ecommercePolicy"
                                    onChange={handleChange}
                                    onClick={handleRefferedBy}
                                    onBlur={handleBlur}
                                    value="true"
                                    checked={values.ecommercePolicy}
                                  />
                                  I have read and accept the e-commerce policy.
                                  <span>*</span>
                                </label>
                              </div>
                              {/*<div className="col-md-3">
                                                                <label className="radio-inline">
                                                                    <input type="radio" id="noprivacy" name="privacy" onChange={handleChange} onClick={handleRefferedBy} onBlur={handleBlur} value="no" />No
                                                                </label>
                                                            </div>*/}
                            </div>
                            {touched.ecommercePolicy &&
                            errors.ecommercePolicy ? (
                              <small className="text-danger">
                                {errors.ecommercePolicy}
                              </small>
                            ) : null}
                          </div>
                        </div>
                      </div>
                      <div className="avg__form_panel">
                        <div className="row form-row">
                          <div className="form-group col-md-12">
                            <div className="row">
                              <div className="form-group col-md-12">
                                <label className="radio-inline">
                                  <input
                                    type="checkbox"
                                    id="yesprivacy"
                                    name="privacy"
                                    onChange={handleChange}
                                    onClick={handleRefferedBy}
                                    onBlur={handleBlur}
                                    value="true"
                                    checked={values.privacy}
                                  />
                                  I have read and accept the POPI website
                                  privacy policy<span>*</span>
                                </label>
                              </div>
                              {/*<div className="col-md-3">
                                                                <label className="radio-inline">
                                                                    <input type="radio" id="noprivacy" name="privacy" onChange={handleChange} onClick={handleRefferedBy} onBlur={handleBlur} value="no" />No
                                                                </label>
                                                            </div>*/}
                            </div>
                            {touched.privacy && errors.privacy ? (
                              <small className="text-danger">
                                {errors.privacy}
                              </small>
                            ) : null}
                          </div>
                        </div>
                      </div>
                      <div className="avg__form_panel">
                        <div className="row form-row">
                          <p style={txtunderline} className="mb-2">
                            {" "}
                            <strong>
                              5. Opt-in for our newsletter, exclusive
                              promotions, updates, and webinar notifications:
                            </strong>
                          </p>

                          <p>
                            I'd like to receive the monthly High Vista
                            newsletter<span>*</span>
                          </p>

                          <div className="form-group col-md-6">
                            <div className="row">
                              <div className="col-md-3">
                                <label className="radio-inline">
                                  <input
                                    type="radio"
                                    id="opt_in_promotional"
                                    name="opt_in_promotional"
                                    onChange={handleChange}
                                    onClick={handleRefferedBy}
                                    onBlur={handleBlur}
                                    value="yes"
                                    checked={values.opt_in_promotional === "yes"}
                                    
                                  />
                                  Yes
                                </label>
                              </div>
                              <div className="col-md-3">
                                <label className="radio-inline">
                                  <input
                                    type="radio"
                                    id="opt_in_promotional"
                                    name="opt_in_promotional"
                                    onChange={handleChange}
                                    onClick={handleRefferedBy}
                                    onBlur={handleBlur}
                                    value="no"
                                    checked={values.opt_in_promotional === "no"}
                                  />
                                  No
                                </label>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                                {touched.opt_in_promotional &&
                                errors.opt_in_promotional ? (
                                  <small className="text-danger">
                                    {errors.opt_in_promotional}
                                  </small>
                                ) : null}
                              </div>
                            </div>
                          </div>
                          <p>
                            I'd like to receive information about deals and
                            promotions<span>*</span>
                          </p>
                          <div className="form-group col-md-6">
                            <div className="row">
                              <div className="col-md-3">
                                <label className="radio-inline">
                                  <input
                                    type="radio"
                                    id="yes_deals_promotion"
                                    name="deals_promotion"
                                    onChange={handleChange}
                                    onClick={handleRefferedBy}
                                    onBlur={handleBlur}
                                    value="yes"
                                    checked={values.deals_promotion === "yes"}
                                  />
                                  Yes
                                </label>
                              </div>
                              <div className="col-md-3">
                                <label className="radio-inline">
                                  <input
                                    type="radio"
                                    id="no_deals_promotion"
                                    name="deals_promotion"
                                    onChange={handleChange}
                                    onClick={handleRefferedBy}
                                    onBlur={handleBlur}
                                    value="no"
                                    checked={values.deals_promotion === "no"}
                                  />
                                  No
                                </label>
                              </div>
                            </div>
                            {touched.deals_promotion &&
                            errors.deals_promotion ? (
                              <small className="text-danger">
                                {errors.deals_promotion}
                              </small>
                            ) : null}
                          </div>
                          <p>
                            I'd like to receive information about upcomong
                            courses, webinars and events.<span>*</span>
                          </p>
                          <div className="form-group col-md-6">
                            <div className="row">
                              <div className="col-md-3">
                                <label className="radio-inline">
                                  <input
                                    type="radio"
                                    id="yes_in_loop"
                                    name="in_loop"
                                    onChange={handleChange}
                                    onClick={handleRefferedBy}
                                    onBlur={handleBlur}
                                    value="yes"
                                    checked={values.in_loop === "yes"}
                                  />
                                  Yes
                                </label>
                              </div>
                              <div className="col-md-3">
                                <label className="radio-inline">
                                  <input
                                    type="radio"
                                    id="no_in_loop"
                                    name="in_loop"
                                    onChange={handleChange}
                                    onClick={handleRefferedBy}
                                    onBlur={handleBlur}
                                    value="no"
                                    checked={values.in_loop === "no"}
                                  />
                                  No
                                </label>
                              </div>
                            </div>
                            {touched.in_loop && errors.in_loop ? (
                              <small className="text-danger">
                                {errors.in_loop}
                              </small>
                            ) : null}
                          </div>
                          <div />
                        </div>
                      </div>
                      <div className="avg__form_panel">
                        <p>How did you hear about High Vista Guild?</p>

                        <div className="row form-row">
                          <div className="form-group col-md-12">
                            <div className="row">
                              <div className="col-md-5">
                                <label className="radio-inline">
                                  <input
                                    type="checkbox"
                                    id="social_media_page"
                                    name="how_did_you_hear_about_us"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value="social_media_page"
                                    checked={values.how_did_you_hear_about_us === "social_media_page" || values.how_did_you_hear_about_us.includes("social_media_page")}
                                  />
                                  Our social media pages
                                </label>
                              </div>
                              <div className="col-md-5">
                                <label className="radio-inline">
                                  <input
                                    type="checkbox"
                                    id="our_website"
                                    name="how_did_you_hear_about_us"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value="our_website"
                                    checked={values.how_did_you_hear_about_us === "our_website" || values.how_did_you_hear_about_us.includes("our_website")}
                                  />
                                  Our website
                                </label>
                              </div>
                              <div className="col-md-5">
                                <label className="radio-inline">
                                  <input
                                    type="checkbox"
                                    id="referred_by_ambassador"
                                    name="how_did_you_hear_about_us"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value="referred_by_ambassador"
                                    checked={values.how_did_you_hear_about_us === "referred_by_ambassador" || values.how_did_you_hear_about_us.includes("referred_by_ambassador")}
                                  />
                                  I was referred by an ambassador
                                </label>
                              </div>
                              <div className="col-md-5">
                                <label className="radio-inline">
                                  <input
                                    type="checkbox"
                                    id="referred_by_friend"
                                    name="how_did_you_hear_about_us"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value="referred_by_friend"
                                    checked={values.how_did_you_hear_about_us === "referred_by_friend" || values.how_did_you_hear_about_us.includes("referred_by_friend")}
                                  />
                                  I was referred by a friend
                                </label>
                              </div>
                              <div className="col-md-5">
                                <label className="radio-inline">
                                  <input
                                    type="checkbox"
                                    id="stumbled_on_browsing"
                                    name="how_did_you_hear_about_us"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value="stumbled_on_browsing"
                                    checked={values.how_did_you_hear_about_us === "stumbled_on_browsing" || values.how_did_you_hear_about_us.includes("stumbled_on_browsing")}
                                  />
                                  I stumbled on it while browsing
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="avg__form_panel">
                        <button
                          type="submit"
                          className="btn btn-primary btn-color bt-size mt-4 mb-4"
                          data-id={isSubmitting}
                          onClick={() => dispatch(addToCart({id, title, image, price, paymentType}))}
                        >
                          Complete My Order and Pay!
                          <span className="arrow-btn">
                            <img src={solarArrowUpBroken} alt="My Happy SVG" />
                          </span>
                        </button>
                      </div>
                    </form>
                  )}
                </Formik>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
};

export default Subscription;
