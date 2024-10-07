import React, {useMemo, useState} from 'react';
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import {chartConfig} from "../../js/chartConfig";

const AmgNegative = ({className}) => {
    const [isLegendVisible, setIsLegendVisible] = useState(false);
    const options = useMemo(() => ({
        accessibility: {...chartConfig.accessibility},
        chart: {type: 'bar', ...chartConfig.chart, height: 330,},
        title: {text: 'Показатели чегото там 2', ...chartConfig.title},
        legend: {enabled: isLegendVisible,...chartConfig.legend},
        xAxis: {...chartConfig.xAxis,
            categories: [
                'Подтверждено Оим', 'Поступило ОиМ', 'Списано ОиМ', 'Начислено ФОТ (прямой)', 'Вложено на Субчиков',
                'Вложено Спецмеханизмов', 'Вложено в Спецработы', 'Задолженность Заказчиков', 'Гарантийные ужержания',
            ], },
        yAxis: [{
            gridLineWidth: 0,
            labels: {
                enabled: false // Отключаем подписи по оси
            },
            max: 0,
            offset: 0,
            width: '50%'
        }, {
            ...chartConfig.yAxis,
            gridLineWidth: 0,
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
            format: '<b>{key}</b><br/><span style="color:{series.color}">{series.name}</span>: {y} млн.<br/>', /*+ 'Total: {point.stackTotal}'*/
            shared: true
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    align: 'center',
                }
            }
        },
        series: [{
            name: 'Сумма',
            data: [-15, -25, -35, -10, -15, -45, -33, -45, -21],
        }, {
            name: 'Дни',
            data: [10, 20, 30, 12, 12, 25, 34, 40, 28],
            yAxis: 1
        }],
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

export default AmgNegative;