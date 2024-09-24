export const chartConfig = {
    chart: {
        /*type: 'line',*/
        height: '280',
        backgroundColor: 'transparent',
        color: '#fff'
    },
    title: {
        /*text: 'Показатели нарастающим итогом',*/
        style:{
            color: 'white',
            fontSize: '16px'
        }
    },
    subtitle: {
        /*text: 'За месяц, млн.',*/
        align: 'left'
    },
    legend: {
        /*enabled: isLegendVisible,*/
        align: 'right',
        verticalAlign: 'middle',
        /*floating: true,*/
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
                menuItems: [
                    'viewFullscreen',
                    /*{
                        text: 'Легенда',
                        onclick: function () {
                            setIsLegendVisible(!isLegendVisible); // Toggle legend visibility
                        },
                    },*/
                    /*{
                        text: 'Печать',
                        onclick: function() {this.print();}
                    },*/
                    "printChart", "separator",
                    "downloadPNG", "downloadJPEG", "downloadPDF",

                ],
                symbolStroke: "#17fa2f",
                theme: {
                    fill:"transparent",
                    states: {
                        hover: {
                            fill: '#0a8016',
                        },
                    }
                },
            },
        },
    },
}