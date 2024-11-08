
export const convertForLineChart = (arr)=>{
    const arred = arr.data.response.data

    const colors = {
        'Проход МП': "#39FF14",
        'Вложения - ЗиНЗП': '#ffa420',
        'Операционные издержки': '#ff0000',
        'Управленческая прибыль': '#fdfd01',
        'Операционная прибыль': '#00fde0',
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
            data: [],
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
            data: [],
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
            data: [],
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
            data: [],
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
            data: [],
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
            data: [],
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
            name: "Операционные издержки План",
            data: [],
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
            name: "Операционные издержки Факт",
            data: [],
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
                let x = []
                o.Data.forEach(g =>{
                    if (typeof g === 'string'){
                        let y = g.replace(/\,/g, '.')
                        x.push(+y)
                    } else {
                        x.push(g)
                    }
                })
                i.data = x
            }
        })
    })

    return ishodnik
}





const funnel = (arr)=>{
    let ishodnik = [
        {
            name: 'ТКП',
            color: '#571f91',
        },
        {
            name: 'Подписано смет/договоров',
            color: '#2e4399',
        },
        {
            name: 'Поставлено Оим',
            color: '#4063f3',
        },
        {
            name: 'Оплачено ФОТ',
            color: '#007ed3',
        },
        {
            name: 'Смонтировано',
            color: '#3d9bda',
        },
        {
            name: 'Запроцентовано',
            color: '#7eb1fe',
        },
        {
            name: 'Маржинальная прибыль',
            color: '#16b423',
        },
    ]

    const keys = Object.keys(arr);
    ishodnik.forEach(i =>{
        keys.forEach(k => {
            if (i.name === k){
                i.y = arr[k]
            }
        })
    })
    return ishodnik
}

export const convertFunnel = (arr) =>{
    const x = funnel(arr)
    return x
}

export const convertFunnel2 = (arr) =>{
    const x = funnel(arr)
    x.forEach(i =>{
        i.y = Math.abs(i.y) * -1
    })
    return x
}

export const convertBullet = (arr)=>{
    const ishodnik = [
        {
            name: 'Прогноз на конец года',
            data: [],
            pointWidth: 10,
            zIndex: 2,
            stack: 'inner', // Указываем, что это внутренний показатель
            dataLabels: {
                formatter: function() {
                    return this.total
                }
            },
            color: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 }, // Градиент по горизонтали
                stops: [
                    [0, '#456264'], // Начальный цвет градиента
                    [1, '#072e30']  // Конечный цвет градиента
                ]
            }

        },
        {
            name: 'Накоплено',
            data: [],
            pointWidth: 10,
            zIndex: 2,
            stack: 'inner', // Указываем, что это внутренний показатель
            dataLabels: {
                formatter: function() {
                    return this.point.stackY
                }
            },
            color: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 }, // Градиент по горизонтали
                stops: [
                    [0, '#79b3b1'], // Начальный цвет градиента
                    [1, '#4c9a97']  // Конечный цвет градиента
                ]
            }
        },
        {
            name: 'Потери',
            data: [],
            pointWidth: 10,
            zIndex: 2,
            stack: 'inner', // Указываем, что это внутренний показатель
            /*dataLabels: {
                formatter: function() {
                    return this.total
                }
            },*/
            color: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 }, // Градиент по горизонтали
                stops: [
                    [0, '#56c2c5'], // Начальный цвет градиента
                    [1, '#1dadb1']  // Конечный цвет градиента
                ]
            }
        },
        {
            name: 'План на конец года',
            data: [],
            pointPlacement: .3,
            pointWidth: 20,
            zIndex: 1,
            stack: 'outer', // Указываем, что это отдельный столбик
            dataLabels: {
                align: 'right',
                verticalAlign: 'top',
                x: 5,
                y: 13,
                format: 'План: {point.y}',
                style: {
                    color: 'grey'
                }
            },
            color: 'transparent',
            borderWidth: 2,
            borderColor: 'grey',
        }
    ]


    ishodnik.forEach(i =>{
        arr.forEach(a =>{
            if (i.name === a.Name){
                i.data = a.Data
            }
        })
    })
    return ishodnik
}