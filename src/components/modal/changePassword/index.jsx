import React, { useState } from "react";
import { Link } from "react-router-dom";

const ChangePassword = () => {
  const [otp, setotp] = useState("");
  const [isOtpVerified, setIsOtpVerified] = useState(false);

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    setIsOtpVerified(true);
  };
  return (
    <div className="modal">
      <div className="modal-container">
        <div className="modal-body">
          <h3 className="modal-title">Change Password</h3>
          <p className="modal-para">
            A 6 digit verification code has been sent to your email
          </p>
          <form method="POST" className="modal-form" onSubmit={handleVerifyOtp}>
            <div className="form-item form-item-flex">
              <input
                type="text"
                name="otp"
                id="otp"
                placeholder="Enter OTP"
                className="form-input form-item-input-flex"
                value={otp}
                onChange={(e) => setotp(e.target.value)}
                disabled={isOtpVerified}
                required
              />
              <button
                type="submit"
                disabled={isOtpVerified}
                className={`auth-form-cta-flex btn-primary ${
                  isOtpVerified ? "btn-disabled" : ""
                }`}
              >
                Verify
              </button>
            </div>
            <p className="auth-footer-text">
              Didn't receive otp ?{" "}
              <Link className="auth-forget">Send Again</Link>
            </p>
          </form>

          <form method="POST" className="modal-form change-password-form" onSubmit={handleVerifyOtp}>
            <div className="form-item">
              <input
                type="text"
                name="otp"
                id="otp"
                placeholder="Enter OTP"
                className="form-input form-item-input-flex"
                value={otp}
                onChange={(e) => setotp(e.target.value)}
                disabled={!isOtpVerified}
                required
              />
            </div>
              <button
                type="submit"
                disabled={isOtpVerified}
                className={`auth-form-cta btn-primary ${
                  !isOtpVerified ? "btn-disabled" : ""
                }`}
              >
                Verify
              </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
