import { configureStore } from '@reduxjs/toolkit';
import header from "../pages/header/HeaderSlice";
import mainData from '../pages/main/MainSlice'
import modal from '../elements/Modal/ModalSlice'
import sidebar from "../pages/sidebar/sidebarSlice";


const store = configureStore({
  reducer: {header, mainData, modal, sidebar},
  middleware: getDefaultMiddleware => getDefaultMiddleware(
      {
        serializableCheck: false,
      }
  ),
  devTools: process.env.NODE_ENV !== 'production',

})

export default store;

