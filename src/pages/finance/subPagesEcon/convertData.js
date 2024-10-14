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
            color: "#39FF14",
            data: prodano(arr, 'ЗапроцентованоПланНарастающимИтогом'),
        },
        {
            name: 'Вложения - ЗиНЗП',
            color: '#ffa420',
            data: prodano(arr, 'ЗапроцентованоФактНарастающимИтогом'),
        },
        {
            name: 'ОИ',
            color: '#ff0000',
            data: prodano(arr, 'ВаловаяПрибыльФактНарастающимИтогом'),
        },
        {
            name: 'УП',
            color: '#fdfd01',
            data: prodano(arr, 'ВаловаяПрибыльФакт'),
        },
        {
            name: 'ОП',
            color: '#00fde0',
            data: prodano(arr, 'НЗП'),
        },
        {
            name: 'Процентование',
            color: "#5555ff",
            data: prodano(arr, 'ЗапроцентованоФакт'),
        },
    ]
    return x
}

export const convertForBarChart = (arr) => {
    const x = [
        {
            name: 'Выручка План',
            data: prodano(arr, 'ЗапроцентованоПлан'),
            stack: 'Запроцентовано',
            /*borderColor: '#7cb5ec',*/
            borderColor: {
                linearGradient: { x1: 0, y1: 0, x2:0, y2: 1 }, // Direction of the gradient
                stops: [
                    [0, '#9ea6bb'], // Цвет вверху
                    [1, '#6d7998']  // Цвет внизу
                ]
            },
            legendColor: '#FF0000',
        },
        {
            name: 'Выручка Факт',
            data: prodano(arr, 'ЗапроцентованоФакт'),
            stack: 'Запроцентовано',
            /*borderColor: "#5555ff",*/
            borderColor: {
                linearGradient: { x1: 0, y1: 0, x2:0, y2: 1 }, // Direction of the gradient
                stops: [
                    [0, '#3d4d76'], // Start color
                    [1, '#0c2054']  // End color
                ]
            },
            legendColor: '#FF0000',
        },
        {
            name: 'МП План',
            data: prodano(arr, 'ОперационнаяПрибыльПлан'),
            stack: 'Операционная прибыль',
            /*borderColor: '#fdfd01',*/
            borderColor: {
                linearGradient: { x1: 0, y1: 0, x2:0, y2: 1 }, // Direction of the gradient
                stops: [
                    [0, '#649c6d'], // Start color
                    [1, '#54925e']  // End color
                ]
            },
            legendColor: '#FF0000',
        },
        {
            name: 'МП Факт',
            data: prodano(arr, 'ОперационнаяПрибыльФакт'),
            stack: 'Операционная прибыль',
            /*borderColor: '#00fd01',*/
            borderColor: {
                linearGradient: { x1: 0, y1: 0, x2:0, y2: 1 }, // Direction of the gradient
                stops: [
                    [0, '#267433'], // Start color
                    [1, '#166a24']  // End color
                ]
            },
            legendColor: '#FF0000',
        },
        {
            name: 'Вложения План',
            data: prodano(arr, 'ВаловаяПрибыльПлан'),
            stack: 'Валовая прибыль',
            /*borderColor: '#00fde0',*/
            borderColor: {
                linearGradient: { x1: 0, y1: 0, x2:0, y2: 1 }, // Direction of the gradient
                stops: [
                    [0, '#ff9f60'], // Start color
                    [1, '#ff8c40']  // End color
                ]
            },
            legendColor: '#FF0000',
        },
        {
            name: 'Вложения Факт',
            data: prodano(arr, 'ВаловаяПрибыльФакт'),
            stack: 'Валовая прибыль',
            /*borderColor: '#7f8190',*/
            borderColor: {
                linearGradient: { x1: 0, y1: 0, x2:0, y2: 1 }, // Direction of the gradient
                stops: [
                    [0, '#ff7920'], // Start color
                    [1, '#ff6600']  // End color
                ]
            },
            legendColor: '#FF0000',
        },

        {
            name: 'Операционные издержки',
            data: prodano(arr, 'НЗП'),
            /*borderColor: '#ff0000',*/
            borderColor: {
                linearGradient: { x1: 0, y1: 0, x2:0, y2: 1 }, // Direction of the gradient
                stops: [
                    [0, '#4D0E0A'], // Start color
                    [1, '#DC0404']  // End color
                ]
            },
            legendColor: '#FF0000',
        },
    ]
    return x
}