import React, {useMemo, useState} from 'react';
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import {chartConfig} from "../../js/chartConfig";

const AmgDonut = ({className}) => {
    const [isLegendVisible, setIsLegendVisible] = useState(false);

    const options = useMemo(() => ({
        accessibility: {...chartConfig.accessibility},
        chart: {
            type: 'pie', ...chartConfig.chart, height: 330,
        },
        legend: {enabled: isLegendVisible,...chartConfig.legend},
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
            pointFormat: '<b>{point.name}: {point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                },
                innerSize: '40%', // Установка внутреннего размера для создания эффекта пончика
            }
        },
        series: [{
            name: 'Данные',
            colorByPoint: true,
            dataLabels: {
                style: {
                    fontSize: '10px' // Измените размер шрифта здесь
                }
            },
            data: [
                { name: 'Продано ТКП', y: 150 },
                { name: 'Подписано смет/договоров', y: 150 },
                { name: 'Поставлено ОиМ', y: 200 },
                { name: 'Оплачено ФОТ', y: 100 },
                { name: 'Смонтировано', y: 80 },
                { name: 'Запроцентовано', y: 200 },
            ],
        }],
        // Добавление текста в центр
        credits: {
            enabled: false
        },
        // Центрирование текста в круге
        title: {
            text: 'Маржинальная прибыль', // Здесь можно указать текст для центра
            verticalAlign: 'middle',
            y: 0,
            style: {
                fontSize: '16px',
                color: 'white'
            }
        }
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

export default AmgDonut;