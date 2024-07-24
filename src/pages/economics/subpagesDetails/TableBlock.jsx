import React from 'react';
import BlockShadow from "../../../elements/BlockShadow";
import ElemTableBlock from "./ElemTableBlock";
import '../economics.scss'

const TableBlock = () => {
    return (
        <div className='header line'>
            <BlockShadow className='flexYear headBG headBlockItem'>2024</BlockShadow>
            <ElemTableBlock bg={'lineBG'}>
                <div>10/20</div>
                <div>10/30</div>
                <div>30/30</div>
            </ElemTableBlock>
            <ElemTableBlock bg={'lineBG'}>
                <div>План</div>
                <div>Факт</div>
                <div>Прогноз</div>
            </ElemTableBlock>
            <ElemTableBlock bg={'lineBG'}>
                <div>План</div>
                <div>Факт</div>
                <div>Прогноз</div>
            </ElemTableBlock>
            <ElemTableBlock bg={'lineBG'}>
                <div>План</div>
                <div>Факт</div>
            </ElemTableBlock>
        </div>
    );
};

export default TableBlock;