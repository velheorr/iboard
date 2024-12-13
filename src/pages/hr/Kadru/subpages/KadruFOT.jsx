import React, {useEffect, useMemo, useState} from 'react';
import {chartConfig} from "../../js/chartConfig";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import '../../hr.scss'

const KadruFot = () => {
    const [data, setData] = useState([])

    const options = useMemo(() => ({
        accessibility: {...chartConfig.accessibility},
        credits: {...chartConfig.credits},
        chart: {
            type: 'area',...chartConfig.chart, height: 350,},
        title: {...chartConfig.title},
        legend: {enabled: false,...chartConfig.legend},
        xAxis: {
            ...chartConfig.xAxis,
            min: 0,
            categories: [
                'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь','Октябрь','Ноябрь','Декабрь',
            ],
            title: {text: null, },
        },
        yAxis: {
            gridLineWidth: 0,
            gridLineDashStyle: 'Dot',
            title: null,
            labels: {
                enabled: false, // Отключаем подписи по оси
                style: {
                    fontSize: '12px' // Установка размера шрифта меток по оси Y
                },
            },
        },
        lang: {...chartConfig.lang},
        exporting: {
            enabled: true, // Убедитесь, что экспорт включен
            buttons: {
                contextButton: {
                    ...chartConfig.exporting.buttons.contextButton,
                    menuItems: [
                        'viewFullscreen',
                        "printChart", "separator",
                        "downloadPNG", "downloadJPEG", "downloadPDF",
                    ],
                },
            },
        },
        tooltip: {
            format: '<b>{key}</b><br/><span style="color:{series.color}">{series.name}</span>: {y} тыс руб.<br/>' /*+ 'Total: {point.stackTotal}'*/
        },
        series: /*data || []*/
            [{
                data: [640, 544, 480, 480, 512, 500,277,288,311,610,662,410],
                color: 'rgba(72,72,72,0.61)',
                dataLabels: {
                    enabled: true,
                    inside: true,
                    format: '{y}' // Отображает значение
                }
            }],

    }), [data])

    return (
        <div>
            <div className='chartHRName'>Фонд оплаты труда, тыс руб</div>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    );
};

export default KadruFot;