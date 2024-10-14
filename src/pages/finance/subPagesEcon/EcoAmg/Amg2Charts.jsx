import React, {useMemo, useState} from 'react';
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highstock";
import {chartConfig} from "../../js/chartConfig";

const Amg2Charts = ({className}) => {
    const [isLegendVisible, setIsLegendVisible] = useState(false);

    const options = useMemo(() => ({
        accessibility: {...chartConfig.accessibility},
        chart: {type: 'bar', ...chartConfig.chart, height: 300,},
        title: {text: null, ...chartConfig.title},
        legend: {enabled: isLegendVisible,...chartConfig.legend},
        xAxis: {...chartConfig.xAxis,
            categories: [
                'Подтверждено Оим', 'Поступило ОиМ', 'Списано ОиМ', 'Начислено ФОТ (прямой)', 'Вложено на Субчиков',
                'Вложено Спецмеханизмов', 'Вложено в Спецработы', 'Задолженность Заказчиков', 'Гарантийные ужержания',
            ],
            labels: {
                enabled: false, // Отключаем подписи по оси
            },
            opposite: true
        },
        yAxis: {...chartConfig.yAxis,
            reversed: true,
            gridLineWidth: 0,
            labels: {
                enabled: false // Отключаем подписи по оси
            }},
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
            format: '<b>{key}</b><br/><span style="color:{series.color}">{series.name}</span>: {y} млн.<br/>' /*+ 'Total: {point.stackTotal}'*/
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    align: 'right',
                    y: -2,
                    x: 0
                }
            }
        },
        series: [
            {
                name: 'Дни',
                data: [15, 25, 35, 10, 15, 45, 33, 45, 21]
            }
        ]
    }), [isLegendVisible])

    const options2 = useMemo(() => ({
        accessibility: {...chartConfig.accessibility},
        chart: {type: 'bar', ...chartConfig.chart, height: 300,},
        title: {text: null, ...chartConfig.title},
        legend: {enabled: isLegendVisible,...chartConfig.legend},
        xAxis: {...chartConfig.xAxis,
            categories: [
                'Подтверждено Оим', 'Поступило ОиМ', 'Списано ОиМ', 'Начислено ФОТ (прямой)', 'Вложено на Субчиков',
                'Вложено Спецмеханизмов', 'Вложено в Спецработы', 'Задолженность Заказчиков', 'Гарантийные ужержания',
            ],
            labels: {
                style: {
                    color: 'rgb(102, 102, 102)',
                    fontSize: '13px', // Размер шрифта
                },
                align: 'center', // Положение подписей
                padding: 10
            }
        },
        yAxis: {...chartConfig.yAxis,
            gridLineWidth: 0,
            labels: {
                enabled: false // Отключаем подписи по оси
            }},
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
            format: '<b>{key}</b><br/><span style="color:{series.color}">{series.name}</span>: {y} млн.<br/>' /*+ 'Total: {point.stackTotal}'*/
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    align: 'right',
                    y: -2,
                    x: 0
                }
            }
        },
        series: [{
            name: 'Сумма',
            data: [10, 20, 30, 12, 12, 25, 34, 40, 28]
        }]
    }), [isLegendVisible])

    return (
        <div className={className} style={{display: 'flex', flexWrap: 'nowrap'}}>
            <div style={{width: '25%'}}>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={options}
                />
            </div>
            <div style={{width: '75%'}}>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={options2}
                />
            </div>

        </div>
    );
};

export default Amg2Charts;