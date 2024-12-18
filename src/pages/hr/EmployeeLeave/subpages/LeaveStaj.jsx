import React, {useMemo, useState} from 'react';
import {chartConfig} from "../../js/chartConfig";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import '../../hr.scss'
const LeaveStaj = () => {
    const [isLegendVisible, setIsLegendVisible] = useState(false);
    const [data, setData] = useState([])

    const options = useMemo(() => ({
        accessibility: {...chartConfig.accessibility},
        credits: {...chartConfig.credits},
        chart: {
            type: 'column',...chartConfig.chart, height: 300,},
        title: {...chartConfig.title},
        legend: {enabled: isLegendVisible,...chartConfig.legend},
        xAxis: {
            ...chartConfig.xAxis,
            min: 0,
            categories: [
                '< 1','2-3','2-3','3-4','4-5','5+',
            ],
            title: {text: null, },
        },
        yAxis: {
            gridLineWidth: 0,
            gridLineDashStyle: 'Dot',
            title: null,
            labels: {
                enabled: false, // Отключаем подписи по оси
                style: {
                    fontSize: '12px' // Установка размера шрифта меток по оси Y
                },
            },
        },
        lang: {...chartConfig.lang},
        exporting: {
            enabled: true, // Убедитесь, что экспорт включен
            buttons: {
                contextButton: {
                    ...chartConfig.exporting.buttons.contextButton,
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
                },
            },
        },
        tooltip: {
            format: '<b>{key}</b><br/><span style="color:{series.color}">{series.name}</span>: {y} чел.<br/>' /*+ 'Total: {point.stackTotal}'*/
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    y: -1,
                    inside: true,
                    align: 'center',
                    verticalAlign: 'middle',
                    style: {
                        fontSize: '10px', // Установка размера шрифта
                        color: 'white'
                    },
                },
                borderWidth: 0,
            }
        },
        series: /*data || []*/
            [{
                name: 'data',
                data: [1,0,2,3,0,1],
                color: '#FF5733',
            }],
            /*[{
                name: '< 1',
                data: [1]
            }, {
                name: '1-2',
                data: [0]
            }, {
                name: '2-3',
                data: [2]
            },{
                name: '3-4',
                data: [2]
            },
                {
                    name: '4-5',
                    data: [0]
                },
                {
                    name: '5+',
                    data: [0]
                },

            ]*/
    }), [isLegendVisible, data])

    return (
        <div>
            <div className='chartHRName'>Стаж работы</div>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    );
};

export default LeaveStaj;