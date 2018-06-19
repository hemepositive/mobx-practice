import React from "react";
// import { observable, action, computed, decorate } from "mobx";
import { observer, inject } from "mobx-react";

const ControlledForm = ({ formStore }) => (
  <div>
    <hr />
    <h2> Controlled form with mobx actions</h2>
    <input
      style={{ width: 200, textAlign: "center" }}
      value={formStore.inputText}
      onChange={formStore.handleInputChanged}
      onFocus={formStore.clearOnBlur}
    />
    <p>
      Output: <em>{formStore.inputText}</em>
    </p>
  </div>
);

export default inject("formStore")(observer(ControlledForm));
