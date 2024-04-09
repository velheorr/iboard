import {
    Box,
    FormControl,
    IconButton, InputAdornment,
    InputLabel, ListItemText,
    MenuItem, OutlinedInput,
    Select, styled, ToggleButton,
    ToggleButtonGroup,
    Tooltip,
    Typography
} from "@mui/material";
import {palette} from "../../../utils/theme";
import '../realization.scss'
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import {useSelector} from "react-redux";
import TextField from "@mui/material/TextField";
import {AccountCircle} from "@mui/icons-material";
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import SearchIcon from '@mui/icons-material/Search';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import BarChartIcon from '@mui/icons-material/BarChart';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Filter1Icon from '@mui/icons-material/Filter1';
import Filter2Icon from '@mui/icons-material/Filter2';
import Filter3Icon from '@mui/icons-material/Filter3';
import CloseIcon from '@mui/icons-material/Close';
import {useEffect, useState} from "react";

import rosneft from '../../../img/holding/rosneft.png'
import lukoil from '../../../img/holding/lukoil.png'
import fosagro from '../../../img/holding/fosagro.png'
import sibur from '../../../img/holding/sibur.png'
import novatek from '../../../img/holding/novatek.png'
import uralkaliy from '../../../img/holding/uralkaliy.png'
import metafraks from '../../../img/holding/metafraks.png'
import nologo from '../../../img/holding/nologo.png'

const setHoldingImg = (holdName) =>{
    switch (holdName) {
        case ('РОСНЕФТЬ'):
            return  rosneft
        break;
        case ('НОВАТЭК'):
            return  novatek
            break;
        case ('УРАЛКАЛИЙ'):
            return  uralkaliy
            break;
        case ('МЕТАФРАКС'):
            return  metafraks
            break;
        case ('ФОСАГРО'):
            return  fosagro
            break;
        case ('ЛУКОЙЛ'):
            return  lukoil
            break;
        case ('СИБУР'):
            return  sibur
            break;
        default:
            return nologo
    }


}


const YellowButton = styled(ToggleButton)(() => ({
    "&.Mui-selected, &.Mui-selected:hover": {
        color: '#fcdc2a'
    }
}));

const RealizationFilters = () => {
    const mode = useSelector(state => state.header.mode);
    const realisationData = useSelector(state => state.realisation.realisationData);
    const holdingList = useSelector(state => state.realisation.holdingList);
    const zakazchikList = useSelector(state => state.realisation.zakazchikList);
    const [amount, setAmount] = useState(0)

    useEffect(() => {
        if (realisationData) {
            setAmount(realisationData.length)
        }
    }, [realisationData])

    const [holding, setHolding] = useState('');
    const [zakazchik, setZakazchik] = useState('');

    const handleChangeHolding = (e)=>{
        setHolding(e.target.value);
    }
    const handleChangeZakazchik = (e)=>{
        setZakazchik(e.target.value);
    }



    /*Тогл кнопки*/
    const [alignment, setAlignment] = useState('web');
    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    /*Поиск*/
    const [search, setSearch] = useState('')
    /*Очистка поля поиска*/
    const resetSearch = ()=> {
        setSearch('')
    }
    /*Обновление поля поиска*/
    const handleSearch = (e) =>{
        e.preventDefault()
        setSearch(e.target.value)
    }


    return (
        <Box sx={{minWidth: 120, mb: '10px'}} className='realizationFilters'>
            <div>
                <FormControl sx={{width: 300,mr: '15px'}} variant="standard" >
                    <InputLabel id="holding-label" sx={{color: mode === "dark" ? palette.white : palette.black}}>Холдинг</InputLabel>
                    <Select
                        labelId="holding-label"
                        id="holding"
                        value={holding}
                        onChange={handleChangeHolding}
                        sx={{color: mode === "dark" ? palette.white : palette.black,width: 300, height: 32, display: 'inline-flex'}}
                    >
                        {
                            holdingList.map((item, i) => {
                            let x = item === '' ? 'Не указан' : item
                            let img = setHoldingImg(item)
                                return <MenuItem key={i} value={item}>
                                    <img style={{width: '35px', paddingRight: '15px', verticalAlign: 'bottom'}} src={img} alt={x} />
                                    <Typography variant="body1" component='span' sx={{verticalAlign: 'super'}}>{x}</Typography>

                            </MenuItem>
                        })
                    }
                    </Select>
                </FormControl>
                <FormControl sx={{width: 300,mr: '15px'}} variant="standard">
                    <InputLabel id="zakazchik-label" sx={{color: mode === "dark" ? palette.white : palette.black}}>Заказчик</InputLabel>
                    <Select
                        labelId="zakazchik-label"
                        id="zakazchik"
                        value={zakazchik}
                        onChange={handleChangeZakazchik}
                        sx={{color: mode === "dark" ? palette.white : palette.black}}
                    >
                        {
                        zakazchikList.map((item, i) => {
                            return <MenuItem key={i} value={item}>{item}</MenuItem>
                        })
                    }
                    </Select>
                </FormControl>
                <ToggleButtonGroup
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    size="small"
                    sx={{verticalAlign: 'bottom'}}
                >
                    <Tooltip title={<Typography variant="body2"  gutterBottom>Фильтр по красным показателям</Typography>}>
                        <ToggleButton value="red" color='error'><Filter1Icon/></ToggleButton>
                    </Tooltip>
                    <Tooltip title={<Typography variant="body2" gutterBottom>Фильтр по желтым показателям</Typography>}>
                        <YellowButton value="yellow" color='warning'><Filter2Icon/></YellowButton>
                    </Tooltip>
                    <Tooltip title={<Typography variant="body2" gutterBottom>Фильтр по зеленым показателям</Typography>}>
                        <ToggleButton value="green" color='success'><Filter3Icon/></ToggleButton>
                    </Tooltip>
                    <Tooltip title={<Typography variant="body2" gutterBottom>Сбросить все фильтры</Typography>}>
                        <ToggleButton value="reset"><FilterAltOffIcon/></ToggleButton>
                    </Tooltip>
                </ToggleButtonGroup>
            </div>
            <div className='searchFilter'>
                <TextField id="realiz_search" sx={{pt: '15px', width: '300px', pr: '15px'}}  variant="standard" placeholder='Поиск' value={search} onChange={handleSearch} InputProps={{
                    startAdornment: (<InputAdornment position="start"><SearchIcon /></InputAdornment>),
                    endAdornment:(<InputAdornment position="end"><IconButton onClick={resetSearch}><CloseIcon /></IconButton></InputAdornment>)
                }}/>
                <div className='objects'><b>Объектов: {amount}</b></div>
            </div>


        </Box>
    );
}

export default RealizationFilters;