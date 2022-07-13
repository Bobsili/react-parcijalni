import { useState, useEffect } from "react";

// function getPhoto() {
//   return fetch("https://api.github.com/users/${username}")
//     .then((response) => {
//       return response.json()
//     })
// }

export function GitHubApi() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  // const [name, setName] = useState('')
  // const [location, setLocation] = useState('')
  // const [bio, setBio] = useState('')
  // const [avatarUrl, setAvatarUrl] = useState('')

  useEffect(() => {
    fetch('https://api.github.com/users/reduxjs')
      .then(res => res.json())
      .then((data) => {
        setData(data)
        console.log(data);
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

  // const setData = (name, location, bio, avatar_url) => {
  //   setName(name)
  //   setLocation(location)
  //   setBio(bio)
  //   setAvatarUrl(avatar_url)
  // }

  return (
    <div>
      <figure>
        <h3>{data.name}</h3>
        <img src={data.avatar_url} alt={data.bio}></img>
        <figcaption>{data.login}</figcaption>

      </figure>
    </div>
  );
}
