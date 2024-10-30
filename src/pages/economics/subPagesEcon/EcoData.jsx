import '../econ.scss'
import {Tooltip, Typography} from "@mui/material";
import {useGetEcoCards, useGetEcoLineChart} from "../../../hook/useGetEconomics";
import Skelet from "../../../elements/Skelet";
import {useEffect} from "react";



const EcoData = ({year, month}) => {
    const {data: ecocards, isLoading, isError, refetch, status} = useGetEcoCards(year, month)

    let data = [
        {
            title: "Проход МП",
            border: "ecoGreen",
        },
        {
            title: 'Вложения - ЗиНЗП',
            border: 'ecoOrange',
        },
        {
            title: 'ОИ',
            border: 'ecoRed',
        },
        {
            title: 'УП',
            border: 'ecoYellow',
        },
        {
            title: 'ОП',
            border: 'ecoLblue',
        },
    ]

    const updateData = (x)=>{
         x?.forEach(e =>{
             data.forEach(i =>{
                 if (i.title === e.Name){
                     e.border = i.border
                 }
             })
         })
         return x?.map((item, i) => {
             if (item.Name === 'Процентование'){return }
             return <Block key={i} data={item}/>})
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
            <div>{prevName} <span> {prevAmount} млн</span></div>
            <div className='ecoDataCurrentMonth'>{currentName} <span> {currentAmount} млн</span></div>
            <div>{nextName} <span> {nextAmount} млн</span></div>
            <div>Цель года <span> {goal} млн</span></div>
            <div style={{color: 'red'}}>Прогноз <span> {prognoz} млн</span></div>
        </div>
    )
}