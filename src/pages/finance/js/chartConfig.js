export const chartConfig = {
    chart: {
        /*type: 'line',*/
        height: '300',
        backgroundColor: 'transparent',
        color: '#fff'
    },
    title: {
        /*text: 'Показатели нарастающим итогом',*/
        style:{
            color: 'white',
            fontSize: '18px'
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
            fontSize:'14px',
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
                color: 'rgb(102, 102, 102)'
            }
        },
        categories: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    },
}