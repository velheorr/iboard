import '../econ.scss'
import {Tooltip, Typography} from "@mui/material";
import {useGetEcoCards} from "../../../hook/useGetEconomics";
import Skelet from "../../../elements/Skelet";
import {useEffect} from "react";



const EcoData = ({year, month, type,openModal}) => {
    const {data: ecocards, isLoading, isError} = useGetEcoCards(year, month, type)

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
            <Tooltip title={<Typography variant="body2"  gutterBottom>Нажмите для изменения настроек</Typography>}>
                <div className='ecoDataDate' onClick={openModal}>11/2024</div>
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

    const convert = (num) => {
        if ((num ^ 0) === num)  {
            return `${num}.0`
        } else {
            return num
        }
    }


    return (
        <div className={`ecoDataNum ${border}`} style={{borderColor: border}}>
            <div className='ecoDataTitle'>{Name}</div>
            <div className='textTrans'>{prevName} <span style={{fontSize: '14px'}}> {convert(prevAmount)}</span></div>
            <div className='ecoDataCurrentMonth textTrans'> {currentName} <span style={{fontSize: '14px'}}> {convert(currentAmount)}</span></div>
            <div className='textTrans'>{nextName} <span style={{fontSize: '14px'}}> {convert(nextAmount)}</span></div>
            <div>Цель <span style={{fontSize: '14px'}}> {convert(goal)}</span></div>
            <div className='textTrans' style={{color: '#ff0000', display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                <div>Прогноз</div>
                <div style={{fontSize: '14px', textAlign: 'right'}}> {convert(prognoz)}</div>
            </div>
        </div>
    )
}