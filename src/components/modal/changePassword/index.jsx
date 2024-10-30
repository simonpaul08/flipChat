import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../loader/loader";
import axios from "axios";
import * as yup from "yup";
import { useFormik } from "formik";
import { toast, Toaster } from "sonner";

const SERVER_URL = import.meta.env.VITE_APP_SERVER_URL;

const ChangePassword = () => {
  const [otp, setotp] = useState("");
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()

  const formSchema = yup.object().shape({
    password: yup.string().required("password is required"),
    confirmPassword: yup.string()
      .oneOf([yup.ref('password')], 'Passwords must match')
      .required('Confirm Password is required'),
  })

  const handleChangePassword = async (values) => {
    let body = {
      otp: otp,
      password: values?.password
    }
    setIsLoading(true)
    try {
      const res = await axios.post(`${SERVER_URL}api/auth/forget/verify`, { ...body }, {
        headers: {
          'Content-Type': "application/json"
        }
      })
      console.log(res.data)
      if(res.data){
        toast.success(res.data?.message)
        setTimeout(() => {
          navigate("/login")
        }, 1000)
      }
    } catch (error) {
      console.log(error)
      if (error?.response?.data?.message) {
        toast.error(error?.response?.data?.message);
      } else if (error?.message) {
        toast.error(error?.message);
      } else {
        toast.error("something went wrong");
      }
    } finally {
      setIsLoading(false)
    }
  }

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: ""
    },
    validationSchema: formSchema,
    onSubmit: handleChangePassword
  })

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setIsLoading(true)

    try {
      const res = await axios.get(
        `${SERVER_URL}api/otp/verify/${otp}`);

      if (res.data) {
        toast.success(res.data?.message)
        setIsOtpVerified(true);
      }
    } catch (error) {
      console.log(error);
      if (error?.response?.data?.message) {
        toast.error(error?.response?.data?.message);
      } else if (error?.message) {
        toast.error(error?.message);
      } else {
        toast.error("something went wrong");
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      {isLoading && <Loader />}
      <Toaster richColors duration={2000} position="top-center" />
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
                  className={`auth-form-cta-flex btn-primary ${isOtpVerified ? "btn-disabled" : ""
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

            <form method="POST" className="modal-form change-password-form" onSubmit={formik.handleSubmit}>
              <div className="form-item">
                <input
                  type="text"
                  name="password"
                  id="password"
                  placeholder="Enter password"
                  className="form-input form-item-input-flex"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  disabled={!isOtpVerified}
                  required
                />
              </div>
              <div className="form-item">
                <input
                  type="text"
                  name="confirmPassword"
                  id="confirm Password"
                  placeholder="Enter password again"
                  className="form-input form-item-input-flex"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  disabled={!isOtpVerified}
                  required
                />
              </div>
              <button
                type="submit"
                disabled={!isOtpVerified}
                className={`auth-form-cta btn-primary ${!isOtpVerified ? "btn-disabled" : ""
                  }`}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
