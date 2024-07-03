import { configureStore } from '@reduxjs/toolkit';
import header from "../pages/header/HeaderSlice";
import modal from '../elements/Modal/ModalSlice'
import sidemenu from "../pages/sidebar/SideMenuSlice";
import realisation from "../pages/realization/js/RealizationSlice"
import economics from "../pages/economics/js/EconomicsSlice";



const store = configureStore({
  reducer: {header, modal, sidemenu, realisation, economics},
  middleware: getDefaultMiddleware => getDefaultMiddleware(
      {
        serializableCheck: false,
      }
  ),
  devTools: process.env.NODE_ENV !== 'production',

})

export default store;

