import React from 'react';
import {Card} from "@mui/material";
import './goals.scss'
import f16 from '../../img/f16.mp4'
import BlockShadow from "../../elements/BlockShadow";
import TableItem from "../../elements/Table/TableItem";

const GoalsSelect = () => {
    return (
        <div style={{margin: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
            <GoalCard/>
            <GoalCard/>
            <GoalCard/>
            <GoalCard/>
            <GoalCard/>
            <GoalCard/>
            <GoalCard/>
            <GoalCard/>
            <GoalCard/>
            <GoalCard/>
            <GoalCard/>


        </div>
    );
};

export default GoalsSelect;

const GoalCard = () =>{
    return (
        <div className='goalCard'>
            <div>
                <video className="bubbles" width="150"  loop="loop" autoPlay="autoplay"
                       muted="muted">
                    <source src={f16} type='video/mp4; codecs="avc1.42E030, mp4a.40.2"'/>
                </video>
            </div>
            <div className='goalText'>
                <span >ФИО</span>
                <div>Владимир В.А.</div>
                <span >Должность</span>
                <div>Самый главный</div>
                <span >Организация</span>
                <div>Летак</div>
            </div>
            <div style={{position: 'absolute', right: '0px'}}>
                <div className='goalRole rp'>РП</div>
                <div className='goalRole rs'>РС</div>
                <div className='goalRole gip'>ГИП</div>
            </div>
        </div>
    )
}