import styled from 'styled-components';
import colors from '../Colors';

const ButtonStyled = styled.button`
background-color: ${colors.lacc};
color: ${colors.light};
font-family: 'Montserrat';
padding: 10px;
border: none;
border-radius: 5px;
font-size: 1em;
margin: 5px;
  &:hover, &:focus{
    background-color: ${colors.dacc};
    cursor: pointer;
  }
`

export default ButtonStyled;