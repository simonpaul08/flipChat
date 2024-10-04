import React from 'react';
import "./landingModal.css";
import WhatsAppIcon from "../../assets/whatsapp-icon.svg";
import CheckIcon from "../../assets/check.svg";

const LandingModal = ({ handleCloseModal, handleAuth }) => {
    return (
        <div className='landingModal-overlay'>
            <div className="landingModal-content">
                <div className='landingModal-header'>
                    <span className='landingModal-header-icon' onClick={handleCloseModal}>x</span>
                </div>
                <h3 className='landingModal-title'>This is your WhatsApp short link</h3>
                <p className='landingModal-para'>Copy and share it anywhere you want to be contacted instantly. (Use flipchat.link/abcd to send the message)</p>
                <div className='landingModal-highlight'>
                    <img src={WhatsAppIcon} alt="whatsapp icon" className='landingModal-highlight-image' />
                    <h3 className='landingModal-highlight-text'>flipchat.link/abcd</h3>
                </div>
                <div className="landingModal-premium">
                    <p className='landingModal-premium-para'>Get a premium plan from flipchat with: </p>
                    <div className="landingModal-features">
                        <div className="landingModal-features-item">
                            <img
                                src={CheckIcon}
                                alt="check icon"
                                className="landingModal-features-item-icon"
                            />
                            <p className="landingModal-features-item-para">
                                Branded links, FlipChat.link/YourBrand
                            </p>
                        </div>
                        <div className="landingModal-features-item">
                            <img
                                src={CheckIcon}
                                alt="check icon"
                                className="landingModal-features-item-icon"
                            />
                            <p className="landingModal-features-item-para">
                                Clicks analytics by hour, day and month
                            </p>
                        </div>
                        <div className="landingModal-features-item">
                            <img
                                src={CheckIcon}
                                alt="check icon"
                                className="landingModal-features-item-icon"
                            />
                            <p className="landingModal-features-item-para">
                                Edit phone, user message and URL anytime
                            </p>
                        </div>
                        <div className="landingModal-features-item">
                            <img
                                src={CheckIcon}
                                alt="check icon"
                                className="landingModal-features-item-icon"
                            />
                            <p className="landingModal-features-item-para">
                                Appear as a result in our search engine
                            </p>
                        </div>
                        <div className="landingModal-features-item">
                            <img
                                src={CheckIcon}
                                alt="check icon"
                                className="landingModal-features-item-icon"
                            />
                            <p className="landingModal-features-item-para">Email support</p>
                        </div>

                        <button onClick={handleAuth} className='landingModal-premium-cta btn-primary'>Get Premium Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingModal