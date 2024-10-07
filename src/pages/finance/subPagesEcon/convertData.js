const mln = (num) =>{
    let newNum = num !== 0 ? (num / 1000000).toFixed(3) : 0
    return parseFloat(newNum) || 0

}

const month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']

const prodano = (data, name) => {
    const keysToSearch = [];
        month.forEach(item => {
            keysToSearch.push(name + item)
        })
    const newArr = []
    keysToSearch.forEach(item => {
        let x = mln(data[item])
        newArr.push(x)
    })
    return newArr
}


export const convertForLineChart = (arr)=>{
    const x = [
        {
            name: 'Проход МП',
            color: '#00fd01',
            data: prodano(arr, 'ЗапроцентованоПланНарастающимИтогом'),
        },
        {
            name: 'Вложения - ЗиНЗП',
            color: '#fdfd01',
            data: prodano(arr, 'ЗапроцентованоФактНарастающимИтогом'),
        },
        {
            name: 'ОИ',
            color: '#ff0000',
            data: prodano(arr, 'ВаловаяПрибыльФактНарастающимИтогом'),
        },
        {
            name: 'УП',
            color: '#7f8190',
            data: prodano(arr, 'ВаловаяПрибыльФакт'),
        },
        {
            name: 'Операционная прибыль',
            color: '#00fde0',
            data: prodano(arr, 'НЗП'),
        },
        {
            name: 'Процентование',
            color: '#0526ce',
            data: prodano(arr, 'ЗапроцентованоФакт'),
        },
    ]
    return x
}

export const convertForBarChart = (arr) => {
    const x = [
        {
            name: 'Запроцентовано План',
            data: prodano(arr, 'ЗапроцентованоПлан'),
            stack: 'Запроцентовано'
        },
        {
            name: 'Запроцентовано Факт',
            data: prodano(arr, 'ЗапроцентованоФакт'),
            stack: 'Запроцентовано'
        },
        {
            name: 'ВП План',
            data: prodano(arr, 'ВаловаяПрибыльПлан'),
            stack: 'Валовая прибыль'
        },
        {
            name: 'ВП Факт',
            data: prodano(arr, 'ВаловаяПрибыльФакт'),
            stack: 'Валовая прибыль'
        },
        {
            name: 'ОП План',
            data: prodano(arr, 'ОперационнаяПрибыльПлан'),
            stack: 'Операционная прибыль'
        },
        {
            name: 'ОП Факт',
            data: prodano(arr, 'ОперационнаяПрибыльФакт'),
            stack: 'Операционная прибыль'
        },
        {
            name: 'НЗП',
            data: prodano(arr, 'НЗП'),
        },
    ]
    return x
}