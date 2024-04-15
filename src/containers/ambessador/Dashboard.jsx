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
  const [cancellationStatus, setCancellationStatus] = useState(null);
  let [myCourses, setMyCourses] = useState("");
  const userData = JSON.parse(localStorage.getItem("userInfo"));
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  var cartData = {};
  const navigate = useNavigate();
  let [referralCode, setReferralCode] = useState(false);
  let [referralsThisMonth, setReferralsThisMonth] = useState(false);
  let [paymentDueThisMonth, setPaymentDueThisMonth] = useState([]);

  // ****************************
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // ********************************
  const referral = sessionStorage.getItem("referralCode");
  // ********************************
  //My Courses pagination 
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = myCourses.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

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
    paymentDueToAmbassador();
    getReferralsThisMonth();
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
        // localStorage.setItem("merchantData", "");
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

  /***********************************************************************/
  /***********************************************************************/
  /**
   * Get all Referrals this month
   *
   */
  const getReferralsThisMonth = () => {
    axios 
      .get("common/get-referrals-this-month/" + userData.id)
      .then((response) => {
        toast.dismiss();

        if (response.data) {
          if (response.data.status) {
            setReferralsThisMonth(response.data.data); 
            console.log("getReferralsThisMonth response", response.data.data);
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
  /**
   * Cancel course by user
   *
   */
  const handleCancelClick = async (merchantData, orderId) => {
    let merchantDataData = localStorage.getItem("merchantData");

    const merchant_data = JSON.parse(merchantData);
        const token = merchant_data.token;
        const merchantId = merchant_data.merchant_id;
        const signature = merchant_data.signature;

        const reqData = {
          token: token,
          merchantId: merchantId,
          signature: signature,
          merchantData: merchantDataData,
        }
        console.log("reqData", reqData);
    axios
    .post("common/cancel-payfast-payment", reqData)
    .then((response) => {
        toast.dismiss();

        if (response.data && response.data.status === 'success') {
            console.log("Cancel response data:", response.data.data);
            cancelCourseByUser(orderId);
            toast.success("Payment cancelled.", {
                position: "top-center",
                autoClose: 3000,
            });
        } else {
          toast.error("Error in cancellation.", {
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

const paymentDueToAmbassador = () => {
  axios.post(`common/payment-due-this-month`, { userId: userInfo.id })
  .then(response => {
      if (response.data.status) {
          toast.success(response.data.message, { position: "top-center", autoClose: 3000 });
              setPaymentDueThisMonth(response.data.data);
              console.log("paymentDueToAmbassador response", response.data.data)
      } 
    }).catch(error => {
        toast.dismiss();
        if (error.response) {
            toast.error(error.response.data.message, { autoClose: 3000 });
        }
        console.log(error);
    })
  }


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
                <div className="container">
                <div className="row">
                  <p className="col-4 mb-0">
                  Referral Code: <strong>{referralCode}</strong>
                  </p>
                  <p className="col-4 mb-0">
                    Referral Count: <strong>{paymentDueThisMonth.referral_count ? paymentDueThisMonth.referral_count : '0'}</strong>
                  </p>
                  <p className="col-4 mb-0">
                    Due amount: <strong>{paymentDueThisMonth.due_amount ? `R${paymentDueThisMonth.due_amount}` : '0'}</strong>
                  </p>
                </div>
                </div>
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
                      <th scope="col">Index</th>
                      <th scope="col">Course Name</th>
                      <th scope="col">Start date (MM/DD/YYYY)</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentItems.length > 0 ? (
                      currentItems.map((item, i) => (
                        <tr key={i}>
                          <td>{i + 1 + (currentPage - 1) * itemsPerPage}</td>
                          <th scope="row">{item.course_title}</th>
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
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="3">No data available</td>
                      </tr>
                    )}
                  </tbody>
                </table>
                <div className="ambassador_myreport_btn_ft">
                  <button
                  className="btn btn-primary btn-color bt-size" 
                  onClick={prevPage} disabled={currentPage === 1}>
                    Previous
                  </button>
                  <button
                  className="btn btn-primary btn-color bt-size" 
                  onClick={nextPage} disabled={indexOfLastItem >= myCourses.length}>
                    Next
                  </button>
                </div>
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

         <Reports userId={userData}/>

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
                      <th scope="col">Index</th>
                      <th scope="col">Subscriber First Name</th>
                      <th scope="col">Subscriber Last Name</th>
                      <th scope="col">Date of use of referral code</th>
                      <th scope="col">Referral Status (by Subscriber)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {referralsThisMonth.length > 0 ? (
                      referralsThisMonth.map((item, i) => (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>{item.firstname}</td>
                          <td>{item.surname}</td>
                          <td>{new Date(item.referral_used_date).toLocaleDateString()}</td>
                          <td>
                            {item.referral_status === "Active" ? (
                                <span className="badge badge-success">
                                Active
                                </span>
                            ) : (
                                <span className="badge badge-danger">
                                In-active
                                </span>
                            )}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="4">No data available</td>
                      </tr>
                    )}
                  </tbody>

                </table>
                </div>
                {/* <div className="amb-btn mt-4">
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
                </div> */}
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
