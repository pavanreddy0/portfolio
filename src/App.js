import React from "react";
import ReactGA from "react-ga";
import "./App.scss";
import Main from "./containers/Main";

const TRACKING_ID = "G-ZJGEV36KR1";
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
