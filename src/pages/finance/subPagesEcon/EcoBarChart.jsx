import React, {useEffect, useMemo, useState} from 'react';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import {convertForBarChart, convertForLineChart} from "./convertData";
import {chartConfig} from "../js/chartConfig";
import {useGetEco} from "../../../hook/useGetEconomics";
import Skelet from "../../../elements/Skelet";

const EcoBarChart = () => {
    const {data: eco, isLoading, isError, refetch, status} = useGetEco(2024)

    const [isLegendVisible, setIsLegendVisible] = useState(false);
    const [data, setData] = useState([]);

    useEffect(()=>{
        if (eco){
            setData(convertForBarChart(eco));
        }
    },[eco])


    const options = useMemo(() => ({
        accessibility: {...chartConfig.accessibility},
        chart: {type: 'column', ...chartConfig.chart},
        title: {text: 'Месячные показатели', ...chartConfig.title},
        subtitle: {text: 'За месяц, млн.', ...chartConfig.subtitle},
        legend: {enabled: isLegendVisible,...chartConfig.legend},
        xAxis: {...chartConfig.xAxis},
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
            format: '<b>{key}</b><br/><span style="color:{series.color}">{series.name}</span>: {y} млн.<br/>' /*+ 'Total: {point.stackTotal}'*/
        },
        plotOptions: {
            column: {
                stacking: 'overlap',
               /* dataLabels: {
                    enabled: true,
                    format: '{point.y}',
                    verticalAlign: 'top',
                    inside: true,
                }*/
            }
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