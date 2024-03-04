import React, { useEffect, useState } from "react"
import moment from "moment";
import { useDispatch, useSelector } from "react-redux"
import { showNotification } from "../../components/admin/common/headerSlice"
import TitleCard from "../../components/admin/common/TitleCard"
//import { RECENT_TRANSACTIONS } from "../../utils/dummyData"
import { toast } from 'react-toastify';
import Nav from '../../components/admin/Nav';
import RightSidebar from '../../components/admin/common/RightSidebar';
import TrashIcon from '@heroicons/react/24/outline/TrashIcon'
import Header from "../../components/admin/Header";
import Footer from "../../components/admin/Footer";
import axios from "axios";
import ActiveAgentsModal from '../../containers/admin/modal/ActiveAgentsModal';
//import { openModal } from '../../components/admin/common/modalSlice';
//import { deleteLead, getLeadsContent,getSubscribersContent } from "../../containers/admin/modal_slice/SubscriptionDetailsSlice"
//import { CONFIRMATION_MODAL_CLOSE_TYPES, MODAL_BODY_TYPES } from '../../utils/globalConstantUtil'
//import { CONFIRMATION_MODAL_CLOSE_TYPES, MODAL_BODY_TYPES } from '../../components/admin/utils/globalConstantUtil';

const ActiveAgents = () => {

    useEffect(() => {
        activeAgents();
    }, []);
    const [agentsActive, setAgentsActive] = useState("");
    const [viewAgentId, setViewAgentId] = useState("");
    const [showModal, setShowModal] = useState(false);
    
    const removeFilter = () => {
        //setTrans(RECENT_TRANSACTIONS)
    }
    /***********************************************************************/
    /***********************************************************************/
    
    /**
     * Get Users list
     * 
     */
    const activeAgents = () => {
        axios.get('admin/get-active-agents').then(response => {
                toast.dismiss();
    
                if (response.data) {
                    console.log(response.data)
                    if(response.data.status) {
                        setAgentsActive(response.data.data);
                        console.log(response.data.data)
                    }
                }
            }).catch(error => {
                toast.dismiss();
                if (error.response) {
                    toast.error('Error while getting data!', { position: "top-center",autoClose: 3000 });
                }
            });
        
    }
    /***********************************************************************/
    /***********************************************************************/
    /*const applyFilter = (params) => {
        let filteredTransactions = agentsubscriptions.filter((t) => {return t.plan_name == params})
        setAgentSubscriptions(filteredTransactions)
    }*/
    /***********************************************************************/
    /***********************************************************************/
    // Search according to name
    /*const applySearch = (value) => {
        let filteredTransactions = agentsubscriptions.filter((t) => {return t.plan_name.toLowerCase().includes(value.toLowerCase()) ||  t.plan_name.toLowerCase().includes(value.toLowerCase())})
        setAgentSubscriptions(filteredTransactions)
    }*/
    /***********************************************************************/
    /***********************************************************************/
    const openModal = (id) => {
        setViewAgentId(id)
        setShowModal(true)
    }
    /***********************************************************************/
    /***********************************************************************/
    const deleteAgent = (id) => {
        toast.dismiss();
    
        axios.delete(`admin/delete-agent/${id}`).then(response =>{
            if (response.data) {
                if(response.data.status) {

                    const activeAgent= agentsActive.filter(agent=> agent._id != id);
                    setAgentsActive(activeAgent);

                    toast.dismiss()
                    toast.success('Agent delete successfull!', { position: "top-center",autoClose: 3000 });
                }
            }
        }).catch((error) =>{
            toast.dismiss();
            if (error.response) {
                toast.error('Error while delete agent!', { position: "top-center",autoClose: 3000 });
            }
        }) 

    }
    return (
        <>
            {showModal && viewAgentId ? (
                        <>
                        <ActiveAgentsModal title="Agent Details" setShowModal={setShowModal} agentId={viewAgentId}/>
                        </>
                    ) : null}
            <div className="drawer drawer-mobile">
                <input id="left-sidebar-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">
                    {/*<TitleCard title="Subscription" topMargin="mt-2" TopSideButtons={<TopSideButtons applySearch={applySearch} applyFilter={applyFilter} removeFilter={removeFilter}/>}>*/}
                    <Header/>
                    
                    <TitleCard title="Active Agents" topMargin="mt-2" TopSideButtons="">
                        {console.log('agentsActive=',agentsActive)}
                        {/* Team Member list in table format loaded constant */}
                        <div className="overflow-x-auto w-full">
                            <table className="table w-full">
                                <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email Id</th>
                                    <th>Id Number</th>
                                    <th>Mobile Number</th>
                                    <th>Status</th>
                                    <th>Created At</th>
                                    <th>Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {agentsActive && agentsActive.map && agentsActive.map((l, k) => {
                                            return(
                                                <tr key={k}>
                                                    <td>
                                                        <div className="flex items-center space-x-3">
                                                            {/*<div className="avatar">
                                                                <div className="mask mask-circle w-12 h-12">
                                                                    <img src={l.avatar} alt="Avatar" />
                                                                </div>
                                                            </div>*/}
                                                            <div>
                                                                <div className="font-bold">
                                                                    <div className="font-bold">{l.firstname}</div>
                                                                    <div className="text-sm opacity-50">{l.surname}</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>{l.email}</td>
                                                    <td>{l.id_number}</td>
                                                    <td>{l.mobile_number}</td>
                                                    <td>{l.is_active}</td>
                                                    <td>{moment(l.createdAt).format("YYYY-MM-DD")}</td>
                                                    <td><a href="#" className="inline-block px-4 py-3 text-sm font-semibold text-center text-white uppercase transition duration-200 ease-in-out bg-indigo-600 rounded-md cursor-pointer hover:bg-indigo-700" onClick={() => openModal(l.id)}>View</a>
                                                    <button className="btn btn-square btn-ghost" onClick={() => deleteAgent(l.id)}><TrashIcon className="w-5"/></button></td>
                                                </tr>
                                            )
                                        })
                                    
                                    }
                                </tbody>
                            </table>
                        </div>
                    </TitleCard>

                </div>
                <Nav/>
            </div>
            <RightSidebar />
            <Footer/>
        </>
    )
}


export default ActiveAgents