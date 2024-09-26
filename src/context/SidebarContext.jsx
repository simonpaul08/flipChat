import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const SidebarContext = createContext(null);

export const useSidebarContext = () => {
  return useContext(SidebarContext);
};

const SidebarContextProvider = ({ children }) => {
  const [currentTab, setCurrentTab] = useState("dashboard");
  const location = useLocation();
  // handle change tab
  const handleChangeTab = (tab) => {
    console.log(tab)
    setCurrentTab(tab);
  };

  let items = {
    currentTab,
    handleChangeTab,
  };

  useEffect(() => {
    const path = location.pathname;
    const match = path.match(/[^/]+$/);
    if (match) {
      handleChangeTab(match[0]);
    }
  }, []);

  return (
    <SidebarContext.Provider value={items}>{children}</SidebarContext.Provider>
  );
};

export default SidebarContextProvider;
