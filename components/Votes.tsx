import { FC } from 'react'
import { truncateNumber } from '../utils/i18n.utils'

const Votes: FC<{ children: number }> = ({ children }) => (
  <span>Votes: {truncateNumber(children)}</span>
)

export default Votes
