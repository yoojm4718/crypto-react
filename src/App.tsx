import React from "react";
import GlobalStyles from "./GlobalStyle";
import Router from "./Router";
import { ReactQueryDevtools } from "react-query/devtools";

function App() {
  return (
    <>
      <Router />
      <GlobalStyles />
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  );
}

export default App;
