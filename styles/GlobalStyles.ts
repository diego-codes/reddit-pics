import { createGlobalStyle } from 'styled-components'
import { Breakpoint } from './responsive'
import {
  DefaultScale,
  getResponseTypeScaleStyles,
  getTypeScaleStyles,
  ResponsiveScales,
} from './typography'

export default createGlobalStyle`
  *, *:before, *:after {
      box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-family: 'Inter', 'Helvetica Neue', 'Arial', sans-serif;
    font-weight: 300;
    line-height: 1.75;
    
    background-color: ${props => props.theme.bg02};
    color: ${props => props.theme.text01}
  }
  
  body {
    background-color: ${props => props.theme.bg02};
  }

  body, ol, ul {
    margin: 0;
    padding: 0;
  }

  p {
    margin-block-end: 1rem;
  }

  h1, h2, h3, h4, h5 {
    margin-block-start: 3rem;
    margin-block-end: 1.38rem;
    font-weight: inherit;
    line-height: 1.3;
    color: ${props => props.theme.text02}
  }

  h1 {
    margin-top: 0;
  }

  ${getTypeScaleStyles(DefaultScale)}

  ${Object.entries(ResponsiveScales)
    .map(([breakpoint, sizes]) =>
      getResponseTypeScaleStyles(breakpoint as Breakpoint, sizes),
    )
    .join('\n')}

  ol, ul {
    list-style: none;
  }

  img {
    max-inline-size: 100%;
    block-size: auto;
  }

  a:any-link  {
    color: inherit;
    
    &:focus {
      outline: 2px solid ${props => props.theme.primary};
    }
  }

  svg {
    fill: currentColor;
    max-inline-size: 100%;
    block-size: auto;
  }
`
