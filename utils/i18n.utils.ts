import { formatDistanceToNow } from 'date-fns'

const numberIntl = new Intl.NumberFormat('en', { notation: 'compact' })

export const truncateNumber = (number: number) => numberIntl.format(number)

export const distranceFromNow = (date: number | Date) =>
  formatDistanceToNow(date)
