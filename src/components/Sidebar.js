import React from 'react';
import { Box, Button, Slider, Stack, Typography } from '@mui/material'
import { Thermostat, Air, LocalDrink, Add, Remove } from '@mui/icons-material';
import './Sidebar.css'
import TopSideBar from './TopSideBar';

function Sidebar(props) {
    const changeTemp = (event, temp) => {
        props.setTemp(temp);
    }
    const changeWind = (event, wind) => {
        props.setWind(wind);
    }
    const changeHumidity = (event, humidity) => {
        props.setHumidity(humidity);
    }   
    return (
        <>
            <Stack className="sidebar-container" direction="column" alignItems="center" justifyContent="center" spacing={5}>
                <Typography variant="h4">Preferences</Typography>
                <TopSideBar city={props.city} dayInFuture={props.dayInFuture} setCity={props.setCity} setDayInFuture={props.setDayInFuture} />
                <Stack className="sidebar-section" direction="column" alignItems="center" spacing={2}>
                    <Typography><Thermostat />  Temperature</Typography>
                    <Stack className="slider" direction="row" spacing={2}>
                        <Remove />
                        <Slider 
                        defaultValue={0}
                        value={props.temp}
                        onChange={changeTemp}
                        valueLabelDisplay="auto"
                        step={1}
                        marks
                        min={-2}
                        max={2}
                        />
                        <Add />
                    </Stack>
                </Stack>
                <Stack className="sidebar-section" direction="column" alignItems="center" spacing={2}>
                    <Typography><Air />  Wind</Typography>
                    <Stack className="slider" direction="row" spacing={2}>
                        <Remove />
                        <Slider 
                        defaultValue={0}
                        value={props.wind}
                        onChange={changeWind}
                        valueLabelDisplay="auto"
                        step={1}
                        marks
                        min={-2}
                        max={2}
                        />
                        <Add />
                    </Stack>
                </Stack>
                <Stack className="sidebar-section" direction="column" alignItems="center" spacing={2}>
                    <Typography><LocalDrink />  Humidity</Typography>
                    <Stack className="slider" direction="row" spacing={2}>
                        <Remove />
                        <Slider 
                        defaultValue={0}
                        value={props.humidity}
                        onChange={changeHumidity}
                        valueLabelDisplay="auto"
                        step={1}
                        marks
                        min={-2}
                        max={2}
                        />
                        <Add />
                    </Stack>
                </Stack>
                <Button variant="contained"
                onClick={()=>{
                    get
                }} 
                >Find Cities</Button>
            </Stack>
        </>
    );
}

export default Sidebar;