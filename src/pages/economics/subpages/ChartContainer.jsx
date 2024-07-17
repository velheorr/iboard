import {GFormControl, GInputLabel} from "../../../elements/CustomMui/customMui";
import {MenuItem, Select} from "@mui/material";
import Chart from "./Chart";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useGetEco} from "../../../hook/useGetEconomics";
import {prepareData} from "../js/prepareData";
import {setEconData, setEconData2} from "../js/EconomicsSlice";
import {useTheme} from "../../../hook/useTheme";
import Skelet from "../../../elements/Skelet";

const ChartContainer = ({econ, date}) => {
    const [date1, setDate1] = useState(date)
   
    const econ1 = useSelector(state => state.economics.econ1);
    const econ2 = useSelector(state => state.economics.econ2);
    const dispatch = useDispatch();

    const {data: eco, isLoading, isError, refetch, status} = useGetEco(date1)

    useEffect(()=>{
        if (status === 'success'){
            const x = prepareData(eco)
            if (econ === 'econ1'){
                dispatch(setEconData(x))
            } else {
                dispatch(setEconData2(x))
            }
            
        }
    },[eco, date1])

    const handleChange = (event) => {
        setDate1(event.target.value);
        refetch()
    };

    const text = useTheme('text')
    const select = useTheme('select')

    if (isLoading) {return <Skelet option='eco'/>}
    if (isError) {return <h3>Нет подключения к серверу</h3>}
    if (!eco) {return <h3>Нет данных с сервера</h3>}
    
    return (
        <div style={{marginBottom: ' 25px'}}>
            <GFormControl sx={{width: 200,mr: '15px', borderBottom: '0.1rem solid #ffffff4a;'}} variant="standard">
                <GInputLabel id="year" sx={{color: text}}>Год</GInputLabel>
                <Select
                    labelId="year-label"
                    id="yearSelector"
                    value={date1}
                    onChange={handleChange}
                    sx={{color: text}}
                    inputProps={{
                        MenuProps: {
                            MenuListProps: {
                                sx: {
                                    backgroundColor: select,
                                    color: text
                                }
                            }
                        }
                    }}
                >
                    <MenuItem  value={'2025'}><b>2025</b></MenuItem>
                    <MenuItem  value={'2024'}><b>2024</b></MenuItem>
                    <MenuItem  value={'2023'}><b>2023</b></MenuItem>
                    <MenuItem  value={'2022'}><b>2022</b></MenuItem>
                    <MenuItem  value={'2021'}><b>2021</b></MenuItem>
                    <MenuItem  value={'2020'}><b>2020</b></MenuItem>
                    <MenuItem  value={'2019'}><b>2019</b></MenuItem>
                    <MenuItem  value={'2018'}><b>2018</b></MenuItem>
                    <MenuItem  value={'2017'}><b>2017</b></MenuItem>
                    <MenuItem  value={'2016'}><b>2016</b></MenuItem>
                    <MenuItem  value={'2015'}><b>2015</b></MenuItem>
                </Select>
            </GFormControl>
            {
                econ === 'econ1' 
                    ? econ1.length > 0 && <Chart data={econ1} date={date1}/>
                    : econ2.length > 0 && <Chart data={econ2} date={date1}/>
            }
        </div>
    );
};

export default ChartContainer;