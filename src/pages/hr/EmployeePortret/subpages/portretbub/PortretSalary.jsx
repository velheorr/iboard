import React, {useEffect, useMemo, useState} from 'react';
import {chartConfig} from "../../../js/chartConfig";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import '../../../hr.scss'

const PortretSalary = () => {
    const [isLegendVisible, setIsLegendVisible] = useState(false);
    const [data, setData] = useState([])

    const options = useMemo(() => ({
        accessibility: {...chartConfig.accessibility},
        credits: {...chartConfig.credits},
        chart: {
            type: 'column',...chartConfig.chart, height: 350,},
        title: {...chartConfig.title},
        legend: {enabled: isLegendVisible,...chartConfig.legend},
        xAxis: {
            ...chartConfig.xAxis,
            min: 0,
            categories: [
                'до 30 тыс.',
                '30 - 40 тыс.',
                '40 - 60 тыс.',
                '60 - 80 тыс.',
                '80 - 100 тыс.',
                'более 100 тыс.',
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
                data: [73,66,26,35,7,10]
            }, ]
    }), [isLegendVisible, data])

    return (
        <div>
            <div className='chartHRName'>Уровень зарплаты ~36 тыс</div>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    );
};

export default PortretSalary;