import '../econ.scss'
import AmgBulletChart2 from "./EcoAmg/AmgBulletChart2";
import Amg2Charts from "./EcoAmg/Amg2Charts";
import AmgCustomFunnel from "./EcoAmg/AmgCustomFunnel";

const EcoAmg = ({year,month, type, rp, setRp = false}) => {
    return (
        <div className='amg'>
            <AmgCustomFunnel className='amgChart funnel' year={year} month={month} type={type} rp={rp.id} rpName={rp.name} setRp={setRp}/>
            <Amg2Charts className='amgChart double' year={year} month={month} type={type} rp={rp.id}/>
            <AmgBulletChart2 className='amgChart bullet' year={year} month={month} type={type} rp={rp.id}/>
        </div>
    );
};

export default EcoAmg;