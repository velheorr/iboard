import React, {useMemo, useState} from 'react';
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import {chartConfig} from "../../js/chartConfig";

const AmgBulletChart2 = ({className}) => {
    const [isLegendVisible, setIsLegendVisible] = useState(false);

    const options = useMemo(() => ({
        accessibility: {...chartConfig.accessibility},
        credits: {...chartConfig.credits},
        chart: {
            type: 'bar',
            ...chartConfig.chart, height: 310,
        },
        title: {
            text: null,
            ...chartConfig.title
        },
        legend: {enabled: isLegendVisible,...chartConfig.legend},
        xAxis: {
            ...chartConfig.xAxis,
            min: 0,
            categories: [
                'Общепроизводственные', 'Ресурсные (услуги и финрез)', 'Обеспечивающие (услуги и финрез)', 'Накладные', 'Налоги', 'АМГ Бизнес', 'АМГ Управление', 'Фонд издержек'
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
            formatter: function() {
                let color = this.color
                if (color === 'transparent'){ color = 'black'}
                return `<b>${this.x}</b><br/><span style="color:${color}">${this.series.userOptions.name}</span>: ${this.y} млн.<br/>`
            },
            /*format: '<b>{key}</b><br/><span style="color:{series.color}">{series.name}</span>: {y} млн.<br/>' /!*+ 'Total: {point.stackTotal}'*!/*/
        },
        plotOptions: {
            series: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    y: -1,
                    style: {
                        fontSize: '10px', // Установка размера шрифта
                        color: 'white'
                    },
                },
            }
        },
        series: [{
            name: 'Потери',
            data: [83, 70, 68, 100, 22,82,45, 76],
            pointWidth: 10,
            zIndex: 2,
            stack: 'inner', // Указываем, что это внутренний показатель
            dataLabels: {
                formatter: function() {
                    return this.total
                }
            },
            color: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 }, // Градиент по горизонтали
                stops: [
                    [0, '#56c2c5'], // Начальный цвет градиента
                    [1, '#1dadb1']  // Конечный цвет градиента
                ]
            }
        }, {
            name: 'Накоплено',
            data: [50, 70, 25, 16, 99,44,24,42],
            pointWidth: 10,
            zIndex: 2,
            stack: 'inner', // Указываем, что это внутренний показатель
            dataLabels: {
                formatter: function() {
                    return this.point.stackY
                }
            },
            color: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 }, // Градиент по горизонтали
                stops: [
                    [0, '#79b3b1'], // Начальный цвет градиента
                    [1, '#4c9a97']  // Конечный цвет градиента
                ]
            }
        }, {
            name: 'Прогноз на конец года',
            data: [60, 27, 33, 45, 56,24,45, 55],
            pointWidth: 10,
            zIndex: 2,
            stack: 'inner', // Указываем, что это внутренний показатель
            color: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 }, // Градиент по горизонтали
                stops: [
                    [0, '#456264'], // Начальный цвет градиента
                    [1, '#072e30']  // Конечный цвет градиента
                ]
            }

        }, {
            name: 'План на конец года',
            data: [198, 170, 168, 100, 46,140,45, 176],
            pointPlacement: .3,
            pointWidth: 20,
            zIndex: 1,
            stack: 'outer', // Указываем, что это отдельный столбик
            dataLabels: {
                align: 'right',
                verticalAlign: 'top',
                x: 5,
                y: 13,
                format: 'План: {point.y}',
                style: {
                    color: 'grey'
                }
            },
            color: 'transparent',
            borderWidth: 2,
            borderColor: 'grey',
        }]
    }), [isLegendVisible])

    return (
        <div className={className}>
            <div className='chartTitle'>Пуля</div>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    );
};

export default AmgBulletChart2;