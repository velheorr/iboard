import Scroll from "../../elements/Scroll/Scroll";
import './versionLog.scss'

const VersionLog = () => {
    return (

        <div className='versionPage'>
            <Scroll>
                <div className='verLog'>
                    <div className='version'>
                        <div>06.08.2024</div>
                        <div>1.0.10</div>
                    </div>
                    <div className='page'>Экономика</div>
                    <ul>
                        <li>Изменены года показа гистограм. По умолчанию установлены за 2024 и 2023 год</li>
                    </ul>
                    <div className='page'>Реализация / Процентование</div>
                    <ul>
                        <li>Исправлены цвета в темной теме</li>
                        <li>Новые модальные окна</li>
                        <li>Изменен дизайн справок</li>
                        <li>Обновлена справочная информация, отображение формул</li>
                    </ul>
                </div>
                <div className='verLog'>
                    <div className='version'>
                        <div>02.08.2024</div>
                        <div>1.0.9</div>
                    </div>
                    <div className='page'>Экономика</div>
                    <ul>
                        <li>Добавлено выделение кнопок выбора месяца в гистограмме для перехода на 2ю страницу</li>
                        <li>Добавлена анимация загрузки гистограмм при изминении года просмотра</li>
                    </ul>
                    <div className='page'>Экономика / 2 страница</div>
                    <ul>
                        <li>Изменен вывод годов отображения с +1 и -1 года на +3 и -3 соответственно</li>
                        <li>Изменен внешний вид табличной части для лучшего отображения данных</li>

                    </ul>
                </div>
                <div className='verLog'>
                    <div className='version'>
                        <div>01.08.2024</div>
                        <div>1.0.7</div>
                    </div>
                    <div className='page'>Версионирование</div>
                    <ul>
                        <li>Добавлено отображении версий и изминений в приложении</li>
                    </ul>
                </div>
            </Scroll>







        </div>
    );
};

export default VersionLog;