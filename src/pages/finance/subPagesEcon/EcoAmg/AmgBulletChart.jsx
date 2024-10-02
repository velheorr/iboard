import {useMemo, useState} from "react";
import {chartConfig} from "../../js/chartConfig";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";


const AmgBulletChart = ({className}) => {
    const [isLegendVisible, setIsLegendVisible] = useState(false);


    const options = useMemo(() => ({
        chart: {
            type: 'column',
            inverted: true,
            ...chartConfig.chart, height: 330,
        },
        title: {text: 'Bullet Chart Example', ...chartConfig.title},
        legend: {enabled: isLegendVisible,...chartConfig.legend},
        xAxis: {...chartConfig.xAxis,
            categories: [
                'ФОТ', 'Субподряд и Спецмеханизмы', 'Общепроизводственные', 'Ресурсные', 'Обеспечивающие', 'Накладные', 'Налоги', 'АМГ Бизнес', 'АМГ Управление',
            ],
            /*gridLineWidth: .5,
            gridLineDashStyle: 'Dot',*/
            labels: {
                style: {
                    color: 'rgb(102, 102, 102)',
                    fontSize: '12px' // Установка размера шрифта меток по оси Y
                }
            },
        },
        yAxis: {
            min: 0,
            gridLineWidth: .5,
            gridLineDashStyle: 'Dot',
            title: null,
            labels: {
                enabled: true, // Отключаем подписи по оси
                style: {
                    fontSize: '12px' // Установка размера шрифта меток по оси Y
                },

            },
        },
        tooltip: {
            shared: true,
            formatter: function() {
                let s = '<b>' + this.x + '</b>';
                this.points.forEach(point => {
                    s += `<br/><span style="color:${point.series.color}">${point.series.name}</span>: ${point.y}млн.`
                });
                return s;
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
        plotOptions: {
            column: {
                grouping: false,
                shadow: false,
                borderWidth: .8
            },
        },
        series: [
            {
                name: 'План на конец года',
                pointWidth: 20,
                color: 'rgb(255,189,0)',
                data: [137, 83, 70, 68, 100, 22,82,45, 76],
                pointPadding: 0.6,
                pointPlacement: -0.2,
                zIndex: 1,
            },
            {
            name: 'Потери',
            pointWidth: 7,
            color: 'rgb(166,37,6)',
            data: [10, 50, 70, 25, 16, 99,44,24,42],
            pointPadding: 0.3,
            pointPlacement: -0.0,
            zIndex: 2
        }, {
            name: 'Накоплено',
            pointWidth: 7,
            color: 'rgb(10,128,22)',
            data: [140, 60, 27, 33, 45, 56,24,45, 55],
            pointPadding: 0.4,
            pointPlacement: -0.2,
            zIndex: 2
        },
        {
            name: 'Прогноз на конец года',
            pointWidth: 7,
            color: 'rgb(246,0,0)',
            data: [70, 68, 70, 68, 100, 46,140,45, 76],
            pointPadding: 0.6,
            pointPlacement: -0.4,
            zIndex: 3
        },
        ]
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

export default AmgBulletChart;