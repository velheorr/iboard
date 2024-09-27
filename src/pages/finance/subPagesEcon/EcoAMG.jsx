import '../econ.scss'
import AmgFunnel from "./EcoAmg/AmgFunnel";
import AmgStackedBar from "./EcoAmg/AmgStackedBar";

const EcoAmg = () => {
    return (
        <div className='amg'>
            <AmgFunnel className='amgChart'/>
            <div className='amgChart'>3</div>
            <AmgStackedBar className='amgChart'/>
        </div>
    );
};

export default EcoAmg;