const workercode = () => {
  console.log("loaded workercode");
  let state = {
    count: 0,
    instance: 0,
    limit: 0
  };
  let interval = null;
  // no-restricted-globals
  // eslint-disable-next-line
  self.onmessage = function (e) {
    if (e.data.message === "setlimit") {
      state.limit = e.data.limit;
      state.count = 0;
    }

    state.instance++;
    // eslint-disable-next-line
    self.postMessage(state); // es
    // console.log("message received in main script");
    if (interval) clearInterval(interval);
    interval = setInterval(() => {
      // ++ + ' main: ' + e.data + 'dhhhdf';
      console.log(state.count++ + " Message back to main script");
      // self.postMessage(api.message()); // eslint-disable-line no-restricted-globals
      self.postMessage(state); // eslint-disable-line no-restricted-globals
    }, 1000);
  };
};

export default workercode;
