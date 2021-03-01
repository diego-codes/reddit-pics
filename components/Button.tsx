import styled from 'styled-components'

const Button = styled.button`
  appearance: none;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.bg01};
  border: 0;
  border-radius: 2px;
  cursor: pointer;
`

export default Button
