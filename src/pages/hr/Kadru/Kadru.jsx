import '../hr.scss'
import KadruVoronka from "./subpages/KadruVoronka";
import KadruStackedBar from "./subpages/KadruStackedBar";
import KadruFot from "./subpages/KadruFOT";
import Settings from "./Settings";
import EngineeringIcon from '@mui/icons-material/Engineering';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import Dev from "../../../elements/Development/Dev";

const Kadru = () => {

    const blocks = [
        {
            name: 'Штат, чел',
            amount: '300',
            icon: <PeopleAltIcon/>,
        },
        {
            name: 'Вакансии',
            amount: '8',
            icon: <AssignmentIndIcon/>,
        },
        {
            name: 'Текучесть общая',
            amount: '15%',
            icon: <SensorOccupiedIcon/>,
        },
        {
            name: 'Текучесть рабочих',
            amount: '20%',
            icon: <EngineeringIcon/>,
        },
        {
            name: 'ФОТ, руб',
            amount: '8 млн',
            icon: <CurrencyRubleIcon/>,
        },
    ]

    return (
        <div>
            <Dev/>
            <div className='miniHRblocks'>
                {
                    blocks.map((item,i) =>{
                        return <div key={i}>
                            {item.icon}
                            <div>{item.name}</div>
                            <div>{item.amount}</div>
                        </div>
                    })
                }
                <Settings/>
            </div>
            <div style={{display: 'flex'}}>
                <div style={{width: '49%'}}><KadruStackedBar/></div>
                <div style={{width: '49%'}}><KadruVoronka/></div>
            </div>
            <KadruFot/>

        </div>
    );
};

export default Kadru;