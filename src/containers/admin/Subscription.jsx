import moment from "moment";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { showNotification } from "../../components/admin/common/headerSlice"
import TitleCard from "../../components/admin/common/TitleCard"
//import { RECENT_TRANSACTIONS } from "../../utils/dummyData"
import { toast } from 'react-toastify';
import Nav from '../../components/admin/Nav';
import RightSidebar from '../../components/admin/common/RightSidebar';
import FunnelIcon from '@heroicons/react/24/outline/FunnelIcon'
import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon'
import SearchBar from "../../components/admin/common/SearchBar";
import Header from "../../components/admin/Header";
import Footer from "../../components/admin/Footer";
import axios from "axios";
import { openModal } from '../../components/admin/common/modalSlice';
import { deleteLead, getLeadsContent,getSubscribersContent } from "../../containers/admin/modal_slice/SubscriptionDetailsSlice"
//import { CONFIRMATION_MODAL_CLOSE_TYPES, MODAL_BODY_TYPES } from '../../utils/globalConstantUtil'
import { CONFIRMATION_MODAL_CLOSE_TYPES, MODAL_BODY_TYPES } from '../../components/admin/utils/globalConstantUtil';

/*const TopSideButtons = ({removeFilter, applyFilter, applySearch}) => {

    const [filterParam, setFilterParam] = useState("")
    const [searchText, setSearchText] = useState("")
    const locationFilters = ["Paris", "London", "Canada", "Peru", "Tokyo"]
    
    const showFiltersAndApply = (params) => {
        applyFilter(params)
        setFilterParam(params)
    }

    const removeAppliedFilter = () => {
        removeFilter()
        setFilterParam("")
        setSearchText("")
    }

    useEffect(() => {
        if(searchText === ""){
            removeAppliedFilter()
        }else{
            applySearch(searchText)
        }
    }, [searchText])

    return(
        <div className="inline-block float-right">
            <SearchBar searchText={searchText} styleClass="mr-4" setSearchText={setSearchText}/>
            {filterParam != "" && <button onClick={() => removeAppliedFilter()} className="btn btn-xs mr-2 btn-active btn-ghost normal-case">{filterParam}<XMarkIcon className="w-4 ml-2"/></button>}
            <div className="dropdown dropdown-bottom dropdown-end">
                <label tabIndex={0} className="btn btn-sm btn-outline"><FunnelIcon className="w-5 mr-2"/>Filter</label>
                <ul tabIndex={0} className="dropdown-content menu p-2 text-sm shadow bg-base-100 rounded-box w-52">
                    {
                        locationFilters.map((l, k) => {
                            return  <li key={k}><a href="#" onClick={() => showFiltersAndApply(l)}>{l}</a></li>
                        })
                    }
                    <div className="divider mt-0 mb-0"></div>
                    <li><a href="#" onClick={() => removeAppliedFilter()}>Remove Filter</a></li>
                </ul>
            </div>
        </div>
    )
}*/


const Subscription = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        //dispatch(getLeadsContent());
        agentSubscription();
    }, []);
    const [agentsubscriptions, setAgentSubscriptions] = useState("");
    const subscriptionDetails = useSelector(state => state.subscriptionDetail);
    //const [agentsubscriptions, setAgentSubscriptions] = useSelector(state => state.lead)
    
    const removeFilter = () => {
        //setTrans(RECENT_TRANSACTIONS)
    }
    /***********************************************************************/
    /***********************************************************************/
    
    /**
     * Get Users courses list
     * 
     */
    const agentSubscription = () => {
        axios.get('admin/agent-subscription').then(response => {
                toast.dismiss();
    
                if (response.data) {
                    console.log(response.data)
                    if(response.data.status) {
                        setAgentSubscriptions(response.data.data);
                        console.log(response.data.data)
                    }
                    
                }
            }).catch(error => {
                toast.dismiss();
                if (error.response) {
                    toast.error('Code is not available', { position: "top-center",autoClose: 3000 });
                }
            });
        
    }
    /***********************************************************************/
    /***********************************************************************/
    const applyFilter = (params) => {
        let filteredTransactions = agentsubscriptions.filter((t) => {return t.plan_name == params})
        setAgentSubscriptions(filteredTransactions)
    }
    /***********************************************************************/
    /***********************************************************************/
    // Search according to name
    const applySearch = (value) => {
        let filteredTransactions = agentsubscriptions.filter((t) => {return t.plan_name.toLowerCase().includes(value.toLowerCase()) ||  t.plan_name.toLowerCase().includes(value.toLowerCase())})
        setAgentSubscriptions(filteredTransactions)
    }
    /***********************************************************************/
    /***********************************************************************/
    const openAddNewLeadModal = (id) => {
        dispatch(openModal({title : "Subscription Details", bodyType : MODAL_BODY_TYPES.SUBSCRIPTION_DETAIL,
            extraObject : {message : `Are you sure you want to delete this lead?`, type : CONFIRMATION_MODAL_CLOSE_TYPES.LEAD_DELETE, id}}))
        
    }
    /***********************************************************************/
    /***********************************************************************/
    return(
        <>
            <div className="drawer drawer-mobile">
                <input id="left-sidebar-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">
                    <Header/>
                    {/*<TitleCard title="Subscription" topMargin="mt-2" TopSideButtons={<TopSideButtons applySearch={applySearch} applyFilter={applyFilter} removeFilter={removeFilter}/>}>*/}
                    <TitleCard title="Subscription" topMargin="mt-2" TopSideButtons="">
                        {console.log('agentsubscriptions=',agentsubscriptions)}
                        {/* Team Member list in table format loaded constant */}
                        <div className="overflow-x-auto w-full">
                            <table className="table w-full">
                                <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Payment mode</th>
                                    <th>Payment Status</th>
                                    <th>Amount</th>
                                    <th>Is Recurring</th>
                                    <th>Transaction Date</th>
                                    <th>Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {agentsubscriptions && agentsubscriptions.map && agentsubscriptions.map((l, k) => {
                                            return(
                                                <tr key={k}>
                                                    <td>
                                                    {/* <p className="font-bold">{l.plan_name}</p> */}
                                                    {l.plan_name}
                                                    </td>
                                                    <td>{l.payment_mode}</td>
                                                    <td>{l.payment_status}</td>
                                                    <td>R{l.amount}</td>
                                                    <td>{l.is_recurring}</td>
                                                    <td>{moment(l.createdAt).format("YYYY-MM-DD")}</td>
                                                    <td><a href="#" className="inline-block px-4 py-3 text-sm font-semibold text-center text-white uppercase transition duration-200 ease-in-out bg-indigo-600 rounded-md cursor-pointer hover:bg-indigo-700" onClick={() => openAddNewLeadModal(l.id)}>View</a></td>
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


export default Subscription