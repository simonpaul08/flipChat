import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import SidebarContextProvider from "./context/SidebarContext.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <SidebarContextProvider>
          <App />
        </SidebarContextProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
