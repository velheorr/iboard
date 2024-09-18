import './econ.scss'

import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import exportData from "highcharts/modules/export-data";
import exporting from "highcharts/modules/exporting";
import fullscreen from "highcharts/modules/full-screen";
import {useDispatch} from "react-redux";
import {useGetEco} from "../../hook/useGetEconomics";
import Skelet from "../../elements/Skelet";
import {convertData, prodano} from "./subPagesEcon/convertData";
import {useEffect, useState} from "react";
import EcoLineChart from "./subPagesEcon/EcoLineChart";
import {setEcoLine} from "../economics/js/EconomicsSlice";

exporting(Highcharts);
exportData(Highcharts);
fullscreen(Highcharts);

const Econ = () => {
    const dispatch = useDispatch();
    const {data: eco, isLoading, isError, refetch, status} = useGetEco(2024)

    useEffect(()=>{
        if (status === 'success'){
            let dataForChart = convertData(eco)
            dispatch(setEcoLine(dataForChart))
        }
    }, [eco])


    if (isLoading) {return <Skelet option='eco'/>}
    if (isError) {return <h3>Нет подключения к серверу</h3>}
    if (!eco) {return <h3>Нет данных с сервера</h3>}

    return (
        <div className='econMain'>
            <div className='ecoBlocks'>
                2024
            </div>
            <div className='ecoBlocks2'>
                <EcoLineChart/>
            </div>
        </div>
    );
};

export default Econ;