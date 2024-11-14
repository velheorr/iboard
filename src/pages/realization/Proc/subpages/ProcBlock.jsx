import React, {useMemo, useState} from 'react';
import '../proc.scss'
import {Tooltip, Typography} from "@mui/material";
import {useTheme} from "../../../../hook/useTheme";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';



const ProcBlock = () => {
    const [isLegendVisible, setIsLegendVisible] = useState(false);
    const dark = useTheme() // тема

    const options = useMemo(() => ({
        chart: {
            type: 'bar', // Указываем тип графика как 'bar'
            height: 350,
            backgroundColor: 'transparent',
        },
        title: {
            text: null,
            align: 'left',
            style:{
                color: '#767676',
                fontSize: '16px'
            },
        },
        accessibility: {
            enabled: false // Включаем доступность
        },
        credits: {
            enabled: false // Отключить отображение ссылки
        },
        subtitle: {
            text: null,
            align: 'left'
        },
        legend: {
            enabled: isLegendVisible,
            itemStyle: {
                fontSize:'13px',
                color: '#A0A0A0'
            },
            itemHoverStyle: {
                color: dark ? '#FFF' : '#4bb141'
            },
            itemHiddenStyle: {
                color: '#444'
            },
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            itemMarginTop: 5
        },
        xAxis: {
            zIndex: 10,
            labels: {
                style: {
                    color: 'rgb(102, 102, 102)',
                    fontSize: '13px',
                    cursor: 'pointer',
                },
                useHTML: true, // Enable HTML for styling
                formatter: function () {
                    return `<span class="xaxis-label">${this.value}</span>`;
                },
                events: {
                    click: function (e) {
                        //alert('Вы кликнули на категорию: ' + this.value);
                        console.log(e.target.innerText)
                    }
                },
            },
            categories: ['% СПД', '% СПС', '% ОС','% ПФОТ','% ОФОТ','% ОФ','% ОиМ',
                '% НТ (план)','% НТ (факт)','% НЗП','% ПРОЦ','% ПРИН',
            ]
        },
        yAxis: {
            gridLineWidth: .35,
            allowDecimals: true,
            max: 125,
            labels: {
                style: {
                    color: 'rgb(102, 102, 102)',
                    fontSize: '13px'
                }
            },
            title: {
                text: null,
                style:{
                    color: 'white',
                    fontSize: '12px'
                }
            },
            plotLines: [{
                color: 'white', // Цвет линии
                width: 1, // Ширина линии
                value: 100, // Позиция линии по оси X (индекс категории)
                zIndex: 5 // Уровень наложения
            }]

        },
        lang: {
            viewFullscreen: 'На весь экран',
            exitFullscreen: 'Уменьшить',
            printChart: 'Печать',
            /*downloadPNG: 'Скачать PNG',
            downloadJPEG: 'Скачать JPG',
            downloadPDF: 'Скачать PDF',*/
        },
        exporting: {
            buttons: {
                contextButton: {
                    x: 10, // Adjust horizontal position
                    y: -15, // Adjust vertical position
                    menuItems: [
                        'viewFullscreen',
                        {
                            text: 'Легенда',
                            onclick: function () {
                                setIsLegendVisible(!isLegendVisible); // Toggle legend visibility
                            },
                        },
                        "printChart", /*"separator",
                        "downloadPNG", "downloadJPEG", "downloadPDF",*/
                    ],
                    symbolStroke: "#767676",
                    theme: {
                        fill:"transparent",
                        states: {
                            hover: {
                                fill: '#a9a9a9',
                            },
                        }
                    },
                },
            },
        },
        tooltip: {
            useHTML: true,
            /*followPointer: true,*/
            positioner: function (labelWidth, labelHeight, point) {
                // Устанавливаем позицию подсказки
                let x = point.plotX + this.chart.plotLeft - labelWidth / 2;
                let y = point.plotY + this.chart.plotTop - labelHeight - 10; // 10 пикселей над точкой

                // Проверяем, чтобы подсказка не выходила за пределы графика
                if (y < 0) {
                    y = 0; // Если y меньше 0, устанавливаем его на 0
                }

                return { x: x, y: y };
            },
            formatter: function() {
                return `<b>${this.key}:</b> ${this.y}%`;
            }
            /*format: '<b>{key}</b> {y}%',*/

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
            data: [
                {name: '456456', y: 29.9, dynamics: 'Доп. 1', color: (29.9 > 50 ? 'green' : 'red') },
                {name: '324', y: 29.9, dynamics: 'Доп. 1', color: (29.9 > 50 ? 'green' : 'red') },
                {name: '324', y: 29.9, dynamics: 'Доп. 1', color: (29.9 > 50 ? 'green' : 'red') },
                {name: '324', y: 71.5, dynamics: 'Доп. 2', color: (71.5 > 50 ? 'green' : 'red') },
                {name: '324', y: 106.4, dynamics: 'Доп. 3', color: (106.4 > 50 ? 'green' : 'red') },
                {name: '324', y: 106.4, dynamics: 'Доп. 3', color: (106.4 > 50 ? 'green' : 'red') },
                {name: '324', y: 106.4, dynamics: 'Доп. 3', color: (106.4 > 50 ? 'green' : 'red') },
                {name: '324', y: 106.4, dynamics: 'Доп. 3', color: (106.4 > 50 ? 'green' : 'red') },
                {name: '324', y: 106.4, dynamics: 'Доп. 3', color: (106.4 > 50 ? 'green' : 'red') },
                {name: '324', y: 106.4, dynamics: 'Доп. 3', color: (106.4 > 50 ? 'green' : 'red') },
                {name: '324', y: 106.4, dynamics: 'Доп. 3', color: (106.4 > 50 ? 'green' : 'red') },
                {name: '324', y: 106.4, dynamics: 'Доп. 3', color: (106.4 > 50 ? 'green' : 'red') },
            ],
            dataLabels: {
                enabled: true,
                formatter: function() {
                    // Добавляем свои данные в метки данных
                    return this.y + ' + ' + this.point.dynamics + ')';
                }
            }
        }],
    }),[isLegendVisible])

    return (
        <div style={{display: 'inline-block', width: '33%'}} >
            <Tooltip title={
                <div className='chartTooltipTitle'>
                    <Typography variant="body2" className='head' gutterBottom>105050</Typography>
                    <Typography variant="body2" gutterBottom><em>Контрагент: </em><span>Апатит</span></Typography>
                    <Typography variant="body2" gutterBottom><em>АМГ: </em><span>fhgfhgf</span></Typography>
                    <Typography variant="body2" gutterBottom><em>РП: </em><span>fghgfhgfh</span></Typography>
                    <Typography variant="body2" gutterBottom><em>Дата окончания: </em><span>10.10.2024</span></Typography>
                    <Typography variant="body2" gutterBottom><em>Сумма договора: </em><span>453453</span></Typography>
                    <Typography variant="body2" gutterBottom><em>ВП на 1 чел, ПЛАН: </em><span>453453453</span></Typography>
                    <Typography variant="body2" gutterBottom><em>ОП, ПЛАН: </em><span>453453453</span></Typography>
                </div>
            }
            >
                <Typography sx={{mt: 2, pl: 1, pr: 1, color: useTheme('text'), cursor: 'help'}}
                            noWrap
                            align='center'
                            variant="body1"
                            gutterBottom>
                    453453453453453453
                </Typography>
            </Tooltip>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    );
};

export default ProcBlock;