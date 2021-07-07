import * as React from "react";
console.log("worker");
//convert a javascript object, representing a worker to
// text so that a Worker can be created

const importWorker = (workercode) => {
  let code = workercode.toString();
  code = code.substring(code.indexOf("{") + 1, code.lastIndexOf("}"));

  const blob = new Blob([code], { type: "application/javascript" });
  const worker_script = URL.createObjectURL(blob);

  return worker_script;
};
// import importWorker from './importWorker';
const useWorker = (workercode, listener) => {
  const [worker, setWorker] = React.useState(null);
  React.useEffect(() => {
    // const worker = new Worker(worker_script);
    const workerURL = importWorker(workercode);
    const worker = new Worker(workerURL);
    worker.addEventListener("message", listener);
    worker.postMessage({ init: true });

    setWorker(worker);
    return () => {
      worker.terminate();
      URL.revokeObjectURL(workerURL);
    };
    //eslint-disable-next-line
  }, [workercode]);
  return worker;
};

export default useWorker;
