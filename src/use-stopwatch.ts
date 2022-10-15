import { useEffect, useState } from "react";

export const useStopwatch = () => {
  const [time, setTime] = useState({ seconds: 0, minutes: 0 });
  const [isRunning, setIsRunning] = useState(false);

  const start = () => {
    setIsRunning(true);
  };

  const stop = () => {
    setIsRunning(false);
  };

  const reset = () => {
    setTime({ seconds: 0, minutes: 0 });
    setIsRunning(false);
  };

  useEffect(() => {
    if (isRunning) {
      const id = setInterval(() => {
        setTime((curr) => ({
          seconds: curr.seconds < 60 ? curr.seconds + 1 : 0,
          minutes: curr.seconds >= 60 ? curr.minutes + 1 : curr.minutes,
        }));
      }, 1000);

      return () => clearInterval(id);
    }
  }, [isRunning]);

  return { time, isRunning, start, stop, reset };
};
