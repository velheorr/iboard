import React, {useEffect, useState} from 'react';
import {Button} from "@mui/material";
import {useSelector} from "react-redux";

const Month = ({setEcoMonth}) => {
    const [month, setMonth] = useState([
        {id: 1, name: 'Янв', active: false},
        {id: 2, name: 'Фев', active: false},
        {id: 3, name: 'Мар', active: false},
        {id: 4, name: 'Апр', active: false},
        {id: 5, name: 'Май', active: false},
        {id: 6, name: 'Июн', active: false},
        {id: 7, name: 'Июл', active: false},
        {id: 8, name: 'Авг', active: false},
        {id: 9, name: 'Сен', active: false},
        {id: 10, name: 'Окт', active: false},
        {id: 11, name: 'Ноя', active: false},
        {id: 12, name: 'Дек', active: false},
    ])
    const stateMonth = useSelector(state => state.eco.month)
    const today = new Date().getMonth()

    useEffect(()=>{
        if (stateMonth === null){
            select(today + 1)
        } else {
            select(stateMonth)
        }

    },[today])

    const select = (id)=>{
        setMonth(month.map(month => ({
            ...month,
            active: month.id === id,
        })));
        setEcoMonth(id)
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

