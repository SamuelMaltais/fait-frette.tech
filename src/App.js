import React from 'react';
import './App.css';
import Province from './Map-Component/Province';
import {ReactComponent as Logo} from './logo.svg'
import Canada from './Map-Component/Province';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <svg height={1000} width={1000}> <circle cx="120" cy="85" r="400" fill="#0b2b57" className='Circle'/></svg>
        <Logo className="Logo"/>
      </header>
      <body>
        <Canada/>
      </body>
    </div>
  );
}

export default App;
