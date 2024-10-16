import './goals.scss';
import ElemTab from "../../elements/Tabs/ElemTab";
import GoalMatrix from "./subPagesGoals/GoalMatrix";
import f16 from '../../img/f16.mp4'
import GoalsSelect from "./GoalsSelect";

const Goals = () => {
    return (
        <div>
            <ElemTab arr={['Руководитель проекта', 'Руководитель строительства', 'ГИП']} inner={true}>
                <GoalsSelect/>
                <GoalMatrix/>
                <div>
                    <div style={{margin: '50px auto'}}>
                        <video className="bubbles" width="1024" height="760" loop="loop" autoPlay="autoplay"
                               muted="muted">
                            <source src={f16} type='video/mp4; codecs="avc1.42E030, mp4a.40.2"'/>
                        </video>
                    </div>
                </div>
            </ElemTab>
        </div>
    );
};

export default Goals;