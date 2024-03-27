import { useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {widthTrue} from "../pages/sidebar/sidebarSlice";


export const useSidebar = ()=> {
    const [sidebarState, setSidebarState] = useState(false);
    const toggleSideBar = ()=>{

        setSidebarState(!sidebarState);
    }

    return [sidebarState, toggleSideBar]
}