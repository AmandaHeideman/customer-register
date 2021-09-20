import React from 'react'
import UserData from './UserData'

export default function IsLoggedIn() {
  return (
    <div>
      {localStorage.getItem("Amanda")? <UserData /> : <> </>}
    </div>
    
  )
}
