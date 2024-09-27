import React, {useEffect, useMemo, useState} from 'react';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import {convertData, convertForLineChart} from "./convertData";
import {useSelector} from "react-redux";
import {chartConfig} from "../js/chartConfig";

const EcoLineChart = ({info}) => {
    const [isLegendVisible, setIsLegendVisible] = useState(false);
    const [data, setData] = useState([]);
    const updateData = () => {
        setData(convertForLineChart(info));
    };

    useEffect(()=>{
        updateData()
    },[info])

    const options = useMemo(() => ({
        chart: {type: 'line', ...chartConfig.chart},
        title: {text: 'Показатели нарастающим итогом', ...chartConfig.title},
        subtitle: {text: 'За месяц, млн.', ...chartConfig.subtitle},
        legend: {enabled: isLegendVisible,...chartConfig.legend},
        xAxis: {...chartConfig.xAxis},
        yAxis: {...chartConfig.yAxis},
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
        series: data,
    }), [data, isLegendVisible])





    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    );
};

export default EcoLineChart;