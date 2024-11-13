import React, {useEffect, useState} from 'react';
import Switch from "@mui/material/Switch";
import {FormControlLabel, Tooltip, Typography} from "@mui/material";

export const workTypes = [
    {
        id: 'all',
        name: 'Все',
        info: 'Все виды работ',
        checked: true
    },
    {
        id: 'smr',
        name: 'СМР',
        info: 'Стоительно-монтажные работы, СМР+Проектно-исполнительные работы, Доделки',
        checked: false
    },
    {
        id: 'pir',
        name: 'ПИР',
        info: 'Проектно-исполнительные работы',
        checked: false
    },
    {
        id: 'service',
        name: 'Сервис',
        info: 'Сервисные работы',
        checked: false
    },
    {
        id: 'other',
        name: 'Прочие',
        info: 'КП, торговля, внутрифирменные, бухгалтерия, поставка',
        checked: false
    },
]


const Work = ({setEcoWork}) => {
    const [work, setWork] = useState(workTypes)


    useEffect(()=>{
        select('all')
    },[])

    const select = (id)=>{
        setWork(work.map(work => ({
            ...work,
            checked: work.id === id,
        })));
        setEcoWork(id)
    }

    const renderSwitch = () => {
        return work.map(i =>{
            return <Tooltip key={i.id} title={<Typography variant="body2"  gutterBottom>{i.info}</Typography>}>
                        <FormControlLabel sx={{width: '48%'}} control={<Switch checked={i.checked} color="success" onChange={()=>select(i.id)}/>} label={i.name}/>
                    </Tooltip>
        })
    }

    return (
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            {renderSwitch()}
        </div>
    );
};

export default Work;