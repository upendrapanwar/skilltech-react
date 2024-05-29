import React, { useEffect, useState } from "react";
import "../../assets/css/store/cart.css";
import Total from "../../components/cart/Total";
import CartItem from "../../components/cart/CartItem";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import banner from "../../assets/images/Banner.png";
import solarArrowUpBroken from "../../assets/images/solar_arrow-up-broken.svg";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";
import { getDiscount } from "../../redux/cartSlice";
import { toast } from "react-toastify";
import Loader from "../../components/common/Loader";

const Cart = () => {
  let authInfo = JSON.parse(localStorage.getItem("authInfo"));
  let tmp_userInfo = JSON.parse(localStorage.getItem("userInfo"));
  let isLoggedIn = localStorage.getItem("isLoggedIn");
  let userInfo = "";
  console.log("authInfo=", authInfo);
  console.log("tmp_userInfo=", tmp_userInfo);
  console.log("isLoggedIn=", isLoggedIn);
  if (authInfo != null) {
    if (typeof authInfo.id != "undefined") {
      userInfo = authInfo;
    }
  }
  if (tmp_userInfo != null) {
    if (typeof tmp_userInfo.id != "undefined") {
      userInfo = tmp_userInfo;
    }
  }

  const passPhrase = process.env.REACT_APP_PASSPHRASE;
  const [error, setError] = useState('');
  let [signature, setSignature] = useState(null);
  let [showReferral, setShowReferral] = useState(false);
  let [referralCode, setReferralCode] = useState(null);
  let [identifier, setIdentifier] = useState(null);
  let [uuid , setUuid] = useState();
  let [subscriptionPayId, setSubscriptionPayId] = useState();
  let [userid, setUserid] = useState(userInfo ? userInfo.id : null);
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const cartState = useSelector((state) => state);
  console.log("cart=", cart);
  console.log("userInfo=", userInfo);
  console.log("userInfo.role=", userInfo.role);
  localStorage.setItem("discount_percent", 0);
  const dispatch = useDispatch();
  let return_url =
    process.env.REACT_APP_NGROK_URL + "/learner/dashboard/success";
  let cancel_url =
    process.env.REACT_APP_NGROK_URL + "/learner/dashboard/cancel";
  // let notify_url =
  //   process.env.REACT_APP_NGROK_URL + "/learner/dashboard/notify";
    let  notify_url = process.env.REACT_APP_NGROK_NODE_URL + "/common/notify";

  if (userInfo.role === "ambassador") {
    return_url =
      process.env.REACT_APP_NGROK_URL + "/ambessador/dashboard/success";
    cancel_url =
      process.env.REACT_APP_NGROK_URL + "/ambessador/dashboard/cancel";
    //notify_url =
    //  process.env.REACT_APP_NGROK_URL + "/ambessador/dashboard/notify";
    notify_url = process.env.REACT_APP_NGROK_NODE_URL + "/common/notify";
  }

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sandbox.payfast.co.za/onsite/engine.js";
    //script.src = 'https://www.payfast.co.za/onsite/onsite/engine.js'
    script.async = true;
    document.body.appendChild(script);
    let isSubscription = "";
    cart.forEach((item) => {
      isSubscription = item.paymentType;
    });
    console.log("isSubscription=", isSubscription);
    if (isSubscription === "subscription") {
      dispatch(getDiscount(5));
    }

    if (cart.length > 0) {
      setShowReferral(true);
    }
  }, []);

 
  /**
   * Handle back to browse
   *
   */
  const handleBackToBrowse = () => {
    navigate("/browse-courses"); 
  };
  /***********************************************************************/
  /***********************************************************************/
  /**
   * Handle referral code
   *
   */
  const handleCode = (event) => {
    console.log("ReferalCode: ", event.target.value);
    setReferralCode(event.target.value);
    setError('');
  };
  /***********************************************************************/
  /***********************************************************************/
  /**
   * Handle complete regsitration
   *
   */
  const completeRegistration = () => {
    //setLoading(true);
    const dataArray = { userid: userid };
    axios
      .post("common/complete-registration", dataArray)
      .then((response) => {
        toast.dismiss();

        if (response.data.status) {
          //if(response.data.message === "Error while saving.") {
          toast.success("Please complete your registration", {
            position: "top-center",
            autoClose: 3000,
          });
          //}
          //setTimeout(() => {
          //  navigate('/learner/subscription');
          //}, 2000);
        }
        return false;
      })
      .catch((error) => {
        toast.dismiss();
        if (error.response) {
          //toast.error('Please complete your registration', { position: "top-center",autoClose: 3000 });
        }
        return true;
      });
  };
  /***********************************************************************/
  /***********************************************************************/
  const handleReferralCode = (event) => {
    if (!referralCode) {
      setError('Referral code is required');
    } else {
    axios
      .get(`common/check-referral-code/${referralCode}?userId=${tmp_userInfo.id}`)
      .then((response) => {
        console.log("REspose:", response)
        toast.dismiss();  

        if (response.data) {
          console.log("response.data:", response.data)
          if (response.status === 200) {
            console.log("Response data of Check Referral Code: ", response.data);
            sessionStorage.setItem("referralCode", referralCode);
            toast.success("Code applied successfully!", {
              position: "top-center",
              autoClose: 3000,
            });
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
    }
  };
  /***********************************************************************/
  /***********************************************************************/
  /**
   * Handle subscribe now
   *
   */
  const handleSubscribeNow = async (redirect) => {
    let spayId = '';
    if (redirect === "signin_pay") {
      navigate("/login");
      return true;
    }
    if (redirect === "create_account_pay") {
      navigate("/signup");
      return true;
    }
    if (redirect === "pay_now") {
      var returnVal = completeRegistration(); 
      if (typeof returnVal === "undefined") {
        console.log("returnVal=", returnVal);
        navigate("/learner/subscription");
        return true;
      }
    }

    const data = {
      userid: tmp_userInfo.id,
      // payment_status: "cancel" 
    }
    
    await axios
      .post("common/getSubscriptionId", data)
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
      
    console.log('spayId=',spayId);

    let merchantData = "";
    let paymentType = "";
    let orderItemName = "";
    let userName = userInfo.name;
    let userArray = userName.split(" ");
    let firstName = userArray[0];
    let lastName = userArray[1];
    let totalPrice = getTotal().totalPrice;
    const passPhrase = process.env.REACT_APP_PASSPHRASE;
    cart.forEach((item) => {
      paymentType = item.paymentType;
      orderItemName = orderItemName + "#" + item.title;
    });
    console.log("paymentType=", paymentType);
    console.log("cartState=", cartState);
    console.log("totalprice=", totalPrice);

    if (paymentType === "subscription") {
      console.log("userInfo=", userInfo);

      merchantData = {
        merchant_id: process.env.REACT_APP_MERCHANT_ID,
        merchant_key: process.env.REACT_APP_MERCHANT_KEY,
        return_url: return_url,
        cancel_url: cancel_url,
        notify_url: notify_url+'/'+spayId,
        name_first: firstName,
        name_last: lastName,
        email_address: userInfo.email,
        cell_number: "0765434543",
        m_payment_id: orderItemName,
        amount: totalPrice,
        item_name: orderItemName,
        item_description: "Order for Hign Vista Subscription",
        email_confirmation: 1,
        confirmation_address: userInfo.email,
        subscription_type: 1,
        billing_date: new Date().toISOString().slice(0, 10),
        //'recurring_amount' : (cartState.totalPrice != 0) ? cartState.totalPrice : getTotal().totalPrice,
        recurring_amount: totalPrice,
        frequency: 3,
        cycles: 12,
      };
    } else {
      merchantData = {
        merchant_id: process.env.REACT_APP_MERCHANT_ID,
        merchant_key: process.env.REACT_APP_MERCHANT_KEY,
        return_url: return_url,
        cancel_url: cancel_url,
        notify_url: notify_url+'/'+spayId,
        name_first: firstName,
        name_last: lastName,
        email_address: userInfo.email,
        cell_number: "0765434543",
        m_payment_id: orderItemName,
        //'amount' : (cartState.totalPrice != 0) ? cartState.totalPrice : getTotal().totalPrice,
        amount: totalPrice,
        item_name: orderItemName,
        item_description: "Order for one off payment",
        email_confirmation: 1,
        confirmation_address: userInfo.email,
      };
      console.log("called");
    }
    var identifierData = generateSignature(merchantData, passPhrase);
    //pingFast(merchantData['signature']);
    identifierData.then((result) => {});
    //navigate('/learner/subscription');

    console.log("Merchant data***************", merchantData);
    console.log("passPhrase***************", passPhrase);
   
  };
  /***********************************************************************/
  /***********************************************************************/
  /**
   * Get the total of the cart
   *
   */
  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };
  /***********************************************************************/
  /***********************************************************************/
  /**
   * Ping the payfast api to get data
   *
   */
  const pingFast = async (signatureData) => {
    let timestamp = new Date(new Date().toString().split("GMT")[0] + " UTC")
      .toISOString()
      .split(".")[0];
    await axios
      .post("https://api.payfast.co.za/ping?testing=true", {
        headers: {
          "merchant-id": process.env.REACT_APP_MERCHANT_ID,
          version: "v1",
          timestamp: timestamp,
          signature: signatureData,
        },
      })
      .then((response) => {
        if (response) {
          console.log("response=", response);
        }
      })
      .catch((error) => {
        if (error) {
          console.log("Error=", error);
        }
      });
  };
  /***********************************************************************/
  /***********************************************************************/
  /**
   * Handle complete regsitration
   *
   */
  const generateSignature = async (merchantData, passPhrase) => {
    
    //setLoading(true);
    const dataArray = {
      merchantData: merchantData,
      //'payment_method': 'cc',
      
      passPhrase: passPhrase,
      testMode: true,
    };
    console.log("dataArray*****************", dataArray);
    await axios
      .post("common/generate-signature", dataArray)
      .then((response) => {
        toast.dismiss();
        //console.log('response=',response.data);
        console.log('generateSignature=',response.data.data);
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
      })
      .catch((error) => {
        toast.dismiss();
        if (error.response) {
          toast.error("Please complete your registation", {
            position: "top-center",
            autoClose: 3000,
          });
        }
      })
      .finally(() => {
        setTimeout(() => {
          //setLoading(false);
        }, 300);
      });
  };
  /***********************************************************************/
  /***********************************************************************/
  const generatePaymentIdentifier = async (signature, merchantData) => {
    var pfParamString_updated = "";
    merchantData["signature"] = signature;

    //merchantData['subscription_type'] = 2;
    // merchantData["subscription_notify_email"] = true;
    // merchantData["subscription_notify_webhook"] = true;
    // merchantData["subscription_notify_buyer"] = true;
    console.log("dataArray=====>", merchantData);

    var dataArray = merchantData;
    console.log('dataArray',dataArray);
    // Convert your data array to a string
    let pfParamString = "";
    for (let key in dataArray) {
      if (dataArray.hasOwnProperty(key)) {
        pfParamString += `${key}=${encodeURIComponent(dataArray[key]).replace(
          /%20/g,
          "+"
        )}&`;
      }
    }
    // Remove last ampersand
    pfParamString_updated = pfParamString.slice(0, -1);
    console.log("pfParamString=", pfParamString_updated);
    console.log('signature',signature);
    console.log('merchantData',merchantData);

    //console.log('sandboxurl=',process.env.REACT_APP_SANDBOX_PAYFAST_URL);
    //axios.defaults.baseURL = '';
    const result = await axios
      .post(
        "https://sandbox.payfast.co.za/onsite/process",
        pfParamString_updated
      )
      //const result = await axios.post('https://www.payfast.co.za/onsite/process', pfParamString_updated)
      .then((res) => {
        console.log("uuid", res.data.uuid);
        localStorage.setItem("uuid", res.data.uuid);
        
        // const data = JSON.stringify(merchantData);
        // const uuid = JSON.stringify(res.data.uuid);

        // const merchantData = {
        //   data,
        //   uuid
        // }
        // localStorage.setItem("merchantData", merchantData);
        localStorage.setItem("merchantData", JSON.stringify(merchantData));
        
        console.log("jsonmerchant=", JSON.stringify(merchantData));
        setIdentifier(res.data.uuid);
        return res.data || null;
      })
      .catch((error) => {
        console.error(error); 
      });
    console.log("res.data", result);
    //axios.defaults.baseURL = config.apiURI;
    return result;
  };
  /***********************************************************************/
  /***********************************************************************/


const handleMoodleUserData = async () => {
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
            id: '289',
            // suspended: 0
            firstname: 'Testing'
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
      {identifier && (
        <Helmet>
          <script>
            {`{
            window.payfast_do_onsite_payment({
              uuid: '${identifier}',
              "return_url": '${return_url}',
              "cancel_url": '${cancel_url}',
              'notify_url' : '${notify_url}',
            })
          }`}
          </script>
        </Helmet>
      )}
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
                  <h1>Cart</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cart">
        <div className="cart__left">
          <div>
            <h3>Shopping Cart</h3>
            <span className="amb-btn mt-4">
              <button
                type="button"
                className="btn btn-primary btn-color bt-size"
                onClick={handleBackToBrowse}
              >
                Back to Browse
                <span className="arrow-btn">
                  <img src={solarArrowUpBroken} alt="" />
                </span>
              </button>
            </span>

            {/* {userid &&
              isLoggedIn !== null &&
              cart?.map((item) => (
                <CartItem
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  quantity={item.quantity}
                  paymentType={item.paymentType}
                />
              ))} */}
              {cart?.map((item) => (
                <CartItem
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  quantity={item.quantity}
                  paymentType={item.paymentType}
                />
                ))}

            {tmp_userInfo && userid && isLoggedIn !== null && setShowReferral && (
              tmp_userInfo.role === "subscriber" ?
              <>
                <div className="row form-now">
                  <p>
                    <strong>
                      If you have you been referred by a High Vista Guild
                      Ambassador, please enter the Ambassador’s referral code
                      and click on Apply Referral Code. Please contact your
                      Ambassador to get the referral code if you haven’t
                      received it.
                    </strong>
                  </p>
                </div>
                <div className="row  form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="id_number">
                      Referral Code<span></span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="referral_code"
                      id="referral_code"
                      placeholder=""
                      aria-describedby="referral_codeHelp"
                      onChange={handleCode}
                    />
                    {error && <div className="text-danger">{error}</div>}
                    <span className="amb-btn mt-4">
                      <button
                        type="button"
                        className="btn btn-primary btn-color bt-size"
                        onClick={handleReferralCode}
                      >
                        Apply Referral Code
                        <br />
                        <span className="arrow-btn">
                          <img src={solarArrowUpBroken} alt="" />
                        </span>
                      </button>
                    </span>
                  </div>
                </div>
              </>
              : ""
            )}
          </div>
        </div>
        <div className="cart__right">
          {userid && isLoggedIn == null ? (
            <>
              <span className="amb-btn mt-4">
                <button
                  type="button"
                  className="btn btn-primary btn-color bt-size signbtn"
                  onClick={() => handleSubscribeNow("signin_pay")}
                >
                  Sign in and Pay
                  <span className="arrow-btn">
                    <img src={solarArrowUpBroken} alt="" />
                  </span>
                </button>
              </span>
            </>
          ) : (
            <>
              <Total />
              <span></span>
            </>
          )}
          {userid == null && isLoggedIn == null ? (
            <>
              <span className="amb-btn mt-4">
                <button
                  type="button"
                  className="btn btn-primary btn-color bt-size"
                  onClick={() => handleSubscribeNow("create_account_pay")}
                >
                  Create account and Pay
                  <span className="arrow-btn">
                    <img src={solarArrowUpBroken} alt="" />
                  </span>
                </button>
              </span>
              <span className="amb-btn mt-4">
                <button
                  type="button"
                  className="btn btn-primary btn-color bt-size signbtn"
                  onClick={() => handleSubscribeNow("signin_pay")}
                >
                  Sign in and Pay
                  <span className="arrow-btn">
                    <img src={solarArrowUpBroken} alt="" />
                  </span>
                </button>
              </span>
            </>
          ) : (
            <span></span>
          )}
          {isLoggedIn ? (
            <>
              <span className="amb-btn mt-4">
                <button
                  type="button"
                  className="btn btn-primary btn-color bt-size signbtn"
                  onClick={() => handleSubscribeNow("pay")}
                >
                  Pay
                  <span className="arrow-btn">
                    <img src={solarArrowUpBroken} alt="" />
                  </span>
                </button>
              </span>
            </>
          ) : (
            <span></span>
          )}
        </div>
        
      </div>
      <Footer />
    </>
  );
};

export default Cart;
