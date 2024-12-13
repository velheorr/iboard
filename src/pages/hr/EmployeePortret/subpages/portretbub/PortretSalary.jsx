import React, {useEffect, useMemo, useState} from 'react';
import {chartConfig} from "../../../js/chartConfig";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import '../../../hr.scss'

const PortretSalary = () => {
    const [isLegendVisible, setIsLegendVisible] = useState(false);
    const [data, setData] = useState([])

    const options = useMemo(() => ({
        accessibility: {...chartConfig.accessibility},
        credits: {...chartConfig.credits},
        chart: {
            type: 'column',...chartConfig.chart, height: 350,},
        title: {...chartConfig.title},
        legend: {enabled: isLegendVisible,...chartConfig.legend},
        xAxis: {
            ...chartConfig.xAxis,
            min: 0,
            categories: [
                'Вспомогательный персонал',
                'ИТР и Специалисты РиО',
                'ГИП (Лидер АМГ)',
                'ИТР Команда проекта (РП, РС, Н-к участка, Вед.ин)',
                'Рабочие',
                'Проектировщики',
                'НЕ УЧИТЫВАТЬ В РАСЧЕТЕ ВП',
                'Команда управления',
                'Наладчики',
                'Сервисмен',
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
            format: '<b>{key}</b><br/><span style="color:{series.color}">{series.name}</span>: {y} чел.<br/>' /*+ 'Total: {point.stackTotal}'*/
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    y: -1,
                    style: {
                        fontSize: '10px', // Установка размера шрифта
                        color: 'white'
                    },
                },
                borderWidth: 0,
            }
        },
        series: /*data || []*/
            [{

                data: [5, 3, 4,7,3,6,4,7,5,2]
            }, ]
    }), [isLegendVisible, data])

    return (
        <div>
            <div className='chartHRName'>Уровень зарплаты 36 тыс</div>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    );
};

export default PortretSalary;