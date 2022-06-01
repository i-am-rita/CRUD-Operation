import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import Update from "./components/Update";
import "./index.css";
import { BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);