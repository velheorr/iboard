import '../goals.scss'
import BlockShadow from "../../../elements/BlockShadow";
import Scroll from "../../../elements/Scroll";
import TableItem from "../../../elements/Table/TableItem";
import TableHead from "../../../elements/Table/TableHead";
import MiniLineChart from "./MiniLineChart";

const GoalMatrix = () => {
    return (
        <div>
            <div className='header'>
                <div>Винокуров АВ</div>
                <div>ПРОЕКТНЫЙ ДИРЕКТОР</div>
                <div>
                    ЦКП: Своевременно и системно эффективно реализуемый портфель Контрактов с предсказуемыми (в каждый момент времени)
                    результатами выше плановых и высокой степенью удовлетворенности Заказчика
                </div>
                <div>Результативность текущая: 106%</div>
                <div>Руководитель: Тутулин ИА</div>
            </div>
            <div>
                <BlockShadow >
                    <TableHead>
                        <div className='blue' style={{width: '3%'}} >сфера</div>
                        <div className='red' style={{width: '3%'}} >цель</div>
                        <div className='green' style={{width: '7%'}} >Показатели РЕЗУЛЬТИРУЮЩИЕ:</div>
                        <div className='orange' style={{width: '7%'}} >Показатели ОПЕРЕЖАЮЩИЕ:</div>

                        <div style={{width: '10%'}} >Целевой вектор:</div>
                        <div style={{width: '5%'}} >Вес показателя</div>
                        <div style={{width: '10%'}} >РЕЗУЛЬТАТИВНОСТЬ</div>
                        <div style={{width: '6%'}} >СверхЦелевое значение</div>
                        <div style={{width: '6%'}} >Целевое значение</div>
                        <div style={{width: '6%'}} >Приемлемое значение</div>
                        <div style={{width: '6%'}} >Критическое значение</div>
                        <div style={{width: '10%'}} >Миниграфик (-6 мес)</div>
                        <div style={{width: '10%'}} >Тренд</div>
                        <div style={{width: '6%'}} >Фактическое текущее значение
                        </div>
                    </TableHead>
                </BlockShadow>
                <Scroll h='h268'>
                    <div className='gtitle blue'>Репутация (Предсказуемость)</div>
                    <div className='gtitle red'>Ускорение объемов выполнения Работ</div>
                    <GreenBlock text={'Количество Проектов завершенных позже договорного срока, шт'}>
                        <div style={{width: '10%'}} >Снижение -</div>
                        <div style={{width: '5%'}} >10%</div>
                        <div style={{width: '10%'}} >86%</div>
                        <div style={{width: '6%'}} >10</div>
                        <div style={{width: '6%'}} >10</div>
                        <div style={{width: '6%'}} >2</div>
                        <div style={{width: '6%'}} >5</div>
                        <div style={{width: '10%'}} ><MiniLineChart/></div>
                        <div style={{width: '10%'}} >Чрезвычайное</div>
                        <div style={{width: '6%'}} >1</div>
                    </GreenBlock>
                    <OrangeBlock text={'Процентная пара: % освоения сроков / % освоения Процентования (по-Проектно)'}>
                        <div style={{width: '8%'}} >Рост +</div>
                        <div style={{width: '8%'}} >10%</div>
                        <div style={{width: '8%'}} >86%</div>
                        <div style={{width: '8%'}} >-</div>
                        <div style={{width: '8%'}} >-</div>
                        <div style={{width: '8%'}} >2</div>
                        <div style={{width: '8%'}} >5</div>
                        <div style={{width: '8%'}} ><MiniLineChart/></div>
                        <div style={{width: '8%'}} >Чрезвычайное</div>
                        <div style={{width: '8%'}} >1</div>
                    </OrangeBlock>
                    <GreenBlock text={'% Проектов (по сумме договора) завершенных позже договорного срока, %'}>
                        <div style={{width: '8%'}} >Снижение -</div>
                        <div style={{width: '8%'}} >10%</div>
                        <div style={{width: '8%'}} >86%</div>
                        <div style={{width: '8%'}} >-</div>
                        <div style={{width: '8%'}} >-</div>
                        <div style={{width: '8%'}} >2</div>
                        <div style={{width: '8%'}} >5</div>
                        <div style={{width: '8%'}} ><MiniLineChart/></div>
                        <div style={{width: '8%'}} >Чрезвычайное</div>
                        <div style={{width: '8%'}} >1</div>
                    </GreenBlock>
                    <div className='gtitle blue'>Эффективность</div>
                    <div className='gtitle red'>Минимизировать Потери в Проектах (в тч простои)</div>
                    <GreenBlock text={'Среднее отклонение фактической Рентабельности проектов по ВП от плановой, %'}>

                    </GreenBlock>
                    <OrangeBlock text={'Сумма Потерь в Проектах (Накинеши, Простои, Штрафы, Переплаты по спецтехнике…), руб'}>

                    </OrangeBlock>
                    <OrangeBlock text={'Процентное трио: Плановая Рентабельность / Фактическая (накопленная) Рент / Прогнозная Рент'}>

                    </OrangeBlock>
                    <div className='gtitle red'>Повышать операционную эффективность в Проектах</div>
                    <GreenBlock text={'ВП на одного рабочего в год, руб'}>

                    </GreenBlock>
                    <OrangeBlock text={'ВП на 1 Рабочего в месяц в среднем по всем Проектам, руб'}>

                    </OrangeBlock>
                    <OrangeBlock text={'% простоя Рабочих вне Объектов от всего фонда времени накопительным итогом, %'}>

                    </OrangeBlock>
                    <OrangeBlock text={'КЭФОР (коэф эффективности организации работ)'}>

                    </OrangeBlock>
                    <div className='gtitle red'>Сокращать цикл процентования (сделано - запроцентовано)</div>
                    <GreenBlock text={'Сумма НЗП накопленным итогом, руб'}>

                    </GreenBlock>
                    <OrangeBlock text={'Суммовая пара (за период): Сумма НЗП / Сумма Себестоимости (ВПКП)'}>

                    </OrangeBlock>
                    <OrangeBlock text={'Суммовая пара (за период): Сумма запроцентовано / План процентования (ближайший месяц)'}>

                    </OrangeBlock>

                    <div className='gtitle blue'>Доходность</div>
                    <div className='gtitle red'>Устойчивый рост Операционной Прибыли Проектов</div>
                    <GreenBlock text={'Сумма запроцентованной Управленческой Прибыли, руб\n'}>

                    </GreenBlock>
                    <OrangeBlock text={'Процентная пара: % прогресса по нормативной трудоемкости / % освоения Прямых затрат А20'}>

                    </OrangeBlock>
                </Scroll>
            </div>
        </div>
    );
};

export default GoalMatrix;

const GreenBlock = ({text, children}) => {

    return (
        <TableItem >
            <div style={{width: '2%'}} ></div>
            <div className='green' style={{width: '18%'}}>{text}</div>
            {children}
        </TableItem>
    )
}
const OrangeBlock = ({text, children}) => {

    return (
        <TableItem >
            <div style={{width: '3%'}} ></div>
            <div className='orange' style={{width: '17%'}}>{text}</div>
            {children}
        </TableItem>
    )
}