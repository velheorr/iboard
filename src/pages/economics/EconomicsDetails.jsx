import React from 'react';
import {Button} from "@mui/material";
import './economics.scss'
import TableBlock from "./subpagesDetails/TableBlock";
import HeaderBlock from "./subpagesDetails/HeaderBlock";

const EconomicsDetails = () => {
    return (
        <div>
            <Button color={'success'}>Назад</Button>
            <div className='ecoDetails'>
                <div className='month'>Май</div>
                <HeaderBlock/>
                <TableBlock/>
                <TableBlock/>
                <TableBlock/>
            </div>
        </div>
    );
};

export default EconomicsDetails;


