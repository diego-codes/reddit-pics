import styled from 'styled-components'

const TextInput = styled.input`
  background-color: ${props => props.theme.bg01};
  border: 1px solid ${props => props.theme.bg03};
  color: inherit;
  font: inherit;
  padding: 0.1em 0.4em;
  border-radius: 2px;

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${props => props.theme.primary};
  }
`
export default TextInput
