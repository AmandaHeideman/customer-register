import React, {useState, useEffect} from 'react'

export default function UserData() {
  const [me, setMe] = useState({});
  useEffect( () => {
    getMe();
  }, [])
  
  function getMe() {
    const url = "https://frebi.willandskill.eu/api/v1/me/"
    const token = localStorage.getItem("WEBB20")
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
    <div>
      <p>Name: {me.firstName} {me.lastName}</p>
      <p>Email: {me.email}</p>
    </div>
  )
}
