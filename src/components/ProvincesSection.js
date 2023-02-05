import { Stack } from '@mui/material';
import React from 'react';
import ProvinceDiplay from './ProvinceDiplay';
import './ProvincesSection.css';

function ProvincesSection(props) {
    const displays=props.provinceDisplay.map((province) => 
        <ProvinceDiplay province={province} />
    )

    return (
        <Stack className="provinces-container" spacing={5}>{displays}</Stack>
    );
}

export default ProvincesSection;