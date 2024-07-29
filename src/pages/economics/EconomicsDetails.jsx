import React, {useEffect} from 'react';
import {Button} from "@mui/material";
import './economics.scss'
import TableBlock from "./subpagesDetails/TableBlock";
import HeaderBlock from "./subpagesDetails/HeaderBlock";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router";

const EconomicsDetails = () => {
    const month = useSelector(state => state.economics.monthDetails);
    const year = useSelector(state => state.economics.yearDetails);
    const navigate = useNavigate();

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

    return (
        <div>
            <Button onClick={goBack} color={'success'}>Назад</Button>
            <div className='ecoDetails'>
                <div className='month'>{month}</div>
                <HeaderBlock/>
                {yList.y1 && <TableBlock year={yList.y1} month={month}/>}
                <TableBlock year={year} month={month}/>
                {yList.y2 && <TableBlock year={yList.y2} month={month}/>}
            </div>
        </div>
    );
};

export default EconomicsDetails;


