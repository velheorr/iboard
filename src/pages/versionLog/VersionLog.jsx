import Scroll from "../../elements/Scroll/Scroll";
import './versionLog.scss'

const VersionLog = () => {
    return (

        <div>
            <Scroll>
                <div className='verLog'>
                    <div className='version'>
                        <div>06.08.2024</div>
                        <div>Version</div>
                    </div>
                    <div>Экономика</div>
                    <ul>
                        <li>Изименены года показа гистограм. По умолчанию установлены за 2024 и 2023 год</li>
                        <li></li>
                    </ul>
                    <div>Реализация / Процентование</div>
                    <ul>
                        <li>Исправлены цвета в темной теме</li>
                        <li>Новые модальные окна</li>
                        <li>Изменен дизайн справок</li>
                        <li>Обновлена справочная информация, отображение формул</li>
                    </ul>
                </div>
            </Scroll>







        </div>
    );
};

export default VersionLog;