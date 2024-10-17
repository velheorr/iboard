import './goals.scss';
import ElemTab from "../../elements/Tabs/ElemTab";
import GoalMatrix from "./subPagesGoals/GoalMatrix";

const Goals = () => {
    return (
        <div>
            <div style={{padding: '0px 5px'}}>
                <ElemTab arr={['Руководитель проекта', 'Руководитель строительства', 'ГИП']} inner={true}>
                    <GoalMatrix/>
                    <div>1</div>
                    <div>1</div>
                </ElemTab>
            </div>
        </div>
    );
};

export default Goals;