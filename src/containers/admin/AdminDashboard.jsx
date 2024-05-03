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
import { saveAs } from "file-saver";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";

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

    /***********************************************************************/
    /***********************************************************************/
    const ambassadorFirstName = {
        name: "AMBASSADOR FIRST NAME",
        selector: (row, i) => row.firstname || row.Ambassador_firstname,
        cell: (row) => <span>{row.firstname || row.Ambassador_firstname}</span>,
        sortable: true,
      }
    const ambassadorLastName = {
        name: "AMBASSADOR LAST NAME",
        selector: (row, i) => row.surname || row.Ambassador_lastname,
        cell: (row) => <span>{row.surname || row.Ambassador_lastname}</span>,
        sortable: true,
      }
    const ambassadorReferralCode = { 
        name: "AMBASSADOR REFERRAL CODE",
        selector: (row, i) => row.referral_code || row.Ambassador_referralcode,
        cell: (row) => <span>{row.referral_code || row.Ambassador_referralcode}</span>,
        sortable: true,
      }
    const ambassadorReferralCodeUsed = {
        name: "AMBASSADOR REFERRAL CODE USED",
        selector: (row, i) => row.referral_code,
        cell: (row) => <span>{row.referral_code}</span>,
        sortable: true,
      }
    const dateOfReferralCodeUsed = {
        name: "DATE OF USE OF REFERRAL USED",
        selector: (row, i) => row.Date_of_use_of_referral_code,
        cell: (row) => {
          const date = new Date(row.Date_of_use_of_referral_code);
          const day = date.getDate();
          const month = date.toLocaleString('en-us', { month: 'short' });
          const year = date.getFullYear();
          const formattedDate = `${day} ${month}, ${year}`;
          return <span>{formattedDate}</span>;
        },
        sortable: true,
      }
    const dateOfHVGSubscriptionAmbassador = {
        name: "DATE OF HVG SUBSCRIPTION",
        selector: (row, i) => row.subscription_date,
        cell: (row) => {
          const date = new Date(row.subscription_date);
          const day = date.getDate();
          const month = date.toLocaleString('en-us', { month: 'short' });
          const year = date.getFullYear();
          const formattedDate = `${day} ${month}, ${year}`;
          return <span>{formattedDate}</span>;
        },
        sortable: true,
      }
      const paymentFailureReason = {
        name: "PAIMENT FAILURE REASON",
        selector: (row, i) => row.payment_status,
        cell: (row) => <span>{row.payment_status === "cancel" ? "Payment failed" : "Payment not done"}</span>,
        sortable: true,
      }
    const subscriptionStatus = {
        name: "SUBSCRIPTION STATUS",
        selector: (row, i) => row.subscription_status,
        cell: (row) => <span>{row.subscription_status}</span>,
        sortable: true,
      }
    const hvgSubscriptionStatus = {
        name: "HVG SUBSCRIPTION STATUS",
        selector: (row, i) => row.HVG_Subscription_status,
        cell: (row) => <span>{row.HVG_Subscription_status}</span>,
        sortable: true,
      }
    const dateOfHVGSubscriptionCancellation = {
        name: "DATE OF HVG SUBSCRIPTION CALCELLATION",
        selector: (row, i) => row.subscription_cancellation_date || row.cancellation_date,
        cell: (row) => {
          const date = new Date(row.subscription_cancellation_date || row.cancellation_date);
          const day = date.getDate();
          const month = date.toLocaleString('en-us', { month: 'short' });
          const year = date.getFullYear();
          const formattedDate = `${day} ${month}, ${year}`;
          return <span>{formattedDate}</span>;
        },
        sortable: true,
      }
    const dateOfAmbassadorSignup = {
        name: "DATE OF AMBASSADOR SIGN UP",
        selector: (row, i) => row.ambassador_date,
        cell: (row) => {
          const date = new Date(row.ambassador_date);
          const day = date.getDate();
          const month = date.toLocaleString('en-us', { month: 'short' });
          const year = date.getFullYear();
          const formattedDate = `${day} ${month}, ${year}`;
          return <span>{formattedDate}</span>;
        },
        sortable: true,
      }
      const currentActiveReferral = {
        name: "CURRENT ACTIVE REFERRAL",
        selector: (row, i) => row.referral_count,
        cell: (row) => <span>{row.referral_count}</span>,
        sortable: true,
      }
      const totalAmountDueThisMonth = {
        name: "TOTAL AMOUNT DUE THIS MONTH",
        selector: (row, i) => row.due_amount,
        cell: (row) => <span>{row.due_amount}</span>,
        sortable: true,
      }

      const subscriberFirstName = {
        name: "SUBSCRIBER FIRST NAME",
        selector: (row, i) => row.firstname || row.Subscriber_firstname,
        cell: (row) => <span>{row.firstname || row.Subscriber_firstname}</span>,
        sortable: true,
      }

      const subscriberLastName = {
        name: "SUBSCRIBER LAST NAME",
        selector: (row, i) => row.surname || row.Subscriber_lastname,
        cell: (row) => <span>{row.surname || row.Subscriber_lastname}</span>,
        sortable: true,
      }

      const dateOfHVGSubscriptionSubscriber = {
        name: "DATE OF HVG SUBSCRIPTION",
        selector: (row, i) => row.subscription_date,
        cell: (row) => {
          const date = new Date(row.subscription_date);
          const day = date.getDate();
          const month = date.toLocaleString('en-us', { month: 'short' });
          const year = date.getFullYear();
          const formattedDate = `${day} ${month}, ${year}`;
          return <span>{formattedDate}</span>;
        },
        sortable: true,
      }



    /***********************************************************************/
    /***********************************************************************/

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
    const [bulkPaymentData, setBulkPaymentData] = useState([]);
    const [columns, setColumns] = useState([]);
    const [orderDataSet, setOrderDataSet] = useState([]);
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
                var columnsData = [ambassadorFirstName, ambassadorLastName, ambassadorReferralCode, dateOfHVGSubscriptionAmbassador, subscriptionStatus, dateOfAmbassadorSignup];
                  setColumns(columnsData);
                  setOrderDataSet(response.data.data);

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
        console.log("values", values);
        setValues(values)
        setIndex(values.report_type);
        const apiUrl = reportTitleAndUrl[values.report_type].url;
        var urls = apiUrl;
        //reportApiUrl = apiUrl;
        setReportApiUrl(apiUrl);
        setNavigateUrl(`/admin/${apiUrl}`);
        if (values.start_date) {
            urls += '/' + values.start_date;
        }
        if (values.end_date) {
            urls += '/' + values.end_date;
        }
        console.log("API url:******************", urls);

        axios.get(`admin/${urls}`, values).then(response => {
            if (response.data.status) {
                toast.success(response.data.message, { position: "top-center", autoClose: 3000 });
                if (apiUrl === 'active-subscribed-ambassador') {
                    setActiveSubscribedAmbassador(response.data.data);
                    var columnsData = [ambassadorFirstName, ambassadorLastName, ambassadorReferralCode, dateOfHVGSubscriptionAmbassador, subscriptionStatus, dateOfAmbassadorSignup];
                    setColumns(columnsData);
                    setOrderDataSet(response.data.data);
                }
                if (apiUrl === 'active-subscribed-subscriber') {
                    setActiveSubscribedSubscriber(response.data.data);
                    var columnsData = [ subscriberFirstName, subscriberLastName, dateOfHVGSubscriptionSubscriber, subscriptionStatus ];
                    setColumns(columnsData);
                    setOrderDataSet(response.data.data);
                }
                if (apiUrl === 'defaulted-subscription-paymentof-ambassador') {
                    setDefaultedSubscriptionPaymentofambassador(response.data.data);
                    var columnsData = [ ambassadorFirstName, ambassadorLastName, ambassadorReferralCode, paymentFailureReason ];
                    setColumns(columnsData);
                    setOrderDataSet(response.data.data);
                }

                if (apiUrl === 'defaulted-subscription-paymentof-subscriber') {
                    setDefaultedSubscriptionPaymentofsubscriber(response.data.data);
                    var columnsData = [ subscriberFirstName, subscriberLastName, paymentFailureReason ];
                    setColumns(columnsData);
                    setOrderDataSet(response.data.data);
                }
                if (apiUrl === 'subscription-cancelledby-ambassador') {
                    setSubscriptionCancelledbyAmbassador(response.data.data);
                    var columnsData = [ ambassadorFirstName, ambassadorLastName, ambassadorReferralCode, dateOfHVGSubscriptionCancellation ];
                    setColumns(columnsData);
                    setOrderDataSet(response.data.data);
                }
                if (apiUrl === 'subscription-cancelledby-subscriber') {
                    setSubscriptionCancelledbySubscriber(response.data.data);
                    var columnsData = [ subscriberFirstName, subscriberLastName, dateOfHVGSubscriptionCancellation ];
                    setColumns(columnsData);
                    setOrderDataSet(response.data.data);
                }
                if (apiUrl === 'active-inactive-referral-per-ambassador') {
                    setActiveInactiveReferralPerAmbassador(response.data.data);
                    var columnsData = [ subscriberFirstName, subscriberLastName, ambassadorReferralCodeUsed, ambassadorFirstName, ambassadorLastName, dateOfReferralCodeUsed, hvgSubscriptionStatus ];
                    setColumns(columnsData);
                    setOrderDataSet(response.data.data);
                }
                if (apiUrl === 'active-referral-per-ambassador') {
                    setActiveReferralPerAmbassador(response.data.data);
                    var columnsData = [ subscriberFirstName, subscriberLastName, ambassadorReferralCodeUsed, ambassadorFirstName, ambassadorLastName, dateOfReferralCodeUsed ];
                    setColumns(columnsData);
                    setOrderDataSet(response.data.data);
                }
                if (apiUrl === 'inactive-referral-per-ambassador') {
                    setInactiveReferralPerAmbassador(response.data.data);
                    var columnsData = [ subscriberFirstName, subscriberLastName, ambassadorReferralCodeUsed, ambassadorFirstName, ambassadorLastName, dateOfReferralCodeUsed ];
                    setColumns(columnsData);
                    setOrderDataSet(response.data.data);
                }
                if (apiUrl === 'payment-due-to-ambassador') {
                    setPaymentDueToAmbassador(response.data.data);
                    var columnsData = [ ambassadorFirstName, ambassadorLastName, ambassadorReferralCode, currentActiveReferral, totalAmountDueThisMonth ];
                    setColumns(columnsData);
                    setOrderDataSet(response.data.data);
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
    console.log("paymentDueToAmbassador", paymentDueToAmbassador);

    const handleDownloadReport = () => {
        axios.get(`/admin/bulk-payment-report`)
        .then(response => {
            if (response.data.status) {
                toast.success(response.data.message, { position: "top-center", autoClose: 3000 });
                setBulkPaymentData(response.data.data);
                console.log("bulkPaymentData response", response.data.data)
            } 
        }).catch(error => {
            toast.dismiss();
            if (error.response) {
                toast.error(error.response.data.message, { autoClose: 3000 });
            }
            console.log(error);
        })

        //Code to download CSV file
        const formattedData = bulkPaymentData.map(({ recipient_name, recipient_account, recipient_acount_type, branch_code, amount, own_reference, recipient_reference, email_1_notify, email_1_address, email_1_subject, email_2_notify, email_2_address, email_2_subject, email_3_notify, email_3_address, email_3_subject, email_4_notify, email_4_address, email_4_subject, email_5_notify, email_5_address, email_5_subject, fax_1_notify, fax_1_code, fax_1_number, fax_1_subject, fax_2_notify, fax_2_code, fax_2_number, fax_2_subject, sms_1_notify, sms_1_code, sms_1_number, sms_2_notify, sms_2_code, sms_2_number }) => [ 
            recipient_name, recipient_account, recipient_acount_type, branch_code, amount, own_reference, recipient_reference, email_1_notify, email_1_address, email_1_subject, email_2_notify, email_2_address, email_2_subject, email_3_notify, email_3_address, email_3_subject, email_4_notify, email_4_address, email_4_subject, email_5_notify, email_5_address, email_5_subject, fax_1_notify, fax_1_code, fax_1_number, fax_1_subject, fax_2_notify, fax_2_code, fax_2_number, fax_2_subject, sms_1_notify, sms_1_code, sms_1_number, sms_2_notify, sms_2_code, sms_2_number ]);
        
        const csvContent = [
            ["RECIPIENT NAME","RECIPIENT ACCOUNT","RECIPIENT ACCOUNT TYPE","BRANCH CODE","AMOUNT","OWN REFERENCE","RECIPIENT REFERENCE","EMAIL 1 NOTIFY","EMAIL 1 ADDRESS","EMAIL 1 SUBJECT","EMAIL 2 NOTIFY","EMAIL 2 ADDRESS","EMAIL 2 SUBJECT","EMAIL 3 NOTIFY","EMAIL 3 ADDRESS","EMAIL 3 SUBJECT","EMAIL 4 NOTIFY","EMAIL 4 ADDRESS","EMAIL 4 SUBJECT","EMAIL 5 NOTIFY","EMAIL 5 ADDRESS","EMAIL 5 SUBJECT","FAX 1 NOTIFY","FAX 1 CODE","FAX 1 NUMBER","FAX 1 SUBJECT","FAX 2 NOTIFY","FAX 2 CODE","FAX 2 NUMBER","FAX 2 SUBJECT","SMS 1 NOTIFY","SMS 1 CODE","SMS 1 NUMBER","SMS 2 NOTIFY","SMS 2 CODE","SMS 2 NUMBER"],
          ...formattedData
        ]
          .map(row => row.join(","))
          .join("\n");
      
        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        saveAs(blob, `bulk_payment_report_of_ambassador.csv`);
      };

     

    return (

        <>
            <div className="drawer drawer-mobile">
                <input id="left-sidebar-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">
                    <Header />
                    <main className="flex-1 overflow-y-auto pt-2 px-2  bg-base-200">

                        {/* report section */}
                        <div className="bg-zinc-50 px-3 py-3 rounded-xl bg-white shadow-mx border border-zinc-200">
                            <div className="row" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <div className="text-xl font-semibold py-1 px-2">Report</div>
                            <button type="button" onClick={handleDownloadReport} className="btn btn-primary inline-block px-4 py-3 text-sm font-semibold text-center text-white uppercase transition duration-200 ease-in-out bg-indigo-600 rounded-md cursor-pointer hover:bg-indigo-700">Bulk Payment CSV Export</button>
                            </div>
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
                                            if(values.end_date){
                                                const endDate = new Date(values.end_date);
                                                endDate.setDate(endDate.getDate() + 1);
                                                const adjustedValues = { ...values, end_date: endDate.toISOString().slice(0, 10) };
                                                handleSubmit(adjustedValues, { resetForm });
                                            } else{
                                                handleSubmit(values, { resetForm });
                                            }

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
                                                    <option value={0}> Active Subscription of Ambassador</option>
                                                    <option value={1}> Active Subscription of Subscriber</option>
                                                    <option value={2}> Defaulted Subscription payment of Ambassador</option>
                                                    <option value={3}> Defaulted Subscription payment of Subscriber</option>
                                                    <option value={4}> Cancellation of Subscription-Cancelled by Ambassador</option>
                                                    <option value={5}> Cancellation of Subscriptioin-Cancelled by Subscriber</option>
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

                                            </div>
                                        </Form>
                                         )}
                                    </Formik>
                                </div>
                            </div>
                            <div className="overflow-x-auto w-full">
                                <DataTableExtensions
                                    columns={columns}
                                    data={orderDataSet}
                                >
                                    <DataTable
                                    title="Table"
                                    noHeader
                                    defaultSortField="id"
                                    defaultSortAsc={false}
                                    pagination
                                    highlightOnHover
                                    customStyles={{
                                        rows: {
                                        style: {
                                            minHeight: '50px', // override the row height
                                        }
                                        },
                                        cells: {
                                        style: {
                                            whiteSpace: 'nowrap', // add white-space nowrap to prevent wrapping
                                        },
                                        },
                                    }}
                                    />
                                </DataTableExtensions>
                            </div>
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
