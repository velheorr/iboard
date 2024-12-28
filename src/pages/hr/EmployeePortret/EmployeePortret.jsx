import React from 'react';
import ElemTab from "../../../elements/Tabs/ElemTab";
import {Checkbox, FormControlLabel, Stack, Typography} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PortretMain from "./subpages/PortretMain";
import Dev from "../../../elements/Development/Dev";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CurrencyRubleIcon from "@mui/icons-material/CurrencyRuble";
import PetsIcon from '@mui/icons-material/Pets';
import PortretSalary from "./subpages/portretsub/PortretSalary";
import PortretPie from "./subpages/portretsub/PortretPie";
import PortretAge from "./subpages/portretsub/PortretAge";
import PortretSocial from "./subpages/portretsub/PortretSocial";
import PortretParameters from "./subpages/portretsub/PortretParameters";
import FormGroup from "@mui/material/FormGroup";
import SettingsIcon from "@mui/icons-material/Settings";
import {GTextField} from "../../../elements/CustomMui/customMui";

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

            <div className='emplBlock' style={{padding: '0px 5px'}}>
                <div className='empl1'>
                    <SettingsIcon className='settings' sx={{position:'absolute', top: '90px', left:'31px',fontSize:'110px', color: '#8181815c'}}/>
                    <GTextField fullWidth id="name" label="Период" variant="standard" type='text' size='small'/>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox color="success" defaultChecked />} label={<HomeGuardian/>} />
                        <FormControlLabel control={<Checkbox color="success" />} label='АХЧ и секретариат' />
                        <FormControlLabel control={<Checkbox color="success" />} label='Бухгалтерия' />
                        <FormControlLabel control={<Checkbox color="success" />} label='ИТ служба' />
                        <FormControlLabel control={<Checkbox color="success" />} label='Отдел кадров' />
                        <FormControlLabel control={<Checkbox color="success" />} label='Отдел планирования' />
                        <FormControlLabel control={<Checkbox color="success" />} label='Производство' />
                        <FormControlLabel control={<Checkbox color="success" />} label='Финансовый отдел' />
                    </FormGroup>
                </div>
                <div className='empl2'>
                    <div style={{display: 'flex'}}>
                        <div style={{width: '33%'}}><PortretSalary/></div>
                        <div style={{width: '33%'}}><PortretPie/></div>
                        <div style={{width: '33%'}}><PortretAge/></div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <div style={{width: '40%'}}><PortretSocial/></div>
                    </div>
                </div>
               {/* <ElemTab arr={[<HomeGuardian/>, 'АХЧ и секретариат', 'Бухгалтерия', 'ИТ служба', 'Отдел кадров', 'Отдел планирования', 'Производство', 'Финансовый отдел']} >
                    <PortretMain/>
                    <div></div>
                </ElemTab>*/}
            </div>
            <PortretParameters/>
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

