import Link from 'next/link'
import { FC } from 'react'
import styled, { css } from 'styled-components'

export const hoverStyles = css`
  background-size: 100% 100%;
  color: ${props => props.theme.bg01};
`

export const styles = css`
  display: inline-block;
  padding-inline-start: 0.2em;
  padding-inline-end: 0.2em;
  background: linear-gradient(
      transparent 0%,
      ${props => props.theme.primary} 0%
    )
    no-repeat;
  background-size: 100% 2px;
  background-position: bottom;
  transition: background-size 150ms, color 150ms;
  text-decoration: none;

  &:hover {
    ${hoverStyles}
  }
`

const Styled = styled.a`
  ${styles}
`

type StyledLinkProps = {
  href: string
}

const StyledLink: FC<StyledLinkProps> = ({ href, ...rest }) => (
  <Link href={href} passHref>
    <Styled {...rest} />
  </Link>
)

export default StyledLink
