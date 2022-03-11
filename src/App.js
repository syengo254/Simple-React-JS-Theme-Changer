import './App.css';
import React, { useState } from 'react';
import Switch from './components/Switch';
import Boxes from './components/Boxes';

const App = () => {
  const lightTheme = {
    bg: '#eee',
    color: 'black',
  }; 

  const darkTheme = {
    bg: '#aaa',
    color: 'white',
  }

  const [switchVal, setSwitchVal] = useState(false);

  function onSwitch(){
    let val = !switchVal;
    setSwitchVal(val);
  }

  return (
    <div className="App">
      <h2>Theme changer</h2>
      <div style={{margin: "1rem"}}>
        <Switch onSwitch={ onSwitch } switchVal={ switchVal } text={switchVal ? "ON" : "OFF"} />
        <Boxes theme={ switchVal ? darkTheme : lightTheme } />
      </div>
    </div>
  );
}

export default App;
