import TextField from "@mui/material/TextField";
import {Box, Button} from "@mui/material";
import React from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {resetSchemaPass} from "../verify";
import axios from "axios";
import {BACK} from "../../../utils/links";


const ResetPasswordPass = ({reset}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onTouched",
        resolver: yupResolver(resetSchemaPass)
    });

    const onSubmit =async (data) => {
        try {
            const pass = {password: data.password}
            const resetLink = reset.slice(1)
            const res = await axios.post(`${BACK}/api/newPassword/${resetLink}`, pass)
            if (res.status === 200){
                console.log(data)
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
            <TextField fullWidth  id="password" label="Пароль" variant="outlined" type='password' size='small'
                       {...register("password")}
                       error={errors.password && true}
                       helperText={errors.password && <span style={{color: 'red'}}>{errors.password.message}</span>}
            />
            <TextField fullWidth  id="cpassword" label="Повторите пароль" required variant="outlined" type='password' size='small'

                       {...register("cpassword")}
                       error={errors.cpassword && true}
                       helperText={errors.cpassword && <span style={{color: 'red'}}>{errors.cpassword.message}</span>}
            />
            <Button fullWidth variant="outlined" type='submit' size='small' color="success">Сброс пароля</Button>
        </Box>
    );
};

export default ResetPasswordPass;