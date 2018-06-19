import React from "react";
import DevTools from "mobx-react-devtools";

import Countdown from "./Countdown";
import ControlledForm from "./ControlledForm";
import DiceCSS from "./DiceCSS";
import DiceRoller from "./DiceRoller";
import RadioForm from "./RadioForm";

// this version just running Countdown alone as single file
const App = () => (
  <div>
    <h1>Playing Around With Mobx</h1>
    <hr />
    <Countdown />
    <DiceRoller />
    <ControlledForm />
    <RadioForm />
    <DiceCSS />
    <DevTools />
  </div>
);

export default App;
