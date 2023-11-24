import React, { useEffect, useState } from "react";
import { Chart as ChartJS } from 'chart.js';

import { Link, useNavigate, useLocation } from "react-router-dom";
import Header from "../../components/admin/Header";
import Footer from "../../components/admin/Footer";
import AdminLoginSchema from '../../validation-schemas/AdminLoginSchema';
import { Formik } from 'formik';
import axios from "axios";
import { toast } from 'react-toastify';
import ErrorText from "../../components/utility/ErrorText";
import ArrowDownTrayIcon  from '@heroicons/react/24/outline/ArrowDownTrayIcon'
import ShareIcon  from '@heroicons/react/24/outline/ShareIcon'
import EnvelopeIcon  from '@heroicons/react/24/outline/EnvelopeIcon'
import EllipsisVerticalIcon  from '@heroicons/react/24/outline/EllipsisVerticalIcon'
import ArrowPathIcon from "@heroicons/react/24/outline/ArrowPathIcon";
import Datepicker from "react-tailwindcss-datepicker";
import SuspenseContent from '../SuspenseContent';
import Nav from '../../components/admin/Nav';
import { useSelector, useDispatch } from 'react-redux'
import  {  removeNotificationMessage } from "../../components/admin/common/headerSlice";
import RightSidebar from '../../components/admin/common/RightSidebar';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const AdminDashboard = () => {
    const periodOptions = [
        {name : "Today", value : "TODAY"},
        {name : "Yesterday", value : "YESTERDAY"},
        {name : "This Week", value : "THIS_WEEK"},
        {name : "Last Week", value : "LAST_WEEK"},
        {name : "This Month", value : "THIS_MONTH"},
        {name : "Last Month", value : "LAST_MONTH"},
    ]
    const dispatch = useDispatch()
    const statsData = [];

    const [dateValue, setDateValue] = useState({ 
        startDate: new Date(), 
        endDate: new Date() 
    }); 
    
    const handleDatePickerValueChange = (newValue) => {
        console.log("newValue:", newValue); 
        setDateValue(newValue); 
        //updateDashboardPeriod(newValue)
    }
    const authInfo = JSON.parse(localStorage.getItem("authInfo"));
    const location = useLocation();
    console.log('authInfo=',authInfo);
    let [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    let [userid, setUserid] = useState(authInfo ? authInfo.id : null);
    const navigate = useNavigate();
    const {newNotificationMessage, newNotificationStatus} = useState('')
    
    console.log('authInfo=',authInfo);
    useEffect(() => {
        if(newNotificationMessage !== ""){
            if(newNotificationStatus === 1)NotificationManager.success(newNotificationMessage, 'Success')
            if(newNotificationStatus === 0)NotificationManager.error( newNotificationMessage, 'Error')
            dispatch(removeNotificationMessage())
        }
    }, []);
    toast.configure();

    /***********************************************************************/
    /***********************************************************************/
    
    return (
        <>
            <div className="drawer drawer-mobile">
            <input id="left-sidebar-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col ">
            <Header/>
            <main className="flex-1 overflow-y-auto pt-8 px-6  bg-base-200">
            
                <div className="h-16"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="">
                        <Datepicker 
                            containerClassName="w-72 " 
                            value={dateValue} 
                            theme={"light"}
                            inputClassName="input input-bordered w-72" 
                            popoverDirection={"down"}
                            toggleClassName="invisible"
                            onChange={handleDatePickerValueChange} 
                            showShortcuts={true} 
                            primaryColor={"white"} 
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
                </main>
            </div>
            <Nav/>
            </div>
            <RightSidebar />
            <Footer/>
        </>
    )
}

export default AdminDashboard;
