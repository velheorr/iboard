import './NeonButton.scss'
import {Button, Tooltip, Typography} from "@mui/material";
import {useTheme} from "../../hook/useTheme";

const NeonButton = ({text, startIcon, tooltip = false, func}) => {
    const theme = useTheme() ? 'darkBtn' : 'lightBtn'

    const render = ()=>{
        if (tooltip){
            return <Tooltip title={<Typography variant="body2"  gutterBottom>{tooltip}</Typography>}>
                <Button className={theme} onClick={func} color={'success'} variant="outlined" size='small' startIcon={startIcon}>{text}</Button>
            </Tooltip>
        } else {
            return <Button className={theme} onClick={func} color={'success'} variant="outlined" size='small' startIcon={startIcon}>{text}</Button>
        }
    }

    return (
        render()
    );
};

export default NeonButton;






