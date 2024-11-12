import React, {useEffect, useState} from 'react';
import {IconButton} from "@mui/material";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';


const Year = ({setEcoYear}) => {
    const [year, setYear] = useState(null)
    const min = 2015
    const max = new Date().getFullYear() + 1
    const today = new Date().getFullYear()

    useEffect(()=>{
        setYear(today)
        setEcoYear(today)
    },[today])

    const yearChecker = (y) => {
        if (y < min){
            return min
        }  else if (y > max) {
            return max
        } else {
            return y
        }
    }

    const move = (dir) =>{
        let number
        if (dir){
            number = yearChecker(year - 1)
        } else {
            number = yearChecker(year + 1)
        }
        setYear(number)
        setEcoYear(number)
    }

    return (
        <div style={{display:'flex', justifyContent: 'center'}}>
            <IconButton onClick={()=>move(true)} color="success"><KeyboardDoubleArrowLeftIcon /> </IconButton>
            <div style={{display: 'flex', alignItems: 'center'}}>{year}</div>
            <IconButton onClick={()=>move(false)} color="success"><KeyboardDoubleArrowRightIcon /> </IconButton>
        </div>
    );
};

export default Year;