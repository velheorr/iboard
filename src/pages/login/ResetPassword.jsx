import './login.scss'
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import {useAuth} from "../../hook/useAuth";
import {Box, Divider, Typography} from "@mui/material";
import {palette} from "../../utils/theme";
import ResetPasswordEmail from "./subResetPassword/ResetPasswordEmail";
import ResetPasswordPass from "./subResetPassword/ResetPasswordPass";


const ResetPassword = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {signIn} = useAuth()
    const fromPage = location.state?.from?.pathname || '/';
    let { reset } = useParams();



    return (
        <div>
            <Divider  sx={{color:palette.grey["500"], fontSize: '18px', mb: 1}}>Восстановление пароля</Divider>
            {
                !reset
                ?  <ResetPasswordEmail/>
                :  <ResetPasswordPass reset={reset}/>
            }
            <Box sx={{textAlign: 'right', mt: 2}}>
                <Typography variant="caption" display="block" gutterBottom color={palette.grey["500"]}>
                    Уже зарегистрированы? <Link to='/login'>Войти</Link>
                </Typography>
            </Box>
        </div>
    );
};

export  {ResetPassword};


