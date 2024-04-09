import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    realisationData: [],
    holdingList: [],
    zakazchikList: [],


}

const realizationSlice = createSlice({
    name: 'realisation',
    initialState,
    reducers: {
        setRealizationData: (state, action) => {
            state.realisationData = action.payload
        },
        setHoldingList: (state, action) => {
            state.holdingList = action.payload
        },
        setZakazchikList: (state, action) => {
            state.zakazchikList = action.payload
        },
    },

});

const {actions, reducer} = realizationSlice;

export default reducer;
export const {
    setRealizationData, setHoldingList, setZakazchikList
} = actions;