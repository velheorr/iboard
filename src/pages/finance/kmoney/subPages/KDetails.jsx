import React from 'react';
import NeonButton from "../../../../elements/NeonButton/NeonButton";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import {useNavigate} from "react-router";
import {useParams} from "react-router-dom";
import TableHead from "../../../../elements/Table/TableHead";
import TableItem from "../../../../elements/Table/TableItem";


const KDetails = () => {
    const navigate = useNavigate();
    const param = useParams()
    const goBack = ()=>{navigate('/kmoney')}


    return (
        <div>
            <div style={{marginTop: '25px', marginLeft: '15px'}}>
                <NeonButton text={'Назад'} tooltip={'Вернуться назад'} func={goBack} startIcon={<ReplyAllIcon />}/>
                <div style={{textAlign: 'center', fontSize: '24px'}}>{param.details}</div>
            </div>

            <div style={{margin: '15px'}}>
                <TableHead>
                    <div style={{width: '25%'}} className='listIcon'><span> Код_Заказчик_Объект</span></div>
                    <div style={{width: '25%'}} className='listIcon'><span> РП (Распорядитель)</span></div>
                    <div style={{width: '25%'}} className='listIcon'><span> Сумма</span></div>
                </TableHead>
                <TableItem>
                    <div style={{width: '25%'}}>Самотлор</div>
                    <div style={{width: '25%'}}>Все</div>
                    <div style={{width: '25%'}}>Все</div>
                </TableItem>
            </div>

            <div style={{margin: '15px'}}>
                <TableHead>
                    <div style={{width: '25%'}} className='listIcon'><span> Код_Заказчик_Объект</span></div>
                    <div style={{width: '25%'}} className='listIcon'><span> РП (Распорядитель)</span></div>
                    <div style={{width: '25%'}} className='listIcon'><span> Сумма</span></div>
                    <div style={{width: '25%'}} className='listIcon'><span> Количество дней</span></div>
                </TableHead>
                <TableItem>
                    <div style={{width: '25%'}}>Самотлор</div>
                    <div style={{width: '25%'}}>Все</div>
                    <div style={{width: '25%'}}>Все</div>
                    <div style={{width: '25%'}}>Все</div>
                </TableItem>
            </div>

        </div>
    );
};

export default KDetails;