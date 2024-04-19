import './layout.scss'
import {Outlet} from "react-router-dom";
import Header from "./header/Header";
import {useSelector} from "react-redux";
import {palette} from "../utils/theme";
import SideMenu from "./sidebar/sideMenu";

import lion from '../img/bg_lionRight.png'

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
                backgroundImage: `url(${lion})`, backgroundRepeat: 'no-repeat',backgroundPosition: 'right',backgroundSize: '600px', backgroundBlendMode: 'hard-light'
            }} >
                <SideMenu/>
                <div className='pageContainer'>
                    <Outlet />
                </div>

            </main>

            <footer>

            </footer>
        </>
    );
};

export  {Layout};