import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";

const ModalResetPasswordConfirm = () => {
    const navigate = useNavigate();

    useEffect(()=>{
        setTimeout(function (){
            navigate('/', {replace: true})
        }, 10000)
    },[])

    return (
        <div>
            <div>Пароль успешно изменен, войдите в систему</div>
        </div>
    );
};

export default ModalResetPasswordConfirm;