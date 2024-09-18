const mln = (num) =>{
    let newNum = num !== 0 ? (num / 1000000).toFixed(3) : 0
    return parseInt(newNum)

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


export const convertData = (arr)=>{
    const x = [
        {
            name: 'ЗапроцентованоПланНарастающимИтогом',
            color: '#0066FF',
            data: prodano(arr, 'ЗапроцентованоПланНарастающимИтогом'),
        },
        {
            name: 'ЗапроцентованоФактНарастающимИтогом',
            color: '#ff0000',
            data: prodano(arr, 'ЗапроцентованоФактНарастающимИтогом'),
        },
        {
            name: 'ВаловаяПрибыльФактНарастающимИтогом',
            color: '#24f813',
            data: prodano(arr, 'ВаловаяПрибыльФактНарастающимИтогом'),
        },
        {
            name: 'ОперационнаяПрибыльФактНарастающимИтогом',
            color: '#ffbd00',
            data: prodano(arr, 'ОперационнаяПрибыльФактНарастающимИтогом'),
        },
    ]
    return x
}