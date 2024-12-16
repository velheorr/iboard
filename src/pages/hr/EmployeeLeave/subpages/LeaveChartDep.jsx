import React, {useMemo, useState} from 'react';
import {chartConfig} from "../../js/chartConfig";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import '../../hr.scss'

const LeaveChartDep = () => {
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
                'АХЧ и секретариат', 'Бухгалтерия', 'ИТ служба', 'Отдел кадров', 'Отдел планирования', 'Производство', 'Финансовый отдел'
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

        series: /*data || []  */
            [
                {
                    name: 'Сумма',
                    data: [2,8,2,5,5,4,3],
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        inside: true,
                        align: 'right',
                        verticalAlign: 'middle',
                        /*format: '{point.y} млн.',*/
                        style: {
                            color: 'white'
                        }
                    }
                }
            ],
    }), [isLegendVisible, data])

    return (
        <div>
            <div className='chartHRName'>Число увольнений по отделам</div>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={options}
                />
        </div>
    );
};

export default LeaveChartDep;