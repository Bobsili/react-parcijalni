import "./Form.css"
import React, { useState } from 'react';
import { Button } from "./Button"



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

  const handleClick = () => {
    console.log(formState);
    return fetch("")
  }

  return (
    <>
      <h1>GitHub repos:</h1>
      <form onSubmit={handleSubmit} >
        <div className="label">{label}</div>
        <input onChange={handleChange} value={formState} placeholder="Search..."></input>
        <Button onClick={handleClick} />
      </form>
    </>
  );

}

