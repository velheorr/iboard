import React from 'react';
import {CircularProgress} from "@mui/material";
import lion3 from '../../img/lion3.gif'

const Loader = () => {
    return (
        <div style={{textAlign: 'center'}}>
            {/*<CircularProgress color="success" />*/}
            <img src={lion3} alt="laod" style={{width: '700px'}}/>
        </div>
    );
};

export default Loader;