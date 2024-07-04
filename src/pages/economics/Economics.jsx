import './economics.scss'
import Skelet from "../../elements/Skelet";
import React, {useEffect} from "react";
import {useGetEconomics} from "../../hook/useGetEconomics";
import {useDispatch, useSelector} from "react-redux";
import {setEconData} from "./js/EconomicsSlice";

const Economics = () => {
    const {data: economics, isLoading, isError} = useGetEconomics()
    const mode = useSelector(state => state.header.mode);
    const econ1 = useSelector(state => state.economics.econ1);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(setEconData(economics))
        console.log(econ1)
    },[economics])


    if (isLoading) {return <Skelet/>}
    if (isError) {return <h3>Нет подключения к серверу</h3>}
    if (!economics) {return <h3>Нет данных с сервера</h3>}

    return (
        <div>
            1111
        </div>
    );
};

export default Economics;