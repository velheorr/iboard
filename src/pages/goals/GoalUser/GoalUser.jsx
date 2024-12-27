import React, {useEffect, useState} from 'react';
import {useTheme} from "../../../hook/useTheme";
import Skelet from "../../../elements/Skelet";
import GoalMatrix from "../subPagesGoals/GoalMatrix";
import {useGetGoalsUser} from "../../../hook/useGetGoals";

const GoalUser = () => {
    const {data: goaluser, isLoading, isError} = useGetGoalsUser()
    const dark = useTheme() // тема
    const [data, setData] = useState()

    useEffect(()=>{
        if (goaluser){
            let x = goaluser.data.response.data
            setData(x)
        }
    },[goaluser])

    if (isLoading) {return <Skelet option='ecoData'/>}
    if (isError) {return <h3>Нет подключения к серверу</h3>}
    if (!goaluser) {return <h3>Нет данных с сервера</h3>}

    return (
        <div>
            <GoalMatrix data={data}/>
        </div>
    );
};

export default GoalUser;