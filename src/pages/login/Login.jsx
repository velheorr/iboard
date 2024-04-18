import React, {useEffect, useState} from 'react';
import './login.scss'
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../../hook/useAuth";
import {Box, Button, IconButton, Tooltip, Typography} from "@mui/material";
import logo from '../../img/logo.png';
import TextField from "@mui/material/TextField";
import {useForm} from "react-hook-form";
import {palette} from "../../utils/theme";
import { yupResolver } from "@hookform/resolvers/yup";
import {loginSchema} from "./verify";
import axios from "axios";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";


const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {signIn} = useAuth()
    const fromPage = location.state?.from?.pathname || '/';

    const [auth, setAuth] = useState(false)
    const [authMsg, setAuthMsg] = useState('')

    useEffect(() => {
        const authed = JSON.parse(localStorage.getItem('auth'))
        if (authed) {
            setAuth(true);
            signIn('user', ()=> navigate(fromPage, {replace: true}));
        }
    }, [auth]);

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
            /*let result*/
            let result = true
            /*await axios.post('http://grd228:5000/api/login', data).then(res => result =res.data)*/
            if (result) {
                setAuthMsg('')
                /*localStorage.setItem('auth', JSON.stringify(result));*/
                localStorage.setItem('auth', true);
                setAuth(result)
            }
        } catch (e) {
            setAuthMsg('Неверные данные')
            console.log(e)
        }
    }

    return (
        <div className='lionBG'>
            <div className='loginContainer'>
                <Box className='box'>
                    <div>
                        <img className='img' src={logo} alt=""/>
                        <Typography sx={{mt: 2, fontWeight: 600}} align='center' variant="h5" gutterBottom>iBOARD</Typography>
                        <Tooltip title={
                            <>
                                <Typography variant="body2" gutterBottom>Для тестового входа используйте:</Typography>
                                <Typography variant="body2" gutterBottom>Логин: test@grdn.ru</Typography>
                                <Typography variant="body2" gutterBottom>Пароль: dashboard</Typography>
                            </>
                        } >
                            <span style={{position: 'absolute'}}><IconButton size="small" ><HelpOutlineIcon /></IconButton></span>
                        </Tooltip>
                        <Typography sx={{mt: 2, fontWeight: 600}} align='left' variant="h6" gutterBottom>
                            Авторизация:
                            <em style={{color: 'orange', paddingLeft: '10px', fontSize: '18px'}}>{authMsg}</em>
                        </Typography>
                        <Box
                            onSubmit={handleSubmit(onSubmit)}
                            component="form"
                            sx={{'& > :not(style)': { m: 1, width: '100'},}}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField fullWidth  id="login" label="E-mail"  variant="outlined" type='email' size='small'
                                       {...register("login")}
                                       error={errors.login && true}
                                       helperText={errors.login && <span style={{color: 'red'}}>{errors.login.message}</span>}
                            />
                            <TextField fullWidth  id="password" label="Пароль" variant="outlined" type='password' size='small'
                                       {...register("password")}
                                       error={errors.password && true}
                                       helperText={errors.password && <span style={{color: 'red'}}>{errors.password.message}</span>}
                            />
                            <Button fullWidth variant="outlined" type='submit' size='small' color="success">Войти</Button>
                        </Box>
                        <Box sx={{textAlign: 'right', mt: 2}}>
                            <Typography variant="caption" display="block" gutterBottom color={palette.grey["500"]}>
                                Ещё не зарегистрированы? <Link to='/register'>Регистрация</Link>
                            </Typography>
                            <Typography variant="caption" display="block" gutterBottom color={palette.grey["500"]}>
                                Забыли пароль? <Link to='/resetPassword'>Сброс пароля</Link>
                            </Typography>
                        </Box>
                    </div>
                </Box>
            </div>

        </div>
    );
};

export  {Login};


