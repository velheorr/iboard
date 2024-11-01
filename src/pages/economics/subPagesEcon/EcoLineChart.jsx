import {useEffect, useMemo, useState} from 'react';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import {convertForLineChart} from "./convertData";
import {chartConfig} from "../js/chartConfig";
import {useGetEco, useGetEcoLineChart} from "../../../hook/useGetEconomics";
import Skelet from "../../../elements/Skelet";

const EcoLineChart = ({year, type}) => {
    const {data: ecolinechart, isLoading, isError, refetch, status} = useGetEcoLineChart(year,type)

    const date = new Date()

    const [isLegendVisible, setIsLegendVisible] = useState(true);
    const [data, setData] = useState(null);
    const [month, setMonth] = useState(null);

    useEffect(()=>{
        setMonth(date.getMonth())
        if (ecolinechart){
            setData(convertForLineChart(ecolinechart));
        }
    },[ecolinechart])

    const options = useMemo(() => ({
        accessibility: {...chartConfig.accessibility},
        credits: {...chartConfig.credits},
        chart: {type: 'line', ...chartConfig.chart, height: 300},
        title: {text: null, ...chartConfig.title, },
        subtitle: {text: 'За месяц, млн.', ...chartConfig.subtitle},
        legend: {enabled: isLegendVisible,...chartConfig.legend,
            title: {
                text: 'Нарастающим итогом',
                style: {
                    color: '#A0A0A0',
                    fontSize: '16px',
                    fontWeight: 'bold'
                }
            },
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            itemMarginTop: 10
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
        yAxis: {...chartConfig.yAxis,},
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
        series: data || [],
    }), [data, isLegendVisible])



    if (isLoading) {return <Skelet option='eco'/>}
    if (isError) {return <h3>Нет подключения к серверу</h3>}
    if (!ecolinechart) {return <h3>Нет данных с сервера</h3>}

    return (
        <div>
            {
                data && <HighchartsReact
                    highcharts={Highcharts}
                    options={options}
                />
            }

        </div>
    );
};

export default EcoLineChart;