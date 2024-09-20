import React from 'react'
import LOGO from "../assets/Flipchat-Transperent.png"
import { Link } from 'react-router-dom'

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
            <div className="landing-header-nav">
              
              <Link/><Link/>
            </div>
            <div className="landing-header-cta">
              <button className='auth-cta btn-primary'>Login / Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing