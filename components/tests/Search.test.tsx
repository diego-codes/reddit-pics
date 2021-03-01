import Search from '../Search'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

it('accepts an initial value', () => {
  render(<Search initialValue="my search val" />)
  expect(screen.getByRole('searchbox', { name: /search pics/i })).toHaveValue(
    'my search val',
  )
})

it('submits typed search', () => {
  const onSubmitMock = jest.fn()
  render(<Search onSubmit={onSubmitMock} />)

  userEvent.type(
    screen.getByRole('searchbox', { name: /search pics/i }),
    'new search',
  )
  userEvent.click(screen.getByRole('button', { name: /search/i }))
  expect(onSubmitMock).toHaveBeenCalledWith('new search')
})
