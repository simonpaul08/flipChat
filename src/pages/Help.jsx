import React from "react";

const Help = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="dashboard-header-title">
          <h3 className="dashboard-header-title-normal">Dashboard</h3>
          <div className="dashboard-header-title-divider"></div>
          <h3 className="dashboard-header-title-main">Help</h3>
        </div>
      </div>
      <div className="dashboard-main">
        <div className="plan-main-text">
          <p className="plan-main-para">
            For any issue, please don't hesitate to reach out to us at: <span className="plan-main-para-span">flipchat@link.com</span>
          </p>
        </div>

        <div className="help-accordian">
          <div className="help-accordion-item">
            <div className="help-accordion-title">
              <p className="help-accordion-title-text"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
