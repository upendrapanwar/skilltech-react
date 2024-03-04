import React, { useEffect, useState, useRef } from "react";
import solarArrowUpBroken from "../../assets/images/solar_arrow-up-broken.svg";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import Loader from "../../components/common/Loader";
import { toast } from "react-toastify";
import AmbessadorSchema from "../../validation-schemas/AmbessadorSchema";

import { Formik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import styles from "../../assets/css/styles.module.css";

const AmbassadorSubscription = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  let [loading, setLoading] = useState("false");
  let [referralCodes, setReferralCodes] = useState(null);
  let [userid, setUserid] = useState(userInfo.id);
  let [uploadCertificate, setUploadCertificate] = useState(null);
  let [uploadBankProof, setUploadBankProof] = useState(null);

  console.log("userid", userid);

  const navigate = useNavigate();
  useEffect(() => {
    generateReferralCode();
  }, []);
  toast.configure();
  const generateReferralCode = () => {
    //ex: HG00123
    var strDate = new Date(); // By default Date empty constructor give you Date.now
    var shortYear = strDate.getFullYear();
    // Add this line
    var twoDigitYear = shortYear.toString().substr(-2);
    let referralCode = twoDigitYear;
    const dataArray = {
      prefix: "HG",
      referralCode: referralCode,
    };
    axios
      .get("common/get-referral-code")
      .then((response) => {
        toast.dismiss();

        if (response.data.status) {
          var pad = "000";
          var n = response.data.data;
          var result = (pad + n).slice(-pad.length);
          referralCode = "HG" + result + twoDigitYear;
          console.log("Referral code generated:", referralCode);
          setReferralCodes(referralCode);
        }
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };
  /**
   * Manages certificate upload
   *
   */
  const handleCertificateUpload = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log("called: ", reader);
      setUploadCertificate(reader.result);
    };
    console.log(e.target.files[0]);
    //setUploadCertificate(e.target.files[0])
  };
  /***********************************************************************/
  /***********************************************************************/
  /**
   * Manages Bank proof uploads
   */
  const handleBankProofUpload = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log("called: ", reader);
      setUploadBankProof(reader.result);
    };
  };
  /***********************************************************************/
  /***********************************************************************/

  /**
   * Handle after form submission
   *
   */
  const handleSubmit = (values, { setSubmitting }) => {
    setLoading(true);
    //console.log("uploadBankProof",uploadBankProof);
    //console.log("uploadCertificate",uploadCertificate);
    values.certificate = uploadCertificate;
    values.bank_proof = uploadBankProof;
    values.referralCode = referralCodes;
    console.log("Submitting form...", values);
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data;application/json;charset=UTF-8",
      },
    };
    console.log(values);
    axios
      .post("common/ambassador-subscription", values)
      .then((response) => { 
        toast.dismiss();
        console.log("inside2");
        if (response.data.status) {
          toast.success(response.data.message, {
            position: "top-center",
            autoClose: 3000,
          });
          navigate("/ambessador/dashboard");
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
        console.log("inside3");
        setTimeout(() => {
          setLoading(false);
        }, 300);
      });
  };
  /***********************************************************************/
  /***********************************************************************/

  /**
   * Handle after form submission
   *
   */
  const handleRedirect = () => {
    navigate("/learner/subscription");
  };
  /***********************************************************************/
  /***********************************************************************/
  return (
    <>
      {loading === true ? <Loader /> : ""}

      <Header />
      <div className="hvg__main_container">
        <section className="ambessador-regi-section">
          <div className="container">
            <div className="ambeReg-heading text-center mb-4">
              <h1>Ambassador Registration Form</h1>
            </div>

            <div className="row">
              <div className="hvg__subscribeForm_wrapper col-md-8 mx-auto">
                <div className="headingcls">
                  <h4>
                    You’re one step away from becoming a High Vista Ambassador
                    and unlocking the awesome benefits this offers.
                  </h4>
                </div>
                <div className="subheadingcls">
                  To get signed up as ambassador, please provide the information
                  requested below. When you’re done, keep an eye on your inbox
                  for the your referral code and useful information on how to
                  maximise your rewards.
                </div>

                <div className="subheadingNote">
                  <strong>Please note:</strong>
                </div>
                <div>
                  You’ll need to upload some important documents to complete the
                  Ambassador sign-up. Please have certified copies of your South
                  African ID and proof of banking ready.
                </div>
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
                      account_holder_name: "",
                      //account_holder_surname: '',
                      bank: "",
                      branch: "",
                      branch_code: "",
                      type_of_account: "",
                      account_number: "",
                      bank_proof: "",
                      //referredby: '',
                      //referredby_firstname: '',
                      //referredby_surname: '',
                      referral_code: "",
                      //referredby_email: '',
                      //referredby_mobile_number: '',
                      refer_friend: [],
                      certificate: "",
                      confirm_details: "",
                      //terms_n_condition:'',
                      update_information: "",
                      //center_to_assist: '',
                      //pop: '',
                      //signature: signatures,
                      //signed_place: '',
                      // signed_on: new Date(),
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        console.log("onSubmit is working")
                      setSubmitting(true);
                      handleSubmit(values, setSubmitting);
                      //resetForm(true);
                    }}
                    validationSchema={AmbessadorSchema}
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
                      <form
                        encType="multipart/form-data"
                        onSubmit={handleSubmit}
                      >
                        <fieldset>
                          <div className="avg__form_panel">
                            <legend>1. Bank Account Information</legend>
                            <p>
                              Please confirm your banking details.
                              <br />
                              <strong>Account details</strong>
                            </p>
                            <p>
                              Who do you bank with?<span>*</span>
                            </p>
                            <div className="row form-row">
                              <div className="form-group col-md-6">
                                <select
                                  className="form-control"
                                  name="bank"
                                  id="bank"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                >
                                  <option value="">Select Bank list</option>
                                  <option value="ABSA">ABSA</option>
                                  <option value="african_bank_ltd">
                                    African Bank Ltd
                                  </option>
                                  <option value="bidvest_bank">
                                    Bidvest Bank
                                  </option>
                                  <option value="capitec_bank">
                                    Capitec Bank
                                  </option>
                                  <option value="discovery_bank">
                                    Discovery Bank
                                  </option>
                                  <option value="first_national_bank">
                                    First National Bank
                                  </option>
                                  <option value="investec">Investec</option>
                                  <option value="nedbank">Nedbank</option>
                                  <option value="mercantile_bank">
                                    Mercantile Bank
                                  </option>
                                  <option value="standard_bank">
                                    Standard Bank
                                  </option>
                                  <option value="tyme_bank">TymeBank</option>
                                </select>
                              </div>
                              <div className="form-group col-md-8">
                                {touched.bank && errors.bank ? (
                                  <small className="text-danger">
                                    {errors.bank}
                                  </small>
                                ) : null}
                              </div>
                            </div>
                            <div className="row form-row">
                              <div className="form-group col-md-6">
                                <label htmlFor="branch">
                                  Branch <span>*</span>
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="branch"
                                  id="branch"
                                  placeholder=""
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.branch}
                                />
                                {touched.branch && errors.branch ? (
                                  <small className="text-danger">
                                    {errors.branch}
                                  </small>
                                ) : null}
                              </div>
                            </div>
                            <div className="row form-row">
                              <div className="form-group col-md-6">
                                <label htmlFor="branch_code">
                                  Branch Code<span>(if available)</span>
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="branch_code"
                                  id="branch_code"
                                  placeholder=""
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.branch_code}
                                />
                              </div>
                            </div>
                            <div className="row form-row">
                              <div className="form-group col-md-6">
                                <label htmlFor="account_number">
                                  Account Number<span>*</span>
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="account_number"
                                  id="account_number"
                                  placeholder=""
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.account_number}
                                />
                                {touched.account_number &&
                                errors.account_number ? (
                                  <small className="text-danger">
                                    {errors.account_number}
                                  </small>
                                ) : null}
                              </div>
                            </div>
                            <div className="row form-row">
                              <div className="form-group col-md-6">
                                <label htmlFor="account_holder_name">
                                  Bank account holder's full name<span>*</span>
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="account_holder_name"
                                  id="account_holder_name"
                                  placeholder=""
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.account_holder_name}
                                />
                                {touched.account_holder_name &&
                                errors.account_holder_name ? (
                                  <small className="text-danger">
                                    {errors.account_holder_name}
                                  </small>
                                ) : null}
                              </div>
                            </div>
                            <div className="row form-row">
                              <div className="form-group col-md-6">
                                <label htmlFor="type_of_account">
                                  Account Type<span>*</span>
                                </label>
                                <select
                                  className="form-control"
                                  name="type_of_account"
                                  id="type_of_account"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                >
                                  <option value="">Select Account Type</option>
                                  <option value="current_account">
                                    Current account
                                  </option>
                                  <option value="savings_account">
                                    Savings account
                                  </option>
                                </select>
                                {touched.type_of_account &&
                                errors.type_of_account ? (
                                  <small className="text-danger">
                                    {errors.type_of_account}
                                  </small>
                                ) : null}
                              </div>
                            </div>
                          </div>

                          <div className="avg__form_panel">
                            <legend>
                              2. Please upload proof of banking (stamped bank
                              letter / stamped e-statement)
                            </legend>
                            <div className="row form-row">
                              <div className="form-group col-md-12">
                                <input
                                  type="file"
                                  id="bank_proof"
                                  name="bank_proof"
                                  onChange={(e) => {
                                    handleChange(e);
                                    handleBankProofUpload(e);
                                  }}
                                  onBlur={handleBlur}
                                />
                              </div>
                              <div className="form-group col-md-6">
                                {touched.bank_proof && errors.bank_proof ? (
                                  <small className="text-danger">
                                    {errors.bank_proof}
                                  </small>
                                ) : null}
                              </div>
                            </div>
                          </div>
                          <div className="avg__form_panel">
                            <legend>
                              3. Please upload a certified copy of your South
                              African ID<span>*</span>
                            </legend>
                            <div className="row form-row">
                              <div className="form-group col-md-12">
                                <input
                                  type="file"
                                  id="certificate"
                                  name="certificate"
                                  onChange={(e) => {
                                    handleChange(e);
                                    handleCertificateUpload(e);
                                  }}
                                  onBlur={handleBlur}
                                />
                              </div>
                              <div className="form-group col-md-6">
                                {touched.certificate && errors.certificate ? (
                                  <small className="text-danger">
                                    {errors.certificate}
                                  </small>
                                ) : null}
                              </div>
                            </div>
                          </div>
                          <div className="avg__form_panel">
                            <input
                              type="checkbox"
                              id="confirm_details"
                              name="confirm_details"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value="true"
                            />
                            Please confirm the detail you have provided is
                            correct
                            <div className="form-group col-md-6">
                              {touched.confirm_details &&
                              errors.confirm_details ? (
                                <small className="text-danger">
                                  {errors.confirm_details}
                                </small>
                              ) : null}
                            </div>
                          </div>
                          {/*<div className="avg__form_panel">
                                                    <input type="checkbox" id="terms_n_condition" name="terms_n_condition" onChange={handleChange} onBlur={handleBlur} value="true" />Please accept our terms and conditions
                                                    <div className="form-group col-md-6">
                                                        {touched.terms_n_condition && errors.terms_n_condition ? (
                                                            <small className="text-danger">{errors.terms_n_condition}</small>
                                                        ) : null}
                                                    </div>
                                                    
                                                </div>*/}
                          <div className="avg__form_panel">
                            <input
                              type="checkbox"
                              id="update_information"
                              name="update_information"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value="true"
                            />
                            Please confirm that you will update any information
                            provided should it change
                            <div className="form-group col-md-6">
                              {touched.update_information &&
                              errors.update_information ? (
                                <small className="text-danger">
                                  {errors.update_information}
                                </small>
                              ) : null}
                            </div>
                          </div>
                          <div className="avg__form_panel">
                            <div className="form-row">
                              <legend>
                                4. How will you most likely refer people to the
                                High Vista Guild?<span>*</span>
                              </legend>
                              <div className="form-group col-md-12">
                                <div className="row">
                                  <div className="col-md-4">
                                    <label className="radio-inline">
                                      <input
                                        type="checkbox"
                                        id="whatsApp"
                                        name="refer_friend"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value="whatsApp"
                                      />
                                      WhatsApp
                                    </label>
                                  </div>
                                  <div className="col-md-4">
                                    <label className="radio-inline">
                                      <input
                                        type="checkbox"
                                        id="email"
                                        name="refer_friend"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value="email"
                                      />
                                      Email
                                    </label>
                                  </div>
                                  <div className="col-md-4">
                                    <label className="radio-inline">
                                      <input
                                        type="checkbox"
                                        id="word_of_mouth"
                                        name="refer_friend"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value="word_of_mouth"
                                      />
                                      Word of mouth
                                    </label>
                                  </div>
                                  <div className="col-md-4">
                                    <label className="radio-inline">
                                      <input
                                        type="checkbox"
                                        id="my_instagram_pages"
                                        name="refer_friend"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value="my_instagram_pages"
                                      />
                                      My Instagram pages
                                    </label>
                                  </div>
                                  <div className="col-md-4">
                                    <label className="radio-inline">
                                      <input
                                        type="checkbox"
                                        id="my_twitter_feed"
                                        name="refer_friend"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value="my_twitter_feed"
                                      />
                                      My Twitter feed
                                    </label>
                                  </div>
                                  <div className="col-md-4">
                                    <label className="radio-inline">
                                      <input
                                        type="checkbox"
                                        id="my_youtube_channel"
                                        name="refer_friend"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value="my_youtube_channel"
                                      />
                                      My Youtube channel
                                    </label>
                                  </div>
                                  <div className="col-md-4">
                                    <label className="radio-inline">
                                      <input
                                        type="checkbox"
                                        id="my_facebook_page"
                                        name="refer_friend"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value="my_facebook_page"
                                      />
                                      My Facebook page
                                    </label>
                                  </div>
                                  <div className="form-group col-md-6">
                                    {touched.refer_friend &&
                                    errors.refer_friend ? (
                                      <small className="text-danger">
                                        {errors.refer_friend}
                                      </small>
                                    ) : null}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="">
                            <button
                              type="submit"
                              className="btn btn-primary btn-color bt-size mt-4 mb-4"
                              data-id={isSubmitting}
                            >
                              Become an ambassador
                              <span className="arrow-btn">
                                <img
                                  src={solarArrowUpBroken}
                                  alt="My Happy SVG"
                                />
                              </span>
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
      </div>
      <Footer />
    </>
  );
};

export default AmbassadorSubscription;
