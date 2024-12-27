import '../../hr.scss'
import PortretSalary from "./portretsub/PortretSalary";
import PortretAge from "./portretsub/PortretAge";
import PortretParameters from "./portretsub/PortretParameters";
import PortretSocial from "./portretsub/PortretSocial";
import PortretSpeedometr from "./portretsub/PortretSpeedometr";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import SensorOccupiedIcon from "@mui/icons-material/SensorOccupied";
import EngineeringIcon from "@mui/icons-material/Engineering";
import CurrencyRubleIcon from "@mui/icons-material/CurrencyRuble";

const PortretMain = () => {




    return (
        <div>


            <div style={{display: 'flex'}}>
                <div style={{width: '49%'}}><PortretSalary/></div>
                <div style={{width: '49%'}}><PortretAge/></div>

            </div>
            <div style={{display: 'flex'}}>
                <div style={{width: '49%'}}></div>
                <div style={{width: '49%'}}>
                    <PortretSocial/>
                    <PortretSpeedometr/>
                </div>
                <div style={{width: '49%'}}></div>

            </div>


            <PortretParameters/>
        </div>
    );
};

export default PortretMain;