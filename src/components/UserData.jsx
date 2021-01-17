import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import UserDivStyled from './UserDivStyled';

export default function UserData() {
  const UserDataStyled = styled(UserDivStyled)`
    width: 30%;
    float: right;
    margin: 30px;
  `

  const [me, setMe] = useState({});
  useEffect( () => {
    getMe();
  }, [])
  
  function getMe() {
    const url = "https://frebi.willandskill.eu/api/v1/me/"
    const token = localStorage.getItem("Amanda")
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(data => setMe(data))
  }
  return (
    <UserDataStyled>
      <p>Name: {me.firstName} {me.lastName}</p>
      <p>Email: {me.email}</p>
    </UserDataStyled>
  )
}
