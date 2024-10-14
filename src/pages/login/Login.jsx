import React, {useEffect, useState} from 'react';
import './login.scss'
import {Link} from "react-router-dom";
import {useAuth} from "../../hook/useAuth";
import {Box, Button, Divider, IconButton, InputAdornment, Typography} from "@mui/material";
import TextField from "@mui/material/TextField";
import {useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {loginSchema} from "./verify";
import axios from "axios";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import {BACK} from "../../utils/links";
import {useTheme} from "../../hook/useTheme";


const Login = () => {
    const {signIn,checkAuth, token} = useAuth()
    const [authMsg, setAuthMsg] = useState('')

    useEffect(() => {
        if (token) checkAuth()
    }, [token]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onTouched",
        resolver: yupResolver(loginSchema)
    });


    const onSubmit = async (data) => {
        setAuthMsg('Проверка данных')
        try {
            let sendData = {...data, from: 'iboard'}
            const response = await axios.post(`${BACK}/api/login`, sendData)
            console.log(response)
            setAuthMsg(response.data.message)
            if (response.status === 200) {
                setAuthMsg('')
                signIn(response.data.name, response.data.token);
            }
        } catch (e) {
            if (e.response.status === 401) {
                setAuthMsg(e.response.data.message)
            } else {
                setAuthMsg('Неверные данные')
            }
            console.log(e)
        }
    }

    const [show, setShow] = useState(false)
    const showPass = () =>{
        setShow(!show)
    }

    return (
        <div>
            <Divider  sx={{color: useTheme('divider'), fontSize: '18px', mb: 1}}>Вход</Divider>
            <Typography align='right' variant="subtitle1" sx={{color: "orange"}}>{authMsg}</Typography>
            <Box
                onSubmit={handleSubmit(onSubmit)}
                component="form"
                sx={{'& > :not(style)': {m: 1, width: '100'},}}
                noValidate
                autoComplete="off"
            >
                <TextField fullWidth id="login" label="E-mail" variant="outlined" type='email' size='small'
                           {...register("login")}
                           error={errors.login && true}
                    /*helperText={errors.login && <span style={{color: 'red'}}>{errors.login.message}</span>}*/
                           helperText={
                               errors.login ? <span style={{color: 'red'}}>{errors.login.message}</span>
                                   : <span style={{height: '20px'}}> </span>
                           }
                />
                <TextField fullWidth id="password" label="Пароль" variant="outlined" type={ show ? 'text' : 'password'}
                           size='small'
                           {...register("password")}
                           error={errors.password && true}
                    /*helperText={errors.password && <span style={{color: 'red'}}>{errors.password.message}</span>}*/
                           helperText={
                               errors.password ? <span style={{color: 'red'}}>{errors.password.message}</span>
                                   : <span style={{height: '40px'}}> </span>
                           }
                           InputProps={{
                               endAdornment:(<InputAdornment position="end" onClick={showPass}><IconButton sx={{padding: 0}}>
                                  { show ?   <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
                               </IconButton></InputAdornment>)
                           }}
                />
                <Button fullWidth variant="outlined" type='submit' size='small' color="success">Войти</Button>
            </Box>
            <Box sx={{textAlign: 'right', mt: 2}}>
                <Typography variant="caption" display="block" gutterBottom color={'grey'}>
                    Ещё не зарегистрированы? <Link to='/register'>Регистрация</Link>
                </Typography>
                <Typography variant="caption" display="block" gutterBottom color={'grey'}>
                    Забыли пароль? <Link to='/resetPassword'>Сброс пароля</Link>
                </Typography>
            </Box>
        </div>
    );
};

export  {Login};


