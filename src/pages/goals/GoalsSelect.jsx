import React from 'react';
import './goals.scss'
import f16 from '../../img/f16.mp4'
import lion from '../../img/auth/Lion.png'

const GoalsSelect = ({toggleShow}) => {
    return (
        <div style={{margin: '20px', display: 'flex', flexWrap: 'wrap',}}>
            <GoalCard toggleShow={toggleShow}/>
            <GoalCard toggleShow={toggleShow}/>
            <GoalCard2/>
            <GoalCard2/>
            <GoalCard2/>
            <GoalCard2/>
        </div>
    );
};

export default GoalsSelect;

const GoalCard = ({toggleShow}) =>{
    return (
        <div className='goalCard' onClick={toggleShow}>
            <div>
                <img src={lion} alt="" style={{height: '150px'}}/>
            </div>
            <div className='goalText'>
                <span >ФИО</span>
                <div>Владимир В.А.</div>
                <span >Должность</span>
                <div>Самый главный</div>
                <span >Организация</span>
                <div>Летак</div>
            </div>
            <div style={{position: 'absolute', right: '-5px'}}>
                <div className='goalRole rp'>РП</div>
                <div className='goalRole rs'>РС</div>
                <div className='goalRole gip'>ГИП</div>
            </div>
        </div>
    )
}

const GoalCard2 = () =>{
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
            <div style={{position: 'absolute', right: '-5px'}}>
                <div className='goalRole rp'>РП</div>
                <div className='goalRole rs'>РС</div>
                <div className='goalRole gip'>ГИП</div>
            </div>
        </div>
    )
}