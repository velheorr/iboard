import React, {useEffect, useMemo, useState} from 'react';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import {convertData, convertForLineChart} from "./convertData";
import {useSelector} from "react-redux";
import {chartConfig} from "../js/chartConfig";

const EcoLineChart = ({info}) => {
    //const ecoline = useSelector(state => state.economics.ecoline)
    const [isLegendVisible, setIsLegendVisible] = useState(false);
    const [data, setData] = useState([]);
    const updateData = () => {
        setData(convertForLineChart(info));
    };

    useEffect(()=>{
        updateData()
    },[info])

    const options = useMemo(() => ({
        chart: {type: 'line', ...chartConfig.chart},
        title: {text: 'Показатели нарастающим итогом', ...chartConfig.title},
        subtitle: {text: 'За месяц, млн.', ...chartConfig.subtitle},
        legend: {enabled: isLegendVisible,...chartConfig.legend},
        xAxis: {...chartConfig.xAxis},
        yAxis: {
            labels: {
                style: {
                    color: 'rgb(102, 102, 102)'
                }
            },
            title: {
                text: null,
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
            /*enabled: true,*/
            buttons: {
                contextButton: {
                    menuItems: [
                        'viewFullscreen',
                        {
                            text: 'Легенда',
                            onclick: function () {
                                setIsLegendVisible(!isLegendVisible); // Toggle legend visibility
                            },
                        },
                        "printChart", "separator",
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
    }), [data, isLegendVisible])





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