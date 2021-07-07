import * as React from "react";
import workercode from "./workercode";
import timerWorker from "./timerWorker";

import useWorker from "./useWorker";

const MyFunction = () => {
  const [state, setState] = React.useState({});
  const [timerState, setTimerState] = React.useState({});
  const onMessage = (ev) => {
    setState(ev.data);
  };
  const onTimerMessage = (ev) => {
    setTimerState(ev.data);
  };

  const worker = useWorker(workercode, onMessage);
  const tWorker = useWorker(timerWorker, onTimerMessage);

  const resetCount = () => {
    worker.postMessage({ message: "setlimit", limit: 20 });
  };
  const resetTimer = () => {
    tWorker.postMessage({ message: "getTime" });
  };

  return (
    <div>
      <h1> BG test </h1>
      Button test {state.count} {state.instance}
      <br />
      {timerState.hour} {timerState.minute} {timerState.second}
      <br />
      <button onClick={resetCount}>Reset</button>
      <button onClick={resetTimer}>Timer</button>
    </div>
  );
};

export default MyFunction;
