import '../proc.scss'
import {GFormControl, GInputLabel, GTextField} from "../../../../elements/CustomMui/customMui";
import {useTheme} from "../../../../hook/useTheme";
import {IconButton, InputAdornment, MenuItem, Select, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import {holdingSelectImg} from "../js/holdingSelectImg";

const ProcFilters = ({allData, realization, setAllData}) => {

    const [holding, setHolding] = useState('Все');
    const [holdingList, setHoldingList] = useState([]);
    const [zakazchik, setZakazchik] = useState('Все');
    const [zakazchikList, setZakazchikList] = useState([]);


    /*отображение кол-ва обьектов*/
    const [amount, setAmount] = useState(0)


    useEffect(()=>{
        setAmount(count(allData))
        setHoldingList(prepareSelect(realization,'Холдинг'))
        //setZakazchikList(prepareSelect(allData,'Контрагент'))

    },[realization, allData])

    const count = (data)=>{
        return data.length
    }

    const prepareSelect = (data, param) =>{
        let x = []
        data.forEach(i => {
            if (i['Холдинг'] === ''){i['Холдинг'] = 'Прочие'}
            if (!x.includes(i[param])){
                x.push(i[param])
            }
        } )
        return x.sort()
    }


    /*ф-я селекта холдинга*/
    const handleChangeHolding = (e = false, fromZakazchik)=>{
        const item = e ? e.target.value : fromZakazchik[0]
        setHolding(item);
        setZakazchik('Все')
        if (item === 'Все'){
            setAllData(realization)
        } else {
            setAllData(realization.filter(i => i['Холдинг'] === item))
        }
    }


    /*ф-я селекта заказчика*/
    /*const handleChangeZakazchik = (e)=>{
        const item = e.target.value
        handleChangeHolding(false, [holding, item])
        setAllData(allData.filter(i => i['Контрагент'] === item))
        setZakazchik(item);
    }*/

    /*Поиск*/
    const [search, setSearch] = useState('')
    /*Очистка поля поиска*/
    const resetSearch = ()=> {
        setSearch('')
        setAllData(realization)
        handleChangeHolding(false, "Все")
    }
    /*Обновление поля поиска*/
    const handleSearch = (e) =>{
        e.preventDefault()
        setSearch(e.target.value)
    }
    /*ф-я поиска*/
    const handleKeyDown = (e)=>{
        if (e.key === 'Enter' && search.length > 2) {
            const searchedData = allData.filter(i => {
                return i['Объект'].toLowerCase().includes(search.toLowerCase()) || i['КодОбъекта'].includes(search)
            })
            setAllData(searchedData)
        }
    }

    return (
        <div className='procFilters'>
            <div>
                <GFormControl sx={{width: 300,mr: '15px', borderBottom: '0.1rem solid #ffffff4a;'}} variant="standard" >
                    <GInputLabel sx={{color: useTheme('text')}}>Холдинг</GInputLabel>
                    <Select
                        labelId="holding-label"
                        id="holding"
                        value={holding}
                        defaultValue='Все'
                        onChange={handleChangeHolding}
                        sx={{color: useTheme('text'),width: 300, height: 32, display: 'inline-flex'}}
                        inputProps={{
                            MenuProps: {
                                MenuListProps: {
                                    sx: {
                                        backgroundColor: useTheme('select'),
                                        color: useTheme('text')
                                    }
                                }
                            }
                        }}
                    >
                        <MenuItem value={'Все'}>
                            <Typography variant="body1" component='span' sx={{verticalAlign: 'super'}}><b>Все холдинги</b></Typography>
                        </MenuItem>
                        {
                            holdingList.map((item, i) => {
                                let img = holdingSelectImg(item)
                                return <MenuItem key={i} value={item}>
                                    <img style={{width: '35px', paddingRight: '15px', verticalAlign: 'bottom'}} src={img} alt={item} />
                                    <Typography variant="body1" component='span' sx={{verticalAlign: 'super'}}>{item}</Typography>
                                </MenuItem>
                            })
                        }
                    </Select>
                </GFormControl>
                {/*<GFormControl sx={{width: 300,mr: '15px', borderBottom: '0.1rem solid #ffffff4a;'}} variant="standard">
                    <GInputLabel id="zakazchik-label" sx={{color: useTheme('text')}}>Заказчик</GInputLabel>
                    <Select
                        labelId="zakazchik-label"
                        id="zakazchik"
                        value={zakazchik}
                        defaultValue='Все'
                        onChange={handleChangeZakazchik}
                        sx={{color: useTheme('text')}}
                        inputProps={{
                            MenuProps: {
                                MenuListProps: {
                                    sx: {
                                        backgroundColor: useTheme('select'),
                                        color: useTheme('text')
                                    }
                                }
                            }
                        }}
                        disabled={zakazchikList.length <2}
                    >
                        <MenuItem  value={'Все'}><b>Все заказчики</b></MenuItem>
                        {
                            zakazchikList.map((item, i) => {
                                return <MenuItem key={i} value={item}>{item}</MenuItem>
                            })
                        }
                    </Select>
                </GFormControl>*/}
            </div>
            <div className='searchFilter'>
                <GTextField id="proc_search" sx={{pt: '15px', width: '300px', pr: '15px', color: useTheme('text')}}  variant="standard" placeholder='Поиск по всем' value={search}
                            onKeyDown={handleKeyDown}  onChange={handleSearch} InputProps={{
                    startAdornment: (<InputAdornment position="start"><SearchIcon sx={{color: useTheme('text')}} /></InputAdornment>),
                    endAdornment:(<InputAdornment position="end"><IconButton onClick={resetSearch}><CloseIcon sx={{color: useTheme('text')}} /></IconButton ></InputAdornment>)
                }}/>
                <div className='objects' style={{color: useTheme('text'), zIndex: 1000}}>Объектов: {amount}</div>
            </div>
        </div>
    );
};

export default ProcFilters;