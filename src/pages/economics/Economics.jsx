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
                console.log(item)
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
                    <div key={i} style={{color: 'white', display: 'flex', justifyContent: 'space-between', marginBottom: '3px'}}>
                        <em>{`${names[item.name]}:`}</em>
                        <span style={{borderBottom: '.1px dashed',textShadow: '0px 1px black', float: 'right'}}>{`${valueX} / млн`}</span>
                    </div>

                )
            })
            return (
                <div className="custom-tooltip">
                    <div style={{color: 'white',fontStyle: 'italic', textAlign: 'center', fontSize: '18px', textShadow: '0px 1px black', borderBottom: '1px solid', paddingBottom: '5px'}}>{`${payload[0].payload.name} 2024`}</div>
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
                    <YAxis label={{ value: 'за месяц, млн', angle: 0, position: 'insideTop', dy: -30 }} domain={[dataMin => (-50), dataMax => (250)]}/>
                    <Tooltip dataKey="name" content={<CustomTooltip/>}/>
                    <ReferenceLine y={0} stroke="#000" />
                    <Bar  dataKey="zPlan" stackId="a" fill="#d8e3f8" />
                    <Bar  dataKey="zFact" stackId="a" fill="#435870" />

                    <Bar dataKey="vpPlan" stackId="b" fill="#f0d3ab" />
                    <Bar dataKey="vpFact" stackId="b" fill="#d78850" />

                    <Bar dataKey="opPlan" stackId="c" fill="#B0228C" />
                    <Bar dataKey="opFact" stackId="c" fill="#7eae43" />

                    <Bar dataKey="nzp" fill="#c72708" />

                    <Line type="monotone" dataKey="prodano" stroke="#8598d6" />
                    <Line type="monotone" dataKey="zaprocent" stroke="#353f5f" />
                    <Line type="monotone" dataKey="valprib" stroke="#fdb019" />
                    <Line type="monotone" dataKey="operprib" stroke="#39fd19" />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Economics;

