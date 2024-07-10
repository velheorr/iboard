import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    mode: '',
}

const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        setMode: (state, action) => {
            state.mode = action.payload
        },
    },
});

const {actions, reducer} = headerSlice;

export default reducer;
export const {
    setMode,
} = actions;