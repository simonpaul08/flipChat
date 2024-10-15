import React from "react";

const Profile = () => {
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
              <label htmlFor="name" className="profile-form-label">Name</label>
              <input type="text" id="name" name="name" className="profile-form-input" placeholder="fullname..."/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
