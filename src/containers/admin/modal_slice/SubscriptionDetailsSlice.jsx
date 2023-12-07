import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
/*
export const getLeadsContent = createAsyncThunk('/leads/content', async () => {
	//const response = await axios.get('/api/users?page=2', {})
	//return response.data;
    return '<div>This is testing</div>';
})*/
export const getSubscribersContent = createAsyncThunk('/admin/agent-subscription-by-id', async (id,{ extra }) => {
	const response = await axios.get(`/admin/agent-subscription-by-id/${id}`, {})
	console.log('response=',response.data);
    return response.data;    
})

export const SubscriptionDetailsSlice = createSlice({
    name: 'subscriptionDetails',
    initialState: {
        isLoading: false,
        leads : []
    },
    reducers: {

        addNewLead: (state, action) => {
            
            let {newLeadObj} = action.payload
            state.leads = [...state.leads, newLeadObj]
        },

        deleteLead: (state, action) => {
            let {index} = action.payload
            state.leads.splice(index, 1)
        },

    },

    extraReducers: {
		/*[getLeadsContent.pending]: state => {
			state.isLoading = true
		},
		[getLeadsContent.fulfilled]: (state, action) => {
			state.leads = action.payload.data
			state.isLoading = false
		},
		[getLeadsContent.rejected]: state => {
			state.isLoading = false
		},*/
        [getSubscribersContent.pending]: state => {
			state.isLoading = true
		},
		[getSubscribersContent.fulfilled]: (state, action) => {
			state.subscriptionDetails = action.payload.data
			state.isLoading = false
		},
		[getSubscribersContent.rejected]: state => {
			state.isLoading = false
		},
        
    }
})

export const { addNewLead, deleteLead } = SubscriptionDetailsSlice.actions

export default SubscriptionDetailsSlice.reducer