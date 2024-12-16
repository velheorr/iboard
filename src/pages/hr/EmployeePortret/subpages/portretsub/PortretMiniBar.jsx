import React, {useMemo} from 'react';
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import {chartConfig} from "../../../js/chartConfig";


const PortretMiniBar = ({data}) => {
    const options = useMemo(() => ({
        accessibility: {...chartConfig.accessibility},
        credits: {
            enabled: false // Отключить отображение ссылки
        },
        chart: {type: 'bar', ...chartConfig.chart, height: 35, width: 100},
        title: {text: null, ...chartConfig.title},
        subtitle: {text: null, ...chartConfig.subtitle},
        legend: {enabled: false,...chartConfig.legend},
        xAxis: {
            categories: [''],
/*            labels: {
                enabled: false // Hide x-axis labels for a cleaner look
            },*/
            lineWidth: 0,

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
        plotOptions: {
            series: {
                pointWidth: 25, // Установите желаемую ширину бара
                borderWidth: 0,
            },
        },
        series: [{
            name: 'Data',
            data: [data],
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

export default PortretMiniBar;