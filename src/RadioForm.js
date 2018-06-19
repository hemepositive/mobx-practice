import React from "react";
import { inject, observer } from "mobx-react";

const RadioForm = ({ formStore }) => (
  <div>
    <hr />
    <h2>React Radio Inputs</h2>
    <form>
      <p>Please select from these seconds</p>
      <div>
        <input
          type="radio"
          id="choice1"
          name="seconds"
          value="3"
          checked={formStore.radioSelected === "3"}
          onChange={formStore.handleOptionChange}
        />
        <label>3</label>
        <input
          type="radio"
          id="choice2"
          name="seconds"
          value="5"
          checked={formStore.radioSelected === "5"}
          onChange={formStore.handleOptionChange}
        />
        <label>5</label>
        <input
          type="radio"
          id="choice3"
          name="seconds"
          value="7"
          checked={formStore.radioSelected === "7"}
          onChange={formStore.handleOptionChange}
        />
        <label>7</label>
      </div>
      {/* REACT reloads on submit if changed by onChange (BUG as of 16.2)
      <div>
        <button type="submit" onSubmit={formStore.radioSubmit}>
          Submit
        </button>
      </div> */}
      <p>
        Selected:&nbsp;{formStore.radioSelected
          ? formStore.radioSelected
          : "none selected"}
      </p>
    </form>
  </div>
);

export default inject("formStore")(observer(RadioForm));
