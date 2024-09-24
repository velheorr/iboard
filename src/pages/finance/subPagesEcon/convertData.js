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
        newArr.push(mln(data[item]))
    })
    return newArr
}


export const convertForLineChart = (arr)=>{
    const x = [
        {
            name: 'Продано',
            color: '#0066FF',
            data: prodano(arr, 'ЗапроцентованоПланНарастающимИтогом'),
        },
        {
            name: 'Запроцентовано',
            color: '#ff0000',
            data: prodano(arr, 'ЗапроцентованоФактНарастающимИтогом'),
        },
        {
            name: 'ВП',
            color: '#24f813',
            data: prodano(arr, 'ВаловаяПрибыльФактНарастающимИтогом'),
        },
        {
            name: 'ОП',
            color: '#ffbd00',
            data: prodano(arr, 'ОперационнаяПрибыльФактНарастающимИтогом'),
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