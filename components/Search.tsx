import { FC, useState, FormEventHandler, ChangeEventHandler } from 'react'
import TextInput from './TextInput'

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
    <form onSubmit={handleSubmit}>
      <TextInput
        id="img-search"
        label="Search pics"
        type="search"
        value={value}
        onChange={handleValueChage}
      />
    </form>
  )
}

export default Search
