import React, {useEffect, useMemo, useState} from 'react';
import {chartConfig} from "../../js/chartConfig";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import '../../econ.scss'
import {useGetEcoFunnel} from "../../../../hook/useGetEconomics";
import {convertFunnel, convertFunnel2} from "../convertData";
import Skelet from "../../../../elements/Skelet";
import {useTheme} from "../../../../hook/useTheme";
import {useModal} from "../../../../hook/useModal";
import {useDispatch} from "react-redux";
import {setFunnelDetails} from "../../js/EcoSlice";

const AmgCustomFunnel = ({className, year,month, type, rp,setRp = false}) => {
    const {data: ecofunnel, isLoading, isError} = useGetEcoFunnel(year,month,rp, type)
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);
    const dark = useTheme() // тема
    const dispatch = useDispatch()
    const {setModal} = useModal()

    useEffect(()=>{
        if (ecofunnel){
            setData(convertFunnel(ecofunnel.data.Data, dark));
            setData2(convertFunnel2(ecofunnel.data.Data, dark));
            if (setRp){setRp(ecofunnel.data.Data.RpList)}

        }

    },[ecofunnel, dark])

    const openFunnelDetails = (e)=>{
        dispatch(setFunnelDetails([e, year,month, type, rp]))
        setModal('ModalEconFunnelDetails')
    }

    const options = useMemo(() => ({
        accessibility: {...chartConfig.accessibility},
        credits: {...chartConfig.credits},
        chart: {type: 'bar', ...chartConfig.chart, height: 350,},
        title: {text: null, ...chartConfig.title},
        legend: {enabled: false,...chartConfig.legend},
        xAxis: {...chartConfig.xAxis,
            categories: [
                'Продано ТКП',
                'Подписано смет/договоров',
                'Поставлено ОиМ',
                'Оплачено ФОТ',
                'Смонтировано',
                'Запроцентовано',
                '<span style="color: #16b323/*#17f82f*/;">Маржинальная прибыль</span>',],
            gridLineWidth: 0,
            gridLineDashStyle: 'Dot',
            labels: {
                useHTML: true, // Enable HTML for styling
                formatter: function () {
                    return `<span class="xaxis-label">${this.value}</span>`;
                },
                style: {
                    color: 'rgb(102, 102, 102)',
                    fontSize: '13px',
                    cursor: 'pointer',
                },
                events: {
                    click: function (e) {
                        openFunnelDetails(e.target.innerText)
                    }
                },
            },
        },
        yAxis: [{
            gridLineWidth: 0,
            gridLineDashStyle: 'Dot',
            labels: {
                enabled: false // Отключаем подписи по оси
            },
            title: {
                text: null // Убираем заголовок оси X
            },
            max: 0,
            offset: 0,
            width: '50%'
        }, {
            ...chartConfig.yAxis,
            gridLineWidth: 0,
            gridLineDashStyle: 'Dot',
            labels: {
                enabled: false // Отключаем подписи по оси
            },
            min: 0,
            offset: 0,
            left: '50%',
            width: '50%'
        }],
        lang: {...chartConfig.lang},
        exporting: {
            buttons: {
                contextButton: {
                    ...chartConfig.exporting.buttons.contextButton,
                    menuItems: [
                        'viewFullscreen',
                        /*{
                            text: 'Легенда',
                            onclick: function () {
                                setIsLegendVisible(!isLegendVisible); // Toggle legend visibility
                            },
                        },*/
                        "printChart", "separator",
                        "downloadPNG", "downloadJPEG", "downloadPDF",
                    ],
                },
            },
        },
        tooltip: {
            formatter: function() {
                let s = '<b>' + this.x + '</b>';
                this.points.forEach(point => {
                    if (point.y < 0 ) return
                    s += `<br/><span style="color:${point.color}">${point.series.name}</span>: ${point.y} млн.`
                });
                return s;
            },
            /*format: '<b>{key}</b><br/><span style="color:{series.color}">{series.name}</span>: {y} млн.<br/>',*/ /*+ 'Total: {point.stackTotal}'*/
            shared: true
        },
        series: [ {
            name: 'Сумма',
            data: data || [],
            yAxis: 1,
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                inside: true,
                align: 'left',
                x: -25,
                verticalAlign: 'middle',
                format: '{point.y} млн.',
                style: {
                    color: 'white'
                }
            }
        },
            {
                name: 'Сумма',
                data: data2 || [],
                borderWidth: 0,
            },
        ],
    }), [data, data2])

    if (isLoading) {return <Skelet option='eco'/>}
    if (isError) {return <h3>Нет подключения к серверу</h3>}
    if (!ecofunnel) {return <h3>Нет данных с сервера</h3>}

    return (
        <div className={className}>
            <div className='chartTitle'>МАРЖА</div>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    );
};

export default AmgCustomFunnel;