import React from "react";
interface Positions {
  y: number;
  x: number;
}
const ballLogic = () => {
  const [ballPosition, setBallPosition] = React.useState<Positions[]>([]);

  function removeLastBall(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.stopPropagation();
    const removeLast = ballPosition.slice(0, -1);
    if (removeLast) setBallPosition(removeLast);
    if (ballPosition.length === 1) localStorage.clear();
  }

  function removeAll(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.stopPropagation();
    setBallPosition([]);
    localStorage.clear();
  }

  function settingBall(event: React.MouseEvent<HTMLDivElement>) {
    const positions = {
      y: event.pageY,
      x: event.pageX,
    };
    setBallPosition((prev) => [...prev, positions]);
  }

  React.useEffect(() => {
    if (localStorage.balls) {
      const localStorageBalls = JSON.parse(localStorage.balls);
      setBallPosition(localStorageBalls);
    }
  }, []);

  React.useEffect(() => {
    if (ballPosition.length) {
      localStorage.balls = JSON.stringify(ballPosition);
    }
  }, [ballPosition]);
  return { removeLastBall, removeAll, settingBall, ballPosition };
};

export default ballLogic;
