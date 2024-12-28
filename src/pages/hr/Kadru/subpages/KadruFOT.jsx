import React, {useEffect, useMemo, useState} from 'react';
import {chartConfig} from "../../js/chartConfig";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import '../../hr.scss'
import {useTheme} from "../../../../hook/useTheme";
import {convertForLineChart} from "../../../economics/subPagesEcon/convertData";

const KadruFot = () => {
    const [data, setData] = useState([])
    const [isLegendVisible, setIsLegendVisible] = useState(true);
    const dark = useTheme() // тема

    const [month, setMonth] = useState(null);

    useEffect(()=>{
        const date = new Date()
            setMonth(date.getMonth())
    },[dark])

    const options = useMemo(() => ({
        accessibility: {...chartConfig.accessibility},
        credits: {...chartConfig.credits},
        chart: {type: 'line', ...chartConfig.chart, height: 350},
        title: {text: null, ...chartConfig.title, },
        subtitle: {text: 'За месяц, млн.', ...chartConfig.subtitle},
        legend: {enabled: isLegendVisible,...chartConfig.legend,
            title: {
                text: 'Фот по годам',
                style: {
                    color: '#A0A0A0',
                    fontSize: '16px',
                    fontWeight: 'bold'
                }
            },
            itemHoverStyle: {
                color: dark ? '#FFF' : '#4bb141'
            },
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            itemMarginTop: 10
        },
        xAxis: {
            ...chartConfig.xAxis,
            min: 0,
            categories: [
                'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь','Октябрь','Ноябрь','Декабрь',
            ],
            title: {text: null, },
            plotLines: [{
                color: 'white', // Цвет линии
                width: 1, // Ширина линии
                value: month, // Значение по оси X, где будет линия
                label: {
                    text: null, // Подпись к линии
                    align: 'right',
                    verticalAlign: 'top'
                }
            }]
        },
        yAxis: {...chartConfig.yAxis,},
        lang: {...chartConfig.lang},
        exporting: {
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
            format: '<b>{key}</b><br/><span style="color:{series.color}">{series.name}</span>: {y} тыс руб.<br/>' /*+ 'Total: {point.stackTotal}'*/
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