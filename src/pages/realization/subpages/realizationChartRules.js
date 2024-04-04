
const bg = {
    y: '#FCDC2A',
    r: '#f60209',
    g: '#2db432',
    grey: '#9f9f9f' /*???*/
}

export const colorForChart = (rule, number, extra) => {
    let color = bg.grey

    switch (rule) {
        case '% СПД':
            if (number === 0){color = bg.r}
            else if( number <= 99 || number > 100){color = bg.y}
            else if (number === 100) {color = bg.g}
            break
        case '% СПС':
            /* непонятно условие  на зеленый*/
            if (number < 100){color = bg.r}
            else if(number >= 100){color = bg.g}
            break
        case '% ОС':
            color = bg.grey;
            break
        case '% ПФОТ':
            /*как считать разрывы*/
            if (number >= 30){color = bg.r}
            else if (number >= 16 && number < 30){color = bg.y}
            else if (number <= 15){color = bg.g}
            break
        case '% ОФОТ':
            /*как считать разрывы*/
            if (number >= 30){color = bg.r}
            else if (number >= 16 && number < 30){color = bg.y}
            else if (number <= 15){color = bg.g}
            break
        case '% ОФ':
            /*как считать разрывы*/
            if (number >= 30){color = bg.r}
            else if (number >= 15 && number <= 29){color = bg.y}
            else if (number <= 14){color = bg.g}
            break
        case '% ОиМ':
            color = bg.grey;
            break
        case '% НТ (план)':
            color = bg.grey;
            break
        case '% НТ (факт)':
            color = bg.grey;
            break
        case '% НЗП':
            /*как считать разрывы*/
            if (number <= 59){color = bg.r}
            else if (number >= 60 && number <= 89){color = bg.y}
            else if (number >= 90){color = bg.g}
            break
        case '% ПРОЦ':
            /*как считать разрывы?*/
            if (number >= 26){color = bg.r}
            else if (number >= 16 && number <= 25){color = bg.y}
            else if (number <= 15){color = bg.g}
            break
        case '% ПРИН':
            /*а если прин меньше проца?  - у меня стает серым*/
            if (number < extra){color = bg.y}
            else if (number === extra){color = bg.g}
            break
        default:
            color = bg.grey;
            break;
    }


    return color
}