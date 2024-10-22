import React, {useMemo, useState} from 'react';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import {chartConfig} from "../../js/chartConfig";

const AmgStackedBar = ({className}) => {
    const [isLegendVisible, setIsLegendVisible] = useState(false);


    const options = useMemo(() => ({
        accessibility: {...chartConfig.accessibility},
        chart: {type: 'bar', ...chartConfig.chart, height: 330,},
        title: {text: 'Показатели нарастающим итогом', ...chartConfig.title},
        subtitle: {text: null, ...chartConfig.subtitle},
        legend: {enabled: isLegendVisible,...chartConfig.legend},
        xAxis: {...chartConfig.xAxis,
            categories: [
                'ФОТ', 'Субподряд и Спецмеханизмы', 'Общепроизводственные', 'Ресурсные', 'Обеспечивающие', 'Накладные', 'Налоги', 'АМГ Бизнес', 'АМГ Управление',
            ]},
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
                stacking: 'normal',
                dataLabels: {
                    enabled: true
                }
            }
        },
        series: [{
            name: 'Потери',
            data: [137, 137, 83, 68, 100, 122,54,45, 76]
            },
            {
                name: 'Накоплено',
                data: [137, 83, 70, 68, 100, 22,82,45, 76]
            },
            {
                name: 'План на конец года',
                data: [83, 70, 70, 68, 100, 75,92,45, 76]
            },
            {
                name: 'Прогноз на конец года',
                data: [70, 68, 70, 68, 100, 46,212,45, 76]
            },
        ]
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

export default AmgStackedBar;