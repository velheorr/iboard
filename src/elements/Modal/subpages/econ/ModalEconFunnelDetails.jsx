import React, {useEffect, useState} from 'react';
import {useModal} from "../../../../hook/useModal";
import {useTheme} from "../../../../hook/useTheme";
import {useDispatch, useSelector} from "react-redux";
import TableHead from "../../../Table/TableHead";
import TableItem from "../../../Table/TableItem";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import {Typography} from "@mui/material";
import {workTypes} from "../../../../pages/economics/js/workTypes";

const ModalEconFunnelDetails = () => {
    const dispatch = useDispatch()
    const {exitModal} = useModal()
    const neonGreen = useTheme('neonGreen')
    const neonGreenShadow = useTheme('neonGreenShadow')
    const funnelDetails = useSelector(state => state.eco.funnelDetails)
    const [company, setCompany] = useState(true)
    const [work, setWork] = useState('Все')

    useEffect(()=>{
        Array.isArray(funnelDetails[4]) ? setCompany(true) : setCompany(false)
        setWork(findWorkType(funnelDetails[3]).name)
    },[funnelDetails])

    const findWorkType = (work) => {
        return workTypes.find(i => i.id === work)
    }

    return (
        <div className='ecoModal'>
            <div className='modalIcon' style={{boxShadow: neonGreenShadow}}><FilterAltIcon/></div>
            <Typography variant="h5" gutterBottom className='modalAuthTitle' sx={{color: neonGreen}}>Детализация воронки: {funnelDetails[0]}</Typography>

            <div style={{display: 'flex', justifyContent: 'space-between', margin: '15px 0'}}>
                <div>{funnelDetails[2]}/{funnelDetails[1]}</div>
                <div>Тип работ: {work}</div>
                <div>{company ? 'Компания' : 'РП'} </div>
            </div>

            <TableHead>
                <div style={{width: '25%'}} className='listIcon'><span> Объект</span></div>
                <div style={{width: '25%'}} className='listIcon'><span> Тип работ</span></div>
                {
                    !company && <div style={{width: '30%'}} className='listIcon'><span> РП</span></div>
                }
                <div style={{width: '10%'}} className='listIcon'> <span> Сумма</span></div>
                <div style={{width: '10%'}} className='listIcon'> <span> Дата</span></div>
            </TableHead>
            <TableItem>
                <div style={{width: '25%'}}>Самотлор</div>
                <div style={{width: '25%'}}>Все</div>
                <div style={{width: '30%'}}>Болотников С.В.</div>
                <div style={{width: '10%'}}>400,5</div>
                <div style={{width: '10%'}}>10.10.2024</div>
            </TableItem>

        </div>
    );
};

export default ModalEconFunnelDetails;