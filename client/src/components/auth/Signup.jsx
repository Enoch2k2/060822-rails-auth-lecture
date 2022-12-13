import React, { useState } from 'react'
import { headers } from '../../globals'

const Signup = ({ loginUser }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = e => {
    e.preventDefault();
    const user = {
      user: {
        username,
        password
      }
    }

    // make a post request to /signup
    fetch("/signup", {
      method: "POST",
      headers,
      body: JSON.stringify(user)
    })
      .then(resp => resp.json())
      .then(data => {
        if(data.errors) {
          console.log(data.errors)
        } else {
          loginUser(data);
        }
      })
    // loginUser
  }

  return (
    <div>
      <h2>Create Account</h2>
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="username">Username: </label>
          <input 
            type="text"
            name="username"
            id="username"
            value={ username }
            onChange={ e => setUsername(e.target.value) }
            />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input 
            type="password" 
            name="password" 
            id="password" 
            value={ password }
            onChange={ e => setPassword(e.target.value) }
          />
        </div>
        <input type="submit" value="Create Account" />
      </form>
    </div>
  )
}

export default Signup