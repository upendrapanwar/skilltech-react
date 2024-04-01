import React, { useEffect, useState } from "react";
import { Chart as ChartJS } from "chart.js";

import { Link, useNavigate, useLocation } from "react-router-dom";
import Header from "../../components/admin/Header";
import Footer from "../../components/admin/Footer";
import AdminLoginSchema from "../../validation-schemas/AdminLoginSchema";
import { Formik, Form, ErrorMessage, Field, resetForm } from "formik";
import axios from "axios";
import { toast } from "react-toastify";
import ErrorText from "../../components/utility/ErrorText";
import ArrowDownTrayIcon from "@heroicons/react/24/outline/ArrowDownTrayIcon";
import ShareIcon from "@heroicons/react/24/outline/ShareIcon";
import EnvelopeIcon from "@heroicons/react/24/outline/EnvelopeIcon";
import EllipsisVerticalIcon from "@heroicons/react/24/outline/EllipsisVerticalIcon";
import ArrowPathIcon from "@heroicons/react/24/outline/ArrowPathIcon";
import Datepicker from "react-tailwindcss-datepicker";
import SuspenseContent from "../../components/admin/common/SuspenseContent";
import Nav from "../../components/admin/Nav";
import { useSelector, useDispatch } from "react-redux";
import { removeNotificationMessage } from "../../components/admin/common/headerSlice";
import RightSidebar from "../../components/admin/common/RightSidebar";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import ReportSchema from "../../validation-schemas/ReportSchema";
import TitleCard from "../../components/admin/common/TitleCard";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { saveAs } from "file-saver";

const CancelSubscriptionBySubscriber = () => {
  const [navigateUrl, setNavigateUrl] = useState([]);
  const [userReport, setUserReport] = useState([]);
  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);
  const [orderDataSet, setOrderDataSet] = useState([]);
  const tableData = {};
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();
  const statsData = [];
  const [dateValue, setDateValue] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const handleDatePickerValueChange = (newValue) => {
    //console.log("newValue:", newValue);
    setDateValue(newValue);
    //updateDashboardPeriod(newValue)
  };
  const authInfo = JSON.parse(localStorage.getItem("authInfo"));
  const location = useLocation();
  console.log("authInfo=", authInfo);
  let [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  let [userid, setUserid] = useState(authInfo ? authInfo.id : null);
  const navigate = useNavigate();
  const { newNotificationMessage, newNotificationStatus } = useState("");
  const apiUrl = "subscription-cancelledby-subscriber";

  useEffect(() => {
    if (newNotificationMessage !== "") {
      if (newNotificationStatus === 1)
        NotificationManager.success(newNotificationMessage, "Success");
      if (newNotificationStatus === 0)
        NotificationManager.error(newNotificationMessage, "Error");
      dispatch(removeNotificationMessage());
    }
    firstRenderReport();
    
  }, []);
  toast.configure();

  const firstRenderReport = () => {
    axios
      .get(`admin/${apiUrl}`)
      .then((response) => {
        if (response.data.status) {
          toast.success(response.data.message, {
            position: "top-center",
            autoClose: 3000,
          });
          setUserReport(response.data.data);
          var ambassadorData = response.data.data;
          let ambassadorDataArray = [];
          ambassadorData.forEach(function (value) {
            if (value.userId) {
              ambassadorDataArray.push({
                Subscriber_firstname: value.userId.firstname || 'N/A',
                Subscriber_lastname: value.userId.surname || 'N/A',
                cancellation_date: value.cancellation_date || 'N/A',
              });
            }
          });
          var columnsData = [
            {
              name: "SUBSCRIBER FIRST NAME",
              selector: (row, i) => row.Subscriber_firstname,
              cell: (row) => <span>{row.Subscriber_firstname}</span>,
              sortable: true,
            },
            {
              name: "SUBSCRIBER LAST NAME",
              selector: (row, i) => row.Subscriber_lastname,
              cell: (row) => <span>{row.Subscriber_lastname}</span>,
              sortable: true,
            },  
            {
                name: "DATE OF HVG SUBSCRIPTION CANCELLATION",
                selector: (row, i) => row.cancellation_date,
                cell: (row) => {
                  const date = new Date(row.cancellation_date);
                  const day = date.getDate();
                  const month = date.toLocaleString('en-us', { month: 'short' });
                  const year = date.getFullYear();
                  const formattedDate = `${day} ${month}, ${year}`;
                  return <span>{formattedDate}</span>;
                },
                sortable: true,
              },
          ];
          setColumns(columnsData);
          setOrderDataSet(ambassadorDataArray);
          console.log(userReport);
        }
      })
      .catch((error) => {
        toast.dismiss();
        if (error.response) {
          //resetForm();
          toast.error(error.response.data.message, { autoClose: 3000 });
        }
        console.log(error);
      });
    console.log("apiUrl=" + apiUrl);
  }

  /***********************************************************************/
  /***********************************************************************/
  const handleSubmit = (values, { resetForm }) => {
    console.log("This is ambassador handleSubmit values check:",values);
    let urls = "subscription-cancelledby-subscriber";
    if (values.start_date) {
      urls += "/" + values.start_date;
    }
    if (values.end_date) {
      urls += "/" + values.end_date;
    }
    axios
      .get(`admin/${urls}`, values)
      .then((response) => {
        if (response.data.status) {
          toast.success(response.data.message, {
            position: "top-center",
            autoClose: 3000,
          });
          setUserReport(response.data.data);
          console.log('userReport datewise:',response.data.data);
          console.log('userReport=',userReport);
          var ambassadorData = response.data.data;
          let ambassadorDataArray = [];
          ambassadorData.forEach(function (value) {
            if (value.userId) {
            ambassadorDataArray.push({
              Subscriber_firstname: value.userId.firstname || 'N/A',
              Subscriber_lastname: value.userId.surname || 'N/A',
              cancellation_date: value.cancellation_date || 'N/A',
            });
          }
          });
          setOrderDataSet(ambassadorDataArray);
        }
      })
      .catch((error) => {
        toast.dismiss();
        if (error.response) {
          resetForm();
          toast.error(error.response.data.message, { autoClose: 3000 });
        }
        console.log(error);
      });
  };
  const handleResetButton = (resetForm) => {
    resetForm();
    firstRenderReport();  
  };

  const handleDownloadReport = () => {
    const formattedData = orderDataSet.map(({ Subscriber_firstname, Subscriber_lastname, referral_code, cancellation_date }) => [
      Subscriber_firstname,
      Subscriber_lastname,
      referral_code,
      cancellation_date,
    ]);
  
    const csvContent = [
      ["SUBSCRIBER FIRST NAME", "SUBSCRIBER LAST NAME", "AMBASSADOR REFERRAL CODE", "DATE OF SUBSCRIPTION CANCELLATION"],
      ...formattedData
    ]
      .map(row => row.join(","))
      .join("\n");
  
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "subscription_cancelled_by_subscriber.csv");
  };
  

  return (
    <>
      <div className="drawer drawer-mobile">
        <input
          id="left-sidebar-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content flex flex-col ">
          <Header />
          <main className="flex-1 overflow-y-auto pt-2 px-2  bg-base-200">

            {/* report section */}
            <div className="bg-zinc-50 px-3 py-3 rounded-xl bg-white shadow-mx border border-zinc-200">
              <div className="text-xl font-semibold py-1 px-2">
              Subscription cancelled by Subscriber
              </div>
              <div className="divider mt-2"></div>
              <div className="">
                <div className="flex w-[100%] align-center">
                  <Formik
                    initialValues={{
                      start_date: "",
                      end_date: "",
                    }}
                    validationSchema={ReportSchema}
                    // onSubmit={(values, { resetForm }) => {
                    //   handleSubmit(values, { resetForm });
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
                        <Field
                          name="start_date"
                          type="date"
                          className="input input-bordered w-full"
                        />
                        <ErrorMessage
                          name="start_date"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>

                      <div className="flex flex-col">
                        <label htmlFor="end_date">End Date</label>
                        <Field
                          name="end_date"
                          type="date"
                          className="input input-bordered w-full"
                        />
                        <ErrorMessage
                          name="end_date"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>
                      <div className="flex align-center justify-between mt-6">
                        <button
                          type="submit"
                          className="btn btn-primary mr-2 inline-block px-4 py-3 text-sm font-semibold text-center  text-white uppercase transition duration-200 ease-in-out bg-indigo-600 rounded-md cursor-pointer hover:bg-indigo-700"
                        >
                          Search
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary mr-2 inline-block px-4 py-3 text-sm font-semibold text-center  text-white uppercase transition duration-200 ease-in-out bg-indigo-600 rounded-md cursor-pointer hover:bg-indigo-700"
                          onClick={() => handleResetButton(resetForm)}
                        >
                          Reset
                        </button>

                        <button
                          type="button"
                          className="btn btn-primary inline-block px-4 py-3 text-sm font-semibold text-center text-white uppercase transition duration-200 ease-in-out bg-indigo-600 rounded-md cursor-pointer hover:bg-indigo-700"
                          onClick={handleDownloadReport}
                        >
                          Export
                        </button>
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
  );
};

export default CancelSubscriptionBySubscriber;
