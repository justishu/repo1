import React, { useState } from "react";
import "./Practice.css";
function Practice() {
  const [num, setNum] = useState(0);

  const inc = () => {
    setNum(num + 1);
  };

  const dec = () => {
    if (num !== 0) {
      setNum(num - 1);
    }
  };

  return (
    <React.Fragment>
      <div>
        <button onClick={dec}>&lt;</button>
        <h1>{num}</h1>
        <button onClick={inc}>&gt;</button>
      </div>
    </React.Fragment>
  );
}

export default Practice;
