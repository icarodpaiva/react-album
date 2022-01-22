import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Button = styled.button`
  display: block;
  margin-left: 10px;
  padding: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  background-color: aliceblue;
  outline: 0;
  cursor: pointer;

  &:hover {
    background-color: aqua;
  }
`

export const Voltar = () => {
  const navigate = useNavigate()

  return <Button onClick={() => navigate(-1)}>Voltar</Button>
}
