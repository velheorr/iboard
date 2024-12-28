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
import PortretPie from "./portretsub/PortretPie";

const PortretMain = () => {




    return (
        <div>


            <div style={{display: 'flex'}}>
                <div style={{width: '33%'}}><PortretSalary/></div>
                <div style={{width: '33%'}}><PortretPie/></div>
                <div style={{width: '33%'}}><PortretAge/></div>
            </div>
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                <div style={{width: '40%'}}>
                    <PortretSocial/>
                    {/*<PortretSpeedometr/>*/}
                </div>
            </div>



        </div>
    );
};

export default PortretMain;