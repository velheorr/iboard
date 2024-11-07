import React, {useEffect, useMemo, useState} from 'react';
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import {chartConfig} from "../../js/chartConfig";
import {useGetEcoBullet} from "../../../../hook/useGetEconomics";
import {convertBullet} from "../convertData";
import Skelet from "../../../../elements/Skelet";

const AmgBulletChart2 = ({className, year,month, type, rp}) => {
    const [isLegendVisible, setIsLegendVisible] = useState(false);
    const {data: bullet, isLoading, isError} = useGetEcoBullet(year,month,rp, type)
    const [data, setData] = useState([]);

    useEffect(()=>{
        if (bullet){
            const x = bullet.data.response.data
            setData(convertBullet(x))
        }
    },[bullet])

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
                'Общепроизводственные', 'Ресурсные (услуги и финрез)', 'Обеспечивающие (услуги и финрез)', 'Накладные', 'Налоги', 'АМГ Бизнес', 'АМГ Управление', 'Фонд издержек'
            ],
            title: {
                text: null,
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: 'gray'
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