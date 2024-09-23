import React from 'react';


const EcoData = () => {
    const data = [
        {
            title: 'Проход - МП',
            border: '#00FF00',
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
            border: '#808290',
        },
        {
            title: 'Операционная прибыль',
            border: '#00FFE1',
        },
    ]



    return (
        <div style={{width: '100%'}}>
            <div className='ecoDataDate'>2024</div>
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