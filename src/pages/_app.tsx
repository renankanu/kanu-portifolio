import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import GlobalStyle from '../styles/Global'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const CustomApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    AOS.init({
      duration: 1800,
      once: true,
    })
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default CustomApp
