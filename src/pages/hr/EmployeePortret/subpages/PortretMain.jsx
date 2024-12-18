import React from 'react';
import PortretSalary from "./portretsub/PortretSalary";
import PortretAge from "./portretsub/PortretAge";
import PortretParameters from "./portretsub/PortretParameters";
import PortretSocial from "./portretsub/PortretSocial";
import PortretSpeedometr from "./portretsub/PortretSpeedometr";

const PortretMain = () => {
    return (
        <div>
            <div style={{display: 'flex'}}>
                <div style={{width: '49%'}}><PortretSocial/></div>
                <div style={{width: '49%'}}><PortretSpeedometr/></div>

            </div>
            <div style={{display: 'flex'}}>
                <div style={{width: '49%'}}><PortretSalary/></div>
                <div style={{width: '49%'}}><PortretAge/></div>
            </div>


            <PortretParameters/>
        </div>
    );
};

export default PortretMain;