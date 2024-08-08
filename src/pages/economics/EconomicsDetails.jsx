import React, {useEffect} from 'react';
import {Button} from "@mui/material";
import './economics.scss'
import TableBlock from "./subpagesDetails/TableBlock";
import HeaderBlock from "./subpagesDetails/HeaderBlock";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {useTheme} from "../../hook/useTheme";

const EconomicsDetails = () => {
    const month = useSelector(state => state.economics.monthDetails);
    const year = useSelector(state => state.economics.yearDetails);
    const navigate = useNavigate();
    const theme = useTheme() ? 'dark' : 'light'

    const goBack = ()=>{
        navigate('/economics');
    }

    let yList = {
        y1: false,
        y2: false,
    }

    const makeData = () => {
        if (year === '2015'){
            yList.y1 = +year +1
            yList.y2 = false
        } else if(year === '2025'){
            yList.y1 = false
            yList.y2 = +year -1
        } else {
            yList.y1 = +year +1
            yList.y2 = +year -1
        }
    }
    makeData()

    const makeList = ()=>{
        let line = []
        let min = +year -3
        let max = +year +3
        for (let i = min; i <= max; i++) {
            if (i >= 2015 && i <= 2025) {
                line.push(i)
            }
        }
        return line
    }
    const renderList = makeList().map(i=>{
        let bgColor = theme === 'dark'? '#444a45' : '#c9d8f794'
        return <TableBlock key={i} year={i} month={month} bg={i === +year? bgColor: ''}/>
    })

    return (
        <div>
            <Button onClick={goBack} color={'success'}>Назад</Button>
            <div className='ecoDetails'>
                <div className='month'>{month}</div>
                <HeaderBlock/>
                {renderList}
            </div>

        </div>
    );
};

export default EconomicsDetails;


