export const truncateNumber = (number: number) =>
  new Intl.NumberFormat('en', { notation: 'compact' }).format(number)
