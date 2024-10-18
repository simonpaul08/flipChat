import React from "react";
import { PLANS, PLANS_RATE, STATUS } from "../utils/utils";

const Billing = () => {
  const Transactions = [
    {
      id: 1,
      date: "24th Sep, 2024",
      amount: PLANS_RATE.EXPAND,
      planType: PLANS.EXPAND,
      status: STATUS.SUCCESS,
    },
    {
      id: 2,
      date: "24th Sep, 2024",
      amount: PLANS_RATE.ESSENTIAL,
      planType: PLANS.ESSENTIAL,
      status: STATUS.FAILURE,
    },
    {
      id: 3,
      date: "15th Aug, 2024",
      amount: PLANS_RATE.ESSENTIAL,
      planType: PLANS.ESSENTIAL,
      status: STATUS.SUCCESS,
    },
    {
      id: 4,
      date: "9th July, 2024",
      amount: PLANS_RATE.EXPAND,
      planType: PLANS.EXPAND,
      status: STATUS.SUCCESS,
    },
    {
      id: 5,
      date: "26th June, 2024",
      amount: PLANS_RATE.ELITE,
      planType: PLANS.ELITE,
      status: STATUS.SUCCESS,
    },
    {
      id: 6,
      date: "24th June, 2024",
      amount: PLANS_RATE.EXPAND,
      planType: PLANS.EXPAND,
      status: STATUS.FAILURE,
    },
    {
      id: 7,
      date: "20th May, 2024",
      amount: PLANS_RATE.ESSENTIAL,
      planType: PLANS.ESSENTIAL,
      status: STATUS.SUCCESS,
    },
    {
      id: 8,
      date: "15th April, 2024",
      amount: PLANS_RATE.ESSENTIAL,
      planType: PLANS.ESSENTIAL,
      status: STATUS.SUCCESS,
    },
    {
      id: 9,
      date: "9th March, 2024",
      amount: PLANS_RATE.EXPAND,
      planType: PLANS.EXPAND,
      status: STATUS.SUCCESS,
    },
    {
      id: 10,
      date: "8th March, 2024",
      amount: PLANS_RATE.ELITE,
      planType: PLANS.ELITE,
      status: STATUS.FAILURE,
    },
  ];

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
            <tbody className="billing-table-body">
              {Transactions?.map((item) => {
                return (
                  <tr className="billing-table-row">
                    <td className="billing-table-data">{item?.id}</td>
                    <td className="billing-table-data">{item?.date}</td>
                    <td className="billing-table-data">RS {item?.amount}</td>
                    <td className="billing-table-data">{item.planType}</td>
                    <td className="billing-table-data">
                      <div className={`billing-status-tag billing-${item?.status ?? ""}`}>
                        <p className="billing-status">{item?.status}</p>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Billing;
