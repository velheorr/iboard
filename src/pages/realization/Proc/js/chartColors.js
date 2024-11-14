import {dark, light} from "../../../../hook/useTheme";

const findBiggerNum = (a, b) =>{
    if (a > b) {
        return a - b
    }
    return b - a

}


export const chartColors = (rule, number, extra, dark) => {
    const bg = {
        y: dark? '#fdfd00' : '#F6E69C',
        r: dark? '#f60000' : '#EF7065',
        g: dark? '#17f82f' : '#61CE95',
        grey: dark? '#9c9c9c' : '#8690A3',
    }

    let color = bg.grey
    let check

    switch (rule) {
        case '% СПД':
            if (number === 0){color = bg.r}
            else if( number <= 99 || number > 100){color = bg.y}
            else if (number === 100) {color = bg.g}
            break
        case '% СПС':
            if (number !== 100){color = bg.r}
            else if(number >= 100){color = bg.g}
            break
        case '% ОС':
            color = bg.grey;
            break
        case '% ПФОТ':
            if (number <= 69 && number > 100){color = bg.r}
            else if (number >= 70 && number <= 89){color = bg.y}
            else if (number >= 90 && number <= 100 ){color = bg.g}
            break
        case '% ОФОТ':
            check = +(findBiggerNum(number, extra))
            if (check >= 30){color = bg.r}
            else if (check >= 16 && check < 30){color = bg.y}
            else if (check <= 15){color = bg.g}
            break
        case '% ОФ':
            check = +(findBiggerNum(number, extra))
            if (check >= 30){color = bg.r}
            else if (check >= 15 && check < 29){color = bg.y}
            else if (check <= 14){color = bg.g}
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
            check = +(findBiggerNum(number, extra))
            if (check <= 59){color = bg.r}
            else if (check >= 60 && check <= 89){color = bg.y}
            else if (check >= 14){color = bg.g}
            break
        case '% ПРОЦ':
            check = +(findBiggerNum(number, extra))
            if (check >= 26){color = bg.r}
            else if (check >= 16 && check <= 25){color = bg.y}
            else if (check <= 15){color = bg.g}
            break
        case '% ПРИН':
            if (number < extra){color = bg.y}
            else if (number === extra){color = bg.g}
            break
        default:
            color = bg.grey;
            break;
    }


    return color
}