import React, {useMemo, useState} from 'react';
import {chartConfig} from "../../../js/chartConfig";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import '../../../hr.scss'
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';

const PortretSocial = () => {
    const [isLegendVisible, setIsLegendVisible] = useState(false);
    const [data, setData] = useState([])

    const options = useMemo(() => ({
        accessibility: {...chartConfig.accessibility},
        credits: {...chartConfig.credits},
        chart: {
            type: 'bar',...chartConfig.chart, height: 100},
        title: {...chartConfig.title},
        legend: {enabled: isLegendVisible,...chartConfig.legend},
        xAxis: {
            ...chartConfig.xAxis,
            min: 0,
            categories: [
                '',
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
            /*formatter: function() {
                let color = this.color
                if (color === 'transparent'){ color = 'black'}
                return `<b>${this.x}</b><br/><span style="color:${color}">${this.series.userOptions.name}</span>: ${this.y} млн.<br/>`
            },*/
            format: '<b>{key}</b><br/><span style="color:{series.color}">{series.name}</span>: {y} чел.<br/>' /*+ 'Total: {point.stackTotal}'*/
        },
        plotOptions: {
            series: {
                stacking: 'normal',
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
                name: 'В разводе',
                data: [5]
            }, {
                name: 'В браке',
                data: [2]
            }, {
                name: 'Одинокие',
                data: [3]
            }]
    }), [isLegendVisible, data])

    return (
        <div>
            <div className='chartHRName'>Социальные характеристики</div>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <FamilyRestroomIcon/>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={options}
                />
            </div>

        </div>
    );
};

export default PortretSocial;