import React, {useMemo} from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Page404 from "./pages/404/Page404";
import {Layout} from "./pages/Layout";
import {Login} from "./pages/login/Login";

import {RequireAuth} from "./hoc/RequireAuth";
import {AuthProvider} from "./hoc/AuthProvider";

import {createTheme, ThemeProvider} from "@mui/material";
import {themeMode} from "./utils/theme";
import {useSelector} from "react-redux";
import {Register} from "./pages/login/Register";
import {ResetPassword} from "./pages/login/ResetPassword";

import TransitionsModal from "./elements/Modal/Modal";
import Realization from "./pages/realization/Realization";
import Auth from "./pages/login/Auth";
import Economics from "./pages/economics/Economics";
import Resources from "./pages/resources/Resources";
import EconomicsDetails from "./pages/economics/EconomicsDetails";
import VersionLog from "./pages/versionLog/VersionLog";
import Econ from "./pages/finance/Econ";

function App() {
    const mode = useSelector(state => state.header.mode);
    const theme = useMemo(
        () => createTheme(themeMode),
    [mode]
);

    return (
        <AuthProvider>
            <ThemeProvider theme={theme}>
                <Routes>
                    <Route element={<Auth/>}>
                        <Route path='login' element={<Login/>}/>
                        <Route path='register' element={<Register/>}/>
                        <Route path='resetPassword' element={<ResetPassword/>}/>
                        <Route path='resetPassword/:reset' element={<ResetPassword/>}/>
                    </Route>


                    <Route path='*' element={<Page404/>}/>
                    <Route path='/' element={<Layout/>}>
                        <Route index element={<RequireAuth><Realization/></RequireAuth>}/>
                        <Route  path='/realisation' element={<RequireAuth><Realization /></RequireAuth>}/>
                        <Route  path='/dynamic' element={<RequireAuth><Page404 /></RequireAuth>}/>
                        <Route  path='/sales' element={<RequireAuth><Page404 /></RequireAuth>}/>
                        <Route  path='/goals' element={<RequireAuth><Page404 /></RequireAuth>}/>
                        <Route  path='/economics' element={<RequireAuth><Economics /></RequireAuth>}/>
                        <Route  path='/economics/details' element={<RequireAuth><EconomicsDetails /></RequireAuth>}/>
                        <Route  path='/finance' element={<RequireAuth><Econ /></RequireAuth>}/>
                        <Route  path='/balance' element={<RequireAuth><Page404 /></RequireAuth>}/>
                        <Route  path='/resources' element={<RequireAuth><Resources /></RequireAuth>}/>
                        <Route  path='/lost_develop' element={<RequireAuth><Page404 /></RequireAuth>}/>
                        <Route path='/versionLog' element={<VersionLog/>}/>
                    </Route>

                </Routes>
                <TransitionsModal/>
            </ThemeProvider>
        </AuthProvider>
    );
}


export default App;