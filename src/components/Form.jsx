import "./Form.css"
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

  const handleChange = (e) => {
    setFormState(e.target.value)
  }

  const handleClick = (e) => {
    console.log('search...');
  }

  return (
    <>
      <h1>GitHub repos:</h1>
      <form onSubmit={handleSubmit} >
        <div className="label">{label}</div>
        <input onChange={handleChange} value={formState} placeholder="Search..."></input>
        <button onClick={handleClick} type='submit'>GO!</button>
      </form>
    </>
  );

}

