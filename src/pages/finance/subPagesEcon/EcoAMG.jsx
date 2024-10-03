import '../econ.scss'
import AmgFunnel from "./EcoAmg/AmgFunnel";
import AmgStackedBar from "./EcoAmg/AmgStackedBar";
import AmgDoubleBar from "./EcoAmg/AmgDoubleBar";
import AmgNegative from "./EcoAmg/AmgNegative";
import AmgBulletChart from "./EcoAmg/AmgBulletChart";
import AmgBulletChart2 from "./EcoAmg/AmgBulletChart2";
import AmgDonut from "./EcoAmg/AmgDonut";
import AmgPie from "./EcoAmg/AmgPie";
import Amg2Charts from "./EcoAmg/Amg2Charts";
import AmgCustomFunnel from "./EcoAmg/AmgCustomFunnel";

const EcoAmg = () => {
    return (
        <div className='amg'>
            <AmgCustomFunnel className='amgChart'/>
            <Amg2Charts className='amgChart'/>
            <AmgBulletChart2 className='amgChart'/>
            <AmgFunnel className='amgChart'/>
            <AmgDoubleBar className='amgChart'/>
            <AmgStackedBar className='amgChart'/>
            <AmgDonut className='amgChart'/>
            <AmgNegative className='amgChart'/>
            <AmgBulletChart className='amgChart'/>
            <AmgPie className='amgChart'/>
        </div>
    );
};

export default EcoAmg;