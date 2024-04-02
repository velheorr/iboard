import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    ReferenceLine, Label,
} from 'recharts';
import {useSelector} from "react-redux";
import {palette} from "../../../utils/theme";
import {Typography} from "@mui/material";

const RealizationChart = ({item, variant = false}) => {
    let data = []
    const checkNum = (num) => {
        return num > 125 ? 125 : num
    }
    const mode = useSelector(state => state.header.mode);
    const colorTheme = () => {
        return mode === "dark" ? palette.white : palette.black
    }

    if (item){
        data.push(
            {
                name: '% СПД',
                info: '% суммы подписанных договорных документов',
                uv:  checkNum(item.ПроцентПодписанныхДоговоров),
                realNumber: item.ПроцентПодписанныхДоговоров
            },
            {
                name: '% СПС',
                info: 'Суммы подписанных смет',
                uv:  checkNum(item.ПроцентПодписанныхДоговоров),
                realNumber: item.ПроцентПодписанныхДоговоров,
            },
            {
                name: '% ОС',
                info: '% освоения договорных сроков',
                uv: checkNum(item.ПроцентОсвоенияСроков),
                realNumber: item.ПроцентОсвоенияСроков,
            },
            {
                name: '% ПФОТ',
                info: '% прономерованного ФОТ',
                uv: checkNum(item.ПроцентПронормированногоФОТ),
                realNumber: item.ПроцентПронормированногоФОТ,
            },
            {
                name: '% ОФОТ',
                info: '% освоения ФОТ СМР',
                uv: checkNum(item.ПроцентОсвоенияФОТ),
                realNumber: item.ПроцентОсвоенияФОТ,
            },
            {
                name: '% ОФ',
                info: '% освоения финансирования проекта',
                uv: checkNum(item.ПроцентОсвоенияФин),
                realNumber: item.ПроцентОсвоенияФин,
            },
            {
                name: '% ОиМ',
                info: '% обеспеченности пронормированных ОиМ',
                uv: checkNum(item.ПроцентПронормированногоОиМ),
                realNumber: item.ПроцентПронормированногоОиМ,
            },
            {
                name: '% НТ (план)',
                info: '% запланированной нормативной трудоемкости',
                uv: checkNum(item.ПроцентЗаплнНТ),
                realNumber: item.ПроцентЗаплнНТ,
            },
            {
                name: '% НТ (факт)',
                info: '% прогресса нормативной трудоемкости',
                uv: checkNum(item.ПроцентПрогрессаНЧ),
                realNumber: item.ПроцентПрогрессаНЧ,
            },
            {
                name: '% НЗП',
                info: '% превращения НЗП в Себестоимость',
                uv: checkNum(item.ПроцентПревращенияНЗП),
                realNumber: item.ПроцентПревращенияНЗП,
            },
            {
                name: '% ПРОЦ',
                info: '% предьявлено Заказчику',
                uv: checkNum(item.ПроцентПредьявленныхРТИУ),
                realNumber: item.ПроцентПредьявленныхРТИУ,
            },
            {
                name: '% ПРИН',
                info: '% процентовок принятых Заказчиком',
                uv: checkNum(item.ПроцентПринятыхРТИУ),
                realNumber: item.ПроцентПринятыхРТИУ,
            },
        )
    }


    const CustomTooltip = ({ active, payload, label }) => {
        let x= label?.slice(0, -3)
        if (active && payload && payload.length) {
            let newLabel = payload[0]?.payload.realNumber || payload[0].value
            let info = payload[0]?.payload.info || null
            return (
                /*<div className="custom-tooltip" style={{color: colorTheme()}}>*/
                <div className="custom-tooltip">
                    <Typography variant="subtitle2" gutterBottom color='white'>{`${x}: ${newLabel}%`}</Typography>
                    {
                        variant
                            ? <Typography variant="subtitle2" gutterBottom color='white'>{info}</Typography>
                            : null
                    }
                </div>
            );
        }
        return null;
    };

    const CustomLabel = (props) =>{
        const {x, y, name, width} = props;
        let find = data.find(num => num.name ===  name).realNumber
        let countWidth = width
        /*width < 20 ? countWidth = countWidth + 10 : countWidth = countWidth - 20*/
        if (width < 20){
            countWidth = countWidth + 10
        } else {
            countWidth = countWidth - 20
        }
        return <text x={x} y={y} dy={28} dx={countWidth} fill={colorTheme()} fontSize={14} textAnchor="middle">{find}</text>
    };



    return (
        <div style={{ position: "relative", padding: '5px'}}>
            <ResponsiveContainer width={'100%'}  height={300} minWidth={100} minHeight={100} >
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    layout="vertical"
                    barSize={90}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    {/*allowDataOverflow={true}  dataKey={data.uv}*/}
                    <XAxis type="number" dataKey='uv'  domain={[0, dataMax => (125)]} scale={'linear'} tick={{ fill: colorTheme()}}/>
                    <YAxis dataKey="name" type='category' width={100}  style={{ fontSize: "13px"}} tick={{ fill: colorTheme()}}/>
                    <Tooltip dataKey="uv" content={<CustomTooltip/>}/>
                    {/*<Bar dataKey="uv"  label={{ position: 'insideRight', fill: 'white', offset: '10'}}>*/}
                    <Bar dataKey="uv"  label={<CustomLabel />}>
                        {data.map((entry, index) => (
                            <Cell cursor="pointer" fill={entry.realNumber > 100 ? '#F60209' : '#7C7C7C'} key={`cell-${index}`} interval={0} />
                        ))}
                    </Bar>
                    {/*<ReferenceLine x={100} stroke="black"  strokeWidth={2}>*/}
                    <ReferenceLine x={100} stroke={colorTheme()}  strokeWidth={2}>
                        <Label value="100" offset={-18} position="insideBottom" />
                    </ReferenceLine>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default RealizationChart;





