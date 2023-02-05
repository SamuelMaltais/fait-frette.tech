import React, { useState, useEffect } from 'react';
import './App.css';
import Province from './Map-Component/Province';
import {ReactComponent as Logo} from './logo.svg'
import Canada from './Map-Component/Province';
import TopSideBar from './components/TopSideBar';
import Sidebar from './components/Sidebar';
import Shadow from './Map-Component/Shadow';
import VirtualizedList from './components/VirtualizedList';
import Snow from './components/snow';

function App() {
  const [temp, setTemp] = useState();
  const [city, setCity] = useState("Montréal");
  const [wind, setWind] = useState();
  const [humidity, setHumidity] = useState();
  const [dayInFuture, setDayInFuture] = useState();
  const [cities, setCities] = useState([
    {
        "name":"Montreal",
        "lat": 45.5089,
        "lng": -73.5617,
        "province": "QC"
    },

    {
        "name":"Vancouver",
        "lat": 49.25,
        "lng": -123.1,
        "province": "BC"
    },

    {
        "name":"Toronto",
        "lat": 43.7417,
        "lng": -79.3733,
        "province": "ON"
    }
  ])
 
  return (
    <>
    <div className='ret'>
    <svg height={700} width={1000} className='Circle'> <circle cx="120" cy="85" r="400" fill="#0b2b57" className='Circle'/></svg>
    <Logo className="Logo"/>
    </div>
    <Snow/>
    <Canada cities={cities} />
    <Shadow className="map"/>
    <Sidebar 
        temp={temp} wind={wind} humidity={humidity} city={city} dayInFuture={dayInFuture}
        setTemp={setTemp} setWind={setWind} setHumidity={setHumidity} setCity={setCity} setDayInFuture={setDayInFuture} 
        setCities={setCities}
      />
    
    <VirtualizedList cities={cities}/>

    <div className="App">
      <div>
      </div>
      
    </div>
    </>
  );
}

export default App;