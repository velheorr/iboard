import React, {useMemo, useState} from 'react';
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import {chartConfig} from "../../js/chartConfig";

const AmgBulletChart2 = ({className}) => {
    const [isLegendVisible, setIsLegendVisible] = useState(false);

    const options = useMemo(() => ({
        accessibility: {...chartConfig.accessibility},
        chart: {
            type: 'bar',
            ...chartConfig.chart, height: 330,
        },
        title: {
            text: 'Горизонтальная столбчатая',
            ...chartConfig.title
        },
        legend: {enabled: isLegendVisible,...chartConfig.legend},
        xAxis: {
            ...chartConfig.xAxis,
            min: 0,
            categories: [
                'ФОТ', 'Субподряд и Спецмеханизмы', 'Общепроизводственные', 'Ресурсные', 'Обеспечивающие', 'Накладные', 'Налоги', 'АМГ Бизнес', 'АМГ Управление',
            ],
            title: {
                text: null,
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: 'gray'
                }
            }
        },
        yAxis: {
            gridLineWidth: .5,
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
            format: '<b>{key}</b><br/><span style="color:{series.color}">{series.name}</span>: {y} млн.<br/>' /*+ 'Total: {point.stackTotal}'*/
        },
        plotOptions: {
            series: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true
                }
            }
        },
        series: [{
            name: 'Потери',
            data: [37, 83, 70, 68, 100, 22,82,45, 76],
            zIndex: 2,
            stack: 'inner' // Указываем, что это внутренний показатель
        }, {
            name: 'Накоплено',
            data: [50, 50, 70, 25, 16, 99,44,24,42],
            zIndex: 2,
            stack: 'inner' // Указываем, что это внутренний показатель
        }, {
            name: 'Прогноз на конец года',
            data: [180, 60, 27, 33, 45, 56,24,45, 55],
            zIndex: 2,
            stack: 'inner' // Указываем, что это внутренний показатель
        }, {
            name: 'План на конец года',
            data: [150, 98, 70, 68, 100, 46,140,45, 76],
            pointPlacement: .3,
            pointWidth: 20,
            zIndex: 1,
            stack: 'outer' // Указываем, что это отдельный столбик
        }]
    }), [isLegendVisible])

    return (
        <div className={className}>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    );
};

export default AmgBulletChart2;