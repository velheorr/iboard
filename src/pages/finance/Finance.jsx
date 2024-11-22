import './fin.scss'
import React, {useMemo, useState} from 'react';
import CustomEvents from "highcharts-custom-events";
import Highcharts from "highcharts";
import exporting from "highcharts/modules/exporting";
import exportData from "highcharts/modules/export-data";
import fullscreen from "highcharts/modules/full-screen";
import HighchartsReact from "highcharts-react-official";
import Sankey from 'highcharts/modules/sankey';
import {useTheme} from "../../hook/useTheme";
import Dev from "../../elements/Development/Dev";

CustomEvents(Highcharts);
exporting(Highcharts);
exportData(Highcharts);
fullscreen(Highcharts);
Sankey(Highcharts);


const Finance = () => {
    const dark = useTheme() // тема

    let data = [
        ['Куликов А.А.', 'Задолженность заказчиков', 3 ],
        ['Куликов А.А.', 'Запасы (на складах)', 1 ],
        ['Куликов А.А.', 'НЗП (кроме запасов)', 3 ],

        ['Болотников В.В.', 'Задолженность заказчиков', 3 ],
        ['Болотников В.В.', 'Запасы (на складах)', 3 ],
        ['Болотников В.В.', 'НЗП (кроме запасов)', 4 ],

        ['Мушинский И.В.', 'Задолженность заказчиков', 3 ],
        ['Мушинский И.В.', 'Запасы (на складах)', 2 ],
        ['Мушинский И.В.', 'НЗП (кроме запасов)', 2 ],

        ['Созыкин А.Р.', 'Задолженность заказчиков', 3 ],
        ['Созыкин А.Р.', 'Запасы (на складах)', 3 ],
        ['Созыкин А.Р.', 'НЗП (кроме запасов)', 1 ],

        ['ЗиЛ', 'Авансы поставщикам', 2 ],

        ['ФД', 'Деньги на счетах', 5 ],
        ['ФД', 'Депозиты', 5 ],
        ['ФД', 'Прочие финвложения', 5 ],

        ['Задолженность заказчиков', 'До 3-месяцев', 2 ],
        ['Задолженность заказчиков', 'от 2 до 3 лет', 2 ],
        ['Задолженность заказчиков', 'от 3 до 5 лет', 2 ],

        ['Запасы (на складах)', 'Уровень 0', 2 ],

        ['НЗП (кроме запасов)', '6-12 месяцев', 5 ],

        ['Авансы поставщикам', 'До 3-месяцев', 2 ],
        ['Авансы поставщикам', 'от 1 до 2 лет', 2 ],
        ['Авансы поставщикам', 'свыше 5 лет', 2 ],

        ['Деньги на счетах', 'от 3 до 5 лет', 5 ],
        ['Деньги на счетах', 'свыше 5 лет', 5 ],

        ['Депозиты', 'свыше 5 лет', 5 ],

        ['До 3-месяцев', 'от 2 до 3 лет', 5 ],
        ['До 3-месяцев', 'от 3 до 5 лет', 5 ],
        ['До 3-месяцев', 'Уровень 0', 5 ],
    ]

    const options = useMemo(() => ({
        chart: {
            height: 600,
            backgroundColor: 'transparent',
        },
        title: {
            text: 'Basic Sankey Diagram',
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
                'quads',
            nodeFormat: '{point.name}: {point.sum:.2f} quads'
        },

        series: [{
            type: 'sankey',
            keys: ['from', 'to', 'weight'],
            data: data,
            draggable: true,
            // Optional: Customize the appearance
            colorByPoint: true
        }],

    }),[])

    return (
        <div>
            <Dev/>
            <div className='finBlock'>
                <div>Распорядители: 100 000</div>
                <div>Активы: 5 000 000</div>
                <div>Срок возникновения: 500 000</div>
                <div>Ликвидность: 500 000</div>
            </div>
            
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    );
};

export default Finance;