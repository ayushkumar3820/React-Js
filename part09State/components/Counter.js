import React, { useState } from 'react'; // Corrected import for useState

const state=[1,'Ayush'];
export default function Counter() {
  const [name, setName] = useState(0); // Initialize name as a number (0)
  const [count,SetCount]=useState(0);

  console.log('ayush');

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{name}</h1>
      <h2>{count}</h2>
      <button
        onClick={() => {
            SetCount('ayush kumar');
          setName(name + 1);
          setName(name + 1);
          setName(name + 1); // Correct increment logic
        }}
      >
        Increase the value
      </button>
    </div>
  );
}
