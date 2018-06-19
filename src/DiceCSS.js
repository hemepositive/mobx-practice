import React from "react";
import "./dice.css";

const DiceCSS = () => (
  <div>
    <hr />
    <h2>Pictures of CSS dice.</h2>
    <p style={{ fontSize: "4em" }}>
      <span className="dice dice-1" title="Dice 1" />
      <span className="dice dice-2" title="Dice 2" />
      <span className="dice dice-3" title="Dice 3" />
      <span className="dice dice-4" title="Dice 4" />
      <span className="dice dice-5" title="Dice 5" />
      <span className="dice dice-6" title="Dice 6" />
      4em
    </p>
  </div>
);

export default DiceCSS;
