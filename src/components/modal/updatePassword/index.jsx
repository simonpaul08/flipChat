import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import Divider from "../../common/Divider";

const UpdatePasswordModal = () => {
  const Schema = yup.object().shape({
    currentPassword: yup
      .string()
      .min(6, "invalid password")
      .required("please enter current password"),
    newPassword: yup
      .string()
      .min(6, "password must be of atleast 6 digits")
      .required("please enter new password"),
    confirmNewPassword: yup
      .string()
      .oneOf([yup.ref("newPassword")], "passwords must match")
      .required("please confirm the password"),
  });

  const handleSubmit = (values) => {
    if (formik.errors) {
      formik.validateForm();
    }
  };

  const formik = useFormik({
    validationSchema: Schema,
    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
    validateOnChange: false,
    onSubmit: handleSubmit,
  });

  return (
    <div className="modal">
      <div className="modal-container">
        <div className="modal-body">
          <h3 className="modal-title">Update Password</h3>
          <p className="modal-para"></p>
          <form method="POST" className="modal-form" onSubmit={formik.onSubmit}>
            <div className="form-item">
              <input
                type="password"
                name="currentPassword"
                id="currentPassword"
                placeholder="Enter current password"
                className="form-input form-item-input-flex"
                value={formik.values.currentPassword}
                onChange={formik.handleChange}
                required
              />
              {formik.errors.currentPassword && (
                <p className="auth-error">{formik.errors.currentPassword}</p>
              )}
            </div>
            <Divider />
            <button type="submit" className="auth-form-cta btn-primary">
              Update Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePasswordModal;
