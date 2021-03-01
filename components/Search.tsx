import { FC, useState, FormEventHandler, ChangeEventHandler } from 'react'
import styled from 'styled-components'
import SearchIcon from '../icons/SearchIcon'
import Button from './Button'
import TextInput from './TextInput'

const Form = styled.form`
  display: flex;
  align-items: stretch;

  > *:first-child {
    margin-inline-end: 0.3em;
  }
`

type SearchProps = {
  initialValue?: string
  onSubmit?: (value: string) => void
}

const Search: FC<SearchProps> = ({
  initialValue = '',
  onSubmit = () => {},
}) => {
  const [value, setValue] = useState(initialValue)

  const handleSubmit: FormEventHandler = event => {
    event.preventDefault()
    onSubmit(value)
  }

  const handleValueChage: ChangeEventHandler<HTMLInputElement> = event => {
    setValue(event.target.value)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <TextInput
        id="img-search"
        aria-label="Search pics"
        placeholder="Search pics"
        type="search"
        value={value}
        onChange={handleValueChage}
      />
      <Button type="submit" aria-label="Search">
        <SearchIcon />
      </Button>
    </Form>
  )
}

export default Search
