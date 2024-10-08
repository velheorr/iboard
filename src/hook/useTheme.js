import {useSelector} from "react-redux";
import lion from '../img/bg_lionRight2.png'
import logoLight from '../img/header/logoLight.png';
import logoDark from '../img/header/logoDark.png';
import lionGreen from '../img/lionGrey10.png'

/*главная тема*/
export const dark = {
    text: "#ffffff", // цвет текста
    lion: lionGreen, // фон со львом
    logo: logoDark, // логотип
    bg: {
        main: '',// фон основной страницы
        sideBar: '#100f0f',// фон сайдбара
        header: '#100f0f', // фон хедера
        modal:  "#0e0f0e", // фон модалки
    },
    select : '#333333', // select, dropdown
    divider: '#80808096', // divider for SB
    chart: { // цвета для графиков
        yellow: '#fdfd00',
        red: '#f60000',
        green: '#17f82f',
        grey: '#9c9c9c',
    },
    listHeader: '#171717',
    listHeaderText: '#9f9f9f',
    scroll: 'black',
    neonGreen: '#17fa2f',
    neonGreenShadow: '-1px 1px 10px #1dd530, 0px -2px 10px #1dd530', //неон тень на модальных окнах
    skelet: '#75757580' // skeleton


}

export const light = {
    text: "#000000",
    lion: lion,
    logo: logoLight,
    bg: {
        main: "#fafafb",
        sideBar: '#F5F5F5',
        header: '#F5F5F5',
        modal:  "#fff", // фон модалки
    },
    select : '',
    divider: '', // divider for SB
    chart: {
        yellow: '#F6E69C',
        red: '#EF7065',
        green: '#61CE95',
        grey: '#8690A3',
    },
    listHeader: '#f5f5f5',
    listHeaderText: '#444444',
    scroll: '#dddddd',
    neonGreen: '#4cb242',
    neonGreenShadow: '',
    skelet: '#75757580'
}


export const useTheme = (param = false, param2 = false)=> {
    const mode = useSelector(state => state.header.mode);
    const theme =  mode === "dark" ? dark : light

    if (!param) {
        return mode === "dark" ? true : false
    } else if (param2){
        return theme[param][param2]
    }
     else {
        return theme[param]
    }
}