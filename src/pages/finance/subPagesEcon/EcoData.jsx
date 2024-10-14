import React from 'react';
import {Button, Tooltip, Typography} from "@mui/material";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import {useTheme} from "../../../hook/useTheme";


const EcoData = () => {
    const data = [
        {
            title: 'Проход - МП',
            border: "#39FF14",
        },
        {
            title: 'Вложения - ЗиНЗП',
            border: '#FF0000',
        },
        {
            title: 'Операционные издержки',
            border: '#FFFF00',
        },
        {
            title: 'Управленческая прибыль',
            border: '#ffa420',
        },
        {
            title: 'Операционная прибыль',
            border: '#00FFE1',
        },
    ]
    const theme = useTheme() ? 'dark' : 'light'


    return (
        <div style={{width: '170px', position: 'fixed'}}>
            <Tooltip title={<Typography variant="body2"  gutterBottom>Вернуться назад</Typography>}>
                <div className='ecoDataDate'>09/2024</div>
            </Tooltip>
            { data?.map((item, i) => {
                return <Block key={i} data={item}/>
            })}
        </div>
    );
};

export default EcoData;

const Block = ({data}) => {
  const {title, border} = data
    return (
        <div className='ecoDataNum' style={{borderColor: border}}>
            <div className='ecoDataTitle'>{title}</div>
            <div>Август <span> +120млн</span></div>
            <div className='ecoDataCurrentMonth'>Сентябрь <span> +555млн</span></div>
            <div>Октябрь <span> +200млн</span></div>
            <div>Цель года <span> 999млн</span></div>
            <div style={{color: 'red'}}>Прогноз <span> 1111млн</span></div>
        </div>
    )
}