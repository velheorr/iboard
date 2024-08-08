import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useState} from "react";
import './header.scss'
import ThemeSwitch from "../../elements/ThemeSwitch/ThemeSwitch";
import {Divider, FormControlLabel, ListItemIcon, ListItemText, Tooltip, Typography} from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import {useSelector} from "react-redux";
import Box from "@mui/material/Box";
import {useTheme} from "../../hook/useTheme";
import Switch from "@mui/material/Switch";




export default function DropMenu({user, toggleTheme, handleLogout}) {
    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [switchState, setSwitchState] = useState(true)
    const unAuthTheme = ()=>{
        let x = localStorage.getItem('theme')
        setSwitchState(!switchState)
        let y = x === 'dark' ? 'light' : 'dark'
        toggleTheme(y)
        handleClose()
    }
    const tooltipState = switchState ? 'Вкл. темную тему' : 'Вкл. светлую тему'

    return (
        <Box className='disp' >
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <div className='name' style={{color: useTheme('text')}}>{user}</div>
                <div className='role' style={{color: useTheme('text')}}>Администратор</div>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{'aria-labelledby': 'basic-button', sx: {
                        backgroundColor: useTheme('select'),
                        color: useTheme('text')
                    }}}
                sx={{ width: 320}}
            >
                {/*<MenuItem ><ThemeSwitch toggleTheme={toggleTheme} handleClose={handleClose}/></MenuItem>*/}
                <MenuItem>
                    <Tooltip title={<Typography variant="body2" gutterBottom>{tooltipState}</Typography>}>
                        <FormControlLabel control={<Switch onClick={unAuthTheme} checked={switchState} color="success"/>} label="Смена темы" />
                    </Tooltip>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleLogout}>
                        <ListItemIcon><LogoutIcon fontSize="small" sx={{color: useTheme('text')}}/></ListItemIcon>
                        <ListItemText>Выход</ListItemText>
                </MenuItem>
            </Menu>
        </Box>
    );
}
