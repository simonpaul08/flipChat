import React, { useState } from "react";
import SearchIcon from "../assets/search-icon.svg";

const Dashboard = () => {

  const [links, setLinks] = useState([
    {
      id: 1,
      link: "flipchat.link/demo1",
      message: "Hey, What's Up ?",
      type: "elite"
    },
    {
      id: 2,
      link: "flipchat.link/demo2",
      message: "This is a demo 2 link",
      type: "essential"
    },
    {
      id: 3,
      link: "flipchat.link/demo3",
      message: "demo of expand plan Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, dolor.",
      type: "expand" 
    },
    {
      id: 4,
      link: "flipchat.link/demo4",
      message: "This is a demo 4 link",
      type: "elite"
    },
    {
      id: 5,
      link: "flipchat.link/demo5",
      message: "This is a free demo 5 link",
      type: "free"
    },
  ])
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="dashboard-header-title">
          <h3 className="dashboard-header-title-normal">Dashboard</h3>
          <div className="dashboard-header-title-divider"></div>
          <h3 className="dashboard-header-title-main">My Links</h3>
        </div>
      </div>
      <div className="dashboard-main">
        <div className="dashboard-main-header">
          <div className="dashboard-search-item">
            <input
              type="text"
              className="dashboard-search-input"
              name="search"
              placeholder="Search Here"
            />
            <img src={SearchIcon} alt="search icon" className="search-icon" />
          </div>
          <button className="dashboard-main-header-cta btn-primary">Create New</button>
        </div>
        <div className="dashboard-main-content">
          <div className="dashboard-grid">
            {links?.map(item => {
              return (
                <div key={item?.id} className="dashboard-grid-item">
                  <h3 className="dashboard-grid-item-link">{item?.link}</h3>
                  <p className="dashboard-grid-item-message">"{item?.message}"</p>
                  <div className={`dashboard-grid-item-tag plan-${item?.type ?? ""}`}>
                    <p className="plan-tag">{item?.type}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
