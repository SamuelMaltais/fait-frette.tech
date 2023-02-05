import React from 'react';
import { Box, Slider, Stack, Typography } from '@mui/material'
import { Thermostat, Air, LocalDrink, Add, Remove } from '@mui/icons-material';
import './Sidebar.css'

function Sidebar(props) {
    return (
        <>
            <Stack className="container" direction="column" alignItems="center" spacing={5}>
                <Stack className="section" direction="column" alignItems="center" spacing={2}>
                    <Typography><Thermostat />  Temperature</Typography>
                    <Stack className="slider" direction="row" spacing={2}>
                        <Remove />
                        <Slider 
                        defaultValue={0}
                        valueLabelDisplay="auto"
                        step={1}
                        marks
                        min={-2}
                        max={2}
                        />
                        <Add />
                    </Stack>
                </Stack>
                <Stack className="section" direction="column" alignItems="center" spacing={2}>
                    <Typography><Air />  Wind</Typography>
                    <Stack className="slider" direction="row" spacing={2}>
                        <Remove />
                        <Slider 
                        defaultValue={0}
                        valueLabelDisplay="auto"
                        step={1}
                        marks
                        min={-2}
                        max={2}
                        />
                        <Add />
                    </Stack>
                </Stack>
                <Stack className="section" direction="column" alignItems="center" spacing={2}>
                    <Typography><LocalDrink />  Humidity</Typography>
                    <Stack className="slider" direction="row" spacing={2}>
                        <Remove />
                        <Slider 
                        defaultValue={0}
                        valueLabelDisplay="auto"
                        step={1}
                        marks
                        min={-2}
                        max={2}
                        />
                        <Add />
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
}

export default Sidebar;