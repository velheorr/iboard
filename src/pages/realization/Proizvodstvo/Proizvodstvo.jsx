import React from 'react';
import './Proizvodstvo.scss'
import ElemTab from "../../../elements/Tabs/ElemTab";
import TableHead from "../../../elements/Table/TableHead";
import TableItem from "../../../elements/Table/TableItem";


const Proizvodstvo = () => {
    return (
        <div>
            <div style={{padding: '0px 5px'}}>
                <ElemTab arr={['Без выработки','Выработка','Табель','Заработок',"ФОТ", 'Планы','Эфффективность']}>
                    <div>
                        <TableHead extra={'tableFormat'}>
                            <div style={{flexBasis: '10%'}}><span> Код</span></div>
                            <div style={{flexBasis: '15%'}}><span> Объект</span></div>
                            <div style={{flexBasis: '10%'}}><span> РС</span></div>
                            <div style={{flexBasis: '10%'}}><span> Кол-во Рабочих/Бригадиров</span></div>
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
                    <div>2</div>
                    <div>2</div>
                    <div>2</div>
                    <div>2</div>
                </ElemTab>
            </div>
        </div>
    );
};

export default Proizvodstvo;