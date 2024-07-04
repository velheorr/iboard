import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    econ1: {},

}

const economicsSlice = createSlice({
    name: 'economics',
    initialState,
    reducers: {
        setEconData: (state, action) => {
            console.log(action.payload)
            state.econ1 = action.payload
        },
    },

});

const {actions, reducer} = economicsSlice;

export default reducer;
export const {
    setEconData
} = actions;