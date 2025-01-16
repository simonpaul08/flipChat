import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../components/common/BackButton";
import CopyIcon from "../assets/icon_copy.svg";
import { Tooltip } from "react-tooltip";
import axios from "axios";
import { SERVER_URL } from "../utils/utils";
import { toast, Toaster } from "sonner";

const LinkAnalytics = () => {
  const { id } = useParams();
  const [currentLink, setCurrentLink] = useState(null);

  const copyToClpboard = () => {
    navigator.clipboard.writeText(`flipchat.link`);
  };

  // fetch link by id
  const fetchLinkById = async (id) => {
    try {
      const res = await axios.get(`${SERVER_URL}api/link/shortLink/${id}`);
      if (res.data) {
        setCurrentLink(res.data?.link);
      }
    } catch (error) {
      console.log(error);
      if (error?.response?.data?.message) {
        toast.error(error?.response?.data?.message);
      } else if (error?.message) {
        toast.error(error?.message);
      } else {
        toast.error("something went wrong");
      }
    }
  };

  useEffect(() => {
    if(id){
        fetchLinkById(id)
    }
  }, []);

  return (
    <>
      <Toaster richColors position="top-center" duration={2000} />
      <div className="dashboard">
        <div className="dashboard-header">
          <div className="dashboard-header-title">
            <h3 className="dashboard-header-title-normal">Dashboard</h3>
            <div className="dashboard-header-title-divider"></div>
            <h3 className="dashboard-header-title-main">Analytics</h3>
          </div>
        </div>
        <div className="dashboard-main">
          <div className="analytics-container">
            <div className="create-head">
              <BackButton />
            </div>
            <div className="analytics-main">
              <div className="analytics-title">
                <h3 className="analytics-link">flipchat.link/{currentLink?.username}</h3>
                <img
                  src={CopyIcon}
                  alt="copy icon"
                  className="analytics-link-copy"
                  onClick={copyToClpboard}
                  data-tooltip-id="copy-unknown-link"
                  data-tooltip-content="copy to clipboard"
                  data-tooltip-delay-show={200}
                />
                <Tooltip id="copy-unknown-link" />
              </div>
              <div className="analytics-agents"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LinkAnalytics;
