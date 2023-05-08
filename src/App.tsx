import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { BrowserRouter as Router } from "react-router-dom";
import { ChannelRoutes } from "./routes/ChannelRoutes";

ReactDOM.render(
  <Router>
    <ChannelRoutes />
  </Router>,
  document.getElementById("app")
);
