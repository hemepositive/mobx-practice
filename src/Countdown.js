import React from "react";
import { inject, observer } from "mobx-react";
import "./countdown.css";

const Form = observer(({ secondInput }) => {
  const _input = React.createRef();
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          console.log(_input.current.value);
          secondInput(_input.current.value);
          _input.current.value = "";
        }}
      >
        <input
          style={{ width: 100, textAlign: "center" }}
          type="number"
          min="1"
          placeholder="enter seconds"
          ref={_input}
          max="3600"
        />
        <button className="blue">submit</button>
      </form>
    </div>
  );
});

const Header = observer(() => <h2>Mobx CountDown</h2>);

const CountdownControl = observer(
  ({ status, pauseCountdown, resetCountdown }) => {
    return status !== "stopped" ? (
      <div>
        <button
          className={`${status === "paused" ? "blue" : "green"} `}
          onClick={pauseCountdown}
        >
          {status === "paused" ? "restart" : "pause"}
        </button>
        <button className="red" onClick={resetCountdown}>
          reset
        </button>
      </div>
    ) : null;
  }
);

const CountDown = observer(({ formattedResult }) => {
  return <h1>{formattedResult}</h1>;
});

// @observer
const CountdownMain = observer(
  class App extends React.Component {
    render() {
      let {
        formattedResult,
        secondInput,
        status,
        pauseCountdown,
        resetCountdown
      } = this.props.countStore;
      return (
        <div>
          <Header />
          <CountDown formattedResult={formattedResult} />
          {/* conditional for if "stopped" => render SUBMIT button */}
          {status === "stopped" && <Form secondInput={secondInput} />}
          {/* conditional in CountdownControl if !== "stopped" => render CountdownControl */}
          <CountdownControl
            status={status}
            pauseCountdown={pauseCountdown}
            resetCountdown={resetCountdown}
          />
        </div>
      );
    }
  }
);

// export const store = new CountStore();
export default inject("countStore")(observer(CountdownMain));
