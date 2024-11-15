import { useFormik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";
import { useAuthContext } from "../context/AuthContext";
import { AGENT_PER_PLAN, phoneRegExp, PLANS } from "../utils/utils";
import { toast, Toaster } from "sonner";
import Loader from "./loader/loader";
import axios from "axios";

const SERVER_URL = import.meta.env.VITE_APP_SERVER_URL;
const CreatePremiumLink = () => {

  const { userDetails } = useAuthContext();
  const isFree = userDetails?.planType === PLANS.FREE;
  const [isLoading, setIsLoading] = useState(false);

  const Schema = yup.object().shape({
    username: yup.string().required("username is required"),
    agents: yup
      .array()
      .of(
        yup.object().shape({
          countryCode: yup.string().required("country code is required"),
          number: yup.string()
            .matches(phoneRegExp, "phone number is not valid")
            .required("number is required!"),
        })
      )
      .required("agent number is required")
      .min(1, "At least one agent is required"),
    message: yup.string().required("message is required"),
  });

  const handleSubmit = async (values) => {
    if(formik.errors){
      formik.validateForm()
    }

    setIsLoading(true)

    let body = {
      agents: values?.agents, 
      message: values?.message,
      username: values?.username,
      userId: userDetails?.id,
    }

    try {
      const res = await axios.post(`${SERVER_URL}api/link/create/premium`, { ...body })
      if(res.data){
        toast.success(res.data?.message)
      }
    }catch(error) {
      if (error?.response?.data?.message) {
        toast.error(error?.response?.data?.message);
      } else if (error?.message) {
        toast.error(error?.message);
      } else {
        toast.error("something went wrong");
      }
    }finally {
      setIsLoading(false)
    }
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      agents: [{ number: "", countryCode: "+91" }],
      message: "",
    },
    validationSchema: Schema,
    onSubmit: handleSubmit,
    validateOnChange: false
  });


  // handle add more
  const handleAddMore = () => {
    console.log("add more");
    if (formik.values.agents.length >= AGENT_PER_PLAN[userDetails?.planType]) {
      toast.warning("upgrade you plan to add more agents")
      return
    } else {
      formik.setFieldValue("agents", [
        ...formik.values.agents,
        { number: "", countryCode: "+91" },
      ]);
    }
  };

  return (
    <>
    {isLoading && <Loader />}
    <Toaster richColors position="top-center" duration={2000} />
    <div className="create-form-container">
      <form method="POST" className="create-form profile-form" onSubmit={formik.handleSubmit}>
        <div className="profile-form-item">
          <label htmlFor="username" className="profile-form-label">
            Username
          </label>
          <div className="input-conatiner">
            <input
              type="text"
              id="username"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              className="profile-form-input"
              placeholder="username..."
              disabled={isFree}
            />
            {formik.errors.username && (
              <p className="auth-error">{formik.errors.username}</p>
            )}
          </div>

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
                  disabled={isFree}
                >
                  <option value="+91">+91</option>
                  <option value="+92">+92</option>
                  <option value="+1">+1</option>
                </select>
                <div className="input-container">
                  <input
                    type="text"
                    id={`agents-${index}`}
                    name={`agents.${index}.number`}
                    value={field.number}
                    onChange={formik.handleChange}
                    className="profile-form-input"
                    placeholder="agent number..."
                    disabled={isFree}
                  />
                  {formik.errors.agents && (
                    <p className="auth-error">{formik.errors.agents[index]?.number}</p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
        {!isFree && <div className="profile-form-item">
          <button
            type="button"
            className="btn-black add-more-cta"
            onClick={handleAddMore}
            disabled={isFree}
          >
            Add More {formik.values.agents.length}/{AGENT_PER_PLAN[userDetails?.planType]}
          </button>
        </div>}
        <div className="profile-form-item">
          <label htmlFor="message" className="profile-form-label">
            Message
          </label>
          <div className="input-container">
            <textarea
              type="text"
              id="message"
              name="message"
              value={formik.values.message}
              onChange={formik.handleChange}
              className="profile-form-input"
              placeholder="message here..."
              rows={3}
              disabled={isFree}
            />
            {formik.errors.message && (
              <p className="auth-error">{formik.errors.message}</p>
            )}
          </div>
        </div>
        <div className="profile-form-item">
          <button type="submit" className="btn-primary create-cta" disabled={isFree}>Create Link</button>
        </div>
      </form>
    </div>
    </>
  );
};

export default CreatePremiumLink;
