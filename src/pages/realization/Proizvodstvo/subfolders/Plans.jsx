import React from 'react';
import TableHead from "../../../../elements/Table/TableHead";
import TableItem from "../../../../elements/Table/TableItem";

const Plans = () => {
    return (
        <div>
            <TableHead extra={'tableFormat'}>
                <div style={{flexBasis: '10%'}}><span> Код</span></div>
                <div style={{flexBasis: '15%'}}><span> Объект</span></div>
                <div style={{flexBasis: '10%'}}><span> РС</span></div>
                <div style={{flexBasis: '10%'}}>ДАТА ПОСЛЕДНЕГО ОБНОВЛЕНИЯ ОПЕРПЛАНА</div>
                <div style={{flexBasis: '10%'}}>КОЛ-ВО ДНЕЙ В ПЛАНИРУЕМОМ ПЕРИОДЕ</div>
                <div style={{flexBasis: '10%'}}>НОРМАТИВНАЯ ТРУДОЁМКОСТЬ ОПЕРПЛАНОВ, Н*ЧАС</div>
                <div style={{flexBasis: '10%'}}>ПЛАНОВЫЙ НОРМАТИВ НА 1 РАБОЧЕГО НА 1 СМЕНУ, Н*ЧАС</div>
                <div style={{flexBasis: '10%'}}>ПРОЦЕНТ ДОСТУПНОГО К ВЫПОЛНЕНИЮ ОБЪЕМА НГЗ ИЗ ОПЕРПЛАНА С ТОЧКИ ЗРЕНИЯ ОБЕСПЕЧЕННОСТИ ОИМ</div>
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

export default Plans;