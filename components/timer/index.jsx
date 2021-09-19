import React, { useEffect, useState } from "react";
import {
  BeReadyIn,
  Clock,
  Content,
  Go,
  Numbers,
  Reset,
  Wrapper,
} from "./styles";

const Timer = () => {
  const [timer, setTimer] = useState(0);
  const [getReady, setGetReady] = useState(5);
  const [isRunning, setIsRunning] = useState(false);

  const displaySeconds = () => {
    const leadingZero = "0";
    return timer < 10 ? leadingZero + timer : timer;
  };

    useEffect(() => {
      let interval = null;

      if (isRunning) {
        interval = setInterval(() => {
          setTime((time) => time + 10);
        }, 10);
      } else {
        clearInterval(interval);
      }
      return () => {
        clearInterval(interval);
      };
    }, [isActive, isPaused]);

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target.innerText === "GO") {
      setIsRunning(true);
      runDownGetReadyTimer();
    }
    if (e.target.innerText === "STOP") {
      setIsRunning(false);
    }

    console.log(e.target.innerText);
  };

  return (
    <Wrapper>
      <Content>
        <Clock>
          <Numbers>{displaySeconds()}</Numbers>
        </Clock>
        <Go isRunning={isRunning} onClick={handleClick}>
          {isRunning ? "STOP" : "GO"}
        </Go>
        <Reset onClick={handleClick}>Reset</Reset>
        <BeReadyIn>Be ready in {getReady}</BeReadyIn>
      </Content>
    </Wrapper>
  );
};

export default Timer;
