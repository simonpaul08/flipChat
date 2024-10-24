import React from 'react'

const CreateFreeLink = () => {
    return (
        <div className="create-form-container">
            <form method="POST" className="create-form profile-form">
                <div className="profile-form-item">
                    <label htmlFor="username" className="profile-form-label">
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        className="profile-form-input"
                        placeholder="username..."
                    />
                </div>
                <div className="profile-form-item">
                    <label htmlFor="agent-1" className="profile-form-label">
                        Agent Number
                    </label>
                    <div className="create-form-number-block">
                        <select
                            id="countryCode"
                            name="countryCode"
                            className="profile-form-select"
                        >
                            <option value="+91">+91</option>
                        </select>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="profile-form-input"
                            placeholder="username..."
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateFreeLink