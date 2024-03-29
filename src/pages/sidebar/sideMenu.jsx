import React from 'react';
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";

import production_black from '../../img/sidebar/production_black.png'
import sales_black from '../../img/sidebar/sales_black.png'
import goal_black from '../../img/sidebar/goal_black.png'
import economics_black from '../../img/sidebar/economics_black.png'
import finance_black from '../../img/sidebar/finance_black.png'
import equality_black from '../../img/sidebar/equality_black.png'
import resources_black from '../../img/sidebar/resources_black.png'
import guardian_black from '../../img/sidebar/guardian_black.png'



import '../layout.scss'
import {Typography} from "@mui/material";

const SideMenu = () => {

    return (
        <div className='sideMenu'>
            <List>
                <ListItem disablePadding>
                    <ListItemButton sx={{height: 48,px: 2.5}}>
                        <img className='menuIcon' src={production_black} alt="economics"/>
                        <ListItemText primary='Реализация'/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton sx={{height: 48,px: 2.5}}>
                        <img className='menuIcon' src={sales_black} alt="economics"/>
                        <ListItemText primary='Продажи'/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton sx={{height: 48}}>
                        <img className='menuIcon' src={goal_black} alt="economics"/>
                        <ListItemText primary='Цели показатели'/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton sx={{height: 48,px: 2.5}}>
                        <img className='menuIcon' src={economics_black} alt="economics"/>
                        <ListItemText primary='Экономика'/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton sx={{height: 48,px: 2.5}}>
                        <img className='menuIcon' src={finance_black} alt="economics"/>
                        <ListItemText primary='Финансы'/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton sx={{height: 48,px: 2.5}}>
                        <img className='menuIcon' src={equality_black} alt="economics"/>
                        <ListItemText primary='Баланс'/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton sx={{height: 48,px: 2.5}}>
                        <img className='menuIcon' src={resources_black} alt="economics"/>
                        <ListItemText primary='Ресурсы'/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton sx={{height: 80,px: 2.5}}>
                        <img className='menuIcon' src={guardian_black} alt="economics"/>
                        {/*<ListItemText primary='Потери Разрывы Развитие'/>*/}
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