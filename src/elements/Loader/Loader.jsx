import React from 'react';
import {CircularProgress} from "@mui/material";
import loads from '../../img/loads.gif'
import l200 from '../../img/200.gif'
import lion1 from '../../img/lion1.gif'
import lion2 from '../../img/lion2.gif'
import lion3 from '../../img/lion3.gif'

const Loader = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <CircularProgress color="success" />
            {/*<img src={loads} alt="laod" style={{width: '700px'}}/>*/}
        </div>
    );
};

export default Loader;