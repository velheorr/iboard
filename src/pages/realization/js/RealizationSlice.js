import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    realisationData: [],
    holdingList: [],
    zakazchikList: [],
    configuredRealizationData: [],
    filteredData: []

}

const realizationSlice = createSlice({
    name: 'realisation',
    initialState,
    reducers: {
        /*общая инфа*/
        setRealizationData: (state, action) => {
            state.realisationData = action.payload
        },
        /*список селектов для холдинга*/
        setHoldingList: (state, action) => {
            state.holdingList = action.payload
        },
        /*список селектов для заказчика*/
        setZakazchikList: (state, action) => {
            state.zakazchikList = action.payload
        },
        /*модифицированная инфа, основная для работы*/
        setConfiguredRealizationData: (state, action) => {
            state.configuredRealizationData = action.payload
        },
        setFilteredData: (state, action) => {
            state.filteredData = action.payload
        },
    },

});

const {actions, reducer} = realizationSlice;

export default reducer;
export const {
    setRealizationData, setHoldingList, setZakazchikList, setConfiguredRealizationData, setFilteredData
} = actions;