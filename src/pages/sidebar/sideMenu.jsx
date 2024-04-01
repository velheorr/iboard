import React, {useEffect} from 'react';
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";

import '../layout.scss'
import {Typography} from "@mui/material";
import {palette} from "../../utils/theme";
import {useDispatch, useSelector} from "react-redux";


import guardian_black from '../../img/sidebar/guardian_black.png'
import {setActive} from "./SideMenuSlice";



const SideMenu = () => {
    const mode = useSelector(state => state.header.mode);
    const menuList = useSelector(state => state.sidemenu.menuList);
    const dispatch = useDispatch()


    const renderList = (data)=>{
        if (data){
            return data.map(item => {
                return <ListItem disablePadding key={item.id} className={item.active ? 'active' : null} onClick={()=> dispatch(setActive(item.id))}>
                    <ListItemButton sx={{height: 48,px: 2.5}}>
                        <img className='menuIcon' src={item.icon} alt="economics" style={{filter: mode === "dark" ? 'brightness(0) invert(1)': null}}/>
                        <div>{item.name}</div>
                    </ListItemButton>
                </ListItem>
            })
        }
      }
    const sidebarData = renderList(menuList)


    return (
        <div className='sideMenu' style={{background: mode === "dark" ? '#7C7C7C' : palette.grey[700]}}>
            <List>
                {
                    sidebarData? sidebarData : ''
                }

                <ListItem disablePadding>
                    <ListItemButton sx={{height: 80,px: 2.5}}>
                        <img className='menuIcon' src={guardian_black} alt="economics"/>
                         <div>
                            <Typography component="div">Потери</Typography>
                            <Typography component="div">Разрывы</Typography>
                            <Typography component="div">Развитие</Typography>
                        </div>
                    </ListItemButton>
                </ListItem>
            </List>
        </div>
    );
};

export default SideMenu;