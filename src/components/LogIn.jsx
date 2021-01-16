import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

export default function LogIn() {
  const [formInput, setFormInput] = useState({
    email: "Amanda.Heideman@yh.nackademin.se",
    password: "javascriptoramverk"
  })

  const history = useHistory();

  function handleOnChange(e){
    e.preventDefault();
    setFormInput({...formInput, [e.target.email]: e.target.password })
  }

  function handleOnSubmit(e){
    e.preventDefault()
    const url = "https://frebi.willandskill.eu/api-token-auth/"
    const payload = {
      email: formInput.email,
      password: formInput.password
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(data => {
      localStorage.setItem("Amanda", data.token)
      history.push('/customers')
    })
  }

  return (
    <div>
      <p>Log In</p>
      <form onSubmit={handleOnSubmit}>
        <label>Email: </label>
        <input type="text" onChange={handleOnChange} value={formInput.email} />
        <label>Password: </label>
        <input onChange={handleOnChange} value= {formInput.password} />
        <button type="submit">Log in</button>
      </form>
    </div>
  )
}
