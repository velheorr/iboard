import React, {useEffect, useMemo, useRef, useState} from 'react';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import {convertForBarChart, convertForLineChart} from "./convertData";
import {chartConfig} from "../js/chartConfig";
import {useGetEco} from "../../../hook/useGetEconomics";
import Skelet from "../../../elements/Skelet";

const EcoBarChart = () => {
    const {data: eco, isLoading, isError, refetch, status} = useGetEco(2024)

    const date = new Date()

    const [isLegendVisible, setIsLegendVisible] = useState(true);
    const [data, setData] = useState([]);
    const [month, setMonth] = useState(null);

    useEffect(()=>{
        setMonth(date.getMonth())
        if (eco){
            setData(convertForBarChart(eco));
        }

    },[eco])


    const options = useMemo(() => ({
        accessibility: {...chartConfig.accessibility},
        chart: {type: 'column', ...chartConfig.chart, height: 300},
        title: {text: null, ...chartConfig.title},
        subtitle: {text: 'За месяц, млн.', ...chartConfig.subtitle},
        legend: {enabled: isLegendVisible,...chartConfig.legend,
            title: {
                text: 'Месячные показатели',
                style: {
                    color: '#A0A0A0',
                    fontSize: '16px',
                    fontWeight: 'bold'
                }
            },
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            itemMarginTop: 5
        },
        xAxis: {...chartConfig.xAxis,
            plotLines: [{
                color: 'white', // Цвет линии
                width: 1, // Ширина линии
                value: month, // Значение по оси X, где будет линия
                label: {
                    text: null, // Подпись к линии
                    align: 'right',
                    verticalAlign: 'top'
                }
            }]
        },
        yAxis: {
            allowDecimals: true,
            min: -10, //max: 300,
            ...chartConfig.yAxis,
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
        tooltip: {
            /*formatter: function() {
                    console.log(this)
                return `<b>${this.key}</b><br/><span style="color:${this.series.userOptions.borderColor}">${this.series.name}</span>: ${this.y} млн.<br/>`
            },*/
            format: '<b>{key}</b><br/>' +
                '<span style="color:{series.userOptions.borderColor}">{series.name}</span>: {y} млн.' +
                '<br/>'
            /*+ 'Total: {point.stackTotal}'*/
        },
        plotOptions: {
            column: {
                stacking: 'overlap',
                color: 'transparent',
                borderWidth: 2,
                borderRadius: 0
               /* dataLabels: {
                    enabled: true,
                    format: '{point.y}',
                    verticalAlign: 'top',
                    inside: true,
                }*/
            },
        },
        series: data || []
    }),[data, isLegendVisible])

    if (isLoading) {return <Skelet option='eco'/>}
    if (isError) {return <h3>Нет подключения к серверу</h3>}
    if (!eco) {return <h3>Нет данных с сервера</h3>}

    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    );
};

export default EcoBarChart;