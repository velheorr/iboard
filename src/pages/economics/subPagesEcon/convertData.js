
export const convertForLineChart = (arr, dark )=>{
    const arred = arr.data.response.data


    const colors = {
        'Проход МП': dark? "#39FF14" : '#61CE95',
        'Вложения - ЗиНЗП': dark ? '#ffa420' : '#F7A25C',
        'Операционные издержки': dark ? '#ff0000' : '#EF7065',
        'Управленческая прибыль': dark ? '#fdfd01' : '#d0c900',
        'Операционная прибыль': dark ? '#00fde0' : '#79C3E2',
        'Процентование': dark ? "#5555ff" : '#649EFF',
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

export const convertForBarChart = (arr, dark) => {
    const arred = arr.data.response.data

    let ishodnikD = [
        {
            name: 'Процентование План',
            data: [],
            stack: 'Запроцентовано',
            color: 'transparent',
            borderColor: {
                linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1}, // Direction of the gradient
                stops: [
                    [0, '#9ea6bb'], // Цвет вверху
                    [1, '#6d7998']  // Цвет внизу
                ]
            }
        },
        {
            name: 'Процентование Факт',
            data: [],
            stack: 'Запроцентовано',
            color: 'transparent',
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
            color: 'transparent',
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
            color: 'transparent',
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
            color: 'transparent',
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
            color: 'transparent',
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
            color: 'transparent',
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
            color: 'transparent',
            borderColor: {
                linearGradient: { x1: 0, y1: 0, x2:0, y2: 1 }, // Direction of the gradient
                stops: [
                    [0, '#DC0404'], // Start color
                    [1, '#e02222']  // End color
                ]
            },
        },
    ]

    let ishodnikL = [
        {
            name: 'Процентование План',
            data: [],
            stack: 'Запроцентовано',
            color: {
                linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1}, // Direction of the gradient
                stops: [
                    [0, '#badcf9'], // Цвет вверху
                    [1, '#63b4f4']  // Цвет внизу
                ]
            },
        },
        {
            name: 'Процентование Факт',
            data: [],
            stack: 'Запроцентовано',
            color: {
                linearGradient: { x1: 0, y1: 0, x2:0, y2: 1 }, // Direction of the gradient
                stops: [
                    [0, '#2195f1'], // Start color
                    [1, '#1975d0'/*'#3e1d57'*/ /*'#3d4d76'*/]  // End color
                ]
            },
        },
        {
            name: 'МП План',
            data: [],
            stack: 'Операционная прибыль',
            color: {
                linearGradient: { x1: 0, y1: 0, x2:0, y2: 1 }, // Direction of the gradient
                stops: [
                    [0, '#c6e4c7'], // Start color
                    [1, '#80c583']  // End color
                ]
            },
        },
        {
            name: 'МП Факт',
            data: [],
            stack: 'Операционная прибыль',
            color: {
                linearGradient: { x1: 0, y1: 0, x2:0, y2: 1 }, // Direction of the gradient
                stops: [
                    [0, '#4bae4f'], // Start color
                    [1, '#388d3c']  // End color
                ]
            },
        },
        {
            name: 'Вложения - ЗиНЗП План',
            data: [],
            stack: 'Валовая прибыль',
            color: {
                linearGradient: { x1: 0, y1: 0, x2:0, y2: 1 }, // Direction of the gradient
                stops: [
                    [0, '#fddeb1'], // Start color
                    [1, '#fdb64c']  // End color
                ]
            },
        },
        {
            name: 'Вложения - ЗиНЗП Факт',
            data: [],
            stack: 'Валовая прибыль',
            color: {
                linearGradient: { x1: 0, y1: 0, x2:0, y2: 1 }, // Direction of the gradient
                stops: [
                    [0, '#fd9700'], // Start color
                    [1, '#f37b00']  // End color
                ]
            },
        },
        {
            name: "Операционные издержки План",
            data: [],
            stack: 'ОИ',
            color: {
                linearGradient: { x1: 0, y1: 0, x2:0, y2: 1 }, // Direction of the gradient
                stops: [
                    [0, '#fdcbd0'], // Start color
                    [1, '#ed524f']  // End color
                ]
            },
        },
        {
            name: "Операционные издержки Факт",
            data: [],
            stack: 'ОИ',
            color: {
                linearGradient: { x1: 0, y1: 0, x2:0, y2: 1 }, // Direction of the gradient
                stops: [
                    [0, '#f24236'], // Start color
                    [1, '#c42828']  // End color
                ]
            },
        },
    ]

    const vihod = dark? ishodnikD : ishodnikL

    vihod.forEach(i =>{
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

    return vihod
}





const funnel = (arr, dark)=>{
    let ishodnik = [
        {
            name: 'ТКП',
            color: dark? '#571f91' : 'rgba(87,31,145,0.60)',
        },
        {
            name: 'Подписано смет/договоров',
            color: dark? '#2e4399' : 'rgba(46,67,153,0.60)',
        },
        {
            name: 'Поставлено Оим',
            color: dark? '#4063f3' : 'rgba(64,99,243,0.60)',
        },
        {
            name: 'Оплачено ФОТ',
            color: dark? '#007ed3' : 'rgba(0,126,211,0.60)',
        },
        {
            name: 'Смонтировано',
            color: dark? '#3d9bda' : 'rgba(61,155,218,0.60)',
        },
        {
            name: 'Запроцентовано',
            color: dark? '#7eb1fe' : 'rgba(126,177,254,0.60)',
        },
        {
            name: 'Маржинальная прибыль',
            color: dark ? '#17f82f' : 'rgba(29,204,46,0.5)',
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

export const convertBullet = (arr, dark)=>{
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
                    [0, dark? '#7834b4' : 'rgba(120,52,180,0.44)'], // Начальный цвет градиента
                    [1, dark? '#50417d' : 'rgba(80,65,125,0.47)']  // Конечный цвет градиента
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
                    [0, dark ? '#4c4480' : 'rgba(76,68,128,0.5)'], // Начальный цвет градиента
                    [1, dark ? '#353665' : 'rgba(53,54,101,0.6)']  // Конечный цвет градиента
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
                    [0, dark ? '#303765' : 'rgba(48,55,101,0.6)'], // Начальный цвет градиента
                    [1, dark ? '#1f294b' : 'rgba(31,41,75,0.7)']  // Конечный цвет градиента
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
            borderWidth: 1,
            borderColor: '#938c8c',
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