import React from 'react'
import LOGO from "../assets/Flipchat-Transperent.png"

const Landing = () => {
  return (
    <div className='landing'>
      <div className="landing-section">
        <div className="landing-container">
          
          {/* landing header */}
          <div className="landing-header">
            <div className="landing-header-logo">
              <img src={LOGO} alt="flipchat-logo" className='landing-logo'/>
            </div>
            <div className="landing-header-nav"></div>
            <div className="landing-header-cta"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing