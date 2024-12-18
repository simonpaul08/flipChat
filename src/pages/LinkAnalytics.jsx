import React from 'react'
import { useParams } from 'react-router-dom'
import BackButton from '../components/common/BackButton';
import Divider from '../components/common/Divider';
import CopyIcon from "../assets/icon_copy.svg";
import { Tooltip } from 'react-tooltip';

const LinkAnalytics = () => {

    const { id } = useParams();

    const copyToClpboard = () => {
        navigator.clipboard.writeText(`flipchat.link`);
    };
    return (
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
                            <h3 className='analytics-link'>Flipchat.com/{id}</h3>
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
                        <div className="analytics-agents">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LinkAnalytics