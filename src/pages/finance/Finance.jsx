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
import {useNavigate} from "react-router";

CustomEvents(Highcharts);
exporting(Highcharts);
exportData(Highcharts);
fullscreen(Highcharts);
Sankey(Highcharts);


const Finance = () => {
    const navigate = useNavigate();
    const dark = useTheme() // тема

    const goDetails = (targ)=>{
        navigate(`/finance/${targ}`)
    }

    const aktivi = [
        'Задолженность заказчиков','Запасы (на складах)','НЗП (кроме запасов)','Авансы поставщикам','Деньги на счетах','Депозиты','Прочие финвложения'
    ]
    const sroki = [
        'Уровень 0','До 3-месяцев','3-6 месяцев','6-12 месяцев','от 1 до 2 лет','от 2 до 3 лет','от 3 до 5 лет','свыше 5 лет'
    ]
    const likvidnost = [
        'Уровень 0',
    ]
    const handleClick = (item) => {
        console.log(item)
    }

    let data = [
        ['Куликов А.А.', 'Запасы (на складах)', 4],
        ['Куликов А.А.', 'Задолженность заказчиков', 4],
        ['Куликов А.А.', 'НЗП (кроме запасов)', 3],

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
            nodeFormat: '{point.name}: {point.sum:.2f} млн.'
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
                        handleClick(this)
                    }
                }
            }
        }],

    }),[])



    return (
        <div>
            <Dev/>
            <div className='finBlock'>
                <div onClick={()=>{goDetails('Распорядители')}}>Распорядители: 100 000</div>
                <div onClick={()=>{goDetails('Активы')}}>Активы: 5 000 000</div>
                <div onClick={()=>{goDetails('Срок возникновения')}}>Срок возникновения: 500 000</div>
                <div onClick={()=>{goDetails('Ликвидность')}}>Ликвидность: 500 000</div>
            </div>
            <HighchartsReact style={{paddingLeft: '20px'}}
                highcharts={Highcharts}
                options={options}
            />
        </div>
    );
};

export default Finance;