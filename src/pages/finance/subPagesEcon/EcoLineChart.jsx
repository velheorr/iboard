import React, {useEffect, useState} from 'react';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import {convertData} from "./convertData";
import {useSelector} from "react-redux";

const EcoLineChart = () => {
    const ecoline = useSelector(state => state.economics.ecoline);
    const options = {
        chart: {
            type: 'line',
            height: '300',
            backgroundColor: 'rgba(225,225,225,0)',
            color: '#fff'
        },

        title: {
            text: 'Line Chart with 4 Lines',
            style:{
                color: 'white',
                fontSize: '25px'
            }
        },
        subtitle: {
            text: 'График с линиями прогноза и т.д.',
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
                text: 'Values',
                style:{
                    color: 'white',
                    fontSize: '14px'
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
                    symbolStroke: "red",
                    theme: {
                        fill:"#17fa2f",
                    }
                },
            }
        },
        series: ecoline,
    }





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