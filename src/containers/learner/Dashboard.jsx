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

    useEffect(() => {
        //console.log('isSubscriberRegister',userInfo.isSubscriberRegister);
        if (userInfo && userInfo.isSubscriberRegister === null) {
            //completeRegistration();
        }
        let authInfo = {
            isSubscriberRegister: null
        };
        localStorage.setItem('authInfo', JSON.stringify(authInfo));
        let tmp = location.pathname.slice(location.pathname.lastIndexOf("/"), location.pathname.length);
        console.log('pathname=', tmp)
        if (tmp === "/success") {
            paymentSuccess()
        }
        if (tmp === "/cancel") {
            cancelPayment()
        }
        if (tmp === "/notify") {
            notifyPayment()
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
        })
        console.log('cartData=', cartData);
        let merchantData = localStorage.getItem("merchantData");
        let subscriptionId = localStorage.getItem("subscriptionId");
        let uuid = localStorage.getItem("uuid");
        let merchantDataResult = (merchantData) ? JSON.parse(merchantData) : '';
        if (merchantDataResult === '') {
            return;
        }
        let is_recurring = '';
        if (merchantDataResult['item_description'] === "Order for Hign Vista Subscription") {
            is_recurring = 'yes'
        }
        if (merchantDataResult['item_description'] === "Order for one off payment") {
            is_recurring = 'no'
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

        axios.post('common/save-subscription', dataArray).then(response => {

            if (response) {
                //if(response.data.message === "Error while saving.") {
                console.log("Save subscription: ", response)
                toast.success('Registration Successful!', { position: "top-center", autoClose: 3000 });
                dispatch(clearCart());
                //}

                //navigate('/login');
            }
            localStorage.setItem('merchantData', '');
        }).catch(error => {
            toast.dismiss();
            localStorage.setItem('merchantData', '');
            if (error.response) {
                toast.error('Registration Failed!', { position: "top-center", autoClose: 3000 });
            }
        })
        getMyCourses();
    }
    /***********************************************************************/
    /***********************************************************************/
    /**
    * Get cancel payment data from payfast
    * 
    */
    const cancelPayment = (response) => {
        cart.forEach((item, i) => {
            cartData[i] = item;
        })
        console.log('cancel payment=', response);
        let merchantData = localStorage.getItem("merchantData");
        let uuid = localStorage.getItem("uuid");
        let merchantDataResult = (merchantData) ? JSON.parse(merchantData) : '';
        console.log('merchantDataResult=', merchantDataResult);
        let is_recurring = '';
        if (merchantDataResult === '') {
            return;
        }
        if (merchantDataResult['item_description'] === "Order for Hign Vista Subscription") {
            is_recurring = 'yes'
        }
        if (merchantDataResult['item_description'] === "Order for one off payment") {
            is_recurring = 'no'
        }
        const dataArray = {
            merchantData: merchantDataResult,
            userid: userData.id,
            payment_status: "cancel payment",
            is_recurring: is_recurring,
            is_active: "false",
            coursesData: cartData,
            uuid: uuid
          };

        //allMerchantData
        axios.post('common/save-subscription', dataArray).then(response => {

            if (response) {
                //if(response.data.message === "Error while saving.") {
                toast.success('Registration Cancelled!', { position: "top-center", autoClose: 3000 });
                dispatch(clearCart());
                //}

                //navigate('/login');
            }
        }).catch(error => {
            toast.dismiss();
            if (error.response) {
                toast.error('Registration Failed!', { position: "top-center", autoClose: 3000 });
            }
        })
        getMyCourses();
    }
    /***********************************************************************/
    /***********************************************************************/
    /**
    * Get notify payment from payfast
    * 
    */
    const notifyPayment = (response) => {
        
        cart.forEach((item, i) => {
            cartData[i] = item;
        })
        console.log('notify payment=', response);
        let merchantData = localStorage.getItem("merchantData");
        let uuid = localStorage.getItem("uuid");
        let merchantDataResult = (merchantData) ? JSON.parse(merchantData) : '';
        if (merchantDataResult === '') {
            return;
        }
        let is_recurring = '';
        if (merchantDataResult['item_description'] === "Order for Hign Vista Subscription") {
            is_recurring = 'yes'
        }
        if (merchantDataResult['item_description'] === "Order for one off payment") {
            is_recurring = 'no'
        }
        merchantDataResult['itn'] = JSON.stringify(response);
        const dataArray = {
        merchantData: merchantDataResult,
        userid: userData.id,
        payment_status: "success",
        is_recurring: is_recurring,
        is_active: "true",
        coursesData: cartData,
        uuid: uuid
        };

        axios.post('common/save-subscription', dataArray).then(response => {

            if (response) {
                //if(response.data.message === "Error while saving.") {
                toast.success('Registration Successful!', { position: "top-center", autoClose: 3000 });
                dispatch(clearCart());
                //}

                //navigate('/login');
            }
            localStorage.setItem('merchantData', '');
        }).catch(error => {
            toast.dismiss();
            localStorage.setItem('merchantData', '');
            if (error.response) {
                toast.error('Registration Failed!', { position: "top-center", autoClose: 3000 });
            }
        })
        getMyCourses();
    }
    /***********************************************************************/
    /***********************************************************************/
    /**
     * Get Users courses list
     * 
     */
    const getMyCourses = () => {
        axios.get('common/get-my-courses/' + userData.id).then(response => {
            toast.dismiss();

            if (response.data) {

                if (response.data.status) {

                    const resp = response.data.data;
                    const filtered = resp.filter(item => item.is_active !== false && item.payment_status === 'success');
                    setMyCourses(filtered);
                    console.log("lerner Dashboard : ####", filtered)
                }

            }
        }).catch(error => {
            toast.dismiss();
            if (error.response) {
                toast.error('Code is not available', { position: "top-center", autoClose: 3000 });
            }
        });

    }
     /***********************************************************************/
  /***********************************************************************/
  const generateTimestamp = () => {
    // Get current date and time in UTC format
    const now = new Date().toISOString().slice(0, -1);
    // Get the timezone offset in hours and minutes
    const offset = (new Date().getTimezoneOffset() / 60)
      .toString()
      .padStart(2, "0");
    // Construct the timestamp string
    const timestamp = `${now}${offset > 0 ? "-" : "+"}${Math.abs(offset)
      .toString()
      .padStart(2, "0")}:00`;
    return timestamp;
  }
    /***********************************************************************/
    /***********************************************************************/
  /**
   * remove courses
   *
   */
  const handleCancelClick = async (plan_name) => {

    let merchantData = localStorage.getItem("merchantData");
    let uuid = localStorage.getItem("uuid");
    let merchantDataResult = merchantData ? JSON.parse(merchantData) : "";
    // Example usage
    const timestamps = generateTimestamp();
    console.log("update timeStamps", timestamps)


    // const UUID = JSON.parse(uuid);
    // const uuId = UUID.replace(/^%22|%22$/g, "");

    // console.log("uuid : ", uuId)

    console.log("plan name : ", plan_name)
    const merchant_id = 10030936;
    const signature = merchantDataResult['signature'];
    // const timestamp = new Date().getTime();


    setIsLoading(true);
    setError(null);

    const PayFsToken = localStorage.getItem("authInfo");
    const tokenObject = JSON.parse(PayFsToken);
    const token = tokenObject.token;

    // *************************************************************************

    var myHeaders = new Headers();
    myHeaders.append("merchant-id", merchant_id);
    myHeaders.append("version", "v1");
    myHeaders.append("timestamp", timestamps);
    myHeaders.append("signature", signature);
    // myHeaders.append('Authorization', `Bearer ${token}`)

    var urlencoded = new URLSearchParams();
    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'

    };
    // var url = `https://api.payfast.co.za/subscriptions/${uuId}/cancel?testing=true`
    var url = `https://sandbox.payfast.co.za/subscriptions/${uuid}/cancel`
    fetch(url, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

    // ********************************************************************************

    // try {
    //   const response = await fetch(`https://sandbox.payfast.co.za/subscriptions/${uuId}/cancel`, {
    //     method: 'PUT', // You might need to adjust the HTTP method based on PayFast API requirements
    //     headers: {
    //       'merchant_id': merchant_id,
    //       'version': 'v1',
    //       'timestamp': timestamp.toString(),
    //       'signature': signature,
    //       "Access-Control-Allow-Headers": "Content-Type",
    //       'Authorization': `Bearer ${token}`


    //       // Include any additional headers required by the PayFast API, like authorization headers
    //     },
    //     // Add any payload if needed
    //     body: JSON.stringify({}),
    //   });
    //   if (!response.ok) {
    //     throw new Error(`Failed to cancel subscription: ${response.statusText}`);
    //   }

    //   // Subscription successfully canceled
    //   console.log('Subscription canceled successfully');
    // } catch (error) {
    //   setError(error.message);
    // } finally {
    //   setIsLoading(false);
    // }
  };
    /***********************************************************************/
    /***********************************************************************/
    /**
     * Handle complete regsitration
     * 
     */
    const completeRegistration = () => {
        setLoading(true);
        const dataArray = { 'userid': userid };
        axios.post('common/complete-registration', dataArray).then(response => {
            toast.dismiss();
            if (response.data.status) {
                if (response.data.message === "Error while saving.") {
                    toast.success('Please complete your registration', { position: "top-center", autoClose: 3000 });
                }
                //navigate('/login');
            }
        }).catch(error => {
            toast.dismiss();
            if (error.response) {
                toast.error('Please complete your registration', { position: "top-center", autoClose: 3000 });
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
                                <p>To become a High Vista Ambassador, select the option below.
                                </p>
                                <div className="amb-btn">
                                    <button type="button" className="btn btn-primary btn-color bt-size" onClick={handleRedirect}>Become an ambassador<span className="arrow-btn"><img src={solarArrowUpBroken} alt="" /></span></button>
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
                                                        {/* <th scope="col">payment Status</th>
                                                        <th scope="col">Start date</th> */}
                                                        <th scope="col">Action</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {console.log('myCourses', myCourses)}
                                                    {myCourses.length > 0 ? myCourses.map((item, i) =>

                                                    (<tr>
                                                        <th scope="row">{console.log('item=', item)}{item.plan_name}</th>
                                                        {/* <th>{item.payment_status}</th>
                                                        <td>{item.createdAt}</td> */}
                                                        <td>
                                                        <button
                                                            type="button"
                                                            className="btn btn-primary btn-color bt-size"
                                                            // onClick={() => handleRemoveCourses(item._id)}
                                                            onClick={() => handleCancelClick(item.uuid, item.plan_name)}
                                                        >
                                                            Remove
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
