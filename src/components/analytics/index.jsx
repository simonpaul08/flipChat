import { ResponsiveBar } from "@nivo/bar";
import React, { useEffect, useState } from "react";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { getLast12Months } from "../../utils/utils";

const Analytics = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedType, setSelectedType] = useState("date");
  const [last12months, setLast12Months] = useState();
  const [selectedMonth, setSelectedMonth] = useState();
  const [analyticsData, setAnalyticsData] = useState([{}]);

  useEffect(() => {
    setSelectedType("day");
    const res = getLast12Months();
    if (res && res.length) {
      setLast12Months(res);
      setSelectedMonth(res[res.length - 1]);
    }
  }, []);

  return (
    <div className="analytics-chart">
      <h3 className="analytics-chart-title">Link Analytics</h3>
      <div className="analytics-date-selector">
        <div className="radio-group">
          <input
            type="radio"
            id="day"
            name="radio-selector"
            className="radio-group-input"
            checked={selectedType === "day"}
            onChange={(e) => setSelectedType("day")}
          />
          <label htmlFor="day" className="radio-group-text">
            Day
          </label>
        </div>
        <div className="radio-group">
          <input
            type="radio"
            id="month"
            name="radio-selector"
            className="radio-group-input"
            checked={selectedType === "month"}
            onChange={(e) => setSelectedType("month")}
          />
          <label htmlFor="month" className="radio-group-text">
            Month
          </label>
        </div>
        <div className="date-selector">
          <div className="date-selector-wrapper">
            {selectedType === "day" ? (
              <DatePicker
                value={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                className={""}
                clearIcon={null}
              />
            ) : (
              <div className="month-selector">
                <select
                  name="month"
                  id="month"
                  className="month-selector-input"
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                >
                  {last12months?.map((item) => {
                    return <option value={item}>{item}</option>;
                  })}
                </select>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="analytics-chart-block">
        <ResponsiveBar
          data={analyticsData}
          keys={["date", "clicks"]}
          indexBy="date"
          margin={{ top: 30, right: 10, bottom: 80, left: 30 }}
          padding={0.3}
          borderColor={"#ccc"}
          colors="#00b66c"
          colorBy="index"
          // layout="horizontal"
          axisLeft={{
            tickValues: 2,
            // tickRotation: 60,
          }}
          axisBottom={{
            // tickValues: 2,
            tickRotation: 40,
          }}
        />
      </div>
    </div>
  );
};

export default Analytics;
