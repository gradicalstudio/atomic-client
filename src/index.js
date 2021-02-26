import React from "react";
import ReactDOM from "react-dom";
import "./scripts";
// import "./styles";
import "./css/atomic-d10870.webflow.css";
import "./css/normalize.css";
import "./css/webflow.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import IndexView from "./views/IndexView";
import reportWebVitals from "./reportWebVitals";
import { Preloader, Placeholder } from "react-preloading-screen";

ReactDOM.render(
  <React.StrictMode>
    <IndexView />
    {/* <Preloader>
      <IndexView />
      <Placeholder>
        <p style={{ fontSize: 26 }}>Loading...</p>
      </Placeholder>
    </Preloader> */}
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
