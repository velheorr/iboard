import React from 'react';
import TableHead from "../../../../../elements/Table/TableHead";
import TableItem from "../../../../../elements/Table/TableItem";
import PortretMiniBar from "./PortretMiniBar";
import '../../../hr.scss'

const PortretParameters = () => {
    return (
        <div>
            <div style={{margin: '15px'}}>
                <TableHead>
                    <div style={{width: '20%'}} className=''><span> Должность</span></div>
                    <div style={{width: '20%'}} className='listIcon'><span> Возраст</span></div>
                    <div style={{width: '20%'}} className='listIcon'><span> ФИО</span></div>
                    <div style={{width: '20%'}} className='listIcon'><span> Стаж</span></div>
                    <div style={{width: '20%'}} className='listIcon'><span> Статус</span></div>
                </TableHead>
                <TableItem extra={'chartInTable'}>
                    <div style={{width: '20%'}}>Инженер</div>
                    <div style={{width: '20%', textAlign: 'center', display: 'flex', alignItems: 'center'}}><PortretMiniBar data={24}/>24</div>
                    <div style={{width: '20%'}}>Иванов Иван Иванович</div>
                    <div style={{width: '20%', textAlign: 'center', display: 'flex', alignItems: 'center'}}><PortretMiniBar data={2.61}/>2.61</div>
                    <div style={{width: '20%'}}>не ключевой</div>
                </TableItem>
                <TableItem extra={'chartInTable'}>
                    <div style={{width: '20%'}}>Инженер</div>
                    <div style={{width: '20%', textAlign: 'center', display: 'flex', alignItems: 'center'}}><PortretMiniBar data={34}/>34</div>
                    <div style={{width: '20%'}}>Иванов Иван Иванович</div>
                    <div style={{width: '20%', textAlign: 'center', display: 'flex', alignItems: 'center'}}><PortretMiniBar data={3.9}/>3.9</div>
                    <div style={{width: '20%'}}>ключевой</div>
                </TableItem>
            </div>
        </div>
    );
};

export default PortretParameters;