import { useState } from "react";
import BackButton from "../components/common/BackButton";
import WarningIcon from "../assets/icon_warning.svg";
import CreatePremiumLink from "../components/CreatePremiumLink";
import CreateFreeLink from "../components/CreateFreeLink";

const TABS = {
  PREMIUM: "premium",
  FREE: "free",
};

const CreateLink = () => {
  const [currentTab, setCurrentTab] = useState(TABS.PREMIUM);


  const handleSwitchTab = (tab) => setCurrentTab(tab);
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="dashboard-header-title">
          <h3 className="dashboard-header-title-normal">Dashboard</h3>
          <div className="dashboard-header-title-divider"></div>
          <h3 className="dashboard-header-title-main">My Link</h3>
        </div>
      </div>
      <div className="dashboard-main">
        <div className="create-container">
          <div className="create-head">
            <BackButton />
          </div>
          <div className="create-main">
            <div className="create-switch-tabs">
              <div
                className={`switch-tab ${
                  currentTab === TABS.PREMIUM ? "switch-tab-active" : ""
                }`}
                onClick={() => handleSwitchTab(TABS.PREMIUM)}
              >
                <p className="switch-tab-text">Premium Link</p>
              </div>
              <div
                className={`switch-tab ${
                  currentTab === TABS.FREE ? "switch-tab-active" : ""
                }`}
                onClick={() => handleSwitchTab(TABS.FREE)}
              >
                <p className="switch-tab-text">Free Link</p>
              </div>
            </div>

            <div className="create-warning-container">
                <div className="warning">
                  <img src={WarningIcon} alt="warning icon" className="warning-icon"/>
                  <p className="warning-text">There are links available in your plan. Upgrade Now</p>
                </div>
            </div>

              {currentTab === TABS.PREMIUM && <CreatePremiumLink />}
              {currentTab === TABS.FREE && <CreateFreeLink />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateLink;
