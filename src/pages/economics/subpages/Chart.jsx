import React from 'react';
import {
    Bar,
    CartesianGrid,
    ComposedChart,
    Line,
    ReferenceLine,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";
import {chartColor} from "../js/chartColors";
import {GTextField} from "../../../elements/CustomMui/customMui";

const Chart = ({data, date}) => {

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
                    <div className='titleChart'>{`${payload[0].payload.name} ${date}`}</div>
                    {display}
                </div>
            );
        }
        return null;
    };

    const CustomizedDot = (props) => {
        const { cx, cy, stroke, payload, value } = props;
        return (
            <circle
                cx={cx}
                cy={cy}
                r={4}
                stroke='grey'
                style={{opacity: "0.9"}}
                strokeWidth={1}
                fill={stroke} />
        )
    };



    return (
            <ResponsiveContainer width={"100%"} aspect={5}>
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
                    <YAxis yAxisId="y2" orientation="right" label={{ value: 'нарастающим итогом, млн', angle: 0, position: 'insideTop', dy: -30, dx: -60 }} domain={[dataMin => (-200), dataMax => (800)]}/>
                    <Tooltip dataKey="name" content={<CustomTooltip />} />
                    <ReferenceLine y={0} yAxisId="y1" stroke="grey" strokeDasharray="3 3" label={{ value: '0 -', angle: 0, position: 'insideLeft', dx: -25 }}/>
                    <ReferenceLine y={0} yAxisId="y2" stroke="grey" strokeDasharray="3 3" label={{ value: '- 0', angle: 0, position: 'insideRight', dx: 25 }}/>

                    <Bar  dataKey="zPlan" stackId="a" yAxisId="y1" fill={chartColor('zPlan')} />
                    <Bar  dataKey="zFact" stackId="a" yAxisId="y1" fill={chartColor('zFact')} />

                    <Bar dataKey="vpPlan" stackId="b" yAxisId="y1" fill={chartColor('vpPlan')} />
                    <Bar dataKey="vpFact" stackId="b" yAxisId="y1" fill={chartColor('vpFact')} />

                    <Bar dataKey="opPlan" stackId="c" yAxisId="y1" fill={chartColor('opPlan')} />
                    <Bar dataKey="opFact" stackId="c" yAxisId="y1" fill={chartColor('opFact')} />

                    <Bar dataKey="nzp" yAxisId="y1" fill={chartColor('nzp')} />

                    <Line type="monotone" dataKey="prodano" yAxisId="y2" stroke={chartColor('prodano')}  dot={<CustomizedDot/>}/>
                    <Line type="monotone" dataKey="zaprocent" yAxisId="y2" stroke={chartColor('zaprocent')} dot={<CustomizedDot/>}/>
                    <Line type="monotone" dataKey="valprib" yAxisId="y2" stroke={chartColor('valprib')} dot={<CustomizedDot/>}/>
                    <Line type="monotone" dataKey="operprib" yAxisId="y2" stroke={chartColor('operprib')} dot={<CustomizedDot/>}/>
                </ComposedChart>
            </ResponsiveContainer>

    );
};

export default Chart;