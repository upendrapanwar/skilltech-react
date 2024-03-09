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
import SuspenseContent from '../SuspenseContent';
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
        { title: "Defaulted Subscriptions Payments of Ambassador", url: "defaulted-subscription-paymentof-ambassador" },
        { title: "Defaulted Subscriptions Payments of Subscribers", url: "defaulted-subscription-paymentof-subscriber" },
        { title: "Subscription cancelled by Ambassador", url: "subscription-cancelledby-ambassador" },
        { title: "Subscription cancelled by Subscriber", url: "subscription-cancelledby-subscriber" },
        { title: "Referral Per Ambassador", url: "active-inactive-referral-per-ambassador" },
        { title: "Active Referral Per Ambassador", url: "active-referral-per-ambassador" },
        { title: "Inactive Referral Per Ambassador", url: "inactive-referral-per-ambassador" }
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
        ["Subscriber First Name", "Subcriber Last Name", "Ambassador Referral Code Used ", "Referred Ambassador First Name", "Referred Ambassador Last Name", "	Date of use of referral code"]
    ];

    const [navigateUrl, setNavigateUrl] = useState('/admin/active-subscribed-ambassador');
    const [reportApiUrl, setReportApiUrl] = useState([]);
    const [userReport, setUserReport] = useState([]);
    const [activeSubscribedSubscriber, setActiveSubscribedSubscriber] = useState([]);
    const [defaultedSubscriptionPaymentofambassador, setDefaultedSubscriptionPaymentofambassador] = useState([]);
    const [defaultedSubscriptionPaymentofsubscriber, setDefaultedSubscriptionPaymentofsubscriber] = useState([]);
    const [subscriptionCancelledbyAmbassador, setSubscriptionCancelledbyAmbassador] = useState([]);
    const [subscriptionCancelledbySubscriber, setSubscriptionCancelledbySubscriber] = useState([]);
    const [activeInactiveReferralPerAmbassador, setActiveInactiveReferralPerAmbassador] = useState([]);
    const [activeReferralPerAmbassador, setActiveReferralPerAmbassador] = useState([]);
    const [inactiveReferralPerAmbassador, setInactiveReferralPerAmbassador] = useState([]);
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
                setUserReport(response.data.data);

                console.log(userReport);
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
                    setUserReport(response.data.data);

                    //console.log('userReport=',userReport);
                }
                if (apiUrl === 'active-subscribed-subscriber') {
                    setActiveSubscribedSubscriber(response.data.data);
                    //console.log('activeSubscribedSubscriber=',activeSubscribedSubscriber);
                }
                if (apiUrl === 'defaulted-subscription-paymentof-ambassador') {
                    const ambassadorData = response.data.data;
                    const filtered = ambassadorData.filter(item => item.userid !== null && item.payment_status === 'cancel payment');
                    // console.log("filter ambassadorData", filtered)
                    setDefaultedSubscriptionPaymentofambassador(filtered);
                    // setDefaultedSubscriptionPaymentofambassador(response.data.data);
                    //console.log('defaultedSubscriptionPaymentofambassador=',defaultedSubscriptionPaymentofambassador);
                }

                if (apiUrl === 'defaulted-subscription-paymentof-subscriber') {
                    const subscriberData = response.data.data;
                    const filtered = subscriberData.filter(item => item.userid !== null && item.payment_status === 'cancel payment');
                    setDefaultedSubscriptionPaymentofsubscriber(filtered);
                    // setDefaultedSubscriptionPaymentofsubscriber(response.data.data);
                    //console.log('defaultedSubscriptionPaymentofsubscriber=',defaultedSubscriptionPaymentofsubscriber);
                }
                if (apiUrl === 'subscription-cancelledby-ambassador') {
                    const cancleByAmb = response.data.data;
                    const filtered = cancleByAmb.filter(item => item.userId !== null);
                    setSubscriptionCancelledbyAmbassador(filtered);
                    // setSubscriptionCancelledbyAmbassador(response.data.data);
                    //console.log('subscriptionCancelledbyAmbassador=',subscriptionCancelledbyAmbassador);
                }
                if (apiUrl === 'subscription-cancelledby-subscriber') {
                    const cancleBySub = response.data.data;
                    const filtered = cancleBySub.filter(item => item.userId !== null);
                    setSubscriptionCancelledbySubscriber(filtered);
                    // setSubscriptionCancelledbySubscriber(response.data.data);
                    //console.log('subscriptionCancelledbySubscriber=',subscriptionCancelledbySubscriber);
                }
                if (apiUrl === 'active-inactive-referral-per-ambassador') {
                    setActiveInactiveReferralPerAmbassador(response.data.data);
                    //console.log('activeInactiveReferralPerAmbassador=',activeInactiveReferralPerAmbassador);
                }
                if (apiUrl === 'active-referral-per-ambassador') {
                    setActiveReferralPerAmbassador(response.data.data);
                    //console.log('activeReferralPerAmbassador=',activeReferralPerAmbassador);
                }
                if (apiUrl === 'inactive-referral-per-ambassador') {
                    setInactiveReferralPerAmbassador(response.data.data);
                    //console.log('inactiveReferralPerAmbassador=',inactiveReferralPerAmbassador);
                }
                console.log('reportApiUrl=', reportApiUrl);

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
        firstRenderReport();  
    };

    
    console.log("userReport", userReport)
    console.log("activeSubscribedSubscriber", activeSubscribedSubscriber)

    console.log("defaultedSubscriptionPaymentofambassador", defaultedSubscriptionPaymentofambassador)
    console.log("defaultedSubscriptionPaymentofsubscriber", defaultedSubscriptionPaymentofsubscriber)
    console.log("subscriptionCancelledbyAmbassador", subscriptionCancelledbyAmbassador)
    console.log("subscriptionCancelledbySubscriber", subscriptionCancelledbySubscriber)

    console.log("ActiveInactiveReferralPerAmbassador", activeInactiveReferralPerAmbassador)



    return (

        <>
            <div className="drawer drawer-mobile">
                <input id="left-sidebar-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">
                    <Header />
                    <main className="flex-1 overflow-y-auto pt-2 px-2  bg-base-200">

                        {/* <div className="h-16">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="">
                                <Datepicker 
                                    containerClassName="w-72 " 
                                    value={dateValue} 
                                    theme={"dark"}
                                    inputClassName="input input-bordered w-72" 
                                    popoverDirection={"down"}
                                    toggleClassName="invisible"
                                    onChange={handleDatePickerValueChange} 
                                    showShortcuts={true} 
                                    primaryColor={"black"} 
                                /> 
                            
                            </div>
                            <div className="text-right ">
                                <button className="btn btn-ghost btn-sm normal-case"><ArrowPathIcon className="w-4 mr-2"/>Refresh Data</button>
                                <button className="btn btn-ghost btn-sm normal-case  ml-2"><ShareIcon className="w-4 mr-2"/>Share</button>

                                <div className="dropdown dropdown-bottom dropdown-end  ml-2">
                                    <label tabIndex={0} className="btn btn-ghost btn-sm normal-case btn-square "><EllipsisVerticalIcon className="w-5"/></label>
                                    <ul tabIndex={0} className="dropdown-content menu menu-compact  p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><a><EnvelopeIcon className="w-4"/>Email Digests</a></li>
                                        <li><a><ArrowDownTrayIcon className="w-4"/>Download</a></li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                        </div>   */}

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

                                        onSubmit={(values, { resetForm }) => {
                                            handleSubmit(values, { resetForm });
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
                                                </Field>
                                                <ErrorMessage name="report_type" component="div" className="text-red-500 text-sm" />
                                            </div>

                                            <div className="flex align-center justify-between mt-6">
                                                <button type="submit" className="btn btn-primary inline-block px-4 py-3 text-sm font-semibold text-center  text-white uppercase transition duration-200 ease-in-out bg-indigo-600 rounded-md cursor-pointer hover:bg-indigo-700">Search</button>
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
                            <TitleCard title={reportTitleAndUrl[index].title} topMargin="mt-2" >
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
                                            {console.log('reportApiUrl=', reportApiUrl)}
                                            {console.log('userReport=', userReport)}
                                            {reportApiUrl === 'active-subscribed-ambassador' && userReport.length > 0 && userReport.map((user, index) => {

                                                return (
                                                    <tr key={index}>
                                                        {user.firstname !== '' && <td>{user.firstname ? user.firstname.toUpperCase() : 'N/A'} </td>}
                                                        {user.surname !== '' && <td>{user.surname ? user.surname.toUpperCase() : 'N/A'}</td>}
                                                        {user.referral_code !== '' && <td>{user.referral_code ? user.referral_code : 'N/A'}</td>}
                                                        {user.subscription_date !== '' && <td>{user.subscription_date ? new Date(user.subscription_date).toLocaleDateString() : 'N/A'}</td>}
                                                        <td>Active</td>
                                                        {user.ambassador_date !== '' && <td>{user.ambassador_date ? new Date(user.ambassador_date).toLocaleDateString() : 'N/A'}</td>}

                                                    </tr>
                                                )
                                            })

                                            }

                                            {reportApiUrl === 'active-subscribed-subscriber' && activeSubscribedSubscriber && activeSubscribedSubscriber.map((user, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{user.firstname ? user.firstname.toUpperCase() : 'N/A'} </td>
                                                        <td>{user.surname ? user.surname.toUpperCase() : 'N/A'}</td>
                                                        <td>{user.subscription_date ? new Date(user.subscription_date).toLocaleDateString() : 'N/A'}</td>
                                                        <td>Active</td>

                                                    </tr>
                                                )
                                            })}

                                            {reportApiUrl === 'defaulted-subscription-paymentof-ambassador' && defaultedSubscriptionPaymentofambassador && defaultedSubscriptionPaymentofambassador.map((item, index) => {
                                                return <>
                                                    <tr key={index}>
                                                        <td>{item.userid.firstname.toUpperCase()}</td>
                                                        <td>{item.userid.surname.toUpperCase()}</td>
                                                        <td>{item.userid.referral_code}</td>
                                                        <td>{item.payment_status}</td>
                                                    </tr>
                                                </>
                                            })}

                                            {reportApiUrl === 'defaulted-subscription-paymentof-subscriber' && defaultedSubscriptionPaymentofsubscriber && defaultedSubscriptionPaymentofsubscriber.map((item, index) => {
                                                return <>
                                                    <tr key={index}>
                                                        <td>{item.userid.firstname.toUpperCase()}</td>
                                                        <td>{item.userid.surname.toUpperCase()}</td>
                                                        <td>{item.payment_status}</td>
                                                    </tr>
                                                </>
                                            })}

                                            {reportApiUrl === 'subscription-cancelledby-ambassador' && subscriptionCancelledbyAmbassador.map((item, index) => {
                                                return <>
                                                    <tr key={index}>
                                                        <td>{item.userId.firstname.toUpperCase()}</td>
                                                        <td>{item.userId.surname.toUpperCase()}</td>
                                                        <td></td>
                                                        <td>{item.cancellation_date}</td>
                                                    </tr>
                                                </>
                                            })}

                                            {reportApiUrl === 'subscription-cancelledby-subscriber' && subscriptionCancelledbySubscriber.map((item, index) => {
                                                return <>
                                                    <tr key={index}>
                                                        <td>{item.userId.firstname.toUpperCase()}</td>
                                                        <td>{item.userId.surname.toUpperCase()}</td>                                                
                                                        <td>{item.cancellation_date}</td>
                                                    </tr>
                                                </>
                                            })}


                                            {reportApiUrl === 'active-inactive-referral-per-ambassador' && activeInactiveReferralPerAmbassador.map((data, index) => {
                                                return <>
                                                <tr key={index}>
                                                    <td>{data.Subscriber_firstname}</td>
                                                    <td>{data.Subscriber_lastname}</td>
                                                    <td>{data.Ambassador_referralcode}</td>
                                                    <td>{data.Ambassador_firstname}</td>
                                                    <td>{data.Ambassador_lastname}</td>
                                                    <td>{data.Date_of_use_of_referral_code}</td>
                                                    <td>{data.HVG_Subscription_status}</td>
                                                </tr>
                                                </>
                                            })}

                                            {reportApiUrl === 'active-referral-per-ambassador' && activeReferralPerAmbassador.map((data, index) => {
                                                return <>
                                                <tr key={index}>
                                                    <td>{data.Subscriber_firstname}</td>
                                                    <td>{data.Subscriber_lastname}</td>
                                                    <td>{data.Ambassador_referralcode}</td>
                                                    <td>{data.Ambassador_firstname}</td>
                                                    <td>{data.Ambassador_lastname}</td>
                                                    <td>{data.Date_of_use_of_referral_code}</td>
                                                </tr>
                                                </>
                                            })}

                                            {reportApiUrl === 'inactive-referral-per-ambassador' && inactiveReferralPerAmbassador.map((data, index) => {
                                                return <>
                                                <tr key={index}>
                                                    <td>{data.Subscriber_firstname}</td>
                                                    <td>{data.Subscriber_lastname}</td>
                                                    <td>{data.Ambassador_referralcode}</td>
                                                    <td>{data.Ambassador_firstname}</td>
                                                    <td>{data.Ambassador_lastname}</td>
                                                    <td>{data.Date_of_use_of_referral_code}</td>
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
