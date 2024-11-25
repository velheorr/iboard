import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    monthDetails: '',
    yearDetails: '',
    year: null,
    month: null,
    work: null,
    funnelDetails: null
}

const ecoSlice = createSlice({
    name: 'eco',
    initialState,
    reducers: {
        setDetails: (state, action) => {
            state.monthDetails = action.payload.month
            state.yearDetails = action.payload.year
        },
        setDate: (state, action) =>{
            state.year = action.payload.ecoYear
            state.month = action.payload.ecoMonth
            state.work = action.payload.ecoWork
        },
        setFunnelDetails: (state, action) =>{
            state.funnelDetails = action.payload
        },
    },

});

const {actions, reducer} = ecoSlice;

export default reducer;
export const {
    setDetails,setDate, setFunnelDetails
} = actions;