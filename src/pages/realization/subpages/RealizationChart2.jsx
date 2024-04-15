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
import {useModal} from "../../../hook/useModal";



const RealizationChart2 = ({item, variant = false}) => {
    let data = item || []

    const mode = useSelector(state => state.header.mode);
    const colorTheme = () => {
        return mode === "dark" ? palette.white : palette.black
    }
    const {setModal} = useModal()


    /*Тултип в графике*/
    /*параментр variant = по умолчанию false? нужен для вывода доп инфы  */
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            let newLabel = payload[0]?.payload.realNumber || payload[0].value
            let info = payload[0]?.payload.info || null
            return (
                /*<div className="custom-tooltip" style={{color: colorTheme()}}>*/
                <div className="custom-tooltip">
                    <Typography variant="subtitle2" gutterBottom color='white'>{`${info}: ${newLabel} %`}</Typography>
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

    /*Числовые значения в графике (позиция, цвет)*/
    const CustomLabel = (props) =>{
        const {x, y, name, width} = props;
        let findNumber = data.find(num => num.name ===  name).realNumber
        let findDynamics = data.find(num => num.name ===  name).dynamics
        let plus = '+'

        if (findDynamics === 0 || findDynamics === undefined) {
            findDynamics = ''
            plus = ''
        } else if(findDynamics.toString().includes('-')) {
            plus = ''
        }

        let countWidth = width || 0
        if (width < 20){
            countWidth = countWidth + 10
        } else {
            countWidth = countWidth - 25
        }
        return <text x={x} y={y} dy={17} dx={countWidth} fill={colorTheme()} fontSize={14} textAnchor="middle">{`${findNumber} ${plus}${findDynamics}`}</text>

    };

    return (
        <div style={{ position: "relative", padding: '5px'}}>
            <ResponsiveContainer width={'100%'}  height={340} minWidth={100} minHeight={100} >
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    layout="vertical"
                    barSize={30}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" dataKey='uv'  domain={[0, dataMax => (125)]} scale={'linear'} style={{ fontSize: "11px"}} tick={{ fill: colorTheme()}}/>
                    <YAxis dataKey="name" type='category' width={70}  style={{ fontSize: "11px"}} tick={{ fill: colorTheme()}}/>
                    <Tooltip dataKey="uv" content={<CustomTooltip/>}/>
                    <Bar dataKey="uv"  label={<CustomLabel />}>
                        {data.map((entry, index) => (
                            /*тут можно ф-ю окрашивания бара в графике*/
                            <Cell cursor="help" fill={entry.barColor} key={`cell-${index}`} interval={0} onClick={()=>setModal(entry.name)}/>
                        ))}
                    </Bar>
                    <ReferenceLine x={100} stroke={colorTheme()}  strokeWidth={2}>
                        {/*<Label value="100"  offset={-18} position="insideBottom" />*/}
                    </ReferenceLine>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default RealizationChart2;





