import '../econ.scss'
import AmgFunnel from "./EcoAmg/AmgFunnel";
import AmgStackedBar from "./EcoAmg/AmgStackedBar";
import AmgDoubleBar from "./EcoAmg/AmgDoubleBar";
import AmgNegative from "./EcoAmg/AmgNegative";

const EcoAmg = () => {
    return (
        <div className='amg'>
            <AmgFunnel className='amgChart'/>
            <AmgDoubleBar className='amgChart'/>
            <AmgStackedBar className='amgChart'/>
            <AmgNegative className='amgChart'/>
        </div>
    );
};

export default EcoAmg;