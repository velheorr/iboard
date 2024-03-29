import { useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {widthTrue} from "../pages/sidebar/sidebarSlice";


export const useSidebar = ()=> {
    const [sidebarState, setSidebarState] = useState(false);
    const width = useSelector(state => state.sidebar.width);
    const dispatch = useDispatch()

    const toggleSideBar = ()=>{
        if (sidebarState){
            dispatch(widthTrue())
        }
        setSidebarState(!sidebarState);
    }

    return [sidebarState, toggleSideBar]
}