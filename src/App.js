import icon from './icon.svg';
import './App.css';
import React, { useEffect } from 'react';
import OtpInput from './components/OtpInput'
import OtpAction from './components/OtpAction'

function App() {
  useEffect(CountDownTimer)
  return (
    <div className="App">
      <div className="content">
        <img src={icon} alt="App Icon"></img>
        <OtpInput />
        <p id="timer" className="CountDownTimer"></p>
        <OtpAction />
      </div>
    </div>
  );
}

const CountDownTimer = () => {
  const timer = document.getElementById("timer");
  const resend = document.getElementById('resend');
  let batas = 300000;

  resend.style.display = 'none';
  const interval = setInterval(
    () => {
      batas = batas - 1000;
      let menit = Math.floor((batas) / 60000);
      let detik = (((batas) % 60000) / 1000).toFixed(0);
      timer.innerHTML = menit + ':' + detik;
    }, 1000
  );

  setTimeout(
    () => {
      resend.style.display = 'block';
      clearInterval(interval);
    }, 300001
  );
}

export default App;
