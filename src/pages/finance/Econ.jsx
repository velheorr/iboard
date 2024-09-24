import './econ.scss'

import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import exportData from "highcharts/modules/export-data";
import exporting from "highcharts/modules/exporting";
import fullscreen from "highcharts/modules/full-screen";
import {useDispatch} from "react-redux";
import {useGetEco} from "../../hook/useGetEconomics";
import Skelet from "../../elements/Skelet";
import {convertForBarChart, convertForLineChart} from "./subPagesEcon/convertData";
import {useEffect, useMemo, useState} from "react";
import EcoLineChart from "./subPagesEcon/EcoLineChart";
import {setEcoBar, setEcoLine} from "../economics/js/EconomicsSlice";
import EcoData from "./subPagesEcon/EcoData";
import EcoBarChart from "./subPagesEcon/EcoBarChart";
import ElemTab from "../../elements/Tabs/ElemTab";

exporting(Highcharts);
exportData(Highcharts);
fullscreen(Highcharts);

const Econ = () => {
    const dispatch = useDispatch();
    const {data: eco, isLoading, isError, refetch, status} = useGetEco(2024)

/*    let dataForLineChart = eco
    const makeData = () => {
        /!*let dataForLineChart = convertForLineChart(eco)
        dispatch(setEcoLine(dataForLineChart))*!/
        let dataForBarChart = convertForBarChart(eco)
        dispatch(setEcoBar(dataForBarChart))
    }

    useEffect(()=>{
        if (status === 'success'){
            makeData()
        }
    }, [eco])*/


    if (isLoading) {return <Skelet option='eco'/>}
    if (isError) {return <h3>Нет подключения к серверу</h3>}
    if (!eco) {return <h3>Нет данных с сервера</h3>}

    return (
        <div className='econMain'>
            <div className='ecoBlocks'>
                <EcoData/>

            </div>
            <div className='ecoBlocks2'>
                <EcoLineChart info={eco}/>
                <EcoBarChart info={eco}/>
                    <ElemTab arr={['Бельтюков', 'Болотников', 'Исаков', 'Исмайлов', 'Кряжевских', 'Куликов', 'Пермяков']} inner={true}>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                    </ElemTab>
            </div>
        </div>
    );
};

export default Econ;