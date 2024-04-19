import {
    Box, Button, ButtonGroup,
    FormControl,
    IconButton, InputAdornment,
    InputLabel,
    MenuItem,
    Select,
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
import {setFilteredData, setHoldingList, setZakazchikList} from "../js/RealizationSlice";
import {prepareSelect} from "../js/func";




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

    const [holding, setHolding] = useState('Все');
    const [zakazchik, setZakazchik] = useState('Все');

    /*ф-я фильтра, используется селектом холдинга*/
    const funcChangeHolding = (item)=>{
        let forFilter = []
        const doFilter = (param)=>{
            return configuredRealizationData.filter(i => i.Холдинг === param)
        }
        if(item === 'ПРОЧИЕ' || item === ''){forFilter = doFilter('ПРОЧИЕ').concat(doFilter(''))}
        else if (item === 'Все'){forFilter = configuredRealizationData}
        else {forFilter = doFilter(item)}
        return forFilter
    }
    /*ф-я селекта холдинга*/
    const handleChangeHolding = (e = false, fromZakazchik)=>{
        const item = e ? e.target.value : fromZakazchik
        setHolding(item);
        setZakazchik('Все')
        const filtered = funcChangeHolding(item)
        dispatch(setFilteredData(filtered))
        dispatch(setZakazchikList(prepareSelect(filtered, 'Контрагент')))
    }
    /*ф-я селекта заказчика*/
    const handleChangeZakazchik = (e)=>{
        const item = e.target.value
        setZakazchik(item);

       /* const filteredByHolding = configuredRealizationData.filter(i => i.Холдинг === holding)*/
        const filteredByHolding = funcChangeHolding(holding)

        let forFilter = []
        const doFilter = (param)=>{
            return filteredByHolding.filter(i => i.Контрагент === param)
        }

        if (item === 'Все'){forFilter = filteredByHolding}
        else {
            forFilter = doFilter(item)
        }

        /*filteredData*/
        dispatch(setFilteredData(forFilter))
    }



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
        setActBtn(color)
        if (actBtn === 'reset'){return dispatch(setFilteredData(configuredRealizationData))}
        let filtered = [...filteredData].sort((a, b) => b.colors[actBtn] - a.colors[actBtn]);
        return dispatch(setFilteredData(filtered))
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
                        defaultValue='Все'
                        onChange={handleChangeHolding}
                        sx={{color: mode === "dark" ? palette.white : palette.black,width: 300, height: 32, display: 'inline-flex'}}
                    >
                        <MenuItem value={'Все'}>
                            <Typography variant="body1" component='span' sx={{verticalAlign: 'super'}}><b>Все холдинги</b></Typography>
                        </MenuItem>
                        {
                            holdingList.map((item, i) => {
                            let img = setHoldingImg(item)
                                return <MenuItem key={i} value={item}>
                                    <img style={{width: '35px', paddingRight: '15px', verticalAlign: 'bottom'}} src={img} alt={item} />
                                    <Typography variant="body1" component='span' sx={{verticalAlign: 'super'}}>{item}</Typography>

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
                        defaultValue='Все'
                        onChange={handleChangeZakazchik}
                        sx={{color: mode === "dark" ? palette.white : palette.black}}
                    >
                        <MenuItem  value={'Все'}><b>Все заказчики</b></MenuItem>
                        {
                        zakazchikList.map((item, i) => {
                            return <MenuItem key={i} value={item}>{item}</MenuItem>
                        })
                    }
                    </Select>
                </FormControl>

                <ButtonGroup variant="outlined" size='small' sx={{verticalAlign: 'bottom'}}>
                    <FilterButton color='error' actBtn={actBtn} btnFilter={btnFilter} name='red' tip={'Фильтр по красным показателям'}><Filter1Icon/></FilterButton>
                    <FilterButton color='warning' actBtn={actBtn} btnFilter={btnFilter} name='yellow' tip={'Фильтр по желтым показателям'}><Filter2Icon/></FilterButton>
                    <FilterButton color='success' actBtn={actBtn} btnFilter={btnFilter} name='green' tip={'Фильтр по зеленым показателям'}><Filter3Icon/></FilterButton>
                    <FilterButton color='info' actBtn={actBtn} btnFilter={btnFilter} name='reset' tip={'Сбросить все фильтры'}><FilterAltOffIcon/></FilterButton>
                </ButtonGroup>
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

const FilterButton = ({color,actBtn,btnFilter, name,tip, children}) =>{
    return <Tooltip title={<Typography variant="body2"  gutterBottom>{tip}</Typography>}>
        <Button color={color} sx={{
        color: actBtn === name? '' : 'rgba(0, 0, 0, 0.54)',
        border: actBtn === name? '' : '1px solid rgba(0, 0, 0, 0.12)'
    }} onClick={()=>btnFilter(name)}>
        {children}
    </Button>
    </Tooltip>
}
