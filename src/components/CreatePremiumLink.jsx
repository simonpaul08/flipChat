import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { useAuthContext } from "../context/AuthContext";
import { AGENT_PER_PLAN, LINKS_PER_PLAN, phoneRegExp, PLANS } from "../utils/utils";
import { toast, Toaster } from "sonner";
import axios from "axios";
import Warning from "./common/Warning";
import DeleteIcon from "../assets/icon_delete.svg";
import LandingModal from "./landingModal";
import { useNavigate } from "react-router-dom";
import Error from "./common/Error";
import Loader from "./loader";

const SERVER_URL = import.meta.env.VITE_APP_SERVER_URL;
const CreatePremiumLink = () => {

  const { userDetails } = useAuthContext();
  const navigate = useNavigate();
  const isFree = userDetails?.planType === PLANS.FREE;
  const [isLoading, setIsLoading] = useState(false);
  const [isModal, setIsModal] = useState(false)
  const [currentLink, setCurrentLink] = useState("");
  const [premiumLinkCount, setPremiumLinkCount] = useState(0);

  const Schema = yup.object().shape({
    username: yup.string().matches(/^\S*$/, "username cannot contain spaces").required("username is required"),
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

  // handle submit
  const handleSubmit = async (values) => {
    if (formik.errors) {
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
      if (res.data) {
        toast.success(res.data?.message)
        setCurrentLink(res.data?.shortLink?.username)
        setIsModal(true)
      }
    } catch (error) {
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

  // handle delete agent
  const handleDeleteAgent = (index) => {
    const updatedAgents = [...formik.values.agents];
    updatedAgents.splice(index, 1)
    formik.setFieldValue("agents", updatedAgents)
  }

  const getPremiumLinkCount = async (id) => {
    setIsLoading(true);

    try {
      const res = await axios.get(`${SERVER_URL}api/link/premium/count/${id}`);
      if (res.data) {
        setPremiumLinkCount(res.data?.count);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseModal = () => {
    setIsModal(false);
    navigate("/dashboard")
  }

  const handleGetPremium = () => {
    navigate("/dashboard/plans")
  }

  useEffect(() => {
    if (userDetails?.id) {
      getPremiumLinkCount(userDetails?.id)
    }
  }, [userDetails])

  return (
    <>
      {isModal && (
        <LandingModal
          handleCloseModal={handleCloseModal}
          handleAuth={handleGetPremium}
          unknownLink={currentLink}
          isPremium={true}
        />
      )}
      {isLoading && <Loader />}
      <Toaster richColors position="top-center" duration={2000} />
      <div className="create-form-container">
        <div className="create-warning-container">
          { userDetails?.planType !== PLANS.FREE && formik.values.agents.length >= AGENT_PER_PLAN[userDetails?.planType] && <Warning
            text={"You’ve exceeded the allowed number of agents for your plan."}
            linkText={"Upgrade Now"}
            link={"/dashboard/plans"}
          />}
          {userDetails?.planType !== PLANS.FREE && premiumLinkCount >= LINKS_PER_PLAN[userDetails?.planType] && <Error text={"You ran out of premium links."} linkText={"Upgrade Now"} link={"/dashboard/plans"} />}

        </div>

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
                disabled={isFree || premiumLinkCount >= LINKS_PER_PLAN[userDetails?.planType]}
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
                    disabled={isFree || premiumLinkCount >= LINKS_PER_PLAN[userDetails?.planType]}
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
                      disabled={isFree || premiumLinkCount >= LINKS_PER_PLAN[userDetails?.planType]}
                      maxLength={12}
                      minLength={6}
                    />
                    {formik.errors.agents && (
                      <p className="auth-error">{formik.errors.agents[index]?.number}</p>
                    )}
                  </div>

                  {index !== 0 && <div className="form-delete-agent" onClick={() => handleDeleteAgent(index)}>
                    <img src={DeleteIcon} className="delete-icon" />
                  </div>}
                </div>
              </div>
            );
          })}
          {!isFree && <div className="profile-form-item">
            <button
              type="button"
              className="btn-black add-more-cta"
              onClick={handleAddMore}
              disabled={isFree || premiumLinkCount >= LINKS_PER_PLAN[userDetails?.planType]}
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
                disabled={isFree || premiumLinkCount >= LINKS_PER_PLAN[userDetails?.planType]}
              />
              {formik.errors.message && (
                <p className="auth-error">{formik.errors.message}</p>
              )}
            </div>
          </div>
          <div className="profile-form-item">
            <button type="submit" className="btn-primary create-cta" disabled={isFree || premiumLinkCount >= LINKS_PER_PLAN[userDetails?.planType]}>Create Link</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreatePremiumLink;
