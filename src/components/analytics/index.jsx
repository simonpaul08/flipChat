import { ResponsiveBar } from "@nivo/bar";
import React, { useEffect, useState } from "react";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { getDayBreakUps, getLast12Months, SERVER_URL } from "../../utils/utils";
import { Loader } from "rsuite";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast, Toaster } from "sonner";
import dayjs from "dayjs";

const Analytics = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedType, setSelectedType] = useState("date");
  const [last12months, setLast12Months] = useState();
  const [selectedMonth, setSelectedMonth] = useState();
  const [analyticsData, setAnalyticsData] = useState([
    { date: new Date("02/02/2025"), clicks: 10 },
  ]);
  const [LinkAnalytics, setLinkAnalytics] = useState(null);

  // fetch day analytics by id
  const fetchDayAnalyticsById = async (id, selectedDate) => {
    setIsLoading(true);
    try {
      let body = {
        id: id,
        date: dayjs(selectedDate),
      };
      const res = await axios.post(`${SERVER_URL}api/analytics/date`, {
        ...body,
      });
      if (res.data) {
        console.log(res.data);
        setLinkAnalytics(res.data?.data);
        filterChartData(res.data?.data?.data);
      }
    } catch (error) {
      console.log(error);
      if (error?.response?.data?.message) {
        toast.error(error?.response?.data?.message);
      } else if (error?.message) {
        toast.error(error?.message);
      } else {
        toast.error("something went wrong");
      }
    } finally {
      setIsLoading(false);
    }
  };

  // fetch month analytics by id
  const fetchMonthAnalyticsById = async (id, selectedMonth) => {
    setIsLoading(true);
    try {
      let body = {
        id: id,
        month: selectedMonth,
      };
      const res = await axios.post(`${SERVER_URL}api/analytics/month`, {
        ...body,
      });
      if (res.data) {
        console.log(res.data);
        setLinkAnalytics(res.data?.data);
        filterMonthlyData(res.data?.data)
      }
    } catch (error) {
      console.log(error);
      if (error?.response?.data?.message) {
        toast.error(error?.response?.data?.message);
      } else if (error?.message) {
        toast.error(error?.message);
      } else {
        toast.error("something went wrong");
      }
    } finally {
      setIsLoading(false);
    }
  };

  // filter chart data
  const filterChartData = (value) => {
    const data = value ?? [];
    const dayBreaksUps = getDayBreakUps();

    const hourlyData = dayBreaksUps.map((item) => ({ ...item }));

    if (data?.length) {
      data?.forEach((item) => {
        const createdAt = new Date(item?.createdAt);
        const hour = createdAt.getHours();
        const minutes = createdAt.getMinutes();

        let hourIndex = hour;
        if (minutes > 0) {
          hourIndex = hour % 24;
        } else {
          hourIndex = (hour + 1) % 24;
        }

        hourlyData[hourIndex].clicks += 1;
      });
      setAnalyticsData(hourlyData);
    } else {
      setAnalyticsData(hourlyData);
    }
  };

  // filter monthly data
  const filterMonthlyData = (value) => {
    const links = value ?? [];

    let data = [];

    // handle here
    links?.forEach(item => {
      const innerData = item?.data;
      data = [...data, ...innerData]
    })


    const last12months = last12months.map((item) => {
      return {
        date: item,
        clicks: 0
      }
    });

    if (data?.length) {
      data?.forEach((item) => {
        const createdAt = new Date(item?.createdAt);
        const hour = createdAt.getHours();
        const minutes = createdAt.getMinutes();

        let hourIndex = hour;
        if (minutes > 0) {
          hourIndex = hour % 24;
        } else {
          hourIndex = (hour + 1) % 24;
        }

        hourlyData[hourIndex].clicks += 1;
      });
      setAnalyticsData(hourlyData);
    } else {
      setAnalyticsData(hourlyData);
    }
  };

  // handle change date
  const handleChangeDate = (value) => {
    setSelectedDate(new Date(value));
    fetchDayAnalyticsById(id, new Date(value));
  };

  // handle change day & month
  const handleChangeDayMonth = (value) => {
    if (value === "day") {
      setSelectedType(value);
      fetchDayAnalyticsById(id, selectedDate);
    } else if (value === "month") {
      setSelectedType(value);
      fetchMonthAnalyticsById(id, selectedMonth);
    }
  };

  useEffect(() => {
    setSelectedType("day");
    const res = getLast12Months();
    if (res && res.length) {
      setLast12Months(res);
      setSelectedMonth(res[res.length - 1]);
    }
  }, []);

  useEffect(() => {
    if (id && LinkAnalytics === null) {
      fetchDayAnalyticsById(id, selectedDate);
    }
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <Toaster richColors position="top-center" duration={2000} />
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
              onChange={(e) => handleChangeDayMonth("day")}
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
              onChange={(e) => handleChangeDayMonth("month")}
            />
            <label htmlFor="month" className="radio-group-text">
              Month
            </label>
          </div>
          <div className="date-selector">
            <div className="date-selector-wrapper">
              {selectedType === "day" && (
                <DatePicker
                  value={selectedDate}
                  onChange={(date) => handleChangeDate(date)}
                  className={""}
                  clearIcon={null}
                />
              )}

              {selectedType === "month" && (
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
            keys={["clicks"]}
            indexBy="date"
            margin={{ top: 30, right: 10, bottom: 80, left: 30 }}
            padding={0.3}
            borderColor={"#ccc"}
            colors="#00b66c"
            colorBy="index"
            axisLeft={{
              tickValues: 2,
            }}
            axisBottom={{
              tickValues: 2,
              tickRotation: 45,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Analytics;
