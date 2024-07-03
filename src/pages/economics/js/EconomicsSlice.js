import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    list: [],

}

const economicsSlice = createSlice({
    name: 'economics',
    initialState,
    reducers: {
        /*список селектов для холдинга*/
        /*setHoldingList: (state, action) => {
            state.holdingList = action.payload
        },*/
    },

});

const {actions, reducer} = economicsSlice;

export default reducer;
export const {

} = actions;