import '../goals.scss'
import BlockShadow from "../../../elements/BlockShadow";
import TableItem from "../../../elements/Table/TableItem";
import TableHead from "../../../elements/Table/TableHead";
import MiniLineChart from "./MiniLineChart";
import Scroll from "../../../elements/Scroll/Scroll";

const GoalMatrix = ({data}) => {
    if (!data){ return ''}
    console.log(data)
    return (
        <div>
            <div className='headerGoal'>
                <div>ФИО: {data.name}</div>
                <div>Должность: {data.position}</div>
                <div>
                    ЦКП: ----------------
                </div>
                <div>Результативность текущая: ---------</div>
                <div>Руководитель: -----------</div>
            </div>
            {
                data.roles.map((item,i)=>{
                    //console.log(item)
                    return <div key={i}>
                        <div className='headerGoal'>
                            <div>Результативность текущая: {item.result}</div>
                            <div>ЦКП: {item.ckp}</div>
                            <div>Руководитель: {item.boss}</div>
                        </div>
                        <BlockShadow >
                            <TableHead extra={'tac fs13'}>
                                <div className='blue' style={{width: '3%', fontStyle: 'italic'}} >сфера</div>
                                <div className='red' style={{width: '3%', fontStyle: 'italic'}} >цель</div>
                                <div className='green' style={{width: '7%', fontStyle: 'italic'}} >РЕЗУЛЬТИРУЮЩИЕ</div>
                                <div className='orange' style={{width: '7%', fontStyle: 'italic'}} >ОПЕРЕЖАЮЩИЕ</div>

                                <div style={{width: '10%'}} >Вектор:</div>
                                <div style={{width: '10%'}} >Вес показателя</div>
                                <div style={{width: '10%'}} >РЕЗУЛЬТАТИВНОСТЬ</div>
                                <div style={{width: '6%'}} >СверхЦелевое</div>
                                <div style={{width: '6%'}} >Целевое</div>
                                <div style={{width: '6%'}} >Приемлемое</div>
                                <div style={{width: '6%'}} >Критическое</div>
                                <div style={{width: '10%'}} >Миниграфик (-6 мес)</div>
                                <div style={{width: '10%'}} >Тренд</div>
                                <div style={{width: '6%'}} >ФАКТ значение</div>
                            </TableHead>
                        </BlockShadow>
                        <Scroll h='h268' >
                            {
                                item.sfera.map((sf,idx)=>{
                                    return <div key={idx}>
                                        <div className='gtitle blue'>{sf.sferaName}</div>
                                        {
                                            sf.goals.map((g, idx2)=>{
                                                return <div key={idx2}>
                                                    <div className='gtitle red'>{g.goalName}</div>
                                                    {
                                                        g.data.map((data, idx3)=>{
                                                            if(data.resultparam) {

                                                                return <GreenBlock text={data.dataName} key={idx3}>
                                                                    <div className='tac'
                                                                         style={{width: '10%'}}>{data.vector}</div>
                                                                    <div className='tac'
                                                                         style={{width: '10%'}}>{data.ves}</div>
                                                                    <div className='tac'
                                                                         style={{width: '10%'}}>{data.result}</div>
                                                                    <div className='tac'
                                                                         style={{width: '6%'}}>{data.sverhGoal}</div>
                                                                    <div className='tac'
                                                                         style={{width: '6%'}}>{data.goal}</div>
                                                                    <div className='tac'
                                                                         style={{width: '6%'}}>{data.good}</div>
                                                                    <div className='tac'
                                                                         style={{width: '6%'}}>{data.critical}</div>
                                                                    <div className='tac' style={{width: '10%'}}>
                                                                        <MiniLineChart/></div>
                                                                    <div className='tac'
                                                                         style={{width: '10%'}}>{data.trend}</div>
                                                                    <div className='tac'
                                                                         style={{width: '6%'}}>{new Intl.NumberFormat("ru").format(data.fact)}</div>
                                                                </GreenBlock>
                                                            } else {
                                                                return <OrangeBlock text={data.dataName} key={idx3}>
                                                                    <div className='tac'
                                                                         style={{width: '10%'}}>{data.vector}</div>
                                                                    <div className='tac'
                                                                         style={{width: '10%'}}>{data.ves}</div>
                                                                    <div className='tac'
                                                                         style={{width: '10%'}}>{data.result}</div>
                                                                    <div className='tac'
                                                                         style={{width: '6%'}}>{data.sverhGoal}</div>
                                                                    <div className='tac'
                                                                         style={{width: '6%'}}>{data.goal}</div>
                                                                    <div className='tac'
                                                                         style={{width: '6%'}}>{data.good}</div>
                                                                    <div className='tac'
                                                                         style={{width: '6%'}}>{data.critical}</div>
                                                                    <div className='tac' style={{width: '10%'}}>
                                                                        <MiniLineChart/></div>
                                                                    <div className='tac'
                                                                         style={{width: '10%'}}>{data.trend}</div>
                                                                    <div className='tac'
                                                                         style={{width: '6%'}}>{new Intl.NumberFormat("ru").format(data.fact)}</div>
                                                                </OrangeBlock>
                                                            }
                                                        })
                                                    }
                                                </div>
                                            })
                                        }
                                    </div>
                                })
                            }
                        </Scroll>
                    </div>
                })
            }


            {/*<div>
                <BlockShadow >
                    <TableHead extra={'tac fs13'}>
                        <div className='blue' style={{width: '3%', fontStyle: 'italic'}} >сфера</div>
                        <div className='red' style={{width: '3%', fontStyle: 'italic'}} >цель</div>
                        <div className='green' style={{width: '7%', fontStyle: 'italic'}} >РЕЗУЛЬТИРУЮЩИЕ</div>
                        <div className='orange' style={{width: '7%', fontStyle: 'italic'}} >ОПЕРЕЖАЮЩИЕ</div>
                        <div style={{width: '10%'}} >Вектор:</div>
                        <div style={{width: '10%'}} >Вес показателя</div>
                        <div style={{width: '10%'}} >РЕЗУЛЬТАТИВНОСТЬ</div>
                        <div style={{width: '6%'}} >СверхЦелевое</div>
                        <div style={{width: '6%'}} >Целевое</div>
                        <div style={{width: '6%'}} >Приемлемое</div>
                        <div style={{width: '6%'}} >Критическое</div>
                        <div style={{width: '10%'}} >Миниграфик (-6 мес)</div>
                        <div style={{width: '10%'}} >Тренд</div>
                        <div style={{width: '6%'}} >ФАКТ значение</div>
                    </TableHead>
                </BlockShadow>
                <Scroll h='h268'>
                    <div className='gtitle blue'>Репутация (Предсказуемость)</div>
                    <div className='gtitle red'>Ускорение объемов выполнения Работ</div>
                    <GreenBlock text={'Количество Проектов завершенных позже договорного срока, шт'}>
                        <div className='tac' style={{width: '10%'}} >Снижение -</div>
                        <div className='tac' style={{width: '10%'}} >10%</div>
                        <div className='tac' style={{width: '10%'}} >86%</div>
                        <div className='tac' style={{width: '6%'}} >10</div>
                        <div className='tac' style={{width: '6%'}} >10</div>
                        <div className='tac' style={{width: '6%'}} >2</div>
                        <div className='tac' style={{width: '6%'}} >5</div>
                        <div className='tac' style={{width: '10%'}} ><MiniLineChart/></div>
                        <div className='tac' style={{width: '10%'}} >Чрезвычайное</div>
                        <div className='tac' style={{width: '6%'}} >1</div>
                    </GreenBlock>
                    <OrangeBlock text={'Процентная пара: % освоения сроков / % освоения Процентования (по-Проектно)'}>
                        <div className='tac' style={{width: '10%'}} >Рост +</div>
                        <div className='tac' style={{width: '10%'}} >10%</div>
                        <div className='tac' style={{width: '10%'}} >86%</div>
                        <div className='tac' style={{width: '6%'}} >10</div>
                        <div className='tac' style={{width: '6%'}} >10</div>
                        <div className='tac' style={{width: '6%'}} >2</div>
                        <div className='tac' style={{width: '6%'}} >5</div>
                        <div className='tac' style={{width: '10%'}} ><MiniLineChart/></div>
                        <div className='tac' style={{width: '10%'}} >Чрезвычайное</div>
                        <div className='tac' style={{width: '6%'}} >1</div>
                    </OrangeBlock>
                    <GreenBlock text={'% Проектов (по сумме договора) завершенных позже договорного срока, %'}>
                        <div className='tac' style={{width: '10%'}} >Снижение -</div>
                        <div className='tac' style={{width: '10%'}} >10%</div>
                        <div className='tac' style={{width: '10%'}} >86%</div>
                        <div className='tac' style={{width: '6%'}} >10</div>
                        <div className='tac' style={{width: '6%'}} >10</div>
                        <div className='tac' style={{width: '6%'}} >2</div>
                        <div className='tac' style={{width: '6%'}} >5</div>
                        <div className='tac' style={{width: '10%'}} ><MiniLineChart/></div>
                        <div className='tac' style={{width: '10%'}} >Чрезвычайное</div>
                        <div className='tac' style={{width: '6%'}} >1</div>
                    </GreenBlock>
                    <div className='gtitle blue'>Эффективность</div>
                    <div className='gtitle red'>Минимизировать Потери в Проектах (в тч простои)</div>
                    <GreenBlock text={'Среднее отклонение фактической Рентабельности проектов по ВП от плановой, %'}>
                        <div className='tac' style={{width: '10%'}} >Снижение -</div>
                        <div className='tac' style={{width: '10%'}} >10%</div>
                        <div className='tac' style={{width: '10%'}} >86%</div>
                        <div className='tac' style={{width: '6%'}} >10</div>
                        <div className='tac' style={{width: '6%'}} >10</div>
                        <div className='tac' style={{width: '6%'}} >2</div>
                        <div className='tac' style={{width: '6%'}} >5</div>
                        <div className='tac' style={{width: '10%'}} ><MiniLineChart/></div>
                        <div className='tac' style={{width: '10%'}} >Чрезвычайное</div>
                        <div className='tac' style={{width: '6%'}} >1</div>
                    </GreenBlock>
                    <OrangeBlock text={'Сумма Потерь в Проектах (Накинеши, Простои, Штрафы, Переплаты по спецтехнике…), руб'}>
                        <div className='tac' style={{width: '10%'}} >Снижение -</div>
                        <div className='tac' style={{width: '10%'}} >10%</div>
                        <div className='tac' style={{width: '10%'}} >86%</div>
                        <div className='tac' style={{width: '6%'}} >10</div>
                        <div className='tac' style={{width: '6%'}} >10</div>
                        <div className='tac' style={{width: '6%'}} >2</div>
                        <div className='tac' style={{width: '6%'}} >5</div>
                        <div className='tac' style={{width: '10%'}} ><MiniLineChart/></div>
                        <div className='tac' style={{width: '10%'}} >Чрезвычайное</div>
                        <div className='tac' style={{width: '6%'}} >1</div>
                    </OrangeBlock>
                    <OrangeBlock text={'Процентное трио: Плановая Рентабельность / Фактическая (накопленная) Рент / Прогнозная Рент'}>
                        <div className='tac' style={{width: '10%'}} >Снижение -</div>
                        <div className='tac' style={{width: '10%'}} >10%</div>
                        <div className='tac' style={{width: '10%'}} >86%</div>
                        <div className='tac' style={{width: '6%'}} >10</div>
                        <div className='tac' style={{width: '6%'}} >10</div>
                        <div className='tac' style={{width: '6%'}} >2</div>
                        <div className='tac' style={{width: '6%'}} >5</div>
                        <div className='tac' style={{width: '10%'}} ><MiniLineChart/></div>
                        <div className='tac' style={{width: '10%'}} >Чрезвычайное</div>
                        <div className='tac' style={{width: '6%'}} >1</div>
                    </OrangeBlock>
                    <div className='gtitle red'>Повышать операционную эффективность в Проектах</div>
                    <GreenBlock text={'ВП на одного рабочего в год, руб'}>
                        <div className='tac' style={{width: '10%'}} >Снижение -</div>
                        <div className='tac' style={{width: '10%'}} >10%</div>
                        <div className='tac' style={{width: '10%'}} >86%</div>
                        <div className='tac' style={{width: '6%'}} >10</div>
                        <div className='tac' style={{width: '6%'}} >10</div>
                        <div className='tac' style={{width: '6%'}} >2</div>
                        <div className='tac' style={{width: '6%'}} >5</div>
                        <div className='tac' style={{width: '10%'}} ><MiniLineChart/></div>
                        <div className='tac' style={{width: '10%'}} >Чрезвычайное</div>
                        <div className='tac' style={{width: '6%'}} >1</div>
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
            </div>*/}
        </div>
    );
};

export default GoalMatrix;

const GreenBlock = ({text,extra, children}) => {

    return (
        <TableItem extra={'pad0'}>
            <div style={{width: '2%'}} ></div>
            <div className='green' style={{width: '18%'}}>{text}</div>
            {children}
        </TableItem>
    )
}
const OrangeBlock = ({text,extra, children}) => {

    return (
        <TableItem extra={'pad0'}>
            <div style={{width: '3%'}} ></div>
            <div className='orange' style={{width: '17%'}}>{text}</div>
            {children}
        </TableItem>
    )
}