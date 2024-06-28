import TextField from "@mui/material/TextField";
import {Box, Button} from "@mui/material";
import React from "react";
import axios from "axios";
import {BACK} from "../../../utils/links";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {resetSchema} from "../verify";
import {useModal} from "../../../hook/useModal";


const ResetPasswordEmail = () => {
    const {setModal} = useModal()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onTouched",
        resolver: yupResolver(resetSchema)
    });

    const onSubmit =async (data) => {
        try {
            const res = await axios.post(`${BACK}/api/resetPassword`, data)
            if (res.status === 200){
                setModal('resetPassword')
            }
        } catch (e) {
            console.log('error!!')
        }
    }

    return (
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
            <Button fullWidth variant="outlined" type='submit' size='small' color="success">Сброс пароля</Button>
        </Box>
    );
};

export default ResetPasswordEmail;