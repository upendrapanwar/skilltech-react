import React, { useEffect, useState } from 'react';
import { Formik, Form, ErrorMessage, Field, resetForm } from 'formik';
import axios from 'axios';
import { toast } from 'react-toastify';
import TitleCard from '../../components/admin/common/TitleCard';

export const Reports = ({userId}) => {
    const reportTitleAndUrl = [
        { title: "Defaulted Subscription Payment of Subscribers", url: "defaulted-subscription-paymentof-subscriber" },
        { title: "My Active Referrals", url: "my-active-referral" },
        { title: "My Inactive Referrals", url: "my-inactive-referral" },
        { title: "Payment due to me this month", url: "payment-due-this-month" }
    ];

    const reportTableHeader = [
        ["Referral (Subscriber) First Name", "Referral (Subscriber) Last Name", "Payment Failure Reason"],
        ["Referral (Subscriber) First Name", "Referral (Subscriber) Last Name", "Date of use of referral code", "Referral Status (by Subscriber)"],
        ["Referral (Subscriber) First Name", "Referral (Subscriber) Last Name", "Date of use of referral code", "Referral Status (by Subscriber)"],
        ["Ambassador First Name", "Ambassador Last Name", "Ambassador Referral Code", "Current active referrals", "Total amount due this month"]
    ];

    const [reportApiUrl, setReportApiUrl] = useState([]);
    const [defaultedSubscriptionPaymentofsubscriber, setDefaultedSubscriptionPaymentofsubscriber] = useState([]);
    const [myActiveReferral, setActiveReferral] = useState([]);
    const [myInactiveReferral, setInactiveReferral] = useState([]);
    const [paymentDueThisMonth, setPaymentDueThisMonth] = useState([]);
    const [index, setIndex] = useState(0);

    const apiUrl = 'defaulted-subscription-paymentof-subscriber';

    useEffect(() => {
        firstRenderReport();
    }, []);
    toast.configure();

    const firstRenderReport = () => {   
        setReportApiUrl(apiUrl);
        axios.post(`common/${apiUrl}`, { userId: userId.id })
        .then(response => {
            if (response.data.status) {
                toast.success(response.data.message, { position: "top-center", autoClose: 3000 });
                setDefaultedSubscriptionPaymentofsubscriber(response.data.data);
                console.log(defaultedSubscriptionPaymentofsubscriber);
            }
        }).catch(error => {
            toast.dismiss();
            if (error.response) {
                toast.error(error.response.data.message, { autoClose: 3000 });
            }
            console.log(error);
        })
        console.log('apiUrl=' + apiUrl);
    }

    const handleSubmit = (values, { resetForm }) => {
        console.log(values);
        setIndex(values.report_type);
        const apiUrl = reportTitleAndUrl[values.report_type].url;
        var urls = apiUrl;
        setReportApiUrl(apiUrl);
        console.log("API url:", apiUrl);

        if (values.start_date) {
            urls += '/' + values.start_date;
        }
        if (values.end_date) {
            urls += '/' + values.end_date;
        }

        axios.post(`common/${urls}`, { userId: userId.id })
        .then(response => {
            if (response.data.status) {
                toast.success(response.data.message, { position: "top-center", autoClose: 3000 });
                if (apiUrl === 'defaulted-subscription-paymentof-subscriber') {
                    setDefaultedSubscriptionPaymentofsubscriber(response.data.data);
                }
                if (apiUrl === 'my-active-referral') {
                    setActiveReferral(response.data.data);
                }
                if (apiUrl === 'my-inactive-referral') {
                    setInactiveReferral(response.data.data);
                }
                if (apiUrl === 'payment-due-this-month') {
                    setPaymentDueThisMonth(response.data.data);
                }
            } else {
                if (apiUrl === 'defaulted-subscription-paymentof-subscriber') {
                    setDefaultedSubscriptionPaymentofsubscriber('');
                }
                if (apiUrl === 'my-active-referral') {
                    setActiveReferral('');
                }
                if (apiUrl === 'my-inactive-referral') {
                    setInactiveReferral('');
                }
                if (apiUrl === 'payment-due-this-month') {
                    setPaymentDueThisMonth('');
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

        axios.post(`common/${apiUrl}`, { userId: userId.id })
        .then(response => {
            if (response.data.status) {
                toast.success(response.data.message, { position: "top-center", autoClose: 3000 });
                if (apiUrl === 'defaulted-subscription-paymentof-subscriber') {
                    setDefaultedSubscriptionPaymentofsubscriber(response.data.data);
                }
                if (apiUrl === 'my-active-referral') {
                    setActiveReferral(response.data.data);
                }
                if (apiUrl === 'my-inactive-referral') {
                    setInactiveReferral(response.data.data);
                }
                if (apiUrl === 'payment-due-this-month') {
                    setPaymentDueThisMonth(response.data.data);
                }
            } else {
                if (apiUrl === 'defaulted-subscription-paymentof-subscriber') {
                    setDefaultedSubscriptionPaymentofsubscriber('');
                }
                if (apiUrl === 'my-active-referral') {
                    setActiveReferral('');
                }
                if (apiUrl === 'my-inactive-referral') {
                    setInactiveReferral('');
                }
                if (apiUrl === 'payment-due-this-month') {
                    setPaymentDueThisMonth('');
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

  return (
    <div>
         <div className="hvg__card_section mb-4">
            <div className="card">
              <div className="card-header">
                <h4>Ambassador Reports</h4>
              </div>
              <div className="card-body">
                <div className="table_view_panel table-responsive-sm">

                {/* report section */}
                <div className="bg-zinc-50 px-3 py-3 rounded-xl bg-white shadow-mx border border-zinc-200">
                            <div className="divider mt-2"></div>
                            <div className="">
                                <div className="flex w-[100%] align-center">
                                    <Formik
                                        initialValues={{
                                            start_date: '',
                                            end_date: '',
                                            report_type: null
                                        }}
                                        // validationSchema={ReportSchema}

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
                                                    <option value={0}> Defaulted Subscriptions Payments of Subscribers</option>
                                                    <option value={1}> My Active Referrals</option>
                                                    <option value={2}> My Inactive Referrals</option>
                                                    <option value={3}> Payment due to me this month</option>
                                                </Field>
                                                <ErrorMessage name="report_type" component="div" className="text-red-500 text-sm" />
                                            </div>

                                            <div className="flex align-center justify-between mt-6">
                                                <button type="submit" className="btn btn-primary inline-block px-4 py-3 text-sm font-semibold text-center  text-white uppercase transition duration-200 ease-in-out bg-indigo-600 rounded-md cursor-pointer hover:bg-indigo-700">Search</button>
                                                <button 
                                                type="button" 
                                                className="btn btn-primary inline-block px-4 py-3 text-sm font-semibold text-center  text-white uppercase transition duration-200 ease-in-out bg-indigo-600 rounded-md cursor-pointer hover:bg-indigo-700"
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
                                            {reportApiUrl === 'defaulted-subscription-paymentof-subscriber' && defaultedSubscriptionPaymentofsubscriber.length > 0 && defaultedSubscriptionPaymentofsubscriber.map((user, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>{user.firstname ? user.firstname : 'N/A'} </td>
                                                            <td>{user.surname ? user.surname : 'N/A'}</td>
                                                            <td>{user.payment_status ? 'Payment failed' : 'N/A'}</td>
                                                        </tr>
                                                    );
                                                })
                                            }


                                            {reportApiUrl === 'my-active-referral' && myActiveReferral.length > 0 && myActiveReferral.map((user, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{user.firstname ? user.firstname : 'N/A'} </td>
                                                        <td>{user.surname ? user.surname : 'N/A'}</td>
                                                        <td>{user.referral_used_date ? new Date(user.referral_used_date).toLocaleDateString() : 'N/A'}</td>
                                                        <td>{user.referral_status ? user.referral_status : 'N/A'}</td>
                                                    </tr>
                                                )
                                            })
                                            }

                                            {reportApiUrl === 'my-inactive-referral' && myInactiveReferral && myInactiveReferral.map((user, index) => {
                                                return <>
                                                    <tr key={index}>
                                                        <td>{user.firstname ? user.firstname : 'N/A'} </td>
                                                        <td>{user.surname ? user.surname : 'N/A'}</td>
                                                        <td>{user.referral_used_date ? new Date(user.referral_used_date).toLocaleDateString() : 'N/A'}</td>
                                                        <td>{user.referral_status ? user.referral_status : 'N/A'}</td>
                                                    </tr>
                                                </>
                                            })}

                                            {reportApiUrl === 'payment-due-this-month' && paymentDueThisMonth && paymentDueThisMonth.map((user, index) => {
                                                return <>
                                                    <tr key={index}>
                                                        <td>{user.firstname ? user.firstname : 'N/A'} </td>
                                                        <td>{user.surname ? user.surname : 'N/A'}</td>
                                                        <td>{user.referral_code ? user.referral_code : 'N/A'}</td>
                                                        <td>{user.referral_count ? user.referral_count : 'N/A'}</td>
                                                        <td>{user.due_amount ? user.due_amount : 'N/A'}</td>
                                                    </tr>
                                                </>
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </TitleCard>
                        </div>

                </div>
              </div>
            </div>
          </div>
    </div>
  )
}
