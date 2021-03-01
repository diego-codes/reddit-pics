import { FC } from 'react'
import styled from 'styled-components'

const Input = styled.input`
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

type TextInputProps = {
  label: string
  id: string
  type: 'search' | 'text' | 'number'
  placeholder?: string
}

const TextInput: FC<TextInputProps> = ({
  label,
  type,
  id,
  placeholder,
  ...rest
}) => (
  <Input
    aria-label={label}
    id={id}
    placeholder={placeholder || label}
    type={type}
    {...rest}
  />
)
export default TextInput
