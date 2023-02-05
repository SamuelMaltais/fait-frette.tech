import { Stack, Typography } from '@mui/material';
import React from 'react';
import './ProvincesSection.css';

function ProvinceDiplay(props) {
    return (
        <Stack className="provinces-display">
            <Typography variant="h4">{props.province}</Typography>
        </Stack>
    );  
}

export default ProvinceDiplay;