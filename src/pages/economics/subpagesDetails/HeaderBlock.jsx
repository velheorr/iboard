import ElemTableBlock from "./ElemTableBlock";
import '../economics.scss'
import {useTheme} from "../../../hook/useTheme";


const HeaderBlock = () => {
    const theme = useTheme() ? 'dark' : 'light'
    return (
        <div className='header'>
            <div className='flexYear' style={{padding: '12px'}}></div>
            <ElemTableBlock name={'Запроцентовано'} bg={`headBG ${theme}`}>
                <div>План</div>
                <div>Факт</div>
                <div>Прогноз</div>
            </ElemTableBlock>
            <ElemTableBlock name={'Валовая прибыль'} bg={`headBG ${theme}`}>
                <div>План</div>
                <div>Факт</div>
                <div>Прогноз</div>
            </ElemTableBlock>
            <ElemTableBlock name={'Операционная прибыль'} bg={`headBG ${theme}`}>
                <div>План</div>
                <div>Факт</div>
                <div>Прогноз</div>
            </ElemTableBlock>
            <ElemTableBlock name={'НЗП'} bg={`headBG ${theme}`}>
                <div>Факт</div>
                <div>Прогноз</div>
            </ElemTableBlock>
        </div>
    );
};

export default HeaderBlock;