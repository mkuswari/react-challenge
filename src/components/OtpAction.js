import React from 'react'

function OtpAction() {
    return (
        <div>
            <button type="submit" className="VerificationButton">Verifikasi</button>
            <a href="#" className="RequestVerificationCode">Kirim Ulang Kode</a>
        </div>
    );
}

export default OtpAction;