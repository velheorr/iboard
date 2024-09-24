import React, {useEffect, useMemo, useState} from 'react';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import {useSelector} from "react-redux";
import {convertForBarChart} from "./convertData";

const EcoBarChart = ({info}) => {
    //const ecoBar = useSelector(state => state.economics.ecoBar)

    const [data, setData] = useState([]);
    const updateData = () => {
        setData(convertForBarChart(info));
    };

    useEffect(()=>{
        updateData()
    },[info])

    const options = useMemo(() => ({
        chart: {
            type: 'column',
            height: '300',
            backgroundColor: 'rgba(225,225,225,0)',
            color: '#fff'
        },

        title: {
            text: 'Месячные показатели',
            style:{
                color: 'white',
                fontSize: '18px'
            }
        },
        subtitle: {
            text: 'За месяц, млн.',
            align: 'left'
        },
        legend: {
            align: 'right',
            verticalAlign: 'middle',
            /*floating: true,*/
            layout: 'vertical',

            itemStyle: {
                fontSize:'14px',
                color: '#A0A0A0'
            },
            itemHoverStyle: {
                color: '#FFF'
            },
            itemHiddenStyle: {
                color: '#444'
            }
        },
        xAxis: {
            labels: {
                style: {
                    color: 'white'
                }
            },
            categories: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        },

        yAxis: {
            allowDecimals: true,
            min: -10,
            title: {
                text: 'За месяц, млн.',
                style:{
                    color: 'white',
                    fontSize: '12px'
                }
            }
        },

        tooltip: {
            format: '<b>{key}</b><br/>{series.name}: {y}<br/>' +
                'Total: {point.stackTotal}'
        },

        plotOptions: {
            column: {
                stacking: 'normal'
            }
        },

        series: data

    }),[data])

    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    );
};

export default EcoBarChart;