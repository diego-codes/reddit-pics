import { Breakpoint, mediaQuery } from './responsive'

export enum Size {
  H1,
  H2,
  H3,
  H4,
  H5,
  Small,
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
    [Size.H1]: '2.488rem',
    [Size.H2]: '2.074rem',
    [Size.H3]: '1.728rem',
    [Size.H4]: '1.44rem',
    [Size.H5]: '1.2rem',
    [Size.Small]: '0.833rem',
  },
}

export const getTypeScaleStyles = (scale: TypographyScale) =>
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

export const getResponseTypeScaleStyles = (
  breakpoint: Breakpoint,
  scale: TypographyScale,
) => `
  ${mediaQuery(breakpoint)} {
    ${getTypeScaleStyles(scale)}
  }
`

export const getResponseTypeStyle = (size: Size) => `
  font-size: ${DefaultScale[size]};

  ${Object.entries(ResponsiveScales).map(
    ([breakpoint, sizes]) => `
      ${mediaQuery(breakpoint as Breakpoint)} {
        font-size: ${sizes[size]};
      }
    `,
  )}
`
