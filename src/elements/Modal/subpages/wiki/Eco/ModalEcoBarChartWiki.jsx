import React from 'react';
import {useTheme} from "../../../../../hook/useTheme";

const ModalEcoBarChartWiki = () => {
    const neonGreen = useTheme('neonGreen')

    return (
        <div className='wikiBlock'>
            <h2 className='wikiTitle' style={{color: neonGreen}}>Годовой «Столбчатая гистограмма»</h2>
            <p>
                Это <b style={{color: neonGreen}}>Столбчатая гистограмма</b>, на которой вы можете увидеть блоки Объектов с групповыми гистограммами.
                Каждый блок имеет рамку, которая окрашивается в один из цветов светофора в зависимости от состояния текущих показателей по Объекту.
                При наведении на наименование объекта отобразится краткая справка с основными данными Объекта.
                При нажатии на кнопку со стрелочкой в правой и левой частях экрана, происходит перелистывание страниц с блоками Объектов.
            </p>
            <p>
                В верхней левой части Панели Реализации находятся фильтры по Холдингу, Заказчику, сортировка по цвету показателей, а также сброс фильтров.
                При выборе Заказчика Холдинг устанавливается автоматически. Если фильтры не выбраны, то на Панели Реализации отображаются все доступные Объекты.
            </p>
            {/* <FormControlLabel sx={{color: 'grey', mt: '15px'}} control={<Switch onClick={turnOff} checked={check} color="success"  size="small"/>} label="Не показывать справку по данному разделу" />*/}
        </div>
    );
};

export default ModalEcoBarChartWiki;