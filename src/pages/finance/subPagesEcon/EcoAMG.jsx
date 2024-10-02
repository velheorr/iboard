import '../econ.scss'
import AmgFunnel from "./EcoAmg/AmgFunnel";
import AmgStackedBar from "./EcoAmg/AmgStackedBar";
import AmgDoubleBar from "./EcoAmg/AmgDoubleBar";
import AmgNegative from "./EcoAmg/AmgNegative";
import AmgBulletChart from "./EcoAmg/AmgBulletChart";
import AmgBulletChart2 from "./EcoAmg/AmgBulletChart2";
import AmgDonut from "./EcoAmg/AmgDonut";

const EcoAmg = () => {
    return (
        <div className='amg'>
            <AmgFunnel className='amgChart'/>
            <AmgDoubleBar className='amgChart'/>
            <AmgStackedBar className='amgChart'/>
            <AmgNegative className='amgChart'/>
            <AmgBulletChart className='amgChart'/>
            <AmgBulletChart2 className='amgChart'/>
            <AmgDonut className='amgChart'/>
        </div>
    );
};

export default EcoAmg;