

const Plans = () => {
  return (
    <div className='dashboard'>
      <div className="dashboard-header">
        <div className="dashboard-header-title">
          <h3 className="dashboard-header-title-normal">Dashboard</h3>
          <div className="dashboard-header-title-divider"></div>
          <h3 className="dashboard-header-title-main">Plans</h3>
        </div>
      </div>
      <div className="dashboard-main">
        <div className="plan-main-text">
          <p className="plan-main-para">At <span className="plan-main-para-span">Flipchat.link</span>, we offer a range of plans tailored to meet the diverse needs of our users. Whether you're just starting out, looking to grow, or managing a large business, we have a plan that will help you connect with your customers more effectively.</p>
        </div>

        <div className="plan-card-grid">
          <div className="plan-card-item">
            <div className="plan-card-item-header">
              <h3 className="plan-card-item-title">Plan - Essential</h3>
              <h3 className="plan-card-item-price">INR 499/month</h3>
              <p className="plan-card-item-sub-title">Features & Benefits</p>
            </div>
          </div>
          <div className="plan-card-item"></div>
          <div className="plan-card-item"></div>
        </div>
      </div>
    </div>
  )
}

export default Plans