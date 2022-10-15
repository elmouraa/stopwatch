import { Button } from "./Button";
import { Time } from "./Time";
import { useStopwatch } from "./use-stopwatch";

export const Stopwatch = () => {
  const {
    time: { seconds, minutes },
    start,
    stop,
    reset,
    isRunning,
  } = useStopwatch();

  return (
    <div className="max-w-2xl w-full flex flex-col items-center space-y-12">
      <Time seconds={seconds} minutes={minutes} />
      <div className="flex space-x-8 items-center justify-between">
        {isRunning ? (
          <Button variant="error" onClick={stop}>
            Stop
          </Button>
        ) : (
          <Button variant="success" onClick={start}>
            Start
          </Button>
        )}
        <Button variant="info" onClick={reset}>
          Reset
        </Button>
      </div>
    </div>
  );
};
