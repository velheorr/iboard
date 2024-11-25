import Month from "../../../Picker/Month";
import Work from "../../../Picker/Work";
import Year from "../../../Picker/Year";
import {useEffect, useState} from "react";
import {Button, Tooltip, Typography} from "@mui/material";
import ContentPasteGoIcon from '@mui/icons-material/ContentPasteGo';
import {useDispatch} from "react-redux";
import {setDate} from "../../../../pages/economics/js/EcoSlice";
import {useModal} from "../../../../hook/useModal";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import {useTheme} from "../../../../hook/useTheme";

const ModalEcon = () => {
    const [ecoYear, setEcoYear] = useState()
    const [ecoMonth, setEcoMonth] = useState()
    const [ecoWork, setEcoWork] = useState()
    const dispatch = useDispatch()
    const {exitModal} = useModal()
    const neonGreen = useTheme('neonGreen')
    const neonGreenShadow = useTheme('neonGreenShadow')



    const submit = ()=>{
        dispatch(setDate({ecoYear, ecoMonth, ecoWork}))
        exitModal()
    }

    return (
        <div className='ecoModal'>
            <div className='modalIcon' style={{boxShadow: neonGreenShadow}}><CalendarMonthIcon/></div>
            <Typography variant="h5" gutterBottom className='modalAuthTitle' sx={{color: neonGreen}}>Настройки параметров</Typography>

            <div className='divider'><span className='title'>Год</span></div>
            <Year setEcoYear={setEcoYear}/>
            <div className='divider'><span className='title'>Месяц</span></div>
            <div style={{width: '50%', margin: '0 auto'}}>
                <Month setEcoMonth={setEcoMonth}/>
            </div>
            <div className='divider'><span className='title'>Тип работ</span></div>
            <Work setEcoWork={setEcoWork}/>
            <Tooltip title={<Typography variant="body2"  gutterBottom>Сохранить данные</Typography>}>
                <Button onClick={submit} sx={{float: 'right', marginTop: '25px'}}  variant="contained" type='submit' size='small' color="success" startIcon={<ContentPasteGoIcon />}>Сформировать</Button>
            </Tooltip>

        </div>
    );
};

export default ModalEcon;