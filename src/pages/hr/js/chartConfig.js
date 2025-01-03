

export const chartConfig = {
    chart: {
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
        align: 'left'
    },
    legend: {
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
        labels: {
            style: {
                color: 'rgb(102, 102, 102)',
                fontSize: '13px'
            }
        },
        categories: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    },
    yAxis: {
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
        }
    },
    lang: {
        viewFullscreen: 'На весь экран',
        exitFullscreen: 'Уменьшить',
        printChart: 'Печать',
        downloadPNG: 'Скачать PNG',
        downloadJPEG: 'Скачать JPG',
        downloadPDF: 'Скачать PDF',
        /*downloadCSV: 'Download Table (CSV)',
        viewData: "View Data Table",
        hideData: "Hide Data Table"*/
    },
    exporting: {
        buttons: {
            contextButton: {
                x: 10, // Adjust horizontal position
                y: 5, // Adjust vertical position
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
}