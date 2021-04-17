import icon from './icon.svg';
import './App.css';
import React from 'react';
import OtpInput from './components/OtpInput'
import OtpAction from './components/OtpAction'

function App() {
  return (
    <div className="App">
      <div className="content">
        <img src={icon} alt="App Icon"></img>
        <OtpInput />
        <p className="CountDownTimer">04 : 59</p>
        <OtpAction />
      </div>
    </div>
  );
}


export default App;
