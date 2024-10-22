import '../econ.scss'
import {Tooltip, Typography} from "@mui/material";



const EcoData = () => {
    const data = [
        {
            title: 'Проход - МП',
            border: "ecoGreen",
        },
        {
            title: 'Вложения - ЗиНЗП',
            border: 'ecoOrange',
        },
        {
            title: 'Операционные издержки',
            border: 'ecoRed',
        },
        {
            title: 'Управленческая прибыль',
            border: 'ecoYellow',
        },
        {
            title: 'Операционная прибыль',
            border: 'ecoLblue',
        },
    ]


    return (
        <div style={{width: '170px', position: 'fixed'}}>
            <Tooltip title={<Typography variant="body2"  gutterBottom>тултип</Typography>}>
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
        <div className={`ecoDataNum ${data.border}`} style={{borderColor: border}}>
            <div className='ecoDataTitle'>{title}</div>
            <div>Август <span> +120млн</span></div>
            <div className='ecoDataCurrentMonth'>Сентябрь <span> +555млн</span></div>
            <div>Октябрь <span> +200млн</span></div>
            <div>Цель года <span> 999млн</span></div>
            <div style={{color: 'red'}}>Прогноз <span> 1111млн</span></div>
        </div>
    )
}