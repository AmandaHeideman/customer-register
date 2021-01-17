import styled from 'styled-components';
import colors from '../Colors';

const NavigationStyled = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  background-color: ${colors.dark};
  margin-right: 10px;
  
  li{
    margin-left: 1.2rem;
    a{
      text-decoration: none;
      color: ${colors.light};

      &:hover, &:focus{
        color: ${colors.main};
      }
    }
  }
`

export default NavigationStyled;
