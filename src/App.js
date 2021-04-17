import icon from './icon.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <div className="content">
        <img src={icon} alt="App Icon"></img>
        <h1 className="VerificationText">Verifikasi Diri Anda</h1>
        <form className="OtpForm" method="POST">
          <input type="text" className="OtpInput" maxLength="1"></input>
          <input type="text" className="OtpInput" maxLength="1"></input>
          <input type="text" className="OtpInput" maxLength="1"></input>
          <input type="text" className="OtpInput" maxLength="1"></input>
          <input type="text" className="OtpInput" maxLength="1"></input>
          <input type="text" className="OtpInput" maxLength="1"></input>
        </form>
        <p className="description">Kami telah mengirimkan kode verifikasi OTP ke nomer Whatsapp yang telah
          <br></br> anda daftarkan saat proses pendaftaran</p>
        <p className="CountDownTimer">04 : 59</p>
        <button type="submit" className="VerificationButton">Verifikasi</button>
        <a href="#" className="RequestVerificationCode">Kirim Ulang Kode</a>
      </div>
    </div>
  );
}


export default App;
