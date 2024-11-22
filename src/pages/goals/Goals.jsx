import './goals.scss';
import ElemTab from "../../elements/Tabs/ElemTab";
import GoalMatrix from "./subPagesGoals/GoalMatrix";
import GoalsSelect from "./GoalsSelect";
import React, {useState} from "react";
import {Button, Tooltip, Typography} from "@mui/material";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import Dev from "../../elements/Development/Dev";

const Goals = () => {
    const [show, setShow] = useState(false)

    const toggleShow = () => {
        setShow(!show)
    }

    return (
        <div>
            <Dev/>
            {
                !show
                    ?
                    <div>
                        <GoalsSelect toggleShow={toggleShow}/>
                    </div>
                    :
                    <div>
                        <Tooltip title={<Typography variant="body2"  gutterBottom>Вернуться назад</Typography>}>
                            <Button onClick={toggleShow} color={'success'} variant="outlined" size='small' startIcon={<ReplyAllIcon />}>Назад</Button>
                        </Tooltip>
                        <ElemTab arr={['Руководитель проекта', 'Руководитель строительства', 'ГИП']} inner={true}>
                            <GoalMatrix/>
                            <GoalMatrix/>
                            <GoalMatrix/>
                        </ElemTab>
                    </div>
            }


        </div>
    );
};

export default Goals;