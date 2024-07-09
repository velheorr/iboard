import '../../elements/elements.scss'
import './economics.scss'
import Skelet from "../../elements/Skelet";
import React, {useEffect} from "react";
import {useGetEconomics} from "../../hook/useGetEconomics";
import {useDispatch, useSelector} from "react-redux";
import {setEconData} from "./js/EconomicsSlice";
import {
    BarChart,ComposedChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ReferenceLine, ResponsiveContainer, Line,
} from "recharts";
import {prepareData} from "./js/prepareData";



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

    const chartColor = (name) => {
        let color;
        switch (name) {
            case 'zPlan': color = "#d8e3f8"
                break
            case 'zFact': color = "#435870"
                break
            case 'vpPlan': color = "#f0d3ab"
                break
            case 'vpFact': color = "#d78850"
                break
            case 'opPlan': color = "#B0228C"
                break
            case 'opFact': color = "#7eae43"
                break
            case 'nzp': color = "#c72708"
                break
            case 'prodano': color = "#8598d6"
                break
            case 'zaprocent': color = "#353f5f"
                break
            case 'valprib': color = "#fdb019"
                break
            case 'operprib': color = "#39fd19"
                break
            default: color = 'fff'
        }
        return color
    }

    const CustomTooltip = ({ active, payload }) => {
        const names ={
            zPlan: 'Запроцентовано План',
            zFact: 'Запроцентовано Факт',
            vpPlan: 'Валовая Прибыль План',
            vpFact: 'Валовая Прибыль Факт',
            opPlan: 'Операционная Прибыль План',
            opFact: 'Операционная Прибыль Факт',
            nzp: 'НЗП',
            prodano: 'Продано (факт/прогноз)',
            zaprocent: 'Запроцентовано (факт/прогноз)',
            valprib: 'Валовая Прибыль (факт/прогноз)',
            operprib: 'Операционная Прибыль (Факт/Прогноз)',
        }

        if (active && payload && payload.length) {
            const display = payload.map((item, i)=>{
                let valueX = ''
                switch (item.name) {
                    case 'nzp': valueX = item.payload.nzp_real
                        break;
                    case 'prodano': valueX = item.payload.prodano_real
                        break;
                    case 'valprib': valueX = item.payload.valprib_real
                        break;
                    default:
                        valueX = item.value
                }
                return (
                    <div key={i} className='bodyChart'>
                        <div className='bodyKey' style={{borderLeft: `15px solid ${chartColor(item.name)}`,}}>{`${names[item.name]}:`}</div>
                        <span className='bodyVal'>{`${valueX} / млн`}</span>
                    </div>

                )
            })
            return (
                <div className="ecoChartTooltip">
                    <div className='titleChart'>{`${payload[0].payload.name} 2024`}</div>
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
                <ComposedChart
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
                    <YAxis yAxisId="y1" orientation="left" label={{ value: 'за месяц, млн', angle: 0, position: 'insideTop', dy: -30 }} domain={[dataMin => (-50), dataMax => (250)]}/>
                    <YAxis yAxisId="y2" orientation="right" label={{ value: 'нарастающим итогом, млн', angle: 0, position: 'insideTop', dy: -30, dx: -60 }} domain={[dataMin => (-200), dataMax => (1000)]}/>
                    <Tooltip dataKey="name" content={<CustomTooltip/>}/>
                    <ReferenceLine y={0} yAxisId="y1" stroke="grey" strokeDasharray="3 3" label={{ value: '0 -', angle: 0, position: 'insideLeft', dx: -25 }}/>
                    <ReferenceLine y={0} yAxisId="y2" stroke="grey" strokeDasharray="3 3" label={{ value: '- 0', angle: 0, position: 'insideRight', dx: 25 }}/>

                    <Bar  dataKey="zPlan" stackId="a" yAxisId="y1" fill={chartColor('zPlan')} />
                    <Bar  dataKey="zFact" stackId="a" yAxisId="y1" fill={chartColor('zFact')} />

                    <Bar dataKey="vpPlan" stackId="b" yAxisId="y1" fill={chartColor('vpPlan')} />
                    <Bar dataKey="vpFact" stackId="b" yAxisId="y1" fill={chartColor('vpFact')} />

                    <Bar dataKey="opPlan" stackId="c" yAxisId="y1" fill={chartColor('opPlan')} />
                    <Bar dataKey="opFact" stackId="c" yAxisId="y1" fill={chartColor('opFact')} />

                    <Bar dataKey="nzp" yAxisId="y1" fill={chartColor('nzp')} />

                    <Line type="monotone" dataKey="prodano" yAxisId="y2" stroke={chartColor('prodano')} />
                    <Line type="monotone" dataKey="zaprocent" yAxisId="y2" stroke={chartColor('zaprocent')} />
                    <Line type="monotone" dataKey="valprib" yAxisId="y2" stroke={chartColor('valprib')} />
                    <Line type="monotone" dataKey="operprib" yAxisId="y2" stroke={chartColor('operprib')} />
                </ComposedChart>
            </ResponsiveContainer>

        </div>
    );
};

export default Economics;

