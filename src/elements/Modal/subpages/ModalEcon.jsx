import Month from "../../Picker/Month";
import Work from "../../Picker/Work";
import Year from "../../Picker/Year";
import {useState} from "react";
import {Button, Tooltip, Typography} from "@mui/material";
import ContentPasteGoIcon from '@mui/icons-material/ContentPasteGo';
import {useDispatch} from "react-redux";
import {setDate} from "../../../pages/economics/js/EcoSlice";


const ModalEcon = () => {
    const [ecoYear, setEcoYear] = useState()
    const [ecoMonth, setEcoMonth] = useState()
    const [ecoWork, setEcoWork] = useState()
    console.log(ecoYear, ecoMonth, ecoWork)
    const dispatch = useDispatch()

    const submit = ()=>{
        dispatch(setDate({ecoYear, ecoMonth, ecoWork}))
    }

    return (
        <div>
            <div style={{borderBottom: 'thin solid grey', margin: '15px 0'}}><span>1 Год</span></div>
            <Year setEcoYear={setEcoYear}/>
            <div style={{borderBottom: 'thin solid grey', margin: '15px 0'}}><span>2 Месяц</span></div>
            <div style={{width: '50%', margin: '0 auto'}}>
                <Month setEcoMonth={setEcoMonth}/>
            </div>
            <div style={{borderBottom: 'thin solid grey', margin: '15px 0'}}><span>3 Тип работ</span></div>
            <Work setEcoWork={setEcoWork}/>
            <Tooltip title={<Typography variant="body2"  gutterBottom>Сохранить данные</Typography>}>
                <Button onClick={submit} sx={{float: 'right', marginTop: '25px'}}  variant="contained" type='submit' size='small' color="success" startIcon={<ContentPasteGoIcon />}>Сформировать</Button>
            </Tooltip>

        </div>
    );
};

export default ModalEcon;