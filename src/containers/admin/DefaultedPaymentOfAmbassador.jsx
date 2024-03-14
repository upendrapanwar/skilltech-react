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
import SuspenseContent from "../SuspenseContent";
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

const DefaultedPaymentOfAmbassador = () => {
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

  const authInfo = JSON.parse(localStorage.getItem("authInfo"));
  const location = useLocation();
  console.log("authInfo=", authInfo);
  let [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  let [userid, setUserid] = useState(authInfo ? authInfo.id : null);
  const navigate = useNavigate();
  const { newNotificationMessage, newNotificationStatus } = useState("");
  const apiUrl = "defaulted-subscription-paymentof-ambassador";

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
        console.log("REports Data: ", response.data.data)
        if (response.data.status) {
          toast.success(response.data.message, {
            position: "top-center",
            autoClose: 3000,
          });
          setUserReport(response.data.data);
          var ambassadorData = response.data.data;
          let ambassadorDataArray = [];
          ambassadorData.forEach(function (value) {
            ambassadorDataArray.push({
                Ambassador_firstname: value.userid.firstname,
                Ambassador_lastname: value.userid.surname,
                referral_code: value.userid.referral_code,
                payment_status: value.payment_status,
            });
          });
          var columnsData = [
            
            {
                name: "AMBASSADOR FIRST NAME",
                selector: (row, i) => row.Ambassador_firstname,
                cell: (row) => row.Ambassador_firstname,
                sortable: true,
              },
              {
                name: "AMBASSADOR LAST NAME",
                selector: (row, i) => row.Ambassador_lastname,
                cell: (row) => row.Ambassador_lastname,
                sortable: true,
              },
              {
                name: "AMBASSADOR REFERRAL CODE",
                selector: (row, i) => row.referral_code,
                cell: (row) => <span>{row.referral_code}</span>,
                sortable: true,
              },              
            {
              name: "PAIMENT FAILURE REASON",
              selector: (row, i) => row.payment_status,
              cell: (row) => <span>{row.payment_status}</span>,
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
    let urls = "defaulted-subscription-paymentof-ambassador";
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
            ambassadorDataArray.push({
              Ambassador_firstname: value.userid.firstname,
              Ambassador_lastname: value.userid.surname,
              referral_code: value.userid.referral_code,
              payment_status: value.payment_status,
            });
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
              Defaulted Subscription Payment of Ambassador
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
                    onSubmit={(values, { resetForm }) => {
                      handleSubmit(values, { resetForm });
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
                          className="btn btn-primary inline-block px-4 py-3 text-sm font-semibold text-center  text-white uppercase transition duration-200 ease-in-out bg-indigo-600 rounded-md cursor-pointer hover:bg-indigo-700"
                        >
                          Search
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary inline-block px-4 py-3 text-sm font-semibold text-center  text-white uppercase transition duration-200 ease-in-out bg-indigo-600 rounded-md cursor-pointer hover:bg-indigo-700"
                          onClick={() => handleResetButton(resetForm)}
                        >
                          Reset
                        </button>

                        {/* <button
                          type="button"
                          className="btn btn-primary inline-block px-4 py-3 text-sm font-semibold text-center text-white uppercase transition duration-200 ease-in-out bg-indigo-600 rounded-md cursor-pointer hover:bg-indigo-700"
                        >
                          Export
                        </button> */}
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

export default DefaultedPaymentOfAmbassador;
