import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import LifeStylePage from "./pages/LifeStylePage/LifeStylePage";

const App = () => (
  <div className="container">
    <div>Name: sb-micro</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
  </div>
);
ReactDOM.render(<LifeStylePage />, document.getElementById("app"));
