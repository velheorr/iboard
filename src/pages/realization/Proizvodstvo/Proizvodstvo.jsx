import React, {useState} from 'react';
import './Proizvodstvo.scss'
import ElemTab from "../../../elements/Tabs/ElemTab";
import Virobotka from "./subfolders/Virobotka";
import BezVirobotka from "./subfolders/BezVirobotka";
import Zarobotok from "./subfolders/Zarobotok";
import Fot from "./subfolders/Fot";
import Plans from "./subfolders/Plans";
import Effectivnost from "./subfolders/Effectivnost";
import {useTheme} from "../../../hook/useTheme";
import {IconButton, InputAdornment} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import {GTextField} from "../../../elements/CustomMui/customMui";
import Dev from "../../../elements/Development/Dev";




const Proizvodstvo = () => {
    /*Поиск*/
    const [search, setSearch] = useState('')
    /*Очистка поля поиска*/
    const resetSearch = ()=> {
        setSearch('')
        /*setAllData(realization)*/
    }
    /*Обновление поля поиска*/
    const handleSearch = (e) =>{
        e.preventDefault()
        setSearch(e.target.value)
    }
    /*ф-я поиска*/
    const handleKeyDown = (e)=>{
        if (e.key === 'Enter' && search.length > 2) {
            /*const searchedData = allData.filter(i => {
                return i['Объект'].toLowerCase().includes(search.toLowerCase()) || i['КодОбъекта'].includes(search)
            })
            setAllData(searchedData)*/
        }
    }

    return (
        <div>
            <Dev/>
            <div>
                <GTextField id="proc_search" sx={{pt: '17px', width: '300px', pr: '15px', color: useTheme('text'), float: 'right'}}  variant="standard" placeholder='Поиск' value={search}
                            onKeyDown={handleKeyDown}  onChange={handleSearch} InputProps={{
                    startAdornment: (<InputAdornment position="start"><SearchIcon sx={{color: useTheme('text')}} /></InputAdornment>),
                    endAdornment:(<InputAdornment position="end"><IconButton onClick={resetSearch}><CloseIcon sx={{color: useTheme('text')}} /></IconButton ></InputAdornment>)
                }}/>
            </div>

            <div style={{padding: '0px 5px'}}>
                <ElemTab arr={['Без выработки','Выработка','Табель','Заработок',"ФОТ", 'Планы','Эффективность']}>
                    <Virobotka/>
                    <BezVirobotka/>
                    <div>Пусто</div>
                    <Zarobotok/>
                    <Fot/>
                    <Plans/>
                    <Effectivnost/>
                </ElemTab>
            </div>
        </div>
    );
};

export default Proizvodstvo;