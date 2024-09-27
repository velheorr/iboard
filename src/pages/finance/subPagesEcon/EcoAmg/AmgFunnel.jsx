import React, {useMemo} from 'react';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import {chartConfig} from "../../js/chartConfig";
import Funnel from 'highcharts/modules/funnel';

Funnel(Highcharts);

const AmgFunnel = ({className}) => {
    const options = useMemo(() => ({
        chart: {
            type: 'funnel',  ...chartConfig.chart, height: 330,
        },
        title: {
            text: 'Воронка продаж', ...chartConfig.title
        },
        subtitle: {text: null, ...chartConfig.subtitle},
        series: [{
            name: 'Этапы продаж',
            data: [
                ['Продано ТКП', 100],
                ['Подписано смет/договоров', 90],
                ['Поставлено ОиМ', 80],
                ['Оплачено ФОТ', 70],
                ['Смонтировано', 60],
                ['Запроцентовано', 50],
                ['Маржинальная прибыль', 40],
            ],
            /*reversed: true */// Установите этот параметр для переворота
        }],
        lang: {...chartConfig.lang},
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b> ({point.y:,.0f})',
                },
                center: ['35%', '50%'],
                neckWidth: '25%',
                neckHeight: '50%',
                width: '70%'
            }
        },
        exporting: {
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
    }), [])

    return (
        <div className={className}>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    );
};

export default AmgFunnel;