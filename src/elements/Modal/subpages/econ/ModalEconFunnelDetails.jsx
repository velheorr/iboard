import {useEffect, useState} from 'react';
import {useTheme} from "../../../../hook/useTheme";
import { useSelector} from "react-redux";
import TableHead from "../../../Table/TableHead";
import TableItem from "../../../Table/TableItem";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import {IconButton, Typography} from "@mui/material";
import {workTypes} from "../../../../pages/economics/js/workTypes";
import { useGetEcoFunnelDetails} from "../../../../hook/useGetEconomics";
import {funnelTypes} from "../../../../pages/economics/js/funnelTypes";
import Scroll from "../../../Scroll/Scroll";
import Loader from "../../../Loader/Loader";
import SortIcon from '@mui/icons-material/Sort';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';

const ModalEconFunnelDetails = () => {
    const neonGreen = useTheme('neonGreen')
    const neonGreenShadow = useTheme('neonGreenShadow')
    const funnelDetails = useSelector(state => state.eco.funnelDetails)

    const findType = (work) => {
        return workTypes.find(i => i.id === work)
    }
    const findParam = (param) => {
        return funnelTypes.find(i => i.name === param)
    }
    const [rp, setRp] = useState(true)
    const [type, setType] = useState('all')
    const [year, setYear] = useState(2024)
    const [month, setMonth] = useState(11)
    const [param, setParam] = useState('prodano')
    const {data: funnelinfo, isLoading, isError, refetch, status} = useGetEcoFunnelDetails(year, month, type, rp, param)
    const [finalData, setFinalData] = useState([])

    useEffect(()=>{
        Array.isArray(funnelDetails[4]) ? setRp('all') : setRp(funnelDetails[4])
        setType(findType(funnelDetails[3]).name)
        setYear(funnelDetails[1])
        setMonth(funnelDetails[2])
        setParam(findParam(funnelDetails[0]).id)

        if (funnelinfo){
            setFinalData(funnelinfo.data.response.data)
        }
    },[funnelDetails, funnelinfo])

    const total = finalData.reduce((all, item) => {
        return all += item.amount
    }, 0)

    const dateRefactor = (str) => {
        if (str === '0001-01-01T00:00:00') return ''
        let options = {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric'
        }
        let date = new Date(str);
        return date.toLocaleString('ru', options)
    }

    const [load, setLoad] = useState(true)
    useEffect(()=>{
        setTimeout( ()=> setLoad(false), 2000)
    },[load])


    const [dir,setDir] = useState(true)
    const sortData = (param) =>{
        const data = [...finalData].sort((a, b) => {
            let comparison = 0;
            if (typeof a[param] === 'string' && typeof b[param] === 'string') {
                comparison = a[param].localeCompare(b[param]); // Для строк сортируем лексикографически
            } else {
                comparison = a[param] - b[param]; // Для чисел
            }
            // Проверяем порядок сортировки
            return dir? comparison : -comparison;
        });
        setFinalData(data);
        setDir(!dir)
    }


    if (isLoading) {return <Loader/>}
    if (isError) {return <h3>Нет подключения к серверу</h3>}
    if (!funnelinfo) {return <h3>Нет данных с сервера</h3>}
    return (
        <div className='ecoModal'>
            <div className='modalIcon' style={{boxShadow: neonGreenShadow}}><FilterAltIcon/></div>
            <Typography variant="h5" gutterBottom className='modalAuthTitle' sx={{color: neonGreen}}>Детализация воронки [{funnelDetails[0]}]</Typography>

            <div style={{display: 'flex', justifyContent: 'space-between', margin: '15px 0'}}>
                <div>{funnelDetails[2]} / {funnelDetails[1]}</div>
                <div>Тип работ: {type}</div>
                <div>{rp === undefined ? 'По компании' : funnelDetails[5]} </div>
                <div>Итого: { !load && new Intl.NumberFormat("ru", {style: "currency", currency: "RUB"}).format(total)}</div>
            </div>

            {
                rp === undefined
                ?
                    <div>
                        <TableHead>
                            <div style={{width: '3%'}}><span>#</span></div>
                            <div style={{width: '40%'}}><span> Объект</span></div>
                            <div onClick={()=> sortData('type')} style={{width: '17%'}} className='listIcon control'><span> Тип работ</span><UnfoldMoreIcon /></div>
                            <div onClick={()=> sortData('rp')} style={{width: '20%'}} className='listIcon control'><span> РП</span><UnfoldMoreIcon /></div>
                            <div onClick={()=> sortData('amount')} style={{width: '10%'}} className='listIcon control'> <span> Сумма</span><UnfoldMoreIcon /></div>
                            <div onClick={()=> sortData('date')} style={{width: '10%'}} className='listIcon control'><span> Дата</span> <UnfoldMoreIcon /></div>
                        </TableHead>
                        {
                            load
                                ? <Loader/>
                                :    <Scroll h={'h230'}>
                                    {
                                        finalData.length > 0 && finalData.map((item, i) =>{
                                            return  <TableItem key={i}>
                                                <div style={{width: '4%', textAlign: 'left'}}>{++i}</div>
                                                <div style={{width: '40%'}}>{item.objectcode}, {item.object}</div>
                                                <div style={{width: '16%', textAlign: 'right'}}>{item.type}</div>
                                                <div style={{width: '20%', textAlign: 'right'}}>{item.rp}</div>
                                                <div style={{width: '10%', textAlign: 'right'}}>{ new Intl.NumberFormat("ru").format(item.amount)}</div>
                                                <div style={{width: '10%', textAlign: 'right'}}>{dateRefactor(item.date)}</div>
                                            </TableItem>
                                        })
                                    }
                                </Scroll>
                        }
                    </div>
                    :
                    <div>
                        <TableHead>
                            <div style={{width: '3%'}}><span>#</span></div>
                            <div style={{width: '50%'}}><span> Объект</span></div>
                            <div onClick={()=> sortData('type')} style={{width: '27%'}} className='listIcon control'><span> Тип работ</span><UnfoldMoreIcon /></div>
                            <div onClick={()=> sortData('amount')} style={{width: '10%'}} className='listIcon control'><span> Сумма</span><UnfoldMoreIcon /></div>
                            <div onClick={()=> sortData('date')} style={{width: '10%'}} className='listIcon control'><span> Дата</span><UnfoldMoreIcon /></div>
                        </TableHead>
                        {
                            load
                                ? <Loader/>
                                :    <Scroll h={'h230'}>
                                    {
                                        finalData.length > 0 && finalData.map((item, i) =>{
                                            return  <TableItem key={i}>
                                                <div style={{width: '4%', textAlign: 'left'}}>{++i}</div>
                                                <div style={{width: '50%'}}>{item.objectcode}, {item.object}</div>
                                                <div style={{width: '26%', textAlign: 'center'}}>{item.type}</div>
                                                <div style={{width: '10%', textAlign: 'right'}}>{ new Intl.NumberFormat("ru").format(item.amount)}</div>
                                                <div style={{width: '10%', textAlign: 'right'}}>{dateRefactor(item.date)}</div>
                                            </TableItem>
                                        })
                                    }
                                </Scroll>
                        }
                    </div>

            }

            {/*<TableHead>
                <div style={{width: '5%'}} className='listIcon'><span>#</span></div>
                <div style={{width: '70%'}} className='listIcon'><span> Объект</span></div>
                <div style={{width: '12%'}} className='listIcon'> <span> Сумма, р</span></div>
                <div style={{width: '12%'}} className='listIcon'> <span> Дата</span></div>
            </TableHead>*/}

           {/* {
                load
                ? <Loader/>
                :    <Scroll h={'h230'}>
                        {
                            finalData.length > 0 && finalData.map((item, i) =>{
                                return  <TableItem key={i}>
                                    <div style={{width: '2%'}}>{++i}</div>
                                    <div style={{width: '70%'}}>{item.objectcode}, {item.object}</div>
                                    <div style={{width: '12%'}}>{ new Intl.NumberFormat("ru").format(item.amount)}</div>
                                    <div style={{width: '12%'}}>{dateRefactor(item.date)}</div>
                                </TableItem>
                            })
                        }
                    </Scroll>
            }*/}

        </div>
    );
};

export default ModalEconFunnelDetails;