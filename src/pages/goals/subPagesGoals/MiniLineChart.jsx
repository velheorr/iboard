import React, {useMemo, useState} from 'react';
import {chartConfig} from "../../economics/js/chartConfig";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

const MiniLineChart = () => {
    const options = useMemo(() => ({
        accessibility: {...chartConfig.accessibility},
        credits: {
            enabled: false // Отключить отображение ссылки
        },
        chart: {type: 'line', ...chartConfig.chart, height: 34},
        title: {text: null, ...chartConfig.title},
        subtitle: {text: null, ...chartConfig.subtitle},
        legend: {enabled: false,...chartConfig.legend},
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            labels: {
                enabled: false // Hide x-axis labels for a cleaner look
            },
            lineWidth: 0
        },
        yAxis: {
            title: {
                text: '',
            },
            labels: {
                enabled: false // Hide y-axis labels for a cleaner look
            },
            gridLineWidth: 0 // Remove grid lines
        },
        navigation: {
            buttonOptions: {
                enabled: false // Отключить кнопки
            }
        },
        series: [{
            name: 'Data',
            data: [10, 2, 44, 3, 50],
            marker: {
                enabled: false // Hide markers for a more streamlined appearance
            },
            dataLabels: {
                enabled: false // Отключить показ цифр
            }
        }],
        tooltip: {
            enabled: false, // Отключить tooltip
            format: '<b>{key}</b><br/><span style="color:{series.color}">{series.name}</span>: {y} млн.<br/>' /*+ 'Total: {point.stackTotal}'*/
        },
    }), [])


    return (
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
    );
};

export default MiniLineChart;