import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    econ1: {},
    econ2: {},
    monthDetails: '',
    yearDetails: '',
    ecoDet1: {},
    ecoDet2: {},
    ecoDet3: {},

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
            console.log(action.payload)
            state.monthDetails = action.payload.month
            state.yearDetails = action.payload.year
        },
        setEcoDet: (state, action) => {
            if (action.payload.target === 'ecoDet1'){
                state.ecoDet1 = action.payload.eco
            } else if(action.payload.target === 'ecoDet2'){
                state.ecoDet2 = action.payload.eco
            } else {
                state.ecoDet3 = action.payload.eco
            }

        },
    },

});

const {actions, reducer} = economicsSlice;

export default reducer;
export const {
    setEconData, setEconData2,setDetails, setEcoDet
} = actions;