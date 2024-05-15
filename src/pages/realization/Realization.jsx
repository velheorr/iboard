import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useGetRealizationData} from "../../hook/useGetQuery";
import Skelet from "../../elements/Skelet";
import Slider from "react-slick";
import {
    setConfiguredRealizationData,
    setFilteredData,
    setHoldingList,
    setZakazchikList
} from "./js/RealizationSlice";
import RealizationFilters from "./subpages/RealizationFilters";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {settingsRealization} from "./js/realizationSliderSettings";
import RealizationChartBlocks2 from "./subpages/RealizationChartBlocks2";
import {configRealizationData} from "./js/configRealizationData";
import {prepareSelect} from "./js/func";


const Realization = () => {
    const configuredRealizationData = useSelector(state => state.realisation.configuredRealizationData);
    const filteredData = useSelector(state => state.realisation.filteredData);

    const dispatch = useDispatch();
    const {data, isLoading, isError} = useGetRealizationData()

    const prepareData = data?.map(item => {
        const {...rest } = item;
        let chartData = configRealizationData(item)
        let colors = {
            yellow: 0,
            red: 0,
            green: 0,
            grey: 0
        }
        /*Важно при смене цветов*/
        chartData.forEach(el =>{
            if (el.barColor === '#EAEE29'){colors.yellow = colors.yellow + 1}
            else if (el.barColor === '#F11010'){colors.red = colors.red + 1}
            else if (el.barColor === '#1CC700'){colors.green = colors.green + 1}
            else if (el.barColor === '#9f9f9f'){colors.grey = colors.grey + 1}
            /*if (el.barColor === '#FCDC2A'){colors.yellow = colors.yellow + 1}
            else if (el.barColor === '#f60209'){colors.red = colors.red + 1}
            else if (el.barColor === '#2db432'){colors.green = colors.green + 1}
            else if (el.barColor === '#9f9f9f'){colors.grey = colors.grey + 1}*/
        })

        return {
            ...rest,
            chartData,
            colors,
        }
    })


    useEffect(()=>{
        dispatch(setConfiguredRealizationData(prepareData))
        if (prepareData){
            dispatch(setFilteredData(prepareData))
            dispatch(setHoldingList(prepareSelect(prepareData, 'Холдинг')))
            dispatch(setZakazchikList(prepareSelect(prepareData, 'Контрагент')))
        }
    }, [data])


    if (isLoading) {return <Skelet/>}
    if (isError) {return <h3>Нет подключения к серверу</h3>}
    if (!data) {return <h3>Нет данных с сервера</h3>}


    return (
        <div className='main'>
            {/*<Typography sx={{textAlign: 'center', fontWeight: 600}} variant="h5">Список объектов</Typography>*/}
            <RealizationFilters/>
            <Slider {...settingsRealization}>
                {
                    isLoading
                        ? <div>Нет данных</div>
                        : filteredData.map((item, i) => <RealizationChartBlocks2 item={item} key={i}/>)
                }
            </Slider>
        </div>
    );
};

export default Realization;