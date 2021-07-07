import * as React from "react";
import workercode from "./workercode";
import timerWorker from "./timerWorker";
import { Button, Box } from "@chakra-ui/react";
import useWorker from "./useWorker";

const ACIMTimer = () => {
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
    <Box>
      <h1> BG test </h1>
      Button test {state.count} {state.instance}
      <br />
      {timerState.hour} {timerState.minute} {timerState.second}
      <br />
      <Button m={2} onClick={resetCount}>
        Reset
      </Button>
      <Button onClick={resetTimer}>Timer</Button>
    </Box>
  );
};

export default ACIMTimer;
