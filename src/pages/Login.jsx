import React, { useState } from "react";
import Logo from "../assets/Flipchat-Transperent.png";
import GoogleIcon from "../assets/icon_google.svg";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import Loader from "../components/loader/loader";

const SERVER_URL = import.meta.env.VITE_APP_SERVER_URL;

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const formScehma = yup.object().shape({
    email: yup.string().required("email is required"),
    password: yup.string().required("password is required"),
  });

  const handleSubmit = async (values) => {
    setIsLoading(true);

    try {
      const res = await axios.post(
        `${SERVER_URL}api/auth/login`,
        { ...values },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(res.data);
      if (res.data) {
        navigate("/dashboard");
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: formScehma,
    onSubmit: handleSubmit,
  });

  return (
    <>
      {isLoading && <Loader />}
      <div className="auth">
        <div className="auth-container">
          <form
            className="auth-form"
            onSubmit={formik.handleSubmit}
            method="POST"
          >
            <div className="auth-form-header">
              <div className="auth-logo-container">
                <img src={Logo} alt="flichat logo" className="auth-logo" />
                <div className="auth-logo-divider"></div>
                <h3 className="auth-logo-text">Login</h3>
              </div>
              <h3 className="auth-title">
                New to flipchat ?{" "}
                <Link to="/register" className="auth-redirect">
                  Register Here
                </Link>
              </h3>
            </div>
            <div className="auth-form-body">
              <div className="form-item">
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="Enter email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                {/* {formik.errors.email && (
                  <p className="auth-error">{formik.errors.email}</p>
                )} */}
              </div>
              <div className="form-item">
                <input
                  type="password"
                  name="password"
                  className="form-input"
                  placeholder="Enter password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
                {/* {formik.errors.password && (
                  <p className="auth-error">{formik.errors.password}</p>
                )} */}
              </div>
              <button type="submit" className="auth-form-cta btn-primary">
                Login
              </button>
              <p className="auth-footer-text">
                Unable to login ?{" "}
                <Link className="auth-forget" to="/login">
                  Forget password
                </Link>
              </p>
            </div>

            <div className="auth-google-block">
              <p className="auth-form-seperator">or</p>
              <div className="auth-google-btn">
                <img src={GoogleIcon} className="auth-google-btn-icon" />
                <p className="auth-google-btn-text">Sign up with google</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
