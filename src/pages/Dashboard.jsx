import React, { useEffect, useState } from "react";
import SearchIcon from "../assets/search-icon.svg";
import { useNavigate } from "react-router-dom";
import Loader from "../components/loader/loader";
import { Toaster } from "sonner";
import axios from "axios";
import { useAuthContext } from "../context/AuthContext";
import Warning from "../components/common/Warning";

const SERVER_URL = import.meta.env.VITE_APP_SERVER_URL;
const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [freeLinks, setFreeLinks] = useState([]);
  const navigate = useNavigate();
  const { userDetails } = useAuthContext();

  // get free links
  const getFreeLinks = async (id) => {
    setIsLoading(true);

    try {
      const res = await axios.get(`${SERVER_URL}api/link/${userDetails?.id}`);
      if (res.data) {
        setFreeLinks(res.data?.links);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreate = () => {
    navigate("create");
  };

  // handle navigate link
  const handleNavigateLink = (id) => {
    navigate(`link/${id}`)
  }

  useEffect(() => {
    if (userDetails?.id) {
      getFreeLinks(userDetails?.id);
    }
  }, [userDetails]);
  return (
    <>
      {isLoading && <Loader />}
      <Toaster richColors position="top-center" duration={2000} />
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
            <button
              className="dashboard-main-header-cta btn-primary"
              onClick={handleCreate}
            >
              Create New
            </button>
          </div>
          <div className="dashboard-main-content">
            {!freeLinks?.length && (
              <Warning
                text={"You don't have any links present."}
                linkText={"Create One Now"}
                link={"/dashboard/create"}
              />
            )}
            <div className="dashboard-grid">
              {freeLinks?.map((item) => {
                return (
                  <div key={item?._id} className="dashboard-grid-item"
                    onClick={() => handleNavigateLink(item?._id)}
                  >
                    <h3 className="dashboard-grid-item-link">
                      flipchat.link/{item?.username}
                    </h3>
                    <p className="dashboard-grid-item-message">
                      "{item?.message}"
                    </p>
                    <div
                      className={`dashboard-grid-item-tag plan-${item?.linkType?.toLowerCase() ?? ""
                        }`}
                    >
                      <p className="plan-tag">{item?.linkType}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
