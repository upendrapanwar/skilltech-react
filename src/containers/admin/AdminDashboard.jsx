import React, { useEffect, useState } from "react";
import { Chart as ChartJS } from 'chart.js';

import { Link, useNavigate, useLocation } from "react-router-dom";
import Header from "../../components/admin/Header";
import Footer from "../../components/admin/Footer";
import AdminLoginSchema from '../../validation-schemas/AdminLoginSchema';
import { Formik, Form, ErrorMessage, Field, resetForm } from 'formik';
import axios from "axios";
import { toast } from 'react-toastify';
import ErrorText from "../../components/utility/ErrorText";
import ArrowDownTrayIcon from '@heroicons/react/24/outline/ArrowDownTrayIcon';
import ShareIcon from '@heroicons/react/24/outline/ShareIcon';
import EnvelopeIcon from '@heroicons/react/24/outline/EnvelopeIcon';
import EllipsisVerticalIcon from '@heroicons/react/24/outline/EllipsisVerticalIcon';
import ArrowPathIcon from "@heroicons/react/24/outline/ArrowPathIcon";
import Datepicker from "react-tailwindcss-datepicker";
import SuspenseContent from '../../components/admin/common/SuspenseContent';
import Nav from '../../components/admin/Nav';
import { useSelector, useDispatch } from 'react-redux'
import { removeNotificationMessage } from "../../components/admin/common/headerSlice";
import RightSidebar from '../../components/admin/common/RightSidebar';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import ReportSchema from "../../validation-schemas/ReportSchema";
import TitleCard from "../../components/admin/common/TitleCard";


const AdminDashboard = () => {

    const reportTitleAndUrl = [
        { title: "Active Subcripton of Ambassador", url: "active-subscribed-ambassador" },
        { title: "Active Subscription of Subscriber", url: "active-subscribed-subscriber" },
        { title: "Defaulted Subscription Payment of Ambassador", url: "defaulted-subscription-paymentof-ambassador" },
        { title: "Defaulted Subscription Payment of Subscribers", url: "defaulted-subscription-paymentof-subscriber" },
        { title: "Subscription cancelled by Ambassador", url: "subscription-cancelledby-ambassador" },
        { title: "Subscription cancelled by Subscriber", url: "subscription-cancelledby-subscriber" },
        { title: "Referral Per Ambassador", url: "active-inactive-referral-per-ambassador" },
        { title: "Active Referral Per Ambassador", url: "active-referral-per-ambassador" },
        { title: "Inactive Referral Per Ambassador", url: "inactive-referral-per-ambassador" },
        { title: "Payment due to ambassador", url: "payment-due-to-ambassador" }
    ];

    const reportTableHeader = [
        ["Ambassador First Name", "Ambassador Last Name", "Ambassador Referral Code", "Date of HVG subscription", "Subscription Status", "Date of ambassador sign up"],
        ["Subscriber First Name", "Subscriber Last Name", "Date of HVG subscription", "Subscription Status"],
        ["Ambassador First Name", "Ambassador Last Name", "Ambassador Referral Code", "Payment Failure Reason"],
        ["Subscriber First Name", "Subscriber Last Name", "Payment Failure Reason"],
        ["Ambassador First Name", "Ambassador Last Name", "Ambassador Referral Code", "Date of HVG subscription Cancellation"],
        ["Subscriber First Name", "Subscriber Last Name", "Date of HVG subscription Cancellation"],
        ["Subscriber First Name", "Subcriber Last Name", "Ambassador Referral Code Used ", "Referred Ambassador First Name", "Referred Ambassador Last Name", "	Date of use of referral code", "HVG Subscription status"],
        ["Subscriber First Name", "Subcriber Last Name", "Ambassador Referral Code Used ", "Referred Ambassador First Name", "Referred Ambassador Last Name", "	Date of use of referral code"],
        ["Subscriber First Name", "Subcriber Last Name", "Ambassador Referral Code Used ", "Referred Ambassador First Name", "Referred Ambassador Last Name", "	Date of use of referral code"],
        ["Ambassador First Name", "Ambassador Last Name", "Ambassador Referral Code", "Current active referrals", "Total amount due this month"]
    ];

    const [navigateUrl, setNavigateUrl] = useState('/admin/active-subscribed-ambassador');
    const [values, setValues] = useState([]);
    const [reportTitle, setReportTitle] = useState([]);
    const [reportApiUrl, setReportApiUrl] = useState([]);
    const [activeSubscribedAmbassador, setActiveSubscribedAmbassador] = useState([]);
    const [activeSubscribedSubscriber, setActiveSubscribedSubscriber] = useState([]);
    const [defaultedSubscriptionPaymentofambassador, setDefaultedSubscriptionPaymentofambassador] = useState([]);
    const [defaultedSubscriptionPaymentofsubscriber, setDefaultedSubscriptionPaymentofsubscriber] = useState([]);
    const [subscriptionCancelledbyAmbassador, setSubscriptionCancelledbyAmbassador] = useState([]);
    const [subscriptionCancelledbySubscriber, setSubscriptionCancelledbySubscriber] = useState([]);
    const [activeInactiveReferralPerAmbassador, setActiveInactiveReferralPerAmbassador] = useState([]);
    const [activeReferralPerAmbassador, setActiveReferralPerAmbassador] = useState([]);
    const [inactiveReferralPerAmbassador, setInactiveReferralPerAmbassador] = useState([]);
    const [paymentDueToAmbassador, setPaymentDueToAmbassador] = useState([]);
    const [index, setIndex] = useState(0);
    const dispatch = useDispatch()
    const statsData = [];

    const [dateValue, setDateValue] = useState({
        startDate: new Date(),
        endDate: new Date()
    });

    const authInfo = JSON.parse(localStorage.getItem("authInfo"));
    const location = useLocation();
    console.log('authInfo=', authInfo);
    let [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    let [userid, setUserid] = useState(authInfo ? authInfo.id : null);
    const navigate = useNavigate();
    const { newNotificationMessage, newNotificationStatus } = useState('');
    const apiUrl = 'active-subscribed-ambassador';

    useEffect(() => {
        if (newNotificationMessage !== "") {
            if (newNotificationStatus === 1) NotificationManager.success(newNotificationMessage, 'Success')
            if (newNotificationStatus === 0) NotificationManager.error(newNotificationMessage, 'Error')
            dispatch(removeNotificationMessage())
        }
        firstRenderReport();
    }, []);
    toast.configure();

    const firstRenderReport = () => {
        setReportApiUrl(apiUrl);
        axios.get(`admin/${apiUrl}`).then(response => {
            if (response.data.status) {
                toast.success(response.data.message, { position: "top-center", autoClose: 3000 });
                setActiveSubscribedAmbassador(response.data.data);

                console.log(activeSubscribedAmbassador);
            }
        }).catch(error => {
            toast.dismiss();
            if (error.response) {
                //resetForm();
                toast.error(error.response.data.message, { autoClose: 3000 });
            }
            console.log(error);
        })
        console.log('apiUrl=' + apiUrl);
    }

    /***********************************************************************/
    /***********************************************************************/
    const handleSubmit = (values, { resetForm }) => {
        console.log(values);
        setValues(values)
        setIndex(values.report_type);
        const apiUrl = reportTitleAndUrl[values.report_type].url;
        var urls = apiUrl;
        //reportApiUrl = apiUrl;
        setReportApiUrl(apiUrl);
        console.log("API url:", apiUrl)
        setNavigateUrl(`/admin/${apiUrl}`);
        if (values.start_date) {
            urls += '/' + values.start_date;
        }
        if (values.end_date) {
            urls += '/' + values.end_date;
        }

        axios.get(`admin/${urls}`, values).then(response => {
            if (response.data.status) {
                toast.success(response.data.message, { position: "top-center", autoClose: 3000 });
                if (apiUrl === 'active-subscribed-ambassador') {
                    setActiveSubscribedAmbassador(response.data.data);
                }
                if (apiUrl === 'active-subscribed-subscriber') {
                    setActiveSubscribedSubscriber(response.data.data);
                }
                if (apiUrl === 'defaulted-subscription-paymentof-ambassador') {
                    setDefaultedSubscriptionPaymentofambassador(response.data.data);
                }

                if (apiUrl === 'defaulted-subscription-paymentof-subscriber') {
                    setDefaultedSubscriptionPaymentofsubscriber(response.data.data);
                }
                if (apiUrl === 'subscription-cancelledby-ambassador') {
                    setSubscriptionCancelledbyAmbassador(response.data.data);
                }
                if (apiUrl === 'subscription-cancelledby-subscriber') {
                    setSubscriptionCancelledbySubscriber(response.data.data);
                }
                if (apiUrl === 'active-inactive-referral-per-ambassador') {
                    setActiveInactiveReferralPerAmbassador(response.data.data);
                }
                if (apiUrl === 'active-referral-per-ambassador') {
                    setActiveReferralPerAmbassador(response.data.data);
                }
                if (apiUrl === 'inactive-referral-per-ambassador') {
                    setInactiveReferralPerAmbassador(response.data.data);
                }
                if (apiUrl === 'payment-due-to-ambassador') {
                    setPaymentDueToAmbassador(response.data.data);
                }
                console.log('reportApiUrl=', reportApiUrl);

            } else {
                if (apiUrl === 'active-subscribed-ambassador') {
                    setActiveSubscribedAmbassador('');
                }
                if (apiUrl === 'active-subscribed-subscriber') {
                    setActiveSubscribedSubscriber('');
                }
                if (apiUrl === 'defaulted-subscription-paymentof-ambassador') {
                    setDefaultedSubscriptionPaymentofambassador('');
                }
                if (apiUrl === 'defaulted-subscription-paymentof-subscriber') {
                    setDefaultedSubscriptionPaymentofsubscriber('');
                }
                if (apiUrl === 'subscription-cancelledby-ambassador') {
                    setSubscriptionCancelledbyAmbassador('');
                }
                if (apiUrl === 'subscription-cancelledby-subscriber') {
                    setSubscriptionCancelledbySubscriber('');
                }
                if (apiUrl === 'active-inactive-referral-per-ambassador') {
                    setActiveInactiveReferralPerAmbassador('');
                }
                if (apiUrl === 'active-referral-per-ambassador') {
                    setActiveReferralPerAmbassador('');
                }
                if (apiUrl === 'inactive-referral-per-ambassador') {
                    setInactiveReferralPerAmbassador('');
                }
                if (apiUrl === 'payment-due-to-ambassador') {
                    setPaymentDueToAmbassador('');
                }
            }
        }).catch(error => {
            toast.dismiss();
            if (error.response) {
                resetForm();
                toast.error(error.response.data.message, { autoClose: 3000 });
            }
            console.log(error);
        })

    }


    const handleResetButton = (resetForm) => {
        resetForm();
        const apiUrl = reportTitleAndUrl[index].url;
        setReportApiUrl(apiUrl);
        setNavigateUrl(`/admin/${apiUrl}`);
        
        axios.get(`admin/${apiUrl}`, values).then(response => {
            if (response.data.status) {
                toast.success(response.data.message, { position: "top-center", autoClose: 3000 });
                if (apiUrl === 'active-subscribed-ambassador') {
                    setActiveSubscribedAmbassador(response.data.data);
                }
                if (apiUrl === 'active-subscribed-subscriber') {
                    setActiveSubscribedSubscriber(response.data.data);
                }
                if (apiUrl === 'defaulted-subscription-paymentof-ambassador') {
                    const ambassadorData = response.data.data;
                    const filtered = ambassadorData.filter(item => item.userid !== null && item.payment_status === 'cancel payment');
                    setDefaultedSubscriptionPaymentofambassador(filtered);
                }

                if (apiUrl === 'defaulted-subscription-paymentof-subscriber') {
                    const subscriberData = response.data.data;
                    const filtered = subscriberData.filter(item => item.userid !== null && item.payment_status === 'cancel payment');
                    setDefaultedSubscriptionPaymentofsubscriber(filtered);
                }
                if (apiUrl === 'subscription-cancelledby-ambassador') {
                    const cancleByAmb = response.data.data;
                    const filtered = cancleByAmb.filter(item => item.userId !== null);
                    setSubscriptionCancelledbyAmbassador(filtered);
                }
                if (apiUrl === 'subscription-cancelledby-subscriber') {
                    const cancleBySub = response.data.data;
                    const filtered = cancleBySub.filter(item => item.userId !== null);
                    setSubscriptionCancelledbySubscriber(filtered);
                }
                if (apiUrl === 'active-inactive-referral-per-ambassador') {
                    setActiveInactiveReferralPerAmbassador(response.data.data);
                }
                if (apiUrl === 'active-referral-per-ambassador') {
                    setActiveReferralPerAmbassador(response.data.data);
                }
                if (apiUrl === 'inactive-referral-per-ambassador') {
                    setInactiveReferralPerAmbassador(response.data.data);
                }
                if (apiUrl === 'payment-due-to-ambassador') {
                    setPaymentDueToAmbassador(response.data.data);
                }
                console.log('reportApiUrl=', reportApiUrl);

            } else {
                if (apiUrl === 'active-subscribed-ambassador') {
                    setActiveSubscribedAmbassador('');
                }
                if (apiUrl === 'active-subscribed-subscriber') {
                    setActiveSubscribedSubscriber('');
                }
                if (apiUrl === 'defaulted-subscription-paymentof-ambassador') {
                    setDefaultedSubscriptionPaymentofambassador('');
                }
                if (apiUrl === 'defaulted-subscription-paymentof-subscriber') {
                    setDefaultedSubscriptionPaymentofsubscriber('');
                }
                if (apiUrl === 'subscription-cancelledby-ambassador') {
                    setSubscriptionCancelledbyAmbassador('');
                }
                if (apiUrl === 'subscription-cancelledby-subscriber') {
                    setSubscriptionCancelledbySubscriber('');
                }
                if (apiUrl === 'active-inactive-referral-per-ambassador') {
                    setActiveInactiveReferralPerAmbassador('');
                }
                if (apiUrl === 'active-referral-per-ambassador') {
                    setActiveReferralPerAmbassador('');
                }
                if (apiUrl === 'inactive-referral-per-ambassador') {
                    setInactiveReferralPerAmbassador('');
                }
                if (apiUrl === 'payment-due-to-ambassador') {
                    setPaymentDueToAmbassador('');
                }
            }
        }).catch(error => {
            toast.dismiss();
            if (error.response) {
                resetForm();
                toast.error(error.response.data.message, { autoClose: 3000 });
            }
            console.log(error);
        })  
    };

    
    console.log("activeSubscribedAmbassador", activeSubscribedAmbassador)
    console.log("activeSubscribedSubscriber", activeSubscribedSubscriber)
    console.log("defaultedSubscriptionPaymentofambassador", defaultedSubscriptionPaymentofambassador)
    console.log("defaultedSubscriptionPaymentofsubscriber", defaultedSubscriptionPaymentofsubscriber)
    console.log("subscriptionCancelledbyAmbassador", subscriptionCancelledbyAmbassador)
    console.log("subscriptionCancelledbySubscriber", subscriptionCancelledbySubscriber)
    console.log("ActiveInactiveReferralPerAmbassador", activeInactiveReferralPerAmbassador)
    console.log("paymentDueToAmbassador", paymentDueToAmbassador)

    return (

        <>
            <div className="drawer drawer-mobile">
                <input id="left-sidebar-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">
                    <Header />
                    <main className="flex-1 overflow-y-auto pt-2 px-2  bg-base-200">

                        {/* report section */}
                        <div className="bg-zinc-50 px-3 py-3 rounded-xl bg-white shadow-mx border border-zinc-200">
                            <div className="text-xl font-semibold py-1 px-2">Report</div>
                            <div className="divider mt-2"></div>
                            <div className="">
                                <div className="flex w-[100%] align-center">
                                    <Formik
                                        initialValues={{
                                            start_date: '',
                                            end_date: '',
                                            report_type: null
                                        }}
                                        validationSchema={ReportSchema}

                                        // onSubmit={(values, { resetForm }) => {
                                        //     handleSubmit(values, { resetForm });
                                        // }}
                                        onSubmit={(values, { resetForm }) => {
                                            const endDate = new Date(values.end_date);
                                            endDate.setDate(endDate.getDate() + 1);
                                            const adjustedValues = { ...values, end_date: endDate.toISOString().slice(0, 10) };
                                            handleSubmit(adjustedValues, { resetForm });
                                        }}
                                        
                                    >
                                        {({ resetForm }) => (
                                        <Form className="flex w-[100%] justify-between align-center py-3 rounded-sl bg-base-100 rounded px-2">

                                            <div className="flex flex-col">
                                                <label htmlFor="start_date">Start Date</label>
                                                <Field name="start_date" type="date" className="input input-bordered w-full max-w-xs" />
                                                <ErrorMessage name="start_date" component="div" className="text-red-500 text-sm" />
                                            </div>

                                            <div className="flex flex-col">
                                                <label htmlFor="end_date">End Date</label>
                                                <Field name="end_date" type="date" className="input input-bordered w-full max-w-xs" />
                                                <ErrorMessage name="end_date" component="div" className="text-red-500 text-sm" />
                                            </div>
                                            <div className="flex flex-col">
                                                <label htmlFor="report_type">Report Type</label>
                                                <Field as="select" name="report_type" id="report_type" className="dropdown-content z-[1] menu p-2 shadow bg-base-100 w-64">
                                                    <option value="">Select an option</option>
                                                    <option value={0}> Active Subscritpion of Ambassador</option>
                                                    <option value={1}> Active Subscription of Subscriber</option>
                                                    <option value={2}> Defaulted Subscription payment of Ambassador</option>
                                                    <option value={3}> Defaulted Subscription pyament of Subscriber</option>
                                                    <option value={4}> Cancellation of Subscription-Cancelled by Ambassador</option>
                                                    <option value={5}> Cancellation of Subscriptioin-Cancelled by Subcriber</option>
                                                    <option value={6}> Referral Per Ambassador</option>
                                                    <option value={7}> Active Referral Per Ambassador</option>
                                                    <option value={8}> Inactive Referral Per Ambassador</option>
                                                    <option value={9}> Payment due to Ambassador</option>
                                                </Field>
                                                <ErrorMessage name="report_type" component="div" className="text-red-500 text-sm" />
                                            </div>

                                            <div className="flex align-center justify-between mt-6">
                                                <button type="submit" className="btn btn-primary mr-2 inline-block px-4 py-3 text-sm font-semibold text-center  text-white uppercase transition duration-200 ease-in-out bg-indigo-600 rounded-md cursor-pointer hover:bg-indigo-700">Search</button>
                                                <button type="button" className="btn btn-primary inline-block px-4 py-3 text-sm font-semibold text-center  text-white uppercase transition duration-200 ease-in-out bg-indigo-600 rounded-md cursor-pointer hover:bg-indigo-700"
                                                 onClick={() => handleResetButton(resetForm)}
                                                 >Reset</button>

                                                {/* <button type="submit" className="btn btn-primary inline-block px-4 py-3 text-sm font-semibold text-center text-white uppercase transition duration-200 ease-in-out bg-indigo-600 rounded-md cursor-pointer hover:bg-indigo-700">Export</button> */}
                                            </div>
                                        </Form>
                                         )}
                                    </Formik>
                                </div>
                            </div>
                            <TitleCard title={reportTitleAndUrl[index].title || ""} topMargin="mt-2" >
                                {/* Team Member list in table format loaded constant */}
                                <div className="overflow-x-auto w-full">
                                    <table className="table w-full">
                                        <thead>
                                            {reportTableHeader[index].map((data, index) => {
                                                return <>
                                                    <td key={index}>{data}</td>
                                                </>
                                            })
                                            }

                                        </thead>
                                        <tbody>
                                            {reportApiUrl === 'active-subscribed-ambassador' && activeSubscribedAmbassador.length > 0 && activeSubscribedAmbassador.map((user, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            {user.firstname !== '' && <td>{user.firstname ? user.firstname : 'N/A'} </td>}
                                                            {user.surname !== '' && <td>{user.surname ? user.surname : 'N/A'}</td>}
                                                            {user.referral_code !== '' && <td>{user.referral_code ? user.referral_code : 'N/A'}</td>}
                                                            {user.subscription_date !== '' && <td>{user.subscription_date ? new Date(user.subscription_date).toLocaleDateString() : 'N/A'}</td>}
                                                            {user.subscription_status !== '' && <td>{user.subscription_status ? user.subscription_status : 'N/A'}</td>}
                                                            {user.ambassador_date !== '' && <td>{user.ambassador_date ? new Date(user.ambassador_date).toLocaleDateString() : 'N/A'}</td>}
                                                        </tr>
                                                    );
                                                })
                                            }


                                            {reportApiUrl === 'active-subscribed-subscriber' && activeSubscribedSubscriber.length > 0 && activeSubscribedSubscriber.map((user, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{user.firstname ? user.firstname : 'N/A'} </td>
                                                        <td>{user.surname ? user.surname : 'N/A'}</td>
                                                        <td>{user.subscription_date ? new Date(user.subscription_date).toLocaleDateString() : 'N/A'}</td>
                                                        <td>{user.subscription_status ? user.subscription_status : 'N/A'}</td>
                                                    </tr>
                                                )
                                            })
                                            }

                                            {reportApiUrl === 'defaulted-subscription-paymentof-ambassador' && defaultedSubscriptionPaymentofambassador && defaultedSubscriptionPaymentofambassador.map((item, index) => {
                                                return <>
                                                    <tr key={index}>
                                                        <td>{item.userid && item.userid.firstname ? item.userid.firstname : 'N/A'}</td>
                                                        <td>{item.userid && item.userid.surname ? item.userid.surname : 'N/A'}</td>
                                                        <td>{item.userid && item.userid.referral_code ? item.userid.referral_code : "N/A"}</td>
                                                        <td>{item.payment_status = "cancel" ? "Payment failed" : ""}</td>
                                                    </tr>
                                                </>
                                            })}

                                            {reportApiUrl === 'defaulted-subscription-paymentof-subscriber' && defaultedSubscriptionPaymentofsubscriber && defaultedSubscriptionPaymentofsubscriber.map((item, index) => {
                                                return <>
                                                    <tr key={index}>
                                                    <td>{item.userid && item.userid.firstname ? item.userid.firstname : 'N/A'}</td>
                                                    <td>{item.userid && item.userid.surname ? item.userid.surname : 'N/A'}</td>
                                                    <td>{item.payment_status === "cancel" ? "Payment failed" : ""}</td>
                                                    </tr>
                                                </>
                                            })}

                                            {reportApiUrl === 'subscription-cancelledby-ambassador' && subscriptionCancelledbyAmbassador.map((item, index) => {
                                                return <>
                                                    <tr key={index}>
                                                    <td>{item.userId && item.userId.firstname ? item.userId.firstname : 'N/A'}</td>
                                                        <td>{item.userId && item.userId.surname ? item.userId.surname : 'N/A'}</td>
                                                        <td>{item.userId && item.userId.referral_code ? item.userId.referral_code : "N/A"}</td>
                                                        <td>{item.cancellation_date ? new Date(item.cancellation_date).toLocaleDateString() : 'N/A'}</td>
                                                    </tr>
                                                </>
                                            })}

                                            {reportApiUrl === 'subscription-cancelledby-subscriber' && subscriptionCancelledbySubscriber.map((item, index) => {
                                                return <>
                                                    <tr key={index}>
                                                    <td>{item.userId && item.userId.firstname ? item.userId.firstname : 'N/A'}</td>
                                                    <td>{item.userId && item.userId.surname ? item.userId.surname : 'N/A'}</td>
                                                    <td>{item.cancellation_date ? new Date(item.cancellation_date).toLocaleDateString() : 'N/A'}</td>
                                                    </tr>
                                                </>
                                            })}


                                            {reportApiUrl === 'active-inactive-referral-per-ambassador' && activeInactiveReferralPerAmbassador.map((data, index) => {
                                                return <>
                                                <tr key={index}>
                                                    <td>{data.Subscriber_firstname || "N/A"}</td>
                                                    <td>{data.Subscriber_lastname || "N/A"}</td>
                                                    <td>{data.Ambassador_referralcode || "N/A"}</td>
                                                    <td>{data.Ambassador_firstname || "N/A"}</td>
                                                    <td>{data.Ambassador_lastname || "N/A"}</td>
                                                    <td>{data.Date_of_use_of_referral_code || "N/A"}</td>
                                                    <td>{data.HVG_Subscription_status || "N/A"}</td>
                                                </tr>
                                                </>
                                            })}

                                            {reportApiUrl === 'active-referral-per-ambassador' && activeReferralPerAmbassador.map((data, index) => {
                                                return <>
                                                <tr key={index}>
                                                    <td>{data.Subscriber_firstname || "N/A"}</td>
                                                    <td>{data.Subscriber_lastname || "N/A"}</td>
                                                    <td>{data.Ambassador_referralcode || "N/A"}</td>
                                                    <td>{data.Ambassador_firstname || "N/A"}</td>
                                                    <td>{data.Ambassador_lastname || "N/A"}</td>
                                                    <td>{data.Date_of_use_of_referral_code || "N/A"}</td>
                                                </tr>
                                                </>
                                            })}

                                            {reportApiUrl === 'inactive-referral-per-ambassador' && inactiveReferralPerAmbassador.map((data, index) => {
                                                return <>
                                                <tr key={index}>
                                                    <td>{data.Subscriber_firstname || "N/A"}</td>
                                                    <td>{data.Subscriber_lastname || "N/A"}</td>
                                                    <td>{data.Ambassador_referralcode || "N/A"}</td>
                                                    <td>{data.Ambassador_firstname || "N/A"}</td>
                                                    <td>{data.Ambassador_lastname || "N/A"}</td>
                                                    <td>{data.Date_of_use_of_referral_code || "N/A"}</td>
                                                </tr>
                                                </>
                                            })}

                                            {reportApiUrl === 'payment-due-to-ambassador' && paymentDueToAmbassador.map((data, index) => {
                                                return <>
                                                <tr key={index}>
                                                    <td>{data.Ambassador_firstname || "N/A"}</td>
                                                    <td>{data.Ambassador_lastname || "N/A"}</td>
                                                    <td>{data.Ambassador_referralcode || "N/A"}</td>
                                                    <td>{data.referral_count || "N/A"}</td>
                                                    <td>{data.due_amount || "N/A"}</td>
                                                </tr>
                                                </>
                                            })}

                                            <tr><td style={{ "text-align": "right" }} colspan="6"><Link className="inline-block px-4 py-3 text-sm font-semibold text-center text-white uppercase transition duration-200 ease-in-out bg-indigo-600 rounded-md cursor-pointer hover:bg-indigo-700" to={navigateUrl}>View More</Link></td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </TitleCard>
                        </div>
                    </main>
                </div>
                <Nav />
            </div>
            <RightSidebar />
            <Footer />
        </>
    )
}

export default AdminDashboard;
