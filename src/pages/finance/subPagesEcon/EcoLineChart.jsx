import React, {useEffect, useMemo, useState} from 'react';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import {convertData, convertForLineChart} from "./convertData";
import {useSelector} from "react-redux";

const EcoLineChart = ({info}) => {
    //const ecoline = useSelector(state => state.economics.ecoline)

    const [data, setData] = useState([]);
    const updateData = () => {
        setData(convertForLineChart(info));
    };

    useEffect(()=>{
        updateData()
    },[info])

    const options = useMemo(() => ({
        chart: {
            type: 'line',
            height: '300',
            backgroundColor: 'rgba(225,225,225,0)',
            color: '#fff'
        },

        title: {
            text: 'Показатели нарастающим итогом',
            style:{
                color: 'white',
                fontSize: '18px'
            }
        },
        subtitle: {
            text: 'Факт/Прогноз',
            align: 'left'
        },
        legend: {
            layout: 'horizontal',
            align: 'center',

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
            labels: {
                style: {
                    color: 'white'
                }
            },
            title: {
                text: 'За месяц, млн.',
                style:{
                    color: 'white',
                    fontSize: '12px'
                }
            }
        },
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 800
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        },
        exporting: {
            enabled: true,
            buttons: {
                contextButton: {
                    menuItems: [
                        "viewFullscreen", "printChart", "separator",
                        "downloadPNG", "downloadJPEG", "downloadPDF",

                    ],
                    symbolStroke: "#17fa2f",
                    theme: {
                        fill:"transparent",
                    }
                },
            }
        },
        series: data,
    }), [data])





    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    );
};

export default EcoLineChart;