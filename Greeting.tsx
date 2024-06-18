// Step 1: Import necessary modules from React and define the component as a TypeScript file.
import React from 'react';

// Step 2: Define the type for the props using an interface.
interface GreetingProps {
  name: string;
}

// Step 3: Update the functional component to use the defined prop types.
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;