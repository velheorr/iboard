import {useState} from "react";
import Month from "../../Picker/Month";






const ModalEcon = () => {
    const [selectedMonthData, setSelectedMonthData] = useState({
        month: 9,
        year: 2024,
    });
    const [isPickerOpen, setIsPickerOpen] = useState(false);



    return (
        <div>
            <div style={{width: '50%', margin: '0 auto'}}>
                <Month/>
            </div>


        </div>
    );
};

export default ModalEcon;