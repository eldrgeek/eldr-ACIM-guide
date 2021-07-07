import React from "react";
import ReactDOM from "react-dom";
import ACIMTimer from "./ACIMTimer";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <ACIMTimer />
    </ChakraProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
