import React, {useMemo, useState} from 'react';
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import {chartConfig} from "../../js/chartConfig";

const AmgDoubleBar = ({className}) => {
    const [isLegendVisible, setIsLegendVisible] = useState(false);

    const options = useMemo(() => ({
        chart: {type: 'bar', ...chartConfig.chart, height: 330,},
        title: {text: 'Показатели чегото там', ...chartConfig.title},
        legend: {enabled: isLegendVisible,...chartConfig.legend},
        xAxis: {...chartConfig.xAxis,
            categories: [
                'Подтверждено Оим', 'Поступило ОиМ', 'Списано ОиМ', 'Начислено ФОТ (прямой)', 'Вложено на Субчиков',
                'Вложено Спецмеханизмов', 'Вложено в Спецработы', 'Задолженность Заказчиков', 'Гарантийные ужержания',
            ], },
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
        }, {
            name: 'Дни',
            data: [15, 25, 35, 10, 15, 45, 33, 45, 21]
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

export default AmgDoubleBar;