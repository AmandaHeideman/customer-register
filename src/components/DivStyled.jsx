import styled from 'styled-components';
import colors from '../Colors';

const DivStyled = styled.div`
  margin: 30px;
  border: 5px solid ${colors.main};
  border-radius: 10px;
  width: 50%;
  padding: 10px;
    td{
      padding: 5px;
    }
    label, input{
      margin: 5px;
    }
    
`

export default DivStyled;