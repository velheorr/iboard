import '../econ.scss'
import AmgBulletChart2 from "./EcoAmg/AmgBulletChart2";
import Amg2Charts from "./EcoAmg/Amg2Charts";
import AmgCustomFunnel from "./EcoAmg/AmgCustomFunnel";
import {Button} from "@mui/material";

const EcoAmg = ({year,month, type, rp, setRp = false}) => {
    return (
        <div className='amg'>
            <AmgCustomFunnel className='amgChart funnel' year={year} month={month} type={type} rp={rp} setRp={setRp}/>
            <Amg2Charts className='amgChart double' year={year} month={month} type={type} rp={rp}/>
            <AmgBulletChart2 className='amgChart bullet' year={year} month={month} type={type} rp={rp}/>
            {/*<AmgFunnel className='amgChart'/>
            <AmgDoubleBar className='amgChart'/>
            <AmgStackedBar className='amgChart'/>
            <AmgDonut className='amgChart'/>
            <AmgNegative className='amgChart'/>
            <AmgBulletChart className='amgChart'/>
            <AmgPie className='amgChart'/>*/}
        </div>
    );
};

export default EcoAmg;