import { render, screen } from '@testing-library/react'
import Button from './Button'

it('accepts children', () => {
  render(<Button>Hello world</Button>)
  expect(
    screen.getByRole('button', { name: /^button hello world/i }),
  ).toBeEnabled()
})
