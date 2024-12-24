import React from 'react';
import LeaveChartDep from "./subpages/LeaveChartDep";
import LeaveChartPosition from "./subpages/LeaveChartPosition";
import LeaveSankey from "./subpages/LeaveSankey";
import LeaveValue from "./subpages/LeaveValue";
import LeaveSalary from "./subpages/LeaveSalary";
import LeaveStaj from "./subpages/LeaveStaj";
import ElderlyIcon from '@mui/icons-material/Elderly';
import FollowTheSignsIcon from '@mui/icons-material/FollowTheSigns';
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import MessageIcon from '@mui/icons-material/Message';
import Dev from "../../../elements/Development/Dev";

const EmployeeLeave = () => {
    const blocks = [
        {
            name: 'Увольнений',
            amount: '29',
            icon: <FollowTheSignsIcon/>
        },
        {
            name: 'Стаж работы',
            amount: '3,0',
            icon: <MessageIcon/>
        },
        {
            name: 'Средний возраст',
            amount: '41',
            icon: <ElderlyIcon/>
        },
        {
            name: 'Средняя з/п',
            amount: '33 тыс.',
            icon: <CurrencyRubleIcon/>
        },
    ]

    return (
        <div>
            <Dev/>
            <div className='miniHRblocks'>
                {
                    blocks.map((item,i) =>{
                        return <div key={i} style={{position: 'relative', overflow: 'hidden'}}>
                            {item.icon}
                            {/*{item.icon && sx={{position:'absolute', top: '-2px', left:'31px',fontSize:'110px', color: '#8181815c'}} }*/}
                            <div>{item.name}</div>
                            <div>{item.amount}</div>
                        </div>
                    })
                }
            </div>
            <div style={{display:'flex'}}>
                <div style={{width: '39%'}}><LeaveChartDep/></div>
                <div style={{width: '60%'}}><LeaveSankey/></div>
            </div>
            <div style={{display:'flex'}}>
                <div style={{width: '35%'}}><LeaveChartPosition/></div>
                <div style={{width: '15%'}}><LeaveValue/></div>
                <div style={{width: '25%'}}><LeaveSalary/></div>
                <div style={{width: '25%'}}><LeaveStaj/></div>
            </div>
        </div>
    );
};

export default EmployeeLeave;