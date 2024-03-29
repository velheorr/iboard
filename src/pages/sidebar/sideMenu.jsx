import React from 'react';
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";

import '../layout.scss'
import {Typography} from "@mui/material";
import {palette} from "../../utils/theme";
import {useSelector} from "react-redux";

import production_black from '../../img/sidebar/production_black.png'
import sales_black from '../../img/sidebar/sales_black.png'
import goal_black from '../../img/sidebar/goal_black.png'
import economics_black from '../../img/sidebar/economics_black.png'
import finance_black from '../../img/sidebar/finance_black.png'
import equality_black from '../../img/sidebar/equality_black.png'
import resources_black from '../../img/sidebar/resources_black.png'
import guardian_black from '../../img/sidebar/guardian_black.png'



const SideMenu = () => {
    const mode = useSelector(state => state.header.mode);

    const menuList = [
        {
            id: 1,
            icon: production_black,
            name: 'Реализация'
        },
        {
            id: 2,
            icon: sales_black,
            name: 'Продажи'
        },
        {
            id: 3,
            icon: goal_black,
            name: 'Цели показатели'
        },
        {
            id: 4,
            icon: economics_black,
            name: 'Экономика'
        },
        {
            id: 5,
            icon: finance_black,
            name: 'Финансы'
        },
        {
            id: 6,
            icon: equality_black,
            name: 'Баланс'
        },
        {
            id: 7,
            icon: resources_black,
            name: 'Ресурсы'
        },
    ]




    return (
        <div className='sideMenu' style={{background: mode === "dark" ? '#7C7C7C' : palette.grey[700]}}>
            <List>
                {
                    menuList.map(item => {
                        return <ListItem disablePadding key={item.id}>
                            <ListItemButton sx={{height: 48,px: 2.5}}>
                                <img className='menuIcon' src={item.icon} alt="economics" style={{filter: mode === "dark" ? 'brightness(0) invert(1)': null}}/>
                                <div>{item.name}</div>
                            </ListItemButton>
                        </ListItem>
                    })
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