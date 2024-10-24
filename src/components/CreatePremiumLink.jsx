import { useFormik } from 'formik';
import React from 'react';
import * as yup from "yup";

const CreatePremiumLink = () => {

    const Schema = yup.object().shape({
        username: yup.string().required("username is required"),
        agents: yup.array().of(
            yup.object().shape({
                agentNumber: yup.string().required("number is required"),
                countryCode: yup.string().required("country code is required")
            })
        ).required("agent number is required").min(1, "At least one agent is required"),
        message: yup.string().required("message is required")
    })
   
    const formik = useFormik({
        initialValues: {
            username: '',
            agents: [],
            
        }
    })

    
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
                    />
                </div>
                <div className="profile-form-item">
                    <label htmlFor="agent-1" className="profile-form-label">
                        Agent Number
                    </label>
                    <div className="create-form-number-block">
                        <select
                            id="countryCode"
                            name="countryCode"
                            className="profile-form-select"
                        >
                            <option value="+91">+91</option>
                        </select>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="profile-form-input"
                            placeholder="username..."
                        />
                    </div>
                </div>
                <div className="profile-form-item">
                    <label htmlFor="username" className="profile-form-label">
                        Agent Number
                    </label>
                    <div className="create-form-number-block">
                        <select
                            id="countryCode"
                            name="countryCode"
                            className="profile-form-select"
                        >
                            <option value="+91">+91</option>
                        </select>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="profile-form-input"
                            placeholder="username..."
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreatePremiumLink