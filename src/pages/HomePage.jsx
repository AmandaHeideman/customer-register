import React from 'react'
import LogIn from '../components/LogIn'
import {useHistory} from 'react-router-dom';


export default function HomePage() {
  const history = useHistory();
  return (
    <div>
      {localStorage.getItem("WEBB20") ? history.push('/customers') : <LogIn />}
    </div>
  )
}
