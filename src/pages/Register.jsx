import React from 'react';
import Logo from "../assets/Flipchat-Transperent.png"
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='auth'>
      <div className="auth-container">
        <form className='auth-form'>
          <div className="auth-form-header">
            <div className="auth-logo-container">
              <img src={Logo} alt="flichat logo" className='auth-logo' />
              <div className='auth-logo-divider'></div>
              <h3 className='auth-logo-text'>Register</h3>
            </div>
            <h3 className='auth-title'>Register now to get access to creating premium links for your brand 🚀</h3>
          </div>
          <div className="auth-form-body">
            <div className="form-item">
              <input type="text" name='name' className='form-input' placeholder='Enter name' />
            </div>
            <div className="form-item">
              <input type="email" name='email' className='form-input' placeholder='Enter email' />
            </div>
            <div className="form-item">
              <input type="password" name='password' className='form-input' placeholder='Enter password' />
            </div>
            <div className="form-item">
              <input type="password" name='confirmPassword' className='form-input' placeholder='Confirm password' />
            </div>

            <button type='submit' className='auth-form-cta btn-primary'>Register</button>
            <p className='auth-footer-text'>Already have an account ? <Link className='auth-redirect' to="/login">Login Here</Link></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register