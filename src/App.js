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
import Auth from "./pages/login/Auth";
import Resources from "./pages/resources/Resources";
import VersionLog from "./pages/versionLog/VersionLog";
import Econ from "./pages/economics/Econ";
import Goals from "./pages/goals/Goals";
import KMoney from "./pages/finance/kmoney/KMoney";
import EconomicsDetails from "./pages/economics/subPagesEcon/EconomicsDetails";
import Dynamics from "./pages/realization/Dynamics/Dynamics";
import Proc from "./pages/realization/Proc/Proc";
import KDetails from "./pages/finance/kmoney/subPages/KDetails";
import Proizvodstvo from "./pages/realization/Proizvodstvo/Proizvodstvo";
import EmployeeLeave from "./pages/hr/EmployeeLeave/EmployeeLeave";
import EmployeePortret from "./pages/hr/EmployeePortret/EmployeePortret";
import Kadru from "./pages/hr/Kadru/Kadru";
import GoalUser from "./pages/goals/GoalUser/GoalUser";

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
                        <Route index element={<RequireAuth><Proc/></RequireAuth>}/>
                        <Route  path='/proc' element={<RequireAuth><Proc /></RequireAuth>}/>
                        <Route  path='/proizvodstvo' element={<RequireAuth><Proizvodstvo /></RequireAuth>}/>
                        <Route  path='/dynamic' element={<RequireAuth><Dynamics /></RequireAuth>}/>

                        <Route  path='/sales' element={<RequireAuth><Page404 /></RequireAuth>}/>
                        <Route  path='/goals' element={<RequireAuth><GoalUser /></RequireAuth>}/>

                        <Route  path='/economics' element={<RequireAuth><Econ /></RequireAuth>}/>
                        <Route  path='/economics/:details' element={<RequireAuth><EconomicsDetails /></RequireAuth>}/>

                        <Route  path='/kmoney' element={<RequireAuth><KMoney /></RequireAuth>}/>
                        <Route  path='/kmoney/:details' element={<RequireAuth><KDetails /></RequireAuth>}/>

                        <Route  path='/balance' element={<RequireAuth><Page404 /></RequireAuth>}/>
                        <Route  path='/resources' element={<RequireAuth><Resources /></RequireAuth>}/>
                        <Route  path='/employeeLeave' element={<RequireAuth><EmployeeLeave /></RequireAuth>}/>
                        <Route  path='/employeeLeavePortret' element={<RequireAuth><EmployeePortret /></RequireAuth>}/>
                        <Route  path='/kadru' element={<RequireAuth><Kadru /></RequireAuth>}/>

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


