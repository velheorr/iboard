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
            color: '#ff0000',
            data: prodano(arr, 'ЗапроцентованоФактНарастающимИтогом'),
        },
        {
            name: 'ОИ',
            color: '#fdfd01',
            data: prodano(arr, 'ВаловаяПрибыльФактНарастающимИтогом'),
        },
        {
            name: 'УП',
            color: '#ffa420',
            data: prodano(arr, 'ВаловаяПрибыльФакт'),
        },
        {
            name: 'Операционная прибыль',
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
            name: 'Запроцентовано План',
            data: prodano(arr, 'ЗапроцентованоПлан'),
            stack: 'Запроцентовано',
            /*borderColor: '#7cb5ec',*/
            borderColor: {
                linearGradient: { x1: 0, y1: 0, x2:0, y2: 1 }, // Direction of the gradient
                stops: [
                    [0, '#9ea6bb'], // Цвет вверху
                    [1, '#6d7998']  // Цвет внизу
                ]
            }
        },
        {
            name: 'Запроцентовано Факт',
            data: prodano(arr, 'ЗапроцентованоФакт'),
            stack: 'Запроцентовано',
            /*borderColor: "#5555ff",*/
            borderColor: {
                linearGradient: { x1: 0, y1: 0, x2:0, y2: 1 }, // Direction of the gradient
                stops: [
                    [0, '#3d4d76'], // Start color
                    [1, '#0c2054']  // End color
                ]
            }
        },
        {
            name: 'ВП План',
            data: prodano(arr, 'ВаловаяПрибыльПлан'),
            stack: 'Валовая прибыль',
            /*borderColor: '#00fde0',*/
            borderColor: {
                linearGradient: { x1: 0, y1: 1, x2: 0, y2: 0 }, // Direction of the gradient
                stops: [
                    [0, '#AB351A'], // Start color
                    [1, '#FF6600']  // End color
                ]
            }
        },
        {
            name: 'ВП Факт',
            data: prodano(arr, 'ВаловаяПрибыльФакт'),
            stack: 'Валовая прибыль',
            /*borderColor: '#7f8190',*/
            borderColor: {
                linearGradient: { x1: 0, y1: 1, x2: 0, y2: 0 }, // Direction of the gradient
                stops: [
                    [0, '#AB351A'], // Start color
                    [1, '#FF6600']  // End color
                ]
            }
        },
        {
            name: 'ОП План',
            data: prodano(arr, 'ОперационнаяПрибыльПлан'),
            stack: 'Операционная прибыль',
            /*borderColor: '#fdfd01',*/
            borderColor: {
                linearGradient: { x1: 0, y1: 1, x2: 0, y2: 0 }, // Direction of the gradient
                stops: [
                    [0, '#166A24'], // Start color
                    [1, '#9BC401']  // End color
                ]
            }
        },
        {
            name: 'ОП Факт',
            data: prodano(arr, 'ОперационнаяПрибыльФакт'),
            stack: 'Операционная прибыль',
            /*borderColor: '#00fd01',*/
            borderColor: {
                linearGradient: { x1: 0, y1: 1, x2: 0, y2: 0 }, // Direction of the gradient
                stops: [
                    [0, '#166A24'], // Start color
                    [1, '#9BC401']  // End color
                ]
            }
        },
        {
            name: 'НЗП',
            data: prodano(arr, 'НЗП'),
            /*borderColor: '#ff0000',*/
            borderColor: {
                linearGradient: { x1: 0, y1: 1, x2: 0, y2: 0 }, // Direction of the gradient
                stops: [
                    [0, '#4D0E0A'], // Start color
                    [1, '#DC0404']  // End color
                ]
            }
        },
    ]
    return x
}