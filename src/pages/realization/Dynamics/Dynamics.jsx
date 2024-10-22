import './Dynamics.scss'
import React, {useMemo, useState} from "react";
import {chartDyn} from "./js/chartConf";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import HighchartsMore from 'highcharts/highcharts-more'; // Импортируем модуль для дополнительных типов графиков

// Подключаем модуль bubble
HighchartsMore(Highcharts);


const Dynamics = () => {
    const [isLegendVisible, setIsLegendVisible] = useState(false);

    const options = useMemo(() => ({
        chart: {
            backgroundColor: 'transparent',
            type: 'bubble',
            zoomType: 'xy',
            //height: 310,
        },
        accessibility: {
            enabled: false // Включаем доступность
        },
        credits: {
            enabled: false // Отключить отображение ссылки
        },
        legend: {
            enabled: isLegendVisible,
            align: 'right',
            verticalAlign: 'middle',
            layout: 'vertical',
            itemStyle: {
                fontSize:'13px',
                color: '#A0A0A0'
            },
            itemHoverStyle: {
                color: '#FFF'
            },
            itemHiddenStyle: {
                color: '#444'
            }
        },
        xAxis: {
            title: {
                text: null,
            },
            labels: {
                style: {
                    color: 'rgb(102, 102, 102)',
                    fontSize: '13px'
                },
                rotation: -90
            },
            categories: [
                'Метафракс',
                'Уралкалий',
                'Роснефть',
                'Лукойл',
                'Росатом',
                'Самотлор',
                'Сибур',
                'УралВагонЗавод',
            ],
            gridLineDashStyle: 'Dot',
            gridLineWidth: .35,
        },
        yAxis: {
            gridLineDashStyle: 'Dot',
            gridLineWidth: .35,
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

            categories: [
                'Продажа',
                'стартование',
                'СТАРТ ПРОЕКТА' ,
                'подготовка производства',
                'ВЫШЛИ НА ОБЪЕКТ',
                'производство и процентование 25%',
                'производство и процентование 50%',
                'производство и процентование 75%',
                'ЗАПРОЦЕТОВАНО 100%',
                'Доделки СМР/ПРН/ИД',
                'РАБОТЫ ЗАВЕРШЕНЫ',
                'завершение Проект',
                'ПРОЕКТ ЗАВЕРШЕН',
                'Проект на комиссии',
                'ПРОЕКТ ПРИНЯТ',
                'Объект на гарантии',
                'ОБЪЕКТ В СЕРВИСЕ',
            ],
            tickInterval: 1,
        },
        lang: {
            viewFullscreen: 'На весь экран',
            exitFullscreen: 'Уменьшить',
            printChart: 'Печать',
            downloadPNG: 'Скачать PNG',
            downloadJPEG: 'Скачать JPG',
            downloadPDF: 'Скачать PDF',
        },
        exporting: {
            buttons: {
                contextButton: {
                    x: 10, // Adjust horizontal position
                    y: 5, // Adjust vertical position
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

        series: [
            {
                name: 'Метафракс',
                data: [{ x: 0, y: 0, z: 10}]
            },
            {
                name: 'Уралкалий',
                data: [{ x: 1, y: 10, z: 20}]
            },
            {
                name: 'Роснефть',
                data: [{ x: 2, y: 2, z: 30}]
            },
            {
                name: 'Лукойл',
                data: [{ x: 3, y: 11, z: 40}]
            },
            {
                name: 'Росатом',
                data: [{ x: 4, y: 14, z: 10}]
            },
            {
                name: 'Самотлор',
                data: [{ x: 5, y: 14, z: 30}]
            },
            {
                name: 'Сибур',
                data: [{ x: 6, y: 14, z: 20}]
            },
            {
                name: 'УралВагонЗавод',
                data: [{ x: 7, y: 10, z: 30}]
            },
        ]

    }), [isLegendVisible])

    return (
        <div style={{padding: '15px'}}>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    );
};

export default Dynamics;