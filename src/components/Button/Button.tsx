import React, { useState } from "react";
import ReactDOM from "react-dom";

const Buttom = () => {
  const [test, setTest] = useState(false);
  return (
    <div className="container">
      <div>Name: sb-micro</div>
      <div>Framework: react</div>
      <div>Language: TypeScript</div>
      <div>CSS: Empty CSS</div>
    </div>
  );
};

export default Buttom;
