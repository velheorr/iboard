import React from 'react';
import PortretSalary from "./portretbub/PortretSalary";
import PortretAge from "./portretbub/PortretAge";

const PortretMain = () => {
    return (
        <div>
            <PortretAge/>
            <PortretSalary/>
        </div>
    );
};

export default PortretMain;