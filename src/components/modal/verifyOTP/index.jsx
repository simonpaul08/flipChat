import { useState } from "react";
import "../commonModal.css";
import { Link } from "react-router-dom";

const VerifyOTP = ({ handleVerifyOtp, handleSendAgain }) => {

  const [otp, setotp] = useState('')

  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleVerifyOtp(otp)
  }

  return (

      <div className="modal">
        <div className="modal-container">
          <div className="modal-body">
            <h3 className="modal-title">Verify Your Email</h3>
            <p className="modal-para">A 6 digit verification code has been sent to your email</p>
            <form method="POST" className="modal-form" onSubmit={handleOnSubmit}>
              <div className="form-item">
                <input type="text" name="otp" id="otp" placeholder="Enter OTP" className="form-input"
                  value={otp}
                  onChange={(e) => setotp(e.target.value)}
                  required
                />
              </div>
              <div className="form-item">
                <p className="auth-footer-text">
                  Didn't receive otp ?{" "}
                  {<Link
                    className="auth-forget"
                    onClick={handleSendAgain}
                  >
                    Send Again
                  </Link>}
                </p>
              </div>
              <button type='submit' className='auth-form-cta btn-primary'>Verify</button>
            </form>
          </div>
        </div>
      </div>

  )
}

export default VerifyOTP