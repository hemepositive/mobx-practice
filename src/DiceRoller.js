import React from "react";
import { inject, observer } from "mobx-react";
import ReactDice from "react-dice-complete";
import "react-dice-complete/dist/react-dice-complete.css";

// const Form = observer(({ numberOfDice }) => {
const DiceForm = inject("diceStore")(
  observer(({ diceStore }) => {
    const _input = React.createRef();
    return (
      <div>
        <hr />
        <h2>Dice Roller using react-dice-complete</h2>
        <form
          onSubmit={e => {
            e.preventDefault();
            console.log(_input.current.value);
            diceStore.getNumberOfDice(_input.current.value);
            _input.current.value = "";
          }}
        >
          <input
            style={{ width: 200, textAlign: "center" }}
            type="number"
            min={1}
            ref={_input}
            placeholder="enter number of dice"
            max={6}
          />
          <button className="blue">submit</button>
        </form>
      </div>
    );
  })
);

const diceRef = React.createRef();
const DiceRoller = ({ diceStore }) => (
  <div>
    <DiceForm />
    <ReactDice
      numDice={diceStore.numberOfDice}
      rollDone={diceStore.rollDoneCallback}
      ref={diceRef}
    />
    <button className="red" onClick={() => diceRef.current.rollAll()}>
      Roll All
    </button>
  </div>
);

export default inject("diceStore")(observer(DiceRoller));
