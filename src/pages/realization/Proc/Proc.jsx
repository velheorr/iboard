import React, {useEffect} from 'react';
import {useModal} from "../../../hook/useModal";
import {wikiChecker} from "../../../utils/wikiChecker";
import {useGetRealizationData} from "../../../hook/useGetQuery";
import Skelet from "../../../elements/Skelet";
import ProcBlock from "./subpages/ProcBlock";
import './proc.scss'
import Slider from "react-slick";
import {settingsProc} from "./js/sliderConfig";

import Highcharts from 'highcharts';
import CustomEvents from "highcharts-custom-events";
import exporting from "highcharts/modules/exporting";
import exportData from "highcharts/modules/export-data";
import fullscreen from "highcharts/modules/full-screen";
CustomEvents(Highcharts);
exporting(Highcharts);
exportData(Highcharts);
fullscreen(Highcharts);



const Proc = () => {
    const {setModal} = useModal()
    const {data: realization, isLoading, isError} = useGetRealizationData()

    useEffect(()=>{
        if (!wikiChecker('wiki-realizProc')){setModal('ModalRealizProcWiki')}
    },[])


    if (isLoading) {return <Skelet option='realization'/>}
    if (isError) {return <h3>Нет подключения к серверу</h3>}
    if (!realization) {return <h3>Нет данных с сервера</h3>}

    return (
        <div style={{padding: '0 30px'}}>

            <Slider {...settingsProc}>
                {
                    isLoading
                        ? <div>Нет данных</div>
                        : realization.map((item, i) => <ProcBlock item={item} key={i}/>)
                }
            </Slider>
        </div>
    );
};

export default Proc;