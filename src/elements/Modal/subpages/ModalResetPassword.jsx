import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";

const ModalResetPassword = () => {
    const navigate = useNavigate();

    useEffect(()=>{
        setTimeout(function (){
            navigate('/', {replace: true})
        }, 10000)
    },[])

    return (
        <div>
            <div>Ссылка на сброс пароля отправлена вам на имейл</div>
        </div>
    );
};

export default ModalResetPassword;