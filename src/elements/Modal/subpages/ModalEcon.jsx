import {useState} from "react";
import Month from "../../Picker/Month";
import Work from "../../Picker/Work";
import Year from "../../Picker/Year";






const ModalEcon = () => {

    return (
        <div>
            <div style={{borderBottom: 'thin solid grey', margin: '15px 0'}}><span>1 Год</span></div>
            <Year/>
            <div style={{borderBottom: 'thin solid grey', margin: '15px 0'}}><span>2 Месяц</span></div>
            <div style={{width: '50%', margin: '0 auto'}}>
                <Month/>
            </div>
            <div style={{borderBottom: 'thin solid grey', margin: '15px 0'}}><span>3 Тип работ</span></div>
            <Work/>



        </div>
    );
};

export default ModalEcon;