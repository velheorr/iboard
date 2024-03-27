import {useState} from "react";


export const useSidebar = ()=> {
    const [sidebarState, setSidebarState] = useState(false);

    const sideBarOpen = () => {
        setSidebarState(true);
    };

    const sideBarClose = () => {
        setSidebarState(false);
    };

    return {sideBarOpen, sideBarClose, sidebarState}
}