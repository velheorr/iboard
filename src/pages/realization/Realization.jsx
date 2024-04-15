import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useGetRealizationData} from "../../hook/useGetQuery";
import Skelet from "../../elements/Skelet";
import Slider from "react-slick";
import RealizationChartBlocks from "./subpages/RealizationChartBlocks";
import {setHoldingList, setRealizationData, setZakazchikList} from "./RealizationSlice";
import RealizationFilters from "./subpages/RealizationFilters";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {settingsRealization} from "./subpages/realizationSliderSettings";


const Realization = () => {
    const realisationData = useSelector(state => state.realisation.realisationData);

    const dispatch = useDispatch();
    const {data, isLoading, isError} = useGetRealizationData()

    /*const sortData = (data)=>{
        if (data) {
            let sorted = data?.sort((a,b)=> b['КодОбъекта'] - a['КодОбъекта'])
            dispatch(setRealizationData(sorted))
        }
        else (
            dispatch(setRealizationData(data))
        )

    }*/
    const prepareSelect = (bigData) =>{
        let holding = []
        let kontragent = []
        bigData.forEach( item => {
            if(item['Холдинг'] === ''){return}
            if (!holding.includes(item['Холдинг'] )){
                holding.push(item['Холдинг'])
            } else
            if (!kontragent.includes(item['Контрагент'])){
                kontragent.push(item['Контрагент'])
            }
        })
        dispatch(setHoldingList(holding))
        dispatch(setZakazchikList(kontragent))
    }


    useEffect(()=>{
        dispatch(setRealizationData(data))
        if (realisationData){
            prepareSelect(realisationData)
        }

        /*sortData(data)*/
    }, [data, realisationData])


    if (isLoading) {return <Skelet/>}
    if (isError) {return <h3>error</h3>}
    if (!data) {return <h3>no data</h3>}


    return (
        <div className='main'>
            {/*<Typography sx={{textAlign: 'center', fontWeight: 600}} variant="h5">Список объектов</Typography>*/}
            <RealizationFilters/>
            <Slider {...settingsRealization}>
                {
                    isLoading
                        ? <div>Нет данных</div>
                        :realisationData?.map((item, i) => {
                            return <RealizationChartBlocks item={item} key={i}/>
                        })
                }
            </Slider>
        </div>
    );
};

export default Realization;