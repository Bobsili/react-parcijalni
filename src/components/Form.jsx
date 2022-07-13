import React, { useState } from 'react';



export function Form({ label }) {
  const [username, setUsername] = useState('')
  const [formState, setFormState] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Form submitted, ${formState}`);
  }

  // const onClick = (e) => {
  //   e.preventDefault();
  //   setUsername('');
  // }

  return (
    <div>
      <h1>GitHub repos:</h1>
      <form onSubmit={handleSubmit} >
        <div className="label">{label}</div>
        <input onChange={(e) => setFormState(e.target.value)} value={formState} placeholder="Facebook..."></input>
        <button type='submit'>GO!</button>
      </form>
    </div>
  );

}

