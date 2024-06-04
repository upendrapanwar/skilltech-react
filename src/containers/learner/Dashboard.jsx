import React, { useEffect, useState } from "react";
import banner from '../../assets/images/Banner.png';
import solarArrowUpBroken from '../../assets/images/solar_arrow-up-broken.svg';
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import Loader from "../../components/common/Loader";
import axios from "axios";
import { toast } from 'react-toastify';
import { useNavigate, useLocation } from 'react-router-dom';
import { clearCart } from '../../redux/cartSlice';
import { useSelector, useDispatch } from 'react-redux'

const Dashboard = () => {
    const userInfo = JSON.parse(localStorage.getItem("authInfo")) ? JSON.parse(localStorage.getItem("authInfo")) : null;
    let [loading, setLoading] = useState('false');
    let [myCourses, setMyCourses] = useState('');
    const dispatch = useDispatch();
    //let [userid, setUserid] = useState(userInfo.id);
    const udis = userInfo ? userInfo.id : null;
    let [userid, setUserid] = useState(udis);
    const location = useLocation();
    const userData = JSON.parse(localStorage.getItem("userInfo")); 
    const cart = useSelector((state) => state.cart);
    var cartData = {};
    const referral = sessionStorage.getItem("referralCode");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [userProfileData, setUserProfileData] = useState([]);
    const [isProfileLoaded, setIsProfileLoaded] = useState(false); 

    useEffect(() => {
        //console.log('isSubscriberRegister',userInfo.isSubscriberRegister);
        getUserDetails();
        if (userInfo && userInfo.isSubscriberRegister === null) {
            //completeRegistration();
        }
        let authInfo = {
            isSubscriberRegister: null
        };
        localStorage.setItem('authInfo', JSON.stringify(authInfo));
        let tmp = location.pathname.slice(
            location.pathname.lastIndexOf("/"),
            location.pathname.length
          );
          console.log("pathname=", tmp);
          if (tmp === "/success") {
            paymentSuccess();
          }
          if (tmp === "/cancel") {
            cancelPayment();
          }

        getMyCourses();
    }, []);
    toast.configure();
    const navigate = useNavigate();
    
  /***********************************************************************/
  /***********************************************************************/
    /**
     * Handle payment success from payfast
     * 
     */
    const paymentSuccess = async (response) => {
        cart.forEach((item, i) => {
          cartData[i] = item;
        });
        console.log("cartData=", cartData);
        let merchantData = localStorage.getItem("merchantData");
        let subscriptionId = localStorage.getItem("subscriptionId");
        let uuid = localStorage.getItem("uuid");
        let merchantDataResult = merchantData ? JSON.parse(merchantData) : "";
        uuid = uuid.replace(/^"(.*)"$/, '$1');
    
        if (merchantDataResult === "") {
          return;
        }
        let is_recurring = "";
        if (
          merchantDataResult["item_description"] ===
          "Order for Hign Vista Subscription"
        ) {
          is_recurring = "yes";
        }
        if (
          merchantDataResult["item_description"] === "Order for one off payment"
        ) {
          is_recurring = "no";
        }
        const dataArray = {
          merchantData: merchantDataResult,
          userid: userData.id,
          payment_status: "success",
          is_recurring: is_recurring,
          is_active: "true",
          coursesData: cartData,
          uuid: uuid,
          id:subscriptionId,
          referralCode: referral,
        };
        console.log("Updated dataArray", dataArray)
    
        axios
          .post("common/save-subscription", dataArray)
          .then((response) => {
            if (response) {
              console.log("Save subscription: ", response)
              
              toast.success("Payment Successful!", {
                position: "top-center",
                autoClose: 3000,
              });
              dispatch(clearCart());
    
              //navigate('/login');
            }
            localStorage.setItem("merchantData", "");
          })
          .catch((error) => {
            toast.dismiss();
            localStorage.setItem("merchantData", "");
            if (error.response) {
              toast.error("Payment Failed!", {
                position: "top-center",
                autoClose: 5000,
              });
            }
          });
        getMyCourses();
      };
    /***********************************************************************/
    /***********************************************************************/
    /**
    * Get cancel payment data from payfast
    * 
    */
    const cancelPayment = (response) => {
        cart.forEach((item, i) => {
          cartData[i] = item;
        });
        console.log("cancel payment=", response);
        let merchantData = localStorage.getItem("merchantData");
        let uuid = localStorage.getItem("uuid");
        uuid = uuid.replace(/^"(.*)"$/, '$1');
        let merchantDataResult = merchantData ? JSON.parse(merchantData) : "";
        console.log("merchantDataResult=", merchantDataResult);
        let is_recurring = "";
        if (merchantDataResult === "") {
          return;
        }
        if (
          merchantDataResult["item_description"] ===
          "Order for Hign Vista Subscription"
        ) {
          is_recurring = "yes";
        }
        if (
          merchantDataResult["item_description"] === "Order for one off payment"
        ) {
          is_recurring = "no";
        }
        const dataArray = {
          merchantData: merchantDataResult,
          userid: userData.id,
          payment_status: "cancel",
          is_recurring: is_recurring,
          is_active: "false",
          coursesData: cartData,
          uuid: uuid
        };
    
        axios
          .post("common/save-subscription", dataArray)
          .then((response) => {
            if (response) {
              //if(response.data.message === "Error while saving.") {
              toast.success("Payment Cancelled!", {
                position: "top-center",
                autoClose: 3000,
              });
              dispatch(clearCart());
              //}
    
              //navigate('/login');
            }
          })
          .catch((error) => {
            toast.dismiss();
            if (error.response) {
              toast.error("Payment Failed!", {
                position: "top-center",
                autoClose: 5000,
              });
            }
          });
        getMyCourses();
      };
    /***********************************************************************/
    /***********************************************************************/
    /**
     * Get Users courses list
     * 
     */
    const getMyCourses = () => {
        axios
          .get("common/get-my-courses/" + userData.id)
          .then((response) => {
            toast.dismiss();
    
            if (response.data) {
              if (response.data.status) {
                setMyCourses(response.data.data);
                console.log("setMyCourses#######***** ", response.data.data);
              }
            }
          })
          .catch((error) => {
            toast.dismiss();
            if (error.response) {
              toast.error("Code is not available", {
                position: "top-center",
                autoClose: 3000,
              });
            }
          });
      }; 
     /***********************************************************************/
  /***********************************************************************/
//   const generateTimestamp = () => {
//     // Get current date and time in UTC format
//     const now = new Date().toISOString().slice(0, -1);
//     // Get the timezone offset in hours and minutes
//     const offset = (new Date().getTimezoneOffset() / 60)
//       .toString()
//       .padStart(2, "0");
//     // Construct the timestamp string
//     const timestamp = `${now}${offset > 0 ? "-" : "+"}${Math.abs(offset)
//       .toString()
//       .padStart(2, "0")}:00`;
//     return timestamp;
//   }
    const generateTimestamp = () => {
        // Get current date and time in UTC format
        const now = new Date().toISOString().slice(0, 19);
        return now;
    }
 /***********************************************************************/
  /***********************************************************************/
  /**
   * Cancel course by user
   *
   */
  const handleCancelClick = async (merchant_Data, orderId) => {
    console.log('merchantData***********', merchant_Data)
    const merchantData = JSON.parse(merchant_Data);

    const spayId = ''; 
    await axios
    .post("common/getSubscriptionId", userData.id)
    .then((response) => {
      console.log("subscriptionId", response.data.data);
      
      localStorage.setItem("subscriptionId", response.data.data);
      spayId = response.data.data;
      // Generate payment identifier
    })
    .catch((error) => {
      
      if (error.response) {
        toast.error("Please complete your registation", {
          position: "top-center",
          autoClose: 3000,
        });
      }
    })

    // let userName = userData.name;
    // let userArray = userName.split(" ");
    // let firstName = userArray[0];
    // let lastName = userArray[1];
    const merchant_data = {
      merchant_id: process.env.REACT_APP_MERCHANT_ID,
      merchant_key: process.env.REACT_APP_MERCHANT_KEY,
      // return_url: process.env.REACT_APP_NGROK_URL + "/learner/dashboard/success",
      // cancel_url: process.env.REACT_APP_NGROK_URL + "/learner/dashboard/cancel",
      // notify_url: process.env.REACT_APP_NGROK_NODE_URL + "/common/notify" +'/'+ spayId,
      // name_first: firstName,
      // name_last: lastName,
      // email_address: userData.email,
      // cell_number: "0765434543",
      // m_payment_id: merchantData.m_payment_id,
      amount:  merchantData.amount_gross,
      item_name: merchantData.item_name,
      // item_description: "Order for Hign Vista Subscription",
      // email_confirmation: 1,
      // confirmation_address: userData.email,
      // subscription_type: 1,
      // billing_date: new Date().toISOString().slice(0, 10),
      // recurring_amount: merchantData.amount_gross,
      // frequency: 3,
      // cycles: 12,
    };

    // const merchant_data = JSON.parse(merchantData);

        const reqData = {
          token: merchantData.token,
          merchantId: merchantData.merchant_id,
          signature: merchantData.signature,
          merchant_data: merchant_data
        }
        console.log("reqData", reqData);
    axios
    .post("common/cancel-payfast-payment", reqData)
    .then((response) => {
        toast.dismiss();

        if (response.data && response.data.status) {
            console.log("Cancel response data:", response.data.data);
            // cancelCourseByUser(orderId);
            toast.success("Payment cancelled.", {
                position: "top-center",
                autoClose: 3000,
            });
        }
    })
    .catch((error) => {
        toast.dismiss();
        if (error.response) {
            toast.error("Error in cancellation.", {
                position: "top-center",
                autoClose: 3000,
            });
        }
    });
  };
  /***********************************************************************/
  /***********************************************************************/
  /**
   * Subscription cancel by user
   *
   */
  const cancelCourseByUser = (orderId) => {
    axios
        .put("common/cancel-course/" + orderId)
        .then((response) => {
            toast.dismiss();

            if (response.data && response.data.status) {
                console.log("Cancel response data:", response.data.data);
                getMyCourses();
                // handleMoodleUserSuspension();
                toast.success("Payment cancelled.", {
                    position: "top-center",
                    autoClose: 3000,
                });
            }
        })
        .catch((error) => {
            toast.dismiss();
            if (error.response) {
                toast.error("Code is not available", {
                    position: "top-center",
                    autoClose: 3000,
                });
            }
        });
};
    /***********************************************************************/
    /***********************************************************************/
     /**
   * Handle User details
   *
   */
  const getUserDetails = () => {
    axios.get('user/get-profile-details/'+ userData.id).then(response => {
            if (response.data) {
                if(response.data.status) {
                  setUserProfileData(response.data.data[0]);
                  setIsProfileLoaded(true);
                    console.log("getUserDetails Response Data: ",response.data.data[0]);
                }
            }
        }).catch(error => {
            if (error.response) {
              console.log("getUserDetails eror: ",  error.message);
            }
        })
  };

    /***********************************************************************/
    /***********************************************************************/
    /**
     * Handle complete regsitration
     * 
     */
    // const completeRegistration = () => {
    //     setLoading(true);
    //     const dataArray = { 'userid': userid };
    //     axios.post('common/complete-registration', dataArray).then(response => {
    //         toast.dismiss();
    //         if (response.data.status) {
    //             if (response.data.message === "Error while saving.") {
    //                 toast.success('Please complete your registration', { position: "top-center", autoClose: 3000 });
    //             }
    //             //navigate('/login');
    //         }
    //     }).catch(error => {
    //         toast.dismiss();
    //         if (error.response) {
    //             toast.error('Please complete your registration', { position: "top-center", autoClose: 3000 });
    //         }
    //     }).finally(() => {
    //         setTimeout(() => {
    //             setLoading(false);
    //         }, 300);
    //     });
    // }
    /***********************************************************************/
    /***********************************************************************/
    /**
     * Handle after form submission
     * 
     */
    const handleRedirect = () => {
        navigate('/ambessador/ambassador-subscription');
    }
    /***********************************************************************/
    /***********************************************************************/
    /**
     * Handle courses redirects
     * 
     */
    const handleCourses = () => {
        navigate('/learner/my-courses');
    }
    /***********************************************************************/
    /***********************************************************************/
    /**
     * Handle order history
     * 
     */
    const handleOrderHistory = () => {
        navigate('/learner/order-history');
    }
    /***********************************************************************/
    /***********************************************************************/
    useEffect(() => {
      if (isProfileLoaded && location.pathname.includes("/success")) {
        handleMoodleCreateUser();
      }
    }, [isProfileLoaded]);
    /***********************************************************************/
    /***********************************************************************/
     /**
     * Handle Moddle create user   
     *                          
     */
    const handleMoodleCreateUser = async () => {
      if (!userProfileData.firstname || !userProfileData.surname) {
        console.error('User profile data is incomplete.');
        return;
      }
      const MOODLE_URL = 'https://skilltechsa.online/webservice/rest/server.php';
      const MOODLE_TOKEN = 'fe95c9babb55eccd43c80162403b1614';
      const MOODLE_CREATE_FUNCTION = 'core_user_create_users';
      var moodleLoginId = '';

      try {
        //Create user in Moodle
        const response = await axios.post(MOODLE_URL, null, {
          params: {
            wstoken: MOODLE_TOKEN,
            moodlewsrestformat: 'json',
            wsfunction: MOODLE_CREATE_FUNCTION,
            users: [
              {
                username: `${userProfileData.firstname}_${userProfileData.surname}`.toLowerCase(),
                email: userProfileData.email,
                password: atob( userProfileData.moodle_pass ),
                firstname: userProfileData.firstname,
                lastname: userProfileData.surname,
              },
            ],
          },
        });
    
        console.log('User created:', response.data);
        moodleLoginId = response.data[0].id;
        console.log('User created moodleLoginId:', response.data[0].id);
      } catch (error) {
        console.error('Error creating user:', error.response ? error.response.data : error.message);
      }
    
      //Save Moodle Id in database
        axios.post('user/save-moodle-id/'+ userData.id, {moodleLoginId: moodleLoginId})
        .then(response => {
                if (response.data) {
                    if(response.data.status) {
                        console.log("save-moodle-id: ",response.data);
                    }
                }
            }).catch(error => {
                if (error.response) {
                console.log("error in save-moodle-id: ", error.message);
                }
            })
    };

    /***********************************************************************/
    /***********************************************************************/

    const handleMoodleUserSuspension = async () => {
      const MOODLE_URL = 'https://skilltechsa.online/webservice/rest/server.php';
      const MOODLE_TOKEN = 'fe95c9babb55eccd43c80162403b1614';
      const MOODLE_GET_FUNCTION = 'core_user_update_users';
    
      try {
        const response = await axios.post(MOODLE_URL, null, {
          params: { 
            wstoken: MOODLE_TOKEN,
            moodlewsrestformat: 'json',
            wsfunction: MOODLE_GET_FUNCTION,
            users: [
              {
                id: userProfileData.moodle_login_id,
                suspended: 1 //1 to suspend, 0 to not suspend(active)
                // firstname: 'Testing'
              },
            ],
          },
        });
    
        console.log('User data:', response.data);
      } catch (error) {
        console.error('Error creating user:', error.response ? error.response.data : error.message);
      }
    };

    return (

        <>
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
                                    <h1>Subcriber Dashboard</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hvg__main_container">
                <div className="container">
                    <div className="row d-flex">
                        <div className="col-md-6 pt-2">
                            <div className="subscriber-content mr-5">
                                <h3 className="mb-4 ">Want to earn while you learn?<br /> Become a High Vista Ambassador now</h3>
                                <p className="mb-4">By referring those in your network to our catalogue of digital learning, you can earn 50% of their subscription fee for every referral, every month, for as long as they stay signed up.
                                </p>
                                <p>To qualify for the referral fee, you need to be registered on our ambassador programme.
                                </p>
                                <p>For more information on the benefits of becoming an Ambassador, click on the <strong>'Become an Ambassador'</strong> link located at the top of the page.
                                </p>
                                <p>To become a High Vista Ambassador, select the option below.
                                </p>
                                <div className="amb-btn">
                                  {myCourses.length === 0 ? 
                                    <button 
                                    type="button" 
                                    className="btn btn-primary btn-color bt-size btn-disabled"
                                    disabled= {true}
                                    onClick={handleRedirect}
                                    >
                                      Become an ambassador<span className="arrow-btn"><img src={solarArrowUpBroken} alt="" /></span>
                                    </button>
                                    : 
                                    <button 
                                    type="button" 
                                    className="btn btn-primary btn-color bt-size" 
                                    onClick={handleRedirect}
                                    >
                                      Become an ambassador<span className="arrow-btn"><img src={solarArrowUpBroken} alt="" /></span>
                                    </button>
                                  }
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 pt-2">
                            <div className="hvg__card_section">
                                <div className="card">
                                    <div className="card-header">
                                        <h4>My Courses</h4>
                                        <p className="mb-0">You are currently enrolled in..</p>
                                    </div>
                                    <div className="card-body">
                                        <div className="table_view_panel table-responsive-sm">
                                            <table className="table table-striped">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Course Name</th>
                                                        {/* <th scope="col">payment Status</th> */}
                                                        <th scope="col">Start date</th>
                                                        <th scope="col">Action</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {console.log('myCourses', myCourses)}
                                                    {myCourses.length > 0 ? myCourses.map((item, i) =>

                                                    (<tr>
                                                        <th scope="row">{console.log('item=', item)}{item.course_title}</th>
                                                        {/* <th>{item.payment_status}</th> */}
                                                        <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                                                        <td>
                                                        <button
                                                            type="button"
                                                            className="btn btn-primary btn-color bt-size-auto"
                                                            // onClick={() => handleCancelClick(item.merchantData, item._id)}
                                                            onClick={() => cancelCourseByUser(item._id)}
                                                        >
                                                            Unsubscribe
                                                        </button>
                                                        </td>
                                                    </tr>)
                                                    ) : <tr></tr>}
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="amb-btn">
                                            <button type="button" className="btn btn-primary btn-color bt-size mb-2" onClick={() => handleCourses()}>Go to courses <span className="arrow-btn"><img src={solarArrowUpBroken} alt="" /></span></button>
                                            <button type="button" className="btn btn-primary btn-color bt-size" onClick={() => handleOrderHistory()}>View order history <span className="arrow-btn"><img src={solarArrowUpBroken} alt="" /></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Dashboard;
