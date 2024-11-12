import React, {useState} from 'react';
import {Button} from "@mui/material";



const Month = () => {
    const [month, setMonth] = useState([
        {id: '1', name: 'Янв', active: false},
        {id: '2', name: 'Фев', active: false},
        {id: '3', name: 'Мар', active: false},
        {id: '4', name: 'Апр', active: false},
        {id: '5', name: 'Май', active: false},
        {id: '6', name: 'Июн', active: false},
        {id: '7', name: 'Июл', active: false},
        {id: '8', name: 'Авг', active: false},
        {id: '9', name: 'Сен', active: false},
        {id: '10', name: 'Окт', active: false},
        {id: '11', name: 'Ноя', active: true},
        {id: '12', name: 'Дек', active: false},
    ])

    const select = (id)=>{
        setMonth(month.map(month => ({
            ...month,
            active: month.id === id,
        })));
    }

    const renderMonth = () => {
        return month.map(i =>{
            return (
                 <div key={i.id} style={{width: '33%' }} onClick={()=> select(i.id)}>
                     <Button variant="text" color={i.active ? 'success' : 'inherit'}>{i.name}</Button>
                </div>
            )
        })
    }

    return (
            <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
                { renderMonth()}
            </div>
    );
};

export default Month;

