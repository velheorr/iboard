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
import {useState} from "react";

CustomEvents(Highcharts);
exporting(Highcharts);
exportData(Highcharts);
fullscreen(Highcharts);

const Econ = () => {
    const [year, setYear] = useState(2024)
    const [month, setMonth] = useState(11)
    const [type, setType] = useState('all')
    const [rp, setRp] = useState('all')

    return (
        <div className='econMain'>
            <div className='ecoBlocks'>
                <EcoData year={year} month={month} type={type}/>
            </div>
            <div className='ecoBlocks2'>
                <EcoLineChart year={year} type={type}/>
                <EcoBarChart year={year} type={type}/>
                <div style={{padding: '0px 5px'}}>
                    <ElemTab arr={[<HomeGuardian/>,'Бельтюков', 'Болотников', 'Исаков', 'Исмайлов', 'Кряжевских', 'Куликов', 'Пермяков']} inner={true}>
                        <EcoAmg year={year} month={month} type={type} rp={rp}/>
                        <EcoAmg/>
                        <EcoAmg/>
                        <EcoAmg/>
                    </ElemTab>
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