import {
    Bar, Brush,
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
import '../economics.scss'
import {redirect} from "react-router";
import {useNavigate} from "react-router-dom";


const Chart = ({data, date}) => {
    const navigate = useNavigate();
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {

            const minus = (num)=>{
                if (num < 0){
                    return '#b60000'
                }else {
                    return 'white'
                }
            }

            const ToolTipChart = ({name, number, color})=>{
                return (
                    <div className='bodyChart'>
                        <div className='bodyKey'>{name}:</div>
                        <span style={{color: color}} className='bodyVal'>{number}</span>
                    </div>
                )
            }

            return (
                <div className="ecoChartTooltip">
                    <div className='megaTitleChart'>{`${payload[0].payload.name} ${date}`}</div>
                    <div className='titleChart'>За месяц</div>
                    <ToolTipChart name={'Запроцентовано План/Факт'} number={`${payload[0].value} / ${payload[2].value} млн`}/>
                    <ToolTipChart name={'Валовая прибыль План/Факт'} number={`${payload[3].value} / ${payload[5].value} млн`} color={minus(payload[5].value)} />
                    <ToolTipChart name={'Операционная прибыль План/Факт'} number={`${payload[6].value} / ${payload[8].value} млн`} color={minus(payload[8].value)} />
                    <ToolTipChart name={'НЗП'} number={`${payload[9].payload.nzp_real} млн`} color={minus(payload[9].payload.nzp_real)}/>
                    <div className='titleChart'>Нарастающим итогом</div>
                    <ToolTipChart name={'Продано Факт/Прогноз'} number={`${payload[10].payload.prodano} млн`}/>
                    <ToolTipChart name={'Запроцентовано Факт/Прогноз'} number={`${payload[11].value} млн / -`}/>
                    <ToolTipChart name={'Валовая Прибыль Факт/Прогноз'} number={`${payload[12].payload.valprib} млн`}/>
                    <ToolTipChart name={'Операционная Прибыль Факт/Прогноз'} number={`${payload[13].value} млн`} color={minus(payload[13].value)}/>
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



    const CustomizedAxisTick = (props) => {
        const {x, y, stroke, payload} = props;
        const month = payload.value
        const year = date

        const openEcoPage2 = ()=>{
            console.log(month)
            console.log(year)
            navigate('/economics/details')
        }
        return (
            <g transform={`translate(${x},${y})`}>
                <text x={20} y={0} dy={13} textAnchor="end" fill="#666" transform="rotate(0)" style={{fontWeight: 600, cursor: "pointer"}} onClick={openEcoPage2}>
                    {month}
                </text>
            </g>
        );
    }


    return (
            <ResponsiveContainer width={"100%"} aspect={4.5}>
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
                    <XAxis dataKey="name" tick={<CustomizedAxisTick />} />
                    <YAxis yAxisId="y1" orientation="left" label={{ value: 'за месяц, млн', angle: 0, position: 'insideTop', dy: -30 }} domain={[dataMin => (-30), dataMax => (150)]}/>
                    <YAxis yAxisId="y2" orientation="right" label={{ value: 'нарастающим итогом, млн', angle: 0, position: 'insideTop', dy: -30, dx: -60 }} domain={[dataMin => (-150), dataMax => (800)]}/>
                    <Tooltip dataKey="name" content={<CustomTooltip />} offset={100}/>
                    <ReferenceLine y={0} yAxisId="y1" stroke="grey" strokeDasharray="3 3" label={{ value: '0 -', angle: 0, position: 'insideLeft', dx: -25 }}/>
                    <ReferenceLine y={0} yAxisId="y2" stroke="grey" strokeDasharray="3 3" label={{ value: '- 0', angle: 0, position: 'insideRight', dx: 25 }}/>
                    <defs>
                        <linearGradient id="zFact" x1="0" y1="1" x2="0" y2="0"> {/*fact svetlee*/}
                            <stop offset="0%" stopColor="#0c2054"/>  {/*centr*/}
                            <stop offset="100%" stopColor="#7cc1de" />  {/*verh*/}
                        </linearGradient>
                        <linearGradient id="zPlan" x1="0" y1="1" x2="0" y2="0"> {/*plan temnee*/}
                            <stop offset="100%" stopColor="#0c2054" />  {/*niz*/}
                        </linearGradient>
                    </defs>
                    {/*<Bar  dataKey="zPlan" stackId="a" yAxisId="y1" fill={chartColor('zPlan')} />*/}
                    <Bar  dataKey="zPlan" stackId="a" yAxisId="y1" fill="url(#zPlan)" />
                    {/*<Bar  dataKey="zFact" stackId="a" yAxisId="y1" fill={chartColor('zFact')} />*/}
                    <Bar dataKey={'z'} stackId="a" yAxisId="y1" fill={'#e4e4e4'}  activeBar={{ stroke: 'red', strokeWidth: 2 }}  />
                    <Bar  dataKey="zFact" stackId="a" yAxisId="y1" fill="url(#zFact)" barCategoryGap={60} />


                    <defs>
                        <linearGradient id="vpFact" x1="0" y1="1" x2="0" y2="0"> {/*fact svetlee*/}
                            <stop offset="0%" stopColor="#AB351A"/>  {/*centr*/}
                            <stop offset="100%" stopColor="#FF6600" />  {/*verh*/}
                        </linearGradient>
                        <linearGradient id="vpPlan" x1="0" y1="1" x2="0" y2="0"> {/*plan temnee*/}
                            <stop offset="100%" stopColor="#AB351A" />  {/*niz*/}
                        </linearGradient>
                    </defs>
                    {/*<Bar dataKey="vpPlan" stackId="b" yAxisId="y1" fill={chartColor('vpPlan')} />*/}
                    {/*<Bar dataKey="vpFact" stackId="b" yAxisId="y1" fill={chartColor('vpFact')} />*/}
                    <Bar dataKey="vpPlan" stackId="b" yAxisId="y1" fill={"url(#vpPlan)"} />
                    <Bar dataKey={'v'} stackId="b" yAxisId="y1" fill={'#e4e4e4'}  activeBar={{ stroke: 'red', strokeWidth: 2 }} />
                    <Bar dataKey="vpFact" stackId="b" yAxisId="y1" fill={"url(#vpFact)"} />


                    <defs>
                        <linearGradient id="opFact" x1="0" y1="1" x2="0" y2="0"> {/*fact svetlee*/}
                            <stop offset="0%" stopColor="#166A24"/>  {/*centr*/}
                            <stop offset="100%" stopColor="#9BC401" />  {/*verh*/}
                        </linearGradient>
                        <linearGradient id="opPlan" x1="0" y1="1" x2="0" y2="0"> {/*plan temnee*/}
                            <stop offset="100%" stopColor="#166A24" />  {/*niz*/}
                        </linearGradient>
                    </defs>
                    {/*<Bar dataKey="opPlan" stackId="c" yAxisId="y1" fill={chartColor('opPlan')} />
                    <Bar dataKey={'o'} stackId="c" yAxisId="y1" fill={'#e4e4e4'}  activeBar={{ stroke: 'red', strokeWidth: 2 }} />
                    <Bar dataKey="opFact" stackId="c" yAxisId="y1" fill={chartColor('opFact')} />*/}
                    <Bar dataKey="opPlan" stackId="c" yAxisId="y1" fill={"url(#opPlan)"} />
                    <Bar dataKey={'o'} stackId="c" yAxisId="y1" fill={'#e4e4e4'}  activeBar={{ stroke: 'red', strokeWidth: 2 }} />
                    <Bar dataKey="opFact" stackId="c" yAxisId="y1" fill={"url(#opFact)"} />

                    <defs>
                        <linearGradient id="nzp" x1="0" y1="1" x2="0" y2="0"> {/*fact svetlee*/}
                            <stop offset="0%" stopColor="#DC0404"/>  {/*centr*/}
                            <stop offset="100%" stopColor="#4D0E0A" />  {/*verh*/}
                        </linearGradient>
                    </defs>
                    <Bar dataKey="nzp" yAxisId="y1" fill={"url(#nzp)"}  minPointSize={-50} />
                    {/*<Brush dataKey="name" height={30} stroke="#8884d8" />*/}
                    <Line type="monotone" dataKey="prodano" yAxisId="y2" stroke={chartColor('prodano')}  dot={<CustomizedDot/>}/>
                    <Line type="monotone" dataKey="zaprocent" yAxisId="y2" stroke={chartColor('zaprocent')} dot={<CustomizedDot/>}/>
                    <Line type="monotone" dataKey="valprib" yAxisId="y2" stroke={chartColor('valprib')} dot={<CustomizedDot/>}/>
                    <Line type="monotone" dataKey="operprib" yAxisId="y2" stroke={chartColor('operprib')} dot={<CustomizedDot/>}/>
                </ComposedChart>
            </ResponsiveContainer>

    );
};

export default Chart;