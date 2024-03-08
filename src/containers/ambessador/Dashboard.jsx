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
    if (tmp === "/notify") {
      notifyPayment();
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
    console.log("Updated dattaArray", dataArray)

    axios
      .post("common/save-subscription", dataArray)
      .then((response) => {
        if (response) {
          console.log("Save subscription: ", response)
          toast.success("Registration Successful!", {
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
          toast.error("Registration Failed!", {
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
      payment_status: "cancel payment",
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
          toast.success("Registration Cancelled!", {
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
          toast.error("Registration Failed!", {
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
   * Get notify payment from payfast
   *
   */
  const notifyPayment = (response) => {
    console.log('response',response);
    cart.forEach((item, i) => {
      cartData[i] = item;
    });
    console.log("notify payment=", response);
    let merchantData = localStorage.getItem("merchantData");
    let uuid = localStorage.getItem("uuid");
    let merchantDataResult = merchantData ? JSON.parse(merchantData) : "";
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
      uuid: uuid
    };

    axios
      .post("common/save-subscription", dataArray)
      .then((response) => {
        if (response) {
          //if(response.data.message === "Error while saving.") {
          toast.success("Registration Successful!", {
            position: "top-center",
            autoClose: 3000,
          });
          dispatch(clearCart());
          //}

          //navigate('/login');
        }
        localStorage.setItem("merchantData", "");
      })
      .catch((error) => {
        toast.dismiss();
        localStorage.setItem("merchantData", "");
        if (error.response) {
          toast.error("Registration Failed!", {
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
            const resp = response.data.data;
            // const filtered = resp.filter(item => item.is_active !== false);
            const filtered = resp.filter(item => item.is_active !== false && item.payment_status === 'success');
            setMyCourses(filtered);
            console.log("setMyCourses#######***** ", filtered);
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






  // ********************
  //************************************************************ */
  const handleRemoveCourses = async (id) => {
    try {
      function generateTimestamp() {
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
      // Example usage
      const timestamp = generateTimestamp();

      console.log("id=====>", id);
      const PayFsToken = localStorage.getItem("authInfo");
      const tokenObject = JSON.parse(PayFsToken);
      const token = tokenObject.token;

      const PayFsmarchentData = localStorage.getItem("merchantData");
      const marchentData = JSON.parse(PayFsmarchentData);
      const merchantId = marchentData.merchant_id;
      const signature = marchentData.signature;

      const version = "v1";

      const cleanedString = localStorage.getItem("uuid");
      const UUID = JSON.parse(cleanedString);
      const uuId = UUID.replace(/^%22|%22$/g, "");

      const url = `https://api.payfast.co.za/subscriptions/${uuId}/cancel`;

      console.log("token======>", token);
      console.log("merchantId======>", merchantId);
      console.log("signature======>", signature);
      console.log("Timestamp:", timestamp);
      console.log("version:", version);
      console.log("uuId======>", uuId);

      // Set up headers
      const headers = {
        "merchant-id": merchantId,
        version: version,
        timestamp: timestamp,
        signature: signature,
      };

      console.log("headers : ", headers)

      // const response = await axios.put(
      //   `https://api.payfast.co.za/subscriptions/${uuId}/cancel`,
      //   null, // No data to send in the body
      //   { headers: headers } // Pass headers object as the third parameter
      // );
      // console.log("Response:", response.data); // Log the response data
      // if (response.data.success) {
      //   setCancellationStatus("Subscription successfully canceled.");
      // } else {
      //   setCancellationStatus("Failed to cancel subscription.");
      // }

      const response = await fetch(url, {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify(null) // No data to send in the body
      });

      if (!response.ok) {
        throw new Error(`Failed to cancel subscription. Status: ${response.status}`);
      }


    } catch (error) {
      console.error("Error:", error);
      // Handle the error here, display an error message to the user, or try again.
    }
  };
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
                        <th scope="col">Payment Status</th>
                        <th scope="col">Start date</th>

                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {myCourses.length > 0 ? (
                        myCourses.map((item, i) => (
                          <tr>
                            <th scope="row">
                              {console.log("item=", item)}
                              {item.plan_name}
                            </th>
                            <td>{item.payment_status}</td>
                            <td>{item.createdAt}</td>

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
