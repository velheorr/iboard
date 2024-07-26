import React from 'react';
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



    return (
        <div>
            <Button onClick={goBack} color={'success'}>Назад</Button>
            <div className='ecoDetails'>
                <div className='month'>{month}</div>
                <HeaderBlock/>

                <TableBlock year={year} month={month} target={'ecoDet1'}/>
                <TableBlock year={year} month={month} target={'ecoDet2'}/>
                <TableBlock year={year} month={month} target={'ecoDet3'}/>
            </div>
        </div>
    );
};

export default EconomicsDetails;


