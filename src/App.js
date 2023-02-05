import React, { useState } from 'react';
import './App.css';
import Province from './Map-Component/Province';
import {ReactComponent as Logo} from './logo.svg'
import Canada from './Map-Component/Province';
import TopSideBar from './components/TopSideBar';
import Sidebar from './components/Sidebar';
import Shadow from './Map-Component/Shadow';

function App() {
  const [temp, setTemp] = useState()
  const [city, setCity] = useState("Montréal")
  const [wind, setWind] = useState()
  const [humidity, setHumidity] = useState()
  const [dayInFuture, setDayInFuture] = useState()
  return (
    <>
    <TopSideBar />
    <div className='ret'>
    <svg height={1000} width={1000} className='Circle'> <circle cx="120" cy="85" r="400" fill="#0b2b57" className='Circle'/></svg>
    <Logo className="Logo"/>
    </div>
    

    <div className="App">
      <div>
      <Canada/>
      <Shadow className="map"/>
      </div>
      <Sidebar />
    </div>
    </>
  );
}

export default App;