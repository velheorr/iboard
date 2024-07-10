import './economics.scss'
import Skelet from "../../elements/Skelet";
import React, {useEffect, useState} from "react";
import {useGetEco, useGetEconomics, useGetEconomics2} from "../../hook/useGetEconomics";
import {useDispatch, useSelector} from "react-redux";
import {setEconData, setEconData2} from "./js/EconomicsSlice";
import {prepareData} from "./js/prepareData";
import Chart from "./subpages/Chart";
import {GFormControl, GInputLabel, GTextField} from "../../elements/CustomMui/customMui";
import {useTheme} from "../../hook/useTheme";
import {MenuItem, Select} from "@mui/material";



const Economics = () => {
    const [date1, setDate1] = useState('2024')
    const [date2, setDate2] = useState('2025')

    /*const {data: economics, isLoading: economicsLoad, isError: economicsError, refetch: economicsRefetch} = useGetEconomics(date1)*/
    /*const {data: economics2, isLoading: economics2Load, isError: economics2Error, refetch: economics2Refetch} = useGetEconomics2(date2)*/

    const econ1 = useSelector(state => state.economics.econ1);
    /*const econ2 = useSelector(state => state.economics.econ2);*/
    const dispatch = useDispatch();

    const {data: eco, isLoading, isError, refetch, status} = useGetEco(date1)

    useEffect(()=>{
        if (status === 'success'){
            const x = prepareData(eco)
            dispatch(setEconData(x))
        }
        /*dataMaker(eco)*/
            /*dispatch(setEconData2(eco2))*/

    },[eco, date1])

    /*const data = prepareData(econ1) || []*/
    /*const data2 = prepareData(econ2) || []*/

    const handleChange = (event) => {
        setDate1(event.target.value);
        refetch()

    };
    /*const handleChange2 = (event) => {
        setDate1(event.target.value);

    };*/

    const text = useTheme('text')
    const select = useTheme('select')


    if (isLoading) {return <Skelet/>}
    if (isError) {return <h3>Нет подключения к серверу</h3>}
    if (!eco) {return <h3>Нет данных с сервера</h3>}

    return (
        <div>
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
            {econ1.length > 0 && <Chart data={econ1} date={date1}/>}
            {/*<GTextField id="standard-basic2" label="Год" defaultValue={date2} InputProps={{readOnly: true,}} variant="standard"/>
            <Chart data={data2} date={date2}/>*/}
        </div>
    );
};

export default Economics;

