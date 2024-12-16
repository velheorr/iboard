import React from 'react';
import PortretSalary from "./portretsub/PortretSalary";
import PortretAge from "./portretsub/PortretAge";
import PortretParameters from "./portretsub/PortretParameters";
import PortretSocial from "./portretsub/PortretSocial";

const PortretMain = () => {
    return (
        <div>
            <PortretSocial/>
            <PortretParameters/>
            <PortretAge/>
            <PortretSalary/>
        </div>
    );
};

export default PortretMain;