import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    econ1: {},
    econ2: {},
    monthDetails: '',
    yearDetails: '',
}

const economicsSlice = createSlice({
    name: 'economics',
    initialState,
    reducers: {
        setEconData: (state, action) => {
            state.econ1 = action.payload
        },
        setEconData2: (state, action) => {
            state.econ2 = action.payload
        },
        setDetails: (state, action) => {
            state.monthDetails = action.payload.month
            state.yearDetails = action.payload.year
        },
    },

});

const {actions, reducer} = economicsSlice;

export default reducer;
export const {
    setEconData, setEconData2,setDetails,
} = actions;