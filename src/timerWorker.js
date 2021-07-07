const timerWorker = () => {
  const time = new Date();
  let state = {
    hour: 0,
    minute: 0,
    second: 0,
    instance: 0
  };
  const getTime = (time) => {
    state.hour = time.getHours();
    state.minute = time.getMinutes();
    state.second = time.getSeconds();
  };
  getTime(time);
  let interval = null;
  // no-restricted-globals
  // eslint-disable-next-line
  self.onmessage = function (e) {
    if (e.data.message === "getTime") {
      getTime(new Date());
    }

    state.instance++;
    // eslint-disable-next-line
    self.postMessage(state); // es
    // console.log("message received in main script");
    if (interval) clearInterval(interval);
    interval = setInterval(() => {
      getTime(new Date());
      self.postMessage(state); // eslint-disable-line no-restricted-globals
    }, 1000);
  };
};

export default timerWorker;
