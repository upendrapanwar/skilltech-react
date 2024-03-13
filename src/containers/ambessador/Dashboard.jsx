import React, { useEffect, useState } from "react";
import banner from "../../assets/images/Banner.png";
import solarArrowUpBroken from "../../assets/images/solar_arrow-up-broken.svg";
import barChart from "../../assets/images/The-bar-chart-showing-the-monthly-refractivity-for-Abia-state1.svg";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";
import { clearCart } from "../../redux/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Reports } from "./Reports";

const Dashboard = () => {
  const userInfo = JSON.parse(localStorage.getItem("authInfo"))
    ? JSON.parse(localStorage.getItem("authInfo"))
    : null;
  const location = useLocation();
  const [cancellationStatus, setCancellationStatus] = useState(null); //Add by me
  let [myCourses, setMyCourses] = useState("");
  const userData = JSON.parse(localStorage.getItem("userInfo"));
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  var cartData = {};
  const navigate = useNavigate();
  let [referralCode, setReferralCode] = useState(false);

  // ****************************
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // ********************************
  const referral = sessionStorage.getItem("referralCode");
  // ********************************
  useEffect(() => {
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
    getReferralCode();
  }, []);
  toast.configure();

  /***********************************************************************/
  /***********************************************************************/
  const getReferralCode = () => {
    //ex: HG00123
    const dataArray = {
      userid: userInfo.id,
    };
    axios
      .post("common/fetch-ambassador-code", dataArray)
      .then((response) => {
        toast.dismiss();

        if (response.data.status) {
          console.log("referral_code=", response.data.data.referral_code);
          //referralCode
          setReferralCode(response.data.data.referral_code);
        }
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };
  /***********************************************************************/
  /***********************************************************************/
  /**
   * Handle courses redirects
   *
   */
  const handleCourses = () => {
    navigate("/learner/my-courses");
  };
  /***********************************************************************/
  /***********************************************************************/
  /**
   * Handle order history
   *
   */
  const handleOrderHistory = () => {
    navigate("/learner/order-history");
  };
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

    //allMerchantData
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
   * Get User courses list
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
  
  
  // const generateTimestamp = () => {
  //   // Get current date and time in UTC format
  //   const now = new Date().toISOString().slice(0, -1);
  //   // Get the timezone offset in hours and minutes
  //   const offset = (new Date().getTimezoneOffset() / 60)
  //     .toString()
  //     .padStart(2, "0");
  //   // Construct the timestamp string
  //   const timestamp = `${now}${offset > 0 ? "-" : "+"}${Math.abs(offset)
  //     .toString()
  //     .padStart(2, "0")}:00`;
  //   return timestamp;
  // }
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
  const handleCancelClick = async (merchantData, orderId) => {
    try {
        const merchant_data = JSON.parse(merchantData);
        const token = merchant_data.token;
        const merchantId = merchant_data.merchant_id;
        const signature = merchant_data.signature;
        const timestamp = generateTimestamp();

        console.log("merchant_data", merchant_data)
        console.log("token", token)
        console.log("merchantId", merchantId)
        console.log("timestamp", timestamp)
        console.log("signature", signature)
        console.log("orderId", orderId)

        const url = `https://api.payfast.co.za/subscriptions/${token}/cancel?testing=true`;
        const version = 'v1';

        // var myHeaders = new Headers();
        // myHeaders.append("merchant-id", merchantId);
        // myHeaders.append("version", version);
        // myHeaders.append("timestamp", timestamp);
        // myHeaders.append("signature", signature);

        // var urlencoded = new URLSearchParams();
        // var requestOptions = {
        //   method: 'PUT',
        //   headers: myHeaders,
        //   body: urlencoded,
        //   redirect: 'follow'

        // };

        const headers = {
            'Content-Type': 'application/json',
            'merchant-id': merchantId,
            'version': version,
            'timestamp' : timestamp,
            'signature': signature
        };

        const requestOptions = {
            method: 'PUT',
            headers: headers
        };

        const response = await fetch(url, requestOptions);
        const result = await response.json();

        console.log("PayFast cancel response:", result);

        if (response.status === 200) {
            console.log("Cancellation successful.");
            cancelCourseByUser(orderId);
        } else {
            console.error("Cancellation failed:", result);
        }
    } catch (error) {
        console.error('Error:', error);
    }
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


  // const handleCancelClick = async (plan_name) => {

    // let merchantData = localStorage.getItem("merchantData");
    // let uuid = localStorage.getItem("uuid");
    // let merchantDataResult = merchantData ? JSON.parse(merchantData) : "";
    // const timestamps = generateTimestamp();
    // console.log("update timeStamps", timestamps)

    // console.log("plan name : ", plan_name)
    // const merchant_id = 10030936;
    // const signature = merchantDataResult['signature'];


    // setIsLoading(true);
    // setError(null);

    // const PayFsToken = localStorage.getItem("authInfo");
    // const tokenObject = JSON.parse(PayFsToken);
    // const token = tokenObject.token;

    // var myHeaders = new Headers();
    // myHeaders.append("merchant-id", merchant_id);
    // myHeaders.append("version", "v1");
    // myHeaders.append("timestamp", timestamps);
    // myHeaders.append("signature", signature);
    // // myHeaders.append('Authorization', `Bearer ${token}`)

    // var urlencoded = new URLSearchParams();
    // var requestOptions = {
    //   method: 'PUT',
    //   headers: myHeaders,
    //   body: urlencoded,
    //   redirect: 'follow'

    // };
    // // var url = `https://api.payfast.co.za/subscriptions/${uuId}/cancel?testing=true`
    // var url = `https://sandbox.payfast.co.za/subscriptions/${uuid}/cancel`
    // fetch(url, requestOptions)
    //   .then(response => response.text())
    //   .then(result => console.log(result))
    //   .catch(error => console.log('error', error));

  // };


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
                  <h1>Agent / Ambassador Dashboard</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hvg__main_container">
        <div className="container">
          <div className="card welcome_user_card mb-4">
            <div className="card-body">
              <p className="mb-0">
                Welcome to, <strong>{userInfo.name}</strong>{" "}
                <span className="user_icon">
                  <i className="far fa-smile"></i>
                </span>
              </p>
            </div>
          </div>

          <div className="card welcome_user_card mb-4">
            <div className="card-body">
              <p className="mb-0">
                Referral Code: <strong>{referralCode}</strong>
              </p>
            </div>
          </div>

          <div className="hvg__card_section mb-4 ">
            <div className="row d-flex ">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">
                    <h4>Total Monthly Payouts (Last 4 months)</h4>
                  </div>
                  <div className="card-body">
                    <div className="table-pie-image mt-2">
                      <img src={barChart} alt="" />
                    </div>
                    <div className="amb-btn mt-4">
                      <button
                        type="button"
                        className="btn btn-primary btn-color bt-size"
                      >
                        View All Payouts
                        <span className="arrow-btn">
                          <img src={solarArrowUpBroken} alt="" />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">
                    <h4>Top selling course packages</h4>
                  </div>
                  <div className="card-body">
                    <div className="top_seller_package">
                      <div className="top_seller_item">
                        <div className="ts_col ts_label">Earnings to date</div>
                        <div className="ts_col ts_value">R200,00</div>
                      </div>
                      <div className="top_seller_item">
                        <div className="ts_col ts_label">Earnings to date</div>
                        <div className="ts_col ts_value">R200,00</div>
                      </div>
                      <div className="amb-btn mt-4 mb-4">
                        <button
                          type="button"
                          className="btn btn-primary btn-color bt-size"
                        >
                          Update my profile
                          <span className="arrow-btn">
                            <img src={solarArrowUpBroken} alt="" />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hvg__card_section mb-4">
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
                        {/* <th scope="col">Payment Status</th> */}
                        <th scope="col">Start date (MM/DD/YYYY)</th>

                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {myCourses.length > 0 ? (
                        myCourses.map((item, i) => (
                          <tr> 
                            <th scope="row">
                              {console.log("item=", item)}
                              {item.course_title}
                            </th>
                            {/* <td>{item.payment_status}</td> */}
                            <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                            <td>
                              <button
                                type="button"
                                className="btn btn-primary btn-color bt-size"
                                // onClick={() => handleCancelClick(item.uuid, item.plan_name)}
                                onClick={() => handleCancelClick(item.merchantData, item._id)}
                              >
                                Remove
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr></tr>
                      )}
                    </tbody>
                  </table>
                </div>

                <div className="amb-btn">
                  <button
                    type="button"
                    className="btn btn-primary btn-color bt-size"
                    onClick={() => handleCourses()}
                  >
                    Go to courses{" "}
                    <span className="arrow-btn">
                      <img src={solarArrowUpBroken} alt="" />
                    </span>
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary btn-color bt-size"
                    onClick={() => handleOrderHistory()}
                  >
                    View order history{" "}
                    <span className="arrow-btn">
                      <img src={solarArrowUpBroken} alt="" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

         <Reports/>

          <div className="hvg__card_section mb-4">
            <div className="card">
              <div className="card-header">
                <h4>Referrals this month</h4>
              </div>
              <div className="card-body">
                <div className="table_view_panel table-responsive-sm">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Date of sign up</th>
                        <th scope="col">Date of sign up</th>
                        <th scope="col">Current Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>
                          <span className="badge badge-success">Active</span>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>
                          <span className="badge badge-success">Banned</span>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>
                          <span className="badge badge-danger">
                            Subscription failed
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="amb-btn mt-4">
                  <h4 className="mb-3">Detailed reports</h4>
                  <button
                    type="button"
                    className="btn btn-primary btn-color bt-size"
                  >
                    Choose report
                    <span className="arrow-btn">
                      <img src={solarArrowUpBroken} alt="" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
