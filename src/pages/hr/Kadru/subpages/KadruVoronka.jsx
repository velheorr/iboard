import React, {useEffect, useMemo, useState} from 'react';
import {chartConfig} from "../../js/chartConfig";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import '../../hr.scss'


const KadruVoronka = () => {
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);

    let ishodnik = [
        {color: '#571f91', y: 10},
        {color: '#2e4399', y: 6},
        {color: '#007ed3', y: 6},
        {color: '#7eb1fe', y: 4},
        {color: '#17f82f', y: 2},
    ]
    let ishodnik2 = [
        {color: '#571f91', y: -10},
        {color: '#2e4399', y: -6},
        {color: '#007ed3', y: -6},
        {color: '#7eb1fe', y: -4},
        {color: '#17f82f', y: -2},
    ]

    useEffect(()=>{
        setData(ishodnik)
        setData2(ishodnik2)
    },[])

    const options = useMemo(() => ({
        accessibility: {...chartConfig.accessibility},
        credits: {...chartConfig.credits},
        chart: {type: 'bar', ...chartConfig.chart, height: 350},
        title: {...chartConfig.title},
        legend: {enabled: false,...chartConfig.legend},
        xAxis: {...chartConfig.xAxis,
            categories: [
                'Отклик',
                'Собеседование 1',
                'Техническое задание',
                'Собеседование 2',
                '<span style="color: #16b323;">Принято на работу</span>',],
            gridLineWidth: 0,
            gridLineDashStyle: 'Dot',
            labels: {
                useHTML: true, // Enable HTML for styling
                formatter: function () {
                    return `<span class="xaxis-label">${this.value}</span>`;
                },
                style: {
                    color: 'rgb(102, 102, 102)',
                    fontSize: '13px',
                    cursor: 'pointer',
                    textAlign: 'right',
                },
                /*events: {
                    click: function (e) {
                        openFunnelDetails(e.target.innerText)
                    }
                },*/
            },
        },
        yAxis: [{
            gridLineWidth: 0,
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
            gridLineWidth: 0,
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
        exporting: {...chartConfig.exporting},
        tooltip: {
            formatter: function() {
                let s = '<b>' + this.x + '</b>';
                this.points.forEach(point => {
                    if (point.y < 0 ) return
                    s += `<br/><span style="color:${point.color}">${point.series.name}</span>: ${point.y} чел.`
                });
                return s;
            },
            /*format: '<b>{key}</b><br/><span style="color:{series.color}">{series.name}</span>: {y} млн.<br/>',*/ /*+ 'Total: {point.stackTotal}'*/
            shared: true
        },
        series: [ {
            name: 'Сумма',
            data: data || [],
            yAxis: 1,
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                inside: true,
                align: 'left',
                x: -25,
                verticalAlign: 'middle',
                format: '{point.y} чел.',
                style: {
                    color: 'white'
                }
            }
        },
            {
                name: 'Сумма',
                data: data2 || [],
                borderWidth: 0,
            },
        ],
    }), [data, data2])
    return (
        <div>
            <div className='chartHRName'>Воронка подбора</div>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    );
};

export default KadruVoronka;