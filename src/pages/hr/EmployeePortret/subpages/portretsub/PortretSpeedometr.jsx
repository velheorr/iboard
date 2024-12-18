import React, {useMemo, useState} from 'react';
import {chartConfig} from "../../../js/chartConfig";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

const PortretSpeedometr = () => {
    const [data, setData] = useState([])

    const options = useMemo(() => ({
        accessibility: {...chartConfig.accessibility},
        credits: {...chartConfig.credits},
        chart: {
            type: 'gauge',...chartConfig.chart, height: 200,
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false,
        },
        title: {...chartConfig.title},
        legend: {enabled: true,...chartConfig.legend},
        pane: {
            startAngle: -90,
            endAngle: 89.9,
            background: null,
            center: ['50%', '75%'],
            size: '110%'
        },

        yAxis: {
            min: 0,
            max: 200,
            tickPixelInterval: 72,
            tickPosition: 'inside',
            tickColor: Highcharts.defaultOptions.chart.backgroundColor || '#FFFFFF',
            tickLength: 20,
            tickWidth: 2,
            minorTickInterval: null,
            labels: {
                distance: 20,
                style: {
                    fontSize: '13px',
                    color: '#767676'
                }
            },
            lineWidth: 0,
            plotBands: [{
                from: 0,
                to: 130,
                color: '#55BF3B', // green
                thickness: 20,
                borderRadius: '50%'
            }, {
                from: 150,
                to: 200,
                color: '#DF5353', // red
                thickness: 20,
                borderRadius: '50%'
            }, {
                from: 120,
                to: 160,
                color: '#DDDF0D', // yellow
                thickness: 20
            }]
        },
        lang: {...chartConfig.lang},
        exporting: {
            enabled: true, // Убедитесь, что экспорт включен
            buttons: {
                contextButton: {
                    ...chartConfig.exporting.buttons.contextButton,
                    menuItems: [
                        'viewFullscreen',
                        "printChart", "separator",
                        "downloadPNG", "downloadJPEG", "downloadPDF",
                    ],
                },
            },
        },
        tooltip: {
            format: '<b>{key}</b><br/><span style="color:{series.color}">{series.name}</span>: {y}<br/>' /*+ 'Total: {point.stackTotal}'*/
        },
        series: /*data || []*/
            [{
                name: 'Рейтинг',
                data: [200],
                tooltip: {
                    valueSuffix: ' Оценка'
                },
                dataLabels: {
                    format: 'Оценка {y} баллов',
                    borderWidth: 0,
                    color:  '#767676',
                    style: {
                        fontSize: '16px'
                    }
                },
                dial: {
                    radius: '80%',
                    backgroundColor: 'gray',
                    baseWidth: 12,
                    baseLength: '0%',
                    rearLength: '0%'
                },
                pivot: {
                    backgroundColor: 'gray',
                    radius: 6
                }
            }, ]
    }), [ data])

    return (
        <div>
            <div className='chartHRName'>Рейтинг руководителя</div>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    );
};

export default PortretSpeedometr;