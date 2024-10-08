import "../commonModal.css";

const VerifyOTP = () => {
  return (
    <div className="modal">
        <div className="modal-container">
             <div className="modal-body">
                <h3 className="modal-title">Verify Your Email</h3>
                <p className="modal-para">A 6 digit verification code has been sent to your email</p>
                <form method="POST" className="modal-form">
                    <div className="form-item">
                        <input type="text" name="otp" id="otp" placeholder="Enter OTP" className="form-input"/>
                    </div>
                    <button type='submit' className='auth-form-cta btn-primary'>Verify</button>
                </form>
             </div>
        </div>
    </div>
  )
}

export default VerifyOTP