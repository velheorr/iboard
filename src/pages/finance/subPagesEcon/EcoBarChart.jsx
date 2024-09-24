import React, {useEffect, useMemo, useState} from 'react';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import {useSelector} from "react-redux";
import {convertForBarChart} from "./convertData";
import {chartConfig} from "../js/chartConfig";

const EcoBarChart = ({info}) => {
    //const ecoBar = useSelector(state => state.economics.ecoBar)
    const [isLegendVisible, setIsLegendVisible] = useState(false);
    const [data, setData] = useState([]);
    const updateData = () => {
        setData(convertForBarChart(info));
    };

    useEffect(()=>{
        updateData()
    },[info])

    const options = useMemo(() => ({
        chart: {type: 'column', ...chartConfig.chart},
        title: {text: 'Месячные показатели', ...chartConfig.title},
        subtitle: {text: 'За месяц, млн.', ...chartConfig.subtitle},
        legend: {enabled: isLegendVisible,...chartConfig.legend},
        xAxis: {...chartConfig.xAxis},
        yAxis: {
            allowDecimals: true,
            min: -10,
            ...chartConfig.yAxis
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
                dataLabels: {
                    enabled: true,
                    format: '{point.y}'
                }
            }
        },
        series: data
    }),[data, isLegendVisible])

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