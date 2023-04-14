import React from "react";
import Ball from "./Ball";
import ballLogic from "../ballLogic/ballLogic";


const Screen = () => {
  const { removeLastBall, removeAll, settingBall, ballPosition } = ballLogic();



  return (
    <div className="App" onClick={settingBall}>

      {ballPosition.map((position, index) => (
        <Ball key={index} positions={position} />
      ))}


      <div className="div">
        <button onClick={removeLastBall}>Remover último</button>
        <button onClick={removeAll}>Remover todos</button>
      </div>
    </div>
  );
};

export default Screen;
