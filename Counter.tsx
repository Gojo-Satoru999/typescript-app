// Step 1: Import necessary modules from React and define the component as a TypeScript file.
import React, { Component } from 'react';

// Step 2: Define the type for the state using an interface.
interface CounterState {
  count: number;
}

// Step 3: Define the type for props if there are any. In this case, the component does not receive any props.
interface CounterProps {}

// Step 4: Update the class component to use the defined state and prop types.
class Counter extends Component<CounterProps, CounterState> {
  // Step 5: Initialize the state with the appropriate type.
  state: CounterState = {
    count: 0
  };

  // Step 6: Type the increment method.
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  // Step 7: Update the render method with proper typing.
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
