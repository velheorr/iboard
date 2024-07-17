import './economics.scss'
import ChartContainer from "./subpages/ChartContainer";


const Economics = () => {

    return (
        <div>
            <ChartContainer econ={'econ1'} date={'2024'}/>
            <ChartContainer econ={'econ2'} date={'2025'}/>
        </div>
    );
};

export default Economics;

