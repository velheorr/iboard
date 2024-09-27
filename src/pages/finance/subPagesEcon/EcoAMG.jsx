import '../econ.scss'
import AmgFunnel from "./EcoAmg/AmgFunnel";

const EcoAmg = () => {
    return (
        <div className='amg'>
            <AmgFunnel className='amgChart'/>
            <div className='amgChart'>2</div>
            <div className='amgChart'>3</div>
        </div>
    );
};

export default EcoAmg;