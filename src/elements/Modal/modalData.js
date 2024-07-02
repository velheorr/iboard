import './modal.scss'
import {dark, light} from "../../utils/theme";
import {
    Realiz_NTFACT,
    Realiz_NTPLAN, Realiz_NZP,
    Realiz_OF,
    Realiz_OFOT,
    Realiz_OIM,
    Realiz_OS,
    Realiz_PFOT, Realiz_PRIN, Realiz_PROC,
    Realiz_SPD,
    Realiz_SPS
} from "./subpages/ModalRealization";
import ModalAuth from "./subpages/ModalAuth";
import ModalResetPassword from "./subpages/ModalResetPassword";
import ModalResetPasswordConfirm from "./subpages/ModalResetPasswordConfirm";



export const modalData = (variant, mode)=>{
    const theme =  mode === "dark" ? dark : light

    const bg = {
        y: theme.chart.yellow,
        r: theme.chart.red,
        g: theme.chart.green,
        grey: theme.chart.grey,
    }


    let modalText = ''

    switch (variant){
        case 'registration':
            modalText =  <ModalAuth />
            break;
        case 'resetPassword':
            modalText =  <ModalResetPassword />
            break;
        case 'resetPasswordConfirm':
            modalText =  <ModalResetPasswordConfirm />
            break;
        case '% СПД':
            modalText =  <Realiz_SPD bg={bg}/>
            break;
        case '% СПС':
            modalText =  <Realiz_SPS bg={bg}/>
            break;
        case '% ОС':
            modalText =  <Realiz_OS bg={bg}/>
            break;
        case '% ПФОТ':
            modalText =  <Realiz_PFOT bg={bg}/>
            break;
        case '% ОФОТ':
            modalText =  <Realiz_OFOT bg={bg}/>
            break;
        case '% ОФ':
            modalText =  <Realiz_OF bg={bg}/>
            break;
        case '% ОиМ':
            modalText =  <Realiz_OIM bg={bg}/>
            break;
        case '% НТ (план)':
            modalText =  <Realiz_NTPLAN bg={bg}/>
            break;
        case '% НТ (факт)':
            modalText =  <Realiz_NTFACT bg={bg}/>
            break;
        case '% НЗП':
            modalText =  <Realiz_NZP bg={bg}/>
            break;
        case '% ПРОЦ':
            modalText =  <Realiz_PROC bg={bg}/>
            break;
        case '% ПРИН':
            modalText = <Realiz_PRIN bg={bg}/>
            break;
        default:
            modalText = "Default";
            break;
    }

    return modalText;
}