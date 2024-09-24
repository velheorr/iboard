import React, {useEffect, useMemo, useState} from 'react';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import {useSelector} from "react-redux";
import {convertForBarChart} from "./convertData";
import {chartConfig} from "../js/chartConfig";

const EcoBarChart = ({info}) => {
    //const ecoBar = useSelector(state => state.economics.ecoBar)
    const [isLegendVisible, setIsLegendVisible] = useState(false);
    const [data, setData] = useState([]);
    const updateData = () => {
        setData(convertForBarChart(info));
    };

    useEffect(()=>{
        updateData()
    },[info])

    const options = useMemo(() => ({
        chart: {type: 'column', ...chartConfig.chart},
        title: {text: 'Месячные показатели', ...chartConfig.title},
        subtitle: {text: 'За месяц, млн.', ...chartConfig.subtitle},
        legend: {enabled: isLegendVisible,...chartConfig.legend},
        xAxis: {...chartConfig.xAxis},

        yAxis: {
            allowDecimals: true,
            min: -10,
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

        tooltip: {
            format: '<b>{key}</b><br/>{series.name}: {y}<br/>' +
                'Total: {point.stackTotal}'
        },

        plotOptions: {
            column: {
                stacking: 'normal'
            }
        },
       /* navigation: {
            menuItemStyle: {
                padding: '0',
                color: '#303030'
            },
            menuItemHoverStyle: {
                background: '#33bb00',
                color: '#FFFFFF'
            }
        },*/
        lang: {
            viewFullscreen: 'На весь экран',
            exitFullscreen: 'Уменьшить',
            printChart: 'Печать',
            downloadPNG: 'Скачать PNG',
            downloadJPEG: 'Скачать JPG',
            downloadPDF: 'Скачать PDF',
            /*downloadCSV: 'Download Table (CSV)',
            viewData: "View Data Table",
            hideData: "Hide Data Table"*/
        },
        exporting: {
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
                        /*{
                            text: 'Печать',
                            onclick: function() {this.print();}
                        },*/
                        "printChart", "separator",
                        "downloadPNG", "downloadJPEG", "downloadPDF",

                    ],
                    symbolStroke: "#17fa2f",
                    theme: {
                        fill:"transparent",
                        states: {
                            hover: {
                                fill: '#0a8016',
                            },
                        }
                    },
                    /*className: 'aaa',*/
                },
            },
        },
        series: data
    }),[data, isLegendVisible])

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