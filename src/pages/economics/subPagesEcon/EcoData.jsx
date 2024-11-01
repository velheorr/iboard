import '../econ.scss'
import {Tooltip, Typography} from "@mui/material";
import {useGetEcoCards, useGetEcoLineChart} from "../../../hook/useGetEconomics";
import Skelet from "../../../elements/Skelet";
import {useEffect} from "react";



const EcoData = ({year, month, type}) => {
    const {data: ecocards, isLoading, isError, refetch, status} = useGetEcoCards(year, month, type)

    let data = [
        {
            title: "Проход МП",
            border: "ecoGreen",
            order: 1,
        },
        {
            title: 'Вложения - ЗиНЗП',
            border: 'ecoOrange',
            order: 2,
        },
        {
            title: 'Операционные издержки',
            border: 'ecoRed',
            order: 3,
        },
        {
            title: 'Управленческая прибыль',
            border: 'ecoYellow',
            order: 4,
        },
        {
            title: 'Операционная прибыль',
            border: 'ecoLblue',
            order: 5,
        },
    ]

    const updateData = (x)=>{
         x?.forEach(e =>{
             data.forEach(i =>{
                 if (i.title === e.Name){
                     e.border = i.border
                     e.order = i.order
                 }
             })
         })
         x?.sort((a, b) => a.order - b.order)
         return x?.map((item, i) => {
             if (item.Name === 'Процентование'){return }
             return <Block key={i} data={item}/>
         })

    }

    useEffect(()=>{
        if (ecocards){
            let x = ecocards.data.response.data
            updateData(x)
        }
    },[ecocards])
    const renderCards = updateData(ecocards?.data.response.data)

    if (isLoading) {return <Skelet option='eco'/>}
    if (isError) {return <h3>Нет подключения к серверу</h3>}
    if (!ecocards) {return <h3>Нет данных с сервера</h3>}

    return (
        <div style={{width: '170px', position: 'fixed'}}>
            <Tooltip title={<Typography variant="body2"  gutterBottom>тултип</Typography>}>
                <div className='ecoDataDate'>10/2024</div>
            </Tooltip>
            { renderCards}
        </div>
    );
};

export default EcoData;

const Block = ({data}) => {
  const {
      Name, border, currentAmount, currentName, goal, nextAmount, nextName,
      prevAmount, prevName, prognoz
  } = data
    return (
        <div className={`ecoDataNum ${border}`} style={{borderColor: border}}>
            <div className='ecoDataTitle'>{Name}</div>
            <div>{prevName} <span> {prevAmount}</span></div>
            <div className='ecoDataCurrentMonth'>{currentName} <span> {currentAmount}</span></div>
            <div>{nextName} <span> {nextAmount}</span></div>
            <div>Цель года <span> {goal}</span></div>
            <div style={{color: 'red'}}>Прогноз <span> {prognoz}</span></div>
        </div>
    )
}