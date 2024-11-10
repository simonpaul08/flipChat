import React, { useState } from "react";
import { countries } from "../utils/utils";
import * as yup from "yup";

const Profile = () => {

  const [isEdit, setIsEdit] = useState(false);

  const Schema = yup.object().shape({
    name: yup.string().required("name is required"),
    accountType: yup.string().required("account type is required"),

  })

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="dashboard-header-title">
          <h3 className="dashboard-header-title-normal">Dashboard</h3>
          <div className="dashboard-header-title-divider"></div>
          <h3 className="dashboard-header-title-main">My Profile</h3>
        </div>
      </div>
      <div className="dashboard-main">
        <div className="profile-container">
          <form method="POST" className="profile-form">
            <div className="profile-form-item">
              <label htmlFor="name" className="profile-form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="profile-form-input"
                placeholder="fullname..."
              />
            </div>
            <div className="profile-form-item">
              <label htmlFor="account-type" className="profile-form-label">
                Account Type
              </label>
              <select
                name="account-type"
                id="account-type"
                className="profile-form-input"
              >
                <option value={"individual"}>Individual</option>
                <option value={"business"}>Business</option>
              </select>
            </div>
            <div className="profile-form-item">
              <label htmlFor="country" className="profile-form-label">
                Country
              </label>
              <select
                name="country"
                id="country"
                className="profile-form-input"
              >
                {countries?.map((item, index) => {
                  return (
                    <option key={index + 1} value={item}>{item}</option>
                  )
                })}
              </select>
            </div>
            <div className="profile-form-item">
              <label htmlFor="number" className="profile-form-label">
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="profile-form-input"
                placeholder="phone number..."
              />
            </div>
            <div className="profile-form-item">
              <label htmlFor="sector" className="profile-form-label">
                Sector/Industry
              </label>
              <select
                name="sector"
                id="sector"
                className="profile-form-input"
              >
                <option value={"education"}>Education</option>
                <option value={"marketing"}>Marketing</option>
              </select>
            </div>
            <div className="profile-form-item">
              <label htmlFor="sector" className="profile-form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="profile-form-input"
                placeholder="password..."
              />
            </div>
            <div className="profile-form-item">
              <button type="button" className="btn-secondary profile-cta-edit">Edit Profile</button>
              <button type="submit" className="btn-primary profile-cta-edit">Save Details</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
