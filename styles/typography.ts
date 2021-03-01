import { Breakpoint, mediaQuery } from './responsive'

export enum Size {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  Small = 'small',
}

type TypographyScale = {
  [size in Size]: string
}

export const DefaultScale: TypographyScale = {
  [Size.H1]: '1.383rem',
  [Size.H2]: '1.296rem',
  [Size.H3]: '1.215rem',
  [Size.H4]: '1.138rem',
  [Size.H5]: '1.067rem',
  [Size.Small]: '0.937rem',
}

type ResponsiveTyporaphyScale = {
  [breakpoint in Breakpoint]?: TypographyScale
}
export const ResponsiveScales: ResponsiveTyporaphyScale = {
  [Breakpoint.MD]: {
    [Size.H1]: '1.802rem',
    [Size.H2]: '1.602rem',
    [Size.H3]: '1.424rem',
    [Size.H4]: '1.266rem',
    [Size.H5]: '1.125rem',
    [Size.Small]: '0.889rem',
  },
}

export const getTypographyScaleStyles = (scale: TypographyScale) =>
  Object.entries(scale)
    .map(
      ([selector, size]) =>
        `
          ${selector} {
            font-size: ${size};
          }
        `,
    )
    .join('\n')

export const getResponsiveTypographyScaleStyles = (
  breakpoint: Breakpoint,
  scale: TypographyScale,
) => `
  ${mediaQuery(breakpoint)} {
    ${getTypographyScaleStyles(scale)}
  }
`

export const getSingleResponsiveTypographyStyle = (size: Size) => `
  font-size: ${DefaultScale[size]};

  ${Object.entries(ResponsiveScales).map(
    ([breakpoint, sizes]) => `
      ${mediaQuery(breakpoint as Breakpoint)} {
        font-size: ${sizes[size]};
      }
    `,
  )}
`
