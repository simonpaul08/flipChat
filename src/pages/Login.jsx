import React from 'react';
import Logo from "../assets/Flipchat-Transperent.png"
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='auth'>
            <div className="auth-container">
                <form className='auth-form'>
                    <div className="auth-form-header">
                        <div className="auth-logo-container">
                            <img src={Logo} alt="flichat logo" className='auth-logo' />
                            <div className='auth-logo-divider'></div>
                            <h3 className='auth-logo-text'>Login</h3>
                        </div>
                        <h3 className='auth-title'>New to flipchat ? <Link to="/register" className='auth-redirect'>Register Here</Link></h3>   
                    </div>
                    <div className="auth-form-body">
                        <div className="form-item">
                            <input type="email" name='email' className='form-input' placeholder='Enter email' />
                        </div>
                        <div className="form-item">
                            <input type="password" name='password' className='form-input' placeholder='Enter password' />
                        </div>
                        <button type='submit' className='auth-form-cta btn-primary'>Login</button>
                        <p className='auth-footer-text'>Unable to login ? <Link className='auth-forget' to="/login">Forget password</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login