


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
                forColorFunc: '',
            },
            {
                name: '% СПС',
                info: 'Суммы подписанных смет',
                uv:  checkNum(item.ПроцентСуммыПодписанныхСмет),
                realNumber: item.ПроцентСуммыПодписанныхСмет,
                forColorFunc: '',
            },
            {
                name: '% ОС',
                info: '% освоения договорных сроков',
                uv: checkNum(item.ПроцентОсвоенияДогСроков),
                realNumber: item.ПроцентОсвоенияДогСроков,
                forColorFunc: '',
            },
            {
                name: '% ПФОТ',
                info: '% прономерованного ФОТ',
                uv: checkNum(item.ПроцентПронормированногоФОТ),
                realNumber: item.ПроцентПронормированногоФОТ,
                forColorFunc: item.ПроцентОсвоенияДогСроков,
            },
            {
                name: '% ОФОТ',
                info: '% освоения ФОТ СМР',
                uv: checkNum(item.ПроцентОсвоенияФОТ),
                realNumber: item.ПроцентОсвоенияФОТ,
                forColorFunc: item.ПроцентОсвоенияДогСроков,
            },
            {
                name: '% ОФ',
                info: '% освоения финансирования проекта',
                uv: checkNum(item.ПроцентОсвоенияФин),
                realNumber: item.ПроцентОсвоенияФин,
                forColorFunc: item.ПроцентОсвоенияДогСроков,
            },
            {
                name: '% ОиМ',
                info: '% обеспеченности пронормированных ОиМ',
                uv: checkNum(item.ПроцентПронормированногоОИМ),
                realNumber: item.ПроцентПронормированногоОИМ,
                forColorFunc: '',
            },
            {
                name: '% НТ (план)',
                info: '% запланированной нормативной трудоемкости',
                uv: checkNum(item.ПроцентПроцентЗаплНТ),
                realNumber: item.ПроцентПроцентЗаплНТ,
                forColorFunc: '',
            },
            {
                name: '% НТ (факт)',
                info: '% прогресса нормативной трудоемкости',
                uv: checkNum(item.ПроцентПрогрессаНЧ),
                realNumber: item.ПроцентПрогрессаНЧ,
                forColorFunc: '',
            },
            {
                name: '% НЗП',
                info: '% превращения НЗП в Себестоимость',
                uv: checkNum(item.ПроцентПревращенияНЗП),
                realNumber: item.ПроцентПревращенияНЗП,
                forColorFunc: item.ПроцентОсвоенияДогСроков,
            },
            {
                name: '% ПРОЦ',
                info: '% предьявлено Заказчику',
                uv: checkNum(item.ПроцентПредъявленныхРТИУ),
                realNumber: item.ПроцентПредъявленныхРТИУ,
                forColorFunc: item.ПроцентОсвоенияДогСроков,
            },
            {
                name: '% ПРИН',
                info: '% процентовок принятых Заказчиком',
                uv: checkNum(item.ПроцентПринятыхРТИУ),
                realNumber: item.ПроцентПринятыхРТИУ,
                forColorFunc: item.ПроцентПредъявленныхРТИУ,
            },
        )

    return data

}