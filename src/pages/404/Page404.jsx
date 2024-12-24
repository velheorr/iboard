import React from 'react';
import './404.scss'
import {useNavigate} from "react-router";
import {Box, Button, Card, CardContent} from "@mui/material";
import {palette} from "../../utils/theme";
import {useTheme} from "../../hook/useTheme";

const Page404 = () => {
    const navigate = useNavigate()
    const dark = useTheme() // тема
    const goBack = () => navigate(-1)
    const goHome = () => navigate('/', {replace: true}) //ddon't use, Link to=

    return (
        <div className='block'>
            <Box>
                {
                    dark
                        ?
                        <div>
                            <h1 className="neonText flicker">Ошибка 404</h1>
                            <h2 className="neonText">Страница не найдена</h2>
                        </div>
                        :
                        <div>
                            <h1>Ошибка 404</h1>
                            <h2>Страница не найдена</h2>
                        </div>

                }
                    <Button
                        onClick={goBack}
                        variant="contained"
                        color='success'
                    >
                        Назад
                    </Button>
                    <Button
                        color='success'
                        onClick={goHome}
                        variant="contained"
                        sx={{marginLeft: '15px'}}
                    >
                        На главную
                    </Button>

            </Box>
        </div>
    );
};

export default Page404;