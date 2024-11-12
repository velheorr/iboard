import React, {useEffect, useMemo, useState} from 'react';
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import {chartConfig} from "../../js/chartConfig";
import {useGetEcoBullet} from "../../../../hook/useGetEconomics";
import {convertBullet} from "../convertData";
import Skelet from "../../../../elements/Skelet";
import {useTheme} from "../../../../hook/useTheme";

const AmgBulletChart2 = ({className, year,month, type, rp}) => {
    const [isLegendVisible, setIsLegendVisible] = useState(false);
    const {data: bullet, isLoading, isError} = useGetEcoBullet(year,month,rp, type)
    const [data, setData] = useState([]);
    const dark = useTheme() // тема

    useEffect(()=>{
        if (bullet){
            const x = bullet.data.response.data
            setData(convertBullet(x, dark))
        }
    },[bullet, dark])

    const options = useMemo(() => ({
        accessibility: {...chartConfig.accessibility},
        credits: {...chartConfig.credits},
        chart: {
            type: 'bar',
            ...chartConfig.chart, height: 310,
        },
        title: {
            text: null,
            ...chartConfig.title
        },
        legend: {enabled: isLegendVisible,...chartConfig.legend},
        xAxis: {
            ...chartConfig.xAxis,
            min: 0,
            categories: [
                'А30 Общепроизводственные',
                'А40 Ресурсные (услуги и финрез)',
                'А50 Обеспечивающие (услуги и финрез)',
                'А52 Накладные', 'А54 Налоги', 'А60 АМГ Бизнес',
                'А62 АМГ Управление', 'А63 Фонд издержек', '<span style="color: #17f82f;">Итого</span>'
            ],
            title: {
                text: null,
            },
            labels: {
                align: 'right', // Выравнивание по центру
                style: {
                    color: 'rgb(102, 102, 102)',
                    fontSize: '13px'
                }
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: '#767676',
                }
            }
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
            formatter: function() {
                let color = this.color
                if (color === 'transparent'){ color = 'black'}
                return `<b>${this.x}</b><br/><span style="color:${color}">${this.series.userOptions.name}</span>: ${this.y} млн.<br/>`
            },
            /*format: '<b>{key}</b><br/><span style="color:{series.color}">{series.name}</span>: {y} млн.<br/>' /!*+ 'Total: {point.stackTotal}'*!/*/
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
                borderWidth: 1,
                borderColor: '#bbabab'
            }
        },
        series: data || []
    }), [isLegendVisible, data])

    if (isLoading) {return <Skelet option='eco'/>}
    if (isError) {return <h3>Нет подключения к серверу</h3>}
    if (!bullet) {return <h3>Нет данных с сервера</h3>}

    return (
        <div className={className}>
            <div className='chartTitle'>Издержки</div>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    );
};

export default AmgBulletChart2;