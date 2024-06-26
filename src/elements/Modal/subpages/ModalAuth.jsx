import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";

const ModalAuth = () => {
    const navigate = useNavigate();

    useEffect(()=>{
        setTimeout(function (){
            navigate('/', {replace: true})
        }, 10000)
    },[])

    return (
        <div>
            <div>Дождитесь подтверждения вашей учетной записи администратором</div>
        </div>
    );
};

export default ModalAuth;