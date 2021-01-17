import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import UserDivStyled from './UserDivStyled';
import styled from 'styled-components';
import ButtonStyled from './ButtonStyled';

export default function LogIn() {
  const LoginStyled = styled(UserDivStyled)`
    margin: auto;
  `

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
      window.location.reload();
    })
  }

  return (
    <LoginStyled>
      <h1>Log In</h1>
      <form onSubmit={handleOnSubmit}>
        <label>Email: </label>
        <input type="text" onChange={handleOnChange} value={formInput.email} />
        <label>Password: </label>
        <input type="password" onChange={handleOnChange} value= {formInput.password} />
        <ButtonStyled type="submit">Log in</ButtonStyled>
      </form>
    </LoginStyled>
  )
}
