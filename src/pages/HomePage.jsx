import React from 'react'
import LogIn from '../components/LogIn'
import {useHistory} from 'react-router-dom';
import DivStyled from '../components/DivStyled';


export default function HomePage() {
  const history = useHistory();
  return (
    <DivStyled>
      {localStorage.getItem("Amanda") ? history.push('/customers') : <LogIn />}
    </DivStyled>
  )
}
