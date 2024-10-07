import React, {useMemo, useState} from 'react';
import {chartConfig} from "../../js/chartConfig";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

const AmgPie = ({className}) => {
    const [isLegendVisible, setIsLegendVisible] = useState(false);

    const options = useMemo(() => ({
        accessibility: {...chartConfig.accessibility},
        chart: {
            type: 'pie', ...chartConfig.chart,height: 330,
        },
        legend: {
            enabled: isLegendVisible,...chartConfig.legend,
            itemStyle: {
                cursor: 'pointer'
            }
        },
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
        // Добавление текста в центр
        /*credits: {
            enabled: false
        },
        // Центрирование текста в круге
        title: {
            text: 'Маржинальная прибыль', // Здесь можно указать текст для центра
            verticalAlign: 'top',
            y: 0,
            style: {
                fontSize: '16px',
                color: 'white'
            }
        },*/
        title: {
            text: 'Маржинальная прибыль: 800',
            y: 0,
            verticalAlign: 'bottom',
            ...chartConfig.title,
            style: {
                fontSize: '16px',
                color: 'white'
            }
        },
        series: [{
            name: 'Данные',
            colorByPoint: true,
            data: [{
                name: 'Продано ТКП',
                y: 45,
                sliced: true,
                /*selected: true*/
            }, {
                name: 'Подписано смет/договоров',
                y: 25,
            }, {
                name: 'Поставлено ОиМ',
                y: 30,
            },
                {
                    name: 'Оплачено ФОТ',
                    y: 25
                },
                {
                    name: 'Смонтировано',
                    y: 25
                },
                {
                    name: 'Запроцентовано',
                    y: 25
                },
            ],
            dataLabels: {
                enabled: true,
                format: '{point.name}: {point.y}' // Формат отображения
            },
            point: {
                events: {
                    click: function () {
                        const series = this.series;
                        // Сброс выделения для всех точек
                        series.data.forEach(point => {
                            if (point !== this) {
                                point.slice(false); // Убираем выделение
                            }
                        });
                        // Переключаем выделение для нажатого кусочка
                        this.slice(!this.sliced);
                    }
                }
            },
            showInLegend: true // Убедитесь, что элементы отображаются в легенде
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

export default AmgPie;