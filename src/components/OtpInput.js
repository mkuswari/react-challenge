import React, { useState } from 'react'

const OtpInput = () => {

    const [otp, setOtp] = useState(new Array(6).fill(""))

    const handleChange = (element, index) => {
        if (isNaN(element.value)) {
            return false;
        }

        setOtp([...otp.map((d, idx) => (idx === index) ? element.value : d)]);

        // focus next input 
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    }

    return (
        <div>
            <h1 className="VerificationText">Verifikasi Diri Anda</h1>
            <form className="OtpForm">

                {
                    otp.map((data, index) => {
                        return (
                            <input className="OtpInput" type="text" name="otpCode" maxLength="1" key={index} value={data} onChange={e => handleChange(e.target, index)} onFocus={e => e.target.select()} />
                        )
                    })

                }
            </form>
            <p className="description">Kami telah mengirimkan kode verifikasi OTP ke nomer Whatsapp yang telah
              <br></br> anda daftarkan saat proses pendaftaran</p>
        </div >
    );
}

export default OtpInput;