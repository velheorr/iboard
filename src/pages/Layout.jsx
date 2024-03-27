import React, {useEffect} from 'react';
import './layout.scss'
import {Outlet} from "react-router-dom";
import Header from "./header/Header";
import {useSelector} from "react-redux";
import {palette} from "../utils/theme";
import Sidebar from "./sidebar/sidebar";
import Box from "@mui/material/Box";

const Layout = () => {
    const mode = useSelector(state => state.header.mode);
    const width = useSelector(state => state.sidebar.width);
    console.log(width)


    useEffect(()=>{

    }, [width])



    return (
        <>
            <header>
                <Header/>
            </header>

            <main style={{
                background: mode === "dark" ? palette.primary[500] : palette.white,
                color: mode === "dark" ? palette.white : palette.black,
                maxWidth: `calc (90% - ${width}px)`
            }}>
                <Sidebar/>
                <Outlet />
            </main>

            <footer>

            </footer>
        </>
    );
};

export  {Layout};