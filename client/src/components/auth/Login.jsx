import React, { useState } from 'react'
import { baseUrl, headers } from '../../globals'

const Login = ({ loginUser }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = e => {
    e.preventDefault();
    fetch(baseUrl + "/login", {
      method: "POST",
      headers,
      body: JSON.stringify({ username, password })
    })
      .then(resp => resp.json())
      .then(data => {
        if(data.errors) {
          console.log(data.errors)
        } else {
          loginUser(data)
        }
      })
  }

  return (
    <div>
      <h2>Login</h2>
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
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}

export default Login