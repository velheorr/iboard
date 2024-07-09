import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    econ1: {},
    econ2: {},

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
    },

});

const {actions, reducer} = economicsSlice;

export default reducer;
export const {
    setEconData,setEconData2
} = actions;