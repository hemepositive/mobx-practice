import React from "react";
import { decorate, observable, action, computed } from "mobx";

// export class CountStore {
class CountStore {
  timer;
  inputSeconds;
  status;
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.timer = null;
    this.inputSeconds = 0;
    this.status = "stopped";
  }

  secondInput(num) {
    if (!num) return;
    this.inputSeconds += num;
    this.countDown();
  }

  // USING ANOTHER FORMAT, less complicated; from https://codepen.io/seoh/pen/PPZYQy?editors=0110
  // get formattedSeconds() {
  get formattedResult() {
    return (
      ("0" + Math.floor(this.inputSeconds / 60)).slice(-2) +
      ":" +
      ("0" + this.inputSeconds % 60).slice(-2)
    );
  }

  countDown() {
    this.status = "started";
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      this.inputSeconds -= 1;
      if (this.inputSeconds === 0) {
        clearInterval(this.timer);
        this.status = "stopped";
      }
    }, 1000);
  }

  pauseCountdown() {
    if (this.status === "started") {
      this.status = "paused";
      clearInterval(this.timer);
    } else if (this.status === "paused") {
      this.countDown();
    }
  }

  resetCountdown() {
    this.status = "stopped";
    this.inputSeconds = 0;
    clearInterval(this.timer);
  }
}
decorate(CountStore, {
  inputSeconds: observable,
  status: observable,
  secondInput: action.bound,
  formattedResult: computed,
  countDown: action.bound,
  pauseCountdown: action.bound,
  resetCountdown: action.bound
});

class FormStore {
  inputText;
  radioInput;
  radioSelected;
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.inputText = "enter some text";
    this.radioSelected = "3";
  }
  setinputText = newText => {
    this.inputText = newText;
  };
  handleInputChanged = event => {
    event.preventDefault();
    this.setinputText(event.target.value);
  };
  clearOnBlur = () => {
    this.inputText = "";
  };
  handleOptionChange = event => {
    event.preventDefault();
    this.radioSelected = event.target.value;
  };
  // radioSubmit = event => {
  //   event.preventDefault();
  //   this.radioSelected = event.target.value;
  //   console.log("radio submit", this.radioSelected);
  // };
}

decorate(FormStore, {
  inputText: observable,
  radioSelected: observable,
  setinputText: action,
  handleInputChanged: action,
  handleOptionChange: action
  // radioSubmit: action
});

class DiceStore {
  numberOfDice;
  diceInput;
  // diceRef;
  // outline;
  // outlineColor;
  // margin;
  // faceColor;
  // dotColor;
  // dieSize;
  // rollTime;
  // disableIndividual;

  constructor(rootStore, initialDice = 3) {
    this.rootStore = rootStore;
    this.numberOfDice = initialDice;
    // this.diceRef = React.createRef();
  }

  getNumberOfDice = num => {
    if (!num) return;
    this.numberOfDice = num;
  };

  rollAll() {
    // this.reactDice.rollAll();
    console.log("rollAll");
  }

  rollDoneCallback(num) {
    console.log(`You rolled a ${num}`);
  }
}

decorate(DiceStore, {
  numberOfDice: observable,
  // diceRef: observable,
  getNumberOfDice: action,
  rollAll: action,
  rollDoneCallback: action
});

const LIST = ["Matthew", "Mark", "Luke", "John"];
class ListStore {
  list;
  timer;
  word;
  activeElement;
  // lastElement;
  // nextElement;
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.list = [];
    this.word = "";
    this.timerID = null;
    this.milliseconds = 0;
  }

  get getLen() {
    return this.list.length;
  }
  fillList() {
    this.list = LIST;
  }

  getLastElement() {
    const lastElement = this.list[this.list.length - 1];
    return lastElement === undefined
      ? (this.word = "")
      : (this.word = lastElement);
  }
  getNextElement() {
    const nextElement = this.list[this.list.length + 1];
    return nextElement === undefined
      ? (this.word = "")
      : (this.word = nextElement);
  }
}
decorate(ListStore, {
  list: observable,
  timerID: observable,
  word: observable,
  getLen: computed,
  fillList: action,
  getLastElement: action,
  getNextElement: action
});

class UIStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.isOpen = false;
  }
  setOpen() {
    this.setOpen = !this.setOpen;
  }
}
decorate(UIStore, {
  isOpen: observable,
  setOpen: action
});

class RootStore {
  constructor() {
    this.countStore = new CountStore(this);
    this.formStore = new FormStore(this);
    this.diceStore = new DiceStore(this);
    this.listStore = new ListStore(this);
    this.uiStore = new UIStore(this);
  }
}

const rootStore = new RootStore();
export default rootStore;
