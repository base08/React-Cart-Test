import React from "react";

function Greeter({ name, excitment = 1, age = 18 }) {
  const greet = () => {
    alert(`You clicked the button, ${name}`);
  };
  return (
    <div className="Greeter">
      <h1>
        Hey there {name}
        {"!".repeat(excitment)}
      </h1>
      <p>You are {age} years old!</p>
      <button onClick={greet}>Click Me</button>
    </div>
  );
}

export default Greeter;
