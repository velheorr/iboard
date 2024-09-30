export const chartConfig = {
    chart: {
        height: 250,
        backgroundColor: 'transparent',
    },
    title: {
        /*text: 'Показатели нарастающим итогом',*/
        align: 'left',
        style:{
            color: '#767676',
            fontSize: '16px'
        },
        /*x: 0, // Adjust horizontal position
        y: 15, // Adjust vertical position*/
    },
    subtitle: {
        /*text: 'За месяц, млн.',*/
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
    /* navigation: {
            menuItemStyle: {
                padding: '0',
                color: '#303030'
            },
            menuItemHoverStyle: {
                background: '#33bb00',
                color: '#FFFFFF'
            }
        },*/
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