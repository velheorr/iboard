import {colorForChart} from "./realizationChartRules";


export const configRealizationData = (item) =>{
    let data = []
    const checkNum = (num) => {
        return num > 125 ? 125 : num
    }

        data.push(
            {
                name: '% СПД',
                info: '% суммы подписанных договорных документов',
                uv:  checkNum(item.ПроцентПодписанныхДоговоров),
                realNumber: item.ПроцентПодписанныхДоговоров,
                dynamics: item.ПроцентПодписанныхДоговоровДинамика,
                barColor: colorForChart('% СПД', item.ПроцентПодписанныхДоговоров, '')
            },
            {
                name: '% СПС',
                info: 'Суммы подписанных смет',
                uv:  checkNum(item.ПроцентСуммыПодписанныхСмет),
                realNumber: item.ПроцентСуммыПодписанныхСмет,
                dynamics: item.ПроцентСуммыПодписанныхСметДинамика,
                barColor: colorForChart('% СПС', item.ПроцентСуммыПодписанныхСмет, '')
            },
            {
                name: '% ОС',
                info: '% освоения договорных сроков',
                uv: checkNum(item.ПроцентОсвоенияДогСроков),
                realNumber: item.ПроцентОсвоенияДогСроков,
                dynamics: item.ПроцентОсвоенияДогСроковДинамика,
                barColor: colorForChart('% ОС', item.ПроцентОсвоенияДогСроков, ''),
            },
            {
                name: '% ПФОТ',
                info: '% прономерованного ФОТ',
                uv: checkNum(item.ПроцентПронормированногоФОТ),
                realNumber: item.ПроцентПронормированногоФОТ,
                dynamics: item.ПроцентПронормированногоФОТДинамика,
                barColor: colorForChart('% ПФОТ', item.ПроцентПронормированногоФОТ, ''),
            },
            {
                name: '% ОФОТ',
                info: '% освоения ФОТ СМР',
                uv: checkNum(item.ПроцентОсвоенияФОТ),
                realNumber: item.ПроцентОсвоенияФОТ,
                dynamics: item.ПроцентОсвоенияФОТДинамика,
                barColor: colorForChart('% ОФОТ', item.ПроцентОсвоенияФОТ, item.ПроцентОсвоенияДогСроков),
            },
            {
                name: '% ОФ',
                info: '% освоения финансирования проекта',
                uv: checkNum(item.ПроцентОсвоенияФин),
                realNumber: item.ПроцентОсвоенияФин,
                dynamics: item.ПроцентОсвоенияФинДинамика,
                barColor: colorForChart('% ОФ', item.ПроцентОсвоенияФин, item.ПроцентОсвоенияДогСроков),
            },
            {
                name: '% ОиМ',
                info: '% обеспеченности пронормированных ОиМ',
                uv: checkNum(item.ПроцентПронормированногоОИМ),
                realNumber: item.ПроцентПронормированногоОИМ,
                dynamics: item.ПроцентПронормированногоОИМДинамика,
                barColor: colorForChart('% ОиМ', item.ПроцентПронормированногоОИМ, ''),
            },
            {
                name: '% НТ (план)',
                info: '% запланированной нормативной трудоемкости',
                uv: checkNum(item.ПроцентПроцентЗаплНТ),
                realNumber: item.ПроцентПроцентЗаплНТ,
                dynamics: item.ПроцентПроцентЗаплНТДинамика,
                barColor: colorForChart('% НТ (план)', item.ПроцентПроцентЗаплНТ, ''),
            },
            {
                name: '% НТ (факт)',
                info: '% прогресса нормативной трудоемкости',
                uv: checkNum(item.ПроцентПрогрессаНЧ),
                realNumber: item.ПроцентПрогрессаНЧ,
                dynamics: item.ПроцентПрогрессаНЧДинамика,
                barColor: colorForChart('% НТ (факт)', item.ПроцентПрогрессаНЧ, ''),
            },
            {
                name: '% НЗП',
                info: '% превращения НЗП в Себестоимость',
                uv: checkNum(item.ПроцентПревращенияНЗП),
                realNumber: item.ПроцентПревращенияНЗП,
                dynamics: item.ПроцентПревращенияНЗПДинамика,
                barColor: colorForChart('% НЗП', item.ПроцентПревращенияНЗП, item.ПроцентОсвоенияДогСроков),
            },
            {
                name: '% ПРОЦ',
                info: '% предьявлено Заказчику',
                uv: checkNum(item.ПроцентПредъявленныхРТИУ),
                realNumber: item.ПроцентПредъявленныхРТИУ,
                dynamics: item.ПроцентПредъявленныхРТИУДинамика,
                barColor: colorForChart('% ПРОЦ', item.ПроцентПредъявленныхРТИУ, item.ПроцентОсвоенияДогСроков),
            },
            {
                name: '% ПРИН',
                info: '% процентовок принятых Заказчиком',
                uv: checkNum(item.ПроцентПринятыхРТИУ),
                realNumber: item.ПроцентПринятыхРТИУ,
                dynamics: item.ПроцентПредъявленныхРТИУДинамика,
                barColor: colorForChart('% ПРИН', item.ПроцентПринятыхРТИУ, item.ПроцентПредъявленныхРТИУ),
            },
        )

    return data

}