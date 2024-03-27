import React from 'react';
import './layout.scss'
import {Outlet} from "react-router-dom";
import Header from "./header/Header";
import {useSelector} from "react-redux";
import {palette} from "../utils/theme";
import Sidebar from "./sidebar/sidebar";

const Layout = () => {
    const mode = useSelector(state => state.header.mode);

    return (
        <>
            <header>
                <Header/>
            </header>
            <main style={{
                background: mode === "dark" ? palette.primary[500] : palette.white,
                color: mode === "dark" ? palette.white : palette.black,

            }}>
                <Sidebar/>
                <Outlet/>
            </main>

            <footer>

            </footer>
        </>
    );
};

export  {Layout};