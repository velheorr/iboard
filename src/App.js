import React, {useMemo} from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Page404 from "./pages/404/Page404";
import {Layout} from "./pages/Layout";
import {Login} from "./pages/login/Login";

import {RequireAuth} from "./hoc/RequireAuth";
import {AuthProvider} from "./hoc/AuthProvider";
import Main from "./pages/main/Main";
import {createTheme, ThemeProvider} from "@mui/material";
import {themeMode} from "./utils/theme";
import {useSelector} from "react-redux";
import {Register} from "./pages/login/Register";
import {ResetPassword} from "./pages/login/ResetPassword";
import DetailedView from "./pages/main/subpages/DetailedView";
import TransitionsModal from "./elements/Modal/Modal";
import Realization from "./pages/realization/Realization";

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
                    <Route path='login' element={<Login/>}/>
                    <Route path='register' element={<Register/>}/>
                    <Route path='resetPassword' element={<ResetPassword/>}/>
                    <Route path='*' element={<Page404/>}/>
                    <Route path='/' element={<Layout/>}>
                        <Route index element={<RequireAuth><Realization/></RequireAuth>}/>
                        <Route  path='/detailedView' element={<RequireAuth><DetailedView /></RequireAuth>}/>

                        <Route  path='/main' element={<RequireAuth><Main /></RequireAuth>}/>

                        <Route  path='/realisation' element={<RequireAuth><Realization /></RequireAuth>}/>
                        <Route  path='/sales' element={<RequireAuth><Page404 /></RequireAuth>}/>
                        <Route  path='/goals' element={<RequireAuth><Page404 /></RequireAuth>}/>
                        <Route  path='/econimics' element={<RequireAuth><Page404 /></RequireAuth>}/>
                        <Route  path='/finance' element={<RequireAuth><Page404 /></RequireAuth>}/>
                        <Route  path='/balance' element={<RequireAuth><Page404 /></RequireAuth>}/>
                        <Route  path='/resources' element={<RequireAuth><Page404 /></RequireAuth>}/>
                        <Route  path='/lost_develop' element={<RequireAuth><Page404 /></RequireAuth>}/>

                    </Route>
                </Routes>
                <TransitionsModal/>
            </ThemeProvider>
        </AuthProvider>
    );
}


export default App;