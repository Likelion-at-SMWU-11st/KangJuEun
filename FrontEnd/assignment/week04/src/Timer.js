import React, { useState, useEffect } from "react";

const TimerComponent = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // 1초마다 타이머를 갱신합니다.
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // useEffect에서 반환된 함수는 컴포넌트가 언마운트될 때 정리(cleanup)하는 역할을 합니다.
    // 타이머의 갱신을 중지시킵니다.
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>타이머</h1>
      <p>경과 시간: {seconds}초</p>
    </div>
  );
};

export default TimerComponent;
