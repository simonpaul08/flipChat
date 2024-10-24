import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";

const CreatePremiumLink = () => {
  const Schema = yup.object().shape({
    username: yup.string().required("username is required"),
    agents: yup
      .array()
      .of(
        yup.object().shape({
          agentNumber: yup.string().required("number is required"),
          countryCode: yup.string().required("country code is required"),
        })
      )
      .required("agent number is required")
      .min(1, "At least one agent is required"),
    message: yup.string().required("message is required"),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      agents: [{ agentNumber: "", countryCode: "+91" }],
      message: "",
    },
    validationSchema: Schema,
    onSubmit: handleSubmit,
  });

  const handleAddMore = () => {
    console.log("add more");
    formik.setFieldValue("agents", [
      ...formik.values.agents,
      { agentNumber: "", countryCode: "+91" },
    ]);
  };

  return (
    <div className="create-form-container">
      <form method="POST" className="create-form profile-form" onSubmit={formik.handleSubmit}>
        <div className="profile-form-item">
          <label htmlFor="username" className="profile-form-label">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            className="profile-form-input"
            placeholder="username..."
          />
        </div>
        {formik.values.agents.map((field, index) => {
          return (
            <div key={index} className="profile-form-item">
              <label htmlFor={`agents-${index}`} className="profile-form-label">
                Agent Number
              </label>
              <div className="create-form-number-block">
                <select
                  id={`agents-${index}`}
                  name={`agents.${index}.countryCode`}
                  className="profile-form-select"
                  value={field.countryCode}
                  onChange={formik.handleChange}
                >
                  <option value="+91">+91</option>
                  <option value="+92">+92</option>
                  <option value="+1">+1</option>
                </select>
                <input
                  type="text"
                  id={`agents-${index}`}
                  name={`agents.${index}.agentNumber`}
                  value={field.agentNumber}
                  onChange={formik.handleChange}
                  className="profile-form-input"
                  placeholder="agent number..."
                />
              </div>
            </div>
          );
        })}
        <div className="profile-form-item">
          <button
            type="button"
            className="btn-black add-more-cta"
            onClick={handleAddMore}
          >
            Add More
          </button>
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
            <button type="submit" className="btn-primary create-cta">Create Link</button>
        </div>
      </form>
    </div>
  );
};

export default CreatePremiumLink;
