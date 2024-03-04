import React, { useEffect, useState } from "react";
import solarArrowUpBroken from "../../assets/images/solar_arrow-up-broken.svg";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import Loader from "../../components/common/Loader";
import { toast } from "react-toastify";
import UpdateProfileSchema from "../../validation-schemas/UpdateProfileSchema";
import { Formik } from "formik";
import axios from "axios";


const UpdateProfile = () => {
  let userInfo = JSON.parse(localStorage.getItem("authInfo"));
  console.log("typrof=", typeof userInfo.id);
  let tmp = userInfo.id;
  if (typeof tmp === "undefined") {
    userInfo = JSON.parse(localStorage.getItem("userInfo"));
  }
  console.log("kjk=", JSON.parse(localStorage.getItem("userInfo")));
  console.log("userInfo=", userInfo);

  let [loading, setLoading] = useState("false");
  let [userid, setUserid] = useState(userInfo.id);
  let [profileData, setProfileData] = useState({}); 


  console.log("userid=", userInfo.id);
  useEffect(() => {
    getProfileDetails();
  }, []);
  toast.configure();
  const txtunderline = {
    textDecoration: "underline",
    width: "100%",
  };

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
                    console.log("Response Data: ",response.data.data[0].email)
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
   * Handle after form submission
   *
   */
  const handleSubmit = (values, { setSubmitting }) => {
    setLoading(true);
    console.log('URL:', 'user/update-profile-details/' + userid);

    const dataArray = { 
      firstname: values.firstname,
      surname: values.surname,
      id_number: values.id_number,
      email: values.email,
      mobile_number: values.mobile_number,
      alternate_mobile_number: values.alternate_mobile_number,
      street: values.street,
      street_name: values.street_name,
      complex_n_unit: values.complex_n_unit,
      suburb_district: values.suburb_district,
      town_city: values.town_city,
      province: values.province,
      postal_code: values.postal_code,
      race: values.race,
      gender: values.gender,
      qualification: values.qualification,
     };
     

    axios
      .put('user/update-profile-details/'+ userid, dataArray) 
      .then((response) => {
        toast.dismiss();
       
        if (response.data.status) {
          if (response.data.message === "Error while saving.") {
            toast.success("Profile not saved. Try again!", {
              position: "top-center",
              autoClose: 3000,
            });
          }else {
            toast.success("Profile successfully updated!", {
              position: "top-center",
              autoClose: 3000,
            });
          }

        }
      })
      .catch((error) => {
        toast.dismiss();
        if (error.response) {
          toast.error("Profile not saved. Try again!", {
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

      <Header />

      <section className="regitration-section">
        <div className="container">
          <div className="ambeReg-heading text-center mb-4">
            <h1>Update Your Profile</h1>
          </div>

          <div className="row">
            <div className="ambeReg-wrapper col-md-8 mx-auto">
              <div className="text-left">
                <p>
                  You can edit or update your profile information here.
                </p>
              </div>

              <div className="form-wrapper mt-4 ">
              {Object.keys(profileData).length > 0 && (
                <Formik
                  initialValues={{
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
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(true);
                    handleSubmit(values, setSubmitting);
                    //resetForm(true);
                  }}
                  validationSchema={UpdateProfileSchema}
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
                          
                          <div className="form-group col-md-6">
                            <label htmlFor="first_name">
                              First Name(s)
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
                          </div>

                          <div className="form-group col-md-6">
                            <label htmlFor="surname">
                              Surname 
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
                          </div>
                        </div>
                        <div className="row  form-row">
                          <div className="form-group col-md-6">
                            <label htmlFor="id_number">
                              South African ID Number
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
                              Email Address
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
                          </div>

                          <div className="form-group col-md-6">
                            <label htmlFor="mobile_number">
                              Mobile Contact Number 
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
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="street_name">
                              Street Name 
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
                              Suburb/District 
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
                          </div>
                          <div className="form-group col-md-3">
                            <label htmlFor="town_city">
                              Town/City 
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
                          </div>
                          <div className="form-group col-md-3">
                            <label htmlFor="province">
                              Province
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
                          </div>
                          <div className="form-group col-md-3">
                            <label htmlFor="postal_code">
                              Postal Code 
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
                              Race
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
                          </div>

                          <div className="form-group col-md-6">
                            <label htmlFor="gender">
                              Gender
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
                          </div>
                        </div>
                        <div className="row form-row">
                          <div className="form-group ">
                            <label htmlFor="qualification">
                              Highest Qualification Race
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
                          </div>
                        </div>
                      </div>
      

                      <div className="avg__form_panel">
                        <button
                          type="submit"
                          className="btn btn-primary btn-color bt-size mt-4 mb-4"
                          data-id={isSubmitting}
                        >
                          Save Updates
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

      <Footer />
    </>
  );
};

export default UpdateProfile;
