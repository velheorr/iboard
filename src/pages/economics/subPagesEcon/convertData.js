/*
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
*/


export const convertForLineChart = (arr)=>{
    const arred = arr.data.response.data

    const colors = {
        'Проход МП': "#39FF14",
        'Вложения - ЗиНЗП': '#ffa420',
        'ОИ': '#ff0000',
        'УП': '#fdfd01',
        'ОП': '#00fde0',
        'Процентование': "#5555ff",
    }
    let ara = []
    arred.forEach(i =>{
        return ara.push( {
            name: i.Name,
            color: colors[i.Name],
            data: i.Data,
        })
    })
    return ara
}

export const convertForBarChart = (arr) => {
    const arred = arr.data.response.data
    let ishodnik = [
        {
            name: 'Процентование План',
            data: '',
            stack: 'Запроцентовано',
            borderColor: {
                linearGradient: { x1: 0, y1: 0, x2:0, y2: 1 }, // Direction of the gradient
                stops: [
                    [0, '#9ea6bb'], // Цвет вверху
                    [1, '#6d7998']  // Цвет внизу
                ]
            },
        },
        {
            name: 'Процентование Факт',
            data: '',
            stack: 'Запроцентовано',
            borderColor: {
                linearGradient: { x1: 0, y1: 0, x2:0, y2: 1 }, // Direction of the gradient
                stops: [
                    [0, '#3d4d76'], // Start color
                    [1, '#0c2054']  // End color
                ]
            },
        },
        {
            name: 'МП План',
            data: '',
            stack: 'Операционная прибыль',
            borderColor: {
                linearGradient: { x1: 0, y1: 0, x2:0, y2: 1 }, // Direction of the gradient
                stops: [
                    [0, '#649c6d'], // Start color
                    [1, '#54925e']  // End color
                ]
            },
        },
        {
            name: 'МП Факт',
            data: '',
            stack: 'Операционная прибыль',
            borderColor: {
                linearGradient: { x1: 0, y1: 0, x2:0, y2: 1 }, // Direction of the gradient
                stops: [
                    [0, '#267433'], // Start color
                    [1, '#166a24']  // End color
                ]
            },
        },
        {
            name: 'Вложения - ЗиНЗП План',
            data: '',
            stack: 'Валовая прибыль',
            borderColor: {
                linearGradient: { x1: 0, y1: 0, x2:0, y2: 1 }, // Direction of the gradient
                stops: [
                    [0, '#ff9f60'], // Start color
                    [1, '#ff8c40']  // End color
                ]
            },
        },
        {
            name: 'Вложения - ЗиНЗП Факт',
            data: '',
            stack: 'Валовая прибыль',
            borderColor: {
                linearGradient: { x1: 0, y1: 0, x2:0, y2: 1 }, // Direction of the gradient
                stops: [
                    [0, '#ff7920'], // Start color
                    [1, '#ff6600']  // End color
                ]
            },
        },
        {
            name: "ОИ План",
            data: '',
            stack: 'ОИ',
            borderColor: {
                linearGradient: { x1: 0, y1: 0, x2:0, y2: 1 }, // Direction of the gradient
                stops: [
                    [0, '#4D0E0A'], // Start color
                    [1, '#622a27']  // End color
                ]
            },
        },
        {
            name: "ОИ Факт",
            data: '',
            stack: 'ОИ',
            borderColor: {
                linearGradient: { x1: 0, y1: 0, x2:0, y2: 1 }, // Direction of the gradient
                stops: [
                    [0, '#DC0404'], // Start color
                    [1, '#e02222']  // End color
                ]
            },
        },
    ]

    ishodnik.forEach(i =>{
        arred.forEach(o =>{
            if (i.name === o.Name){
                i.data = o.Data
            }
        })
    })

    return ishodnik
}

