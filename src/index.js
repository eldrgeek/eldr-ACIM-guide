import React from "react";
import ReactDOM from "react-dom";
import MyFunction1 from "./myFunction1";

function App() {
  return (
    <div className="App">
      <MyFunction1 />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
