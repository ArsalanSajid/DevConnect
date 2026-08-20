import { useState } from "react";

function StateDemo() {
  const [name, setName] = useState("");

  return (
    <div>
     <input
    type="text"
    placeholder="Enter your name"
    onChange={(event) => {
        setName(event.target.value);
    }}
/>


      <h2>Hello {name}</h2>
    </div>
  );
}

export default StateDemo;