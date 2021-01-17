import React from "react";
import { Link, useHistory } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";
import styled from "styled-components";
import colors from "../Colors";


export default function Navigation() {
  const Nav = styled.div`
    background-color: ${colors.dark};
    display: flex;
    justify-content: flex-end;
  `;
  const history = useHistory();

  function handleOnClick(e){
    e.preventDefault();
    localStorage.removeItem("Amanda");
    history.push('/');
    window.location.reload();
  }
  return (
    <Nav>
      <NavigationStyled>
        <li>
          <Link to="/customers">Customers</Link>
        </li>
        <li>
          <Link to="/customers/create">Create customer</Link>
        </li>
        <li>
          <Link onClick={handleOnClick}>Log out</Link>
        </li>
      </NavigationStyled>
    </Nav>
  );
}
