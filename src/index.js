import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";

import "./styles.css";
import App from "./App";

import rootStore from "./Stores";

// this version just running Countdown as single file
const Root = () => (
  <Provider {...rootStore}>
    <App />
  </Provider>
);
const rootElement = document.getElementById("root");
ReactDOM.render(<Root />, rootElement);
