import React, {useEffect, useState} from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    Typography
} from "@mui/material";
import {useAuth} from "../../hook/useAuth";
import {useNavigate} from "react-router";
import './header.scss'
import {useDispatch, useSelector} from "react-redux";
import {setMode} from './HeaderSlice'
import DropMenu from "./DropMenu";
import {useTheme} from "../../hook/useTheme";


const Header = () => {
    const navigate = useNavigate();
    const {signOut,checkLogin, user} = useAuth()
    const dispatch = useDispatch();
    const activePageName = useSelector(state => state.sidemenu.activePageName);

    /* получить текущую тему*/
    const getTheme = localStorage.getItem('theme')

    // смена темы
    const toggleTheme = (newTheme) => {
        localStorage.setItem('theme', newTheme);
        dispatch(setMode(newTheme))
    }

    // разлогинить
    const handleLogout = () => {
        signOut()
    }

    const [time, setTime] = useState(new Date())
    const formattedTime = time.toLocaleTimeString().substring(0, 5);

    useEffect(() => {
        window.setInterval(() => setTime(new Date()), 60 * 1000);
        toggleTheme(getTheme)
        dispatch(setMode(getTheme))
        checkLogin()
    }, []);

    const ruDate = new Intl.DateTimeFormat("ru", {
        day: "numeric",
        month: "long",
        year: "numeric",
    })
        .format(new Date())
        /*.replace(/(\u0433\.?)/, "");*/


      return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{background: useTheme('bg', 'header')}}>
                <Toolbar  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pl: '0 !important', pr: '0 !important'}}>
                    <Box className='logo' >
                        <img src={useTheme('logo')} alt="iBoard" style={{width: '190px'}}/>
                        {/*<Typography component="div" sx={{fontWeight: 600, fontSize: '14px', color: '#4cb242'}}>iBOARD</Typography>*/}
                        <Typography className='appName neonGreen' style={{color: useTheme('neonGreen')}} component="div">iBOARD</Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexGrow: 1,
                        justifyContent: 'space-between',
                        color: useTheme('text')}}
                    >
                        <Box sx={{pl: '24px'}}>
                            <Typography  component="div">{formattedTime}</Typography>
                            <Typography component="div">{ruDate}</Typography>
                        </Box>
                        {/*<Typography variant="h6" component="div" sx={{fontWeight: 600}}>{activePageName}</Typography>*/}
                        <Typography className='neonGreen'  component="div" sx={{fontSize: 24, fontWeight: 600, color: useTheme('neonGreen')}}>{activePageName}</Typography>
                        <DropMenu user={user} toggleTheme={toggleTheme} handleLogout={handleLogout} />
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;