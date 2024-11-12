import React, {useState} from 'react';
import {GTextField} from "../CustomMui/customMui";
import {Button, IconButton} from "@mui/material";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';


const Year = () => {
    const [year, setYear] = useState('2024')

    const select = (e) => {
        setYear(e.target.value)
    }
    const move = (dir) =>{
        if (dir){
            setYear(year - 1)
        } else {
            setYear(year + 1)
        }
    }

    return (
        <div style={{display:'flex', justifyContent: 'center'}}>
            <IconButton onClick={()=>move(true)} color="success"><KeyboardDoubleArrowLeftIcon /> </IconButton>
            <GTextField sx={{width: '60px'}} id="name"  variant="standard" type='number' size='small' min={2015} max={2025} step={1} value={year} onChange={select}/>
            <IconButton onClick={()=>move(false)} color="success"><KeyboardDoubleArrowRightIcon /> </IconButton>
        </div>
    );
};

export default Year;