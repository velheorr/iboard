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
    const {data: eco, isLoading, isError, refetch, status} = useGetEco(2024)

    if (isLoading) {return <Skelet option='eco'/>}
    if (isError) {return <h3>Нет подключения к серверу</h3>}
    if (!eco) {return <h3>Нет данных с сервера</h3>}

    return (
        <div className='econMain'>
            <div className='ecoBlocks'>
                <EcoData/>

            </div>
            <div className='ecoBlocks2'>
                <EcoLineChart info={eco}/>
                <EcoBarChart info={eco}/>
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