import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    mode: '',
}

const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        /*setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
        },*/
        setMode: (state, action) => {
            console.log(action.payload)
            let newMode;
            if (action.payload) {
                newMode = 'light'
            } else {
                newMode = 'dark'
            }
            state.mode = newMode
        },
    },
});

const {actions, reducer} = headerSlice;

export default reducer;
export const {
    setMode,
} = actions;