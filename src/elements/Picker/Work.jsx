import React, {useEffect, useState} from 'react';
import Switch from "@mui/material/Switch";
import {FormControlLabel, Tooltip, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {workTypes} from "../../pages/economics/js/workTypes";


const Work = ({setEcoWork}) => {
    const [work, setWork] = useState(workTypes)
    const stateWork = useSelector(state => state.eco.work)

    useEffect(()=>{
        if (stateWork === null){
            select('all')
        } else {
            select(stateWork)
        }

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
            return <Tooltip placement="top" key={i.id} title={<Typography variant="body2"  gutterBottom>{i.info}</Typography>}>
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