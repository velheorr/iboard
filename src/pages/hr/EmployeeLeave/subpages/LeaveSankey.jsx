import React, {useMemo} from 'react';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import CustomEvents from "highcharts-custom-events";
import exporting from "highcharts/modules/exporting";
import exportData from "highcharts/modules/export-data";
import fullscreen from "highcharts/modules/full-screen";
import Sankey from 'highcharts/modules/sankey';
import '../../hr.scss'

CustomEvents(Highcharts);
exporting(Highcharts);
exportData(Highcharts);
fullscreen(Highcharts);
Sankey(Highcharts);

const LeaveSankey = () => {
    let data = [
        ['Сокращение штатной единицы', 'Нет данных', 2],
        ['Сокращение штатной единицы', 'Неконкурентный бизнес', 4],
        ['Личные обстоятельства, переезд', 'Нет данных', 3],
        ['Личные обстоятельства, переезд', 'Конкурент - не лидер рынка', 2],
        ['Новая работа интереснее', 'Конкурент - лидер рынка', 5],
        ['Новая работа интереснее', 'Конкурент - не лидер рынка', 8],
        ['Предложили должность и з/п выше', 'Неконкурентный бизнес', 3],
        ['Предложили должность и з/п выше', 'Конкурент - лидер рынка', 5],
        ['Смена профессии', 'Нет данных', 3],
        ['Смена профессии', 'Свое дело', 2],
        ['Смена профессии', 'Неконкурентный бизнес', 1],
        ['По инициативе работодателя', 'Нет данных', 4],

    ]

    const options = useMemo(() => ({
        chart: {
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
            enabled: false, // Включаем доступность
            point: {
                valueDescriptionFormat: '{index}. {point.from} to {point.to}, ' +
                    '{point.weight}.'
            }
        },
        credits: {
            enabled: false // Отключить отображение ссылки
        },
        subtitle: {
            text: null,
            align: 'left'
        },
        lang: {
            viewFullscreen: 'На весь экран',
            exitFullscreen: 'Уменьшить',
            printChart: 'Печать',
        },
        exporting: {
            buttons: {
                contextButton: {
                    x: 10, // Adjust horizontal position
                    y: -15, // Adjust vertical position
                    menuItems: [
                        'viewFullscreen',
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
        tooltip: {
            headerFormat: null,
            pointFormat:
                '{point.fromNode.name} \u2192 {point.toNode.name}: {point.weight:.2f} ' +
                'млн.',
            nodeFormat: '{point.name}: {point.sum:.2f} чел.'
        },

        series: [{
            type: 'sankey',
            keys: ['from', 'to', 'weight', 'Herabora'],
            data: data,
            // Optional: Customize the appearance
            colorByPoint: true,
            point: {
                events: {
                    click: function () {
                        /*handleClick(this)*/
                    }
                }
            }
        }],

    }),[])


    return (
        <div>
            <div className='chartHRName'>Причины увольнения и место ухода</div>
            <HighchartsReact style={{paddingLeft: '20px'}}
                 highcharts={Highcharts}
                 options={options}
            />
        </div>
    );
};

export default LeaveSankey;