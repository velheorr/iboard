import Typography from "@mui/material/Typography";
import {Chip, Divider} from "@mui/material";
import {useTheme} from "../../../hook/useTheme";
import '../modal.scss'



const ModalTitle = ({text})=>{
    const neonGreen = useTheme('neonGreen')
    return <Typography variant="h5" gutterBottom className='modalAuthTitle' sx={{color: neonGreen}}>{text}</Typography>
}
const Formula = ({param, extra}) => {
    return <div className='formula'>
                <div >{param} = </div>
                <div style={{textAlign:'center', }}>
                    <div style={{borderBottom: '1px solid'}}>X</div>
                    <div>Y</div>
                </div>
            {
                extra !== 'no100' && <div >* 100%,</div>
            }

            </div>
}
const FormulaNZP = ({param}) => {
    return <div className='formula'>
        <div >{param} = </div>
        <div style={{textAlign:'center', }}>
            <div style={{borderBottom: '1px solid'}}>X</div>
            <div>(X + Y)</div>
        </div>
    </div>
}

const FormulaBlock = ({param, children, extra = 'regular'}) => {
    const theme = useTheme() ? 'dark' : 'light'
  return <>
      <Divider sx={{mb:'10px', mt: '10px'}}><b>ФОРМУЛА:</b></Divider>
      <div className={`blockItem greyShadow ${theme}`}>
          {
              extra === 'FormulaNZP'
              ? <FormulaNZP param={param}/>
              : <Formula param={param} extra={extra}/>
          }
          <div>
              <p>где:</p>
              {children}
          </div>
      </div>
  </>
}
const RecommendBlock = ({children}) => {
    const theme = useTheme() ? 'dark' : 'light'
    return <>
        <Divider sx={{mb:'10px', mt: '10px'}}><b>РЕКОМЕНДАЦИИ:</b></Divider>
        <div className={`blockItem greenShadow ${theme}`}>
            {children}
        </div>
    </>
}
const RulesBlock = ({children}) => {
    const theme = useTheme() ? 'dark' : 'light'
    return <>
        <Divider sx={{mb:'10px', mt: '10px'}}><b>УСЛОВИЯ ОКРАШИВАНИЯ:</b></Divider>
        <div className={`blockItem blueShadow ${theme}`}>
            {children}
        </div>
    </>
}

export const RealizSPD = ({bg})=> {
    return (
        <>
            <ModalTitle text={'% Cуммы подписанных договорных документов'}/>
            <div className='modalBody2 realization'>
                <FormulaBlock param={'%СПД'}>
                    <p><b>X = Сумма возвращенных договорных документов (Договор, ДС)</b> - это текущая сумма договора с учётом всех заключенных ДС </p>
                    <p><b>Y = Сумма Доходов от реализации</b> - это сумма Доходов от реализации с НДС из строки А10 Плана по экономике Проекта со статусом “01. В работе”</p>
                </FormulaBlock>
                <RecommendBlock>
                    <p>= 0% - Договор по Проекту еще не заключен или не возвращен в архив Компании;</p>
                    <p>&lt;100% - сумма Договора меньше суммы Доходов от Реализации из ППЭ, необходимо проверить актуальность ППЭ;</p>
                    <p>&gt;100% - сумма Договора превышает сумму Доходов от Реализации из ППЭ, необходимо проверить актуальность ППЭ.</p>
                    <p>= 100% - сумма Договора соответствует сумме Доходов от Реализации из ППЭ.</p>
                </RecommendBlock>
                <RulesBlock>
                    <div className='formula2'>
                        <Chip label="0%" sx={{backgroundColor: bg.r, width: '33%'}} />
                        <Chip label="от 0% до 99%, свыше 100%" sx={{backgroundColor: bg.y, width: '33%'}}/>
                        <Chip label="100%" sx={{backgroundColor: bg.g, width: '33%'}} />
                    </div>
                </RulesBlock>
            </div>
        </>
    )
}
export const RealizSPS = ({bg})=> {
    return (
        <>
            <ModalTitle text={'% суммы подписанных смет'}/>
            <div className='modalBody2 realization'>
                <FormulaBlock param={'%СПC'}>
                    <p><b>X = Сумма возвращенных документов-обоснований ценовых параметров</b> - это итоговая сумма из вкладки “ЛСР” документа “Договор / Дополнительное соглашение” по Проекту.</p>
                    <p><b>Y = Сумма Доходов от реализации</b> - это Сумма Доходов от реализации с НДС из строки А10 Плана по экономике Проекта со статусом “01. В работе”</p>
                </FormulaBlock>
                <RecommendBlock>
                    <p>&ne;100% - обоснование объектно-ценовых параметров отсутствует (сметы, протокол согласования цены и др.)
                        или не занесены в систему, необходимо обратиться к <b>Ситниковой В.А.</b> для занесения обоснования;</p>
                    <p>100% - есть обоснование объектно-ценовых параметров в полном объёме.</p>
                </RecommendBlock>
                <RulesBlock>
                    <div className='formula2'>
                        <Chip label="не равно 100%" sx={{backgroundColor: bg.r, width: '20%'}} />
                        <Chip label="отсутствует" sx={{backgroundColor: bg.y, width: '20%'}} />
                        <Chip label="100% или более 90% при процентовании по факту" sx={{backgroundColor: bg.g, width: '60%'}} />
                    </div>
                </RulesBlock>
            </div>
        </>
    )
}
export const RealizOS = ({bg})=> {
    return (
        <>
            <ModalTitle text={'% освоения договорных сроков'}/>
            <div className='modalBody2 realization'>
                <FormulaBlock param={'%ОС'}>
                    <p><b>X = Количество дней, прошедшее с даты начала действия договора</b></p>
                    <p><b>Y = Количество дней действия Договора от даты начала его действия до даты окончания его действия</b></p>
                </FormulaBlock>
                <RecommendBlock>
                    <p>0% - Договор по Проекту еще не заключен или срок его действия еще не начал течь;</p>
                    <p>&gt;100% - срок Договора уже истёк, и идет превышение договорных сроков.</p>
                </RecommendBlock>
                <RulesBlock>
                    <div className='formula2'>
                        <Chip label="Всегда серый." sx={{backgroundColor: bg.grey, width: '70%'}} />
                    </div>
                </RulesBlock>
            </div>
        </>
    )
}
export const RealizPFOT = ({bg})=> {
    return (
        <>
            <ModalTitle text={'% пронормированного ФОТ'}/>
            <div className='modalBody2 realization'>
                <FormulaBlock param={'%ПФОТ'}>
                    <p><b>X = Cуммарная стоимость работ по всем Калькуляциям Объекта с видом операции “СМР”</b> - это Сумма из столбца “СС баз.”</p>
                    <p><b>Y = Плановый ФОТ (Монтажные работы)</b> - это Сумма Доходов от реализации с НДС из строки А10 Плана по экономике Проекта со статусом “01. В работе</p>
                </FormulaBlock>
                <RecommendBlock>
                    <p>0% - не создан План по экономике проекта ИЛИ не созданы Калькуляции Проекта;</p>
                    <p>&lt;70% и &gt;100% - необходимо обратить внимание на качество проработки Плана по экономике Проекта и Калькуляций;</p>
                    <p>&gt;70% и &lt;90% - качество проработки Плана по экономике и Калькуляций оценивается как достаточное (необходимый минимум);</p>
                    <p>&gt;90% и &lt;100% - хорошее качество проработки Плана по экономике и Калькуляций.</p>
                </RecommendBlock>
                <RulesBlock>
                    <div className='formula2'>
                        <Chip label="69% и менее, более 100%" sx={{backgroundColor: bg.r, width: '33%'}} />
                        <Chip label="от 70% до 89%" sx={{backgroundColor: bg.y, width: '33%'}} />
                        <Chip label="от 90% до 100%" sx={{backgroundColor: bg.g, width: '33%'}} />
                    </div>
                </RulesBlock>
            </div>
        </>
    )
}
export const RealizOFOT = ({bg})=> {
    return (
        <>
            <ModalTitle text={'% освоения ФОТ СМР'}/>
            <div className='modalBody2 realization'>
                <FormulaBlock param={'%ОФОТ'}>
                    <p><b>X = Фактический ФОТ (Монтажные работы)</b> - это из строки А20-203 столбца “Документальный факт” отчета “Оперативная экономика по проекту"</p>
                    <p><b>Y = Плановый ФОТ (Монтажные работы)</b> - это Сумма из строки А20-203 столбца “План” отчета “Оперативная экономика по проекту”;</p>
                    <p>Показатель соотносится с %ОС и окрашивается в цвет в зависимости от величины разрыва между двумя показателями.</p>
                </FormulaBlock>
                <RecommendBlock>
                    <p>0% - не создан План по экономике проекта ИЛИ не было создано ни одного Сдельного наряда по Проекту;</p>
                    <p>&lt;100% - размер фактического ФОТ не превышает плановый, который был заложен ГИПом в Плане по экономике Проекта;</p>
                    <p>&gt;100% - размер фактического ФОТ превысил плановый и идёт ПЕРЕРАСХОД ФОТ по Проекту.</p>
                </RecommendBlock>
                <RulesBlock>
                    <p>В сравнении с показателем % ОС.</p>
                    <div className='formula2'>
                        <Chip label="разрыв более 30%" sx={{backgroundColor: bg.r, width: '33%'}} />
                        <Chip label="разрыв от 16% до 30%" sx={{backgroundColor: bg.y, width: '33%'}} />
                        <Chip label="разрыв 15% и менее" sx={{backgroundColor: bg.g, width: '33%'}} />
                    </div>
                </RulesBlock>
            </div>
        </>
    )
}
export const RealizOF = ({bg})=> {
    return (
        <>
            <ModalTitle text={'% освоения финансирования Проекта'}/>
            <div className='modalBody2 realization'>
                <FormulaBlock param={'%ОФ'}>
                    <p><b>X = Плановые затраты</b> - это cуммарное значение в столбце “План” по строкам “Переменные затраты, А20”,
                        “Общепроизводственные затраты Проекта, А30”, “Коммерческие затраты, А40” из отчета “Оперативная экономика по проекту”</p>
                    <p><b>Y = Фактические затраты</b> - это cуммарное значение в столбце “Документальный факт” по строкам “Переменные затраты, А20”,
                        “Общепроизводственные затраты Проекта, А30”, “Коммерческие затраты, А40” из отчета “Оперативная экономика по проекту”;
                        Показатель соотносится с %ОС и окрашивается в цвет в зависимости от величины разрыва между двумя показателями</p>
                </FormulaBlock>
                <RecommendBlock>
                    <p>0% - не создан План по экономике проекта ИЛИ не было затрат по Проекту;</p>
                    <p>&lt;100% - размер фактических затрат не превышает плановый, который был заложен ГИПом в Плане по экономике Проекта;</p>
                    <p>&gt;100% - размер фактических затрат превысил плановый и идёт <span className='tred'>ПЕРЕРАСХОД ФИНАНСИРОВАНИЯ</span> по Проекту.</p>
                </RecommendBlock>
                <RulesBlock>
                    <p>В сравнении с показателем % ОС.</p>
                    <div className='formula2'>
                        <Chip label="разрыв 30% и более" sx={{backgroundColor: bg.r, width: '33%'}} />
                        <Chip label="разрыв от 15% до 29%" sx={{backgroundColor: bg.y, width: '33%'}} />
                        <Chip label="разрыв 14% и менее" sx={{backgroundColor: bg.g, width: '33%'}} />
                    </div>
                </RulesBlock>
            </div>
        </>
    )
}
export const RealizOIM = ({bg})=> {
    return (
        <>
            <ModalTitle text={'% обеспеченности пронормированных ОиМ'}/>
            <div className='modalBody2 realization'>
                <FormulaBlock param={'%ОиМ'} extra={'no100'}>
                    <p><b>X = Суммарная стоимость ОиМ по Оперативным Оприходованиям</b> - это cуммарная стоимость ОиМ из столбца “Сумма по документу” документов
                        “Оперативное поступление” по объекту</p>
                    <p><b>Y = Суммарная стоимость ОиМ по Калькуляциям</b>  это cуммарная стоимость ОиМ из столбца “Сумма ТМЦ” вкладки “Товары и услуги” по Калькуляциям Проекта</p>
                </FormulaBlock>
                <RecommendBlock>
                    <p>0% - ОиМ еще не приходовались на объекте ИЛИ не созданы Калькуляции Проекта;</p>
                    <p>&lt;100% - на объект пришли не все ОиМ, пронормированные ГИПом на вкладке “Товары и услуги” Калькуляции Проекта;</p>
                </RecommendBlock>
                <RulesBlock>
                    <div className='formula2'>
                        <Chip label="Всегда серый." sx={{backgroundColor: bg.grey, width: '70%'}} />
                    </div>
                </RulesBlock>
            </div>
        </>
    )
}
export const RealizNTPLAN = ({bg})=> {
    return (
        <>
            <ModalTitle text={'% запланировано нормативной трудоемкости'}/>
            <div className='modalBody2 realization'>
                <FormulaBlock param={'%НТ(план)'}>
                    <p><b>X = Суммарное количество нормочасов запланированных во всех ОперПланах (как уже выполненных, так и запланированных на текущий момент)</b>
                        - это cуммарная трудоёмкость всех Оперативных Планов Проекта</p>
                    <p><b>Y = Суммарное количество нормочасов по Калькуляциям с видом операции “СМР”</b>
                        - это cуммарная трудоемкость Калькуляций Проекта с видом операции “СМР”</p>
                </FormulaBlock>
                <RecommendBlock>
                    <p>0% - не созданы ОперПланы Проекта ИЛИ не созданы Калькуляции Проекта;</p>
                    <p>&lt;100% - в ОперПланах запланирована часть работ, предусмотренных Калькуляциями Проекта;</p>
                    <p>100% - в ОперПланах запланированы все работы, предусмотренные Калькуляциями Проекта;</p>
                    <p>&gt;100% - в ОперПланах запланировано большее количество работ, чем содержится в Калькуляциях Проекта.</p>
                </RecommendBlock>
                <RulesBlock>
                    <div className='formula2'>
                        <Chip label="Всегда серый." sx={{backgroundColor: bg.grey, width: '70%'}} />
                    </div>
                </RulesBlock>
            </div>
        </>
    )
}
export const RealizNTFACT = ({bg})=> {
    return (
        <>
            <ModalTitle text={'% прогресса нормативной трудоемкости'}/>
            <div className='modalBody2 realization'>
                <FormulaBlock param={'%НТ(факт)'}>
                    <p><b>X = Количество нормочасов по сдельным нарядам с типом работ “СМР, ПНР”</b>
                        - это cуммарная трудоёмкость всех Сдельных нарядов Проекта с типом работ “СМР, ПНР”</p>
                    <p><b>Y = Суммарное количество нормочасов по Калькуляциям с видами операции “СМР” и “ПНР”</b>
                        - это cуммарная трудоемкость Калькуляций Проекта с видами операции “СМР” и “ПНР”</p>
                </FormulaBlock>
                <RecommendBlock>
                    <p>0% - не создавались Сдельные наряды по Проекту ИЛИ не созданы Калькуляции Проекта;</p>
                    <p>&lt;100% - выполнена часть работ, предусмотренных Техрешением (Калькуляциями Проекта);</p>
                    <p>100% - выполнены все работы, предусмотренные Калькуляциями Проекта;</p>
                    <p>&gt;100% - выполнено большее количество работ, чем предусмотрено Техрешением. Необходимо проверить качество Калькуляций Проекта.</p>
                </RecommendBlock>
                <RulesBlock>
                    <div className='formula2'>
                        <Chip label="Всегда серый." sx={{backgroundColor: bg.grey, width: '70%'}} />
                    </div>
                </RulesBlock>
            </div>
        </>
    )
}
export const RealizNZP = ({bg})=> {
    return (
        <>
            <ModalTitle text={'% превращения НЗП в Себестоимость'}/>
            <div className='modalBody2 realization'>
                <FormulaBlock param={'%НЗП'} extra={'FormulaNZP'}>
                    <p><b>X = Нарастающим итогом сумма СС по 1С.ВПКП (списанная ГИПом)</b>- это cумма из строки Доходы (А10)
                        - Сумма из строки Операционная прибыль, А65 из отчета “Оперативная экономика по проекту с себестоимостью”</p>
                    <p><b>Y = Остаток НЗП по Объекту (0-1-2)</b>- это cумма из строки “Операционная прибыль Проекта”
                        столбца “НЗП не включены в себестоимость” из отчета “Оперативная экономика по проекту с себестоимостью”</p>
                </FormulaBlock>
                <RecommendBlock>
                    <p>0% - процентования еще не было ИЛИ отсутствует незаконченное производство;</p>
                    <p>&lt;100% - на объекте есть незаконченное производство;</p>
                    <p>100% - всё незаконченное производство включено в себестоимость;</p>
                </RecommendBlock>
                <RulesBlock>
                    <p>В сравнении с показателем % ОС.</p>
                    <div className='formula2'>
                        <Chip label="разрыв 59% и менее" sx={{backgroundColor: bg.r, width: '33%'}} />
                        <Chip label="разрыв от 60% до 89%" sx={{backgroundColor: bg.y, width: '33%'}} />
                        <Chip label="разрыв 90% и более" sx={{backgroundColor: bg.g, width: '33%'}} />
                    </div>
                </RulesBlock>
            </div>
        </>
    )
}
export const RealizPROC = ({bg})=> {
    return (
        <>
            <ModalTitle text={'% предъявлено Заказчику'}/>
            <div className='modalBody2 realization'>
                <FormulaBlock param={'%ПРОЦ'}>
                    <p><b>X = Сумма “Запроцентовано”</b>- это cумма выписанных документов “Реализация товаров и услуг” по Проекту</p>
                    <p><b>Y = Сумма договора</b>- это текущая сумма договора с учётом всех заключенных ДС</p>
                </FormulaBlock>
                <RecommendBlock>
                    <p>0% - договор еще не заключён ИЛИ не было процентования по Проекту;</p>
                    <p>&lt;100% - запроцентована часть суммы Договора.</p>
                    <p>100% - запроцентована вся сумма Договора.</p>
                    <p>&gt;100% - запроцентована большая сумма, чем сумма Договора.</p>
                </RecommendBlock>
                <RulesBlock>
                    <p>В сравнении с показателем % ОС.</p>
                    <div className='formula2'>
                        <Chip label="разрыв 26% и более" sx={{backgroundColor: bg.r, width: '33%'}} />
                        <Chip label="разрыв от 16% до 25%" sx={{backgroundColor: bg.y, width: '33%'}} />
                        <Chip label="разрыв 15% и менее" sx={{backgroundColor: bg.g, width: '33%'}} />
                    </div>
                </RulesBlock>
            </div>
        </>
    )
}
export const RealizPRIN = ({bg})=> {
    return (
        <>
            <ModalTitle text={'% процентовок принятых Заказчиком'}/>
            <div className='modalBody2 realization'>
                <FormulaBlock param={'%ПРИН'}>
                    <p><b>X = Сумма реализаций, подписанных Заказчиком</b>- это cумма документов “Реализация товаров и услуг” по Проекту, которые подписаны Заказчиком</p>
                    <p><b>Y = Сумма договора</b>- это текущая сумма договора с учётом всех заключенных ДС</p>
                </FormulaBlock>
                <RecommendBlock>
                    <p>0% - договор еще не заключён ИЛИ не выписывались Процентовки по Проекту ИЛИ Заказчик не подписал ни одной Процентовки;</p>
                    <p>&lt;100% - заказчик подписал Процентовки на часть суммы Договора;</p>
                    <p>100% - заказчик подписал Процентовки на всю сумму Договора;</p>
                    <p>&gt;100% - заказчик подписал Процентовки на большую сумму, чем сумма Договора.</p>
                </RecommendBlock>
                <RulesBlock>
                    <p>В сравнении с показателем % ОС.</p>
                    <div className='formula2'>
                        <Chip label="%ПРИН < %ПРОЦ" sx={{backgroundColor: bg.y, width: '50%'}} />
                        <Chip label="%ПРИН = %ПРОЦ" sx={{backgroundColor: bg.g, width: '50%'}} />
                    </div>
                </RulesBlock>
            </div>
        </>
    )
}
