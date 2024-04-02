import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    realisationData: [],

}

const realizationSlice = createSlice({
    name: 'realisation',
    initialState,
    reducers: {
        setRealizationData: (state, action) => {
            state.realisationData = action.payload
        },

    },
    extraReducers: (builder) => {
        /*        builder
                    .addCase(fetchData.fulfilled, (state, action) =>{
                        state.dataFromDB = action.payload
                    })*/
    }
});

const {actions, reducer} = realizationSlice;

export default reducer;
export const {
    setRealizationData
} = actions;