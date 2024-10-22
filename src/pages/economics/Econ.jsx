import './econ.scss'

import Highcharts from 'highcharts';
import exportData from "highcharts/modules/export-data";
import exporting from "highcharts/modules/exporting";
import fullscreen from "highcharts/modules/full-screen";
import {useGetEco} from "../../hook/useGetEconomics";
import Skelet from "../../elements/Skelet";
import EcoLineChart from "./subPagesEcon/EcoLineChart";
import EcoData from "./subPagesEcon/EcoData";
import EcoBarChart from "./subPagesEcon/EcoBarChart";
import ElemTab from "../../elements/Tabs/ElemTab";
import EcoAmg from "./subPagesEcon/EcoAMG";
import HomeIcon from '@mui/icons-material/Home';
import {Stack, Typography} from "@mui/material";
import CustomEvents from "highcharts-custom-events";

CustomEvents(Highcharts);
exporting(Highcharts);
exportData(Highcharts);
fullscreen(Highcharts);

const Econ = () => {

    return (
        <div className='econMain'>
            <div className='ecoBlocks'>
                <EcoData/>

            </div>
            <div className='ecoBlocks2'>
                <EcoLineChart/>
                <EcoBarChart/>
                <div style={{padding: '0px 5px'}}>
                    <ElemTab arr={[<HomeGuardian/>,'Бельтюков', 'Болотников', 'Исаков', 'Исмайлов', 'Кряжевских', 'Куликов', 'Пермяков']} inner={true}>
                        <EcoAmg/>
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