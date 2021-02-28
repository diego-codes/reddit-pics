export enum Breakpoint {
  SM = '36',
  MD = '48',
  LG = '62',
  XL = '75',
  XXL = '87.5',
}

export const mediaQuery = (size: Breakpoint | number) => `
  @media (min-width: ${size}em)
`

export default mediaQuery
