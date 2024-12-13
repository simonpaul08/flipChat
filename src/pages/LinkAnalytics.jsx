import React from 'react'
import { useParams } from 'react-router-dom'
import BackButton from '../components/common/BackButton';

const LinkAnalytics = () => {

    const { id } = useParams();

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
                        <h3 className='analytics-link'>Flipchat.com/</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LinkAnalytics