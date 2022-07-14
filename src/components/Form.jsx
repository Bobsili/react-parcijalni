import "./Form.css";
import React, { useState, useEffect } from 'react';
import { Button } from "./Button";
import axios from "axios";


export function Form({ label }) {
  // const [username, setUsername] = useState('')
  const [formState, setFormState] = useState('');
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [repos, setRepos] = useState([])


  useEffect(() => {
    fetch(`https://api.github.com/users/${formState}`)
      .then(res => res.json())
      .then((data) => {
        setData(data)
      })
      .catch(() => {
        setError(new Error('Something went wrong'))
      })
  }, []);

  if (error !== null) {
    return <div>Something went wrong!...</div>
  }

  if (data === null) {
    return <div>Loading...</div>
  }
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

  const handleClick = async () => {
    console.log(formState);

    try {
      const result = await axios(`https://api.github.com/users/${formState}/repos`);
      setRepos(result)
    } catch (err) {
      console.log(err);
    }
  }
  console.log(data);
  console.log(repos.data);

  const listRepos = repos.length !== 0 ? (repos.data.map((item) =>
    <li>{item.name}</li>)) : (<li>No repos</li>)

  return (
    <>
      <h1>GitHub repos:</h1>
      <form onSubmit={handleSubmit} >
        <div className="label">{label}</div>
        <input onChange={handleChange} value={formState} placeholder="Search..."></input>
        <Button onClick={handleClick} />
      </form>
      <figure>
        <h2>{data.name}</h2>
        <img src={data.avatar_url} alt={data.bio}></img>
        <figcaption>{data.bio}</figcaption>
        <h3>Repositories:</h3>
      </figure>
      <ul>
        {listRepos}
      </ul>
    </>
  );
}
