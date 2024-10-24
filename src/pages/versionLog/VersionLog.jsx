import Scroll from "../../elements/Scroll/Scroll";
import './versionLog.scss'
import VersionItem from "./subpages/VersionItem";

const VersionLog = () => {
    const data = [
        {
            date: '-/-',
            ver: '1.0.4',
            list: [
                {
                    name: 'Раздел справки',
                    li: ['Вывод справки при входе в блок процентование','Возможность отключения отображения справки при входе']
                },
                {
                    name: 'Раздел справки',
                    li: ['Вывод справки при входе в блок процентование','Возможность отключения отображения справки при входе']
                },
            ]
        },
        {
            date: '6.08.2024',
            ver: '1.0.2',
            list: [
                {
                    name: 'Экономика',
                    li: ['Изменены года показа гистограм. По умолчанию установлены за 2024 и 2023 год']
                },
                {
                    name: 'Реализация / Процентование',
                    li: ['Исправлены цвета в темной теме','Новые модальные окна','Изменен дизайн справок','Обновлена справочная информация, отображение формул'
                    ]
                },
            ]
        },
        {
            date: '02.08.2024',
            ver: '1.0.1',
            list: [
                {
                    name: 'Экономика',
                    li: ['Добавлено выделение кнопок выбора месяца в гистограмме для перехода на 2ю страницу','Добавлена анимация загрузки гистограмм при изменении года просмотра']
                },
                {
                    name: 'Экономика / 2 страница',
                    li: ['Изменен вывод годов отображения с +1 и -1 года на +3 и -3 соответственно','Изменен внешний вид табличной части для лучшего отображения данных']
                },
            ]
        },
        {
            date: '01.08.2024',
            ver: '1.0.0',
            list: [
                {
                    name: 'Версионирование',
                    li: ['Добавлена страница с иторией версий и изменений в приложении']
                },
            ]
        },


    ]
    return (
        <Scroll>
            <div className='versionPage'>
                {data.map((i, index) => {
                        return (<VersionItem data={i} key={index} />)
                        }
                    )
                }
            </div>
        </Scroll>
    );
};

export default VersionLog;