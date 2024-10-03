import React, {useMemo, useState} from 'react';
import {chartConfig} from "../../js/chartConfig";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

const AmgCustomFunnel = ({className}) => {
    const [isLegendVisible, setIsLegendVisible] = useState(false);

    const options = useMemo(() => ({
        chart: {type: 'bar', ...chartConfig.chart, height: 330,},
        title: {text: 'Показатели чегото там 2', ...chartConfig.title},
        legend: {enabled: isLegendVisible,...chartConfig.legend},
        xAxis: {...chartConfig.xAxis,
            categories: [
                'Продано ТКП',
                'Подписано смет/договоров',
                'Поставлено ОиМ',
                'Оплачено ФОТ',
                'Смонтировано',
                'Запроцентовано',
                '<span style="color: red;">Маржинальная прибыль</span>',],
            gridLineWidth: 0,
            gridLineDashStyle: 'Dot',
        },
        yAxis: [{
            gridLineWidth: .5,
            gridLineDashStyle: 'Dot',
            labels: {
                enabled: false // Отключаем подписи по оси
            },
            title: {
                text: null // Убираем заголовок оси X
            },
            max: 0,
            offset: 0,
            width: '50%'
        }, {
            ...chartConfig.yAxis,
            gridLineWidth: .5,
            gridLineDashStyle: 'Dot',
            labels: {
                enabled: false // Отключаем подписи по оси
            },
            min: 0,
            offset: 0,
            left: '50%',
            width: '50%'
        }],
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
            formatter: function() {
                let s = '<b>' + this.x + '</b>';
                this.points.forEach(point => {
                    if (point.y < 0 ) return
                    s += `<br/><span style="color:${point.color}">${point.series.name}</span>: ${point.y}млн.`
                });
                return s;
            },
            /*format: '<b>{key}</b><br/><span style="color:{series.color}">{series.name}</span>: {y} млн.<br/>',*/ /*+ 'Total: {point.stackTotal}'*/
            shared: true
        },
        series: [ {
            name: 'Сумма',
            data: [
                {
                    y: 150,
                    color: '#2caefd',
                },
                {
                    y: 100,
                    color: '#534ec4',
                },
                {
                    y: 78,
                    color: '#00e072',
                },
                {
                    y: 90,
                    color: '#fc6936',
                },
                {
                    y: 120,
                    color: '#6a89bc',
                },
                {
                    y: 47,
                    color: '#d367fa',
                },
                {
                    y: 250,
                    color: '#b60000',
                },
            ],
            yAxis: 1,
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                align: 'left',
                verticalAlign: 'middle',
            }
        },
            {
                name: 'Сумма',
                data: [
                    {
                        y: -150,
                        color: '#2caefd',
                    },
                    {
                        y: -100,
                        color: '#534ec4',
                    },
                    {
                        y: -78,
                        color: '#00e072',
                    },
                    {
                        y: -90,
                        color: '#fc6936',
                    },
                    {
                        y: -120,
                        color: '#6a89bc',
                    },
                    {
                        y: -47,
                        color: '#d367fa',
                    },
                    {
                        y: -250,
                        color: '#b60000',
                    },
                ],
                color: '#FF5733',
                borderWidth: 0,
            },
        ],
    }), [isLegendVisible])

    return (
        <div className={className}>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    );
};

export default AmgCustomFunnel;