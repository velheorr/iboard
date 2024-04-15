import {createSlice} from '@reduxjs/toolkit'
import {configRealizationData} from "./configRealizationData";


const initialState = {
    realisationData: [],
    holdingList: [],
    zakazchikList: [],
    configuredRealizationData: []

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
        configRealizData: (state, action) => {
            state.configuredRealizationData = action.payload
        },
    },

});

const {actions, reducer} = realizationSlice;

export default reducer;
export const {
    setRealizationData, setHoldingList, setZakazchikList, configRealizData
} = actions;