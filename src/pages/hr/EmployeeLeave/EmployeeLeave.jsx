import React from 'react';
import LeaveChartDep from "./subpages/LeaveChartDep";
import LeaveChartPosition from "./subpages/LeaveChartPosition";
import LeaveSankey from "./subpages/LeaveSankey";
import LeaveValue from "./subpages/LeaveValue";
import LeaveSalary from "./subpages/LeaveSalary";
import LeaveStaj from "./subpages/LeaveStaj";

const EmployeeLeave = () => {
    const blocks = [
        {
            name: 'Увольнений',
            amount: '29',
        },
        {
            name: 'Стаж работы',
            amount: '3,0',
        },
        {
            name: 'Средний возраст',
            amount: '41',
        },
        {
            name: 'Средняя з/п',
            amount: '33 тыс.',
        },
    ]

    return (
        <div>
            <div className='miniHRblocks'>
                {
                    blocks.map((item,i) =>{
                        return <div key={i}>
                            <div>{item.name}</div>
                            <div>{item.amount}</div>
                        </div>
                    })
                }
            </div>
            <LeaveStaj/>
            <LeaveSalary/>
            <LeaveValue/>
            <LeaveSankey/>
            <LeaveChartPosition/>
            <LeaveChartDep/>
        </div>
    );
};

export default EmployeeLeave;