import React from 'react';
import './elements.scss'
import {useTheme} from "../hook/useTheme";

const BlockShadow = ({children, className, style}) => {
    const theme = `blockShadow ${useTheme('select')} ${className}`

    return (
        <div className={theme} style={style}>
            {children}
        </div>
    );
};

export default BlockShadow;