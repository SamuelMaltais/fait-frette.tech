import React, { useState } from 'react';
import './App.css';
import Province from './Map-Component/Province';
import {ReactComponent as Logo} from './logo.svg'
import Canada from './Map-Component/Province';
import TopSideBar from './components/TopSideBar';
import Sidebar from './components/Sidebar';
import Shadow from './Map-Component/Shadow';
import ProvincesSection from './components/ProvincesSection';

function App() {
  const [temp, setTemp] = useState();
  const [city, setCity] = useState("Montréal");
  const [wind, setWind] = useState();
  const [humidity, setHumidity] = useState();
  const [dayInFuture, setDayInFuture] = useState();
  const [provinceDisplay, setProvinceDisplay] = useState(["Quebec", "Ontario", "British Columbia"]);

  return (
    <>
    <div className='ret'>
    <svg height={700} width={1000} className='Circle'> <circle cx="120" cy="85" r="400" fill="#0b2b57" className='Circle'/></svg>
    <Logo className="Logo"/>
    </div>
    

    <div className="App">
      <div>
      <Canada provinceDisplay={provinceDisplay} setProvinceDisplay={setProvinceDisplay} />
      <Shadow className="map"/>
      </div>
      <Sidebar 
        temp={temp} wind={wind} humidity={humidity} city={city} dayInFuture={dayInFuture}
        setTemp={setTemp} setWind={setWind} setHumidity={setHumidity} setCity={setCity} setDayInFuture={setDayInFuture} 
      />
      <ProvincesSection provinceDisplay={provinceDisplay} />
    </div>
    </>
  );
}

export default App;