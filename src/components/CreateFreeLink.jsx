import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";

const CreateFreeLink = () => {
  const Schema = yup.object().shape({
    username: yup.string().required("username is required"),
    agent: yup.object().shape({
      countryCode: yup.string().required("country code is required"),
      agentNumber: yup.string().required("agent number is required"),
    }),
    message: yup.string().required("message is required"),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      agent: {
        countryCode: "+91",
        agentNumber: "",
      },
      message: "",
    },
    validationSchema: Schema,
    onSubmit: handleSubmit,
  });
  return (
    <div className="create-form-container">
      <form method="POST" className="create-form profile-form">
        <div className="profile-form-item">
          <label htmlFor="username" className="profile-form-label">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="profile-form-input"
            placeholder="username..."
            value={formik.values.username}
            onChange={formik.handleChange}
          />
        </div>
        <div className="profile-form-item">
          <label htmlFor="agent-1" className="profile-form-label">
            Agent Number
          </label>
          <div className="create-form-number-block">
            <select
              id="countryCode"
              name={`agent.countryCode`}
              className="profile-form-select"
              value={formik.values.agent.countryCode}
              onChange={formik.handleChange}
            >
              <option value="+91">+91</option>
              <option value="+92">+92</option>
              <option value="+1">+1</option>
            </select>
            <input
              type="text"
              id="agentNumber"
              name={`agent.agentNumber`}
              className="profile-form-input"
              placeholder="agent number..."
              value={formik.values.agent.agentNumber}
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <div className="profile-form-item">
          <label htmlFor="message" className="profile-form-label">
            Message
          </label>
          <textarea
            type="text"
            id="message"
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            className="profile-form-input"
            placeholder="message here..."
            rows={3}
          />
        </div>
        <div className="profile-form-item">
          <button type="submit" className="btn-primary create-cta">
            Create Link
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateFreeLink;
