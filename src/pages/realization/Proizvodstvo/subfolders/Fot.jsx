import React from 'react';
import TableHead from "../../../../elements/Table/TableHead";
import TableItem from "../../../../elements/Table/TableItem";

const Fot = () => {
    return (
        <div>
            <TableHead extra={'tableFormat'}>
                <div style={{flexBasis: '10%'}}><span> Код</span></div>
                <div style={{flexBasis: '15%'}}><span> Объект</span></div>
                <div style={{flexBasis: '10%'}}><span> РС</span></div>
                <div style={{flexBasis: '10%'}}>НА ТЕКУЩУЮ ДАТУ НА ОБЪЕКТЕ: КОЛ-ВО РАБОЧИХ / БРИГАДИРОВ</div>
                <div><span> 24.06.2024</span></div>
                <div><span> 25.06.2024</span></div>
                <div><span> 27.06.2024</span></div>
                <div><span> 28.06.2024</span></div>
                <div><span> 29.06.2024</span></div>
                <div><span> 30.06.2024</span></div>

            </TableHead>
            <TableItem>
                <div style={{flexBasis: '10%'}}>15021</div>
                <div style={{flexBasis: '15%'}}>ЛУКОМ-А-УРАЛ ТЦ / 2023 СМР ИЗП Эстакада ТН ЛУКОМ-А-УРАЛ ТЦ</div>
                <div style={{flexBasis: '10%'}}>Болотников В.В.</div>
                <div style={{flexBasis: '10%'}}>0/0</div>
            </TableItem>
        </div>
    );
};

export default Fot;