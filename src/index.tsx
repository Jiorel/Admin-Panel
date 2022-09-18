import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./contexts";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
