import React from 'react';
import {Button, ButtonGroup} from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';


const Settings = () => {

    const buttons = [
        <Button key="one" endIcon={<SettingsIcon />}>Настройки</Button>,
        <Button key="two" endIcon={<InfoIcon />}>Помощь</Button>,
    ];

    return (
        <div className="settings">
            <ButtonGroup
                orientation="vertical"
                aria-label="Vertical button group"
                variant="outlined"
                color='success'
                size='small'
            >
                {buttons}
            </ButtonGroup>
        </div>
    );
};

export default Settings;