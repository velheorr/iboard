import {useState} from 'react';
import {Button, FormControlLabel, Tooltip, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {useTheme} from "../../../hook/useTheme";
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import Switch from "@mui/material/Switch";
import TableBlock from "./subpagesDetails/TableBlock";
import HeaderBlock from "./subpagesDetails/HeaderBlock";
import '../econ.scss'

const EconomicsDetails = () => {
    const month = useSelector(state => state.eco.monthDetails);
    const year = useSelector(state => state.eco.yearDetails);
    const navigate = useNavigate();
    const theme = useTheme() ? 'dark' : 'light'
    const goBack = ()=>{navigate('/economics')}
    const [check, setCheck] = useState(false)

    const analitics = () =>{
        setCheck(!check)
    }

    const makeList = (all = false)=>{
        let line = []
        let min = +year -1
        let max = +year +1
        if (all){
            min = 2015
            max = 2025
        }
        /*for (let i = min; i <= max; i++) {*/
        for (let i = max; i >= min; i--) {
            if (i >= 2015 && i <= 2025) {
                line.push(i)
            }
        }
        return line
    }
    const renderList = makeList().map(i=>{
        let bgColor = theme === 'dark'? '#444a45' : '#c9d8f794'
        return <TableBlock key={i} year={i} month={month} bg={i === +year? bgColor: ''}/>
    })
    const renderAll = makeList(true).map(i=>{
        let bgColor = theme === 'dark'? '#444a45' : '#c9d8f794'
        return <TableBlock key={i} year={i} month={month} bg={i === +year? bgColor: ''}/>
    })



    return (
        <div>
            <div className='btnTopBlock'>
                <Tooltip title={<Typography variant="body2"  gutterBottom>Вернуться назад</Typography>}>
                    <Button className={theme} onClick={goBack} color={'success'} variant="outlined" size='small' startIcon={<ReplyAllIcon />}>Назад</Button>
                </Tooltip>
                <Tooltip title={<Typography variant="body2"  gutterBottom>Вывод данных за все года</Typography>}>
                    <FormControlLabel sx={{float: 'right'}} control={<Switch onClick={analitics} checked={check} color="success"/>} label="Включить аналитику" />
                </Tooltip>
            </div>
            <div className='ecoDetails'>
                <div className='month'>{month}</div>
                <HeaderBlock/>

                {
                    check ? renderAll : renderList
                }
            </div>

        </div>
    );
};

export default EconomicsDetails;


