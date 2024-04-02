import { configureStore } from '@reduxjs/toolkit';
import header from "../pages/header/HeaderSlice";
import mainData from '../pages/main/MainSlice'
import modal from '../elements/Modal/ModalSlice'
import sidemenu from "../pages/sidebar/SideMenuSlice";
import realisation from "../pages/realization/RealizationSlice"



const store = configureStore({
  reducer: {header, mainData, modal, sidemenu, realisation},
  middleware: getDefaultMiddleware => getDefaultMiddleware(
      {
        serializableCheck: false,
      }
  ),
  devTools: process.env.NODE_ENV !== 'production',

})

export default store;

