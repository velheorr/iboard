import React from 'react';
import ElemTab from "../../../elements/Tabs/ElemTab";
import {Stack, Typography} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PortretMain from "./subpages/PortretMain";
import Dev from "../../../elements/Development/Dev";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CurrencyRubleIcon from "@mui/icons-material/CurrencyRuble";
import PetsIcon from '@mui/icons-material/Pets';

const EmployeePortret = () => {
    const blocks = [
        {
            name: 'Сотрудников',
            amount: '150',
            icon: <PetsIcon/>,
        },
        {
            name: 'Средний возраст, лет',
            amount: '35',
            icon: <PeopleAltIcon/>,
        },
        {
            name: 'Средний стаж, лет',
            amount: '10',
            icon: <PeopleAltIcon/>,
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
            </div>

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

