import './modal.scss'
import {
    RealizNTFACT, RealizNTPLAN, RealizNZP, RealizOF, RealizOFOT, RealizOIM, RealizOS, RealizPFOT, RealizPRIN, RealizPROC, RealizSPD, RealizSPS} from "./subpages/ModalRealization";
import ModalAuth from "./subpages/ModalAuth";
import ModalResetPassword from "./subpages/ModalResetPassword";
import ModalResetPasswordConfirm from "./subpages/ModalResetPasswordConfirm";
import {dark, light} from "../../hook/useTheme";



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
            modalText =  <RealizSPD bg={bg}/>
            break;
        case '% СПС':
            modalText =  <RealizSPS bg={bg}/>
            break;
        case '% ОС':
            modalText =  <RealizOS bg={bg}/>
            break;
        case '% ПФОТ':
            modalText =  <RealizPFOT bg={bg}/>
            break;
        case '% ОФОТ':
            modalText =  <RealizOFOT bg={bg}/>
            break;
        case '% ОФ':
            modalText =  <RealizOF bg={bg}/>
            break;
        case '% ОиМ':
            modalText =  <RealizOIM bg={bg}/>
            break;
        case '% НТ (план)':
            modalText =  <RealizNTPLAN bg={bg}/>
            break;
        case '% НТ (факт)':
            modalText =  <RealizNTFACT bg={bg}/>
            break;
        case '% НЗП':
            modalText =  <RealizNZP bg={bg}/>
            break;
        case '% ПРОЦ':
            modalText =  <RealizPROC bg={bg}/>
            break;
        case '% ПРИН':
            modalText = <RealizPRIN bg={bg}/>
            break;
        default:
            modalText = "Default";
            break;
    }

    return modalText;
}