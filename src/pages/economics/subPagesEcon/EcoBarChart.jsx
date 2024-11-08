import React, {useEffect, useMemo, useRef, useState} from 'react';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import {convertForBarChart} from "./convertData";
import {chartConfig} from "../js/chartConfig";
import {useGetEcoBarChart} from "../../../hook/useGetEconomics";
import Skelet from "../../../elements/Skelet";
import '../econ.scss'
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {setDetails} from "../js/EcoSlice";

const EcoBarChart = ({year, type}) => {
    const {data: ecobarchart, isLoading, isError, refetch, status} = useGetEcoBarChart(year, type)
    const date = new Date()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [isLegendVisible, setIsLegendVisible] = useState(true);
    const [data, setData] = useState([]);
    const [month, setMonth] = useState(null);

    useEffect(()=>{
        setMonth(date.getMonth())
        if (ecobarchart){
            setData(convertForBarChart(ecobarchart));
        }

    },[ecobarchart])

    const openEcoPage2 = (month, year)=>{
        dispatch(setDetails({month, year}))
        navigate('/economics/details')
    }

    const options = useMemo(() => ({
        accessibility: {...chartConfig.accessibility},
        credits: {...chartConfig.credits},
        chart: {type: 'column', ...chartConfig.chart, height: 300,
        },
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
            labels: {
                useHTML: true, // Enable HTML for styling
                formatter: function () {
                    return `<span class="xaxis-label">${this.value}</span>`;
                },
                style: {
                    color: 'rgb(102, 102, 102)',
                    fontSize: '13px',
                    cursor: 'pointer',
                },
                events: {
                    click: function (e) {
                        //alert('Вы кликнули на категорию: ' + this.value);
                        openEcoPage2(e.target.innerText, date.getFullYear())
                    }
                },
            },
            plotLines: [{
                color: 'white', // Цвет линии
                width: 1, // Ширина линии
                value: month, // Значение по оси X, где будет линия
            }],

        },
        yAxis: {
            allowDecimals: true,
            //min: -10, //max: 300,
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
        series: data,
    }),[data, isLegendVisible])



    if (isLoading) {return <Skelet option='eco'/>}
    if (isError) {return <h3>Нет подключения к серверу</h3>}
    if (!ecobarchart) {return <h3>Нет данных с сервера</h3>}

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