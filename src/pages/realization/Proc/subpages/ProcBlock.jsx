import React, {useEffect, useMemo, useState} from 'react';
import '../proc.scss'
import {Tooltip, Typography} from "@mui/material";
import {useTheme} from "../../../../hook/useTheme";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {dateFormat, formatAmountRU} from "../../../../utils/date_number";
import {chartColors} from "../js/chartColors";
import {useModal} from "../../../../hook/useModal";



const ProcBlock = ({item}) => {
    const dark = useTheme() // тема
    const {setModal} = useModal()

    const [data, setData] = useState([])
    const [type, setType] = useState(true)

    useEffect(()=>{
        if (item){
            setData(convert(item))
        }
    },[item, dark])

    //setModal
    const convert = (info) => {
        let infoNTplan = info['ПроцентПроцентЗаплНТДинамика'] === undefined ? 0 : info['ПроцентПроцентЗаплНТДинамика']

        let ishodnik = [
            {
                name: '% СПД',
                y: info['ПроцентПодписанныхДоговоров'],
                dynamics: info['ПроцентПодписанныхДоговоровДинамика'],
                color: chartColors('% СПД', item['ПроцентПодписанныхДоговоров'], '', dark)
            },
            {
                name: '% СПС',
                y: info['ПроцентСуммыПодписанныхСмет'],
                dynamics: info['ПроцентСуммыПодписанныхСметДинамика'],
                color: chartColors('% СПС', item['ПроцентСуммыПодписанныхСмет'], '', dark)
            },
            {
                name: '% ОС',
                y: info['ПроцентОсвоенияДогСроков'],
                dynamics: info['ПроцентОсвоенияДогСроковДинамика'],
                color: chartColors('% ОС', item['ПроцентОсвоенияДогСроков'], '', dark)
            },
            {
                name: '% ПФОТ',
                y: info['ПроцентПронормированногоФОТ'],
                dynamics: info['ПроцентПронормированногоФОТДинамика'],
                color: chartColors('% ПФОТ', item['ПроцентПронормированногоФОТ'], '', dark)
            },
            {
                name: '% ОФОТ',
                y: info['ПроцентОсвоенияФОТ'],
                dynamics: info['ПроцентОсвоенияФОТДинамика'],
                color: chartColors('% ОФОТ', item['ПроцентОсвоенияФОТ'], item['ПроцентОсвоенияДогСроков'], dark)
            },
            {
                name: '% ОФ',
                y: info['ПроцентОсвоенияФин'],
                dynamics: info['ПроцентОсвоенияФинДинамика'],
                color: chartColors('% ОФ', item['ПроцентОсвоенияФин'], item['ПроцентОсвоенияДогСроков'], dark)

            },
            {
                name: '% ОиМ',
                y: info['ПроцентПронормированногоОИМ'],
                dynamics: info['ПроцентПронормированногоОИМДинамика'],
                color: chartColors('% ОиМ', item['ПроцентПронормированногоОИМ'], '', dark)

            },
            {
                name: '% НТ (план)',
                y: info['ПроцентПроцентЗаплНТ'],
                dynamics: infoNTplan,
                color: chartColors('% НТ (план)', item['ПроцентПроцентЗаплНТ'], '', dark)

            },
            {
                name: '% НТ (факт)',
                y: info['ПроцентПрогрессаНЧ'],
                dynamics: info['ПроцентПрогрессаНЧДинамика'],
                color: chartColors('% НТ (факт)', item['ПроцентПрогрессаНЧ'], '', dark)

            },
            {
                name: '% НЗП',
                y: info['ПроцентПревращенияНЗП'],
                dynamics: info['ПроцентПревращенияНЗПДинамика'],
                color: chartColors('% НЗП', item['ПроцентПревращенияНЗП'], item['ПроцентОсвоенияДогСроков'], dark)

            },
            {
                name: '% ПРОЦ',
                y: info['ПроцентПредъявленныхРТИУ'],
                dynamics: info['ПроцентПредъявленныхРТИУДинамика'],
                color: chartColors('% ПРОЦ', item['ПроцентПредъявленныхРТИУ'], item['ПроцентОсвоенияДогСроков'], dark)

            },
            {
                name: '% ПРИН',
                y: info['ПроцентПринятыхРТИУ'],
                dynamics: info['ПроцентПредъявленныхРТИУДинамика'],
                color: chartColors('% ПРИН', item['ПроцентПринятыхРТИУ'], item['ПроцентПредъявленныхРТИУ'], dark)

            },
        ]
        return ishodnik
    }

    const options = useMemo(() => ({
        chart: {
            type: type? 'bar' : 'column', // Указываем тип графика как 'bar'
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
                        setModal(e.target.innerText)
                    }
                },
            },
            categories: ['% СПД', '% СПС', '% ОС','% ПФОТ','% ОФОТ','% ОФ','% ОиМ',
                '% НТ (план)','% НТ (факт)','% НЗП','% ПРОЦ','% ПРИН',
            ]
        },
        yAxis: {
            gridLineWidth: .35,
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
        legend: {
          enabled: false
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
                        {
                            text: 'Поменять',
                            onclick: function () {
                                setType(!type); // Toggle type
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
            formatter: function() {
                return `<b>${this.key}:</b></br> ${this.y}%`;
            }
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    inside: true,
                    align: 'right',
                    x: 2,
                    y: -1,
                    verticalAlign: 'middle',
                    color: 'white',
                    formatter: function () {
                        // Добавляем свои данные в метки данных
                        let text
                        if (this.point.dynamics === 0 || this.point.dynamics === undefined) {
                            text = ''
                        } else if (this.point.dynamics < 0) {
                            text = this.point.dynamics
                        } else {
                            text = ' + ' + this.point.dynamics
                        }
                        return this.y + text
                    }
                },
            },
        },
        series: [
            {
            data: data,
        }],
       /* series: data,*/
    }),[data, type])

    return (
        <div style={{display: 'inline-block', width: '33%'}} >
            <Tooltip title={
                <div className='chartTooltipTitle'>
                    <Typography variant="body2" className='head' gutterBottom>{`${item['КодОбъекта']}, ${item['Объект']}`}</Typography>
                    <Typography variant="body2" gutterBottom><em>Контрагент: </em><span>{item['Контрагент']}</span></Typography>
                    <Typography variant="body2" gutterBottom><em>АМГ: </em><span>{item['АМГ']}</span></Typography>
                    <Typography variant="body2" gutterBottom><em>РП: </em><span>{item['РуководительПроекта']}</span></Typography>
                    <Typography variant="body2" gutterBottom><em>Дата окончания: </em><span>{dateFormat(item['ДатаОкончанияСрокаДействияДоговора'])}</span></Typography>
                    <Typography variant="body2" gutterBottom><em>Сумма договора: </em><span>{formatAmountRU(item['СуммаДоговора'])}</span></Typography>
                    <Typography variant="body2" gutterBottom><em>ВП на 1 чел, ПЛАН: </em><span>{formatAmountRU(item['ВПНаЧеловека'])}</span></Typography>
                    <Typography variant="body2" gutterBottom><em>ОП, ПЛАН: </em><span>{formatAmountRU(item['ОперПрибыль'])}</span></Typography>
                </div>
            }
            >
                <Typography sx={{mt: 2, pl: 1, pr: 1, color: useTheme('text'), cursor: 'help'}}
                            noWrap
                            align='center'
                            variant="body1"
                            gutterBottom>
                    {`${item.КодОбъекта}, ${item.Объект}`}
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