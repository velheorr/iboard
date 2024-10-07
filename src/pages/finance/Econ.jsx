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
                <ElemTab arr={['<HomeIcon/>','Бельтюков', 'Болотников', 'Исаков', 'Исмайлов', 'Кряжевских', 'Куликов', 'Пермяков']} inner={true}>
                    <EcoAmg/>
                    <div>2</div>
                    <div>3</div>
                </ElemTab>
            </div>
        </div>
    );
};

export default Econ;