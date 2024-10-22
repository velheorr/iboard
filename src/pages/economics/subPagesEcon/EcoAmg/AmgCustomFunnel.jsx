import React, {useMemo, useState} from 'react';
import {chartConfig} from "../../js/chartConfig";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import '../../econ.scss'

const AmgCustomFunnel = ({className}) => {
    const [isLegendVisible, setIsLegendVisible] = useState(false);

    const options = useMemo(() => ({
        accessibility: {...chartConfig.accessibility},
        credits: {...chartConfig.credits},
        chart: {type: 'bar', ...chartConfig.chart, height: 310,},
        title: {text: null, ...chartConfig.title},
        legend: {enabled: isLegendVisible,...chartConfig.legend},
        xAxis: {...chartConfig.xAxis,
            categories: [
                'Продано ТКП',
                'Подписано смет/договоров',
                'Поставлено ОиМ',
                'Оплачено ФОТ',
                'Смонтировано',
                'Запроцентовано',
                '<span style="color: #17f82f;">Маржинальная прибыль</span>',],
            gridLineWidth: 0,
            gridLineDashStyle: 'Dot',
        },
        yAxis: [{
            gridLineWidth: 0,
            gridLineDashStyle: 'Dot',
            labels: {
                enabled: false // Отключаем подписи по оси
            },
            title: {
                text: null // Убираем заголовок оси X
            },
            max: 0,
            offset: 0,
            width: '50%'
        }, {
            ...chartConfig.yAxis,
            gridLineWidth: 0,
            gridLineDashStyle: 'Dot',
            labels: {
                enabled: false // Отключаем подписи по оси
            },
            min: 0,
            offset: 0,
            left: '50%',
            width: '50%'
        }],
        lang: {...chartConfig.lang},
        exporting: {
            buttons: {
                contextButton: {
                    ...chartConfig.exporting.buttons.contextButton,
                    menuItems: [
                        'viewFullscreen',
                        /*{
                            text: 'Легенда',
                            onclick: function () {
                                setIsLegendVisible(!isLegendVisible); // Toggle legend visibility
                            },
                        },*/
                        "printChart", "separator",
                        "downloadPNG", "downloadJPEG", "downloadPDF",
                    ],
                },
            },
        },
        tooltip: {
            formatter: function() {
                let s = '<b>' + this.x + '</b>';
                this.points.forEach(point => {
                    if (point.y < 0 ) return
                    s += `<br/><span style="color:${point.color}">${point.series.name}</span>: ${point.y} млн.`
                });
                return s;
            },
            /*format: '<b>{key}</b><br/><span style="color:{series.color}">{series.name}</span>: {y} млн.<br/>',*/ /*+ 'Total: {point.stackTotal}'*/
            shared: true
        },
        series: [ {
            name: 'Сумма',
            data: [
                {
                    y: 100,
                    color: '#571f91',
                },
                {
                    y: 90,
                    color: '#2e4399',
                },
                {
                    y: 80,
                    color: '#4063f3',
                },
                {
                    y: 70,
                    color: '#007ed3',
                },
                {
                    y: 60,
                    color: '#3d9bda',
                },
                {
                    y: 50,
                    color: '#7eb1fe',
                },
                {
                    y: 140,
                    color: '#16b423',
                },
            ],
            yAxis: 1,
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                inside: true,
                align: 'left',
                x: -25,
                verticalAlign: 'middle',
                format: '{point.y} млн.',
                style: {
                    color: 'white'
                }
            }
        },
            {
                name: 'Сумма',
                data: [
                    {
                        y: -100,
                        color: '#571f91',
                    },
                    {
                        y: -90,
                        color: '#2e4399',
                    },
                    {
                        y: -80,
                        color: '#4063f3',
                    },
                    {
                        y: -70,
                        color: '#007ed3',
                    },
                    {
                        y: -60,
                        color: '#3d9bda',
                    },
                    {
                        y: -50,
                        color: '#7eb1fe',
                    },
                    {
                        y: -140,
                        color: '#16b423',
                    },
                ],
                borderWidth: 0,
            },
        ],
    }), [isLegendVisible])

    return (
        <div className={className}>
            <div className='chartTitle'>Воронка</div>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    );
};

export default AmgCustomFunnel;