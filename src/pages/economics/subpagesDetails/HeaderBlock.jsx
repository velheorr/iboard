import React from 'react';
import BlockShadow from "../../../elements/BlockShadow";
import ElemTableBlock from "./ElemTableBlock";
import '../economics.scss'


const HeaderBlock = () => {
    return (
        <div className='header'>
            <div className='flexYear' style={{padding: '10px'}}></div>
            <ElemTableBlock name={'Запроцентовано'} bg={'headBG'}>
                <div>План</div>
                <div>Факт</div>
                <div>Прогноз</div>
            </ElemTableBlock>
            <ElemTableBlock name={'Валовая прибыль'} bg={'headBG'}>
                <div>План</div>
                <div>Факт</div>
                <div>Прогноз</div>
            </ElemTableBlock>
            <ElemTableBlock name={'Операционная прибыль'} bg={'headBG'}>
                <div>План</div>
                <div>Факт</div>
                <div>Прогноз</div>
            </ElemTableBlock>
            <ElemTableBlock name={'НЗП'} bg={'headBG'}>
                <div>Факт</div>
                <div>Прогноз</div>
            </ElemTableBlock>
        </div>
    );
};

export default HeaderBlock;