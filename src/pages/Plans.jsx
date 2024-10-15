import Check from "../assets/check.svg";

const Plans = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="dashboard-header-title">
          <h3 className="dashboard-header-title-normal">Dashboard</h3>
          <div className="dashboard-header-title-divider"></div>
          <h3 className="dashboard-header-title-main">Plans</h3>
        </div>
      </div>
      <div className="dashboard-main">
        <div className="plan-main-text">
          <p className="plan-main-para">
            At <span className="plan-main-para-span">Flipchat.link</span>, we
            offer a range of plans tailored to meet the diverse needs of our
            users. Whether you're just starting out, looking to grow, or
            managing a large business, we have a plan that will help you connect
            with your customers more effectively.
          </p>
        </div>

        <div className="plan-card-grid">
          <div className="plan-card-item">
            <div className="plan-card-item-header">
              <h3 className="plan-card-item-title">Plan - Essential</h3>
              <h3 className="plan-card-item-price">INR 499/month</h3>
              <p className="plan-card-item-sub-title">Features & Benefits</p>
            </div>
            <div className="plan-card-item-main">
              <div className="plan-card-list-item">
                <img
                  src={Check}
                  alt="check icon"
                  className="plan-card-list-icon"
                />
                <p className="plan-card-list-text">1 Custom Link</p>
              </div>
              <div className="plan-card-list-item">
                <img
                  src={Check}
                  alt="check icon"
                  className="plan-card-list-icon"
                />
                <p className="plan-card-list-text">
                  2 Whatsapp agent support per link
                </p>
              </div>
              <div className="plan-card-list-item">
                <img
                  src={Check}
                  alt="check icon"
                  className="plan-card-list-icon"
                />
                <p className="plan-card-list-text">Analytics Dashboard</p>
              </div>
              <div className="plan-card-list-item">
                <img
                  src={Check}
                  alt="check icon"
                  className="plan-card-list-icon"
                />
                <p className="plan-card-list-text">
                  Access to 24*7 email support
                </p>
              </div>
            </div>
            <button className="btn-primary cta-upgrade">Upgrade Now</button>
          </div>
          <div className="plan-card-item">
            <div className="plan-card-item-header">
              <h3 className="plan-card-item-title">Plan - Expand</h3>
              <h3 className="plan-card-item-price">INR 1999/month</h3>
              <p className="plan-card-item-sub-title">Features & Benefits</p>
            </div>
            <div className="plan-card-item-main">
              <div className="plan-card-list-item">
                <img
                  src={Check}
                  alt="check icon"
                  className="plan-card-list-icon"
                />
                <p className="plan-card-list-text">3 Custom Link</p>
              </div>
              <div className="plan-card-list-item">
                <img
                  src={Check}
                  alt="check icon"
                  className="plan-card-list-icon"
                />
                <p className="plan-card-list-text">
                  3 Whatsapp agent support per link
                </p>
              </div>
              <div className="plan-card-list-item">
                <img
                  src={Check}
                  alt="check icon"
                  className="plan-card-list-icon"
                />
                <p className="plan-card-list-text">Analytics Dashboard</p>
              </div>
              <div className="plan-card-list-item">
                <img
                  src={Check}
                  alt="check icon"
                  className="plan-card-list-icon"
                />
                <p className="plan-card-list-text">
                  Access to 24*7 email support
                </p>
              </div>
            </div>
            <button className="btn-primary cta-upgrade">Upgrade Now</button>
          </div>
          <div className="plan-card-item">
            <div className="plan-card-item-header">
              <h3 className="plan-card-item-title">Plan - Elite</h3>
              <h3 className="plan-card-item-price">INR 5999/month</h3>
              <p className="plan-card-item-sub-title">Features & Benefits</p>
            </div>
            <div className="plan-card-item-main">
              <div className="plan-card-list-item">
                <img
                  src={Check}
                  alt="check icon"
                  className="plan-card-list-icon"
                />
                <p className="plan-card-list-text">8 Custom Link</p>
              </div>
              <div className="plan-card-list-item">
                <img
                  src={Check}
                  alt="check icon"
                  className="plan-card-list-icon"
                />
                <p className="plan-card-list-text">
                  5 Whatsapp agent support per link
                </p>
              </div>
              <div className="plan-card-list-item">
                <img
                  src={Check}
                  alt="check icon"
                  className="plan-card-list-icon"
                />
                <p className="plan-card-list-text">Analytics Dashboard</p>
              </div>
              <div className="plan-card-list-item">
                <img
                  src={Check}
                  alt="check icon"
                  className="plan-card-list-icon"
                />
                <p className="plan-card-list-text">
                  Access to 24*7 email support & WhatsApp support
                </p>
              </div>
            </div>
            <button className="btn-primary cta-upgrade">Upgrade Now</button>
          </div>
        </div>

        <div className="plan-main-text">
          <p className="plan-main-para">
          <span className="plan-main-para-blue">Still Not Sure?</span> Our flexible plans allow you to choose exactly what you need. Start small and upgrade anytime as your business grows. If you’re ready to enhance your WhatsApp communication, choose a plan that suits your business and start experiencing the benefits today!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Plans;
