import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap/uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
  }
  body {
    background-image: ${({ theme }) => (theme.isDark ? 'url(/images/dark-bg.jpg)' : 'url(/images/light-bg.jpg)' )};
    background-repeat: no-repeat fixed;
    background-image: fit;
    background-size: cover;
    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
