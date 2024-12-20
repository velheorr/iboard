import {useEffect, useMemo, useState} from 'react';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import {convertForLineChart} from "./convertData";
import {chartConfig} from "../js/chartConfig";
import {useGetEcoLineChart} from "../../../hook/useGetEconomics";
import Skelet from "../../../elements/Skelet";
import {useTheme} from "../../../hook/useTheme";
import {useModal} from "../../../hook/useModal";
import ModalEcoLineChartWiki from "../../../elements/Modal/subpages/wiki/Eco/ModalEcoLineChartWiki";

const EcoLineChart = ({year, type}) => {
    const {data: ecolinechart, isLoading, isError} = useGetEcoLineChart(year,type)
    const dark = useTheme() // тема
    const date = new Date()
    const {setModal} = useModal()

    const [isLegendVisible, setIsLegendVisible] = useState(true);
    const [data, setData] = useState(null);

    const [month, setMonth] = useState(null);

    useEffect(()=>{
        const currentYear = new Date().getFullYear()
        if (year !== currentYear){
            setMonth(null)
        } else {
            setMonth(date.getMonth())
        }

        if (ecolinechart){
            setData(convertForLineChart(ecolinechart, dark));
        }
    },[ecolinechart, dark])



    const options = useMemo(() => ({
        accessibility: {...chartConfig.accessibility},
        credits: {...chartConfig.credits},
        chart: {type: 'line', ...chartConfig.chart, height: 350},
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
            itemHoverStyle: {
                color: dark ? '#FFF' : '#4bb141'
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
                        {
                            text: 'Справка',
                            onclick: function () {
                                setModal('ModalEcoLineChartWiki'); // Toggle legend visibility
                            },
                        },
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