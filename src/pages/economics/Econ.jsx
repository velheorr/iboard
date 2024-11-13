import './econ.scss'

import Highcharts from 'highcharts';
import exportData from "highcharts/modules/export-data";
import exporting from "highcharts/modules/exporting";
import fullscreen from "highcharts/modules/full-screen";
import EcoLineChart from "./subPagesEcon/EcoLineChart";
import EcoData from "./subPagesEcon/EcoData";
import EcoBarChart from "./subPagesEcon/EcoBarChart";
import ElemTab from "../../elements/Tabs/ElemTab";
import EcoAmg from "./subPagesEcon/EcoAMG";
import HomeIcon from '@mui/icons-material/Home';
import {Stack, Typography} from "@mui/material";
import CustomEvents from "highcharts-custom-events";
import {useEffect, useState} from "react";
import {useModal} from "../../hook/useModal";
import {useSelector} from "react-redux";


CustomEvents(Highcharts);
exporting(Highcharts);
exportData(Highcharts);
fullscreen(Highcharts);

const Econ = () => {
    const ecoYear = new Date().getFullYear()
    const ecoMonth = new Date().getMonth() + 1
    const stateYear = useSelector(state => state.eco.year)
    const stateMonth = useSelector(state => state.eco.month)
    const stateWork = useSelector(state => state.eco.work)

    const [year, setYear] = useState(ecoYear)
    const [month, setMonth] = useState(ecoMonth)
    const [type, setType] = useState('all')
    const [rp, setRp] = useState('all')
    const {setModal} = useModal()

    useEffect(()=>{
        if (stateYear || stateMonth || stateWork){
            setYear(stateYear)
            setMonth(stateMonth)
            setType(stateWork)
        }
    },[stateYear, stateMonth, stateWork])

    const openModal = () => {
        setModal('ModalEcon')
    }

    let tab = [<div onClick={()=>handleTab()}><HomeGuardian/></div>]
    useEffect(()=>{
        if (Array.isArray(rp)){
            renderTabs()
        }

    },[rp, tab])


    const [rpId, setRpId] = useState(false)
    const handleTab = (id = false) => {
        setRpId(id)
    }
    const renderTabs = () => {
        if ( Array.isArray(rp)){
            rp.forEach(i =>{
                tab.push(<div onClick={()=>handleTab(i.id)}>{i.name}</div>)
            })
        }
        tab.sort()
        return tab
    }




    return (
        <div className='econMain'>
            <div className='ecoBlocks'>
                <EcoData year={year} month={month} type={type} openModal={openModal}/>
            </div>
            <div className='ecoBlocks2'>
                <EcoLineChart year={year} type={type}/>
                <EcoBarChart year={year} type={type}/>
                <div style={{padding: '0px 5px'}}>
                    <ElemTab arr={renderTabs()} >
                        <EcoAmg year={year} month={month} type={type} rp={rp} setRp={setRp}/>
                        <div></div>
                    </ElemTab>
                    {
                        rpId &&
                        <EcoAmg year={year} month={month} type={type} rp={rpId} setRp={setRp}/>
                    }
                </div>
            </div>
        </div>
    );
};

export default Econ;

const HomeGuardian = ()=>{

    return (
        <Stack direction="row" alignItems="center" gap={1}>
            <HomeIcon  sx={{fontSize: '1.5rem'}}/>
            <Typography sx={{fontSize: '0.9rem'}}>Гардиан</Typography>
        </Stack>
    )
}