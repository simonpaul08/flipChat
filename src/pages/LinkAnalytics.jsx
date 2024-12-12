import React from 'react'
import { useParams } from 'react-router-dom'

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
                <p>link - {id}</p>
            </div>
        </div>
    )
}

export default LinkAnalytics