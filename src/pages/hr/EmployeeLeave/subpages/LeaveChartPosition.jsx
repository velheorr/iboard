import React, {useMemo, useState} from 'react';
import {chartConfig} from "../../js/chartConfig";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import '../../hr.scss'

const LeaveChartPosition = () => {
    const [isLegendVisible, setIsLegendVisible] = useState(false);
    const [data, setData] = useState([])

    const options = useMemo(() => ({
        accessibility: {...chartConfig.accessibility},
        credits: {...chartConfig.credits},
        chart: {
            type: 'bar',...chartConfig.chart, height: 300},
        title: {...chartConfig.title},
        legend: {enabled: isLegendVisible,...chartConfig.legend},
        xAxis: {
            ...chartConfig.xAxis,
            min: 0,
            categories: [
                'Специалист',
                'Ведущий специалист',
                'Инженер',
                'Программист',
                'Старший специалист'
            ],
            gridLineWidth: 0,
            gridLineDashStyle: 'Dot',
            labels: {
                useHTML: true, // Enable HTML for styling
                formatter: function () {
                    return `<span class="xaxis-label">${this.value}</span>`;
                },
                style: {
                    color: 'rgb(102, 102, 102)',
                    fontSize: '13px',
                    cursor: 'pointer',
                    textAlign: 'right',
                },
                events: {
                    click: function (e) {
                        /*openFunnelDetails(e.target.innerText)*/
                    }
                },
            },
        },
        yAxis: {
            ...chartConfig.yAxis,
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
            series:{
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    inside: true,
                    align: 'right',
                    verticalAlign: 'middle',
                    style: {
                        color: 'white'
                    }
                }
            }
        },
        series: /*data || []  */
            [
                {
                    name: 'Дата',
                    data: [2,8,8,6,4],
                },
            ],
            /*[{
                name: 'Специалист',
                data: [13],
            },{
                name: 'Ведущий специалист',
                data: [9],
            },{
                name: 'Инженер',
                data: [4],
            },{
                name: 'Программист',
                data: [3],
            },{
                name: 'Старший специалист',
                data: [2],
            }],*/
    }), [isLegendVisible, data])

    return (
        <div>
            <div className='chartHRName'>Число увольнений по должностям</div>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    );
};

export default LeaveChartPosition;