import React, {useEffect, useMemo, useState} from 'react';
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highstock";
import {chartConfig} from "../../js/chartConfig";
import {useGet2charts} from "../../../../hook/useGetEconomics";

import Skelet from "../../../../elements/Skelet";

const Amg2Charts = ({className, year,month, type, rp}) => {
    const [isLegendVisible, setIsLegendVisible] = useState(false);
    const {data: twocharts, isLoading, isError, refetch, status} = useGet2charts(year,month,rp, type)
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);

    useEffect(()=>{
        if (twocharts){
            const x = twocharts.data.response.data[0]
            console.log(twocharts.data.response.data[0])
            setData(x.days)
            setData2(x.amount)
        }

    },[twocharts])

    const options = useMemo(() => ({
        accessibility: {...chartConfig.accessibility},
        credits: {...chartConfig.credits},
        chart: {type: 'bar', ...chartConfig.chart, height: 310},
        title: {
            text: 'Дни',
            align: 'right',
            y: 20,
            style:{
                color: '#767676',
                fontSize: '12px'
            },
        },
        legend: {enabled: isLegendVisible,...chartConfig.legend},
        xAxis: {...chartConfig.xAxis,
            categories: [
                'Подтверждено Оим', 'Поступило ОиМ', 'Списано ОиМ', 'Начислено ФОТ (прямой)', 'Вложено на Субчиков',
                'Вложено Спецмеханизмов', 'Вложено в Спецработы', 'Задолженность Заказчиков', 'Гарантийные ужержания',
            ],
            labels: {
                enabled: false, // Отключаем подписи по оси
            },
            opposite: true
        },
        yAxis: {...chartConfig.yAxis,
            reversed: true,
            gridLineWidth: 0,
            labels: {
                enabled: false // Отключаем подписи по оси
            }},
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
            series: {
                dataLabels: {
                    enabled: true,
                    inside: true,
                    align: 'right',
                    x: 2,
                    y: -1,
                    verticalAlign: 'middle',
                    color: 'white'
                },
            },
        },
        series: [
            {
                name: 'Дни',
                data: data || [],
                borderWidth: 0,
                color: '#0b7e93',
            }
        ]
    }), [isLegendVisible, data])

    const options2 = useMemo(() => ({
        accessibility: {...chartConfig.accessibility},
        credits: {...chartConfig.credits},
        chart: {type: 'bar', ...chartConfig.chart, height: 310,},
        title: {text: 'Сумма',
            align: 'center',
            y: 20,
            style:{
                color: '#767676',
                fontSize: '12px'
            },
        },
        legend: {enabled: isLegendVisible,...chartConfig.legend},
        xAxis: {...chartConfig.xAxis,
            categories: [
                'Подтверждено Оим', 'Поступило ОиМ', 'Списано ОиМ', 'Начислено ФОТ (прямой)', 'Вложено на Субчиков',
                'Вложено Спецмеханизмов', 'Вложено в Спецработы', 'Задолженность Заказчиков', 'Гарантийные ужержания',
            ],
            labels: {
                style: {
                    color: 'rgb(102, 102, 102)',
                    fontSize: '13px', // Размер шрифта
                },
                align: 'center', // Положение подписей
                padding: 5,
                x: -20
            }
        },
        yAxis: {...chartConfig.yAxis,
            gridLineWidth: 0,
            labels: {
                enabled: false // Отключаем подписи по оси
            }},
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
            series: {
                dataLabels: {
                    enabled: true,
                    inside: true,
                    align: 'left',
                    x: 2,
                    y: -1,
                    verticalAlign: 'middle',
                    color: 'white'
                },
                borderWidth: 0,
            },
        },
        series: [{
            name: 'Сумма',
            data: data2 || [],
            color: '#0b7e93',
        }]
    }), [isLegendVisible, data2])

    if (isLoading) {return <Skelet option='eco'/>}
    if (isError) {return <h3>Нет подключения к серверу</h3>}
    if (!twocharts) {return <h3>Нет данных с сервера</h3>}

    return (
        <div className={className} >
            <div className='chartTitle'>Вложения</div>
            <div style={{display: 'flex', flexWrap: 'nowrap'}}>
                <div style={{width: '25%'}}>
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={options}
                    />
                </div>
                <div style={{width: '75%'}}>
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={options2}
                    />
                </div>
            </div>


        </div>
    );
};

export default Amg2Charts;