import React from 'react';
import ElemTab from "../../../elements/Tabs/ElemTab";
import {Stack, Typography} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PortretMain from "./subpages/PortretMain";
import Dev from "../../../elements/Development/Dev";

const EmployeePortret = () => {

    return (
        <div>
            <Dev/>
            <div style={{padding: '0px 5px'}}>
                <ElemTab arr={[<HomeGuardian/>, 'АХЧ и секретариат', 'Бухгалтерия', 'ИТ служба', 'Отдел кадров', 'Отдел планирования', 'Производство', 'Финансовый отдел']} >
                    <PortretMain/>
                    <div></div>
                </ElemTab>
            </div>
        </div>
    );
};

export default EmployeePortret;

const HomeGuardian = () => {

    return (
        <Stack direction="row" alignItems="center" gap={1}>
            <HomeIcon sx={{fontSize: '1.5rem'}}/>
            <Typography sx={{fontSize: '0.9rem'}}>Гардиан</Typography>
        </Stack>
    )
}

