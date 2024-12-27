import React, {useEffect, useMemo, useState} from 'react';
import {chartConfig} from "../../js/chartConfig";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import '../../hr.scss'

const KadruFot = () => {
    const [data, setData] = useState([])

    const options = useMemo(() => ({
        accessibility: {...chartConfig.accessibility},
        credits: {...chartConfig.credits},
        chart: {
            type: 'area',...chartConfig.chart, height: 350,},
        title: {...chartConfig.title},
        legend: {enabled: false,...chartConfig.legend},
        xAxis: {
            ...chartConfig.xAxis,
            min: 0,
            categories: [
                'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь','Октябрь','Ноябрь','Декабрь',
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
                        "printChart", "separator",
                        "downloadPNG", "downloadJPEG", "downloadPDF",
                    ],
                },
            },
        },
        tooltip: {
            format: '<b>{key}</b><br/><span style="color:{series.color}">{series.name}</span>: {y} тыс руб.<br/>' /*+ 'Total: {point.stackTotal}'*/
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    inside: true,
                    format: '{y}' // Отображает значение
                }
            }
        },
        series: /*data || []*/
            /*[{
                data: [640, 544, 480, 480, 512, 500,277,288,311,610,662,410],
                color: 'rgba(72,72,72,0.61)',
                dataLabels: {
                    enabled: true,
                    inside: true,
                    format: '{y}' // Отображает значение
                }
            }],*/
            [
                {
                    name: '2020',
                    data: [10,50,45,89,41,56,47,23,12,45,85,12],
                    color: 'pink',

                },
                {
                name: '2021',
                data: [41,78,56,85,12,35,48,95,62,10,0,30,20],
                color: 'orange',

            },
                {
                    name: '2022',
                    data: [640, 544, 480, 100, 512, 500,277,288,311,610,662,410],
                    color: 'green',

                },
                {
                    name: '2023',
                    data: [640, 544, 480, 40, 512, 500,277,288,311,610,200,410],
                    color: 'yellow',

                },

            ],

    }), [data])

    return (
        <div>
            <div className='chartHRName'>Фонд оплаты труда, тыс руб</div>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    );
};

export default KadruFot;