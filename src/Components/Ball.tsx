import React from "react";
import styles from "./Ball.module.css";

interface BallPositions {
  x: number;
  y: number;
}

interface Positions {
  positions: BallPositions;
}

const Ball = ({ positions }: Positions) => {
  

  return (
    <>
      {" "}
      {typeof positions.x === "number" && typeof positions.y === "number" ? (
        <div
          className={styles.ball}
          style={{
            top: `${positions.y - 15}px`,
            left: `${positions.x - 15}px`,
          }}
        ></div>
      ) : null}
    </>
  );
};

export default Ball;
