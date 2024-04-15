import {
    Box, Button, ButtonGroup,
    FormControl,
    IconButton, InputAdornment,
    InputLabel,
    MenuItem,
    Select, styled, ToggleButton,
    ToggleButtonGroup,
    Tooltip,
    Typography
} from "@mui/material";
import {palette} from "../../../utils/theme";
import '../realization.scss'
import {useDispatch, useSelector} from "react-redux";
import TextField from "@mui/material/TextField";
import SearchIcon from '@mui/icons-material/Search';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import Filter1Icon from '@mui/icons-material/Filter1';
import Filter2Icon from '@mui/icons-material/Filter2';
import Filter3Icon from '@mui/icons-material/Filter3';
import CloseIcon from '@mui/icons-material/Close';
import {useEffect, useState} from "react";
import {setHoldingImg} from "../js/realizationFilterHolding";
import {setFilteredData} from "../js/RealizationSlice";



const YellowButton = styled(ToggleButton)(() => ({
    "&.Mui-selected, &.Mui-selected:hover": {
        color: '#fcdc2a'
    }
}));


const RealizationFilters = () => {
    const mode = useSelector(state => state.header.mode);
    const configuredRealizationData = useSelector(state => state.realisation.configuredRealizationData);
    const filteredData = useSelector(state => state.realisation.filteredData);
    const holdingList = useSelector(state => state.realisation.holdingList);
    const zakazchikList = useSelector(state => state.realisation.zakazchikList);

    const dispatch = useDispatch()
    /*кол-во обьектов*/
    const [amount, setAmount] = useState(0)

    useEffect(() => {
        if (filteredData) {
            setAmount(filteredData.length)
        }
    }, [filteredData])

    const [holding, setHolding] = useState('');
    const [zakazchik, setZakazchik] = useState('');

    const handleChangeHolding = (e)=>{
        setHolding(e.target.value);
    }
    const handleChangeZakazchik = (e)=>{
        setZakazchik(e.target.value);
    }



    /*Тогл кнопки*/
    const [alignment, setAlignment] = useState('reset');

    const colorSort = (event, newAlignment) => {
        console.log(alignment, newAlignment)

            setAlignment(newAlignment);

            if (alignment === 'reset'){
               return  dispatch(setFilteredData(configuredRealizationData))
            }

            let filtered = [...filteredData].sort((a, b) => {
                return b.colors[alignment] - a.colors[alignment]
            });
            console.log(filtered)
            return dispatch(setFilteredData(filtered))


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

    const [actBtn, setActBtn] = useState('reset')
    const btnFilter = (color) =>{
        /*if (color === actBtn) {return}*/
        console.log(color)
        setActBtn(color)
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

                <ButtonGroup variant="outlined" size='small' sx={{verticalAlign: 'bottom'}}>
                    <Tooltip title={<Typography variant="body2"  gutterBottom>Фильтр по красным показателям</Typography>}>
                        <Button color='error' sx={{
                            color: actBtn === 'red'? '' : 'rgba(0, 0, 0, 0.54)',
                            border: actBtn === 'red'? '' : '1px solid rgba(0, 0, 0, 0.12)'
                            }}
                            onClick={()=>btnFilter('red')}><Filter1Icon/>
                        </Button>
                    </Tooltip>
                    <Tooltip title={<Typography variant="body2" gutterBottom>Фильтр по желтым показателям</Typography>}>
                        <Button color='warning' onClick={()=>btnFilter('yellow')}><Filter2Icon/></Button>
                    </Tooltip>
                    <Tooltip title={<Typography variant="body2" gutterBottom>Фильтр по зеленым показателям</Typography>}>
                        <Button color='success' onClick={()=>btnFilter('green')}><Filter3Icon/></Button>
                    </Tooltip>
                    <Tooltip title={<Typography variant="body2" gutterBottom>Сбросить все фильтры</Typography>}>
                        <Button color='info' onClick={()=>btnFilter('reset')}><FilterAltOffIcon/></Button>
                    </Tooltip>
                </ButtonGroup>

                <ToggleButtonGroup
                    value={alignment}
                    exclusive
                    onChange={colorSort}
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