import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    width: 1,

}

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        /*openModal: (state) => {
            state.open = state.open !== true;
        },*/
        widthTrue: (state, action) => {
            state.width = 540;
        },
    },
});

const {actions, reducer} = sidebarSlice;

export default reducer;
export const {
    widthTrue,
} = actions;