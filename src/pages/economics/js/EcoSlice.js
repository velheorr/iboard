import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    monthDetails: '',
    yearDetails: '',
}

const ecoSlice = createSlice({
    name: 'eco',
    initialState,
    reducers: {
        setDetails: (state, action) => {
            state.monthDetails = action.payload.month
            state.yearDetails = action.payload.year
        },
    },

});

const {actions, reducer} = ecoSlice;

export default reducer;
export const {
    setDetails,
} = actions;