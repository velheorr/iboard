import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    monthDetails: '',
    yearDetails: '',
    year: null,
    month: null,
    work: null
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
            console.log(action.payload)
            state.year = action.payload.year
            state.month = action.payload.month
            state.work = action.payload.work
        }
    },

});

const {actions, reducer} = ecoSlice;

export default reducer;
export const {
    setDetails,setDate
} = actions;