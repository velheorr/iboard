import React from 'react';
import BlockShadow from "../../../../elements/BlockShadow";
import '../../econ.scss'
import {useTheme} from "../../../../hook/useTheme";

const ElemTableBlock = ({name, children, bg}) => {
    const theme = useTheme() ? 'dark' : 'light'

    let fb = `fb33 headBlockItem ${bg}`
    if (children.length === 2){
        fb = `fb49 headBlockItem ${bg}`
    }
    return (
        <div className='headBlock'>
            {
                name &&
                <>
                    <BlockShadow className={`headBlockItem headBG ${theme}`}>{name}</BlockShadow>
                    <BlockShadow className={`headBlockItem headBG ${theme} flexItem`}>
                        <div className='flexL'>За месяц, млн.</div>
                        <div className='flexR'>Нарастающим итогом, млн.</div>
                    </BlockShadow>
                </>
            }

            <div className={`header ${theme}`}>
                <BlockShadow className={fb}>
                    {children[0]}
                </BlockShadow>
                <BlockShadow className={fb}>
                    {children[1]}
                </BlockShadow>
                {
                    children.length === 3 &&
                    <BlockShadow className={fb}>
                        {children[2]}
                    </BlockShadow>
                }
            </div>
        </div>
    )
};

export default ElemTableBlock;