import React, { useState } from 'react';
import Logo from "../assets/Flipchat-Transperent.png";
import GoogleIcon from "../assets/icon_google.svg";
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from "yup";
import axios from 'axios';
import Loader from '../components/loader/loader';
import VerifyOTP from '../components/modal/verifyOTP';

const SERVER_URL = import.meta.env.VITE_APP_SERVER_URL;

const Register = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [isVerify, setIsVerify] = useState(false);
  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    name: yup.string()
      .min(3, "minimum 3 characters")
      .required("name is required"),
    email: yup.string().required("email is required"),
    password: yup.string().required("password is required"),
    confirmPassword: yup.string()
      .oneOf([yup.ref('password')], 'Passwords must match')
      .required('Confirm Password is required'),
  })

  const handleSubmit = async (values) => {
    let body = {
      name: values?.name,
      email: values?.email,
      password: values?.password
    }
    setIsLoading(true)
    try {
      const res = await axios.post(`${SERVER_URL}api/auth/register`, { ...body }, {
        headers: {
          'Content-Type': "application/json"
        }
      });

      console.log(res.data)
      if(res.data){
        setIsVerify(true)
      }
    } catch (e) {
      console.log(e)
    } finally {
      setIsLoading(false)
    }
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: formSchema,
    onSubmit: handleSubmit
  })

  const handleGoogleSignUp = async () => {
    window.open(`${SERVER_URL}google`, "_self")
  }


  return (
    <>
    {isLoading && <Loader />}
    {isVerify && <VerifyOTP />}
      <div className='auth'>
        <div className="auth-container">
          <form className='auth-form auth-register' onSubmit={formik.handleSubmit} method='POST'>
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
                <input type="text" name='name' className='form-input' placeholder='Enter name'
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
                {/* {formik.errors.name && <p className='auth-error'>{formik.errors.name}</p>} */}
              </div>
              <div className="form-item">
                <input type="email" name='email' className='form-input' placeholder='Enter email'
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                {/* {formik.errors.email && <p className='auth-error'>{formik.errors.email}</p>} */}
              </div>
              <div className="form-item">
                <input type="password" name='password' className='form-input' placeholder='Enter password'
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
                {/* {formik.errors.password && <p className='auth-error'>{formik.errors.password}</p>} */}
              </div>
              <div className="form-item">
                <input type="password" name='confirmPassword' className='form-input' placeholder='Confirm password'
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                />
                {/* {formik.errors.confirmPassword && <p className='auth-error'>{formik.errors.confirmPassword}</p>} */}
              </div>

              <button type='submit' className='auth-form-cta btn-primary'>Register</button>
              <p className='auth-footer-text'>Already have an account ? <Link className='auth-redirect' to="/login">Login Here</Link></p>
            </div>

            <div className='auth-google-block'>
                <p className='auth-form-seperator'>or</p>
                <div className='auth-google-btn' onClick={handleGoogleSignUp}>
                  <img src={GoogleIcon} className='auth-google-btn-icon'/>
                  <p className='auth-google-btn-text'>Sign up with google</p>
                </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register