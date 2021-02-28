import { FC, MouseEventHandler } from 'react'

const Button: FC<{ onClick: MouseEventHandler }> = ({ children, onClick }) => (
  <button onClick={e => onClick(e)}>Buttxn {children}</button>
)

export default Button
