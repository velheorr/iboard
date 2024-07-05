import '../../elements/elements.scss'
import './economics.scss'
import Skelet from "../../elements/Skelet";
import React, {useEffect} from "react";
import {useGetEconomics} from "../../hook/useGetEconomics";
import {useDispatch, useSelector} from "react-redux";
import {setEconData} from "./js/EconomicsSlice";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ReferenceLine, ResponsiveContainer,
} from "recharts";
import {prepareData} from "./js/prepareData";
import {Typography} from "@mui/material";



const Economics = () => {
    const {data: economics, isLoading, isError} = useGetEconomics()
    const mode = useSelector(state => state.header.mode);
    const econ1 = useSelector(state => state.economics.econ1);
    const dispatch = useDispatch();
    useEffect(()=>{
        if (economics){
           dispatch(setEconData(economics))
        }

    },[economics])

    const data = prepareData(econ1) || []



    const CustomTooltip = ({ active, payload }) => {
        const names ={
            zPlan: 'Запроцентовано План',
            zFact: 'Запроцентовано Факт',
            vpPlan: 'Валовая Прибыль План',
            vpFact: 'Валовая Прибыль Факт',
            opPlan: 'Операционная Прибыль План',
            opFact: 'Операционная Прибыль Факт',
            nzp: 'НЗП',
        }

        if (active && payload && payload.length) {
            const display = payload.map((item, i)=>{
                return (
                    <div key={i} style={{color: 'white', display: 'flex', justifyContent: 'space-between'}}>
                        <em>{`${names[item.name]}:`}</em>
                        <span style={{borderBottom: '.1px dashed',textShadow: '0px 1px black', float: 'right'}}>{`${item.value}/млн`}</span>
                    </div>

                )
            })
            return (
                <div className="custom-tooltip">
                    <div style={{color: 'white', textAlign: 'center', fontSize: '18px', textShadow: '0px 1px black', borderBottom: '1px solid', paddingBottom: '5px'}}>{payload[0].payload.name}</div>
                    {display}
                </div>
            );
        }
        return null;
    };


    if (isLoading) {return <Skelet/>}
    if (isError) {return <h3>Нет подключения к серверу</h3>}
    if (!economics) {return <h3>Нет данных с сервера</h3>}

    return (
        <div>
            <ResponsiveContainer width={"100%"} aspect={4}>
                <BarChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 30,
                        right: 10,
                        left: 30,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    {/*<Tooltip dataKey="uv" content={<CustomTooltip/>}/>*/}
                    <YAxis label={{ value: 'за месяц, млн', angle: 0, position: 'insideTop', dy: -30 }} />
                    <Tooltip dataKey="name" content={<CustomTooltip/>}/>
                    <ReferenceLine y={0} stroke="#000" />
                    <Bar dataKey="zPlan" stackId="a" fill="#d8e3f8" />
                    <Bar dataKey="zFact" stackId="a" fill="#435870" />

                    <Bar dataKey="vpPlan" stackId="b" fill="#f0d3ab" />
                    <Bar dataKey="vpFact" stackId="b" fill="#d78850" />

                    <Bar dataKey="opPlan" stackId="c" fill="#B0228C" />
                    <Bar dataKey="opFact" stackId="c" fill="#7eae43" />

                    <Bar dataKey="nzp" fill="#c72708" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Economics;

