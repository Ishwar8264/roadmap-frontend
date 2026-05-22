import React from "react";

type CounterProps = {
  super: void;
};

type CounterState = {
  count: number;
};

class Counter extends React.Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increaseCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>

        <button onClick={this.increaseCount}>Increase</button>
      </div>
    );
  }
}

export default Counter;
