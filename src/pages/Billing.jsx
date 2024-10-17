import React from "react";

const Billing = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="dashboard-header-title">
          <h3 className="dashboard-header-title-normal">Dashboard</h3>
          <div className="dashboard-header-title-divider"></div>
          <h3 className="dashboard-header-title-main">Billing</h3>
        </div>
      </div>
      <div className="dashboard-main">
        <div className="billing-container">
          <table className="billing-table">
              <thead className="billing-table-head">
                <th className="billing-table-th">Transaction Id</th>
                <th className="billing-table-th">Date</th>
                <th className="billing-table-th">Amount</th>
                <th className="billing-table-th">Plan Type</th>
                <th className="billing-table-th">Status</th>
              </thead>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Billing;
